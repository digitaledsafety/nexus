import assert from "node:assert/strict";
import { describe, it } from "node:test";
import hre from "hardhat";
import { parseEther, getAddress } from "viem";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

describe("Marketplace Enhancements", async function () {
  const { viem } = await hre.network.connect();

  async function deployMarketplaceFixture() {
    const [owner, seller, buyer, protocolFeeRecipient] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, parseEther("1000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const nft = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.001"), ZERO_ADDRESS]);

    // Setup: Mint some NFTs to seller
    await nft.write.donate(["Message 1", "image.png"], { value: parseEther("0.1") });
    const tokenId1 = 0n;
    await nft.write.transferFrom([owner.account.address, seller.account.address, tokenId1]);

    await nft.write.donate(["Message 2", "image.png"], { value: parseEther("0.1") });
    const tokenId2 = 1n;
    await nft.write.transferFrom([owner.account.address, seller.account.address, tokenId2]);

    // Give some tokens to buyer
    await bragToken.write.mint([buyer.account.address, parseEther("1000")]);

    return { marketplace, bragToken, nft, owner, seller, buyer, tokenId1, tokenId2, protocolFeeRecipient };
  }

  describe("Zero-value transfers", function () {
    it("Should NOT fail when proceeds are zero (e.g. 10% protocol fee + remaining as royalty)", async function () {
      const { marketplace, bragToken, owner, buyer, protocolFeeRecipient } = await deployMarketplaceFixture();

      // Set protocol fee to 10% (max allowed) and a different recipient
      await marketplace.write.setProtocolFee([1000n]);
      await marketplace.write.setFeeRecipient([protocolFeeRecipient.account.address]);

      // Deploy a mock NFT that returns 100% royalty to owner
      const mockRoyaltyNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock", "MOCK"]);
      await mockRoyaltyNFT.write.setRoyalty([owner.account.address, 10000n]); // 100%
      await mockRoyaltyNFT.write.mint([owner.account.address, 0n]);

      const offerPrice = parseEther("100");
      await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
      await marketplace.write.createOffer([mockRoyaltyNFT.address, 0n, 1n, offerPrice], { account: buyer.account });

      await mockRoyaltyNFT.write.approve([marketplace.address, 0n], { account: owner.account });

      const ownerBalanceBefore = await bragToken.read.balanceOf([owner.account.address]);
      // Should succeed despite sellerProceeds being 0 (because protocol + royalty >= price)
      await marketplace.write.acceptOffer([mockRoyaltyNFT.address, 0n, buyer.account.address], { account: owner.account });
      const ownerBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);

      // Since royalty (100%) + protocol fee (10%) > 100%, royalty was capped at 90%.
      // Owner (as royalty recipient) got 90% and as seller got 0%.
      assert.equal(ownerBalanceAfter, ownerBalanceBefore + parseEther("90"));
    });
  });

  describe("Fixed-Price Listings", function () {
    it("Should allow creating, buying and canceling a listing", async function () {
      const { marketplace, bragToken, nft, seller, buyer, tokenId1 } = await deployMarketplaceFixture();

      const price = parseEther("50");
      await nft.write.approve([marketplace.address, tokenId1], { account: seller.account });

      await marketplace.write.createListing([nft.address, tokenId1, 1n, price], { account: seller.account });
      let listing = await marketplace.read.listings([nft.address, tokenId1]);
      assert.equal(listing[0].toLowerCase(), seller.account.address.toLowerCase());
      assert.equal(listing[1], price);
      assert.equal(listing[3], true);

      // Cancel
      await marketplace.write.cancelListing([nft.address, tokenId1], { account: seller.account });
      listing = await marketplace.read.listings([nft.address, tokenId1]);
      assert.equal(listing[3], false);

      // Re-create and Buy
      await marketplace.write.createListing([nft.address, tokenId1, 1n, price], { account: seller.account });
      await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
      await marketplace.write.buyFromListing([nft.address, tokenId1], { account: buyer.account });

      assert.equal(await nft.read.ownerOf([tokenId1]), getAddress(buyer.account.address));
      listing = await marketplace.read.listings([nft.address, tokenId1]);
      assert.equal(listing[3], false);
    });

    it("Should cancel listing if an offer is accepted", async function () {
        const { marketplace, bragToken, nft, seller, buyer, tokenId1 } = await deployMarketplaceFixture();

        await nft.write.approve([marketplace.address, tokenId1], { account: seller.account });
        await marketplace.write.createListing([nft.address, tokenId1, 1n, parseEther("100")], { account: seller.account });

        const offerPrice = parseEther("80");
        await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
        await marketplace.write.createOffer([nft.address, tokenId1, 1n, offerPrice], { account: buyer.account });

        await marketplace.write.acceptOffer([nft.address, tokenId1, buyer.account.address], { account: seller.account });

        const listing = await marketplace.read.listings([nft.address, tokenId1]);
        assert.equal(listing[3], false);
    });
  });

  describe("Batch Offer Acceptance", function () {
    it("Should allow accepting multiple offers in one tx", async function () {
      const { marketplace, bragToken, nft, seller, buyer, tokenId1, tokenId2 } = await deployMarketplaceFixture();

      const price1 = parseEther("10");
      const price2 = parseEther("20");

      await bragToken.write.approve([marketplace.address, price1 + price2], { account: buyer.account });
      await marketplace.write.createOffer([nft.address, tokenId1, 1n, price1], { account: buyer.account });
      await marketplace.write.createOffer([nft.address, tokenId2, 1n, price2], { account: buyer.account });

      await nft.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.acceptOffers([
        [nft.address, nft.address],
        [tokenId1, tokenId2],
        [buyer.account.address, buyer.account.address]
      ], { account: seller.account });

      assert.equal(await nft.read.ownerOf([tokenId1]), getAddress(buyer.account.address));
      assert.equal(await nft.read.ownerOf([tokenId2]), getAddress(buyer.account.address));
    });
  });
});
