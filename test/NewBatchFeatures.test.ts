import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("New Batch Features & Overloaded Updates Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2, buyer1, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("2000000")
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);

    const vault = await viem.deployContract("ExhibitVault", [
      owner.account.address,
      registry.address
    ]);

    await registry.write.verifyVault([vault.address, 0, "Test Gallery Vault", "Description"], { account: owner.account });

    return {
      owner,
      user1,
      user2,
      buyer1,
      buyer2,
      treasury,
      bragToken,
      bragNFT,
      mock1155,
      marketplace,
      registry,
      vault
    };
  }

  it("Should allow admin to batch update on-chain media on BragNFT", async function () {
    const { bragNFT, owner, user1 } = await deployContracts();

    // Mint two tokens
    await bragNFT.write.donate(["Token 1", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Token 2", ""], { account: user1.account, value: parseEther("0.1") });

    // Admin updates on-chain media in batch
    const tokenIds = [0n, 1n];
    const medias = ["<svg>Media 1</svg>", "<svg>Media 2</svg>"];

    await bragNFT.write.batchUpdateOnChainMedia([tokenIds, medias], { account: owner.account });

    assert.equal(await bragNFT.read.onChainMedia([0n]), "<svg>Media 1</svg>");
    assert.equal(await bragNFT.read.onChainMedia([1n]), "<svg>Media 2</svg>");

    // Non-admin should revert
    await assert.rejects(
      bragNFT.write.batchUpdateOnChainMedia([tokenIds, medias], { account: user1.account }),
      /AccessControl/
    );
  });

  it("Should support overloaded updateListing with private buyer parameter", async function () {
    const { bragNFT, marketplace, user1, buyer1 } = await deployContracts();

    await bragNFT.write.donate(["Art", ""], { account: user1.account, value: parseEther("0.1") });

    // Create public listing
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });

    let listing = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
    assert.equal(listing[3], "0x0000000000000000000000000000000000000000");

    // Overloaded update to make it private for buyer1
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("0.8"), buyer1.account.address], { account: user1.account });

    listing = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
    assert.equal(listing[1], parseEther("0.8"));
    assert.equal(getAddress(listing[3]), getAddress(buyer1.account.address));
  });

  it("Should batch update public and private listings in Marketplace", async function () {
    const { bragNFT, marketplace, user1, buyer1, buyer2 } = await deployContracts();

    await bragNFT.write.donate(["Art 1", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Art 2", ""], { account: user1.account, value: parseEther("0.1") });

    await marketplace.write.batchCreateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("2")]],
      { account: user1.account }
    );

    // Batch update public listings
    await marketplace.write.batchUpdateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]],
      { account: user1.account }
    );

    let listing0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
    let listing1 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);
    assert.equal(listing0[1], parseEther("1.5"));
    assert.equal(listing1[1], parseEther("2.5"));

    // Batch update private listings
    await marketplace.write.batchUpdatePrivateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.2"), parseEther("2.2")], [buyer1.account.address, buyer2.account.address]],
      { account: user1.account }
    );

    listing0 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
    listing1 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);
    assert.equal(listing0[1], parseEther("1.2"));
    assert.equal(getAddress(listing0[3]), getAddress(buyer1.account.address));
    assert.equal(listing1[1], parseEther("2.2"));
    assert.equal(getAddress(listing1[3]), getAddress(buyer2.account.address));
  });

  it("Should batch extend exhibition durations for ERC721 and ERC1155 tokens in ExhibitVault", async function () {
    const { owner, bragNFT, mock1155, vault, user1 } = await deployContracts();

    // Mint ERC721
    await bragNFT.write.donate(["Gallery Art 1", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Gallery Art 2", ""], { account: user1.account, value: parseEther("0.1") });

    // Deposit to Vault
    await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n], { account: user1.account });
    await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n], { account: user1.account });

    // Extend exhibition for 721
    await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 86400n], { account: user1.account });

    const expiry721_0 = await vault.read.expiry721([bragNFT.address, 0n]);
    const expiry721_1 = await vault.read.expiry721([bragNFT.address, 1n]);
    assert(expiry721_0 > 0n);
    assert(expiry721_1 > 0n);

    // Mint and deposit ERC1155 using owner account (MINTER_ROLE)
    await mock1155.write.mint([user1.account.address, 10n, 100n], { account: owner.account });
    await mock1155.write.mint([user1.account.address, 20n, 50n], { account: owner.account });

    await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 10n, 10n, "0x"], { account: user1.account });
    await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 20n, 5n, "0x"], { account: user1.account });

    // Extend exhibition for 1155
    await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [10n, 20n], 172800n], { account: user1.account });

    const expiry1155_10 = await vault.read.expiry1155([mock1155.address, 10n, user1.account.address]);
    const expiry1155_20 = await vault.read.expiry1155([mock1155.address, 20n, user1.account.address]);
    assert(expiry1155_10 > 0n);
    assert(expiry1155_20 > 0n);
  });
});
