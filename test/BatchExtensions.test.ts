import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("100000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "D1"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryMultisig = await viem.deployContract("Treasury", [[owner.account.address, user1.account.address], 2n, entryPoint.address]);

    return { marketplace, bragNFT, bragToken, registry, vault, mock1155, treasuryMultisig, owner, user1, user2, treasury };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should batch donate and handle dust", async function () {
      const { bragNFT, user1, treasury } = await deployAll();
      const publicClient = await viem.getPublicClient();

      const messages = ["msg1", "msg2", "msg3"];
      const medias = ["", "", ""];
      // 0.3 ETH + 2 wei to test remainder
      const donationAmount = parseEther("0.3") + 2n;

      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.batchDonate([messages, medias, false], { account: user1.account, value: donationAmount });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));

      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record1 = await bragNFT.read.taxRegistry([1n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      assert.equal(record0[2], parseEther("0.1"));
      assert.equal(record1[2], parseEther("0.1"));
      assert.equal(record2[2], parseEther("0.1") + 2n); // Last one gets dust

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, donationAmount);
    });

    it("Should batch top up with ETH", async function () {
      const { bragNFT, user1, treasury } = await deployAll();
      const publicClient = await viem.getPublicClient();

      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      // $1 is 0.0004 ETH at $2500/ETH. Let's send 0.001 ETH + 1 wei.
      const topUpAmount = parseEther("0.001") + 1n;
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: topUpAmount });

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, topUpAmount);

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batch top up with BRAG tokens", async function () {
      const { bragNFT, bragToken, user1, owner, treasury } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      const bragAmountPerNft = 1_000_000n * parseEther("1");
      const totalBrag = bragAmountPerNft * 2n;

      await bragToken.write.transfer([user1.account.address, totalBrag], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, totalBrag], { account: user1.account });

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      assert.equal(await bragToken.read.balanceOf([treasury.account.address]), totalBrag);
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batch extend exhibition duration for ERC721", async function () {
      const { bragNFT, vault, user1 } = await deployAll();
      const testClient = await viem.getTestClient();

      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n], { account: user1.account });
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n], { account: user1.account });

      const extension = 3600n;
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], extension], { account: user1.account });

      const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.ok(expiry0 > 0n);
      assert.ok(expiry1 > 0n);
    });

    it("Should batch extend exhibition duration for ERC1155", async function () {
        const { mock1155, vault, user1, owner } = await deployAll();

        await mock1155.write.mint([user1.account.address, 1n, 10n], { account: owner.account });
        await mock1155.write.mint([user1.account.address, 2n, 20n], { account: owner.account });

        await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 1n, 5n, "0x"], { account: user1.account });
        await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 2n, 10n, "0x"], { account: user1.account });

        const extension = 3600n;
        await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], extension], { account: user1.account });

        const expiry1 = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
        const expiry2 = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

        assert.ok(expiry1 > 0n);
        assert.ok(expiry2 > 0n);
    });
  });

  describe("Treasury Batch Management", function () {
    it("Should batch approve proposals", async function () {
      const { treasuryMultisig, owner, user1 } = await deployAll();

      await treasuryMultisig.write.propose([[zeroAddress], [0n], ["0x"], 0n], { account: owner.account });
      await treasuryMultisig.write.propose([[zeroAddress], [0n], ["0x"], 0n], { account: owner.account });

      await treasuryMultisig.write.batchApprove([[0n, 1n], 0n], { account: user1.account });

      const prop0 = await treasuryMultisig.read.proposals([0n]);
      const prop1 = await treasuryMultisig.read.proposals([1n]);

      assert.equal(prop0[3], 2n); // approvalCount
      assert.equal(prop1[3], 2n);
    });

    it("Should batch cancel proposals", async function () {
        const { treasuryMultisig, owner } = await deployAll();

        await treasuryMultisig.write.propose([[zeroAddress], [0n], ["0x"], 0n], { account: owner.account });
        await treasuryMultisig.write.propose([[zeroAddress], [0n], ["0x"], 0n], { account: owner.account });

        await treasuryMultisig.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

        const prop0 = await treasuryMultisig.read.proposals([0n]);
        const prop1 = await treasuryMultisig.read.proposals([1n]);

        assert.equal(prop0[1], true); // canceled
        assert.equal(prop1[1], true);
    });
  });

  describe("NFTMarketplace Batch Updates", function () {
    it("Should batch update listings", async function () {
      const { marketplace, bragNFT, user1 } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragNFT.write.approve([marketplace.address, 0n], { account: user1.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: user1.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("1")], { account: user1.account });

      const newPrice = parseEther("2");
      await marketplace.write.batchUpdateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [newPrice, newPrice]], { account: user1.account });

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);

      assert.equal(listing0[1], newPrice);
      assert.equal(listing1[1], newPrice);
    });
  });
});
