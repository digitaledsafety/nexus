import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Marketplace Listings", async function () {
  const { viem } = await network.connect();

  async function deployMarketplace() {
    const [owner, seller, buyer, royaltyRecipient] = await viem.getWalletClients();

    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const mock721 = await viem.deployContract("MockRoyaltyNFT", ["Mock 721", "M721"]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { marketplace, mock721, mock1155, bragToken, owner, seller, buyer, royaltyRecipient };
  }

  it("Should create and buy an ERC721 listing", async function () {
    const { marketplace, mock721, bragToken, seller, buyer, owner } = await deployMarketplace();

    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    const tokenId = 1n;
    await mock721.write.mint([seller.account.address, tokenId]);
    await mock721.write.approve([marketplace.address, tokenId], { account: seller.account });

    const price = parseEther("10");
    await marketplace.write.createListing([mock721.address, tokenId, 1n, price], { account: seller.account });

    const listing = await marketplace.read.listings([mock721.address, tokenId]);
    assert.equal(listing[0], getAddress(seller.account.address));
    assert.equal(listing[1], price);
    assert.equal(listing[2], 1n);

    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyFromListing([mock721.address, tokenId], { account: buyer.account });

    assert.equal(await mock721.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), price);
  });

  it("Should create and buy an ERC1155 listing", async function () {
    const { marketplace, mock1155, bragToken, seller, buyer, owner } = await deployMarketplace();

    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    const tokenId = 1n;
    const amount = 10n;
    await mock1155.write.mint([seller.account.address, tokenId, amount], { account: owner.account });
    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

    const price = parseEther("50");
    await marketplace.write.createListing([mock1155.address, tokenId, amount, price], { account: seller.account });

    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyFromListing([mock1155.address, tokenId], { account: buyer.account });

    assert.equal(await mock1155.read.balanceOf([buyer.account.address, tokenId]), amount);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), price);
  });

  it("Should cancel a listing", async function () {
    const { marketplace, mock721, seller } = await deployMarketplace();

    const tokenId = 1n;
    await mock721.write.mint([seller.account.address, tokenId]);
    await marketplace.write.createListing([mock721.address, tokenId, 1n, parseEther("1")], { account: seller.account });

    await marketplace.write.cancelListing([mock721.address, tokenId], { account: seller.account });
    const listing = await marketplace.read.listings([mock721.address, tokenId]);
    assert.equal(listing[0], zeroAddress);
  });

  it("Should cancel listing when offer is accepted", async function () {
    const { marketplace, mock721, bragToken, seller, buyer, owner } = await deployMarketplace();

    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    const tokenId = 1n;
    await mock721.write.mint([seller.account.address, tokenId]);
    await mock721.write.approve([marketplace.address, tokenId], { account: seller.account });

    // Create listing
    await marketplace.write.createListing([mock721.address, tokenId, 1n, parseEther("20")], { account: seller.account });

    // Create and accept offer
    const offerPrice = parseEther("15");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mock721.address, tokenId, 1n, offerPrice], { account: buyer.account });
    await marketplace.write.acceptOffer([mock721.address, tokenId, buyer.account.address], { account: seller.account });

    // Check listing is canceled
    const listing = await marketplace.read.listings([mock721.address, tokenId]);
    assert.equal(listing[0], zeroAddress);
  });
});
