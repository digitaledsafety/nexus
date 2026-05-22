import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("BatchGrant Non-Atomic", function () {
  async function setup() {
    const { viem } = await network.connect();
    const [owner, recipient1, recipient2] = await viem.getWalletClients();

    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);
    const revertingRecipient = await viem.deployContract("RevertingRecipient");

    return {
      viem,
      owner,
      recipient1,
      recipient2,
      batchGrant,
      revertingRecipient,
    };
  }

  describe("distributeETHNonAtomic", function () {
    it("should distribute ETH and refund failed amounts", async function () {
      const { viem, owner, recipient1, revertingRecipient, batchGrant } = await setup();
      const publicClient = await viem.getPublicClient();

      const recipient1Address = recipient1.account.address;
      const revertingAddress = revertingRecipient.address;

      const balance1Before = await publicClient.getBalance({ address: recipient1Address });
      const ownerBefore = await publicClient.getBalance({ address: owner.account.address });

      const amounts = [100n, 200n];
      const total = 300n;

      const hash = await batchGrant.write.distributeETHNonAtomic([[recipient1Address, revertingAddress], amounts], {
        account: owner.account,
        value: total,
      });

      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      const balance1After = await publicClient.getBalance({ address: recipient1Address });
      const ownerAfter = await publicClient.getBalance({ address: owner.account.address });

      // recipient1 should get 100n
      assert.equal(balance1After, balance1Before + 100n);

      // owner should be refunded 200n (minus gas, but let's check relatively)
      // Actually it's easier to check the contract balance is 0
      assert.equal(await publicClient.getBalance({ address: batchGrant.address }), 0n);

      // Check for failure event
      const logs = await publicClient.getContractEvents({
        address: batchGrant.address,
        abi: batchGrant.abi,
        eventName: 'DistributionFailed',
      });
      assert.equal(logs.length, 1);
      assert.equal(logs[0].args.recipient.toLowerCase(), revertingAddress.toLowerCase());
      assert.equal(logs[0].args.amount, 200n);
    });
  });

  describe("distributeETHFromBalanceNonAtomic", function () {
    it("should distribute ETH from balance and emit events on failure", async function () {
      const { viem, owner, recipient1, revertingRecipient, batchGrant } = await setup();
      const publicClient = await viem.getPublicClient();

      const recipient1Address = recipient1.account.address;
      const revertingAddress = revertingRecipient.address;

      // Seed contract balance
      await owner.sendTransaction({
        to: batchGrant.address,
        value: 300n,
      });

      const balance1Before = await publicClient.getBalance({ address: recipient1Address });

      await batchGrant.write.distributeETHFromBalanceNonAtomic([[recipient1Address, revertingAddress], [100n, 200n]], {
        account: owner.account,
      });

      const balance1After = await publicClient.getBalance({ address: recipient1Address });
      assert.equal(balance1After, balance1Before + 100n);

      // Failed 200n stays in contract
      assert.equal(await publicClient.getBalance({ address: batchGrant.address }), 200n);

      const logs = await publicClient.getContractEvents({
        address: batchGrant.address,
        abi: batchGrant.abi,
        eventName: 'DistributionFailed',
      });
      assert.equal(logs.length, 1);
      assert.equal(logs[0].args.recipient.toLowerCase(), revertingAddress.toLowerCase());
      assert.equal(logs[0].args.amount, 200n);
    });
  });
});
