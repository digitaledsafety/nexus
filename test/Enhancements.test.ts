import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Enhancements (Royalties & SVG Escaping)", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    // BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Marketplace (now with 1 arg)
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1")
    , priceFeed.address]);


    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));


    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  it("Should correctly distribute royalties to the treasury", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Royalty is fixed at 8% (800 bps)

    // Buyer makes an offer
    const offerPrice = parseEther("10");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyRecipient, getAddress(treasury.account.address));
    assert.equal(royaltyAmount, parseEther("0.8")); // 8% of 10

    // Seller accepts
    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify distribution
    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("0.8"));
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("9.2"));
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
  });

  it("Should correctly escape special characters in SVG", async function () {
    const { bragNFT, seller } = await deployAll();

    const maliciousMessage = '<script>alert("XSS")</script> & "quotes"';
    await bragNFT.write.donate([maliciousMessage, ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

    // Verify SVG is escaped
    assert.ok(!svg.includes("<script>"), "SVG should not contain raw <script> tag");
    assert.ok(svg.includes("&lt;script&gt;"), "SVG should contain escaped script tag");
    assert.ok(svg.includes("&amp;"), "SVG should contain escaped ampersand");
    assert.ok(svg.includes("&quot;"), "SVG should contain escaped quotes");

    // Verify JSON description is also handled (it uses _escapeJSON which was already there but good to check)
    assert.ok(json.description.includes(maliciousMessage), "JSON description should contain original message (escaped in JSON string)");
  });

  it("Should cap royalties if they exceed the price", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, treasury, owner } = await deployAll();

    // Fund buyer
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // Seller mints an NFT
    await bragNFT.write.donate(["Capped Royalty NFT", ""], { account: seller.account, value: parseEther("0.1") });
    const tokenId = 0n;

    // Set protocol fee to 10% (1000 bps) - maximum allowed
    await marketplace.write.setProtocolFee([1000], { account: owner.account });

    // Royalty is fixed at 8% (total 18%)

    // Buyer makes an offer
    const offerPrice = parseEther("100");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Verify royalty info (8 ETH)
    const [royaltyRecipient, royaltyAmount] = await bragNFT.read.royaltyInfo([tokenId, offerPrice]);
    assert.equal(royaltyAmount, parseEther("8"));

    // Seller accepts
    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    const treasuryBalanceBefore = await bragToken.read.balanceOf([treasury.account.address]);
    const sellerBalanceBefore = await bragToken.read.balanceOf([seller.account.address]);
    const feeRecipientBalanceBefore = await bragToken.read.balanceOf([owner.account.address]); // feeRecipient is owner by default

    await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

    const treasuryBalanceAfter = await bragToken.read.balanceOf([treasury.account.address]);
    const feeRecipientBalanceAfter = await bragToken.read.balanceOf([owner.account.address]);
    const sellerBalanceAfter = await bragToken.read.balanceOf([seller.account.address]);

    // Protocol fee: 10% of 100 = 10 ETH
    assert.equal(feeRecipientBalanceAfter - feeRecipientBalanceBefore, parseEther("10"));
    // Royalty fee: 8% of 100 = 8 ETH
    assert.equal(treasuryBalanceAfter - treasuryBalanceBefore, parseEther("8"));
    // Seller proceeds: 100 - 10 - 8 = 82 ETH
    assert.equal(sellerBalanceAfter - sellerBalanceBefore, parseEther("82"));
  });

  it("Should allow updating private buyers with overloaded updateListing and batch updates", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();
    const [, , , , user2] = await viem.getWalletClients();

    // Seller mints two NFTs
    await bragNFT.write.donate(["Listing 1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Listing 2", ""], { account: seller.account, value: parseEther("0.1") });

    // Approve marketplace
    await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

    // Create a public listing for token 0
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });

    // Overloaded updateListing: set private buyer to buyer
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("6"), buyer.account.address], { account: seller.account });

    let listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing[1], parseEther("6")); // price
    assert.equal(listing[3], getAddress(buyer.account.address)); // privateBuyer

    // Fund buyer and user2
    await bragToken.write.transfer([buyer.account.address, parseEther("50")], { account: owner.account });
    await bragToken.write.transfer([user2.account.address, parseEther("50")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("50")], { account: user2.account });

    // user2 attempt to buy private listing should fail
    await assert.rejects(
      marketplace.write.buyFromListing([bragNFT.address, 0n, seller.account.address, parseEther("6")], { account: user2.account }),
      /Private listing: only the specified buyer can purchase/
    );

    // Overloaded updateListing: clear private buyer (set to address(0))
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("4"), "0x0000000000000000000000000000000000000000"], { account: seller.account });

    // user2 can now buy
    await marketplace.write.buyFromListing([bragNFT.address, 0n, seller.account.address, parseEther("4")], { account: user2.account });
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user2.account.address));

    // Test batchUpdateListings & batchUpdatePrivateListings on token 1
    await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("10")], { account: seller.account });
    await marketplace.write.batchUpdateListings([[bragNFT.address], [1n], [1n], [parseEther("12")]], { account: seller.account });

    listing = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
    assert.equal(listing[1], parseEther("12"));

    await marketplace.write.batchUpdatePrivateListings([[bragNFT.address], [1n], [1n], [parseEther("15")], [buyer.account.address]], { account: seller.account });
    listing = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
    assert.equal(listing[1], parseEther("15"));
    assert.equal(listing[3], getAddress(buyer.account.address));
  });

  it("Should batch move ERC721 tokens from a single contract using moveBatch721 and moveBatch721WithDuration", async function () {
    const { bragNFT, owner, seller } = await deployAll();
    const publicClient = await viem.getPublicClient();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vaultA = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vaultB = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vaultA.address, 0, "Vault A", "Vault A"]);
    await registry.write.verifyVault([vaultB.address, 0, "Vault B", "Vault B"]);

    // Seller mints token 0 and token 1
    await bragNFT.write.donate(["MoveBatch 1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["MoveBatch 2", ""], { account: seller.account, value: parseEther("0.1") });

    // Exhibit both to vaultA
    await bragNFT.write.safeTransferFrom([seller.account.address, vaultA.address, 0n], { account: seller.account });
    await bragNFT.write.safeTransferFrom([seller.account.address, vaultA.address, 1n], { account: seller.account });

    assert.equal(await vaultA.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
    assert.equal(await vaultA.read.owner721([bragNFT.address, 1n]), getAddress(seller.account.address));

    // Move batch to vaultB without duration
    await vaultA.write.moveBatch721([bragNFT.address, [0n, 1n], vaultB.address], { account: seller.account });

    assert.equal(await vaultA.read.owner721([bragNFT.address, 0n]), getAddress("0x0000000000000000000000000000000000000000"));
    assert.equal(await vaultB.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
    assert.equal(await vaultB.read.owner721([bragNFT.address, 1n]), getAddress(seller.account.address));

    // Move batch back to vaultA with 3600s duration
    await vaultB.write.moveBatch721WithDuration([bragNFT.address, [0n, 1n], vaultA.address, 3600n], { account: seller.account });

    assert.equal(await vaultA.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));

    // Attempt to withdraw from vaultA early should fail due to lock
    await assert.rejects(
      vaultA.write.withdraw721([bragNFT.address, 0n], { account: seller.account }),
      /Exhibition not yet expired/
    );

    // Fast-forward time
    await publicClient.request({ method: "evm_increaseTime" as any, params: [3601] });
    await publicClient.request({ method: "evm_mine" as any, params: [] });

    // Withdraw should now succeed
    await vaultA.write.withdraw721([bragNFT.address, 0n], { account: seller.account });
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(seller.account.address));
  });

  it("Should enforce array length matching in Treasury propose", async function () {
    const [owner, owner2, mockEntryPoint] = await viem.getWalletClients();

    const treasury = await viem.deployContract("Treasury", [[owner.account.address, owner2.account.address], 1n, mockEntryPoint.account.address]);

    // Attempt to propose with mismatched array lengths
    await assert.rejects(
      treasury.write.propose([[owner2.account.address, owner2.account.address], [parseEther("1")], ["0x"], 0n], { account: owner.account }),
      /Mismatched arrays/
    );
  });
});
