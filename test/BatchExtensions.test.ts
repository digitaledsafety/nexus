import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, donor, recipient1, recipient2, user2] = await viem.getWalletClients();

    const initialSupply = parseEther("1000000000");
    const maxSupply = parseEther("10000000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, maxSupply]);

    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address, user2.account.address], 2n, entryPointAddress]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 / ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      parseEther("0.01"),
      priceFeed.address
    ]);

    await bragNFT.write.setBragToken([bragToken.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "Desc"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { bragNFT, bragToken, treasury, vault, mock1155, owner, donor, recipient1, recipient2, user2 };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should execute batchDonate and handle ETH dust allocation", async function () {
      const { bragNFT, donor, treasury } = await deployAll();

      const messages = ["Donor NFT 1", "Donor NFT 2"];
      const uris = ["uri1", "uri2"];
      // Total 0.05 ETH for 2 NFTs = 0.025 ETH each
      const totalVal = parseEther("0.05");

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBal = await publicClient.getBalance({ address: treasury.address });

      await bragNFT.write.batchDonate([messages, uris], {
        account: donor.account,
        value: totalVal
      });

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(donor.account.address));

      const finalTreasuryBal = await publicClient.getBalance({ address: treasury.address });
      assert.equal(finalTreasuryBal - initialTreasuryBal, totalVal);

      // Verify tax records
      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record1 = await bragNFT.read.taxRegistry([1n]);
      assert.equal(record0[2], parseEther("0.025"));
      assert.equal(record1[2], parseEther("0.025"));
    });

    it("Should execute batchDonateTo for multiple recipients", async function () {
      const { bragNFT, donor, recipient1, recipient2 } = await deployAll();

      const recipients = [recipient1.account.address, recipient2.account.address];
      const messages = ["Gift 1", "Gift 2"];
      const uris = ["uri1", "uri2"];

      await bragNFT.write.batchDonateTo([recipients, messages, uris], {
        account: donor.account,
        value: parseEther("0.04")
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(recipient1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(recipient2.account.address));
    });

    it("Should batchTopUp NFTs with ETH", async function () {
      const { bragNFT, donor } = await deployAll();

      await bragNFT.write.donate(["Base 1", ""], { account: donor.account, value: parseEther("0.02") });
      await bragNFT.write.donate(["Base 2", ""], { account: donor.account, value: parseEther("0.02") });

      const expiry0Before = await bragNFT.read.glowExpiry([0n]);

      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: donor.account,
        value: parseEther("0.002") // $2.50 each at $2500 ETH
      });

      const expiry0After = await bragNFT.read.glowExpiry([0n]);
      assert.equal(expiry0After - expiry0Before, 30n * 24n * 3600n);
    });

    it("Should batchTopUpWithBrag using BRAG tokens", async function () {
      const { bragNFT, bragToken, donor, owner, treasury } = await deployAll();

      await bragNFT.write.donate(["Base 1", ""], { account: donor.account, value: parseEther("0.02") });
      await bragNFT.write.donate(["Base 2", ""], { account: donor.account, value: parseEther("0.02") });

      const bragAmount = parseEther("2000000"); // 2M BRAG for 2 tokens
      await bragToken.write.transfer([donor.account.address, bragAmount], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, bragAmount], { account: donor.account });

      const expiry0Before = await bragNFT.read.glowExpiry([0n]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: donor.account });

      const expiry0After = await bragNFT.read.glowExpiry([0n]);
      assert.equal(expiry0After - expiry0Before, 30n * 24n * 3600n);
      assert.equal(await bragToken.read.balanceOf([treasury.address]), bragAmount);
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batchExtendExhibition721", async function () {
      const { bragNFT, vault, donor } = await deployAll();

      await bragNFT.write.donate(["N1", ""], { account: donor.account, value: parseEther("0.02") });
      await bragNFT.write.donate(["N2", ""], { account: donor.account, value: parseEther("0.02") });

      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 0n], { account: donor.account });
      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 1n], { account: donor.account });

      const extension = 86400n; // 1 day
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], extension], {
        account: donor.account
      });

      const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1 = await vault.read.expiry721([bragNFT.address, 1n]);
      assert.ok(expiry0 > 0n);
      assert.ok(expiry1 > 0n);
    });

    it("Should batchExtendExhibition1155", async function () {
      const { mock1155, vault, donor, owner } = await deployAll();

      await mock1155.write.mint([donor.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([donor.account.address, 2n, 20n], { account: owner.account });

      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 1n, 5n, "0x"], { account: donor.account });
      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 2n, 10n, "0x"], { account: donor.account });

      const extension = 86400n;
      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], extension], {
        account: donor.account
      });

      const expiry1 = await vault.read.expiry1155([mock1155.address, 1n, donor.account.address]);
      const expiry2 = await vault.read.expiry1155([mock1155.address, 2n, donor.account.address]);
      assert.ok(expiry1 > 0n);
      assert.ok(expiry2 > 0n);
    });
  });

  describe("Treasury Batch Operations", function () {
    it("Should batchApprove proposals", async function () {
      const { treasury, owner, user2 } = await deployAll();

      // Create 2 proposals
      await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasury.write.propose([[user2.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // user2 approves both via batchApprove
      await treasury.write.batchApprove([[0n, 1n], 0n], { account: user2.account });

      assert.equal(await treasury.read.hasApproved([0n, user2.account.address]), true);
      assert.equal(await treasury.read.hasApproved([1n, user2.account.address]), true);
    });

    it("Should batchCancel proposals", async function () {
      const { treasury, owner } = await deployAll();

      await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

      await treasury.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

      // Treasury proposal getter return tuple: (targets, values, datas, executed, canceled, proposer, approvalCount)
      const prop0 = await treasury.read.getProposal([0n]);
      const prop1 = await treasury.read.getProposal([1n]);

      assert.equal(prop0[4], true);
      assert.equal(prop1[4], true);
    });
  });
});
