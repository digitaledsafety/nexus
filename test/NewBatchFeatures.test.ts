import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("New Batch and Security Features", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"], { account: owner.account });

    return { marketplace, bragNFT, bragToken, registry, vault, mock1155, owner, seller, buyer, buyer2, treasury };
  }

  describe("NFTMarketplace Ownership Verification on Update", function () {
    it("Should prevent updating a listing if seller no longer owns the NFT", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      // Mint NFT to seller
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      // Seller creates listing
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

      // Seller transfers NFT away to buyer directly
      await bragNFT.write.transferFrom([seller.account.address, buyer.account.address, 0n], { account: seller.account });

      // Seller attempts to update listing - should revert because seller no longer owns token #0
      await assert.rejects(
        marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("0.5")], { account: seller.account }),
        /You do not own this NFT/
      );
    });

    it("Should support overloaded updateListing with private buyer", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

      // Update listing setting a private buyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("0.8"), buyer.account.address], { account: seller.account });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("0.8")); // price
      assert.equal(getAddress(listing[3]), getAddress(buyer.account.address)); // privateBuyer
    });

    it("Should batch update listings and private listings", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await marketplace.write.batchCreateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("2")]], { account: seller.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]], { account: seller.account });

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(l1[1], parseEther("1.5"));

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.8"), parseEther("2.8")], [buyer.account.address, buyer.account.address]],
        { account: seller.account }
      );

      const l1Private = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(l1Private[1], parseEther("1.8"));
      assert.equal(getAddress(l1Private[3]), getAddress(buyer.account.address));
    });
  });

  describe("ExhibitVault Batch Exhibition Extensions", function () {
    it("Should batch extend exhibition durations for ERC721 tokens", async function () {
      const { vault, bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Seller approves vault
      await bragNFT.write.setApprovalForAll([vault.address, true], { account: seller.account });

      // Exhibit 2 NFTs into vault for 100 seconds
      await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 100n], { account: seller.account });

      const expiry0Before = await vault.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry0Before > 0n);

      // Batch extend exhibition for 300 additional seconds
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 300n], { account: seller.account });

      const expiry0After = await vault.read.expiry721([bragNFT.address, 0n]);
      assert.equal(expiry0After, expiry0Before + 300n);
    });

    it("Should batch extend exhibition durations for ERC1155 tokens", async function () {
      const { vault, mock1155, owner, seller } = await deployAll();

      await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 2n, 10n], { account: owner.account });

      await mock1155.write.setApprovalForAll([vault.address, true], { account: seller.account });

      await vault.write.batchExhibit1155([[mock1155.address, mock1155.address], [1n, 2n], [5n, 5n], 100n], { account: seller.account });

      const expiry1Before = await vault.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      assert.ok(expiry1Before > 0n);

      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 300n], { account: seller.account });

      const expiry1After = await vault.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      assert.equal(expiry1After, expiry1Before + 300n);
    });
  });

  describe("BragNFT Batch On-Chain Media Updates", function () {
    it("Should allow admin to batch update on-chain media", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media://0", "media://1"]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "media://0");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "media://1");
    });
  });
});
