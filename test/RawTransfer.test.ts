import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT Raw Transfer", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury] = await viem.getWalletClients();


    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1")
    , priceFeed.address]);

    // Setup: Authorize BragNFT to mint receipts
    const { keccak256, toBytes } = await import("viem");
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));


    return { bragNFT, donor, treasury };
  }

  it("Should succeed when sending raw ETH to the contract", async function () {
    const { bragNFT, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    const hash = await donor.sendTransaction({
      to: bragNFT.address,
      value: donationAmount
    });
    await publicClient.waitForTransactionReceipt({ hash });

    // 1. Check BragNFT
    const nftTokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([nftTokenId]), getAddress(donor.account.address));

    const uri = await bragNFT.read.tokenURI([nftTokenId]);
    assert.ok(uri.startsWith("data:application/json;base64,"), "Should be a data URI");
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.equal(json.attributes[0].value, "Direct donation");

    // 2. Check Permanent Record (Tax Registry)
    const [originalDonor, usdValue, ethAmount, timestamp, status, recordMessage] = await bragNFT.read.taxRegistry([nftTokenId]);
    assert.equal(originalDonor, getAddress(donor.account.address));
    assert.equal(recordMessage, "Direct donation");
    assert.equal(usdValue, 125000000000n); // 0.5 ETH * 250 USD/ETH

    // 3. Check Treasury
    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });
});
