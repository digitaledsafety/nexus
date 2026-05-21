import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Marketplace Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should batch create offers", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Mint 2 NFTs to seller
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    // Buyer gets tokens and approves marketplace
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

    // Batch create offers
    const nftContracts = [bragNFT.address, bragNFT.address];
    const tokenIds = [0n, 1n];
    const amounts = [1n, 1n];
    const prices = [parseEther("1"), parseEther("2")];

    await marketplace.write.batchCreateOffers([nftContracts, tokenIds, amounts, prices], { account: buyer.account });

    // Verify offers exist
    const offer1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
    const offer2 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);

    assert.equal(offer1[0], parseEther("1"));
    assert.equal(offer2[0], parseEther("2"));
    assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("3"));
  });

  it("Should batch buy from listings", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Mint 2 NFTs to seller
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    // Seller creates 2 listings
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

    // Buyer gets tokens and approves marketplace
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

    // Seller must approve marketplace to transfer NFTs
    await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

    // Batch buy
    const nftContracts = [bragNFT.address, bragNFT.address];
    const tokenIds = [0n, 1n];
    const sellers = [seller.account.address, seller.account.address];

    await marketplace.write.batchBuyFromListings([nftContracts, tokenIds, sellers], { account: buyer.account });

    // Verify ownership
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(buyer.account.address));

    // Verify listings are cleared
    const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing1[1], 0n);

    // Verify balances (seller should have received proceeds minus protocol fee 0% and 8% royalty)
    // 3 ETH * 0.92 = 2.76 ETH
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), parseEther("2.76"));
  });

  it("Should revert batch create offers if array lengths mismatch", async function () {
    const { marketplace, bragNFT, buyer } = await deployAll();
    await assert.rejects(
      marketplace.write.batchCreateOffers([[bragNFT.address], [0n, 1n], [1n], [parseEther("1")]], { account: buyer.account }),
      /Mismatched arrays/
    );
  });

  it("Should revert batch buy from listings if array lengths mismatch", async function () {
    const { marketplace, bragNFT, buyer, seller } = await deployAll();
    await assert.rejects(
      marketplace.write.batchBuyFromListings([[bragNFT.address], [0n, 1n], [seller.account.address]], { account: buyer.account }),
      /Mismatched arrays/
    );
  });
});
