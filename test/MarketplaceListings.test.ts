import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Marketplace Listings", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // ERC721
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    // ERC1155
    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, mock1155, bragToken, owner, seller, buyer };
  }

  it("Should handle ERC721 listings and buying", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["listable nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Seller lists the NFT
    const listPrice = parseEther("1");
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, listPrice], { account: seller.account });

    // Buyer buys from listing
    await bragToken.write.approve([marketplace.address, listPrice], { account: buyer.account });
    await marketplace.write.buyFromListing([bragNFT.address, tokenId, seller.account.address], { account: buyer.account });

    // Verify results
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    const expectedSellerProceeds = listPrice - (listPrice * 800n / 10000n);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), expectedSellerProceeds);
  });

  it("Should handle ERC1155 listings and buying", async function () {
    const { marketplace, mock1155, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    const tokenId = 42n;
    const amount = 3n;
    await mock1155.write.mint([seller.account.address, tokenId, 10n]);

    // Seller lists 3 units
    const listPrice = parseEther("3");
    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.createListing([mock1155.address, tokenId, amount, listPrice], { account: seller.account });

    // Buyer buys
    await bragToken.write.approve([marketplace.address, listPrice], { account: buyer.account });
    await marketplace.write.buyFromListing([mock1155.address, tokenId, seller.account.address], { account: buyer.account });

    // Verify results
    assert.equal(await mock1155.read.balanceOf([buyer.account.address, tokenId]), amount);
    assert.equal(await mock1155.read.balanceOf([seller.account.address, tokenId]), 7n);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), listPrice);
  });

  it("Should cancel a listing", async function () {
    const { marketplace, bragNFT, seller } = await deployAll();
    await bragNFT.write.donate(["cancel test", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("1")], { account: seller.account });

    await marketplace.write.cancelListing([bragNFT.address, tokenId], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, tokenId, seller.account.address]);
    assert.equal(listing[0], 0n); // Price should be 0
  });

  it("Should clear conflicting offer/listing upon execution", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragNFT.write.donate(["conflict test", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Seller lists
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("5")], { account: seller.account });

    // Buyer offers
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller accepts offer
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Listing should be cleared
    const listing = await marketplace.read.listings([bragNFT.address, tokenId, seller.account.address]);
    assert.equal(listing[0], 0n);
  });
});
