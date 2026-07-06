import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Final Hardening and Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user, user2] = await viem.getWalletClients();

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, 0n, priceFeed.address]);

    const usdc = await viem.deployContract("MockUSDC", []);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, usdc.address]);

    return { bragNFT, marketplace, usdc, owner, user, user2, priceFeed };
  }

  describe("BragNFT Enhancements", async function () {
    it("Should start with glow and record ethAmount", async function () {
      const { bragNFT, user } = await deployContracts();
      const donation = parseEther("0.1");

      await bragNFT.write.donate(["Glow test", ""], { account: user.account, value: donation });
      const tokenId = 0n;

      assert.ok(await bragNFT.read.isGlowing([tokenId]));

      const record = await bragNFT.read.taxRegistry([tokenId]);
      // PermanentRecord { originalDonor, usdValue, ethAmount, timestamp, status, message }
      // record is an array in viem: [address, uint256, uint256, uint256, uint8, string]
      assert.equal(record[2], donation);
    });

    it("Should update media for owner", async function () {
      const { bragNFT, user, user2 } = await deployContracts();
      await bragNFT.write.donate(["Media update test", ""], { account: user.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const newMedia = "https://newmedia.com/art.png";
      await bragNFT.write.updateMedia([tokenId, newMedia, false], { account: user.account });

      const uri = await bragNFT.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      assert.equal(json.image, newMedia);

      // Should fail for non-owner
      await assert.rejects(
        bragNFT.write.updateMedia([tokenId, "fail", false], { account: user2.account }),
        /Not the owner/
      );
    });

    it("Should include Donation ETH in tokenURI attributes", async function () {
        const { bragNFT, user } = await deployContracts();
        const donation = parseEther("1.23456");
        await bragNFT.write.donate(["Metadata test", ""], { account: user.account, value: donation });

        const uri = await bragNFT.read.tokenURI([0n]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

        const ethAttr = json.attributes.find((a: any) => a.trait_type === "Donation ETH");
        assert.ok(ethAttr);
        assert.equal(ethAttr.value, "1.2345 ETH");
    });
  });

  describe("NFTMarketplace Offer Management", async function () {
    it("Should automatically refund existing offer when buying from listing", async function () {
      const { bragNFT, marketplace, usdc, owner, user } = await deployContracts();

      // owner owns token 0
      await bragNFT.write.donate(["Marketplace test", ""], { account: owner.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const listingPrice = parseEther("100");
      const offerPrice = parseEther("50");

      await usdc.write.mint([user.account.address, listingPrice + offerPrice]);
      await usdc.write.approve([marketplace.address, listingPrice + offerPrice], { account: user.account });

      // user makes an offer
      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: user.account });

      // owner creates a listing
      await bragNFT.write.approve([marketplace.address, tokenId], { account: owner.account });
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, listingPrice], { account: owner.account });

      const initialUserBalance = await usdc.read.balanceOf([user.account.address]);

      // user buys from listing
      await marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, listingPrice], { account: user.account });

      const finalUserBalance = await usdc.read.balanceOf([user.account.address]);

      // Offer should be cleared
      const offer = await marketplace.read.offers([bragNFT.address, tokenId, user.account.address]);
      assert.equal(offer[0], 0n);

      // Balance check: initial - listingPrice + offerPrice (refunded)
      // Actually initial balance already had offerPrice deducted.
      // So final balance should be initialBalance - listingPrice + offerPrice.
      assert.equal(finalUserBalance, initialUserBalance - listingPrice + offerPrice);
    });
  });
});
