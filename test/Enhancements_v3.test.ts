import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex } from "viem";

describe("Enhancements v3", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount, targetBuyer] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        return {
            owner,
            otherAccount,
            targetBuyer,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            mockPriceFeed
        };
    }

    describe("BragNFT Price Feed Staleness", async function () {
        it("should revert if price is stale", async function () {
            const { bragNFT, mockPriceFeed } = await deployFixture();
            const publicClient = await viem.getPublicClient();
            const now = BigInt(Math.floor(Date.now() / 1000));

            // Set updatedAt to 26 hours ago
            await mockPriceFeed.write.setUpdatedAt([now - (26n * 3600n)]);

            await assert.rejects(
                bragNFT.write.donate(["Test", "uri"], { value: parseEther("0.01") }),
                /Stale price feed/
            );
        });

        it("should revert if price is invalid (zero)", async function () {
            const { bragNFT, mockPriceFeed } = await deployFixture();

            await mockPriceFeed.write.setPrice([0n]);

            await assert.rejects(
                bragNFT.write.donate(["Test", "uri"], { value: parseEther("0.01") }),
                /Invalid price/
            );
        });
    });

    describe("Marketplace Private Listings", async function () {
        it("should allow creating a private listing and restrict purchase", async function () {
            const { owner, otherAccount, targetBuyer, marketplace, bragNFT, bragToken } = await deployFixture();

            // Mint NFT for owner
            await bragNFT.write.donate(["Impact Message", "ipfs://test"], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Approve marketplace
            await bragNFT.write.approve([marketplace.address, tokenId]);

            // Create private listing
            await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("100"), targetBuyer.account.address]);

            // Other account (not target) tries to buy
            await bragToken.write.transfer([otherAccount.account.address, parseEther("200")]);
            await bragToken.write.approve([marketplace.address, parseEther("200")], { account: otherAccount.account });

            await assert.rejects(
                marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address], { account: otherAccount.account }),
                /Private listing: not the target buyer/
            );

            // Target buyer buys successfully
            await bragToken.write.transfer([targetBuyer.account.address, parseEther("200")]);
            await bragToken.write.approve([marketplace.address, parseEther("200")], { account: targetBuyer.account });

            await marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address], { account: targetBuyer.account });

            const newOwner = await bragNFT.read.ownerOf([tokenId]);
            assert.equal(getAddress(newOwner), getAddress(targetBuyer.account.address));
        });

        it("should allow updating a listing price", async function () {
            const { owner, marketplace, bragNFT } = await deployFixture();

            await bragNFT.write.donate(["Impact Message", "ipfs://test"], { value: parseEther("0.01") });
            const tokenId = 0n;
            await bragNFT.write.approve([marketplace.address, tokenId]);

            await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("100")]);

            // Update listing price
            await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("50")]);

            const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
            assert.equal(listing[1], parseEther("50"));
        });
    });

    describe("Marketplace Batch Operations", async function () {
        it("should support batchUpdateOffers", async function () {
            const { owner, otherAccount, marketplace, bragNFT, bragToken } = await deployFixture();

            // Mint 2 NFTs
            await bragNFT.write.donate(["NFT1", "uri1"], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT2", "uri2"], { value: parseEther("0.01") });

            // Fund otherAccount
            await bragToken.write.transfer([otherAccount.account.address, parseEther("1000")]);
            await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: otherAccount.account });

            // Create 2 offers
            await marketplace.write.batchCreateOffers([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                [1n, 1n],
                [parseEther("100"), parseEther("200")],
                [0n, 0n]
            ], { account: otherAccount.account });

            // Batch update offers
            await marketplace.write.batchUpdateOffers([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                [1n, 1n],
                [parseEther("150"), parseEther("250")],
                [0n, 0n]
            ], { account: otherAccount.account });

            const offer1 = await marketplace.read.offers([bragNFT.address, 0n, otherAccount.account.address]);
            const offer2 = await marketplace.read.offers([bragNFT.address, 1n, otherAccount.account.address]);

            assert.equal(offer1[0], parseEther("150"));
            assert.equal(offer2[0], parseEther("250"));
        });

        it("should support batchCreateOffers with expiries", async function () {
            const { otherAccount, marketplace, bragNFT, bragToken } = await deployFixture();

            await bragNFT.write.donate(["NFT1", "uri1"], { value: parseEther("0.01") });
            await bragToken.write.transfer([otherAccount.account.address, parseEther("1000")]);
            await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: otherAccount.account });

            const expiry = BigInt(Math.floor(Date.now() / 1000)) + 3600n;

            await marketplace.write.batchCreateOffers([
                [bragNFT.address],
                [0n],
                [1n],
                [parseEther("100")],
                [expiry]
            ], { account: otherAccount.account });

            const offer = await marketplace.read.offers([bragNFT.address, 0n, otherAccount.account.address]);
            assert.equal(offer[3], expiry);
        });
    });
});
