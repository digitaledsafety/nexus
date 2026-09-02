import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions and Operations", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, donor, recipient1, recipient2, treasuryOwner1, treasuryOwner2] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("10000000000")]);
    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [
      [treasuryOwner1.account.address, treasuryOwner2.account.address],
      2n,
      mockEntryPoint.address,
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2,500.00 / ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      parseEther("0.1"),
      priceFeed.address,
    ]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "D1"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return {
      bragNFT,
      bragToken,
      treasury,
      registry,
      vault,
      mock1155,
      owner,
      donor,
      recipient1,
      recipient2,
      treasuryOwner1,
      treasuryOwner2,
    };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should batch donate and distribute ETH correctly with dust remainder", async function () {
      const { bragNFT, donor, treasury } = await deployAll();

      const messages = ["Batch 1", "Batch 2", "Batch 3"];
      const medias = ["https://example.com/1.png", "https://example.com/2.png", "https://example.com/3.png"];
      const onChains = [false, false, false];

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.address });

      // Donate 1.0 ETH across 3 NFTs (0.333333333333333333 ETH each, remainder 1 wei on 3rd)
      const donationValue = parseEther("1.0");
      await bragNFT.write.batchDonate([messages, medias, onChains], {
        account: donor.account,
        value: donationValue,
      });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(donor.account.address));

      const [donor0, usd0, eth0, ts0, status0, msg0] = await bragNFT.read.taxRegistry([0n]);
      const [donor1, usd1, eth1, ts1, status1, msg1] = await bragNFT.read.taxRegistry([1n]);
      const [donor2, usd2, eth2, ts2, status2, msg2] = await bragNFT.read.taxRegistry([2n]);

      assert.equal(msg0, "Batch 1");
      assert.equal(msg2, "Batch 3");
      assert.equal(eth0 + eth1 + eth2, donationValue);

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, donationValue);
    });

    it("Should batch donate to specified recipients", async function () {
      const { bragNFT, donor, recipient1, recipient2 } = await deployAll();

      const recipients = [recipient1.account.address, recipient2.account.address];
      const messages = ["To R1", "To R2"];
      const medias = ["media1.png", "media2.png"];
      const onChains = [false, false];

      await bragNFT.write.batchDonateTo([recipients, messages, medias, onChains], {
        account: donor.account,
        value: parseEther("0.4"),
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(recipient1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(recipient2.account.address));
    });

    it("Should batch top up NFTs with ETH", async function () {
      const { bragNFT, donor } = await deployAll();

      await bragNFT.write.batchDonate([["N1", "N2"], ["m1", "m2"], [false, false]], {
        account: donor.account,
        value: parseEther("0.4"),
      });

      const initialExpiry0 = await bragNFT.read.glowExpiry([0n]);
      const initialExpiry1 = await bragNFT.read.glowExpiry([1n]);

      // Top up with $1.00 USD worth of ETH each ($2500/ETH => ~0.0004 ETH each, passing 0.01 ETH total)
      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: donor.account,
        value: parseEther("0.01"),
      });

      const newExpiry0 = await bragNFT.read.glowExpiry([0n]);
      const newExpiry1 = await bragNFT.read.glowExpiry([1n]);

      assert.equal(newExpiry0, initialExpiry0 + BigInt(30 * 24 * 3600));
      assert.equal(newExpiry1, initialExpiry1 + BigInt(30 * 24 * 3600));
    });

    it("Should batch top up NFTs with BRAG tokens", async function () {
      const { bragNFT, bragToken, donor, owner, treasury } = await deployAll();

      await bragNFT.write.batchDonate([["N1", "N2"], ["m1", "m2"], [false, false]], {
        account: donor.account,
        value: parseEther("0.4"),
      });

      // Transfer BRAG tokens to donor and approve BragNFT contract
      const requiredBrag = parseEther("2000000"); // 1M per NFT * 2
      await bragToken.write.transfer([donor.account.address, requiredBrag], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, requiredBrag], { account: donor.account });

      const initialExpiry0 = await bragNFT.read.glowExpiry([0n]);
      const initialTreasuryBrag = await bragToken.read.balanceOf([treasury.address]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: donor.account });

      const newExpiry0 = await bragNFT.read.glowExpiry([0n]);
      assert.equal(newExpiry0, initialExpiry0 + BigInt(30 * 24 * 3600));

      const finalTreasuryBrag = await bragToken.read.balanceOf([treasury.address]);
      assert.equal(finalTreasuryBrag - initialTreasuryBrag, requiredBrag);
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batch extend exhibition durations for ERC721 tokens", async function () {
      const { bragNFT, vault, donor } = await deployAll();

      await bragNFT.write.batchDonate([["N1", "N2"], ["m1", "m2"], [false, false]], {
        account: donor.account,
        value: parseEther("0.4"),
      });

      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 0n], { account: donor.account });
      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 1n], { account: donor.account });

      const initialExpiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const extension = 3600n;

      await vault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [extension, extension]],
        { account: donor.account }
      );

      const newExpiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const newExpiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.ok(newExpiry0 >= initialExpiry0 + extension);
      assert.ok(newExpiry1 >= extension);
    });

    it("Should batch extend exhibition durations for ERC1155 tokens", async function () {
      const { mock1155, vault, donor, owner } = await deployAll();

      await mock1155.write.mint([donor.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([donor.account.address, 2n, 20n], { account: owner.account });

      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 1n, 5n, "0x"], { account: donor.account });
      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 2n, 10n, "0x"], { account: donor.account });

      const extension = 7200n;

      await vault.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [1n, 2n], [extension, extension]],
        { account: donor.account }
      );

      const expiry1 = await vault.read.expiry1155([mock1155.address, 1n, donor.account.address]);
      const expiry2 = await vault.read.expiry1155([mock1155.address, 2n, donor.account.address]);

      assert.ok(expiry1 >= extension);
      assert.ok(expiry2 >= extension);
    });
  });

  describe("Treasury Batch Multi-Sig Operations", function () {
    it("Should batch approve multiple proposals", async function () {
      const { treasury, treasuryOwner1, treasuryOwner2, donor } = await deployAll();

      // Propose 2 calls from treasuryOwner1
      await treasury.write.propose(
        [[donor.account.address], [parseEther("0.1")], ["0x"], 0n],
        { account: treasuryOwner1.account }
      );
      await treasury.write.propose(
        [[donor.account.address], [parseEther("0.2")], ["0x"], 0n],
        { account: treasuryOwner1.account }
      );

      assert.equal(await treasury.read.hasApproved([0n, treasuryOwner2.account.address]), false);
      assert.equal(await treasury.read.hasApproved([1n, treasuryOwner2.account.address]), false);

      // Batch approve from treasuryOwner2
      await treasury.write.batchApprove([[0n, 1n], 0n], { account: treasuryOwner2.account });

      assert.equal(await treasury.read.hasApproved([0n, treasuryOwner2.account.address]), true);
      assert.equal(await treasury.read.hasApproved([1n, treasuryOwner2.account.address]), true);
    });

    it("Should batch cancel multiple proposals", async function () {
      const { treasury, treasuryOwner1, donor } = await deployAll();

      await treasury.write.propose(
        [[donor.account.address], [parseEther("0.1")], ["0x"], 0n],
        { account: treasuryOwner1.account }
      );
      await treasury.write.propose(
        [[donor.account.address], [parseEther("0.2")], ["0x"], 0n],
        { account: treasuryOwner1.account }
      );

      // Proposer batch cancels proposals
      await treasury.write.batchCancel([[0n, 1n], 0n], { account: treasuryOwner1.account });

      const prop0 = await treasury.read.getProposal([0n]);
      const prop1 = await treasury.read.getProposal([1n]);

      assert.equal(prop0[4], true); // canceled = true
      assert.equal(prop1[4], true); // canceled = true
    });
  });
});
