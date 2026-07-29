import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Agency Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployTreasuryAndFactory() {
    const [owner1, owner2, owner3, nonOwner] = await viem.getWalletClients();

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const factory = await viem.deployContract("TreasuryFactory");

    // Create a 2-of-3 Treasury
    const owners = [owner1.account.address, owner2.account.address, owner3.account.address];
    const threshold = 2n;
    const salt = "0x0000000000000000000000000000000000000000000000000000000000000001";

    await factory.write.createTreasury([owners, threshold, entryPoint.address, salt]);

    const publicClient = await viem.getPublicClient();
    const logs = await publicClient.getContractEvents({
      address: factory.address,
      abi: factory.abi,
      eventName: "TreasuryCreated",
    });

    const treasuryAddress = logs[0].args.treasury;
    const treasury = await viem.getContractAt("Treasury", treasuryAddress);

    // Fund the treasury
    await owner1.sendTransaction({
      to: treasuryAddress,
      value: parseEther("1"),
    });

    return { treasury, owner1, owner2, owner3, nonOwner };
  }

  describe("Treasury Batch Approvals & Cancellations", function () {
    it("Should batch approve multiple proposals", async function () {
      const { treasury, owner1, owner2, nonOwner } = await deployTreasuryAndFactory();

      // Propose 2 transactions from owner1
      await treasury.write.propose([[nonOwner.account.address], [parseEther("0.1")], ["0x"], 0n], { account: owner1.account });
      await treasury.write.propose([[nonOwner.account.address], [parseEther("0.2")], ["0x"], 0n], { account: owner1.account });

      // Proposals should have 1 approval (owner1 auto-approved)
      const prop0Before = await treasury.read.getProposal([0n]);
      const prop1Before = await treasury.read.getProposal([1n]);
      assert.equal(prop0Before[6], 1n);
      assert.equal(prop1Before[6], 1n);

      // Batch approve both from owner2
      await treasury.write.batchApprove([[0n, 1n], 0n], { account: owner2.account });

      const prop0After = await treasury.read.getProposal([0n]);
      const prop1After = await treasury.read.getProposal([1n]);
      assert.equal(prop0After[6], 2n); // Reached threshold of 2
      assert.equal(prop1After[6], 2n); // Reached threshold of 2

      // Now we can execute them
      const balanceBefore = await viem.getPublicClient().then(c => c.getBalance({ address: nonOwner.account.address }));

      await treasury.write.executeProposal([0n]);
      await treasury.write.executeProposal([1n]);

      const balanceAfter = await viem.getPublicClient().then(c => c.getBalance({ address: nonOwner.account.address }));
      assert.equal(balanceAfter - balanceBefore, parseEther("0.3"));
    });

    it("Should batch cancel multiple proposals", async function () {
      const { treasury, owner1, owner2, nonOwner } = await deployTreasuryAndFactory();

      // Propose 2 transactions from owner1
      await treasury.write.propose([[nonOwner.account.address], [parseEther("0.1")], ["0x"], 0n], { account: owner1.account });
      await treasury.write.propose([[nonOwner.account.address], [parseEther("0.2")], ["0x"], 0n], { account: owner1.account });

      // Proposer owner1 batch cancels both
      await treasury.write.batchCancel([[0n, 1n], 0n], { account: owner1.account });

      const prop0 = await treasury.read.getProposal([0n]);
      const prop1 = await treasury.read.getProposal([1n]);

      assert.ok(prop0[4]); // Canceled is true
      assert.ok(prop1[4]); // Canceled is true
    });
  });
});
