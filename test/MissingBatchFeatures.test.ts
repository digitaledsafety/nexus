import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Missing Batch Features & Hardening", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user, user2] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "Vault 1 Description"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Vault 2 Description"]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, 0n, priceFeed.address]);

    const usdc = await viem.deployContract("MockUSDC", []);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, usdc.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);
    const mockEntryPoint = await viem.deployContract("MockEntryPoint", []);

    const treasury = await viem.deployContract("Treasury", [[owner.account.address, user.account.address], 1n, mockEntryPoint.address]);

    return { registry, vault1, vault2, bragNFT, marketplace, usdc, mock1155, treasury, owner, user, user2 };
  }

  describe("NFTMarketplace New Features", async function () {
    it("Should batch update listings", async function () {
      const { bragNFT, marketplace, user } = await deployContracts();

      await bragNFT.write.donate(["Batch listing 1", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Batch listing 2", ""], { account: user.account, value: parseEther("0.1") });

      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: user.account });

      await marketplace.write.batchCreateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("10"), parseEther("20")]],
        { account: user.account }
      );

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("25")]],
        { account: user.account }
      );

      const l0 = await marketplace.read.listings([bragNFT.address, 0n, user.account.address]);
      assert.equal(l0[1], parseEther("15"));

      const l1 = await marketplace.read.listings([bragNFT.address, 1n, user.account.address]);
      assert.equal(l1[1], parseEther("25"));
    });

    it("Should allow updating a listing with overloaded private buyer", async function () {
      const { bragNFT, marketplace, user, user2 } = await deployContracts();

      await bragNFT.write.donate(["Private listing test", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: user.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: user.account });

      // Update listing with private buyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("12"), user2.account.address], { account: user.account });

      const l = await marketplace.read.listings([bragNFT.address, 0n, user.account.address]);
      assert.equal(l[1], parseEther("12"));
      assert.equal(getAddress(l[3]), getAddress(user2.account.address));
    });
  });

  describe("BragNFT Administrative Batch Media Update", async function () {
    it("Should batch update on-chain media by admin", async function () {
      const { bragNFT, owner, user } = await deployContracts();

      await bragNFT.write.donate(["Token 0", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Token 1", ""], { account: user.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media0.png", "media1.png"]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "media0.png");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "media1.png");
    });

    it("Should revert if non-admin tries to batch update on-chain media", async function () {
      const { bragNFT, user } = await deployContracts();

      await bragNFT.write.donate(["Token 0", ""], { account: user.account, value: parseEther("0.1") });

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n], ["unauthorized.png"]], { account: user.account }),
        /AccessControl/
      );
    });
  });

  describe("ExhibitVault Batch Operations", async function () {
    it("Should batch move ERC721 with duration", async function () {
      const { bragNFT, vault1, vault2, user } = await deployContracts();

      await bragNFT.write.donate(["Token 0", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Token 1", ""], { account: user.account, value: parseEther("0.1") });

      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: user.account });
      await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 0n], { account: user.account });

      // Batch move with duration
      await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 3600n], { account: user.account });

      assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(user.account.address));
      assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(user.account.address));
      assert.ok((await vault2.read.expiry721([bragNFT.address, 0n])) > 0n);
    });

    it("Should batch move ERC1155 with duration", async function () {
      const { mock1155, vault1, vault2, owner, user } = await deployContracts();

      await mock1155.write.mint([user.account.address, 0n, 10n], { account: owner.account });
      await mock1155.write.mint([user.account.address, 1n, 20n], { account: owner.account });

      await mock1155.write.setApprovalForAll([vault1.address, true], { account: user.account });
      await vault1.write.batchExhibit1155([[mock1155.address, mock1155.address], [0n, 1n], [5n, 10n], 0n], { account: user.account });

      // Batch move 1155 with duration
      await vault1.write.batchMove1155WithDuration([[mock1155.address, mock1155.address], [0n, 1n], [5n, 10n], vault2.address, 3600n], { account: user.account });

      assert.equal(await vault2.read.balances1155([mock1155.address, 0n, user.account.address]), 5n);
      assert.equal(await vault2.read.balances1155([mock1155.address, 1n, user.account.address]), 10n);
      assert.ok((await vault2.read.expiry1155([mock1155.address, 0n, user.account.address])) > 0n);
    });

    it("Should batch extend exhibition duration for ERC721 and ERC1155", async function () {
      const { bragNFT, mock1155, vault1, owner, user } = await deployContracts();

      await bragNFT.write.donate(["Token 0", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Token 1", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: user.account });

      await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 100n], { account: user.account });

      await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: user.account });
      assert.ok((await vault1.read.expiry721([bragNFT.address, 0n])) >= 3600n);

      await mock1155.write.mint([user.account.address, 0n, 10n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: user.account });
      await vault1.write.batchExhibit1155([[mock1155.address], [0n], [5n], 100n], { account: user.account });

      await vault1.write.batchExtendExhibition1155([[mock1155.address], [0n], 3600n], { account: user.account });
      assert.ok((await vault1.read.expiry1155([mock1155.address, 0n, user.account.address])) >= 3600n);
    });
  });

  describe("Treasury Array Validation", async function () {
    it("Should revert propose if targets, values, and datas lengths mismatch", async function () {
      const { treasury, owner } = await deployContracts();

      await assert.rejects(
        treasury.write.propose([[owner.account.address], [], [], 0n], { account: owner.account }),
        /Mismatched arrays/
      );
    });
  });
});
