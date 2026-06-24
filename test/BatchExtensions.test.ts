import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasuryUser, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000000"), parseEther("2000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasuryUser.account.address, parseEther("0.1"), priceFeed.address]);
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [[owner.account.address, seller.account.address], 1n, entryPoint.address]);

    return { marketplace, bragNFT, bragToken, treasury, owner, seller, buyer, treasuryUser, other };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should batch donate and handle dust correctly", async function () {
      const { bragNFT, buyer, treasuryUser } = await deployAll();
      const messages = ["msg1", "msg2", "msg3"];
      const media = ["uri1", "uri2", "uri3"];
      const totalDonation = parseEther("0.300000000000000005"); // 0.3 ETH + 5 wei dust

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasuryUser.account.address });

      await bragNFT.write.batchDonate([messages, media, false], { account: buyer.account, value: totalDonation });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(buyer.account.address));

      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      // 0.3 / 3 = 0.1
      // Remainder 5 wei added to the last one
      // record0.usdValue = 0.1 * 2500 = 250
      // record2.usdValue = (0.1 + 5e-18) * 2500 = 250.0000000000125 -> 25000000000 (8 decimals)
      assert.equal(record0[1], 25000000000n);
      assert.equal(record2[1], 25000000000n); // Small dust in ETH might not change USD value in 8 decimals if very small, but let's check treasury

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasuryUser.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalDonation);

      // Check glow
      assert.equal(await bragNFT.read.isGlowing([0n]), true);
    });

    it("Should batch top up with ETH", async function () {
      const { bragNFT, buyer, treasuryUser } = await deployAll();
      await bragNFT.write.donate(["nft1", ""], { account: buyer.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: buyer.account, value: parseEther("0.1") });

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasuryUser.account.address });
      const topUpAmount = parseEther("0.001"); // $2.5 each

      await bragNFT.write.batchTopUp([[0n, 1n]], { account: buyer.account, value: topUpAmount });

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasuryUser.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, topUpAmount);
    });

    it("Should batch top up with BRAG", async function () {
        const { bragNFT, bragToken, buyer, owner, treasuryUser } = await deployAll();
        await bragNFT.write.batchDonateTo([buyer.account.address, ["nft1", "nft2"], ["", ""], false], { account: buyer.account, value: parseEther("0.2") });

        const bragAmount = 2_000_000n * 10n**18n;
        await bragToken.write.mint([buyer.account.address, bragAmount], { account: owner.account });
        await bragToken.write.approve([bragNFT.address, bragAmount], { account: buyer.account });

        await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: buyer.account });

        assert.equal(await bragToken.read.balanceOf([treasuryUser.account.address]), bragAmount);
    });

    it("Should allow admin to update USD value", async function () {
        const { bragNFT, buyer, owner, other } = await deployAll();
        await bragNFT.write.donate(["nft1", ""], { account: buyer.account, value: parseEther("0.1") });

        const recordBefore = await bragNFT.read.taxRegistry([0n]);
        assert.equal(recordBefore[1], 25000000000n);

        await bragNFT.write.updateUsdValue([0n, 30000000000n], { account: owner.account });

        const recordAfter = await bragNFT.read.taxRegistry([0n]);
        assert.equal(recordAfter[1], 30000000000n);

        // Should revert if not admin
        await assert.rejects(
            bragNFT.write.updateUsdValue([0n, 40000000000n], { account: other.account }),
            /AccessControlUnauthorizedAccount/
        );
    });
  });

  describe("NFTMarketplace Batch Rejection", function () {
    it("Should batch reject offers", async function () {
        const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

        await bragNFT.write.batchDonateTo([seller.account.address, ["nft1", "nft2"], ["", ""], false], { account: seller.account, value: parseEther("0.2") });

        await bragToken.write.mint([buyer.account.address, parseEther("100")], { account: owner.account });
        await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

        await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: buyer.account });

        assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("30"));

        await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

        assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
        assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
    });
  });

  describe("Treasury Batch Multi-sig Operations", function () {
    it("Should batch approve proposals", async function () {
        const { treasury, owner, seller, other } = await deployAll();

        // Need higher threshold for testing multi-sig
        await treasury.write.execute([treasury.address, 0n, encodeChangeThreshold(2n), 0n], { account: owner.account });
        assert.equal(await treasury.read.threshold(), 2n);

        await treasury.write.propose([[other.account.address], [0n], ["0x"], 0n], { account: owner.account });
        await treasury.write.propose([[other.account.address], [0n], ["0x12"], 0n], { account: owner.account });

        assert.equal(await treasury.read.proposalCount(), 2n);

        await treasury.write.batchApprove([[0n, 1n], 0n], { account: seller.account });

        const p0 = await treasury.read.proposals([0n]) as any[];
        const p1 = await treasury.read.proposals([1n]) as any[];

        // struct Proposal { Call[] calls; bool executed; bool canceled; address proposer; uint256 approvalCount; mapping(address => bool) approved; }
        // Viem getter for mapping with struct: Call[] is omitted.
        // 0: executed, 1: canceled, 2: proposer, 3: approvalCount
        assert.equal(p0[3], 2n);
        assert.equal(p1[3], 2n);
    });

    it("Should batch cancel proposals", async function () {
        const { treasury, owner, other } = await deployAll();

        await treasury.write.propose([[other.account.address], [0n], ["0x"], 0n], { account: owner.account });
        await treasury.write.propose([[other.account.address], [0n], ["0x12"], 0n], { account: owner.account });

        await treasury.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

        const p0 = await treasury.read.proposals([0n]);
        const p1 = await treasury.read.proposals([1n]);

        assert.equal(p0[1], true); // canceled
        assert.equal(p1[1], true);
    });
  });

  function encodeChangeThreshold(newThreshold: bigint) {
    return keccak256(toBytes("changeThreshold(uint256)")).slice(0, 10) +
           newThreshold.toString(16).padStart(64, '0');
  }
});
