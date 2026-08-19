import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import hre from "hardhat";
import {
  parseEther,
  getAddress,
  keccak256
} from "viem";
import { stringToHex } from "viem/utils";

describe("NFTMarketplace Fixed-Price Listings", async function () {
  const { viem } = await hre.network.connect();
  let publicClient: any;
  let marketplace: any;
  let bragNFT: any;
  let bragToken: any;
  let owner: any;
  let buyer: any;

  before(async () => {
    publicClient = await viem.getPublicClient();
    const wallets = await viem.getWalletClients();
    owner = wallets[0];
    buyer = wallets[1];

    // Deploy core contracts
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);
    bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("1000000")]);
    marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, 1n, mockPriceFeed.address]);

    // Setup
    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    // Give buyer some tokens
    await bragToken.write.transfer([buyer.account.address, parseEther("100")]);
  });

  it("Should allow creating and buying a listing (ERC721)", async function () {
    // 1. Mint NFT
    await bragNFT.write.donate(["Test NFT", "uri", false], { value: 1n });
    const tokenId = 0n;

    // 2. Approve Marketplace
    await bragNFT.write.approve([marketplace.address, tokenId]);

    // 3. Create Listing
    const price = parseEther("10");
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, price]);

    const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
    assert.equal(listing[0], getAddress(owner.account.address));
    assert.equal(listing[1], price);
    assert.equal(listing[2], 1n);

    // 4. Buyer buys from listing
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, price], { account: buyer.account });

    // 5. Verify ownership
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));

    // 6. Verify listing is cleared
    const deletedListing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
    assert.equal(deletedListing[1], 0n);
  });

  it("Should allow canceling a listing", async function () {
    await bragNFT.write.donate(["Test NFT 2", "uri2", false], { value: 1n });
    const tokenId = 1n;

    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("5")]);
    await marketplace.write.cancelListing([bragNFT.address, tokenId]);

    const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
    assert.equal(listing[1], 0n);
  });

  it("Should automatically cancel listing when an offer is accepted", async function () {
    await bragNFT.write.donate(["Test NFT 3", "uri3", false], { value: 1n });
    const tokenId = 2n;

    // Create listing
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("50")]);

    // Buyer makes offer
    const offerPrice = parseEther("40");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller accepts offer
    await bragNFT.write.approve([marketplace.address, tokenId]);
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address]);

    // Verify listing is canceled
    const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
    assert.equal(listing[1], 0n);
  });

  it("Should allow creating and buying a listing (ERC1155)", async function () {
    const mock1155 = await viem.deployContract("MockERC1155");
    const tokenId = 42n;
    const amount = 10n;
    const price = parseEther("20");

    // 1. Mint to owner
    await mock1155.write.mint([owner.account.address, tokenId, amount]);

    // 2. Approve Marketplace
    await mock1155.write.setApprovalForAll([marketplace.address, true]);

    // 3. Create Listing
    await marketplace.write.createListing([mock1155.address, tokenId, amount, price]);

    // 4. Buyer buys
    await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
    await marketplace.write.buyFromListing([mock1155.address, tokenId, owner.account.address, price], { account: buyer.account });

    // 5. Verify balance
    assert.equal(await mock1155.read.balanceOf([buyer.account.address, tokenId]), amount);
  });

  it("Should respect Pausable state", async function () {
    await marketplace.write.pause();

    await assert.rejects(
      marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: owner.account }),
      /EnforcedPause/
    );

    await marketplace.write.unpause();
  });

  it("Should revert if price mismatch", async function () {
    await bragNFT.write.donate(["Price mismatch test", "uri"], { value: 1n });
    const tokenId = 3n; // Previous tests used 0, 1, 2
    await bragNFT.write.approve([marketplace.address, tokenId]);
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")]);

    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });
    await assert.rejects(
      marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, parseEther("9")], { account: buyer.account }),
      /Price mismatch/
    );
  });

  it("Should allow updating listing with target private buyer", async function () {
    await bragNFT.write.donate(["Private listing update test", "uri"], { value: 1n });
    const tokenId = 4n;
    await bragNFT.write.approve([marketplace.address, tokenId]);

    // Create public listing
    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")]);

    // Update listing to set private buyer
    await marketplace.write.updateListing([
      bragNFT.address,
      tokenId,
      1n,
      parseEther("15"),
      buyer.account.address
    ]);

    const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
    assert.equal(listing[1], parseEther("15"));
    assert.equal(listing[3], getAddress(buyer.account.address));
  });

  it("Should allow batch updating public and private listings", async function () {
    await bragNFT.write.donate(["Batch update 1", "uri"], { value: 1n });
    await bragNFT.write.donate(["Batch update 2", "uri"], { value: 1n });
    const tokenId1 = 5n;
    const tokenId2 = 6n;

    await bragNFT.write.approve([marketplace.address, tokenId1]);
    await bragNFT.write.approve([marketplace.address, tokenId2]);

    // Create initial listings
    await marketplace.write.createListing([bragNFT.address, tokenId1, 1n, parseEther("5")]);
    await marketplace.write.createListing([bragNFT.address, tokenId2, 1n, parseEther("5")]);

    // Batch update public listings
    await marketplace.write.batchUpdateListings([
      [bragNFT.address, bragNFT.address],
      [tokenId1, tokenId2],
      [1n, 1n],
      [parseEther("8"), parseEther("12")]
    ]);

    let listing1 = await marketplace.read.listings([bragNFT.address, tokenId1, owner.account.address]);
    let listing2 = await marketplace.read.listings([bragNFT.address, tokenId2, owner.account.address]);
    assert.equal(listing1[1], parseEther("8"));
    assert.equal(listing2[1], parseEther("12"));

    // Batch update private listings
    await marketplace.write.batchUpdatePrivateListings([
      [bragNFT.address, bragNFT.address],
      [tokenId1, tokenId2],
      [1n, 1n],
      [parseEther("10"), parseEther("15")],
      [buyer.account.address, buyer.account.address]
    ]);

    listing1 = await marketplace.read.listings([bragNFT.address, tokenId1, owner.account.address]);
    listing2 = await marketplace.read.listings([bragNFT.address, tokenId2, owner.account.address]);
    assert.equal(listing1[1], parseEther("10"));
    assert.equal(listing1[3], getAddress(buyer.account.address));
    assert.equal(listing2[1], parseEther("15"));
    assert.equal(listing2[3], getAddress(buyer.account.address));
  });
});
