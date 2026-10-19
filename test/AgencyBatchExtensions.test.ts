import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Agency Batch Extensions Integration", async function () {
  const { viem } = await network.connect();

  async function deployAgencyStack() {
    const [owner, buyer, seller, treasury] = await viem.getWalletClients();

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

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address
    ]);

    return { bragNFT, bragToken, priceFeed, marketplace, owner, buyer, seller, treasury };
  }

  it("Agency Integration: MINTER_ROLE on BragToken allows BragNFT to reward donors during batch donate", async function () {
    const { bragNFT, bragToken, seller } = await deployAgencyStack();

    const initialTokenBal = await bragToken.read.balanceOf([seller.account.address]);
    assert.equal(initialTokenBal, 0n);

    // Batch donate 2 NFTs for total 0.2 ETH ($500 USD value)
    await bragNFT.write.batchDonate(
      [["Donation 1", "Donation 2"], ["uri1", "uri2"]],
      { account: seller.account, value: parseEther("0.2") }
    );

    const endingTokenBal = await bragToken.read.balanceOf([seller.account.address]);
    // 500 USD * 1,000,000 BRAG/USD = 500,000,000 BRAG = 500,000,000 * 10**18
    assert.equal(endingTokenBal, parseEther("500000000"));
  });

  it("Agency Integration: Multi-currency top-ups refresh glowExpiry and transfer assets to treasury", async function () {
    const { bragNFT, bragToken, owner, seller, treasury } = await deployAgencyStack();

    await bragNFT.write.batchDonate(
      [["N1", "N2"], ["u1", "u2"]],
      { account: seller.account, value: parseEther("0.2") }
    );

    const expiry0Initial = await bragNFT.read.glowExpiry([0n]);

    // ETH topup
    await bragNFT.write.batchTopUp([[0n]], { account: seller.account, value: parseEther("0.001") });
    const expiry0EthTopup = await bragNFT.read.glowExpiry([0n]);
    assert.ok(expiry0EthTopup > expiry0Initial);

    // BRAG topup
    const bragNeeded = parseEther("1000000");
    await bragToken.write.transfer([seller.account.address, bragNeeded], { account: owner.account });
    await bragToken.write.approve([bragNFT.address, bragNeeded], { account: seller.account });

    await bragNFT.write.batchTopUpWithBrag([[0n]], { account: seller.account });
    const expiry0BragTopup = await bragNFT.read.glowExpiry([0n]);
    assert.ok(expiry0BragTopup > expiry0EthTopup);

    assert.equal(await bragToken.read.balanceOf([treasury.account.address]), bragNeeded);
  });

  it("Agency Integration: Batch offer creation and management on marketplace", async function () {
    const { bragNFT, bragToken, marketplace, owner, buyer, seller } = await deployAgencyStack();

    // Seller mints 2 NFTs
    await bragNFT.write.batchDonate(
      [["Market 1", "Market 2"], ["u1", "u2"]],
      { account: seller.account, value: parseEther("0.2") }
    );

    // Fund buyer with 1,000,000 BRAG
    const offerTokens = parseEther("1000000");
    await bragToken.write.transfer([buyer.account.address, offerTokens], { account: owner.account });
    await bragToken.write.approve([marketplace.address, offerTokens], { account: buyer.account });

    // Buyer creates batch offers
    const offerPrice1 = parseEther("300000");
    const offerPrice2 = parseEther("400000");

    await marketplace.write.batchCreateOffers(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [offerPrice1, offerPrice2]],
      { account: buyer.account }
    );

    assert.equal(await bragToken.read.balanceOf([marketplace.address]), offerPrice1 + offerPrice2);

    // Seller accepts offer for Token 0
    await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, 0n, buyer.account.address], { account: seller.account });

    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
  });
});
