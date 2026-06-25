import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("Enhancements v2", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, owner, seller, buyer, treasury };
  }

  describe("NFTMarketplace Batch Rejections and Updates", function () {
    it("Should batch reject offers", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await setup();

      // Mint 2 NFTs
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Buyer makes 2 offers
      await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

      const initialBuyerBalance = await bragToken.read.balanceOf([buyer.account.address]);

      // Seller batch rejects
      await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

      assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), initialBuyerBalance + parseEther("3"));

      const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      assert.equal(offer0[0], 0n);
    });

    it("Should batch update offers", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await setup();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

      // Batch update (increase one, decrease one)
      await marketplace.write.batchUpdateOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("1.5"), parseEther("1")]
      ], { account: buyer.account });

      const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      assert.equal(offer0[0], parseEther("1.5"));
      const offer1 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);
      assert.equal(offer1[0], parseEther("1"));

      assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("2.5"));
    });

    it("Should accept offer correctly after CEI refactoring (verify payment)", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner, treasury } = await setup();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

      const price = parseEther("5");
      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price], { account: buyer.account });

      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

      const initialSellerBalance = await bragToken.read.balanceOf([seller.account.address]);
      const initialTreasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);

      // Accept offer
      await marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer.account.address], { account: seller.account });

      const finalSellerBalance = await bragToken.read.balanceOf([seller.account.address]);
      const finalTreasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);

      // No protocol fee set, 8% royalty to treasury
      const royalty = (price * 800n) / 10000n;
      const sellerProceeds = price - royalty;

      assert.equal(finalSellerBalance - initialSellerBalance, sellerProceeds);
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, royalty);
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    });

    it("Should buy from listing correctly after CEI refactoring (verify payment)", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner, treasury } = await setup();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
      const price = parseEther("10");
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, price], { account: seller.account });

      await bragToken.write.transfer([buyer.account.address, price], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

      const initialSellerBalance = await bragToken.read.balanceOf([seller.account.address]);
      const initialTreasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);

      // Buy from listing
      await marketplace.write.buyFromListing([bragNFT.address, tokenId, seller.account.address, price], { account: buyer.account });

      const finalSellerBalance = await bragToken.read.balanceOf([seller.account.address]);
      const finalTreasuryBalance = await bragToken.read.balanceOf([treasury.account.address]);

      const royalty = (price * 800n) / 10000n;
      const sellerProceeds = price - royalty;

      assert.equal(finalSellerBalance - initialSellerBalance, sellerProceeds);
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, royalty);
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    });
  });

  describe("BragNFT Dynamic SVG", function () {
    it("Should change SVG background color based on TaxStatus", async function () {
      const { bragNFT, owner } = await setup();

      await bragNFT.write.donate(["Pending NFT", ""], { value: parseEther("0.1") });
      const tokenId = 0n;

      const getBgColor = async (id: bigint) => {
        const uri = await bragNFT.read.tokenURI([id]);
        const decoded = JSON.parse(atob(uri.split(",")[1]));
        const svg = atob(decoded.image.split(",")[1]);
        const match = svg.match(/fill="([^"]+)"/);
        return match ? match[1] : null;
      };

      assert.equal(await getBgColor(tokenId), "#6366f1"); // Pending

      await bragNFT.write.setTaxStatus([tokenId, 1]); // Verified
      assert.equal(await getBgColor(tokenId), "#22c55e");

      await bragNFT.write.setTaxStatus([tokenId, 2]); // Claimed
      assert.equal(await getBgColor(tokenId), "#eab308");

      await bragNFT.write.setTaxStatus([tokenId, 3]); // Flagged
      assert.equal(await getBgColor(tokenId), "#ef4444");
    });
  });

  describe("ExhibitVault Batch moveBatch721", function () {
    it("Should moveBatch721 tokens", async function () {
      const { bragNFT, vault1, vault2, seller } = await setup();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      // moveBatch721
      await vault1.write.moveBatch721([bragNFT.address, [0n, 1n], vault2.address], { account: seller.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault2.address));
      assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
    });
  });
});
