import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex, encodeFunctionData, decodeEventLog } from "viem";

describe("Enhancements v5", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount, seller] = await viem.getWalletClients();

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

        const mock1155 = await viem.deployContract("MockERC1155");

        return {
            owner,
            otherAccount,
            seller,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            registry,
            vault,
            mockPriceFeed,
            mock1155
        };
    }

    describe("BragNFT: Price Feed Staleness", async function () {
        it("should revert if price feed is stale", async function () {
            const { bragNFT, mockPriceFeed } = await deployFixture();
            const testClient = await viem.getTestClient();

            // Set updated at to 26 hours ago
            const now = BigInt(Math.floor(Date.now() / 1000));
            await mockPriceFeed.write.setUpdatedAt([now - (26n * 3600n)]);

            await assert.rejects(
                bragNFT.write.donate(["Stale", "uri"], { value: parseEther("0.01") }),
                /Stale price feed/
            );
        });

        it("should revert if price is zero", async function () {
            const { bragNFT, mockPriceFeed } = await deployFixture();

            await mockPriceFeed.write.setPrice([0n]);

            await assert.rejects(
                bragNFT.write.donate(["Zero", "uri"], { value: parseEther("0.01") }),
                /Invalid price/
            );
        });
    });

    describe("BragNFT: Dynamic SVG Colors", async function () {
        it("should use different colors for different tax statuses", async function () {
            const { bragNFT, owner } = await deployFixture();

            await bragNFT.write.donate(["Pending", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            const uriPending = await bragNFT.read.tokenURI([tokenId]);
            const svgPending = atob(JSON.parse(atob(uriPending.split(",")[1])).image.split(",")[1]);
            assert.ok(svgPending.includes('fill="#6366f1"'), "Pending should be Indigo");

            await bragNFT.write.setTaxStatus([tokenId, 1]); // Verified
            const uriVerified = await bragNFT.read.tokenURI([tokenId]);
            const svgVerified = atob(JSON.parse(atob(uriVerified.split(",")[1])).image.split(",")[1]);
            assert.ok(svgVerified.includes('fill="#22c55e"'), "Verified should be Green");

            await bragNFT.write.setTaxStatus([tokenId, 2]); // Claimed
            const uriClaimed = await bragNFT.read.tokenURI([tokenId]);
            const svgClaimed = atob(JSON.parse(atob(uriClaimed.split(",")[1])).image.split(",")[1]);
            assert.ok(svgClaimed.includes('fill="#eab308"'), "Claimed should be Gold");

            await bragNFT.write.setTaxStatus([tokenId, 3]); // Flagged
            const uriFlagged = await bragNFT.read.tokenURI([tokenId]);
            const svgFlagged = atob(JSON.parse(atob(uriFlagged.split(",")[1])).image.split(",")[1]);
            assert.ok(svgFlagged.includes('fill="#ef4444"'), "Flagged should be Red");
        });
    });

    describe("NFTMarketplace: Batch Updates and Rejections", async function () {
        it("should batch update offers", async function () {
            const { marketplace, bragNFT, bragToken, otherAccount, owner } = await deployFixture();

            // Create 2 NFTs
            await bragNFT.write.donate(["n1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["n2", ""], { value: parseEther("0.01") });

            // Fund buyer
            await bragToken.write.transfer([otherAccount.account.address, parseEther("1000")]);
            await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: otherAccount.account });

            // Create 2 offers
            await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: otherAccount.account });
            await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: otherAccount.account });

            // Batch update
            await marketplace.write.batchUpdateOffers([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                [1n, 1n],
                [parseEther("15"), parseEther("25")],
                [0n, 0n]
            ], { account: otherAccount.account });

            const o1 = await marketplace.read.offers([bragNFT.address, 0n, otherAccount.account.address]);
            const o2 = await marketplace.read.offers([bragNFT.address, 1n, otherAccount.account.address]);

            assert.equal(o1[0], parseEther("15"));
            assert.equal(o2[0], parseEther("25"));
            assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("40"));
        });

        it("should batch reject offers", async function () {
            const { marketplace, bragNFT, bragToken, otherAccount, owner, seller } = await deployFixture();

            // Mint NFT for seller
            await bragNFT.write.donateTo([seller.account.address, "n1", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Fund buyer
            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            // Create offer
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50")], { account: otherAccount.account });

            // Batch reject (as seller)
            await marketplace.write.batchRejectOffers([
                [bragNFT.address],
                [tokenId],
                [otherAccount.account.address]
            ], { account: seller.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, otherAccount.account.address]);
            assert.equal(offer[0], 0n);
            assert.equal(await bragToken.read.balanceOf([otherAccount.account.address]), parseEther("100"));
        });
    });

    describe("ExhibitVault: Batch Exhibition and Extensions", async function () {
        it("should batch exhibit ERC721 tokens", async function () {
            const { bragNFT, vault, owner } = await deployFixture();

            await bragNFT.write.donate(["n1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["n2", ""], { value: parseEther("0.01") });

            await bragNFT.write.setApprovalForAll([vault.address, true]);

            await vault.write.batchExhibit721([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                3600n
            ]);

            assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault.address));
            assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault.address));
            assert.ok(await vault.read.expiry721([bragNFT.address, 0n]) > 0n);
        });

        it("should extend exhibition duration", async function () {
            const { bragNFT, vault, owner } = await deployFixture();

            await bragNFT.write.donate(["n1", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragNFT.write.approve([vault.address, tokenId]);
            await bragNFT.write.safeTransferFrom([owner.account.address, vault.address, tokenId]);

            const initialExpiry = await vault.read.expiry721([bragNFT.address, tokenId]);

            await vault.write.extendExhibition721([bragNFT.address, tokenId, 1000n]);

            const newExpiry = await vault.read.expiry721([bragNFT.address, tokenId]);
            assert.ok(newExpiry > initialExpiry || (initialExpiry === 0n && newExpiry > 0n));
        });
    });
});
