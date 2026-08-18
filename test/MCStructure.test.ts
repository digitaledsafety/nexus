import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("MCStructure & Marketplace Extensions Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, seller, buyer1, buyer2] = await viem.getWalletClients();

    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [200000000000n]); // $2000 / ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      0n,
      mockPriceFeed.address
    ]);

    const mockUSDC = await viem.deployContract("MockUSDC");
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      mockUSDC.address
    ]);

    return { bragNFT, marketplace, mockUSDC, owner, seller, buyer1, buyer2 };
  }

  describe("BragNFT .mcstructure Multimedia Detection", function () {
    it("Should detect lowercase .mcstructure as multimedia in tokenURI", async function () {
      const { bragNFT, seller } = await deployContracts();

      await bragNFT.write.donate(["Test Structure", "https://example.com/structure.mcstructure"], {
        value: parseEther("0.1"),
        account: seller.account
      });

      const tokenId = (await bragNFT.read.totalSupply()) - 1n;
      const uri = await bragNFT.read.tokenURI([tokenId]);
      const jsonStr = atob(uri.replace("data:application/json;base64,", ""));
      const json = JSON.parse(jsonStr);

      assert.ok(json.animation_url, "animation_url should be present for .mcstructure");
      assert.strictEqual(json.animation_url, "https://example.com/structure.mcstructure");
    });

    it("Should detect uppercase .MCSTRUCTURE as multimedia in tokenURI", async function () {
      const { bragNFT, seller } = await deployContracts();

      await bragNFT.write.donate(["Test Upper Structure", "https://example.com/structure.MCSTRUCTURE"], {
        value: parseEther("0.1"),
        account: seller.account
      });

      const tokenId = (await bragNFT.read.totalSupply()) - 1n;
      const uri = await bragNFT.read.tokenURI([tokenId]);
      const jsonStr = atob(uri.replace("data:application/json;base64,", ""));
      const json = JSON.parse(jsonStr);

      assert.ok(json.animation_url, "animation_url should be present for .MCSTRUCTURE");
      assert.strictEqual(json.animation_url, "https://example.com/structure.MCSTRUCTURE");
    });

    it("Should NOT set animation_url for standard .png image", async function () {
      const { bragNFT, seller } = await deployContracts();

      await bragNFT.write.donate(["Test Regular Image", "https://example.com/art.png"], {
        value: parseEther("0.1"),
        account: seller.account
      });

      const tokenId = (await bragNFT.read.totalSupply()) - 1n;
      const uri = await bragNFT.read.tokenURI([tokenId]);
      const jsonStr = atob(uri.replace("data:application/json;base64,", ""));
      const json = JSON.parse(jsonStr);

      assert.strictEqual(json.animation_url, undefined);
      assert.strictEqual(json.image, "https://example.com/art.png");
    });
  });

  describe("NFTMarketplace Overloaded Listing Updates & Batch Operations", function () {
    it("Should allow updating a listing with private buyer overload", async function () {
      const { bragNFT, marketplace, seller, buyer1 } = await deployContracts();

      // Mint NFT to seller
      await bragNFT.write.donate(["Test Token", "https://example.com/art.png"], {
        value: parseEther("0.1"),
        account: seller.account
      });
      const tokenId = (await bragNFT.read.totalSupply()) - 1n;

      // Approve marketplace
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Seller creates listing
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, 100n * 10n ** 6n], {
        account: seller.account
      });

      // Verify listing is public initially
      let listing = await marketplace.read.listings([bragNFT.address, tokenId, seller.account.address]);
      assert.strictEqual(getAddress(listing[3]), zeroAddress);

      // Seller updates listing to private listing for buyer1
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, 150n * 10n ** 6n, buyer1.account.address], {
        account: seller.account
      });

      listing = await marketplace.read.listings([bragNFT.address, tokenId, seller.account.address]);
      assert.strictEqual(listing[1], 150n * 10n ** 6n);
      assert.strictEqual(getAddress(listing[3]), getAddress(buyer1.account.address));

      // Seller clears private buyer back to zero address
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, 120n * 10n ** 6n, zeroAddress], {
        account: seller.account
      });

      listing = await marketplace.read.listings([bragNFT.address, tokenId, seller.account.address]);
      assert.strictEqual(listing[1], 120n * 10n ** 6n);
      assert.strictEqual(getAddress(listing[3]), zeroAddress);
    });

    it("Should allow batch updating listings", async function () {
      const { bragNFT, marketplace, seller } = await deployContracts();

      await bragNFT.write.donate(["Token 0", "https://example.com/0.png"], { value: parseEther("0.1"), account: seller.account });
      await bragNFT.write.donate(["Token 1", "https://example.com/1.png"], { value: parseEther("0.1"), account: seller.account });

      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, 100n * 10n ** 6n], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, 200n * 10n ** 6n], { account: seller.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [110n * 10n ** 6n, 220n * 10n ** 6n]],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.strictEqual(listing0[1], 110n * 10n ** 6n);
      assert.strictEqual(listing1[1], 220n * 10n ** 6n);
    });

    it("Should allow batch updating private listings", async function () {
      const { bragNFT, marketplace, seller, buyer1, buyer2 } = await deployContracts();

      await bragNFT.write.donate(["Token 0", "https://example.com/0.png"], { value: parseEther("0.1"), account: seller.account });
      await bragNFT.write.donate(["Token 1", "https://example.com/1.png"], { value: parseEther("0.1"), account: seller.account });

      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, 100n * 10n ** 6n], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, 200n * 10n ** 6n], { account: seller.account });

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings(
        [
          [bragNFT.address, bragNFT.address],
          [0n, 1n],
          [1n, 1n],
          [130n * 10n ** 6n, 250n * 10n ** 6n],
          [buyer1.account.address, buyer2.account.address]
        ],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.strictEqual(listing0[1], 130n * 10n ** 6n);
      assert.strictEqual(getAddress(listing0[3]), getAddress(buyer1.account.address));
      assert.strictEqual(listing1[1], 250n * 10n ** 6n);
      assert.strictEqual(getAddress(listing1[3]), getAddress(buyer2.account.address));
    });
  });
});
