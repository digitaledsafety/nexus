import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("New Batch Features & Listing Overloads Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer1, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "Gallery 1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Gallery 2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer1, buyer2, treasury };
  }

  describe("NFTMarketplace Overloaded updateListing & Batch Updates", function () {
    it("should allow updating listing with a private buyer specified", async function () {
      const { marketplace, bragNFT, seller, buyer1, buyer2 } = await deployAll();

      // Donate to mint NFT #0
      await bragNFT.write.donate(["Donation 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

      // Create public listing first
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("50")], { account: seller.account });

      // Overloaded updateListing to set private buyer as buyer1
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("40"), buyer1.account.address], { account: seller.account });

      const updatedListing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(updatedListing[1], parseEther("40"));
      assert.equal(getAddress(updatedListing[3]), getAddress(buyer1.account.address));
    });

    it("should batch update listings (public)", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["D1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["D2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("100")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("200")], { account: seller.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("150"), parseEther("250")]],
        { account: seller.account }
      );

      const l0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(l0[1], parseEther("150"));
      assert.equal(l1[1], parseEther("250"));
    });

    it("should batch update private listings", async function () {
      const { marketplace, bragNFT, seller, buyer1, buyer2 } = await deployAll();

      await bragNFT.write.donate(["D1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["D2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("100")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("200")], { account: seller.account });

      // Batch update with private buyers
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("80"), parseEther("180")], [buyer1.account.address, buyer2.account.address]],
        { account: seller.account }
      );

      const l0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(l0[1], parseEther("80"));
      assert.equal(getAddress(l0[3]), getAddress(buyer1.account.address));

      assert.equal(l1[1], parseEther("180"));
      assert.equal(getAddress(l1[3]), getAddress(buyer2.account.address));
    });
  });

  describe("BragNFT batchUpdateOnChainMedia", function () {
    it("should allow admin to batch update on-chain media", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["Token 0", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Token 1", ""], { account: seller.account, value: parseEther("0.1") });

      const media0 = "ipfs://Qmbatch0";
      const media1 = "ipfs://Qmbatch1";

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], [media0, media1]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), media0);
      assert.equal(await bragNFT.read.onChainMedia([1n]), media1);
    });
  });

  describe("ExhibitVault batchExtendExhibition", function () {
    it("should batch extend exhibition duration for ERC721 tokens", async function () {
      const { bragNFT, vault1, seller } = await deployAll();

      await bragNFT.write.donate(["NFT 0", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 1", ""], { account: seller.account, value: parseEther("0.1") });

      // Exhibit with 100 seconds initial duration
      const duration = 100n;
      const data = "0x" + BigInt(duration).toString(16).padStart(64, "0");

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n, data], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n, data], { account: seller.account });

      const expiry0Before = await vault1.read.expiry721([bragNFT.address, 0n]);
      const expiry1Before = await vault1.read.expiry721([bragNFT.address, 1n]);

      // Batch extend exhibition by 500 seconds
      await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 500n], { account: seller.account });

      const expiry0After = await vault1.read.expiry721([bragNFT.address, 0n]);
      const expiry1After = await vault1.read.expiry721([bragNFT.address, 1n]);

      assert.equal(expiry0After, expiry0Before + 500n);
      assert.equal(expiry1After, expiry1Before + 500n);
    });

    it("should batch extend exhibition duration for ERC1155 tokens", async function () {
      const { mock1155, vault1, seller, owner } = await deployAll();

      await mock1155.write.mint([seller.account.address, 10n, 100n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 20n, 200n], { account: owner.account });

      const initialDuration = 100n;
      const data = "0x" + BigInt(initialDuration).toString(16).padStart(64, "0");

      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 10n, 50n, data], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 20n, 50n, data], { account: seller.account });

      const exp10Before = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
      const exp20Before = await vault1.read.expiry1155([mock1155.address, 20n, seller.account.address]);

      // Batch extend exhibition by 1000 seconds
      await vault1.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [10n, 20n], 1000n], { account: seller.account });

      const exp10After = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
      const exp20After = await vault1.read.expiry1155([mock1155.address, 20n, seller.account.address]);

      assert.equal(exp10After, exp10Before + 1000n);
      assert.equal(exp20After, exp20Before + 1000n);
    });
  });
});
