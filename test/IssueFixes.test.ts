import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex, encodeFunctionData, decodeEventLog } from "viem";

describe("Issue Fixes", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
        const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

        return {
            owner,
            otherAccount,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            registry,
            vault,
            mockPriceFeed
        };
    }

    describe("Marketplace Offers", async function () {
        it("should allow creating an offer with BRAG", async function () {
            const { otherAccount, bragToken, marketplace, bragNFT } = await deployFixture();

            // Mint NFT for owner
            await bragNFT.write.donate(["Impact Message", "ipfs://test"], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Transfer BRAG to otherAccount
            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);

            // Other account approves marketplace
            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: otherAccount.account });

            // Create offer
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50")], { account: otherAccount.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, otherAccount.account.address]);
            assert.equal(offer[0], parseEther("50"));
        });

        it("should enforce minOfferPrice", async function () {
            const { otherAccount, marketplace, bragNFT, bragToken } = await deployFixture();

            await marketplace.write.setMinOfferPrice([parseEther("10")]);

            // Mint NFT
            await bragNFT.write.donate(["Msg", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Fund other account
            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            // Should fail if below minimum
            await assert.rejects(
                marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("5")], { account: otherAccount.account }),
                /Offer price below minimum/
            );

            // Should succeed if at or above minimum
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: otherAccount.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, otherAccount.account.address]);
            assert.equal(offer[0], parseEther("10"));
        });
    });

    describe("Treasury Batch Proposals", async function () {
        it("should support proposing and executing a batch of transactions", async function () {
            const { owner, otherAccount, treasury } = await deployFixture();
            const publicClient = await viem.getPublicClient();

            // Fund treasury
            await owner.sendTransaction({
                to: treasury.address,
                value: parseEther("1")
            });

            const initialBalanceOther = await publicClient.getBalance({ address: otherAccount.account.address });

            const targets = [otherAccount.account.address, otherAccount.account.address] as address[];
            const values = [parseEther("0.1"), parseEther("0.2")];
            const datas = ["0x" as Hex, "0x" as Hex];
            const nonce = 0n;

            await treasury.write.propose([targets, values, datas, nonce]);

            const proposalId = 0n;
            await treasury.write.executeProposal([proposalId]);

            const finalBalanceOther = await publicClient.getBalance({ address: otherAccount.account.address });
            assert.equal(finalBalanceOther - initialBalanceOther, parseEther("0.3"));

            const proposal = await treasury.read.getProposal([proposalId]);
            assert.equal(proposal[3], true); // executed
        });

        it("should execute withdrawal when threshold is 1", async function () {
            const { owner, treasury, otherAccount } = await deployFixture();
            const publicClient = await viem.getPublicClient();

            // Fund treasury
            await owner.sendTransaction({
                to: treasury.address,
                value: parseEther("1")
            });

            const initialBalance = await publicClient.getBalance({ address: otherAccount.account.address });
            const nonce = BigInt(Math.floor(Date.now() / 1000));

            // Execute withdrawal
            await treasury.write.execute([otherAccount.account.address, parseEther("0.5"), "0x", nonce]);

            const finalBalance = await publicClient.getBalance({ address: otherAccount.account.address });
            assert.equal(finalBalance - initialBalance, parseEther("0.5"));
        });
    });

    describe("BragNFT Enhancements", async function () {
        it("should detect .webp as multimedia", async function () {
            const { bragNFT } = await deployFixture();

            await bragNFT.write.donate(["Test", "https://example.com/art.webp"], { value: parseEther("0.01") });
            const tokenId = 0n;

            const uri = await bragNFT.read.tokenURI([tokenId]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "animation_url should be set for .webp");
            assert.equal(decoded.animation_url, "https://example.com/art.webp");
        });

        it("should emit PriceFeedFailed if price feed reverts", async function () {
            const { owner, bragNFT, mockPriceFeed } = await deployFixture();

            // Set mockPriceFeed to revert
            await mockPriceFeed.write.setRevert([true]);

            const txHash = await bragNFT.write.donate(["Test", "uri"], { value: parseEther("0.01") });
            const publicClient = await viem.getPublicClient();
            const receipt = await publicClient.getTransactionReceipt({ hash: txHash });

            const logs = receipt.logs.map(log => {
                try {
                    return decodeEventLog({
                        abi: bragNFT.abi,
                        data: log.data,
                        topics: log.topics,
                    });
                } catch {
                    return null;
                }
            }).filter(l => l !== null);

            assert.ok(logs.some(l => l.eventName === "PriceFeedFailed"), "Should have emitted PriceFeedFailed");
        });
    });

    describe("ExhibitVault Refactoring", async function () {
        it("should correctly handle deposits after refactoring", async function () {
            const { owner, bragNFT, vault } = await deployFixture();

            await bragNFT.write.donate(["Exhibit", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragNFT.write.approve([vault.address, tokenId]);

            const duration = 3600n;
            const data32 = "0x" + duration.toString(16).padStart(64, '0') as Hex;

            await bragNFT.write.safeTransferFrom([owner.account.address, vault.address, tokenId, data32]);

            const storedOwner = await vault.read.owner721([bragNFT.address, tokenId]);
            assert.equal(getAddress(storedOwner), getAddress(owner.account.address));

            const expiry = await vault.read.expiry721([bragNFT.address, tokenId]);
            assert.ok(expiry > 0n);
        });
    });
});
