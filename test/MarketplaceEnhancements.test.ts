import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, Hex, getAddress } from "viem";

describe("Marketplace Enhancements", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, buyer1, buyer2] = await viem.getWalletClients();
        const publicClient = await viem.getPublicClient();

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
            owner, buyer1, buyer2,
            treasury, bragToken, marketplace, bragNFT, mockPriceFeed,
            publicClient
        };
    }

    describe("Offer Expiry", async function () {
        it("should respect offer expiry", async function () {
            const { owner, buyer1, marketplace, bragNFT, bragToken, publicClient } = await deployFixture();

            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([buyer1.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer1.account });

            const block = await publicClient.getBlock();
            const expiry = block.timestamp + 3600n;

            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: buyer1.account });

            // Accept before expiry
            await bragNFT.write.approve([marketplace.address, tokenId]);
            await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer1.account.address]);

            const newOwner = await bragNFT.read.ownerOf([tokenId]);
            assert.equal(getAddress(newOwner), getAddress(buyer1.account.address));
        });

        it("should revert if offer is expired", async function () {
            const { owner, buyer1, marketplace, bragNFT, bragToken, publicClient } = await deployFixture();

            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([buyer1.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer1.account });

            const block = await publicClient.getBlock();
            const expiry = block.timestamp + 3600n;

            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: buyer1.account });

            // Fast forward time
            const testClient = await viem.getTestClient();
            await testClient.increaseTime({ seconds: 4000 });
            await testClient.mine({ blocks: 1 });

            await bragNFT.write.approve([marketplace.address, tokenId]);
            await assert.rejects(
                marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer1.account.address]),
                /Offer expired/
            );
        });
    });

    describe("Batch Accept Offers", async function () {
        it("should allow batch accepting offers", async function () {
            const { owner, buyer1, buyer2, marketplace, bragNFT, bragToken } = await deployFixture();

            // Mint 2 NFTs
            await bragNFT.write.donate(["NFT1", "uri1"], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT2", "uri2"], { value: parseEther("0.01") });
            const tokenId0 = 0n;
            const tokenId1 = 1n;

            // Fund buyers
            await bragToken.write.transfer([buyer1.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer1.account });
            await bragToken.write.transfer([buyer2.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer2.account });

            // Create offers
            await marketplace.write.createOffer([bragNFT.address, tokenId0, 1n, parseEther("50")], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId1, 1n, parseEther("60")], { account: buyer2.account });

            // Approve marketplace
            await bragNFT.write.setApprovalForAll([marketplace.address, true]);

            // Batch accept
            await marketplace.write.batchAcceptOffers([
                [bragNFT.address, bragNFT.address],
                [tokenId0, tokenId1],
                [buyer1.account.address, buyer2.account.address]
            ]);

            assert.equal(getAddress(await bragNFT.read.ownerOf([tokenId0])), getAddress(buyer1.account.address));
            assert.equal(getAddress(await bragNFT.read.ownerOf([tokenId1])), getAddress(buyer2.account.address));
        });
    });
});
