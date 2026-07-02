import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Enhancements v4: BragNFT Colors & ExhibitVault Batches", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, donor, recipient, other] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 3, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 3, "Vault 2", "D2"]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        owner.account.address,
        parseEther("0.01"),
        priceFeed.address
    ]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { registry, vault1, vault2, bragNFT, mock1155, owner, donor, recipient, other };
  }

  describe("BragNFT Dynamic SVG Colors", () => {
    it("Should show correct colors for each TaxStatus", async function () {
      const { bragNFT, donor, owner } = await deployAll();

      // 0: Pending (Indigo #6366f1)
      await bragNFT.write.donate(["Pending", ""], { account: donor.account, value: parseEther("0.1") });
      let uri = await bragNFT.read.tokenURI([0n]);
      let svg = Buffer.from(JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString()).image.split(",")[1], "base64").toString();
      assert.ok(svg.includes('fill="#6366f1"'), "Pending should be Indigo");

      // 1: Verified (Green)
      await bragNFT.write.donate(["Verified", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.setTaxStatus([1n, 1], { account: owner.account });
      uri = await bragNFT.read.tokenURI([1n]);
      svg = Buffer.from(JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString()).image.split(",")[1], "base64").toString();
      assert.ok(svg.includes('fill="green"'), "Verified should be green");

      // 2: Claimed (Gold)
      await bragNFT.write.donate(["Claimed", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.setTaxStatus([2n, 2], { account: owner.account });
      uri = await bragNFT.read.tokenURI([2n]);
      svg = Buffer.from(JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString()).image.split(",")[1], "base64").toString();
      assert.ok(svg.includes('fill="gold"'), "Claimed should be gold");

      // 3: Flagged (Red)
      await bragNFT.write.donate(["Flagged", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.setTaxStatus([3n, 3], { account: owner.account });
      uri = await bragNFT.read.tokenURI([3n]);
      svg = Buffer.from(JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString()).image.split(",")[1], "base64").toString();
      assert.ok(svg.includes('fill="red"'), "Flagged should be red");
    });
  });

  describe("ExhibitVault Batch Operations", () => {
    it("Should batch exhibit ERC721 tokens", async function () {
      const { bragNFT, vault1, donor } = await deployAll();

      await bragNFT.write.donate(["NFT 0", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 1", ""], { account: donor.account, value: parseEther("0.1") });

      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: donor.account });

      await vault1.write.batchExhibit721([bragNFT.address, [0n, 1n], 3600n], { account: donor.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault1.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault1.address));
      assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), getAddress(donor.account.address));
      assert.equal(await vault1.read.owner721([bragNFT.address, 1n]), getAddress(donor.account.address));
    });

    it("Should batch exhibit ERC1155 tokens", async function () {
      const { mock1155, vault1, donor, owner } = await deployAll();

      await mock1155.write.mint([donor.account.address, 10n, 100n], { account: owner.account });
      await mock1155.write.mint([donor.account.address, 11n, 200n], { account: owner.account });

      await mock1155.write.setApprovalForAll([vault1.address, true], { account: donor.account });

      await vault1.write.batchExhibit1155([mock1155.address, [10n, 11n], [50n, 60n], 3600n], { account: donor.account });

      assert.equal(await mock1155.read.balanceOf([vault1.address, 10n]), 50n);
      assert.equal(await mock1155.read.balanceOf([vault1.address, 11n]), 60n);
    });

    it("Should batch move ERC721 tokens from same contract", async function () {
      const { bragNFT, vault1, vault2, donor } = await deployAll();

      await bragNFT.write.donate(["NFT 0", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 1", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: donor.account });
      await vault1.write.batchExhibit721([bragNFT.address, [0n, 1n], 0n], { account: donor.account });

      await vault1.write.moveBatch721([bragNFT.address, [0n, 1n], vault2.address], { account: donor.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault2.address));
    });

    it("Should batch move ERC721 tokens from same contract with duration", async function () {
      const { bragNFT, vault1, vault2, donor } = await deployAll();

      await bragNFT.write.donate(["NFT 0", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: donor.account });
      await vault1.write.batchExhibit721([bragNFT.address, [0n], 0n], { account: donor.account });

      await vault1.write.moveBatch721WithDuration([bragNFT.address, [0n], vault2.address, 7200n], { account: donor.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
      const expiry = await vault2.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry > 0n);
    });
  });

  describe("ExhibitVault Extension", () => {
    it("Should extend ERC721 exhibition duration", async function () {
      const { bragNFT, vault1, donor } = await deployAll();

      await bragNFT.write.donate(["NFT 0", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([vault1.address, true], { account: donor.account });
      await vault1.write.batchExhibit721([bragNFT.address, [0n], 3600n], { account: donor.account });

      const initialExpiry = await vault1.read.expiry721([bragNFT.address, 0n]);

      await vault1.write.extendExhibition721([bragNFT.address, 0n, 3600n], { account: donor.account });

      const newExpiry = await vault1.read.expiry721([bragNFT.address, 0n]);
      assert.equal(newExpiry, initialExpiry + 3600n);
    });

    it("Should extend ERC1155 exhibition duration", async function () {
      const { mock1155, vault1, donor, owner } = await deployAll();

      await mock1155.write.mint([donor.account.address, 10n, 100n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: donor.account });
      await vault1.write.batchExhibit1155([mock1155.address, [10n], [50n], 3600n], { account: donor.account });

      const initialExpiry = await vault1.read.expiry1155([mock1155.address, 10n, donor.account.address]);

      await vault1.write.extendExhibition1155([mock1155.address, 10n, 3600n], { account: donor.account });

      const newExpiry = await vault1.read.expiry1155([mock1155.address, 10n, donor.account.address]);
      assert.equal(newExpiry, initialExpiry + 3600n);
    });
  });
});
