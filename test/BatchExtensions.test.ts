import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions Unit Tests", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const publicClient = await viem.getPublicClient();
    const [owner, user1, user2, treasuryAccount] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("10000000"), // 10M BRAG
      parseEther("100000000") // 100M BRAG max
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH price

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasuryAccount.account.address,
      parseEther("0.001"), // min donation 0.001 ETH
      priceFeed.address
    ]);

    // Grant MINTER_ROLE on BragToken to BragNFT
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryContract = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address, user2.account.address],
      2n, // threshold 2
      mockEntryPoint.address
    ]);

    return { publicClient, bragNFT, bragToken, priceFeed, registry, vault, mock1155, treasuryContract, owner, user1, user2, treasuryAccount };
  }

  describe("BragNFT Batch Operations", function () {
    it("should batch donate and distribute ETH dust properly", async function () {
      const { publicClient, bragNFT, bragToken, user1, treasuryAccount } = await deployAll();

      const startTreasuryBal = await publicClient.getBalance({ address: treasuryAccount.account.address });

      // Donate 0.003000000000000001 ETH for 2 NFTs (0.0015 ETH each + 1 wei dust)
      const donationValue = parseEther("0.003") + 1n;
      await bragNFT.write.batchDonate(
        [["Msg 1", "Msg 2"], ["uri1", "uri2"], [false, false]],
        { account: user1.account, value: donationValue }
      );

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));

      // Verify treasury received total donationValue
      const endTreasuryBal = await publicClient.getBalance({ address: treasuryAccount.account.address });
      assert.equal(endTreasuryBal - startTreasuryBal, donationValue);

      // Verify BRAG tokens minted to user1
      const user1BragBal = await bragToken.read.balanceOf([user1.account.address]);
      assert.ok(user1BragBal > 0n);
    });

    it("should batch donate to multiple recipients", async function () {
      const { bragNFT, user1, user2 } = await deployAll();

      await bragNFT.write.batchDonateTo(
        [[user1.account.address, user2.account.address], ["Msg 1", "Msg 2"], ["uri1", "uri2"], [false, false]],
        { account: user1.account, value: parseEther("0.004") }
      );

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
    });

    it("should batch top up with ETH", async function () {
      const { publicClient, bragNFT, user1, treasuryAccount } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate(
        [["Msg 1", "Msg 2"], ["uri1", "uri2"], [false, false]],
        { account: user1.account, value: parseEther("0.004") }
      );

      const startTreasuryBal = await publicClient.getBalance({ address: treasuryAccount.account.address });

      // Top-up both NFTs ($1 USD min each at $2500/ETH = ~0.0004 ETH each -> total 0.001 ETH)
      const topUpValue = parseEther("0.001");
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: topUpValue });

      const endTreasuryBal = await publicClient.getBalance({ address: treasuryAccount.account.address });
      assert.equal(endTreasuryBal - startTreasuryBal, topUpValue);
      assert.ok(await bragNFT.read.isGlowing([0n]));
      assert.ok(await bragNFT.read.isGlowing([1n]));
    });

    it("should batch top up with BRAG tokens", async function () {
      const { bragNFT, bragToken, owner, user1 } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate(
        [["Msg 1", "Msg 2"], ["uri1", "uri2"], [false, false]],
        { account: user1.account, value: parseEther("0.004") }
      );

      // Transfer BRAG tokens to user1 and approve BragNFT
      const totalBragNeeded = parseEther("2000000"); // 2M BRAG (1M per token)
      await bragToken.write.transfer([user1.account.address, totalBragNeeded], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, totalBragNeeded], { account: user1.account });

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      assert.ok(await bragNFT.read.isGlowing([0n]));
      assert.ok(await bragNFT.read.isGlowing([1n]));
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("should batch extend ERC721 exhibitions", async function () {
      const { bragNFT, vault, user1 } = await deployAll();

      // Mint and exhibit 2 NFTs
      await bragNFT.write.batchDonate(
        [["Msg 1", "Msg 2"], ["uri1", "uri2"], [false, false]],
        { account: user1.account, value: parseEther("0.004") }
      );

      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n], { account: user1.account });
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n], { account: user1.account });

      const prevExpiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const prevExpiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      // Batch extend by 1000 seconds
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1000n], { account: user1.account });

      const newExpiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const newExpiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.ok(newExpiry0 > prevExpiry0);
      assert.ok(newExpiry1 > prevExpiry1);
    });

    it("should batch extend ERC1155 exhibitions", async function () {
      const { mock1155, vault, owner, user1 } = await deployAll();

      await mock1155.write.mint([user1.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([user1.account.address, 2n, 20n], { account: owner.account });

      await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 1n, 5n, "0x"], { account: user1.account });
      await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 2n, 10n, "0x"], { account: user1.account });

      const prevExpiry1 = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const prevExpiry2 = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 2000n], { account: user1.account });

      const newExpiry1 = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const newExpiry2 = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

      assert.ok(newExpiry1 > prevExpiry1);
      assert.ok(newExpiry2 > prevExpiry2);
    });
  });

  describe("Treasury Batch Proposals", function () {
    it("should batch approve proposals", async function () {
      const { treasuryContract, owner, user1 } = await deployAll();

      // Owner proposes two calls
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });

      assert.equal(await treasuryContract.read.hasApproved([0n, user1.account.address]), false);
      assert.equal(await treasuryContract.read.hasApproved([1n, user1.account.address]), false);

      // User1 batch approves proposals 0 and 1
      await treasuryContract.write.batchApprove([[0n, 1n], 0n], { account: user1.account });

      assert.equal(await treasuryContract.read.hasApproved([0n, user1.account.address]), true);
      assert.equal(await treasuryContract.read.hasApproved([1n, user1.account.address]), true);
    });

    it("should batch cancel proposals", async function () {
      const { treasuryContract, owner } = await deployAll();

      // Owner proposes two calls
      await treasuryContract.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryContract.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // Owner batch cancels proposals 0 and 1
      await treasuryContract.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

      const p0 = await treasuryContract.read.getProposal([0n]);
      const p1 = await treasuryContract.read.getProposal([1n]);

      assert.equal(p0[4], true); // p0.canceled
      assert.equal(p1[4], true); // p1.canceled
    });
  });
});
