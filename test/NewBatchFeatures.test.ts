import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("New Batch Features & Extended Functionality Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);
    const erc1155 = await viem.deployContract("MockERC1155", []);

    return { bragToken, registry, vault, marketplace, priceFeed, bragNFT, erc1155, owner, user1, user2, treasury };
  }

  describe("BragNFT: batchUpdateOnChainMedia", function () {
    it("should allow admin to batch update on-chain media", async function () {
      const { bragNFT, owner, user1 } = await deployContracts();

      // Mint 2 NFTs
      await bragNFT.write.donate(["Message 1", "ipfs://original1"], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Message 2", "ipfs://original2"], { account: user1.account, value: parseEther("0.1") });

      // Admin batch updates on-chain media
      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["data:image/svg+xml;base64,111", "data:image/svg+xml;base64,222"]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "data:image/svg+xml;base64,111");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "data:image/svg+xml;base64,222");
    });

    it("should revert if non-admin attempts batchUpdateOnChainMedia", async function () {
      const { bragNFT, user1 } = await deployContracts();
      await bragNFT.write.donate(["Message", "ipfs://uri"], { account: user1.account, value: parseEther("0.1") });

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n], ["media"]], { account: user1.account }),
        /AccessControl/
      );
    });

    it("should revert if array lengths mismatch in batchUpdateOnChainMedia", async function () {
      const { bragNFT, owner } = await deployContracts();
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media1"]], { account: owner.account }),
        /Mismatched arrays/
      );
    });
  });

  describe("ExhibitVault: batchExtendExhibition721 & batchExtendExhibition1155", function () {
    it("should allow owner to batch extend ERC721 exhibition duration", async function () {
      const { bragNFT, vault, user1 } = await deployContracts();

      // Mint 2 NFTs to user1
      await bragNFT.write.donate(["NFT1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT2", ""], { account: user1.account, value: parseEther("0.1") });

      // Exhibit 2 NFTs into vault with 100s duration
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n, "0x0000000000000000000000000000000000000000000000000000000000000064"], { account: user1.account });
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n, "0x0000000000000000000000000000000000000000000000000000000000000064"], { account: user1.account });

      const expiry0Before = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1Before = await vault.read.expiry721([bragNFT.address, 1n]);

      // Batch extend by 500s
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 500n], { account: user1.account });

      const expiry0After = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(expiry0After, expiry0Before + 500n);
      assert.equal(expiry1After, expiry1Before + 500n);
    });

    it("should allow holder to batch extend ERC1155 exhibition duration", async function () {
      const { erc1155, vault, owner, user1 } = await deployContracts();

      await erc1155.write.mint([user1.account.address, 10n, 5n], { account: owner.account });
      await erc1155.write.mint([user1.account.address, 20n, 5n], { account: owner.account });

      // Exhibit ERC1155 into vault with 200s duration
      await erc1155.write.safeTransferFrom([user1.account.address, vault.address, 10n, 5n, "0x00000000000000000000000000000000000000000000000000000000000000c8"], { account: user1.account });
      await erc1155.write.safeTransferFrom([user1.account.address, vault.address, 20n, 5n, "0x00000000000000000000000000000000000000000000000000000000000000c8"], { account: user1.account });

      const expiry10Before = await vault.read.expiry1155([erc1155.address, 10n, user1.account.address]);

      // Batch extend ERC1155
      await vault.write.batchExtendExhibition1155([[erc1155.address, erc1155.address], [10n, 20n], 300n], { account: user1.account });

      const expiry10After = await vault.read.expiry1155([erc1155.address, 10n, user1.account.address]);
      assert.equal(expiry10After, expiry10Before + 300n);
    });

    it("should revert if array lengths mismatch in batchExtendExhibition721", async function () {
      const { bragNFT, vault, user1 } = await deployContracts();
      await assert.rejects(
        vault.write.batchExtendExhibition721([[bragNFT.address], [0n, 1n], 100n], { account: user1.account }),
        /Mismatched arrays/
      );
    });
  });

  describe("NFTMarketplace: Overloaded updateListing & Batch Updates", function () {
    it("should allow seller to update listing with a private buyer setting", async function () {
      const { bragNFT, marketplace, user1, user2 } = await deployContracts();

      // Mint NFT to user1
      await bragNFT.write.donate(["Public Listing", ""], { account: user1.account, value: parseEther("0.1") });

      // Create public listing
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });

      // Overloaded updateListing setting privateBuyer to user2
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("2"), user2.account.address], { account: user1.account });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      assert.equal(listing[1], parseEther("2"));
      assert.equal(getAddress(listing[3]), getAddress(user2.account.address));
    });

    it("should allow seller to batch update listings", async function () {
      const { bragNFT, marketplace, user1 } = await deployContracts();

      // Mint 2 NFTs
      await bragNFT.write.donate(["NFT 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 2", ""], { account: user1.account, value: parseEther("0.1") });

      // Create listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: user1.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]], { account: user1.account });

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);

      assert.equal(listing0[1], parseEther("1.5"));
      assert.equal(listing1[1], parseEther("2.5"));
    });

    it("should allow seller to batch update private listings", async function () {
      const { bragNFT, marketplace, user1, user2 } = await deployContracts();

      // Mint 2 NFTs
      await bragNFT.write.donate(["NFT 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 2", ""], { account: user1.account, value: parseEther("0.1") });

      // Create listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: user1.account });

      // Batch update private listings setting user2 as private buyer
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("3"), parseEther("4")], [user2.account.address, user2.account.address]],
        { account: user1.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      assert.equal(listing0[1], parseEther("3"));
      assert.equal(getAddress(listing0[3]), getAddress(user2.account.address));
    });

    it("should revert batch update listings if array lengths mismatch", async function () {
      const { bragNFT, marketplace, user1 } = await deployContracts();
      await assert.rejects(
        marketplace.write.batchUpdateListings([[bragNFT.address], [0n, 1n], [1n], [parseEther("1")]], { account: user1.account }),
        /Mismatched arrays/
      );
    });
  });
});
