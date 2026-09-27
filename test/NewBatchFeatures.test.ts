import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import hre from "hardhat";
import {
  parseEther,
  getAddress,
  keccak256
} from "viem";
import { stringToHex } from "viem/utils";

describe("New Batch Features & Overloaded Functions Test Suite", async function () {
  const { viem } = await hre.network.connect();
  let publicClient: any;
  let marketplace: any;
  let bragNFT: any;
  let bragToken: any;
  let vault1: any;
  let vault2: any;
  let registry: any;
  let mock1155: any;
  let owner: any;
  let user1: any;
  let user2: any;

  before(async () => {
    publicClient = await viem.getPublicClient();
    const wallets = await viem.getWalletClients();
    owner = wallets[0];
    user1 = wallets[1];
    user2 = wallets[2];

    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);
    bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("1000000")]);
    marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, 1n, mockPriceFeed.address]);

    registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    mock1155 = await viem.deployContract("MockERC1155");

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "Vault 1 Description"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Vault 2 Description"]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    await bragToken.write.transfer([user1.account.address, parseEther("500")]);
    await bragToken.write.transfer([user2.account.address, parseEther("500")]);
  });

  describe("BragNFT: batchUpdateOnChainMedia", async function () {
    it("Should allow DEFAULT_ADMIN_ROLE to batch update on-chain media", async function () {
      await bragNFT.write.donate(["Batch 1", "uri1", false], { value: 1n });
      await bragNFT.write.donate(["Batch 2", "uri2", false], { value: 1n });
      const id0 = 0n;
      const id1 = 1n;

      await bragNFT.write.batchUpdateOnChainMedia([[id0, id1], ["data:image/svg+xml;base64,media0", "data:image/svg+xml;base64,media1"]]);

      assert.equal(await bragNFT.read.onChainMedia([id0]), "data:image/svg+xml;base64,media0");
      assert.equal(await bragNFT.read.onChainMedia([id1]), "data:image/svg+xml;base64,media1");
    });

    it("Should revert if non-admin tries to call batchUpdateOnChainMedia", async function () {
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["a", "b"]], { account: user1.account }),
        /AccessControl/
      );
    });
  });

  describe("NFTMarketplace: overloaded updateListing and batch updates", async function () {
    it("Should update listing with new private buyer", async function () {
      await bragNFT.write.donate(["Listing test", "uri", false], { value: 1n });
      const tokenId = 2n;

      await bragNFT.write.approve([marketplace.address, tokenId]);
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")]);

      // Overloaded updateListing changing price and setting user1 as private buyer
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("15"), user1.account.address]);

      const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
      assert.equal(listing[1], parseEther("15"));
      assert.equal(listing[3], getAddress(user1.account.address));

      // user2 cannot buy private listing
      await bragToken.write.approve([marketplace.address, parseEther("15")], { account: user2.account });
      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, parseEther("15")], { account: user2.account }),
        /Private listing/
      );

      // user1 can buy
      await bragToken.write.approve([marketplace.address, parseEther("15")], { account: user1.account });
      await marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, parseEther("15")], { account: user1.account });
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(user1.account.address));
    });

    it("Should batch update listings and batch update private listings", async function () {
      await bragNFT.write.donate(["Batch L1", "uri1", false], { value: 1n, account: owner.account });
      await bragNFT.write.donate(["Batch L2", "uri2", false], { value: 1n, account: owner.account });
      const id3 = 3n;
      const id4 = 4n;

      await bragNFT.write.approve([marketplace.address, id3]);
      await bragNFT.write.approve([marketplace.address, id4]);

      await marketplace.write.createListing([bragNFT.address, id3, 1n, parseEther("10")]);
      await marketplace.write.createListing([bragNFT.address, id4, 1n, parseEther("20")]);

      // Batch update listings
      await marketplace.write.batchUpdateListings([
        [bragNFT.address, bragNFT.address],
        [id3, id4],
        [1n, 1n],
        [parseEther("12"), parseEther("22")]
      ]);

      const l3 = await marketplace.read.listings([bragNFT.address, id3, owner.account.address]);
      const l4 = await marketplace.read.listings([bragNFT.address, id4, owner.account.address]);
      assert.equal(l3[1], parseEther("12"));
      assert.equal(l4[1], parseEther("22"));

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings([
        [bragNFT.address, bragNFT.address],
        [id3, id4],
        [1n, 1n],
        [parseEther("14"), parseEther("24")],
        [user1.account.address, user2.account.address]
      ]);

      const l3p = await marketplace.read.listings([bragNFT.address, id3, owner.account.address]);
      const l4p = await marketplace.read.listings([bragNFT.address, id4, owner.account.address]);
      assert.equal(l3p[1], parseEther("14"));
      assert.equal(l3p[3], getAddress(user1.account.address));
      assert.equal(l4p[1], parseEther("24"));
      assert.equal(l4p[3], getAddress(user2.account.address));
    });
  });

  describe("ExhibitVault: batch move with duration and batch extend exhibition", async function () {
    it("Should batch move ERC721 tokens with duration", async function () {
      await bragNFT.write.donate(["Vault M1", "uri1", false], { value: 1n, account: owner.account });
      await bragNFT.write.donate(["Vault M2", "uri2", false], { value: 1n, account: owner.account });
      const id5 = 5n;
      const id6 = 6n;

      // Deposit into vault1
      await bragNFT.write.safeTransferFrom([owner.account.address, vault1.address, id5]);
      await bragNFT.write.safeTransferFrom([owner.account.address, vault1.address, id6]);

      assert.equal(await vault1.read.owner721([bragNFT.address, id5]), getAddress(owner.account.address));
      assert.equal(await vault1.read.owner721([bragNFT.address, id6]), getAddress(owner.account.address));

      // Batch move to vault2 with duration (3600 seconds)
      const duration = 3600n;
      await vault1.write.batchMove721WithDuration([
        [bragNFT.address, bragNFT.address],
        [id5, id6],
        vault2.address,
        duration
      ]);

      assert.equal(await vault1.read.owner721([bragNFT.address, id5]), "0x0000000000000000000000000000000000000000");
      assert.equal(await vault2.read.owner721([bragNFT.address, id5]), getAddress(owner.account.address));
      assert.equal(await vault2.read.owner721([bragNFT.address, id6]), getAddress(owner.account.address));
      assert.ok(await vault2.read.expiry721([bragNFT.address, id5]) > 0n);
    });

    it("Should batch extend exhibition duration for ERC721 tokens", async function () {
      const id5 = 5n;
      const id6 = 6n;

      const oldExpiry5 = await vault2.read.expiry721([bragNFT.address, id5]);
      const oldExpiry6 = await vault2.read.expiry721([bragNFT.address, id6]);

      // Extend duration by 1000s
      await vault2.write.batchExtendExhibition721([
        [bragNFT.address, bragNFT.address],
        [id5, id6],
        1000n
      ]);

      const newExpiry5 = await vault2.read.expiry721([bragNFT.address, id5]);
      const newExpiry6 = await vault2.read.expiry721([bragNFT.address, id6]);

      assert.equal(newExpiry5, oldExpiry5 + 1000n);
      assert.equal(newExpiry6, oldExpiry6 + 1000n);
    });

    it("Should batch move ERC1155 tokens with duration and batch extend ERC1155", async function () {
      const tokenId1 = 101n;
      const tokenId2 = 102n;
      await mock1155.write.mint([owner.account.address, tokenId1, 5n]);
      await mock1155.write.mint([owner.account.address, tokenId2, 5n]);

      // Deposit to vault1
      await mock1155.write.safeTransferFrom([owner.account.address, vault1.address, tokenId1, 5n, "0x"]);
      await mock1155.write.safeTransferFrom([owner.account.address, vault1.address, tokenId2, 5n, "0x"]);

      assert.equal(await vault1.read.balances1155([mock1155.address, tokenId1, owner.account.address]), 5n);

      // Batch move to vault2 with duration
      await vault1.write.batchMove1155WithDuration([
        [mock1155.address, mock1155.address],
        [tokenId1, tokenId2],
        [5n, 5n],
        vault2.address,
        1800n
      ]);

      assert.equal(await vault1.read.balances1155([mock1155.address, tokenId1, owner.account.address]), 0n);
      assert.equal(await vault2.read.balances1155([mock1155.address, tokenId1, owner.account.address]), 5n);

      const oldExp1 = await vault2.read.expiry1155([mock1155.address, tokenId1, owner.account.address]);

      // Batch extend exhibition 1155
      await vault2.write.batchExtendExhibition1155([
        [mock1155.address, mock1155.address],
        [tokenId1, tokenId2],
        1200n
      ]);

      const newExp1 = await vault2.read.expiry1155([mock1155.address, tokenId1, owner.account.address]);
      assert.equal(newExp1, oldExp1 + 1200n);
    });
  });
});
