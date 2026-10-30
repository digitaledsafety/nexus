import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("New Batch Features & Listing Security Unit Tests", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, otherUser, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("2000000")
    ]);
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address
    ]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155");

    // Verify vault in registry
    await registry.write.verifyVault([vault.address, 0, "Gallery Vault", "Test Vault"], { account: owner.account });

    return { marketplace, bragNFT, bragToken, registry, vault, mock1155, owner, seller, buyer, otherUser, treasury };
  }

  describe("NFTMarketplace Security & Updates", function () {
    it("Should enforce ownership check on listing update when seller transfers NFT away", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      // Mint NFT 0 to seller
      await bragNFT.write.donate(["test item", ""], { account: seller.account, value: parseEther("0.1") });

      // Seller creates listing for NFT 0 at 1 BRAG
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

      // Seller transfers NFT 0 to buyer outside marketplace
      await bragNFT.write.transferFrom([seller.account.address, buyer.account.address, 0n], { account: seller.account });

      // Seller attempts to update listing price/amount; must revert because seller no longer owns NFT
      await assert.rejects(
        marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("2")], { account: seller.account }),
        /You do not own this NFT/
      );
    });

    it("Should update listing with overloaded private buyer updateListing", async function () {
      const { marketplace, bragNFT, seller, buyer, otherUser } = await deployAll();

      // Mint NFT 0 to seller
      await bragNFT.write.donate(["test item", ""], { account: seller.account, value: parseEther("0.1") });

      // Seller creates standard listing
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

      // Seller updates listing to private listing restricted to buyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1.5"), buyer.account.address], { account: seller.account });

      const updatedListing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(updatedListing[1], parseEther("1.5"));
      assert.equal(getAddress(updatedListing[3]), getAddress(buyer.account.address));

      // Attempt purchase from otherUser should fail
      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, 0n, seller.account.address, parseEther("1.5")], { account: otherUser.account }),
        /Private listing: only the specified buyer can purchase/
      );
    });

    it("Should batch update listings and private listings", async function () {
      const { marketplace, bragNFT, seller, buyer, owner } = await deployAll();

      // Mint 2 NFTs to seller
      await bragNFT.write.donate(["item 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["item 2", ""], { account: seller.account, value: parseEther("0.1") });

      // Create listings for both NFTs
      await marketplace.write.batchCreateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("2")]], { account: seller.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]], { account: seller.account });

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing1[1], parseEther("1.5"));
      assert.equal(listing2[1], parseEther("2.5"));

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("2"), parseEther("3")], [buyer.account.address, buyer.account.address]],
        { account: seller.account }
      );

      const private1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(private1[1], parseEther("2"));
      assert.equal(getAddress(private1[3]), getAddress(buyer.account.address));
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batch extend exhibition duration for ERC721 and ERC1155 tokens", async function () {
      const { vault, bragNFT, mock1155, seller, owner } = await deployAll();

      // Mint 2 ERC721 tokens to seller and exhibit them
      await bragNFT.write.donate(["item 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["item 2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 0n, "0x"], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 1n, "0x"], { account: seller.account });

      // Batch extend ERC721 duration by 3600 seconds
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: seller.account });

      const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1 = await vault.read.expiry721([bragNFT.address, 1n]);
      assert.ok(expiry0 > 0n);
      assert.ok(expiry1 > 0n);

      // Mint 2 ERC1155 tokens to seller and exhibit them
      await mock1155.write.mint([seller.account.address, 10n, 100n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 20n, 200n], { account: owner.account });

      await mock1155.write.safeTransferFrom([seller.account.address, vault.address, 10n, 50n, "0x"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault.address, 20n, 100n, "0x"], { account: seller.account });

      // Batch extend ERC1155 duration by 7200 seconds
      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [10n, 20n], 7200n], { account: seller.account });

      const expiry1155_10 = await vault.read.expiry1155([mock1155.address, 10n, seller.account.address]);
      const expiry1155_20 = await vault.read.expiry1155([mock1155.address, 20n, seller.account.address]);
      assert.ok(expiry1155_10 > 0n);
      assert.ok(expiry1155_20 > 0n);
    });
  });

  describe("BragNFT Batch On-Chain Media Updates", function () {
    it("Should batch update on-chain media when called by DEFAULT_ADMIN_ROLE", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      // Mint 2 tokens to seller
      await bragNFT.write.donate(["item 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["item 2", ""], { account: seller.account, value: parseEther("0.1") });

      // Admin batch updates media
      const mediaList = ["https://cdn.example.com/item1.glb", "https://cdn.example.com/item2.glb"];
      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], mediaList], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), mediaList[0]);
      assert.equal(await bragNFT.read.onChainMedia([1n]), mediaList[1]);

      // Non-admin call should revert
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], mediaList], { account: seller.account }),
        /AccessControl/
      );
    });
  });
});
