import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Marketplace Enhancements - Fixed Price Listings", async function () {
  const { viem } = await network.connect();

  async function deployMarketplaceFixture() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    const paymentToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("10000000"),
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      paymentToken.address,
    ]);

    const nft = await viem.deployContract("MockRoyaltyNFT", ["MockNFT", "MNFT"]);
    await nft.write.setRoyalty([treasury.account.address, 800n]); // 8%

    // Transfer some tokens to buyer
    await paymentToken.write.transfer([buyer.account.address, parseEther("1000")]);

    return { marketplace, nft, paymentToken, owner, seller, buyer, treasury, publicClient };
  }

  it("Should create and buy from a fixed-price listing", async function () {
    const { marketplace, nft, paymentToken, seller, buyer } = await deployMarketplaceFixture();

    const tokenId = 1n;
    await nft.write.mint([seller.account.address, tokenId]);
    await nft.write.approve([marketplace.address, tokenId], { account: seller.account });

    const price = parseEther("100");
    await marketplace.write.createListing([nft.address, tokenId, 1n, price], { account: seller.account });

    const listing = await marketplace.read.listings([nft.address, tokenId, seller.account.address]);
    assert.equal(listing[1], price);
    assert.equal(listing[3], true);

    await paymentToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyFromListing([nft.address, tokenId, seller.account.address], { account: buyer.account });

    assert.equal(await nft.read.ownerOf([tokenId]), getAddress(buyer.account.address));

    const soldListing = await marketplace.read.listings([nft.address, tokenId, seller.account.address]);
    assert.equal(soldListing[3], false);

    // Check seller balance (8% royalty by default in MockRoyaltyNFT)
    const sellerBalance = await paymentToken.read.balanceOf([seller.account.address]);
    // 100 - (100 * 0.08) = 92 (Assuming 0 protocol fee)
    assert.equal(sellerBalance, parseEther("92"));
  });

  it("Should handle royalties and protocol fees correctly in listings", async function () {
    const { marketplace, nft, paymentToken, owner, seller, buyer, treasury } = await deployMarketplaceFixture();

    await marketplace.write.setProtocolFee([250n], { account: owner.account }); // 2.5%
    await marketplace.write.setFeeRecipient([treasury.account.address], { account: owner.account });

    const tokenId = 2n;
    await nft.write.mint([seller.account.address, tokenId]);
    await nft.write.approve([marketplace.address, tokenId], { account: seller.account });

    const price = parseEther("1000");
    await marketplace.write.createListing([nft.address, tokenId, 1n, price], { account: seller.account });

    await paymentToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyFromListing([nft.address, tokenId, seller.account.address], { account: buyer.account });

    // Fees:
    // Protocol: 1000 * 0.025 = 25
    // Royalty: 1000 * 0.08 = 80
    // Total treasury: 25 (protocol) + 80 (royalty) = 105
    // Seller: 1000 - 25 - 80 = 895

    assert.equal(await paymentToken.read.balanceOf([treasury.account.address]), parseEther("105"));
    assert.equal(await paymentToken.read.balanceOf([seller.account.address]), parseEther("895"));
  });

  it("Should allow canceling a listing", async function () {
    const { marketplace, nft, seller } = await deployMarketplaceFixture();

    const tokenId = 3n;
    await nft.write.mint([seller.account.address, tokenId]);
    await marketplace.write.createListing([nft.address, tokenId, 1n, parseEther("50")], { account: seller.account });

    await marketplace.write.cancelListing([nft.address, tokenId], { account: seller.account });

    const listing = await marketplace.read.listings([nft.address, tokenId, seller.account.address]);
    assert.equal(listing[3], false);
  });
});
