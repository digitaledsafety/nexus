import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Jules Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 1000000n]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // PriceFeed
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH

    // BragNFT
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    // EntryPoint (Mock)
    const entryPoint = await viem.deployContract("MockEntryPoint");

    // Treasury
    const treasury = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address],
      1n, // threshold of 1
      entryPoint.address
    ]);

    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    return { marketplace, bragNFT, bragToken, priceFeed, treasury, owner, user1, user2 };
  }

  describe("Treasury Array Length Verification", function () {
    it("Should revert on propose with mismatched arrays", async function () {
      const { treasury, owner, user1 } = await deployContracts();

      // Mismatched: 2 targets, 1 value, 1 data
      const targets = [user1.account.address, user1.account.address];
      const values = [0n];
      const datas = ["0x" as `0x${string}`];

      await assert.rejects(
        treasury.write.propose([targets, values, datas, 0n], { account: owner.account }),
        /Mismatched arrays/
      );
    });

    it("Should succeed on propose with matching arrays", async function () {
      const { treasury, owner, user1 } = await deployContracts();

      const targets = [user1.account.address];
      const values = [0n];
      const datas = ["0x" as `0x${string}`];

      const tx = await treasury.write.propose([targets, values, datas, 0n], { account: owner.account });
      assert.ok(tx);
    });
  });

  describe("NFTMarketplace Overloaded updateListing", function () {
    it("Should update listing and change target buyer", async function () {
      const { marketplace, bragNFT, user1, user2, owner } = await deployContracts();

      await bragNFT.write.donate(["test nft", ""], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const price = parseEther("100");
      await bragNFT.write.approve([marketplace.address, tokenId], { account: user1.account });

      // Create a private listing for user2
      await marketplace.write.createPrivateListing([bragNFT.address, tokenId, 1n, price, user2.account.address], { account: user1.account });

      let listing = await marketplace.read.listings([bragNFT.address, tokenId, user1.account.address]);
      assert.equal(listing[3], getAddress(user2.account.address));

      // Update the private listing to be public
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, price, zeroAddress], { account: user1.account });

      listing = await marketplace.read.listings([bragNFT.address, tokenId, user1.account.address]);
      assert.equal(listing[3], zeroAddress);

      // Update public listing back to private for owner
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, price, owner.account.address], { account: user1.account });

      listing = await marketplace.read.listings([bragNFT.address, tokenId, user1.account.address]);
      assert.equal(listing[3], getAddress(owner.account.address));
    });
  });

  describe("NFTMarketplace Batch Update Listings", function () {
    it("Should batch update public listings", async function () {
      const { marketplace, bragNFT, user1, owner } = await deployContracts();

      await bragNFT.write.donate(["nft 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft 2", ""], { account: user1.account, value: parseEther("0.1") });
      const tokenId1 = 0n;
      const tokenId2 = 1n;

      await bragNFT.write.approve([marketplace.address, tokenId1], { account: user1.account });
      await bragNFT.write.approve([marketplace.address, tokenId2], { account: user1.account });

      const price = parseEther("50");
      await marketplace.write.batchCreateListings([
          [bragNFT.address, bragNFT.address],
          [tokenId1, tokenId2],
          [1n, 1n],
          [price, price]
      ], { account: user1.account });

      // Batch update listings to a new price
      const newPrice = parseEther("60");
      await marketplace.write.batchUpdateListings([
          [bragNFT.address, bragNFT.address],
          [tokenId1, tokenId2],
          [1n, 1n],
          [newPrice, newPrice]
      ], { account: user1.account });

      const listing1 = await marketplace.read.listings([bragNFT.address, tokenId1, user1.account.address]);
      assert.equal(listing1[1], newPrice);

      const listing2 = await marketplace.read.listings([bragNFT.address, tokenId2, user1.account.address]);
      assert.equal(listing2[1], newPrice);
    });

    it("Should batch update private listings with new private buyers", async function () {
      const { marketplace, bragNFT, user1, user2, owner } = await deployContracts();

      await bragNFT.write.donate(["nft 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft 2", ""], { account: user1.account, value: parseEther("0.1") });
      const tokenId1 = 0n;
      const tokenId2 = 1n;

      await bragNFT.write.approve([marketplace.address, tokenId1], { account: user1.account });
      await bragNFT.write.approve([marketplace.address, tokenId2], { account: user1.account });

      const price = parseEther("50");
      await marketplace.write.batchCreatePrivateListings([
          [bragNFT.address, bragNFT.address],
          [tokenId1, tokenId2],
          [1n, 1n],
          [price, price],
          [user2.account.address, user2.account.address]
      ], { account: user1.account });

      // Batch update private listings to owner target buyer and new price
      const newPrice = parseEther("75");
      await marketplace.write.batchUpdatePrivateListings([
          [bragNFT.address, bragNFT.address],
          [tokenId1, tokenId2],
          [1n, 1n],
          [newPrice, newPrice],
          [owner.account.address, owner.account.address]
      ], { account: user1.account });

      const listing1 = await marketplace.read.listings([bragNFT.address, tokenId1, user1.account.address]);
      assert.equal(listing1[1], newPrice);
      assert.equal(listing1[3], getAddress(owner.account.address));

      const listing2 = await marketplace.read.listings([bragNFT.address, tokenId2, user1.account.address]);
      assert.equal(listing2[1], newPrice);
      assert.equal(listing2[3], getAddress(owner.account.address));
    });
  });
});
