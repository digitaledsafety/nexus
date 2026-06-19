import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("100000000"), parseEther("10000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryMultisig = await viem.deployContract("Treasury", [[owner.account.address, seller.account.address], 2n, entryPoint.address]);

    return { marketplace, bragNFT, bragToken, treasuryMultisig, owner, seller, buyer, treasury };
  }

  describe("BragNFT Batch & Admin", function () {
    it("Should batch donate and distribute dust", async function () {
        const { bragNFT, seller, treasury } = await deployAll();
        const publicClient = await viem.getPublicClient();
        const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

        const messages = ["msg1", "msg2", "msg3"];
        const media = ["", "", ""];
        // 0.300000000000000005 ETH (so 5 wei dust)
        const totalValue = parseEther("0.3") + 5n;

        await bragNFT.write.batchDonate([messages, media, false], { account: seller.account, value: totalValue });

        assert.equal(await bragNFT.read.totalSupply(), 3n);
        assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(seller.account.address));
        assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(seller.account.address));

        const record0 = await bragNFT.read.taxRegistry([0n]);
        const record2 = await bragNFT.read.taxRegistry([2n]);

        // $2500 * 0.1 = $250 (in 8 decimals)
        assert.equal(record0[1], 25000000000n);
        // last one gets dust: 0.1 + 5 wei -> usdValue should be slightly more or handled by truncation in solidity
        // (250000000000 * (10^17 + 5)) / 10^18 = 25000000000 + (250000000000 * 5 / 10^18) = 25000000000 + 0 = 25000000000
        assert.equal(record2[1], 25000000000n);

        const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
        assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalValue);
    });

    it("Should batch top up with ETH", async function () {
        const { bragNFT, seller, treasury } = await deployAll();
        await bragNFT.write.batchDonate([["n1", "n2"], ["", ""], false], { account: seller.account, value: parseEther("0.2") });

        const topUpValue = parseEther("0.0008"); // $2.00 @ $2500/ETH -> $1 per NFT
        await bragNFT.write.batchTopUp([[0n, 1n]], { account: seller.account, value: topUpValue });

        assert.equal(await bragNFT.read.isGlowing([0n]), true);
        assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batch top up with BRAG", async function () {
        const { bragNFT, seller, bragToken, owner } = await deployAll();
        await bragNFT.write.batchDonate([["n1", "n2"], ["", ""], false], { account: seller.account, value: parseEther("0.2") });

        const bragAmount = parseEther("2000000"); // 1M per NFT
        await bragToken.write.transfer([seller.account.address, bragAmount], { account: owner.account });
        await bragToken.write.approve([bragNFT.address, bragAmount], { account: seller.account });

        await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: seller.account });

        assert.equal(await bragNFT.read.isGlowing([0n]), true);
        assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should allow admin to update USD value", async function () {
        const { bragNFT, owner } = await deployAll();
        await bragNFT.write.donate(["msg", ""], { value: parseEther("0.1") });

        const newValue = 50000000000n; // $500
        await bragNFT.write.updateUsdValue([0n, newValue], { account: owner.account });

        const record = await bragNFT.read.taxRegistry([0n]);
        assert.equal(record[1], newValue);
    });
  });

  describe("NFTMarketplace Batch Reject", function () {
      it("Should batch reject offers", async function () {
          const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

          await bragNFT.write.donate(["n1", ""], { account: seller.account, value: parseEther("0.1") });
          await bragNFT.write.donate(["n2", ""], { account: seller.account, value: parseEther("0.1") });

          await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
          await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

          await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
          await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

          await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

          const offer1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
          assert.equal(offer1[0], 0n);
          assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
      });
  });

  describe("Treasury Batch Multi-sig", function () {
      it("Should batch approve proposals", async function () {
          const { treasuryMultisig, owner, seller } = await deployAll();

          // Propose two withdrawals
          await treasuryMultisig.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
          await treasuryMultisig.write.propose([[owner.account.address], [0n], ["0x"], 1n], { account: owner.account });

          // Batch approve by seller
          await treasuryMultisig.write.batchApprove([[0n, 1n], 0n], { account: seller.account });

          const p0 = await treasuryMultisig.read.proposals([0n]);
          const p1 = await treasuryMultisig.read.proposals([1n]);

          assert.equal(p0[3], 2n); // approvalCount (Index 3 because calls[] is skipped in auto-getter)
          assert.equal(p1[3], 2n);
      });

      it("Should batch cancel proposals", async function () {
          const { treasuryMultisig, owner } = await deployAll();

          await treasuryMultisig.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
          await treasuryMultisig.write.propose([[owner.account.address], [0n], ["0x"], 1n], { account: owner.account });

          await treasuryMultisig.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

          const p0 = await treasuryMultisig.read.proposals([0n]);
          const p1 = await treasuryMultisig.read.proposals([1n]);

          assert.equal(p0[1], true); // canceled (Index 1)
          assert.equal(p1[1], true);
      });
  });
});
