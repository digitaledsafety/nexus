import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes } from "viem";

describe("Enhanced Features", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer, other] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, parseEther("10000000000")]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT & Dependencies
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.1"), priceFeed.address]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    // ExhibitVault & Registry
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    // BatchGrant
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    return { marketplace, bragNFT, bragToken, treasury, registry, vault, batchGrant, owner, seller, buyer, other };
  }

  describe("NFTMarketplace Fixed-Price Listings", () => {
    it("Should list and buy an ERC721 NFT", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer } = await setup();

      // Seller mints NFT
      await bragNFT.write.donate(["For Sale", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      // List for sale
      const price = parseEther("10");
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
      await marketplace.write.listForSale([bragNFT.address, tokenId, 1n, price], { account: seller.account });

      const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(listing[0], getAddress(seller.account.address));
      assert.equal(listing[1], price);
      assert.equal(listing[3], true); // active

      // Buyer buys it
      await bragToken.write.transfer([buyer.account.address, price], { account: seller.account }); // Funding buyer for test
      await bragToken.write.approve([marketplace.address, price], { account: buyer.account });

      await marketplace.write.buyNow([bragNFT.address, tokenId], { account: buyer.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
      const finalListing = await marketplace.read.listings([bragNFT.address, tokenId]);
      assert.equal(finalListing[3], false); // inactive/deleted
    });

    it("Should allow canceling a listing", async function () {
        const { marketplace, bragNFT, seller } = await setup();
        await bragNFT.write.donate(["Cancel Me", ""], { account: seller.account, value: parseEther("0.1") });
        const tokenId = 0n;

        await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
        await marketplace.write.listForSale([bragNFT.address, tokenId, 1n, parseEther("5")], { account: seller.account });

        await marketplace.write.cancelListing([bragNFT.address, tokenId], { account: seller.account });
        const listing = await marketplace.read.listings([bragNFT.address, tokenId]);
        assert.equal(listing[3], false);
    });
  });

  describe("BragNFT UTF-8 Safe Truncation", () => {
    it("Should truncate long messages without breaking UTF-8 characters", async function () {
      const { bragNFT } = await setup();

      // A string with multi-byte characters at the potential truncation boundary (32 bytes)
      // "This message is very long and has 🚀"
      // "This message is very long and ha" is 31 bytes.
      // 🚀 is 4 bytes: F0 9F 9A 80

      const longMessage = "This message is very long and ha🚀!!!!";
      // "This message is very long and ha" = 31 bytes
      // Next byte is 0xF0 (start of 🚀)
      // If we truncate at 32, it would take 0xF0.
      // Our _substring should move back to 31.

      await bragNFT.write.donate([longMessage, ""], { value: parseEther("0.1") });
      const tokenId = 0n;

      const uri = await bragNFT.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

      // Extract SVG from image URI
      const svgBase64 = json.image.split(",")[1];
      const svg = Buffer.from(svgBase64, "base64").toString();

      // The message in SVG should be truncated
      assert.ok(svg.includes("This message is very long and ha"));
      assert.ok(!svg.includes("🚀"));
    });

    it("Should keep the whole emoji if it fits within limits", async function () {
        const { bragNFT } = await setup();
        const msg = "Short 🚀 msg"; // Fits in 32 bytes
        await bragNFT.write.donate([msg, ""], { value: parseEther("0.1") });
        const tokenId = 0n;
        const uri = await bragNFT.read.tokenURI([tokenId]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
        const svg = Buffer.from(json.image.split(",")[1], "base64").toString();
        assert.ok(svg.includes("Short 🚀 msg"));
    });
  });

  describe("Administrative Functions", () => {
    it("Should update on-chain media", async function () {
        const { bragNFT, owner } = await setup();
        await bragNFT.write.donate(["Test", ""], { value: parseEther("0.1") });
        const tokenId = 0n;

        const newMedia = "ipfs://new-media";
        await bragNFT.write.updateOnChainMedia([tokenId, newMedia], { account: owner.account });

        const uri = await bragNFT.read.tokenURI([tokenId]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
        assert.equal(json.image, newMedia);
    });

    it("Should allow admin to withdraw ETH from contracts", async function () {
        const { bragNFT, marketplace, vault, registry, batchGrant, owner, other } = await setup();

        const publicClient = await viem.getPublicClient();

        // Get initial balances of contracts
        const b1 = await publicClient.getBalance({ address: bragNFT.address });
        const b2 = await publicClient.getBalance({ address: marketplace.address });
        const b3 = await publicClient.getBalance({ address: vault.address });
        const b4 = await publicClient.getBalance({ address: registry.address });
        const b5 = await publicClient.getBalance({ address: batchGrant.address });

        const totalToWithdraw = b1 + b2 + b3 + b4 + b5;

        const ownerBalanceBefore = await publicClient.getBalance({ address: owner.account.address });

        await bragNFT.write.withdrawETH({ account: owner.account });
        await marketplace.write.withdrawETH({ account: owner.account });
        await vault.write.withdrawETH({ account: owner.account });
        await registry.write.withdrawETH({ account: owner.account });
        await batchGrant.write.withdrawETH({ account: owner.account });

        const ownerBalanceAfter = await publicClient.getBalance({ address: owner.account.address });

        // Should have increased by at least totalToWithdraw - gas
        assert.ok(ownerBalanceAfter > ownerBalanceBefore + totalToWithdraw - parseEther("0.1"));

        // Contracts should now have 0 ETH
        assert.equal(await publicClient.getBalance({ address: bragNFT.address }), 0n);
        assert.equal(await publicClient.getBalance({ address: marketplace.address }), 0n);
        assert.equal(await publicClient.getBalance({ address: vault.address }), 0n);
        assert.equal(await publicClient.getBalance({ address: registry.address }), 0n);
        assert.equal(await publicClient.getBalance({ address: batchGrant.address }), 0n);
    });

    it("Should allow admin to withdraw ERC20 from contracts", async function () {
        const { bragToken, bragNFT, owner, other } = await setup();

        await bragToken.write.transfer([bragNFT.address, parseEther("100")], { account: owner.account });
        assert.equal(await bragToken.read.balanceOf([bragNFT.address]), parseEther("100"));

        await bragNFT.write.withdrawERC20([bragToken.address], { account: owner.account });
        assert.equal(await bragToken.read.balanceOf([bragNFT.address]), 0n);
    });
  });
});
