import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Marketplace Compatibility (ERC721 & ERC1155)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // ERC721
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1")
    , priceFeed.address]);

    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";


    // ERC1155
    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { marketplace, bragNFT, mock1155, bragToken, owner, seller, buyer };
  }

  it("Should handle ERC721 offers and acceptance", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["sellable nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    // Default royalty is 8% in the new model
    const expectedSellerProceeds = offerPrice - (offerPrice * 800n / 10000n);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), expectedSellerProceeds);
  });

  it("Should handle ERC1155 offers and acceptance", async function () {
    const { marketplace, mock1155, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Mint 10 units to seller
    const tokenId = 1337n;
    const amount = 5n;
    await mock1155.write.mint([seller.account.address, tokenId, 10n]);

    // Buyer makes an offer for 5 units
    const offerPrice = parseEther("2");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mock1155.address, tokenId, amount, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.acceptOffer([mock1155.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await mock1155.read.balanceOf([buyer.account.address, tokenId]), amount);
    assert.equal(await mock1155.read.balanceOf([seller.account.address, tokenId]), 5n);
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), offerPrice);
  });

  it("Should revert on ERC721 offer if amount != 1", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 2n, offerPrice], { account: buyer.account });

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await assert.rejects(
        marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account }),
        /ERC721 offer must have amount 1/
    );
  });

  it("Should revert on ERC1155 offer if balance is insufficient", async function () {
    const { marketplace, mock1155, bragToken, seller, buyer, owner } = await deployAll();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    const tokenId = 1n;
    await mock1155.write.mint([seller.account.address, tokenId, 10n]);

    // Buyer wants 20 units
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mock1155.address, tokenId, 20n, offerPrice], { account: buyer.account });

    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await assert.rejects(
        marketplace.write.acceptOffer([mock1155.address, tokenId, buyer.account.address], { account: seller.account }),
        /From has insufficient balance/
    );
  });

  it("Should handle multiple simultaneous offers and rejection", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();
    const [_, __, ___, buyer2] = await viem.getWalletClients();

    // Fund buyers
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.transfer([buyer2.account.address, parseEther("10")], { account: owner.account });

    // Seller mints
    await bragNFT.write.donate(["nft", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Buyer 1 makes offer
    const price1 = parseEther("1");
    await bragToken.write.approve([marketplace.address, price1], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price1], { account: buyer.account });

    // Buyer 2 makes offer
    const price2 = parseEther("2");
    await bragToken.write.approve([marketplace.address, price2], { account: buyer2.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price2], { account: buyer2.account });

    // Seller rejects buyer 1
    await marketplace.write.rejectOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify buyer 1 got refund
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));

    // Seller accepts buyer 2
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer2.account.address], { account: seller.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer2.account.address));
  });

  it("Should handle protocol fees", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Set fee to 5%
    await marketplace.write.setProtocolFee([500n]);
    const feeRecipient = owner.account.address;
    await marketplace.write.setFeeRecipient([feeRecipient]);

    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragNFT.write.donate(["fee test", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const offerPrice = parseEther("2");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    const balanceBefore = await bragToken.read.balanceOf([feeRecipient]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const fee = (offerPrice * 500n) / 10000n;
    // Default royalty is 8% plus 5% protocol fee
    const royaltyFee = (offerPrice * 800n) / 10000n;
    const expectedSellerProceeds = offerPrice - fee - royaltyFee;

    assert.equal(await bragToken.read.balanceOf([seller.account.address]), expectedSellerProceeds);
    assert.equal(await bragToken.read.balanceOf([feeRecipient]), balanceBefore + fee + royaltyFee);
  });
});
