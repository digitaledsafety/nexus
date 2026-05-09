import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Marketplace Enhancements", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, buyer1, buyer2] = await viem.getWalletClients();

        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        // Fund buyers
        await bragToken.write.transfer([buyer1.account.address, parseEther("1000")]);
        await bragToken.write.transfer([buyer2.account.address, parseEther("1000")]);

        return {
            owner,
            buyer1,
            buyer2,
            bragToken,
            marketplace,
            bragNFT
        };
    }

    describe("Offer Expiration", async function () {
        it("should allow creating an offer with expiry and prevent acceptance after it expires", async function () {
            const { owner, buyer1, marketplace, bragNFT, bragToken } = await deployFixture();

            // Mint NFT
            await bragNFT.write.donate(["Msg", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            const publicClient = await viem.getPublicClient();
            const block = await publicClient.getBlock();
            const expiry = block.timestamp + 100n;

            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: buyer1.account });

            // Advance time
            const testClient = await viem.getTestClient();
            await testClient.increaseTime({ seconds: 200 });
            await testClient.mine({ blocks: 1 });

            // Should fail to accept
            await bragNFT.write.approve([marketplace.address, tokenId]);
            await assert.rejects(
                marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer1.account.address]),
                /Offer has expired/
            );
        });

        it("should allow updating an offer's expiry", async function () {
            const { owner, buyer1, marketplace, bragNFT, bragToken } = await deployFixture();

            await bragNFT.write.donate(["Msg", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50")], { account: buyer1.account });

            const publicClient = await viem.getPublicClient();
            const block = await publicClient.getBlock();
            const newExpiry = block.timestamp + 1000n;

            await marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, parseEther("60"), newExpiry], { account: buyer1.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
            assert.equal(offer[3], newExpiry);
            assert.equal(offer[0], parseEther("60"));
        });
    });

    describe("Batch Accept Offers", async function () {
        it("should allow accepting multiple offers in one transaction", async function () {
            const { owner, buyer1, buyer2, marketplace, bragNFT, bragToken } = await deployFixture();

            // Mint two NFTs
            await bragNFT.write.donate(["NFT1", "uri1"], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT2", "uri2"], { value: parseEther("0.01") });
            const tokenId1 = 0n;
            const tokenId2 = 1n;

            // Buyers make offers
            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId1, 1n, parseEther("50")], { account: buyer1.account });

            await bragToken.write.approve([marketplace.address, parseEther("60")], { account: buyer2.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId2, 1n, parseEther("60")], { account: buyer2.account });

            // Owner approves marketplace for both
            await bragNFT.write.approve([marketplace.address, tokenId1]);
            await bragNFT.write.approve([marketplace.address, tokenId2]);

            // Batch accept
            await marketplace.write.batchAcceptOffers([
                [bragNFT.address, bragNFT.address],
                [tokenId1, tokenId2],
                [buyer1.account.address, buyer2.account.address]
            ]);

            // Verify ownership
            assert.equal(getAddress(await bragNFT.read.ownerOf([tokenId1])), getAddress(buyer1.account.address));
            assert.equal(getAddress(await bragNFT.read.ownerOf([tokenId2])), getAddress(buyer2.account.address));

            // Verify offers are cleared
            const offer1 = await marketplace.read.offers([bragNFT.address, tokenId1, buyer1.account.address]);
            assert.equal(offer1[0], 0n);
            const offer2 = await marketplace.read.offers([bragNFT.address, tokenId2, buyer2.account.address]);
            assert.equal(offer2[0], 0n);
        });
    });
});
