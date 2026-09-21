import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("New Batch Features & Overloaded Functions Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, seller, buyer, privateBuyer, user2] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    // Register vault in registry
    await registry.write.verifyVault([vault.address, 1, "Main Vault", "Primary Vault"], { account: owner.account });

    return { marketplace, bragNFT, bragToken, registry, vault, mock1155, owner, seller, buyer, privateBuyer, user2 };
  }

  describe("NFTMarketplace Listing Overloads & Batch Updates", function () {
    it("Should update single listing with new private buyer overload", async function () {
      const { marketplace, bragNFT, seller, privateBuyer } = await deployFixture();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

      // Overloaded updateListing to set privateBuyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1.5"), privateBuyer.account.address], { account: seller.account });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("1.5")); // price
      assert.equal(listing[3].toLowerCase(), privateBuyer.account.address.toLowerCase()); // privateBuyer
    });

    it("Should batch update public listings", async function () {
      const { marketplace, bragNFT, seller } = await deployFixture();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.2"), parseEther("2.5")]],
        { account: seller.account }
      );

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing1[1], parseEther("1.2"));
      assert.equal(listing2[1], parseEther("2.5"));
    });

    it("Should batch update private listings with private buyers", async function () {
      const { marketplace, bragNFT, seller, privateBuyer, user2 } = await deployFixture();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.2"), parseEther("2.5")], [privateBuyer.account.address, user2.account.address]],
        { account: seller.account }
      );

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing1[3].toLowerCase(), privateBuyer.account.address.toLowerCase());
      assert.equal(listing2[3].toLowerCase(), user2.account.address.toLowerCase());
    });

    it("Should revert batch update listings if array lengths mismatch", async function () {
      const { marketplace, bragNFT, seller } = await deployFixture();

      await assert.rejects(
        marketplace.write.batchUpdateListings(
          [[bragNFT.address], [0n, 1n], [1n], [parseEther("1")]],
          { account: seller.account }
        ),
        /Mismatched arrays/
      );
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batch extend exhibition duration for ERC721", async function () {
      const { vault, bragNFT, seller } = await deployFixture();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Deposit into vault with 100s duration
      await bragNFT.write.approve([vault.address, 0n], { account: seller.account });
      await bragNFT.write.approve([vault.address, 1n], { account: seller.account });

      await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 100n], { account: seller.account });

      // Batch extend by 500s
      await vault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [500n, 500n]],
        { account: seller.account }
      );

      const exp1 = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp2 = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.ok(exp1 > 500n);
      assert.ok(exp2 > 500n);
    });

    it("Should batch extend exhibition duration for ERC1155", async function () {
      const { vault, mock1155, seller } = await deployFixture();

      await mock1155.write.mint([seller.account.address, 1n, 10n]);
      await mock1155.write.mint([seller.account.address, 2n, 10n]);

      await mock1155.write.setApprovalForAll([vault.address, true], { account: seller.account });

      await vault.write.batchExhibit1155([[mock1155.address, mock1155.address], [1n, 2n], [5n, 5n], 100n], { account: seller.account });

      await vault.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [1n, 2n], [300n, 300n]],
        { account: seller.account }
      );

      const exp1 = await vault.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      const exp2 = await vault.read.expiry1155([mock1155.address, 2n, seller.account.address]);

      assert.ok(exp1 > 300n);
      assert.ok(exp2 > 300n);
    });

    it("Should revert batch extend ERC721 if array lengths mismatch", async function () {
      const { vault, bragNFT, seller } = await deployFixture();

      await assert.rejects(
        vault.write.batchExtendExhibition721(
          [[bragNFT.address], [0n, 1n], [100n]],
          { account: seller.account }
        ),
        /Mismatched arrays/
      );
    });
  });

  describe("BragNFT Batch Media Updates", function () {
    it("Should batch update on-chain media by admin", async function () {
      const { bragNFT, owner, seller } = await deployFixture();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["data:image/svg+xml;utf8,media1", "data:image/svg+xml;utf8,media2"]], { account: owner.account });

      const media1 = await bragNFT.read.onChainMedia([0n]);
      const media2 = await bragNFT.read.onChainMedia([1n]);

      assert.equal(media1, "data:image/svg+xml;utf8,media1");
      assert.equal(media2, "data:image/svg+xml;utf8,media2");
    });

    it("Should revert batch update on-chain media if not admin", async function () {
      const { bragNFT, seller } = await deployFixture();

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n], ["media"]], { account: seller.account }),
        /AccessControl/
      );
    });

    it("Should revert batch update on-chain media if array lengths mismatch", async function () {
      const { bragNFT, owner } = await deployFixture();

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media"]], { account: owner.account }),
        /Mismatched arrays/
      );
    });
  });
});
