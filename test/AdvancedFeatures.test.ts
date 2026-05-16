import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Advanced Features", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    // Deploy BragToken
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);

    // Deploy Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Deploy BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.01"), priceFeed.address]);

    // Deploy ExhibitRegistry and Vault
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [registry.address]);

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "First Vault"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Second Vault"]);

    // Deploy MockERC1155
    const mock1155 = await viem.deployContract("MockERC1155");

    return { owner, seller, buyer, treasury, bragToken, marketplace, bragNFT, registry, vault1, vault2, mock1155 };
  }

  describe("NFTMarketplace: Fixed-Price Listings", async function () {
    it("Should create, buy, and cancel listings", async function () {
      const { seller, buyer, bragToken, marketplace, bragNFT, owner } = await setup();

      // Seller mints an NFT
      await bragNFT.write.donate(["For Sale", "art.png"], { value: parseEther("0.1"), account: seller.account });
      const tokenId = 0n;

      // Approve marketplace
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

      // Create listing
      const price = parseEther("100");
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, price], { account: seller.account });

      let listing = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(listing[0], getAddress(seller.account.address));
      assert.equal(listing[1], price);
      assert.equal(listing[3], true);

      // Buyer buys listing
      await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price], { account: buyer.account });
      await marketplace.write.buyFromListing([bragNFT.address, tokenId], { account: buyer.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
      listing = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(listing[3], false);
    });

    it("Should automatically cancel listing when an offer is accepted", async function () {
      const { seller, buyer, bragToken, marketplace, bragNFT, owner } = await setup();

      await bragNFT.write.donate(["Nexus", "art.png"], { value: parseEther("0.1"), account: seller.account });
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

      // Create listing
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("500")], { account: seller.account });

      // Buyer makes an offer
      const offerPrice = parseEther("400");
      await bragToken.write.transfer([buyer.account.address, offerPrice], { account: owner.account });
      await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

      // Seller accepts offer
      await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

      // Verify listing is canceled
      const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(listing[3], false);
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    });
  });

  describe("NFTMarketplace: Batch Offer Acceptance", async function () {
    it("Should accept multiple offers in one transaction", async function () {
      const { seller, buyer, bragToken, marketplace, bragNFT, owner } = await setup();

      // Mint 2 NFTs
      await bragNFT.write.donate(["One", "1.png"], { value: parseEther("0.1"), account: seller.account });
      await bragNFT.write.donate(["Two", "2.png"], { value: parseEther("0.1"), account: seller.account });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Buyer makes offers
      const price = parseEther("50");
      await bragToken.write.transfer([buyer.account.address, price * 2n], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price * 2n], { account: buyer.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, price], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, price], { account: buyer.account });

      // Seller accepts both
      await marketplace.write.acceptOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [buyer.account.address, buyer.account.address]
      ], { account: seller.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(buyer.account.address));
    });
  });

  describe("BragNFT: Robust Multimedia Detection", async function () {
    it("Should detect multimedia with query params and fragments", async function () {
      const { bragNFT, owner } = await setup();

      const testCases = [
        { uri: "video.mp4?token=abc", expected: true },
        { uri: "audio.mp3#t=10", expected: true },
        { uri: "image.png?v=1", expected: false },
        { uri: "GIF_IMAGE.GIF", expected: true },
        { uri: "movie.webm?quality=hd#part1", expected: true }
      ];

      for (const { uri, expected } of testCases) {
        await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadata = JSON.parse(atob(metadataBase64.split(",")[1]));

        if (expected) {
          assert.ok(metadata.animation_url, `Should have animation_url for ${uri}`);
          assert.equal(metadata.animation_url, uri);
        } else {
          assert.ok(!metadata.animation_url, `Should NOT have animation_url for ${uri}`);
        }
      }
    });
  });

  describe("ExhibitVault: Optimized Batch Operations", async function () {
    it("Should use safeBatchTransferFrom for batch withdrawals", async function () {
        const { seller, vault1, mock1155 } = await setup();

        // Mint and deposit
        await mock1155.write.mintBatch([seller.account.address, [1n, 2n], [10n, 20n], "0x"]);
        await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });
        await mock1155.write.safeBatchTransferFrom([seller.account.address, vault1.address, [1n, 2n], [10n, 20n], "0x"], { account: seller.account });

        assert.equal(await vault1.read.balances1155([mock1155.address, 1n, seller.account.address]), 10n);
        assert.equal(await vault1.read.balances1155([mock1155.address, 2n, seller.account.address]), 20n);

        // Batch withdraw
        await vault1.write.withdrawBatch1155([mock1155.address, [1n, 2n], [10n, 20n]], { account: seller.account });

        assert.equal(await vault1.read.balances1155([mock1155.address, 1n, seller.account.address]), 0n);
        assert.equal(await mock1155.read.balanceOf([seller.account.address, 1n]), 10n);
    });

    it("Should use safeBatchTransferFrom for batch moves", async function () {
        const { seller, vault1, vault2, mock1155 } = await setup();

        await mock1155.write.mintBatch([seller.account.address, [3n, 4n], [5n, 5n], "0x"]);
        await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });
        await mock1155.write.safeBatchTransferFrom([seller.account.address, vault1.address, [3n, 4n], [5n, 5n], "0x"], { account: seller.account });

        // Batch move
        await vault1.write.moveBatch1155([mock1155.address, [3n, 4n], [5n, 5n], vault2.address], { account: seller.account });

        assert.equal(await vault1.read.balances1155([mock1155.address, 3n, seller.account.address]), 0n);
        assert.equal(await vault2.read.balances1155([mock1155.address, 3n, seller.account.address]), 5n);
    });
  });
});
