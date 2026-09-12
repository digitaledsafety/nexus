import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Missing Batch Features", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, user2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, user2, treasury };
  }

  describe("NFTMarketplace Overloaded & Batch Updates", function () {
    it("Should update listing with private buyer overload", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      await bragNFT.write.donate(["test", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });

      // Update listing to private for buyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("8"), buyer.account.address], { account: seller.account });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("8")); // price
      assert.equal(getAddress(listing[3]), getAddress(buyer.account.address)); // privateBuyer
    });

    it("Should batch update listings", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["test1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      // Batch update
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("12"), parseEther("22")]],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(listing0[1], parseEther("12"));
      assert.equal(listing1[1], parseEther("22"));
    });

    it("Should batch update private listings", async function () {
      const { marketplace, bragNFT, seller, buyer, user2 } = await deployAll();

      await bragNFT.write.donate(["test1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("25")], [buyer.account.address, user2.account.address]],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(listing0[1], parseEther("15"));
      assert.equal(getAddress(listing0[3]), getAddress(buyer.account.address));
      assert.equal(listing1[1], parseEther("25"));
      assert.equal(getAddress(listing1[3]), getAddress(user2.account.address));
    });

    it("Should revert batch update if array lengths mismatch", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await assert.rejects(
        marketplace.write.batchUpdateListings(
          [[bragNFT.address], [0n, 1n], [1n], [parseEther("10")]],
          { account: seller.account }
        )
      );
    });
  });

  describe("ExhibitVault Batch Move & Extend", function () {
    it("Should batch move ERC721 tokens with duration", async function () {
      const { bragNFT, vault1, vault2, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      // Batch move with 1 hour duration
      await vault1.write.batchMove721WithDuration(
        [[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 3600n],
        { account: seller.account }
      );

      const owner0 = await vault2.read.owner721([bragNFT.address, 0n]);
      const owner1 = await vault2.read.owner721([bragNFT.address, 1n]);
      assert.equal(getAddress(owner0), getAddress(seller.account.address));
      assert.equal(getAddress(owner1), getAddress(seller.account.address));
      const exp0 = await vault2.read.expiry721([bragNFT.address, 0n]);
      assert.ok(exp0 > 0n);
    });

    it("Should batch move ERC1155 tokens with duration", async function () {
      const { mock1155, vault1, vault2, seller, owner } = await deployAll();

      await mock1155.write.mint([seller.account.address, 1n, 100n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 2n, 100n], { account: owner.account });

      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 50n, "0x"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 50n, "0x"], { account: seller.account });

      await vault1.write.batchMove1155WithDuration(
        [[mock1155.address, mock1155.address], [1n, 2n], [20n, 30n], vault2.address, 3600n],
        { account: seller.account }
      );

      assert.equal(await vault2.read.balances1155([mock1155.address, 1n, seller.account.address]), 20n);
      assert.equal(await vault2.read.balances1155([mock1155.address, 2n, seller.account.address]), 30n);
    });

    it("Should batch extend exhibition duration for ERC721 and ERC1155", async function () {
      const { bragNFT, mock1155, vault1, seller, owner } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      await vault1.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], 3600n],
        { account: seller.account }
      );

      const exp0 = await vault1.read.expiry721([bragNFT.address, 0n]);
      assert.ok(exp0 > 0n);

      await mock1155.write.mint([seller.account.address, 10n, 100n], { account: owner.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 10n, 50n, "0x"], { account: seller.account });

      await vault1.write.batchExtendExhibition1155(
        [[mock1155.address], [10n], 3600n],
        { account: seller.account }
      );

      const exp1155 = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
      assert.ok(exp1155 > 0n);
    });
  });

  describe("BragNFT Batch On-Chain Media", function () {
    it("Should allow admin to batch update on-chain media", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia(
        [[0n, 1n], ["media1.png", "media2.png"]],
        { account: owner.account }
      );

      assert.equal(await bragNFT.read.onChainMedia([0n]), "media1.png");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "media2.png");
    });

    it("Should revert if non-admin attempts batchUpdateOnChainMedia", async function () {
      const { bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia(
          [[0n], ["media.png"]],
          { account: seller.account }
        )
      );
    });

    it("Should revert batchUpdateOnChainMedia on mismatched arrays", async function () {
      const { bragNFT, owner } = await deployAll();

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia(
          [[0n, 1n], ["media1.png"]],
          { account: owner.account }
        )
      );
    });
  });
});
