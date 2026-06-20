import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import hre from "hardhat";
import {
  parseEther,
  getAddress,
  keccak256,
  encodeFunctionData
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

    // 1. Deploy BragToken (Immutable)
    bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("1000000")]);

    // 2. Deploy Treasury (Immutable)
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);

    // 3. Deploy Logic contracts
    const bragNFTLogic = await viem.deployContract("BragNFT");
    const marketplaceLogic = await viem.deployContract("NFTMarketplace");

    // 4. Deploy Proxies
    const nftInitData = encodeFunctionData({
        abi: bragNFTLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, treasury.address, 1n, "0x0000000000000000000000000000000000000000"]
    });
    const nftProxy = await viem.deployContract("MockProxy", [bragNFTLogic.address, nftInitData]);
    bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    const marketplaceInitData = encodeFunctionData({
        abi: marketplaceLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, bragToken.address]
    });
    const marketplaceProxy = await viem.deployContract("MockProxy", [marketplaceLogic.address, marketplaceInitData]);
    marketplace = await viem.getContractAt("NFTMarketplace", marketplaceProxy.address);

    // Setup
    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    // Give buyer some tokens
    await bragToken.write.transfer([buyer.account.address, parseEther("100")]);
  });

  it("Should allow creating and buying a listing (ERC721)", async function () {
    // 1. Mint NFT
    await bragNFT.write.donate(["Test NFT", "", false], { value: 1n });
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
    await bragNFT.write.donate(["Test NFT 2", "", false], { value: 1n });
    const tokenId = 1n;

    await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("5")]);
    await marketplace.write.cancelListing([bragNFT.address, tokenId]);

    const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
    assert.equal(listing[1], 0n);
  });

  it("Should automatically cancel listing when an offer is accepted", async function () {
    await bragNFT.write.donate(["Test NFT 3", "", false], { value: 1n });
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
});
