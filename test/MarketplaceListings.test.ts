import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("NFTMarketplace Fixed-Price Listings", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer };
  }

  it("Should create and cancel a listing", async function () {
    const { marketplace, bragNFT, seller } = await deployAll();

    await bragNFT.write.donate(["listing test", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[0], parseEther("10")); // price
    assert.equal(listing[2], getAddress(seller.account.address)); // seller

    await marketplace.write.cancelListing([bragNFT.address, tokenId], { account: seller.account });
    const canceledListing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(canceledListing[0], 0n);
  });

  it("Should buy from a listing", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    await bragNFT.write.donate(["buy test", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")], { account: seller.account });

    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

    await marketplace.write.buyFromListing([bragNFT.address, tokenId], { account: buyer.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), parseEther("9.2")); // 8% royalty to owner/treasury
  });

  it("Should cancel listing when offer is accepted", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    await bragNFT.write.donate(["conflict test", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")], { account: seller.account });

    await bragToken.write.transfer([buyer.account.address, parseEther("5")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("5")], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("5")], { account: buyer.account });

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
    assert.equal(listing[0], 0n);
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });
});
