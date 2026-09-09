import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("New Batch Operations & Security Fixes Unit Tests", async function () {
  const { viem } = await network.connect();

  async function setupContracts() {
    const [owner, seller, buyer, buyer2, otherUser] = await viem.getWalletClients();

    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      initialSupply,
      initialSupply * 2n,
    ]);
    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [200000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1"),
      mockPriceFeed.address,
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);
    const mock1155 = await viem.deployContract("MockERC1155");

    return {
      owner,
      seller,
      buyer,
      buyer2,
      otherUser,
      bragToken,
      bragNFT,
      registry,
      vault,
      marketplace,
      mock1155,
    };
  }

  describe("NFTMarketplace New Features & Fixes", function () {
    it("Should enforce ownership check on updateListing if seller transferred token", async function () {
      const { marketplace, bragNFT, seller, buyer } = await setupContracts();

      // Mint NFT for seller
      await bragNFT.write.donate(["nft1", "desc1"], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      // Create listing
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")], {
        account: seller.account,
      });

      // Seller transfers NFT to buyer directly
      await bragNFT.write.transferFrom([seller.account.address, buyer.account.address, tokenId], {
        account: seller.account,
      });

      // Seller tries to update listing for NFT they no longer own
      await assert.rejects(
        marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("5")], {
          account: seller.account,
        }),
        /You do not own this NFT/
      );
    });

    it("Should update listing with new private buyer", async function () {
      const { marketplace, bragNFT, seller, buyer } = await setupContracts();

      await bragNFT.write.donate(["nft1", "desc1"], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")], {
        account: seller.account,
      });

      // Update listing to set private buyer to buyer
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("10"), buyer.account.address], {
        account: seller.account,
      });

      const listing = await marketplace.read.listings([bragNFT.address, tokenId, seller.account.address]);
      assert.equal(listing[3].toLowerCase(), buyer.account.address.toLowerCase());
    });

    it("Should batch update listings", async function () {
      const { marketplace, bragNFT, seller } = await setupContracts();

      await bragNFT.write.donate(["nft1", "desc1"], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", "desc2"], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

      await marketplace.write.batchCreateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("10"), parseEther("20")]],
        { account: seller.account }
      );

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("25")]],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing0[1], parseEther("15"));
      assert.equal(listing1[1], parseEther("25"));
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batch extend ERC721 exhibition duration", async function () {
      const { vault, bragNFT, seller } = await setupContracts();

      await bragNFT.write.donate(["nft1", "desc1"], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", "desc2"], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 1n], { account: seller.account });

      const initialExpiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const initialExpiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      await vault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [3600n, 7200n]],
        { account: seller.account }
      );

      const newExpiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const newExpiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      assert(newExpiry0 >= initialExpiry0 + 3600n);
      assert(newExpiry1 >= initialExpiry1 + 7200n);
    });

    it("Should batch extend ERC1155 exhibition duration", async function () {
      const { vault, mock1155, seller } = await setupContracts();

      await mock1155.write.mint([seller.account.address, 1n, 10n]);
      await mock1155.write.mint([seller.account.address, 2n, 20n]);

      await mock1155.write.safeTransferFrom([seller.account.address, vault.address, 1n, 5n, "0x"], {
        account: seller.account,
      });
      await mock1155.write.safeTransferFrom([seller.account.address, vault.address, 2n, 10n, "0x"], {
        account: seller.account,
      });

      await vault.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [1n, 2n], [1800n, 3600n]],
        { account: seller.account }
      );

      const expiry0 = await vault.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      const expiry1 = await vault.read.expiry1155([mock1155.address, 2n, seller.account.address]);

      assert(expiry0 > 0n);
      assert(expiry1 > 0n);
    });
  });
});
