import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Missing Batch Features & Validation", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // Deploy ExhibitVault and Registry
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    // Deploy BragToken
    const initialSupply = parseEther("1000000");
    const maxSupply = parseEther("5000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, maxSupply]);

    // Deploy Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Deploy Mock NFTs
    const mock721 = await viem.deployContract("MockRoyaltyNFT", ["Mock721", "M721"]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    // Deploy BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    // Deploy Treasury
    const dummyEntryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, dummyEntryPoint]);

    return { owner, user1, user2, registry, vault, bragToken, marketplace, mock721, mock1155, bragNFT, treasury };
  }

  describe("NFTMarketplace Validation & Batch Listings", function () {
    it("Should revert createOffer/updateOffer for ERC721 if amount != 1", async function () {
      const { owner, user1, marketplace, bragToken, mock721 } = await setup();
      const tokenId = 1n;

      await mock721.write.mint([user1.account.address, tokenId]);
      await bragToken.write.transfer([user1.account.address, parseEther("100")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: user1.account });

      await assert.rejects(
        marketplace.write.createOffer([mock721.address, tokenId, 2n, parseEther("10")], { account: user1.account }),
        /ERC721 offer amount must be 1/
      );

      // Create valid offer with amount 1
      await marketplace.write.createOffer([mock721.address, tokenId, 1n, parseEther("10")], { account: user1.account });

      // Updating with amount != 1 should revert
      await assert.rejects(
        marketplace.write.updateOffer([mock721.address, tokenId, 2n, parseEther("15")], { account: user1.account }),
        /ERC721 offer amount must be 1/
      );
    });

    it("Should allow updating listing with new private buyer", async function () {
      const { user1, user2, marketplace, mock721 } = await setup();
      const tokenId = 10n;

      await mock721.write.mint([user1.account.address, tokenId]);
      await mock721.write.approve([marketplace.address, tokenId], { account: user1.account });

      await marketplace.write.createListing([mock721.address, tokenId, 1n, parseEther("5")], { account: user1.account });

      // Update listing with private buyer
      await marketplace.write.updateListing([mock721.address, tokenId, 1n, parseEther("6"), user2.account.address], { account: user1.account });

      const listing = await marketplace.read.listings([mock721.address, tokenId, user1.account.address]);
      assert.equal(listing[1], parseEther("6")); // price
      assert.equal(getAddress(listing[3]), getAddress(user2.account.address)); // privateBuyer
    });

    it("Should batch update listings", async function () {
      const { user1, marketplace, mock721 } = await setup();
      const token1 = 20n;
      const token2 = 21n;

      await mock721.write.mint([user1.account.address, token1]);
      await mock721.write.mint([user1.account.address, token2]);
      await mock721.write.setApprovalForAll([marketplace.address, true], { account: user1.account });

      await marketplace.write.createListing([mock721.address, token1, 1n, parseEther("2")], { account: user1.account });
      await marketplace.write.createListing([mock721.address, token2, 1n, parseEther("3")], { account: user1.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[mock721.address, mock721.address], [token1, token2], [1n, 1n], [parseEther("4"), parseEther("5")]],
        { account: user1.account }
      );

      const listing1 = await marketplace.read.listings([mock721.address, token1, user1.account.address]);
      const listing2 = await marketplace.read.listings([mock721.address, token2, user1.account.address]);

      assert.equal(listing1[1], parseEther("4"));
      assert.equal(listing2[1], parseEther("5"));
    });
  });

  describe("ExhibitVault Batch Exhibition Extensions", function () {
    it("Should batch extend exhibition duration for ERC721", async function () {
      const { user1, vault, mock721 } = await setup();
      const token1 = 100n;
      const token2 = 101n;

      await mock721.write.mint([user1.account.address, token1]);
      await mock721.write.mint([user1.account.address, token2]);

      await mock721.write.safeTransferFrom([user1.account.address, vault.address, token1], { account: user1.account });
      await mock721.write.safeTransferFrom([user1.account.address, vault.address, token2], { account: user1.account });

      const extension = 3600n; // 1 hour
      await vault.write.batchExtendExhibition721([[mock721.address, mock721.address], [token1, token2], extension], { account: user1.account });

      const expiry1 = await vault.read.expiry721([mock721.address, token1]);
      const expiry2 = await vault.read.expiry721([mock721.address, token2]);

      assert.ok(expiry1 > 0n);
      assert.ok(expiry2 > 0n);
    });

    it("Should batch extend exhibition duration for ERC1155", async function () {
      const { user1, vault, mock1155 } = await setup();
      const id1 = 1n;
      const id2 = 2n;

      await mock1155.write.mint([user1.account.address, id1, 10n]);
      await mock1155.write.mint([user1.account.address, id2, 20n]);
      await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });

      await mock1155.write.safeTransferFrom([user1.account.address, vault.address, id1, 10n, "0x"], { account: user1.account });
      await mock1155.write.safeTransferFrom([user1.account.address, vault.address, id2, 20n, "0x"], { account: user1.account });

      const extension = 7200n; // 2 hours
      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [id1, id2], extension], { account: user1.account });

      const expiry1 = await vault.read.expiry1155([mock1155.address, id1, user1.account.address]);
      const expiry2 = await vault.read.expiry1155([mock1155.address, id2, user1.account.address]);

      assert.ok(expiry1 > 0n);
      assert.ok(expiry2 > 0n);
    });
  });

  describe("BragNFT Batch On-Chain Media Updates", function () {
    it("Should batch update on-chain media as admin", async function () {
      const { owner, user1, bragNFT } = await setup();

      await bragNFT.write.donate(["d1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["d2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["ipfs://media1", "ipfs://media2"]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "ipfs://media1");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "ipfs://media2");
    });
  });

  describe("BragToken Batch Minting", function () {
    it("Should batch mint BRAG tokens to recipients", async function () {
      const { owner, user1, user2, bragToken } = await setup();

      const amount1 = parseEther("100");
      const amount2 = parseEther("200");

      await bragToken.write.batchMint([[user1.account.address, user2.account.address], [amount1, amount2]], { account: owner.account });

      assert.equal(await bragToken.read.balanceOf([user1.account.address]), amount1);
      assert.equal(await bragToken.read.balanceOf([user2.account.address]), amount2);
    });
  });

  describe("Treasury Propose Array Length Validation", function () {
    it("Should revert propose if targets, values, or datas length mismatch", async function () {
      const { owner, treasury, mock721 } = await setup();

      const targets = [mock721.address, mock721.address];
      const values = [0n];
      const datas = ["0x"];

      await assert.rejects(
        treasury.write.propose([targets, values, datas, 0n], { account: owner.account }),
        /Mismatched arrays/
      );
    });
  });
});
