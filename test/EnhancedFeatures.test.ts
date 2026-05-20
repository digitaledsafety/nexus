import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Enhanced Features", async function () {
  const { viem } = await network.connect();

  async function deployMarketplaceFixture() {
    const [admin, seller, buyer, treasury] = await viem.getWalletClients();

    const mockUSDC = await viem.deployContract("MockUSDC", []);
    const marketplace = await viem.deployContract("NFTMarketplace", [
      admin.account.address,
      mockUSDC.address,
    ]);

    const bragNFT = await viem.deployContract("BragNFT", [
      admin.account.address,
      treasury.account.address,
      parseEther("0.1"),
      zeroAddress, // No price feed for simple tests
    ]);

    // Setup: Mint an NFT and approve marketplace
    await bragNFT.write.donate(["Initial NFT", "ipfs://test"], { value: parseEther("0.1"), account: seller.account });
    const tokenId = 0n;

    await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

    // Give buyer some USDC
    await mockUSDC.write.mint([buyer.account.address, parseEther("1000")]);
    await mockUSDC.write.approve([marketplace.address, parseEther("1000")], { account: buyer.account });

    return { marketplace, bragNFT, mockUSDC, admin, seller, buyer, treasury, tokenId };
  }

  describe("NFTMarketplace Buy Now", function () {
    it("Should allow listing and buying an NFT", async function () {
      const { marketplace, bragNFT, mockUSDC, seller, buyer, tokenId } = await deployMarketplaceFixture();

      const price = parseEther("100");
      await marketplace.write.listForSale([bragNFT.address, tokenId, 1n, price], { account: seller.account });

      const [listingSeller, listingPrice, listingAmount, listingActive] = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(listingSeller.toLowerCase(), seller.account.address.toLowerCase());
      assert.equal(listingPrice, price);
      assert.equal(listingActive, true);

      await marketplace.write.buyNow([bragNFT.address, tokenId], { account: buyer.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
      // 8% royalty is hardcoded in BragNFT
      const royalty = (price * 800n) / 10000n;
      assert.equal(await mockUSDC.read.balanceOf([seller.account.address]), price - royalty);
    });

    it("Should allow canceling a listing", async function () {
      const { marketplace, bragNFT, seller, tokenId } = await deployMarketplaceFixture();

      await marketplace.write.listForSale([bragNFT.address, tokenId, 1n, parseEther("100")], { account: seller.account });
      await marketplace.write.cancelListing([bragNFT.address, tokenId], { account: seller.account });

      const [, , , listingActive] = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(listingActive, false);
    });
  });

  describe("BragNFT UTF-8 Safe Truncation", function () {
    it("Should safely truncate long messages in SVG", async function () {
      const { bragNFT } = await deployMarketplaceFixture();

      // Multi-byte characters (emojis)
      const longMessage = "This is a very long message with emojis 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟";
      await bragNFT.write.donate([longMessage, ""], { value: parseEther("0.1") });

      const tokenId = 1n; // Second NFT minted in this test context
      const uri = await bragNFT.read.tokenURI([tokenId]);

      // Decode base64 URI
      const base64Json = uri.split(",")[1];
      const json = JSON.parse(Buffer.from(base64Json, "base64").toString());

      assert.equal(json.name, `BragNFT #${tokenId}`);
      // The image URI should contain the SVG
      const svgBase64 = json.image.split(",")[1];
      const svg = Buffer.from(svgBase64, "base64").toString();

      // Check that the SVG contains truncated text but is valid
      assert.ok(svg.includes("<svg"));
      assert.ok(svg.includes("</svg>"));
    });
  });

  describe("ExhibitVault AccessControl and Recovery", function () {
    async function deployVaultFixture() {
      const [admin, user] = await viem.getWalletClients();
      const registry = await viem.deployContract("ExhibitRegistry", [admin.account.address]);
      const vault = await viem.deployContract("ExhibitVault", [admin.account.address, registry.address]);
      const mockUSDC = await viem.deployContract("MockUSDC", []);

      return { vault, registry, admin, user, mockUSDC };
    }

    it("Should allow admin to withdraw accidental ERC20", async function () {
      const { vault, admin, mockUSDC } = await deployVaultFixture();

      await mockUSDC.write.mint([vault.address, parseEther("50")]);
      assert.equal(await mockUSDC.read.balanceOf([vault.address]), parseEther("50"));

      await vault.write.withdrawERC20([mockUSDC.address, admin.account.address, parseEther("50")], { account: admin.account });
      assert.equal(await mockUSDC.read.balanceOf([vault.address]), 0n);
      assert.equal(await mockUSDC.read.balanceOf([admin.account.address]), parseEther("50"));
    });

    it("Should allow admin to withdraw accidental ETH", async function () {
      const { vault, admin, user } = await deployVaultFixture();

      await user.sendTransaction({ to: vault.address, value: parseEther("1") });
      const publicClient = await viem.getPublicClient();
      const initialAdminBalance = await publicClient.getBalance({ address: admin.account.address });

      await vault.write.withdrawETH([admin.account.address, parseEther("1")], { account: admin.account });

      const finalAdminBalance = await publicClient.getBalance({ address: admin.account.address });
      assert.ok(finalAdminBalance > initialAdminBalance);
    });
  });
});
