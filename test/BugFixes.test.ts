import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog } from "viem";

describe("Bug Fixes", async function () {
  const { viem } = await network.connect();

  async function deployMarketplace() {
    const [owner, seller, buyer, royaltyRecipient] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Mock NFT with controllable royalty
    const mockNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock NFT", "MOCK"]);

    return { marketplace, mockNFT, bragToken, owner, seller, buyer, royaltyRecipient };
  }

  it("NFTMarketplace: Should NOT deduct royalty if recipient is address(0)", async function () {
    const { marketplace, mockNFT, bragToken, seller, buyer, owner } = await deployMarketplace();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId]);

    // Set royalty to 5% but recipient to address(0)
    await mockNFT.write.setRoyalty([zeroAddress, 500n]);

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await mockNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([mockNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await mockNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    // Royalty should NOT be deducted because recipient was address(0)
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), offerPrice);
  });

  it("NFTMarketplace: Should deduct royalty if recipient is NOT address(0)", async function () {
    const { marketplace, mockNFT, bragToken, seller, buyer, owner, royaltyRecipient } = await deployMarketplace();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    // Seller mints an NFT
    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId]);

    // Set royalty to 5% to royaltyRecipient
    await mockNFT.write.setRoyalty([royaltyRecipient.account.address, 500n]);

    // Buyer makes an offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Seller approves and accepts
    await mockNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.acceptOffer([mockNFT.address, tokenId, buyer.account.address], { account: seller.account });

    // Verify results
    assert.equal(await mockNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    const royaltyFee = (offerPrice * 500n) / 10000n;
    const expectedSellerProceeds = offerPrice - royaltyFee;
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), expectedSellerProceeds);
    assert.equal(await bragToken.read.balanceOf([royaltyRecipient.account.address]), royaltyFee);
  });

  async function deployBragNFT() {
    const [owner] = await viem.getWalletClients();
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1")
    , priceFeed.address]);
    return { bragNFT };
  }

  it("NFTMarketplace: Should enforce ownership and amount == 1 on listing updates", async function () {
    const { marketplace, mockNFT, bragToken, seller, buyer, owner } = await deployMarketplace();

    // Seller mints an NFT
    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId]);

    // Seller creates a listing
    await mockNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
    await marketplace.write.createListing([mockNFT.address, tokenId, 1n, parseEther("1")], { account: seller.account });

    // 1. Seller attempts to update listing with amount = 2 -> Should revert
    await assert.rejects(
      marketplace.write.updateListing([mockNFT.address, tokenId, 2n, parseEther("2")], { account: seller.account }),
      /ERC721 listing must have amount 1/
    );

    // 2. Seller transfers NFT to buyer
    await mockNFT.write.transferFrom([seller.account.address, buyer.account.address, tokenId], { account: seller.account });

    // 3. Seller attempts to update listing when no longer owner -> Should revert
    await assert.rejects(
      marketplace.write.updateListing([mockNFT.address, tokenId, 1n, parseEther("2")], { account: seller.account }),
      /You do not own this NFT/
    );
  });

  it("NFTMarketplace: Should enforce amount == 1 on ERC721 offer updates", async function () {
    const { marketplace, mockNFT, bragToken, seller, buyer, owner } = await deployMarketplace();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });

    const tokenId = 1n;
    await mockNFT.write.mint([seller.account.address, tokenId]);

    // Buyer creates valid offer
    const offerPrice = parseEther("1");
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });
    await marketplace.write.createOffer([mockNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

    // Buyer attempts to update offer with amount = 2 -> Should revert
    await assert.rejects(
      marketplace.write.updateOffer([mockNFT.address, tokenId, 2n, parseEther("2")], { account: buyer.account }),
      /ERC721 offer must have amount 1/
    );
  });

  it("Treasury: Should validate array lengths in propose", async function () {
    const [owner1, owner2] = await viem.getWalletClients();
    const entryPoint = "0x0000000000000000000000000000000000000001"; // dummy entrypoint
    const treasury = await viem.deployContract("Treasury", [[owner1.account.address, owner2.account.address], 1n, entryPoint]);

    // Mismatched array lengths: 2 targets, 1 value, 1 data
    const targets = [owner1.account.address, owner2.account.address];
    const values = [0n];
    const datas = ["0x" as `0x`];

    await assert.rejects(
      treasury.write.propose([targets, values, datas, 0n], { account: owner1.account }),
      /Mismatched arrays/
    );
  });

  it("BragToken: Should batchMint tokens correctly and respect maxSupply and roles", async function () {
    const [owner, minter, recipient1, recipient2] = await viem.getWalletClients();

    const initialSupply = parseEther("1000");
    const maxSupply = parseEther("5000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, maxSupply]);

    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, minter.account.address], { account: owner.account });

    // Batch mint
    const recipients = [recipient1.account.address, recipient2.account.address];
    const amounts = [parseEther("500"), parseEther("1000")];

    await bragToken.write.batchMint([recipients, amounts], { account: minter.account });

    assert.equal(await bragToken.read.balanceOf([recipient1.account.address]), parseEther("500"));
    assert.equal(await bragToken.read.balanceOf([recipient2.account.address]), parseEther("1000"));

    // Exceed max supply -> Should revert
    await assert.rejects(
      bragToken.write.batchMint([recipients, [parseEther("2000"), parseEther("2000")]], { account: minter.account }),
      /Exceeds maxSupply/
    );

    // Mismatched array lengths -> Should revert
    await assert.rejects(
      bragToken.write.batchMint([[recipient1.account.address], amounts], { account: minter.account }),
      /Mismatched arrays/
    );
  });

  it("BragNFT: Should correctly detect audio extensions with various lengths", async function () {
    const { bragNFT } = await deployBragNFT();

    const [owner] = await viem.getWalletClients();

    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";


    const testURIs = [
      "a.mp3",       // Length 5
      ".wav",        // Length 4
      "abc",         // Length 3
      "a",           // Length 1
      "",            // Length 0
      "verylongfilename.mp3",
      "data:audio/mpeg;base64,..."
    ];

    for (const uri of testURIs) {
        // Donate and check tokenURI
        await bragNFT.write.donate(["test", uri], { value: parseEther("0.1") });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadataJson = atob(metadataBase64.split(",")[1]);
        const metadata = JSON.parse(metadataJson);

        if (uri.endsWith(".mp3") || uri.startsWith("data:audio/")) {
            assert.ok(metadata.animation_url, `Should have animation_url for ${uri}`);
        } else if (uri.length < 4) {
            assert.ok(!metadata.animation_url, `Should NOT have animation_url for short string ${uri}`);
        }
    }
  });
});
