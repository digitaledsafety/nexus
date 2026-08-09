import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    // Initial supply set to 10,000,000 BRAG (18 decimals) as per instructions.
    // Max supply set very high (e.g. 10,000,000,000,000 BRAG) to prevent "Exceeds maxSupply" error.
    const initialSupply = parseEther("10000000");
    const maxSupply = initialSupply * 1000000n;
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, maxSupply]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    return { bragToken, bragNFT, priceFeed, owner, user1, user2, treasury };
  }

  it("should handle dust distribution on batchDonate", async function () {
    const { bragNFT, user1 } = await deployAll();

    const messages = ["NFT 1", "NFT 2", "NFT 3"];
    const mediaUrls = ["", "", ""];
    const onChain = [false, false, false];

    // msg.value is 0.35 ETH
    const totalDonation = parseEther("0.35");
    await bragNFT.write.batchDonate([messages, mediaUrls, onChain], { account: user1.account, value: totalDonation });

    const count = 3n;
    const ethPerNft = totalDonation / count;
    const remainder = totalDonation % count;

    const record0 = await bragNFT.read.taxRegistry([0n]);
    const record1 = await bragNFT.read.taxRegistry([1n]);
    const record2 = await bragNFT.read.taxRegistry([2n]);

    assert.equal(record0[2], ethPerNft); // ethAmount
    assert.equal(record1[2], ethPerNft); // ethAmount
    assert.equal(record2[2], ethPerNft + remainder); // ethAmount with remainder
  });

  it("should support batchTopUp and batchTopUpWithBrag", async function () {
    const { bragNFT, bragToken, user1, owner } = await deployAll();

    // Donate first to mint 2 NFTs
    const messages = ["NFT 1", "NFT 2"];
    const mediaUrls = ["", ""];
    const onChain = [false, false];
    await bragNFT.write.batchDonate([messages, mediaUrls, onChain], { account: user1.account, value: parseEther("0.3") });

    // Ensure glow expiry is set
    const initialGlow0 = await bragNFT.read.glowExpiry([0n]);
    const initialGlow1 = await bragNFT.read.glowExpiry([1n]);
    assert.ok(initialGlow0 > 0n);
    assert.ok(initialGlow1 > 0n);

    // 1. batchTopUp with ETH
    // Top up with $2 USD worth of ETH total ($1 per NFT)
    // 0.0008 ETH total is $2 at $2500 ETH price feed.
    await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: parseEther("0.0008") });

    const glow0AfterTopUp = await bragNFT.read.glowExpiry([0n]);
    const glow1AfterTopUp = await bragNFT.read.glowExpiry([1n]);

    assert.ok(glow0AfterTopUp > initialGlow0);
    assert.ok(glow1AfterTopUp > initialGlow1);

    // 2. batchTopUpWithBrag
    // Transfer BRAG tokens to user1
    const bragAmountNeeded = 2n * 1000000n * parseEther("1");
    await bragToken.write.transfer([user1.account.address, bragAmountNeeded], { account: owner.account });
    await bragToken.write.approve([bragNFT.address, bragAmountNeeded], { account: user1.account });

    await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

    const glow0AfterBrag = await bragNFT.read.glowExpiry([0n]);
    const glow1AfterBrag = await bragNFT.read.glowExpiry([1n]);

    assert.ok(glow0AfterBrag > glow0AfterTopUp);
    assert.ok(glow1AfterBrag > glow1AfterTopUp);
  });
});
