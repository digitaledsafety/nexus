import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Missing Batch Features & Overloads Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer1, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("2000000"),
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address,
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer1, buyer2, treasury };
  }

  describe("NFTMarketplace: Listing Updates & Batch Operations", async function () {
    it("should update a listing with a private buyer specified", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer1, buyer2 } = await deployAll();

      // Mint NFT and approve marketplace
      await bragNFT.write.donate(["test item", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Create initial public listing for price 5 BRAG
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });

      const listingBefore = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listingBefore[1], parseEther("5")); // price
      assert.equal(getAddress(listingBefore[3]), getAddress("0x0000000000000000000000000000000000000000")); // privateBuyer

      // Update listing with private buyer buyer1
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("8"), buyer1.account.address], { account: seller.account });

      const listingAfter = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listingAfter[1], parseEther("8"));
      assert.equal(getAddress(listingAfter[3]), getAddress(buyer1.account.address));
    });

    it("should batch update listings without private buyers", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["item 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["item 2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("10")], { account: seller.account });

      // Batch update
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("6"), parseEther("12")]],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing0[1], parseEther("6"));
      assert.equal(listing1[1], parseEther("12"));
    });

    it("should batch update listings with private buyers", async function () {
      const { marketplace, bragNFT, seller, buyer1, buyer2 } = await deployAll();

      await bragNFT.write.donate(["item 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["item 2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("10")], { account: seller.account });

      // Batch update with private buyers
      await marketplace.write.batchUpdateListingsWithPrivateBuyers(
        [
          [bragNFT.address, bragNFT.address],
          [0n, 1n],
          [1n, 1n],
          [parseEther("7"), parseEther("14")],
          [buyer1.account.address, buyer2.account.address]
        ],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing0[1], parseEther("7"));
      assert.equal(getAddress(listing0[3]), getAddress(buyer1.account.address));
      assert.equal(listing1[1], parseEther("14"));
      assert.equal(getAddress(listing1[3]), getAddress(buyer2.account.address));
    });

    it("should revert batch listing updates on array length mismatch", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await assert.rejects(
        async () => {
          await marketplace.write.batchUpdateListings(
            [[bragNFT.address], [0n, 1n], [1n], [parseEther("5")]],
            { account: seller.account }
          );
        },
        /Mismatched arrays/
      );
    });
  });

  describe("ExhibitVault: Batch Move with Duration & Extension Operations", async function () {
    it("should batch move ERC721 tokens with duration lock", async function () {
      const { bragNFT, vault1, vault2, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      // Batch move to vault2 with 86400s (1 day) duration
      await vault1.write.batchMove721WithDuration(
        [[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 86400n],
        { account: seller.account }
      );

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault2.address));

      const expiry0 = await vault2.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry0 > 0n);

      // Attempting immediate withdrawal should fail due to lock
      await assert.rejects(
        async () => {
          await vault2.write.withdraw721([bragNFT.address, 0n], { account: seller.account });
        },
        /Exhibition not yet expired/
      );
    });

    it("should batch move ERC1155 tokens with duration lock", async function () {
      const { mock1155, vault1, vault2, seller, owner } = await deployAll();

      await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 2n, 20n], { account: owner.account });

      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 5n, "0x"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 10n, "0x"], { account: seller.account });

      // Batch move with duration
      await vault1.write.batchMove1155WithDuration(
        [[mock1155.address, mock1155.address], [1n, 2n], [5n, 10n], vault2.address, 3600n],
        { account: seller.account }
      );

      assert.equal(await mock1155.read.balanceOf([vault2.address, 1n]), 5n);
      assert.equal(await mock1155.read.balanceOf([vault2.address, 2n]), 10n);

      const expiry = await vault2.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      assert.ok(expiry > 0n);
    });

    it("should batch extend exhibition for ERC721 and ERC1155 tokens", async function () {
      const { bragNFT, mock1155, vault1, seller, owner } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      // Batch extend ERC721
      await vault1.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], 7200n],
        { account: seller.account }
      );

      const expiry721_0 = await vault1.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry721_0 > 0n);

      // ERC1155 setup & batch extend
      await mock1155.write.mint([seller.account.address, 10n, 5n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 11n, 5n], { account: owner.account });

      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 10n, 5n, "0x"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 11n, 5n, "0x"], { account: seller.account });

      await vault1.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [10n, 11n], 7200n],
        { account: seller.account }
      );

      const expiry1155_10 = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
      assert.ok(expiry1155_10 > 0n);
    });
  });

  describe("BragNFT: Batch On-Chain Media Updates", async function () {
    it("should batch update on-chain media as admin", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["m1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["m2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia(
        [[0n, 1n], ["data:image/svg+xml;base64,media0", "data:image/svg+xml;base64,media1"]],
        { account: owner.account }
      );

      assert.equal(await bragNFT.read.onChainMedia([0n]), "data:image/svg+xml;base64,media0");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "data:image/svg+xml;base64,media1");
    });

    it("should revert batch update on-chain media when called by non-admin", async function () {
      const { bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["m1", ""], { account: seller.account, value: parseEther("0.1") });

      await assert.rejects(
        async () => {
          await bragNFT.write.batchUpdateOnChainMedia(
            [[0n], ["media0"]],
            { account: seller.account }
          );
        },
        /AccessControl/
      );
    });

    it("should revert batch update on-chain media on array length mismatch", async function () {
      const { bragNFT, owner } = await deployAll();

      await assert.rejects(
        async () => {
          await bragNFT.write.batchUpdateOnChainMedia(
            [[0n, 1n], ["media0"]],
            { account: owner.account }
          );
        },
        /Mismatched arrays/
      );
    });
  });
});
