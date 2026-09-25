import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("New Batch Features & Overloaded Listing Tests", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("2000000"),
    ]);
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address,
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return {
      marketplace,
      bragNFT,
      bragToken,
      registry,
      vault1,
      vault2,
      mock1155,
      owner,
      seller,
      buyer,
      buyer2,
      treasury,
    };
  }

  describe("NFTMarketplace New Batch & Overloaded Functions", function () {
    it("should allow updating listing with explicit privateBuyer overload", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

      // Create initial listing
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], {
        account: seller.account,
      });

      // Update with privateBuyer overload
      await marketplace.write.updateListing(
        [bragNFT.address, 0n, 1n, parseEther("15"), buyer.account.address],
        { account: seller.account }
      );

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("15")); // price
      assert.equal(listing[3].toLowerCase(), buyer.account.address.toLowerCase()); // privateBuyer
    });

    it("should batch update public listings with batchUpdateListings", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("12"), parseEther("25")]],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing0[1], parseEther("12"));
      assert.equal(listing1[1], parseEther("25"));
    });

    it("should batch update private listings with batchUpdatePrivateListings", async function () {
      const { marketplace, bragNFT, seller, buyer, buyer2 } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      await marketplace.write.batchUpdatePrivateListings(
        [
          [bragNFT.address, bragNFT.address],
          [0n, 1n],
          [1n, 1n],
          [parseEther("11"), parseEther("22")],
          [buyer.account.address, buyer2.account.address],
        ],
        { account: seller.account }
      );

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing0[3].toLowerCase(), buyer.account.address.toLowerCase());
      assert.equal(listing1[3].toLowerCase(), buyer2.account.address.toLowerCase());
    });
  });

  describe("ExhibitVault New Batch & Duration Extension Functions", function () {
    it("should batch extend exhibition 721 duration with batchExtendExhibition721", async function () {
      const { bragNFT, vault1, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: seller.account });

      await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], {
        account: seller.account,
      });

      const expiry0Before = await vault1.read.expiry721([bragNFT.address, 0n]);
      await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1800n], {
        account: seller.account,
      });

      const expiry0After = await vault1.read.expiry721([bragNFT.address, 0n]);
      assert.equal(expiry0After - expiry0Before, 1800n);
    });

    it("should batch extend exhibition 1155 duration with batchExtendExhibition1155", async function () {
      const { mock1155, vault1, seller, owner } = await deployAll();

      await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 2n, 20n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });

      await vault1.write.batchExhibit1155([[mock1155.address, mock1155.address], [1n, 2n], [5n, 10n], 3600n], {
        account: seller.account,
      });

      const expiry1Before = await vault1.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      await vault1.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 1800n], {
        account: seller.account,
      });

      const expiry1After = await vault1.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      assert.equal(expiry1After - expiry1Before, 1800n);
    });

    it("should batch move 721 with custom duration using batchMove721WithDuration", async function () {
      const { bragNFT, vault1, vault2, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: seller.account });

      await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 0n], {
        account: seller.account,
      });

      await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 7200n], {
        account: seller.account,
      });

      assert.equal((await vault2.read.owner721([bragNFT.address, 0n])).toLowerCase(), seller.account.address.toLowerCase());
      assert.equal((await vault2.read.owner721([bragNFT.address, 1n])).toLowerCase(), seller.account.address.toLowerCase());
      assert.ok((await vault2.read.expiry721([bragNFT.address, 0n])) > 0n);
    });

    it("should batch move 1155 with custom duration using batchMove1155WithDuration", async function () {
      const { mock1155, vault1, vault2, seller, owner } = await deployAll();

      await mock1155.write.mint([seller.account.address, 10n, 50n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 20n, 50n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });

      await vault1.write.batchExhibit1155([[mock1155.address, mock1155.address], [10n, 20n], [5n, 10n], 0n], {
        account: seller.account,
      });

      await vault1.write.batchMove1155WithDuration(
        [[mock1155.address, mock1155.address], [10n, 20n], [5n, 10n], vault2.address, 5000n],
        { account: seller.account }
      );

      assert.equal(await vault2.read.balances1155([mock1155.address, 10n, seller.account.address]), 5n);
      assert.equal(await vault2.read.balances1155([mock1155.address, 20n, seller.account.address]), 10n);
      assert.ok((await vault2.read.expiry1155([mock1155.address, 10n, seller.account.address])) > 0n);
    });
  });

  describe("BragNFT batchUpdateOnChainMedia Admin Function", function () {
    it("should allow admin to batch update on-chain media", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["<svg>media1</svg>", "<svg>media2</svg>"]], {
        account: owner.account,
      });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "<svg>media1</svg>");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "<svg>media2</svg>");
    });

    it("should revert if non-admin attempts batchUpdateOnChainMedia", async function () {
      const { bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await assert.rejects(
        async () => {
          await bragNFT.write.batchUpdateOnChainMedia([[0n], ["<svg>media</svg>"]], {
            account: seller.account,
          });
        },
        (err: any) => err.message.includes("AccessControl")
      );
    });
  });
});
