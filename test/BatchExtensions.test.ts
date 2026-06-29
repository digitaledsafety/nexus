import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions and Admin Updates", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryAccount = await viem.deployContract("Treasury", [[owner.account.address, other.account.address], 2n, entryPoint.address]);

    return { bragNFT, bragToken, marketplace, treasuryAccount, owner, seller, buyer, treasury, other, priceFeed };
  }

  it("BragNFT: Should batch donate and handle dust", async function () {
    const { bragNFT, buyer, treasury } = await deployAll();
    const publicClient = await viem.getPublicClient();
    const initialBalance = await publicClient.getBalance({ address: treasury.account.address });

    const messages = ["msg1", "msg2", "msg3"];
    const mediaUrls = ["url1", "url2", "url3"];
    const onChainFlags = [false, false, false];

    // 0.300000000000000005 ETH to test dust (remainder of 2)
    const totalDonation = parseEther("0.3") + 5n;

    await bragNFT.write.batchDonate([messages, mediaUrls, onChainFlags], {
      account: buyer.account,
      value: totalDonation
    });

    assert.equal(await bragNFT.read.totalSupply(), 3n);
    assert.equal(await publicClient.getBalance({ address: treasury.account.address }), initialBalance + totalDonation);

    const record0 = await bragNFT.read.taxRegistry([0n]);
    const record2 = await bragNFT.read.taxRegistry([2n]);

    // share = 0.1 ETH. $2500 * 0.1 = $250 (25000000000n)
    assert.equal(record0[1], 25000000000n);
    // last one gets dust, but in USD it might be negligible depending on precision.
    // 0.1 ETH + 5 wei is still approx $250.
    assert.ok(record2[1] >= 25000000000n);
  });

  it("BragNFT: Should batch top up with ETH and BRAG", async function () {
    const { bragNFT, bragToken, buyer, owner } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: buyer.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: buyer.account, value: parseEther("0.1") });

    // 1. Batch top up with ETH
    // $1.00 is 0.0004 ETH at $2500. Batch of 2 is 0.0008 ETH.
    await bragNFT.write.batchTopUp([[0n, 1n]], { account: buyer.account, value: parseEther("0.0008") });

    assert.equal(await bragNFT.read.isGlowing([0n]), true);
    assert.equal(await bragNFT.read.isGlowing([1n]), true);

    // 2. Batch top up with BRAG
    // Need 1M BRAG per NFT.
    await bragToken.write.mint([buyer.account.address, parseEther("2000000")], { account: owner.account });
    await bragToken.write.approve([bragNFT.address, parseEther("2000000")], { account: buyer.account });

    await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: buyer.account });
    // Success means it didn't revert.
  });

  it("BragNFT: Should allow admin to update USD value", async function () {
    const { bragNFT, owner } = await deployAll();
    await bragNFT.write.donate(["nft1", ""], { account: owner.account, value: parseEther("0.1") });

    await bragNFT.write.updateUsdValue([0n, 50000000000n], { account: owner.account });
    const record = await bragNFT.read.taxRegistry([0n]);
    assert.equal(record[1], 50000000000n);
  });

  it("NFTMarketplace: Should batch reject offers", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await bragToken.write.mint([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

    await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

    // Batch reject
    await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

    const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
    assert.equal(offer0[0], 0n);
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
  });

  it("Treasury: Should batch approve and cancel proposals", async function () {
    const { treasuryAccount, owner, other } = await deployAll();

    // Propose 2 things
    await treasuryAccount.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
    await treasuryAccount.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

    // Batch approve
    await treasuryAccount.write.batchApprove([[0n, 1n], 0n], { account: other.account });

    const prop0 = await treasuryAccount.read.proposals([0n]);
    const prop1 = await treasuryAccount.read.proposals([1n]);
    assert.equal(prop0[3], 2n); // approvalCount (0: executed, 1: canceled, 2: proposer, 3: approvalCount)
    assert.equal(prop1[3], 2n);

    // Propose another to cancel
    await treasuryAccount.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
    await treasuryAccount.write.batchCancel([[2n], 0n], { account: owner.account });

    const prop2 = await treasuryAccount.read.proposals([2n]);
    assert.equal(prop2[1], true); // canceled (0: executed, 1: canceled)
  });
});
