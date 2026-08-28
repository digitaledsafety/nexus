import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("AgencyImprovements", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, otherAccount, buyer] = await viem.getWalletClients();

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [
      [owner.account.address],
      1n,
      entryPoint.address,
    ]);

    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [
      250000000000n, // $2500 ETH
    ]);

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      0n,
      mockPriceFeed.address,
    ]);

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("1000000000"),
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    const publicClient = await viem.getPublicClient();
    const testClient = await viem.getTestClient();

    return {
      bragNFT,
      bragToken,
      marketplace,
      treasury,
      owner,
      otherAccount,
      buyer,
      publicClient,
      testClient,
    };
  }

  describe("BragNFT Improvements", async function () {
    it("should handle cumulative glow correctly", async function () {
      const { bragNFT, testClient, publicClient } = await deployFixture();

      await bragNFT.write.donate(["Cumulative test", "uri", false], {
        value: parseEther("0.1"),
      });
      const tokenId = 0n;

      assert.equal(await bragNFT.read.isGlowing([tokenId]), true);

      // First top up
      await bragNFT.write.topUp([tokenId], { value: parseEther("0.001") }); // $2.50
      assert.equal(await bragNFT.read.isGlowing([tokenId]), true);

      const expiry1 = await bragNFT.read.glowExpiry([tokenId]);
      const block = await publicClient.getBlock();
      const now = block.timestamp;
      assert.ok(expiry1 >= now + BigInt(30 * 24 * 60 * 60) - 10n);

      // Second top up should be cumulative
      await bragNFT.write.topUp([tokenId], { value: parseEther("0.001") });
      const expiry2 = await bragNFT.read.glowExpiry([tokenId]);
      assert.ok(expiry2 >= expiry1 + BigInt(30 * 24 * 60 * 60) - 10n);
    });

    it("should allow admin to update on-chain media", async function () {
      const { bragNFT, otherAccount } = await deployFixture();

      await bragNFT.write.donate(["Admin update test", "uri", true], {
        value: parseEther("0.1"),
      });
      const tokenId = 0n;

      assert.equal(await bragNFT.read.onChainMedia([tokenId]), "uri");

      await bragNFT.write.updateOnChainMedia([tokenId, "new-uri"]);
      assert.equal(await bragNFT.read.onChainMedia([tokenId]), "new-uri");

      // Other account should not be able to update
      await assert.rejects(
        bragNFT.write.updateOnChainMedia([tokenId, "bad-uri"], {
          account: otherAccount.account,
        })
      );
    });

    it("should have optimized escape functions (coverage check via tokenURI)", async function () {
      const { bragNFT } = await deployFixture();
      await bragNFT.write.donate(["<Test & \"Glow\">", "uri", false], {
        value: parseEther("0.1"),
      });
      const tokenId = 0n;
      const uri = await bragNFT.read.tokenURI([tokenId]);
      assert.ok(uri.startsWith("data:application/json;base64,"));
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      assert.equal(json.attributes[0].value, "<Test & \"Glow\">");
    });
  });

  describe("NFTMarketplace Improvements", async function () {
    it("should update a listing correctly", async function () {
      const { marketplace, bragNFT, owner } = await deployFixture();

      await bragNFT.write.donate(["Listing test", "uri", false]);
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId]);

      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")]);

      let listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(listing[1], parseEther("10"));

      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("5")]);
      listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(listing[1], parseEther("5"));
    });

    it("should batch create and cancel listings", async function () {
      const { marketplace, bragNFT, owner } = await deployFixture();

      await bragNFT.write.donate(["Batch 1", "uri", false]);
      await bragNFT.write.donate(["Batch 2", "uri", false]);

      await bragNFT.write.setApprovalForAll([marketplace.address, true]);

      await marketplace.write.batchCreateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("1"), parseEther("2")]
      ]);

      assert.equal((await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]))[1], parseEther("1"));
      assert.equal((await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]))[1], parseEther("2"));

      await marketplace.write.batchCancelListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n]
      ]);

      assert.equal((await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]))[1], 0n);
      assert.equal((await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]))[1], 0n);
    });

    it("should update a listing's private buyer and/or clear it correctly", async function () {
      const { marketplace, bragNFT, owner, otherAccount } = await deployFixture();

      await bragNFT.write.donate(["Overload test", "uri", false]);
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId]);

      // Create a private listing
      await marketplace.write.createPrivateListing([bragNFT.address, tokenId, 1n, parseEther("10"), otherAccount.account.address]);
      let listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(listing[1], parseEther("10"));
      assert.equal(listing[3], getAddress(otherAccount.account.address));

      // Update to a different private buyer and price
      const secondAccount = "0x0000000000000000000000000000000000000123";
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("8"), secondAccount]);
      listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(listing[1], parseEther("8"));
      assert.equal(listing[3], getAddress(secondAccount));

      // Clear the private buyer to make it public (address(0))
      const zeroAddr = "0x0000000000000000000000000000000000000000";
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("5"), zeroAddr]);
      listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(listing[1], parseEther("5"));
      assert.equal(listing[3], zeroAddr);
    });

    it("should batch update public listings correctly", async function () {
      const { marketplace, bragNFT, owner } = await deployFixture();

      await bragNFT.write.donate(["Batch 1", "uri", false]);
      await bragNFT.write.donate(["Batch 2", "uri", false]);
      await bragNFT.write.setApprovalForAll([marketplace.address, true]);

      await marketplace.write.batchCreateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("1"), parseEther("2")]
      ]);

      // Batch update the listings
      await marketplace.write.batchUpdateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("3"), parseEther("4")]
      ]);

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]);

      assert.equal(listing1[1], parseEther("3"));
      assert.equal(listing2[1], parseEther("4"));
    });

    it("should batch update private listings correctly", async function () {
      const { marketplace, bragNFT, owner, otherAccount } = await deployFixture();

      await bragNFT.write.donate(["Batch 1", "uri", false]);
      await bragNFT.write.donate(["Batch 2", "uri", false]);
      await bragNFT.write.setApprovalForAll([marketplace.address, true]);

      const buyer1 = otherAccount.account.address;
      const buyer2 = "0x0000000000000000000000000000000000000123";

      await marketplace.write.batchCreatePrivateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("1"), parseEther("2")],
        [buyer1, buyer2]
      ]);

      // Batch update with new private buyers and prices
      const newBuyer1 = "0x0000000000000000000000000000000000000456";
      const newBuyer2 = "0x0000000000000000000000000000000000000789";

      await marketplace.write.batchUpdatePrivateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("5"), parseEther("6")],
        [newBuyer1, newBuyer2]
      ]);

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]);

      assert.equal(listing1[1], parseEther("5"));
      assert.equal(listing1[3], getAddress(newBuyer1));
      assert.equal(listing2[1], parseEther("6"));
      assert.equal(listing2[3], getAddress(newBuyer2));
    });
  });
});
