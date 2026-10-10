import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions Suite", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2,500 ETH price
    // Initial supply 10M, Max supply 10 Billion BRAG tokens
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("10000000000")]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.01"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "Desc"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryContract = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address],
      2n,
      mockEntryPoint.address
    ]);

    return { owner, user1, user2, treasury, priceFeed, bragToken, bragNFT, registry, vault, mock1155, treasuryContract, publicClient };
  }

  describe("BragNFT Batch Operations", function () {
    it("batchDonate: should handle batch donations and distribute ETH dust to last NFT", async function () {
      const { bragNFT, treasury, user1, publicClient } = await setup();

      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      const totalValue = parseEther("0.100000000000000005"); // Has 5 wei dust for 3 items

      await bragNFT.write.batchDonate([
        ["Msg 1", "Msg 2", "Msg 3"],
        ["https://uri1.com", "https://uri2.com", "https://uri3.com"]
      ], { account: user1.account, value: totalValue });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));

      const rec0 = await bragNFT.read.taxRegistry([0n]);
      const rec1 = await bragNFT.read.taxRegistry([1n]);
      const rec2 = await bragNFT.read.taxRegistry([2n]);

      const expectedPerItem = totalValue / 3n;
      const expectedDust = totalValue % 3n;

      assert.equal(rec0[2], expectedPerItem);
      assert.equal(rec1[2], expectedPerItem);
      assert.equal(rec2[2], expectedPerItem + expectedDust);

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalValue);
    });

    it("batchDonateTo: should mint NFTs to specified recipients", async function () {
      const { bragNFT, user1, user2 } = await setup();

      await bragNFT.write.batchDonateTo([
        [user1.account.address, user2.account.address],
        ["For User1", "For User2"],
        ["https://u1.com", "https://u2.com"]
      ], { account: user1.account, value: parseEther("0.04") });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
    });

    it("batchTopUp: should top up multiple collectibles with ETH", async function () {
      const { bragNFT, user1 } = await setup();

      await bragNFT.write.batchDonate([
        ["Msg 1", "Msg 2"],
        ["https://u1.com", "https://u2.com"]
      ], { account: user1.account, value: parseEther("0.02") });

      const expiry0Before = await bragNFT.read.glowExpiry([0n]);
      const expiry1Before = await bragNFT.read.glowExpiry([1n]);

      // Top up with $1 USD worth of ETH each (0.001 ETH at $2,500 = $2.50)
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: parseEther("0.002") });

      const expiry0After = await bragNFT.read.glowExpiry([0n]);
      const expiry1After = await bragNFT.read.glowExpiry([1n]);

      assert.equal(expiry0After, expiry0Before + 30n * 86400n);
      assert.equal(expiry1After, expiry1Before + 30n * 86400n);
    });

    it("batchTopUpWithBrag: should top up multiple collectibles with BRAG tokens", async function () {
      const { bragNFT, bragToken, owner, user1, treasury } = await setup();

      await bragNFT.write.batchDonate([
        ["Msg 1", "Msg 2"],
        ["https://u1.com", "https://u2.com"]
      ], { account: user1.account, value: parseEther("0.02") });

      // Transfer BRAG tokens to user1 and approve
      const requiredBrag = parseEther("2000000"); // 1M per NFT * 2
      await bragToken.write.transfer([user1.account.address, requiredBrag], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, requiredBrag], { account: user1.account });

      const expiry0Before = await bragNFT.read.glowExpiry([0n]);
      const expiry1Before = await bragNFT.read.glowExpiry([1n]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      const expiry0After = await bragNFT.read.glowExpiry([0n]);
      const expiry1After = await bragNFT.read.glowExpiry([1n]);

      assert.equal(expiry0After, expiry0Before + 30n * 86400n);
      assert.equal(expiry1After, expiry1Before + 30n * 86400n);
      assert.equal(await bragToken.read.balanceOf([treasury.account.address]), requiredBrag);
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("batchExtendExhibition721: should extend exhibition duration for multiple ERC721 NFTs", async function () {
      const { bragNFT, vault, user1 } = await setup();

      await bragNFT.write.batchDonate([
        ["1", "2"],
        ["u1", "u2"]
      ], { account: user1.account, value: parseEther("0.02") });

      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n], { account: user1.account });
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n], { account: user1.account });

      const exp0Before = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1Before = await vault.read.expiry721([bragNFT.address, 1n]);

      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: user1.account });

      const exp0After = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.ok(exp0After > exp0Before);
      assert.ok(exp1After > exp1Before);
    });

    it("batchExtendExhibition1155: should extend exhibition duration for multiple ERC1155 tokens", async function () {
      const { mock1155, vault, owner, user1 } = await setup();

      await mock1155.write.mint([user1.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([user1.account.address, 2n, 10n], { account: owner.account });

      await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 1n, 5n, "0x"], { account: user1.account });
      await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 2n, 5n, "0x"], { account: user1.account });

      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 3600n], { account: user1.account });

      const exp1 = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const exp2 = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

      assert.ok(exp1 > 0n);
      assert.ok(exp2 > 0n);
    });
  });

  describe("Treasury Batch Proposal Management", function () {
    it("batchApprove & batchCancel: should batch approve and batch cancel proposals", async function () {
      const { treasuryContract, owner, user1 } = await setup();

      // Create 2 proposals
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // Owner auto-approved on proposal creation, approval count is 1
      const prop0 = await treasuryContract.read.getProposal([0n]);
      const prop1 = await treasuryContract.read.getProposal([1n]);
      assert.equal(prop0[6], 1n);
      assert.equal(prop1[6], 1n);

      // User1 batch approves proposals 0 and 1
      await treasuryContract.write.batchApprove([[0n, 1n], 0n], { account: user1.account });

      const prop0AfterApprove = await treasuryContract.read.getProposal([0n]);
      const prop1AfterApprove = await treasuryContract.read.getProposal([1n]);
      assert.equal(prop0AfterApprove[6], 2n);
      assert.equal(prop1AfterApprove[6], 2n);

      // Create 2 more proposals for testing batchCancel
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // Proposer (owner) batch cancels proposals 2 and 3
      await treasuryContract.write.batchCancel([[2n, 3n], 0n], { account: owner.account });

      const prop2AfterCancel = await treasuryContract.read.getProposal([2n]);
      const prop3AfterCancel = await treasuryContract.read.getProposal([3n]);
      assert.equal(prop2AfterCancel[4], true); // canceled = true
      assert.equal(prop3AfterCancel[4], true); // canceled = true
    });
  });
});
