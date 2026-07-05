import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeAbiParameters, parseAbiParameters, keccak256, toBytes } from "viem";

describe("Hardening and Enhancement v2", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user, user2] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Vault for Testing"]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, 0n, priceFeed.address]);

    const usdc = await viem.deployContract("MockUSDC", []);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, usdc.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault, bragNFT, marketplace, usdc, mock1155, owner, user, user2, priceFeed };
  }

  describe("NFTMarketplace CEI & Optimization", async function () {
    it("Should accept an offer with CEI", async function () {
      const { bragNFT, marketplace, usdc, owner, user } = await deployContracts();

      await bragNFT.write.donate(["Offer test", ""], { account: user.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const price = parseEther("100");
      await usdc.write.mint([owner.account.address, price]);
      await usdc.write.approve([marketplace.address, price]);

      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price]);

      await bragNFT.write.approve([marketplace.address, tokenId], { account: user.account });

      // Accept offer
      await marketplace.write.acceptOffer([bragNFT.address, tokenId, owner.account.address], { account: user.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(owner.account.address));
      const offer = await marketplace.read.offers([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(offer[0], 0n); // Price should be 0
    });

    it("Should optimize listing update", async function () {
      const { bragNFT, marketplace, user } = await deployContracts();

      await bragNFT.write.donate(["Listing test", ""], { account: user.account, value: parseEther("0.1") });
      const tokenId = 0n;

      await bragNFT.write.approve([marketplace.address, tokenId], { account: user.account });

      // Create listing
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("100")], { account: user.account });

      // Update listing (should not trigger ownership check in safe way - we test by ensuring it doesn't revert)
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("200")], { account: user.account });

      const listing = await marketplace.read.listings([bragNFT.address, tokenId, user.account.address]);
      assert.equal(listing[1], parseEther("200"));
    });

    it("Should batch update and reject offers", async function () {
      const { bragNFT, marketplace, usdc, owner, user, user2 } = await deployContracts();

      await bragNFT.write.donate(["Batch test 1", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Batch test 2", ""], { account: user.account, value: parseEther("0.1") });

      const price = parseEther("100");
      await usdc.write.mint([user2.account.address, price * 3n]);
      await usdc.write.approve([marketplace.address, price * 3n], { account: user2.account });

      await marketplace.write.batchCreateOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [price, price]], { account: user2.account });

      // Batch update
      await marketplace.write.batchUpdateOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [price + 1n, price + 1n], [0n, 0n]], { account: user2.account });

      let offer0 = await marketplace.read.offers([bragNFT.address, 0n, user2.account.address]);
      assert.equal(offer0[0], price + 1n);

      // Batch reject
      await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [user2.account.address, user2.account.address]], { account: user.account });

      offer0 = await marketplace.read.offers([bragNFT.address, 0n, user2.account.address]);
      assert.equal(offer0[0], 0n);
    });

    it("Should NOT allow non-owner to reject an offer", async function () {
      const { bragNFT, marketplace, usdc, user, user2 } = await deployContracts();

      await bragNFT.write.donate(["Ownership test", ""], { account: user.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const price = parseEther("100");
      await usdc.write.mint([user2.account.address, price]);
      await usdc.write.approve([marketplace.address, price], { account: user2.account });

      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, price], { account: user2.account });

      // user2 (buyer) or some other random user tries to reject the offer
      // Only user (owner) should be able to reject it
      await assert.rejects(
        marketplace.write.rejectOffer([bragNFT.address, tokenId, user2.account.address], { account: user2.account }),
        /You do not own this NFT/
      );
    });
  });

  describe("ExhibitVault Hardening", async function () {
    it("Should batch exhibit ERC721 and ERC1155", async function () {
      const { bragNFT, mock1155, vault, user, owner } = await deployContracts();

      await bragNFT.write.donate(["Batch exhibit", ""], { account: user.account, value: parseEther("0.1") });
      const tokenId721 = 0n;

      const tokenId1155 = 1n;
      const amount1155 = 100n;
      await mock1155.write.mint([user.account.address, tokenId1155, amount1155], { account: owner.account });

      await bragNFT.write.setApprovalForAll([vault.address, true], { account: user.account });
      await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });

      await vault.write.batchExhibit721([[bragNFT.address], [tokenId721], 3600n], { account: user.account });
      await vault.write.batchExhibit1155([[mock1155.address], [tokenId1155], [50n], 3600n], { account: user.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId721]), getAddress(vault.address));
      assert.equal(await vault.read.owner721([bragNFT.address, tokenId721]), getAddress(user.account.address));
      assert.equal(await vault.read.balances1155([mock1155.address, tokenId1155, user.account.address]), 50n);
    });

    it("Should extend exhibition", async function () {
      const { bragNFT, vault, user } = await deployContracts();

      await bragNFT.write.donate(["Extend test", ""], { account: user.account, value: parseEther("0.1") });
      await bragNFT.write.safeTransferFrom([user.account.address, vault.address, 0n], { account: user.account });

      await vault.write.extendExhibition721([bragNFT.address, 0n, 3600n], { account: user.account });
      const expiry = await vault.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry > 0n);
    });
  });

  describe("BragNFT Enhancements", async function () {
    it("Should have dynamic SVG colors and donation value trait", async function () {
      const { bragNFT, owner, user } = await deployContracts();

      await bragNFT.write.donate(["SVG test", ""], { account: user.account, value: parseEther("0.1") });
      const tokenId = 0n;

      let uri = await bragNFT.read.tokenURI([tokenId]);
      let json = JSON.parse(atob(uri.split(",")[1]));

      let donationValueAttr = json.attributes.find((a: any) => a.trait_type === "Donation Value");
      assert.ok(donationValueAttr);
      assert.equal(donationValueAttr.value, "$250.00"); // 0.1 ETH * $2500/ETH = $250

      let taxStatusAttr = json.attributes.find((a: any) => a.trait_type === "Tax Status");
      assert.equal(taxStatusAttr.value, "Pending");

      // Verify SVG background color (Pending is #6366f1)
      let svg = atob(json.image.split(",")[1]);
      assert.ok(svg.includes('fill="#6366f1"'));

      // Set to Verified
      await bragNFT.write.setTaxStatus([tokenId, 1], { account: owner.account });
      uri = await bragNFT.read.tokenURI([tokenId]);
      json = JSON.parse(atob(uri.split(",")[1]));
      svg = atob(json.image.split(",")[1]);
      assert.ok(svg.includes('fill="#22c55e"'));
    });

    it("Should fall back to manual price on feed errors", async function () {
      const { bragNFT, priceFeed, user, owner } = await deployContracts();
      const publicClient = await viem.getPublicClient();

      await bragNFT.write.setManualEthPrice([200000000000n], { account: owner.account }); // $2000

      // Set price to 0 (invalid)
      await priceFeed.write.setPrice([0n]);

      await bragNFT.write.donate(["Error test", ""], { account: user.account, value: parseEther("0.1") });
      let record = await bragNFT.read.taxRegistry([0n]);
      assert.equal(record[1], 20000000000n); // $200

      // Set stale
      const now = BigInt(Math.floor(Date.now() / 1000));
      await priceFeed.write.setPrice([250000000000n]); // $2500
      await priceFeed.write.setUpdatedAt([now - 30n * 3600n]); // 30 hours ago

      await publicClient.request({ method: "evm_mine" as any, params: [] });

      await bragNFT.write.donate(["Stale test", ""], { account: user.account, value: parseEther("0.1") });
      record = await bragNFT.read.taxRegistry([1n]);
      assert.equal(record[1], 20000000000n); // Still $200
    });
  });
});
