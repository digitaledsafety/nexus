import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("New Batch Operations & Listing Updates", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasurySigner, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasurySigner.account.address, parseEther("0.1"), priceFeed.address]);

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [[owner.account.address, seller.account.address], 1n, entryPoint.address]);

    return { marketplace, bragNFT, bragToken, treasury, owner, seller, buyer, other };
  }

  describe("Treasury.propose Array Length Mismatch Check", () => {
    it("Should revert if targets, values, and datas arrays are of mismatched lengths", async function () {
      const { treasury, owner, other } = await deployAll();

      const targets = [other.account.address];
      const values = [parseEther("1"), parseEther("2")]; // Length 2
      const datas = ["0x" as `0x${string}`]; // Length 1

      // Should revert with "Mismatched arrays"
      await assert.rejects(
        treasury.write.propose([targets, values, datas, 0n], { account: owner.account }),
        /Mismatched arrays/
      );
    });

    it("Should succeed if targets, values, and datas arrays are of equal lengths", async function () {
      const { treasury, owner, other } = await deployAll();

      const targets = [other.account.address];
      const values = [parseEther("1")];
      const datas = ["0x" as `0x${string}`];

      const tx = await treasury.write.propose([targets, values, datas, 0n], { account: owner.account });
      assert.ok(tx);
    });
  });

  describe("NFTMarketplace.batchUpdateListings", () => {
    it("Should batch update multiple listings successfully", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      // Donate / Mint 2 NFTs to seller
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Approve marketplace
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Create 2 listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("10")], { account: seller.account });

      // Batch update listings (new prices: 2 ETH and 4 ETH)
      await marketplace.write.batchUpdateListings(
        [
          [bragNFT.address, bragNFT.address],
          [0n, 1n],
          [1n, 1n],
          [parseEther("2"), parseEther("4")]
        ],
        { account: seller.account }
      );

      // Verify the updated listings
      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing1[1], parseEther("2")); // price
      assert.equal(listing2[1], parseEther("4")); // price
    });

    it("Should revert batchUpdateListings if arrays are mismatched", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await assert.rejects(
        marketplace.write.batchUpdateListings(
          [
            [bragNFT.address],
            [0n, 1n],
            [1n],
            [parseEther("2")]
          ],
          { account: seller.account }
        ),
        /Mismatched arrays/
      );
    });

    it("Should revert batchUpdateListings if listing does not exist", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await assert.rejects(
        marketplace.write.batchUpdateListings(
          [
            [bragNFT.address],
            [99n],
            [1n],
            [parseEther("2")]
          ],
          { account: seller.account }
        ),
        /Listing does not exist/
      );
    });
  });

  describe("NFTMarketplace Overloaded updateListing (with private buyer)", () => {
    it("Should allow updating privateBuyer of an existing listing", async function () {
      const { marketplace, bragNFT, seller, buyer, other } = await deployAll();

      // Mint NFT to seller
      await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Create a public listing first
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });

      // Verify listing is public (privateBuyer is address(0))
      let listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[3], getAddress("0x0000000000000000000000000000000000000000"));

      // Update the listing to be private to buyer
      await marketplace.write.updateListing(
        [bragNFT.address, 0n, 1n, parseEther("4"), buyer.account.address],
        { account: seller.account }
      );

      // Verify it is updated and now private to buyer
      listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("4")); // price
      assert.equal(listing[3], getAddress(buyer.account.address)); // privateBuyer

      // Other user trying to buy from this private listing should fail
      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, 0n, seller.account.address, parseEther("4")], { account: other.account }),
        /only the specified buyer can purchase/
      );

      // Specified buyer should succeed
      // Give buyer some bragToken
      const [owner] = await viem.getWalletClients();
      const bragToken = await viem.getContractAt("BragToken", await marketplace.read.paymentToken());
      await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("4")], { account: buyer.account });

      await marketplace.write.buyFromListing([bragNFT.address, 0n, seller.account.address, parseEther("4")], { account: buyer.account });
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
    });

    it("Should allow converting a private listing to public", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Create a private listing
      await marketplace.write.createPrivateListing([bragNFT.address, 0n, 1n, parseEther("5"), buyer.account.address], { account: seller.account });

      // Convert to public
      await marketplace.write.updateListing(
        [bragNFT.address, 0n, 1n, parseEther("6"), "0x0000000000000000000000000000000000000000"],
        { account: seller.account }
      );

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("6"));
      assert.equal(listing[3], getAddress("0x0000000000000000000000000000000000000000"));
    });

    it("Should NOT allow updating listing if caller is not the seller", async function () {
      const { marketplace, bragNFT, seller, other } = await deployAll();

      await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });

      await assert.rejects(
        marketplace.write.updateListing(
          [bragNFT.address, 0n, 1n, parseEther("4"), "0x0000000000000000000000000000000000000000"],
          { account: other.account }
        ),
        /Listing does not exist/
      );
    });
  });
});
