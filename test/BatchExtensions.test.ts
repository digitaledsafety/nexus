import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions and Admin Updates", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, donor1, donor2, treasuryAccount] = await viem.getWalletClients();

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasuryAccount.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, parseEther("1000000000000")]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [[owner.account.address, donor1.account.address], 2n, entryPoint.address]);

    return { bragNFT, bragToken, treasury, owner, donor1, donor2, treasuryAccount };
  }

  describe("BragNFT Batch Operations", async function () {
    it("Should batch donate and distribute ETH correctly", async function () {
      const { bragNFT, donor1, treasuryAccount } = await deployAll();
      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasuryAccount.account.address });

      const messages = ["Msg 1", "Msg 2"];
      const uris = ["uri1", "uri2"];
      const totalDonation = parseEther("0.3"); // 0.15 each

      await bragNFT.write.batchDonate([messages, uris], {
        account: donor1.account,
        value: totalDonation
      });

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(donor1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(donor1.account.address));

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasuryAccount.account.address });
      assert.equal(finalTreasuryBalance, initialTreasuryBalance + totalDonation);

      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record1 = await bragNFT.read.taxRegistry([1n]);
      assert.equal(record0[2], parseEther("0.15"));
      assert.equal(record1[2], parseEther("0.15"));
    });

    it("Should batch top up with ETH", async function () {
        const { bragNFT, donor1, treasuryAccount } = await deployAll();
        await bragNFT.write.donate(["nft1", ""], { account: donor1.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["nft2", ""], { account: donor1.account, value: parseEther("0.1") });

        const publicClient = await viem.getPublicClient();
        const initialTreasuryBalance = await publicClient.getBalance({ address: treasuryAccount.account.address });

        // $1 is 0.0004 ETH at $2500/ETH
        const topUpAmount = parseEther("0.0004");
        await bragNFT.write.batchTopUp([[0n, 1n], [topUpAmount, topUpAmount]], {
            account: donor1.account,
            value: topUpAmount * 2n
        });

        const finalTreasuryBalance = await publicClient.getBalance({ address: treasuryAccount.account.address });
        assert.equal(finalTreasuryBalance, initialTreasuryBalance + topUpAmount * 2n);
    });

    it("Should allow admin to update USD value", async function () {
        const { bragNFT, donor1, owner } = await deployAll();
        await bragNFT.write.donate(["nft1", ""], { account: donor1.account, value: parseEther("0.1") });

        const recordBefore = await bragNFT.read.taxRegistry([0n]);
        assert.equal(recordBefore[1], 25000000000n); // $250

        await bragNFT.write.updateUsdValue([0n, 30000000000n], { account: owner.account });

        const recordAfter = await bragNFT.read.taxRegistry([0n]);
        assert.equal(recordAfter[1], 30000000000n); // $300
    });
  });

  describe("Treasury Batch Operations", async function () {
    it("Should batch approve proposals", async function () {
        const { treasury, owner, donor1 } = await deployAll();

        await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
        await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

        await treasury.write.batchApprove([[0n, 1n], 0n], { account: donor1.account });

        const p0 = await treasury.read.proposals([0n]);
        const p1 = await treasury.read.proposals([1n]);

        assert.equal(p0[3], 2n); // approvalCount (0: executed, 1: canceled, 2: proposer, 3: approvalCount)
        assert.equal(p1[3], 2n);
    });

    it("Should batch cancel proposals", async function () {
        const { treasury, owner } = await deployAll();

        await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
        await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

        await treasury.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

        const p0 = await treasury.read.proposals([0n]);
        const p1 = await treasury.read.proposals([1n]);

        assert.equal(p0[1], true); // canceled
        assert.equal(p1[1], true);
    });
  });
});
