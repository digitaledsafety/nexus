import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions and Admin Features", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    // BragToken initial supply 10,000,000 with maxSupply 10,000,000,000
    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("10000000"),
      parseEther("10000000000")
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Vault", "Desc"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryContract = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address],
      2n,
      mockEntryPoint.address
    ]);

    return { bragNFT, bragToken, priceFeed, registry, vault, mock1155, treasuryContract, owner, user1, user2, treasury };
  }

  describe("BragNFT Admin & Batch Features", async function () {
    it("Should allow DEFAULT_ADMIN_ROLE to update USD value of a tax record", async function () {
      const { bragNFT, owner, user1 } = await deployAll();

      await bragNFT.write.donate(["Donation 1", "https://example.com/1.png"], { account: user1.account, value: parseEther("0.1") });
      const recordBefore = await bragNFT.read.taxRegistry([0n]);
      assert.equal(recordBefore[1], 25000000000n); // $250 (8 decimals)

      await bragNFT.write.updateUsdValue([0n, 50000000000n], { account: owner.account });
      const recordAfter = await bragNFT.read.taxRegistry([0n]);
      assert.equal(recordAfter[1], 50000000000n); // $500

      await assert.rejects(
        bragNFT.write.updateUsdValue([0n, 100n], { account: user1.account }),
        /AccessControl/
      );
    });

    it("Should batch donate and distribute ETH dust to the last NFT", async function () {
      const { bragNFT, user1 } = await deployAll();

      const totalValue = parseEther("0.3") + 7n; // Odd wei amount to create remainder dust
      await bragNFT.write.batchDonate(
        [["Msg 1", "Msg 2", "Msg 3"], ["uri1", "uri2", "uri3"]],
        { account: user1.account, value: totalValue }
      );

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));

      const rec0 = await bragNFT.read.taxRegistry([0n]);
      const rec1 = await bragNFT.read.taxRegistry([1n]);
      const rec2 = await bragNFT.read.taxRegistry([2n]);

      const expectedEthPerItem = totalValue / 3n;
      const expectedDust = totalValue % 3n;

      assert.equal(rec0[2], expectedEthPerItem);
      assert.equal(rec1[2], expectedEthPerItem);
      assert.equal(rec2[2], expectedEthPerItem + expectedDust);
    });

    it("Should batch donate to a specified recipient", async function () {
      const { bragNFT, user1, user2 } = await deployAll();

      await bragNFT.write.batchDonateTo(
        [user2.account.address, ["Msg 1", "Msg 2"], ["uri1", "uri2"]],
        { account: user1.account, value: parseEther("0.2") }
      );

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user2.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
      const rec0 = await bragNFT.read.taxRegistry([0n]);
      assert.equal(rec0[0], getAddress(user1.account.address)); // original donor is user1
    });

    it("Should batch top-up NFTs with ETH", async function () {
      const { bragNFT, user1 } = await deployAll();

      await bragNFT.write.batchDonate([["Msg 1", "Msg 2"], ["uri1", "uri2"]], { account: user1.account, value: parseEther("0.2") });

      const expiry0Before = await bragNFT.read.glowExpiry([0n]);
      const expiry1Before = await bragNFT.read.glowExpiry([1n]);

      // Top up with $1.00 USD worth of ETH each (0.001 ETH each at $2500/ETH is $2.50 > $1.00)
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: parseEther("0.002") });

      const expiry0After = await bragNFT.read.glowExpiry([0n]);
      const expiry1After = await bragNFT.read.glowExpiry([1n]);

      assert.ok(expiry0After > expiry0Before);
      assert.ok(expiry1After > expiry1Before);
    });

    it("Should batch top-up NFTs with BRAG tokens", async function () {
      const { bragNFT, bragToken, owner, user1, treasury } = await deployAll();

      await bragNFT.write.batchDonate([["Msg 1", "Msg 2"], ["uri1", "uri2"]], { account: user1.account, value: parseEther("0.2") });

      const bragNeeded = parseEther("2000000"); // 1M BRAG per token
      await bragToken.write.transfer([user1.account.address, bragNeeded], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, bragNeeded], { account: user1.account });

      const expiry0Before = await bragNFT.read.glowExpiry([0n]);
      const expiry1Before = await bragNFT.read.glowExpiry([1n]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      const expiry0After = await bragNFT.read.glowExpiry([0n]);
      const expiry1After = await bragNFT.read.glowExpiry([1n]);

      assert.ok(expiry0After > expiry0Before);
      assert.ok(expiry1After > expiry1Before);
      assert.equal(await bragToken.read.balanceOf([treasury.account.address]), bragNeeded);
    });
  });

  describe("ExhibitVault Batch Extensions", async function () {
    it("Should batch extend exhibition duration for ERC721 tokens", async function () {
      const { bragNFT, vault, user1 } = await deployAll();

      await bragNFT.write.batchDonate([["N1", "N2"], ["u1", "u2"]], { account: user1.account, value: parseEther("0.2") });
      await bragNFT.write.setApprovalForAll([vault.address, true], { account: user1.account });

      await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: user1.account });

      const exp0Before = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1Before = await vault.read.expiry721([bragNFT.address, 1n]);

      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1800n], { account: user1.account });

      const exp0After = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(exp0After, exp0Before + 1800n);
      assert.equal(exp1After, exp1Before + 1800n);
    });

    it("Should batch extend exhibition duration for ERC1155 tokens", async function () {
      const { mock1155, vault, owner, user1 } = await deployAll();

      await mock1155.write.mint([user1.account.address, 1n, 100n], { account: owner.account });
      await mock1155.write.mint([user1.account.address, 2n, 200n], { account: owner.account });

      await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });

      await vault.write.batchExhibit1155([[mock1155.address, mock1155.address], [1n, 2n], [10n, 20n], 3600n], { account: user1.account });

      const exp1Before = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const exp2Before = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 1800n], { account: user1.account });

      const exp1After = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const exp2After = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

      assert.equal(exp1After, exp1Before + 1800n);
      assert.equal(exp2After, exp2Before + 1800n);
    });
  });

  describe("Treasury Batch Governance", async function () {
    it("Should batch approve multiple proposals", async function () {
      const { treasuryContract, owner, user1 } = await deployAll();

      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryContract.write.propose([[user1.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // Owner auto-approves on propose (approvalCount = 1)
      // user1 approves via batchApprove
      await treasuryContract.write.batchApprove([[0n, 1n], 0n], { account: user1.account });

      assert.equal(await treasuryContract.read.hasApproved([0n, user1.account.address]), true);
      assert.equal(await treasuryContract.read.hasApproved([1n, user1.account.address]), true);

      const prop0 = await treasuryContract.read.getProposal([0n]);
      const prop1 = await treasuryContract.read.getProposal([1n]);

      assert.equal(prop0[6], 2n); // approvalCount = 2 (meets threshold 2)
      assert.equal(prop1[6], 2n);
    });

    it("Should batch cancel proposals by proposer", async function () {
      const { treasuryContract, owner } = await deployAll();

      await treasuryContract.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryContract.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

      await treasuryContract.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

      const prop0 = await treasuryContract.read.getProposal([0n]);
      const prop1 = await treasuryContract.read.getProposal([1n]);

      assert.equal(prop0[4], true); // canceled = true
      assert.equal(prop1[4], true);
    });
  });
});
