import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog } from "viem";

describe("New Features", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // Deploy ExhibitVault and Registry
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    // Deploy BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    // Deploy Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Deploy Mock NFTs
    const mock721 = await viem.deployContract("MockRoyaltyNFT", ["Mock721", "M721"]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    // Deploy BragNFT
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";


    return { owner, user1, user2, vault, registry, bragToken, marketplace, mock721, mock1155, bragNFT };
  }

  describe("ExhibitVault Batch Withdrawals", function () {
    it("Should batch withdraw ERC721 tokens", async function () {
      const { user1, vault, mock721 } = await setup();

      const tokenIds = [1n, 2n, 3n];
      for (const id of tokenIds) {
        await mock721.write.mint([user1.account.address, id]);
        await mock721.write.approve([vault.address, id], { account: user1.account });
        await mock721.write.safeTransferFrom([user1.account.address, vault.address, id], { account: user1.account });
      }

      assert.equal(await mock721.read.ownerOf([1n]), getAddress(vault.address));

      const nftContracts = [mock721.address, mock721.address, mock721.address];
      await vault.write.batchWithdraw721([nftContracts, tokenIds], { account: user1.account });

      for (const id of tokenIds) {
        assert.equal(await mock721.read.ownerOf([id]), getAddress(user1.account.address));
      }
    });

    it("Should batch withdraw ERC1155 tokens", async function () {
      const { user1, vault, mock1155 } = await setup();

      const tokenIds = [1n, 2n];
      const amounts = [10n, 20n];

      await mock1155.write.mint([user1.account.address, 1n, 100n]);
      await mock1155.write.mint([user1.account.address, 2n, 100n]);
      await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });

      await mock1155.write.safeBatchTransferFrom([user1.account.address, vault.address, tokenIds, amounts, "0x"], { account: user1.account });

      assert.equal(await mock1155.read.balanceOf([vault.address, 1n]), 10n);

      const nftContracts = [mock1155.address, mock1155.address];
      await vault.write.batchWithdraw1155([nftContracts, tokenIds, amounts], { account: user1.account });

      assert.equal(await mock1155.read.balanceOf([vault.address, 1n]), 0n);
      assert.equal(await mock1155.read.balanceOf([user1.account.address, 1n]), 100n);
    });
  });

  describe("BragNFT Uppercase Extensions", function () {
    it("Should detect uppercase media extensions", async function () {
      const { bragNFT } = await setup();

      const testURIs = ["image.JPG", "video.MP4", "audio.WAV", "animation.GIF", "file.WEBM"];

      for (const uri of testURIs) {
        await bragNFT.write.donate(["test", uri], { value: parseEther("0.1") });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadataJson = Buffer.from(metadataBase64.split(",")[1], 'base64').toString();
        const metadata = JSON.parse(metadataJson);

        if (uri.endsWith(".JPG")) {
          assert.equal(metadata.image, uri);
          assert.ok(!metadata.animation_url);
        } else {
          assert.ok(metadata.animation_url, `Should have animation_url for ${uri}`);
          assert.equal(metadata.animation_url, uri);
        }
      }
    });
  });

  describe("NFTMarketplace Offer Updates", function () {
    it("Should allow updating an offer (increase price)", async function () {
      const { owner, user1, user2, marketplace, bragToken, mock721 } = await setup();

      const tokenId = 1n;
      await mock721.write.mint([user1.account.address, tokenId]);

      // Fund user2
      await bragToken.write.transfer([user2.account.address, parseEther("100")], { account: owner.account });

      // Create initial offer
      const initialPrice = parseEther("10");
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: user2.account });
      await marketplace.write.createOffer([mock721.address, tokenId, 1n, initialPrice], { account: user2.account });

      assert.equal(await bragToken.read.balanceOf([marketplace.address]), initialPrice);

      // Update offer (increase)
      const newPrice = parseEther("15");
      await marketplace.write.updateOffer([mock721.address, tokenId, 1n, newPrice], { account: user2.account });

      const offer = await marketplace.read.offers([mock721.address, tokenId, user2.account.address]);
      assert.equal(offer[0], newPrice);
      assert.equal(await bragToken.read.balanceOf([marketplace.address]), newPrice);
    });

    it("Should allow updating an offer (decrease price)", async function () {
      const { owner, user1, user2, marketplace, bragToken, mock721 } = await setup();

      const tokenId = 2n;
      await mock721.write.mint([user1.account.address, tokenId]);

      // Fund user2
      await bragToken.write.transfer([user2.account.address, parseEther("100")], { account: owner.account });

      // Create initial offer
      const initialPrice = parseEther("20");
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: user2.account });
      await marketplace.write.createOffer([mock721.address, tokenId, 1n, initialPrice], { account: user2.account });

      const balanceBefore = await bragToken.read.balanceOf([user2.account.address]);

      // Update offer (decrease)
      const newPrice = parseEther("15");
      await marketplace.write.updateOffer([mock721.address, tokenId, 1n, newPrice], { account: user2.account });

      const offer = await marketplace.read.offers([mock721.address, tokenId, user2.account.address]);
      assert.equal(offer[0], newPrice);
      assert.equal(await bragToken.read.balanceOf([marketplace.address]), newPrice);
      assert.equal(await bragToken.read.balanceOf([user2.account.address]), balanceBefore + (initialPrice - newPrice));
    });
  });
});
