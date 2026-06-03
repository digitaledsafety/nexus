import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Consolidated Improvements", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury, other] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("20000000")]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    // Treasury (as a multi-sig)
    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryAccount = await viem.deployContract("Treasury", [[owner.account.address, seller.account.address], 2n, entryPoint.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { marketplace, bragNFT, bragToken, treasuryAccount, owner, seller, buyer, treasury, other, priceFeed, publicClient };
  }

  describe("BragNFT Enhancements", function () {
    it("Should initialize new NFTs with a 30-day glow", async function () {
      const { bragNFT, seller } = await deployAll();
      await bragNFT.write.donate(["Glow Test", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;
      assert.ok(await bragNFT.read.isGlowing([tokenId]));
    });

    it("Should allow administrative correction of USD value", async function () {
      const { bragNFT, owner, seller } = await deployAll();
      await bragNFT.write.donate(["USD Correction", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const newValue = 50000000000n; // $500
      await bragNFT.write.updateUsdValue([tokenId, newValue], { account: owner.account });

      const record = await bragNFT.read.taxRegistry([tokenId]);
      assert.equal(record[1], newValue);
    });

    it("Should support batch donations", async function () {
      const { bragNFT, seller, treasury, publicClient } = await deployAll();
      const treasuryBalanceBefore = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.batchDonate([["Msg 1", "Msg 2"], ["uri1", "uri2"]], { account: seller.account, value: parseEther("0.2") });

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(seller.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(seller.account.address));

      const treasuryBalanceAfter = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("0.2"));
    });

    it("Should support batch top-ups", async function () {
        const { bragNFT, seller, publicClient } = await deployAll();
        await bragNFT.write.batchDonate([["NFT 1", "NFT 2"], ["", ""]], { account: seller.account, value: parseEther("0.2") });

        // Fast forward time to expire glow
        await publicClient.request({ method: "evm_increaseTime" as any, params: [31 * 24 * 60 * 60] });
        await publicClient.request({ method: "evm_mine" as any });

        assert.ok(!(await bragNFT.read.isGlowing([0n])));
        assert.ok(!(await bragNFT.read.isGlowing([1n])));

        // Batch top up ($1 = 0.0004 ETH at $2500/ETH)
        await bragNFT.write.batchTopUp([[0n, 1n]], { account: seller.account, value: parseEther("0.001") });

        assert.ok(await bragNFT.read.isGlowing([0n]));
        assert.ok(await bragNFT.read.isGlowing([1n]));
    });
  });

  describe("Marketplace Enhancements", function () {
    it("Should enforce private listings", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, other, owner } = await deployAll();

      await bragNFT.write.donate(["Private NFT", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

      const price = parseEther("10");
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, price, buyer.account.address], { account: seller.account });

      // Fund buyer and other
      await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
      await bragToken.write.transfer([other.account.address, price], { account: owner.account });

      // Other tries to buy
      await bragToken.write.approve([marketplace.address, price], { account: other.account });

      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, tokenId, seller.account.address], { account: other.account }),
        /Private listing/
      );

      // Buyer buys
      await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
      await marketplace.write.buyFromListing([bragNFT.address, tokenId, seller.account.address], { account: buyer.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    });

    it("Should support batch offer rejection", async function () {
        const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

        await bragNFT.write.donate(["NFT 1", ""], { account: seller.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["NFT 2", ""], { account: seller.account, value: parseEther("0.1") });

        await bragToken.write.transfer([buyer.account.address, parseEther("20")], { account: owner.account });
        await bragToken.write.approve([marketplace.address, parseEther("20")], { account: buyer.account });

        await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("10")], { account: buyer.account });

        await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

        const offer1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
        const offer2 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);

        assert.equal(offer1[0], 0n);
        assert.equal(offer2[0], 0n);
    });
  });

  describe("Treasury Enhancements", function () {
    it("Should support batch approval of proposals", async function () {
      const { treasuryAccount, owner, seller, other } = await deployAll();

      // Propose 2 calls
      await treasuryAccount.write.propose([[other.account.address], [parseEther("0.1")], ["0x"], 0n], { account: owner.account });
      await treasuryAccount.write.propose([[other.account.address], [parseEther("0.2")], ["0x"], 1n], { account: owner.account });

      // owner auto-approves. We need seller to approve to reach threshold 2.
      await treasuryAccount.write.batchApprove([[0n, 1n], [0n, 0n]], { account: seller.account });

      const prop0 = await treasuryAccount.read.getProposal([0n]);
      const prop1 = await treasuryAccount.read.getProposal([1n]);

      assert.equal(prop0[6], 2n); // approvalCount is at index 6
      assert.equal(prop1[6], 2n);
    });

    it("Should support batch cancellation of proposals", async function () {
        const { treasuryAccount, owner, other } = await deployAll();

        await treasuryAccount.write.propose([[other.account.address], [parseEther("0.1")], ["0x"], 0n], { account: owner.account });
        await treasuryAccount.write.propose([[other.account.address], [parseEther("0.2")], ["0x"], 1n], { account: owner.account });

        await treasuryAccount.write.batchCancel([[0n, 1n], [0n, 0n]], { account: owner.account });

        const prop0 = await treasuryAccount.read.getProposal([0n]);
        const prop1 = await treasuryAccount.read.getProposal([1n]);

        assert.ok(prop0[4]); // canceled is at index 4
        assert.ok(prop1[4]);
    });
  });
});
