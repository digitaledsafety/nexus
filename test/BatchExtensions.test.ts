import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Operations and Admin Extensions", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, donor, recipient, extraOwner1, extraOwner2] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault.address, 3, "Art Gallery", "Main gallery"]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH (8 decimals)

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("1000000000000")]);
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    const entryPoint = await viem.deployContract("MockEntryPoint", []);
    const treasury = await viem.deployContract("Treasury", [
      [owner.account.address, extraOwner1.account.address, extraOwner2.account.address],
      2n,
      entryPoint.address
    ]);

    return {
      registry,
      vault,
      bragNFT,
      priceFeed,
      bragToken,
      mock1155,
      treasury,
      owner,
      donor,
      recipient,
      extraOwner1,
      extraOwner2
    };
  }

  describe("BragNFT Batch Operations and Admin Features", function () {
    it("Should batchDonate multiple NFTs and handle ETH dust", async function () {
      const { bragNFT, donor } = await setup();

      const messages = ["Message 1", "Message 2", "Message 3"];
      const uris = ["ipfs://uri1", "ipfs://uri2", "ipfs://uri3"];
      const totalEth = parseEther("0.3") + 1n; // 0.3 ETH + 1 wei dust

      await bragNFT.write.batchDonate([messages, uris], {
        account: donor.account,
        value: totalEth
      });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(donor.account.address));

      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      assert.equal(record0[2], parseEther("0.1"));
      assert.equal(record2[2], parseEther("0.1") + 1n);
    });

    it("Should batchDonateTo a specific recipient", async function () {
      const { bragNFT, donor, recipient } = await setup();

      const messages = ["BatchTo 1", "BatchTo 2"];
      const uris = ["ipfs://uriA", "ipfs://uriB"];

      await bragNFT.write.batchDonateTo([recipient.account.address, messages, uris], {
        account: donor.account,
        value: parseEther("0.2")
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(recipient.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(recipient.account.address));
    });

    it("Should revert batchDonate if donation amount per item is below minimum", async function () {
      const { bragNFT, donor } = await setup();

      const messages = ["Fail 1", "Fail 2"];
      const uris = ["ipfs://1", "ipfs://2"];

      await assert.rejects(
        bragNFT.write.batchDonate([messages, uris], {
          account: donor.account,
          value: parseEther("0.1") // 0.05 per item < 0.1 minimum
        }),
        /Donation below minimum/
      );
    });

    it("Should batchTopUp with ETH and batchTopUpWithBrag with BRAG tokens", async function () {
      const { bragNFT, bragToken, donor, owner } = await setup();

      await bragNFT.write.batchDonate([["1", "2"], ["uri1", "uri2"]], {
        account: donor.account,
        value: parseEther("0.2")
      });

      // ETH batch top-up ($1 = 0.0004 ETH at $2500/ETH)
      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: donor.account,
        value: parseEther("0.001")
      });

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);

      // BRAG token batch top-up (1,000,000 BRAG per token)
      // Transfer BRAG tokens to donor
      await bragToken.write.transfer([donor.account.address, parseEther("5000000")], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, parseEther("2000000")], { account: donor.account });

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: donor.account });
      assert.equal(await bragNFT.read.isGlowing([0n]), true);
    });

    it("Should allow DEFAULT_ADMIN_ROLE to updateUsdValue", async function () {
      const { bragNFT, donor, owner, recipient } = await setup();

      await bragNFT.write.donate(["Test USD", "uri"], { account: donor.account, value: parseEther("0.1") });

      const newUsd = 99900000000n; // $999.00
      await bragNFT.write.updateUsdValue([0n, newUsd], { account: owner.account });

      const record = await bragNFT.read.taxRegistry([0n]);
      assert.equal(record[1], newUsd);

      // Non-admin should revert
      await assert.rejects(
        bragNFT.write.updateUsdValue([0n, 100n], { account: recipient.account }),
        /AccessControl/
      );
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batchExtendExhibition721 and batchExtendExhibition1155", async function () {
      const { bragNFT, mock1155, vault, donor, owner } = await setup();

      // Setup 721 and 1155
      await bragNFT.write.donate(["E1", "uri1"], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["E2", "uri2"], { account: donor.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 0n], { account: donor.account });
      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 1n], { account: donor.account });

      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: donor.account });

      const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry0 > 0n);

      // 1155
      await mock1155.write.mint([donor.account.address, 10n, 50n], { account: owner.account });
      await mock1155.write.mint([donor.account.address, 20n, 50n], { account: owner.account });

      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 10n, 50n, "0x"], { account: donor.account });
      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 20n, 50n, "0x"], { account: donor.account });

      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [10n, 20n], 7200n], { account: donor.account });

      const expiry1155_10 = await vault.read.expiry1155([mock1155.address, 10n, donor.account.address]);
      assert.ok(expiry1155_10 > 0n);
    });
  });

  describe("Treasury Batch Operations", function () {
    it("Should batchApprove and batchCancel proposals", async function () {
      const { treasury, owner, extraOwner1 } = await setup();

      // Propose two transactions
      const target = getAddress("0x1111111111111111111111111111111111111111");

      await treasury.write.propose([[target], [0n], ["0x"], 0n], { account: owner.account });
      await treasury.write.propose([[target], [0n], ["0x"], 0n], { account: owner.account });

      // batchApprove with extraOwner1
      await treasury.write.batchApprove([[0n, 1n], 0n], { account: extraOwner1.account });

      assert.equal(await treasury.read.hasApproved([0n, extraOwner1.account.address]), true);
      assert.equal(await treasury.read.hasApproved([1n, extraOwner1.account.address]), true);

      // Propose third transaction and batchCancel
      await treasury.write.propose([[target], [0n], ["0x"], 0n], { account: owner.account });
      await treasury.write.batchCancel([[2n], 0n], { account: owner.account });

      const p2 = await treasury.read.proposals([2n]);
      assert.equal(p2[1], true); // canceled field is at index 1
    });
  });
});
