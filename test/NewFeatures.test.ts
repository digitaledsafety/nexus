import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("New Ecosystem Features", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, userA, userB, treasury] = await viem.getWalletClients();

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("1000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const entryPoint = await viem.deployContract("MockEntryPoint", []);
    const multisig = await viem.deployContract("Treasury", [[owner.account.address, userA.account.address], 2n, entryPoint.address]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { bragNFT, bragToken, marketplace, multisig, owner, userA, userB, treasury };
  }

  describe("BragNFT Enhancements", async function () {
    it("Should batch donate and handle ETH dust", async function () {
      const { bragNFT, userA, treasury } = await deployAll();
      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      // Donate 0.300000000000000002 ETH for 3 NFTs (2 wei dust)
      const totalDonation = parseEther("0.3") + 2n;
      await bragNFT.write.batchDonate([["m1", "m2", "m3"], ["", "", ""], [false, false, false]], {
        account: userA.account,
        value: totalDonation
      });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(userA.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(userA.account.address));

      // Check dust handling: last NFT should have slightly more USD value (or exactly same if perNft is same)
      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      // At $2500/ETH, 0.1 ETH is $250 (250 * 10^8)
      assert.equal(record0[1], 25000000000n);
      // Last one should have dust in ETH, but in USD it might be lost in precision if too small.
      // But _getUsdValue uses (answer * ethAmount) / 1e18.
      // 2500 * 10^8 * 2 / 1e18 is extremely small, so usdValue might be same.

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance, initialTreasuryBalance + totalDonation);
    });

    it("Should batch donate to multiple recipients", async function () {
        const { bragNFT, userA, userB } = await deployAll();
        await bragNFT.write.batchDonateTo([[userA.account.address, userB.account.address], ["a", "b"], ["", ""], [false, false]], {
            account: userA.account,
            value: parseEther("0.2")
        });

        assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(userA.account.address));
        assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(userB.account.address));
    });

    it("Should start NFTs in glowing state", async function () {
        const { bragNFT, userA } = await deployAll();
        await bragNFT.write.donate(["test", ""], { account: userA.account, value: parseEther("0.1") });
        assert.equal(await bragNFT.read.isGlowing([0n]), true);
    });

    it("Should allow admin to update USD value", async function () {
        const { bragNFT, owner } = await deployAll();
        await bragNFT.write.donate(["test", ""], { value: parseEther("0.1") });

        await bragNFT.write.updateUsdValue([0n, 500n], { account: owner.account });
        const record = await bragNFT.read.taxRegistry([0n]);
        assert.equal(record[1], 500n);
    });

    it("Should batch top up with ETH", async function () {
        const { bragNFT, userA } = await deployAll();
        await bragNFT.write.batchDonate([["1", "2"], ["", ""], [false, false]], { value: parseEther("0.2") });

        // Wait or fast forward if we wanted to test transition, but here we just check it executes
        await bragNFT.write.batchTopUp([[0n, 1n]], { value: parseEther("0.0008") }); // $2.00 at $2500/ETH
        assert.equal(await bragNFT.read.isGlowing([0n]), true);
        assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batch top up with BRAG", async function () {
        const { bragNFT, bragToken, userA, owner } = await deployAll();
        await bragNFT.write.batchDonate([["1", "2"], ["", ""], [false, false]], { account: userA.account, value: parseEther("0.2") });

        const amount = 2_000_000n * parseEther("1");
        await bragToken.write.transfer([userA.account.address, amount], { account: owner.account });
        await bragToken.write.approve([bragNFT.address, amount], { account: userA.account });

        await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: userA.account });
        assert.equal(await bragNFT.read.isGlowing([0n]), true);
    });
  });

  describe("NFTMarketplace Enhancements", async function () {
    it("Should handle private listings", async function () {
        const { marketplace, bragNFT, bragToken, userA, userB, owner } = await deployAll();
        await bragNFT.write.donate(["nft", ""], { account: userA.account, value: parseEther("0.1") });
        await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: userA.account });

        const price = parseEther("10");
        await marketplace.write.createListing([bragNFT.address, 0n, 1n, price, userB.account.address], { account: userA.account });

        // User A (not private buyer) tries to buy
        await bragToken.write.transfer([owner.account.address, price], { account: owner.account }); // owner has tokens
        await bragToken.write.approve([marketplace.address, price], { account: owner.account });

        await assert.rejects(
            marketplace.write.buyFromListing([bragNFT.address, 0n, userA.account.address], { account: owner.account }),
            /Listing is private/
        );

        // User B (private buyer) buys
        await bragToken.write.transfer([userB.account.address, price], { account: owner.account });
        await bragToken.write.approve([marketplace.address, price], { account: userB.account });

        await marketplace.write.buyFromListing([bragNFT.address, 0n, userA.account.address], { account: userB.account });
        assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(userB.account.address));
    });

    it("Should batch create and cancel listings", async function () {
        const { marketplace, bragNFT, userA } = await deployAll();
        await bragNFT.write.batchDonate([["1", "2"], ["", ""], [false, false]], { account: userA.account, value: parseEther("0.2") });
        await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: userA.account });

        await marketplace.write.batchCreateListings([
            [bragNFT.address, bragNFT.address],
            [0n, 1n],
            [1n, 1n],
            [parseEther("1"), parseEther("2")]
        ], { account: userA.account });

        const l0 = await marketplace.read.listings([bragNFT.address, 0n, userA.account.address]);
        assert.equal(l0[1], parseEther("1"));

        await marketplace.write.batchCancelListings([
            [bragNFT.address, bragNFT.address],
            [0n, 1n]
        ], { account: userA.account });

        const l0_after = await marketplace.read.listings([bragNFT.address, 0n, userA.account.address]);
        assert.equal(l0_after[1], 0n);
    });

    it("Should batch reject offers", async function () {
        const { marketplace, bragNFT, bragToken, userA, userB, owner } = await deployAll();
        await bragNFT.write.donate(["nft", ""], { account: userA.account, value: parseEther("0.1") });

        await bragToken.write.transfer([userB.account.address, parseEther("10")], { account: owner.account });
        await bragToken.write.approve([marketplace.address, parseEther("10")], { account: userB.account });
        await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("5")], { account: userB.account });

        await marketplace.write.batchRejectOffers([[bragNFT.address], [0n], [userB.account.address]], { account: userA.account });

        const offer = await marketplace.read.offers([bragNFT.address, 0n, userB.account.address]);
        assert.equal(offer[0], 0n);
        assert.equal(await bragToken.read.balanceOf([userB.account.address]), parseEther("10"));
    });
  });

  describe("Treasury Enhancements", async function () {
    it("Should batch approve and cancel proposals", async function () {
        const { multisig, owner, userA } = await deployAll();

        const targets = [getAddress(owner.account.address), getAddress(userA.account.address)];
        const values = [0n, 0n];
        const datas = ["0x", "0x"];

        const p1 = await multisig.write.propose([targets, values, datas, 0n], { account: owner.account });
        const p2 = await multisig.write.propose([targets, values, datas, 0n], { account: owner.account });

        // Batch approve
        await multisig.write.batchApprove([[0n, 1n], 0n], { account: userA.account });

        const prop1 = await multisig.read.getProposal([0n]);
        assert.equal(prop1[6], 2n); // approvalCount

        // Batch cancel (by proposer)
        await multisig.write.batchCancel([[0n, 1n], 0n], { account: owner.account });
        const prop1_after = await multisig.read.getProposal([0n]);
        assert.equal(prop1_after[4], true); // canceled
    });
  });
});
