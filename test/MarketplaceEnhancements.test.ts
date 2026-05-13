import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex, decodeEventLog } from "viem";

describe("Marketplace Enhancements", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, buyer, seller] = await viem.getWalletClients();

        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const treasury = "0x0000000000000000000000000000000000000001";
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury, parseEther("0.01"), mockPriceFeed.address]);

        // Mint NFT for seller
        await bragNFT.write.donate(["For Sale", "uri"], { value: parseEther("0.01"), account: seller.account });
        const tokenId = 0n;

        // Fund buyer
        await bragToken.write.transfer([buyer.account.address, parseEther("1000")]);
        await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: buyer.account });

        // Seller approves marketplace
        await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

        return {
            owner,
            buyer,
            seller,
            bragToken,
            marketplace,
            bragNFT,
            tokenId
        };
    }

    it("should allow creating an offer with expiry", async function () {
        const { buyer, marketplace, bragNFT, tokenId } = await deployFixture();
        const expiry = BigInt(Math.floor(Date.now() / 1000) + 3600);

        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("100"), expiry], { account: buyer.account });

        const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
        assert.equal(offer[0], parseEther("100")); // price
        assert.equal(offer[3], expiry); // expiry
    });

    it("should allow updating an offer with new expiry", async function () {
        const { buyer, marketplace, bragNFT, tokenId } = await deployFixture();
        const expiry1 = BigInt(Math.floor(Date.now() / 1000) + 3600);
        const expiry2 = BigInt(Math.floor(Date.now() / 1000) + 7200);

        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("100"), expiry1], { account: buyer.account });
        await marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, parseEther("110"), expiry2], { account: buyer.account });

        const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer.account.address]);
        assert.equal(offer[0], parseEther("110"));
        assert.equal(offer[3], expiry2);
    });

    it("should fail to accept an expired offer", async function () {
        const { buyer, seller, marketplace, bragNFT, tokenId } = await deployFixture();
        const testClient = await viem.getTestClient();

        const expiry = BigInt(Math.floor(Date.now() / 1000) + 100);
        await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("100"), expiry], { account: buyer.account });

        // Fast forward time
        await testClient.increaseTime({ seconds: 200 });
        await testClient.mine({ blocks: 1 });

        await assert.rejects(
            marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account }),
            /Offer expired/
        );
    });

    it("should support batch acceptance of multiple offers", async function () {
        const { buyer, seller, marketplace, bragNFT, bragToken, owner } = await deployFixture();

        // Mint second NFT for seller
        await bragNFT.write.donate(["For Sale 2", "uri2"], { value: parseEther("0.01"), account: seller.account });
        const tokenId2 = 1n;
        await bragNFT.write.approve([marketplace.address, tokenId2], { account: seller.account });

        // Buyer makes offers on both
        await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("100"), 0n], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("200"), 0n], { account: buyer.account });

        // Batch accept
        await marketplace.write.batchAcceptOffers([
            [bragNFT.address, bragNFT.address],
            [0n, 1n],
            [buyer.account.address, buyer.account.address]
        ], { account: seller.account });

        // Verify ownership
        assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(buyer.account.address));
        assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(buyer.account.address));

        // Verify seller received funds (approximate due to protocol fees)
        const sellerBalance = await bragToken.read.balanceOf([seller.account.address]);
        // BragNFT has 8% royalty (800 bps)
        // Offer 1: 100 * 0.92 = 92
        // Offer 2: 200 * 0.92 = 184
        // Total: 276
        assert.equal(sellerBalance, parseEther("276"));
    });
});
