import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes, getAddress } from "viem";

describe("Batch Extensions (BragNFT & Treasury)", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2, user3] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    // Deploy Mock Price Feed ($2500 ETH/USD)
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    // Deploy EntryPoint
    const entryPoint = await viem.deployContract("MockEntryPoint", []);

    // Deploy Treasury (2-of-3 multisig)
    const treasury = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address, user2.account.address],
      2n,
      entryPoint.address
    ]);

    // Deploy BragNFT (min donation = 0.001 ETH)
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      parseEther("0.001"),
      priceFeed.address
    ]);

    // Deploy BragToken
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      10000000n * 10n**18n,
      parseEther("1000000000000")
    ]);

    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    return { bragNFT, bragToken, treasury, priceFeed, entryPoint, owner, user1, user2, user3, publicClient };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should batchDonate multiple NFTs and split ETH correctly with dust handling", async function () {
      const { bragNFT, treasury, user1, publicClient } = await deployContracts();

      const messages = ["Impact 1", "Impact 2", "Impact 3"];
      const uris = ["https://art.com/1.png", "https://art.com/2.png", "https://art.com/3.png"];

      // 0.03 ETH + 2 wei (for dust testing)
      const totalEth = parseEther("0.03") + 2n;

      const treasuryBalanceBefore = await publicClient.getBalance({ address: treasury.address });

      await bragNFT.write.batchDonate([messages, uris], {
        account: user1.account,
        value: totalEth
      });

      // Check NFT balances & owners
      assert.equal(await bragNFT.read.balanceOf([user1.account.address]), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));

      // Check tax records
      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record1 = await bragNFT.read.taxRegistry([1n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      const expectedEthPerNft = totalEth / 3n;
      const expectedRemainder = totalEth % 3n;

      assert.equal(record0[2], expectedEthPerNft); // ethAmount
      assert.equal(record1[2], expectedEthPerNft);
      assert.equal(record2[2], expectedEthPerNft + expectedRemainder);

      // Treasury received full ETH balance
      const treasuryBalanceAfter = await publicClient.getBalance({ address: treasury.address });
      assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, totalEth);
    });

    it("Should batchDonateTo specified recipients", async function () {
      const { bragNFT, user1, user2, user3 } = await deployContracts();

      const recipients = [user1.account.address, user2.account.address];
      const messages = ["For User 1", "For User 2"];
      const uris = ["uri1", "uri2"];
      const totalEth = parseEther("0.02");

      await bragNFT.write.batchDonateTo([recipients, messages, uris], {
        account: user3.account,
        value: totalEth
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
    });

    it("Should batchTopUp glowing state for multiple NFTs", async function () {
      const { bragNFT, user1 } = await deployContracts();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate([["M1", "M2"], ["u1", "u2"]], {
        account: user1.account,
        value: parseEther("0.02")
      });

      const topUpEth = parseEther("0.01"); // > $1 per NFT
      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: user1.account,
        value: topUpEth
      });

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batchTopUpWithBrag using BRAG tokens", async function () {
      const { bragNFT, bragToken, owner, user1 } = await deployContracts();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate([["M1", "M2"], ["u1", "u2"]], {
        account: user1.account,
        value: parseEther("0.02")
      });

      // Transfer 2,000,000 BRAG tokens to user1
      const bragAmount = parseEther("2000000");
      await bragToken.write.transfer([user1.account.address, bragAmount], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, bragAmount], { account: user1.account });

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });
  });

  describe("Treasury Batch Operations", function () {
    it("Should batchApprove multiple proposals", async function () {
      const { treasury, owner, user1, user3 } = await deployContracts();

      // Propose 2 proposals from owner
      const calls = [{ target: user3.account.address, value: 0n, data: "0x" as `0x` }];

      await treasury.write.proposeBatch([calls, 0n], { account: owner.account });
      await treasury.write.proposeBatch([calls, 0n], { account: owner.account });

      const prop0 = 0n;
      const prop1 = 1n;

      // Approve both proposals in batch from user1
      await treasury.write.batchApprove([[prop0, prop1], 0n], { account: user1.account });

      assert.equal(await treasury.read.hasApproved([prop0, user1.account.address]), true);
      assert.equal(await treasury.read.hasApproved([prop1, user1.account.address]), true);

      // Both proposals now have 2 approvals (owner + user1), meeting threshold of 2
      await treasury.write.executeProposal([prop0], { account: owner.account });
      await treasury.write.executeProposal([prop1], { account: owner.account });

      const propData0 = await treasury.read.getProposal([prop0]);
      const propData1 = await treasury.read.getProposal([prop1]);

      assert.equal(propData0[3], true); // executed
      assert.equal(propData1[3], true);
    });

    it("Should batchCancel multiple proposals by proposer", async function () {
      const { treasury, owner, user3 } = await deployContracts();

      const calls = [{ target: user3.account.address, value: 0n, data: "0x" as `0x` }];
      await treasury.write.proposeBatch([calls, 0n], { account: owner.account }); // ID 0
      await treasury.write.proposeBatch([calls, 0n], { account: owner.account }); // ID 1

      await treasury.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

      const propData0 = await treasury.read.getProposal([0n]);
      const propData1 = await treasury.read.getProposal([1n]);

      assert.equal(propData0[4], true); // canceled
      assert.equal(propData1[4], true);
    });
  });
});
