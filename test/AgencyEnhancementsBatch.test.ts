import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Agency Enhancements Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 1000000n]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // PriceFeed
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH

    // BragNFT
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    // Registry & Vaults
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    // Setup roles
    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    // Verify vaults
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "First vault"], { account: owner.account });
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Second vault"], { account: owner.account });

    // Mock ERC1155
    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { marketplace, bragNFT, bragToken, priceFeed, registry, vault, vault2, mock1155, owner, user1, user2 };
  }

  describe("BragNFT batchUpdateOnChainMedia", function () {
    it("Should allow admin to batch update on-chain media, and revert for non-admin/mismatch", async function () {
      const { bragNFT, owner, user1 } = await deployContracts();

      // Mint 2 NFTs to user1
      await bragNFT.write.donate(["nft 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft 2", ""], { account: user1.account, value: parseEther("0.1") });

      const tokenIds = [0n, 1n];
      const medias = ["onchain-media-1", "onchain-media-2"];

      // Non-admin tries to batch update - should fail
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([tokenIds, medias], { account: user1.account }),
        /AccessControl/
      );

      // Array length mismatch - should fail
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n], medias], { account: owner.account }),
        /Array lengths mismatch/
      );

      // Admin batch updates - should succeed
      await bragNFT.write.batchUpdateOnChainMedia([tokenIds, medias], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "onchain-media-1");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "onchain-media-2");
    });
  });

  describe("NFTMarketplace updateListing and batchUpdateListings", function () {
    it("Should allow updating privateBuyer via overloaded updateListing", async function () {
      const { marketplace, bragNFT, user1, user2 } = await deployContracts();

      // Mint NFT to user1
      await bragNFT.write.donate(["test nft", ""], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      // User1 creates a public listing
      const price = parseEther("10");
      await bragNFT.write.approve([marketplace.address, tokenId], { account: user1.account });
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, price], { account: user1.account });

      let listing = await marketplace.read.listings([bragNFT.address, tokenId, user1.account.address]);
      assert.equal(listing[3], zeroAddress);

      // User1 updates listing to be private to user2
      const newPrice = parseEther("12");
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, newPrice, user2.account.address], { account: user1.account });

      listing = await marketplace.read.listings([bragNFT.address, tokenId, user1.account.address]);
      assert.equal(listing[1], newPrice);
      assert.equal(listing[3], getAddress(user2.account.address));
    });

    it("Should allow bulk updating listings via batchUpdateListings", async function () {
      const { marketplace, bragNFT, user1 } = await deployContracts();

      // Mint 2 NFTs to user1
      await bragNFT.write.donate(["test nft 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test nft 2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragNFT.write.approve([marketplace.address, 0n], { account: user1.account });
      await bragNFT.write.approve([marketplace.address, 1n], { account: user1.account });

      // Create public listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: user1.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: user1.account });

      // Batch update prices
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("25")]],
        { account: user1.account }
      );

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      assert.equal(listing1[1], parseEther("15"));

      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);
      assert.equal(listing2[1], parseEther("25"));
    });
  });

  describe("ExhibitVault batchMove721WithDuration and batchMove1155WithDuration", function () {
    it("Should batch move ERC721 and ERC1155 with duration", async function () {
      const { bragNFT, mock1155, vault, vault2, user1 } = await deployContracts();
      const testClient = await viem.getTestClient();

      // --- ERC721 Move ---
      // Mint 2 NFTs to user1
      await bragNFT.write.donate(["test nft 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test nft 2", ""], { account: user1.account, value: parseEther("0.1") });

      // Deposit them into vault1 with no duration (public/unlocked initially)
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n], { account: user1.account });
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n], { account: user1.account });

      // Move both to vault2 with 3600s duration
      const duration = 3600n;
      await vault.write.batchMove721WithDuration(
        [[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, duration],
        { account: user1.account }
      );

      // Verify they are locked in vault2
      assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(user1.account.address));
      const expiryBefore = await vault2.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiryBefore > 0n);

      // --- ERC1155 Move ---
      // Mint ERC1155 to user1 and deposit to vault1
      await mock1155.write.mint([user1.account.address, 100n, 10n]);
      await mock1155.write.mint([user1.account.address, 200n, 20n]);

      await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });
      await mock1155.write.safeBatchTransferFrom(
        [user1.account.address, vault.address, [100n, 200n], [10n, 20n], "0x"],
        { account: user1.account }
      );

      // Move both to vault2 with 3600s duration
      await vault.write.batchMove1155WithDuration(
        [[mock1155.address, mock1155.address], [100n, 200n], [10n, 20n], vault2.address, duration],
        { account: user1.account }
      );

      // Verify they are in vault2 and locked
      assert.equal(await vault2.read.balances1155([mock1155.address, 100n, user1.account.address]), 10n);
      const expiry1155Before = await vault2.read.expiry1155([mock1155.address, 100n, user1.account.address]);
      assert.ok(expiry1155Before > 0n);
    });
  });

  describe("ExhibitVault batchExtendExhibition721 and batchExtendExhibition1155", function () {
    it("Should extend exhibition in bulk for ERC721 and ERC1155", async function () {
      const { bragNFT, mock1155, vault, user1 } = await deployContracts();

      // --- ERC721 Extend ---
      await bragNFT.write.donate(["test nft 1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["test nft 2", ""], { account: user1.account, value: parseEther("0.1") });

      // Deposit with 1000s duration
      const duration = 1000n;
      await bragNFT.write.safeTransferFrom([
        user1.account.address,
        vault.address,
        0n,
        encodeAbiParameters(parseAbiParameters('uint256'), [duration])
      ], { account: user1.account });
      await bragNFT.write.safeTransferFrom([
        user1.account.address,
        vault.address,
        1n,
        encodeAbiParameters(parseAbiParameters('uint256'), [duration])
      ], { account: user1.account });

      const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);

      // Extend both by 2000s in batch
      await vault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [2000n, 2000n]],
        { account: user1.account }
      );

      const expiry0After = await vault.read.expiry721([bragNFT.address, 0n]);
      assert.equal(expiry0After, expiry0 + 2000n);

      // --- ERC1155 Extend ---
      await mock1155.write.mint([user1.account.address, 100n, 10n]);
      await mock1155.write.mint([user1.account.address, 200n, 20n]);

      await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });
      // Deposit with 1000s duration
      const data = encodeAbiParameters(parseAbiParameters('uint256'), [duration]);
      await mock1155.write.safeBatchTransferFrom(
        [user1.account.address, vault.address, [100n, 200n], [10n, 20n], data],
        { account: user1.account }
      );

      const expiry1155_0 = await vault.read.expiry1155([mock1155.address, 100n, user1.account.address]);

      // Extend both by 2000s in batch
      await vault.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [100n, 200n], [2000n, 2000n]],
        { account: user1.account }
      );

      const expiry1155_0After = await vault.read.expiry1155([mock1155.address, 100n, user1.account.address]);
      assert.equal(expiry1155_0After, expiry1155_0 + 2000n);
    });
  });
});
