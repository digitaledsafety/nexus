import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Marketplace Enhancements", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount, buyer2] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        return {
            owner,
            otherAccount,
            buyer2,
            bragToken,
            marketplace,
            bragNFT
        };
    }

    describe("Offer Expiration", async function () {
        it("should allow creating an offer with expiration", async function () {
            const { otherAccount, bragNFT, marketplace, bragToken } = await deployFixture();

            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            const expiry = BigInt(Math.floor(Date.now() / 1000) + 3600);
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: otherAccount.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, otherAccount.account.address]);
            assert.equal(offer[3], expiry);
        });

        it("should fail to accept an expired offer", async function () {
            const { otherAccount, bragNFT, marketplace, bragToken } = await deployFixture();

            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            // Create offer that expires soon (but enough to be valid for creation)
            const publicClient = await viem.getPublicClient();
            const block = await publicClient.getBlock();
            const expiry = block.timestamp + 5n;
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: otherAccount.account });

            // Mine blocks to advance time
            const testClient = await viem.getTestClient();
            await testClient.increaseTime({ seconds: 10 });
            await testClient.mine({ blocks: 1 });

            // Should fail to accept
            await assert.rejects(
                marketplace.write.acceptOffer([bragNFT.address, tokenId, otherAccount.account.address]),
                /Offer expired/
            );
        });
    });

    describe("Batch Fulfillment", async function () {
        it("should allow batch accepting multiple offers", async function () {
            const { owner, otherAccount, buyer2, bragNFT, marketplace, bragToken } = await deployFixture();

            // Mint 2 NFTs for owner
            await bragNFT.write.donate(["NFT1", "uri1"], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT2", "uri2"], { value: parseEther("0.01") });

            // Approve marketplace
            await bragNFT.write.setApprovalForAll([marketplace.address, true]);

            // Setup offers
            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });
            await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("40")], { account: otherAccount.account });

            await bragToken.write.transfer([buyer2.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer2.account });
            await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("60")], { account: buyer2.account });

            // Batch accept
            await marketplace.write.batchAcceptOffers([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                [otherAccount.account.address, buyer2.account.address]
            ]);

            assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(otherAccount.account.address));
            assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(buyer2.account.address));
        });
    });
});
