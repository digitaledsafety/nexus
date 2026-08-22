import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("MCStructure & Smart Contract Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, seller, buyer1, buyer2] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 1, "Vault 1", "Location 1"]);
    await registry.write.verifyVault([vault2.address, 1, "Vault 2", "Location 2"]);

    const paymentToken = await viem.deployContract("MockUSDC", []);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      0n,
      "0x0000000000000000000000000000000000000000"
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, paymentToken.address]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { owner, seller, buyer1, buyer2, registry, vault1, vault2, paymentToken, bragNFT, marketplace, mock1155 };
  }

  describe("BragNFT .mcstructure Multimedia Detection", async function () {
    it("should detect lowercase and uppercase .mcstructure extensions as multimedia", async function () {
      const { bragNFT, seller } = await deployFixture();

      // Lowercase .mcstructure
      await bragNFT.write.donate(["Minecraft Structure", "https://example.com/build.mcstructure"], {
        account: seller.account,
        value: parseEther("0.01")
      });
      const uri1 = await bragNFT.read.tokenURI([0n]);
      const json1 = JSON.parse(atob(uri1.split(",")[1]));
      assert.equal(json1.animation_url, "https://example.com/build.mcstructure");

      // Uppercase .MCSTRUCTURE
      await bragNFT.write.donate(["Minecraft Structure Uppercase", "https://example.com/BUILD.MCSTRUCTURE"], {
        account: seller.account,
        value: parseEther("0.01")
      });
      const uri2 = await bragNFT.read.tokenURI([1n]);
      const json2 = JSON.parse(atob(uri2.split(",")[1]));
      assert.equal(json2.animation_url, "https://example.com/BUILD.MCSTRUCTURE");
    });
  });

  describe("NFTMarketplace Overloaded & Batch Listing Updates", async function () {
    it("should allow updating listing with private buyer overload", async function () {
      const { bragNFT, marketplace, seller, buyer1 } = await deployFixture();

      await bragNFT.write.donate(["Listing Item 1", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });

      // Overloaded update listing with private buyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("15"), buyer1.account.address], {
        account: seller.account
      });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("15")); // price
      assert.equal(getAddress(listing[3]), getAddress(buyer1.account.address)); // privateBuyer
    });

    it("should allow batch updating public listings", async function () {
      const { bragNFT, marketplace, seller } = await deployFixture();

      await bragNFT.write.donate(["Item 1", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.donate(["Item 2", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("12"), parseEther("22")]],
        { account: seller.account }
      );

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(l1[1], parseEther("12"));
      assert.equal(l2[1], parseEther("22"));
    });

    it("should allow batch updating private listings", async function () {
      const { bragNFT, marketplace, seller, buyer1, buyer2 } = await deployFixture();

      await bragNFT.write.donate(["Item 1", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.donate(["Item 2", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      await marketplace.write.batchUpdatePrivateListings(
        [
          [bragNFT.address, bragNFT.address],
          [0n, 1n],
          [1n, 1n],
          [parseEther("12"), parseEther("22")],
          [buyer1.account.address, buyer2.account.address]
        ],
        { account: seller.account }
      );

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(getAddress(l1[3]), getAddress(buyer1.account.address));
      assert.equal(getAddress(l2[3]), getAddress(buyer2.account.address));
    });
  });

  describe("ExhibitVault Batch Move ERC721", async function () {
    it("should move batch of tokens from same contract using moveBatch721 and moveBatch721WithDuration", async function () {
      const { bragNFT, vault1, vault2, seller } = await deployFixture();

      await bragNFT.write.donate(["Vault Token 0", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.donate(["Vault Token 1", ""], { account: seller.account, value: parseEther("0.01") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: seller.account });

      // Exhibit tokens in vault1
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      // Move batch without duration
      await vault1.write.moveBatch721([bragNFT.address, [0n, 1n], vault2.address], { account: seller.account });

      assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), "0x0000000000000000000000000000000000000000");
      assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
      assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(seller.account.address));

      // Move back with duration
      await vault2.write.moveBatch721WithDuration([bragNFT.address, [0n, 1n], vault1.address, 3600n], {
        account: seller.account
      });

      assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
      assert.ok(await vault1.read.expiry721([bragNFT.address, 0n]) > 0n);
    });
  });
});
