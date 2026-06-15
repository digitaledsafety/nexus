import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog, keccak256, toBytes } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("1000000000000000000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    // Deploy Treasury (multi-sig)
    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasurySCA = await viem.deployContract("Treasury", [[owner.account.address, user1.account.address], 2n, entryPoint.address]);

    return { owner, user1, user2, treasury, bragToken, bragNFT, marketplace, treasurySCA };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should batch donate with dust handling", async function () {
      const { user1, bragNFT, treasury } = await setup();
      const publicClient = await viem.getPublicClient();
      const messages = ["m1", "m2", "m3"];
      const media = ["u1", "u2", "u3"];
      const totalValue = parseEther("0.300000000000000007"); // 3 NFTs + 7 wei dust

      const treasuryBalanceBefore = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.batchDonate([messages, media, false], { account: user1.account, value: totalValue });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));

      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      // $2500 * 0.1 = 250 USD = 250 * 10^8
      assert.equal(record0[1], 25000000000n);

      const treasuryBalanceAfter = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, totalValue);

      // Verify glow initialized
      assert.ok(await bragNFT.read.isGlowing([0n]));
    });

    it("Should batch top up with dust handling", async function () {
      const { user1, bragNFT } = await setup();
      await bragNFT.write.donate(["test", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test", ""], { account: user1.account, value: parseEther("0.1") });

      const totalValue = parseEther("0.001") + 1n; // Dust: 1 wei
      // $2500 * 0.0005 = $1.25 (valid for topup)
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: totalValue });

      const expiry0 = await bragNFT.read.glowExpiry([0n]);
      const expiry1 = await bragNFT.read.glowExpiry([1n]);
      assert.ok(expiry0 > 0n);
      assert.ok(expiry1 > 0n);
    });

    it("Should batch top up with BRAG", async function () {
      const { user1, bragNFT, bragToken, owner } = await setup();
      await bragNFT.write.donate(["test", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test", ""], { account: user1.account, value: parseEther("0.1") });

      const bragAmount = 2_000_000n * 10n**18n;
      await bragToken.write.transfer([user1.account.address, bragAmount], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, bragAmount], { account: user1.account });

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      const expiry0 = await bragNFT.read.glowExpiry([0n]);
      assert.ok(expiry0 > 0n);
    });

    it("Should allow admin to update USD value", async function () {
      const { owner, bragNFT, user1 } = await setup();
      await bragNFT.write.donate(["test", ""], { account: user1.account, value: parseEther("0.1") });

      const newUsdValue = 50000000000n; // $500
      await bragNFT.write.updateUsdValue([0n, newUsdValue], { account: owner.account });

      const record = await bragNFT.read.taxRegistry([0n]);
      assert.equal(record[1], newUsdValue);
    });
  });

  describe("NFTMarketplace Batch Reject", function () {
    it("Should batch reject offers", async function () {
      const { owner, user1, user2, marketplace, bragNFT, bragToken } = await setup();
      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragToken.write.transfer([user2.account.address, parseEther("1000")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: user2.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: user2.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: user2.account });

      await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [user2.account.address, user2.account.address]], { account: user1.account });

      const offer1 = await marketplace.read.offers([bragNFT.address, 0n, user2.account.address]);
      assert.equal(offer1[0], 0n);
      assert.equal(await bragToken.read.balanceOf([user2.account.address]), parseEther("1000"));
    });
  });

  describe("Treasury Batch Operations", function () {
    it("Should batch approve and cancel proposals", async function () {
      const { owner, user1, treasurySCA } = await setup();

      // Propose 2 things
      await treasurySCA.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasurySCA.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // Batch approve
      await treasurySCA.write.batchApprove([[0n, 1n], 0n], { account: user1.account });
      const prop0 = await treasurySCA.read.getProposal([0n]);
      const prop1 = await treasurySCA.read.getProposal([1n]);
      assert.equal(prop0[6], 2n);
      assert.equal(prop1[6], 2n);

      // Propose another and batch cancel
      await treasurySCA.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasurySCA.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

      await treasurySCA.write.batchCancel([[2n, 3n], 0n], { account: owner.account });
      const prop2 = await treasurySCA.read.getProposal([2n]);
      const prop3 = await treasurySCA.read.getProposal([3n]);
      assert.ok(prop2[4]);
      assert.ok(prop3[4]);
    });
  });
});
