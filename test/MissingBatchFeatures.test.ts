import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Missing Batch Features", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // Deploy ExhibitVault and Registry
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Test Vault 1", "Description 1"]);
    await registry.write.verifyVault([vault2.address, 0, "Test Vault 2", "Description 2"]);

    // Deploy BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    // Deploy Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Deploy Mock NFTs
    const mock721 = await viem.deployContract("MockRoyaltyNFT", ["Mock721", "M721"]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    // Deploy BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    return { owner, user1, user2, vault1, vault2, registry, bragToken, marketplace, mock721, mock1155, bragNFT };
  }

  describe("ExhibitVault: Batch Extension and Batch Move with Duration", function () {
    it("Should batch extend exhibition721", async function () {
      const { user1, vault1, mock721 } = await setup();

      // Mint and deposit ERC721
      const tokenIds = [1n, 2n];
      for (const id of tokenIds) {
        await mock721.write.mint([user1.account.address, id]);
        await mock721.write.approve([vault1.address, id], { account: user1.account });
        await mock721.write.safeTransferFrom([user1.account.address, vault1.address, id], { account: user1.account });
      }

      // Check owner and default/no expiry
      assert.equal(await vault1.read.owner721([mock721.address, 1n]), getAddress(user1.account.address));
      assert.equal(await vault1.read.expiry721([mock721.address, 1n]), 0n);

      // Batch extend
      const durations = [3600n, 7200n];
      await vault1.write.batchExtendExhibition721(
        [[mock721.address, mock721.address], tokenIds, durations],
        { account: user1.account }
      );

      // Verify new expiries
      const exp1 = await vault1.read.expiry721([mock721.address, 1n]);
      const exp2 = await vault1.read.expiry721([mock721.address, 2n]);
      assert.ok(exp1 > 0n);
      assert.ok(exp2 > 0n);
    });

    it("Should batch extend exhibition1155", async function () {
      const { user1, vault1, mock1155 } = await setup();

      const tokenIds = [1n, 2n];
      const amounts = [5n, 10n];

      await mock1155.write.mint([user1.account.address, 1n, 100n]);
      await mock1155.write.mint([user1.account.address, 2n, 100n]);
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: user1.account });

      await mock1155.write.safeBatchTransferFrom([user1.account.address, vault1.address, tokenIds, amounts, "0x"], { account: user1.account });

      // Batch extend
      const durations = [3600n, 7200n];
      await vault1.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], tokenIds, durations],
        { account: user1.account }
      );

      // Verify new expiries
      const exp1 = await vault1.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const exp2 = await vault1.read.expiry1155([mock1155.address, 2n, user1.account.address]);
      assert.ok(exp1 > 0n);
      assert.ok(exp2 > 0n);
    });

    it("Should batchMove721WithDuration", async function () {
      const { user1, vault1, vault2, mock721 } = await setup();

      const tokenIds = [3n, 4n];
      for (const id of tokenIds) {
        await mock721.write.mint([user1.account.address, id]);
        await mock721.write.approve([vault1.address, id], { account: user1.account });
        await mock721.write.safeTransferFrom([user1.account.address, vault1.address, id], { account: user1.account });
      }

      // Batch move with 1800s duration to vault2
      await vault1.write.batchMove721WithDuration(
        [[mock721.address, mock721.address], tokenIds, vault2.address, 1800n],
        { account: user1.account }
      );

      // Verify they are now in vault2 and have expiry set
      assert.equal(await vault2.read.owner721([mock721.address, 3n]), getAddress(user1.account.address));
      assert.equal(await vault2.read.owner721([mock721.address, 4n]), getAddress(user1.account.address));
      assert.ok(await vault2.read.expiry721([mock721.address, 3n]) > 0n);
    });

    it("Should batchMove1155WithDuration", async function () {
      const { user1, vault1, vault2, mock1155 } = await setup();

      const tokenIds = [3n, 4n];
      const amounts = [15n, 25n];

      await mock1155.write.mint([user1.account.address, 3n, 100n]);
      await mock1155.write.mint([user1.account.address, 4n, 100n]);
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: user1.account });

      await mock1155.write.safeBatchTransferFrom([user1.account.address, vault1.address, tokenIds, amounts, "0x"], { account: user1.account });

      // Batch move with 3600s duration to vault2
      await vault1.write.batchMove1155WithDuration(
        [[mock1155.address, mock1155.address], tokenIds, amounts, vault2.address, 3600n],
        { account: user1.account }
      );

      // Verify they are now in vault2 with balance and expiry set
      assert.equal(await vault2.read.balances1155([mock1155.address, 3n, user1.account.address]), 15n);
      assert.equal(await vault2.read.balances1155([mock1155.address, 4n, user1.account.address]), 25n);
      assert.ok(await vault2.read.expiry1155([mock1155.address, 3n, user1.account.address]) > 0n);
    });
  });

  describe("NFTMarketplace: Listing Updates & Batch Updating", function () {
    it("Should batch update multiple listings", async function () {
      const { user1, marketplace, mock721 } = await setup();

      const tokenIds = [1n, 2n];
      for (const id of tokenIds) {
        await mock721.write.mint([user1.account.address, id]);
        await mock721.write.approve([marketplace.address, id], { account: user1.account });
      }

      // Create listings first
      await marketplace.write.batchCreateListings(
        [[mock721.address, mock721.address], tokenIds, [1n, 1n], [parseEther("1"), parseEther("2")]],
        { account: user1.account }
      );

      // Batch update prices and amounts (since it's ERC721 amount must be 1)
      await marketplace.write.batchUpdateListings(
        [[mock721.address, mock721.address], tokenIds, [1n, 1n], [parseEther("1.5"), parseEther("2.5")]],
        { account: user1.account }
      );

      // Verify the new prices
      const l1 = await marketplace.read.listings([mock721.address, 1n, user1.account.address]);
      const l2 = await marketplace.read.listings([mock721.address, 2n, user1.account.address]);

      assert.equal(l1[1], parseEther("1.5")); // price is index 1 of structure Listing
      assert.equal(l2[1], parseEther("2.5"));
    });

    it("Should allow updating listing with a private buyer", async function () {
      const { user1, user2, marketplace, mock721 } = await setup();

      await mock721.write.mint([user1.account.address, 3n]);
      await mock721.write.approve([marketplace.address, 3n], { account: user1.account });

      // Create a public listing
      await marketplace.write.createListing([mock721.address, 3n, 1n, parseEther("10")], { account: user1.account });

      const lInitial = await marketplace.read.listings([mock721.address, 3n, user1.account.address]);
      assert.equal(lInitial[3], zeroAddress); // privateBuyer is index 3

      // Update with private buyer
      await marketplace.write.updateListing(
        [mock721.address, 3n, 1n, parseEther("8"), user2.account.address],
        { account: user1.account }
      );

      const lUpdated = await marketplace.read.listings([mock721.address, 3n, user1.account.address]);
      assert.equal(lUpdated[1], parseEther("8"));
      assert.equal(lUpdated[3], getAddress(user2.account.address));
    });
  });

  describe("BragNFT: Admin Batch Update On-Chain Media", function () {
    it("Should allow admin to batch update on-chain media", async function () {
      const { owner, bragNFT } = await setup();

      // Mint two BragNFTs
      await bragNFT.write.donate(["Donation 1", "ipfs://initial-1"], { value: parseEther("0.1") });
      await bragNFT.write.donate(["Donation 2", "ipfs://initial-2"], { value: parseEther("0.1") });

      // Verify initial states
      assert.equal(await bragNFT.read.tokenURI([0n]), await bragNFT.read.tokenURI([0n])); // just check it doesn't revert

      // Batch update on-chain media
      await bragNFT.write.batchUpdateOnChainMedia(
        [[0n, 1n], ["new-svg-art-1", "new-svg-art-2"]],
        { account: owner.account }
      );

      // Verify they are stored in onChainMedia
      assert.equal(await bragNFT.read.onChainMedia([0n]), "new-svg-art-1");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "new-svg-art-2");
    });
  });
});
