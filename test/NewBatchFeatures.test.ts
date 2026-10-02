import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("New Batch Features & Extensions Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const walletClients = await viem.getWalletClients();
    const [owner, user1, user2] = walletClients;

    // Deploy Mock USDC
    const mockUSDC = await viem.deployContract("MockUSDC");

    // Deploy BragNFT
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      0n, // minimum donation 0
      "0x0000000000000000000000000000000000000000", // priceFeed
    ]);

    // Deploy Mock ERC1155
    const mockERC1155 = await viem.deployContract("MockERC1155");

    // Deploy NFTMarketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      mockUSDC.address,
    ]);

    // Deploy ExhibitRegistry
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);

    // Deploy ExhibitVault
    const exhibitVault = await viem.deployContract("ExhibitVault", [
      owner.account.address,
      registry.address,
    ]);

    // Register/Verify vault
    await registry.write.verifyVault([exhibitVault.address, 1, "Gallery Vault", "Sample Gallery"]);

    // Mint BragNFTs to user1
    await bragNFT.write.donate(["Donation 1", "https://example.com/1.png"], {
      account: user1.account,
      value: 1000000000000000n, // 0.001 ETH
    });
    await bragNFT.write.donate(["Donation 2", "https://example.com/2.png"], {
      account: user1.account,
      value: 1000000000000000n,
    });

    // Mint ERC1155 to user1
    await mockERC1155.write.mint([user1.account.address, 101n, 50n]);
    await mockERC1155.write.mint([user1.account.address, 102n, 50n]);

    return { owner, user1, user2, bragNFT, mockERC1155, mockUSDC, marketplace, registry, exhibitVault };
  }

  describe("ExhibitVault: batchExtendExhibition721 & batchExtendExhibition1155", () => {
    it("should batch extend ERC721 exhibition durations", async () => {
      const { user1, bragNFT, exhibitVault } = await deployFixture();

      // Approve and exhibit tokens
      await bragNFT.write.setApprovalForAll([exhibitVault.address, true], { account: user1.account });
      await exhibitVault.write.batchExhibit721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], // 1 hour duration
        { account: user1.account }
      );

      const expiry0Before = await exhibitVault.read.expiry721([bragNFT.address, 0n]);
      const expiry1Before = await exhibitVault.read.expiry721([bragNFT.address, 1n]);

      // Extend duration by 1800 seconds
      await exhibitVault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1800n, 1800n]],
        { account: user1.account }
      );

      const expiry0After = await exhibitVault.read.expiry721([bragNFT.address, 0n]);
      const expiry1After = await exhibitVault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(expiry0After, expiry0Before + 1800n);
      assert.equal(expiry1After, expiry1Before + 1800n);
    });

    it("should batch extend ERC1155 exhibition durations", async () => {
      const { user1, mockERC1155, exhibitVault } = await deployFixture();

      await mockERC1155.write.setApprovalForAll([exhibitVault.address, true], { account: user1.account });
      await exhibitVault.write.batchExhibit1155(
        [[mockERC1155.address, mockERC1155.address], [101n, 102n], [10n, 10n], 3600n],
        { account: user1.account }
      );

      const expiry101Before = await exhibitVault.read.expiry1155([mockERC1155.address, 101n, user1.account.address]);
      const expiry102Before = await exhibitVault.read.expiry1155([mockERC1155.address, 102n, user1.account.address]);

      await exhibitVault.write.batchExtendExhibition1155(
        [[mockERC1155.address, mockERC1155.address], [101n, 102n], [3600n, 3600n]],
        { account: user1.account }
      );

      const expiry101After = await exhibitVault.read.expiry1155([mockERC1155.address, 101n, user1.account.address]);
      const expiry102After = await exhibitVault.read.expiry1155([mockERC1155.address, 102n, user1.account.address]);

      assert.equal(expiry101After, expiry101Before + 3600n);
      assert.equal(expiry102After, expiry102Before + 3600n);
    });
  });

  describe("NFTMarketplace: overloaded updateListing, batchUpdateListings & batchUpdatePrivateListings", () => {
    it("should allow overloaded updateListing to set and change private buyer", async () => {
      const { user1, user2, bragNFT, marketplace } = await deployFixture();

      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: user1.account });
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, 100n], { account: user1.account });

      let listing = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      assert.equal(listing[3], "0x0000000000000000000000000000000000000000");

      // Overloaded updateListing specifying user2 as privateBuyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, 200n, user2.account.address], { account: user1.account });

      listing = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      assert.equal(listing[1], 200n);
      assert.equal(listing[3].toLowerCase(), user2.account.address.toLowerCase());
    });

    it("should batch update listings and private listings", async () => {
      const { user1, user2, bragNFT, marketplace } = await deployFixture();

      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: user1.account });
      await marketplace.write.batchCreateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [100n, 100n]],
        { account: user1.account }
      );

      // Batch update prices
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [250n, 300n]],
        { account: user1.account }
      );

      let l0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      let l1 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);
      assert.equal(l0[1], 250n);
      assert.equal(l1[1], 300n);

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [500n, 600n], [user2.account.address, user2.account.address]],
        { account: user1.account }
      );

      l0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      l1 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);
      assert.equal(l0[1], 500n);
      assert.equal(l0[3].toLowerCase(), user2.account.address.toLowerCase());
      assert.equal(l1[1], 600n);
      assert.equal(l1[3].toLowerCase(), user2.account.address.toLowerCase());
    });
  });

  describe("BragNFT: batchUpdateOnChainMedia", () => {
    it("should allow admin to batch update on-chain media", async () => {
      const { owner, bragNFT } = await deployFixture();

      await bragNFT.write.batchUpdateOnChainMedia(
        [[0n, 1n], ["<svg>Custom SVG 0</svg>", "<svg>Custom SVG 1</svg>"]],
        { account: owner.account }
      );

      const media0 = await bragNFT.read.onChainMedia([0n]);
      const media1 = await bragNFT.read.onChainMedia([1n]);

      assert.equal(media0, "<svg>Custom SVG 0</svg>");
      assert.equal(media1, "<svg>Custom SVG 1</svg>");
    });

    it("should revert batchUpdateOnChainMedia if called by non-admin", async () => {
      const { user1, bragNFT } = await deployFixture();

      await assert.rejects(
        async () => {
          await bragNFT.write.batchUpdateOnChainMedia(
            [[0n, 1n], ["media0", "media1"]],
            { account: user1.account }
          );
        },
        /AccessControl/
      );
    });
  });
});
