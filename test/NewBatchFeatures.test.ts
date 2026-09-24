import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("New Batch Features & Overloads", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("2000000")
    ]);
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address
    ]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "Desc 1"], { account: owner.account });
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Desc 2"], { account: owner.account });

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, buyer2, treasury };
  }

  it("Should update overloaded listing and batch update listings in NFTMarketplace", async function () {
    const { marketplace, bragNFT, bragToken, owner, seller, buyer, buyer2 } = await deployAll();

    // Donate 2 NFTs to seller
    await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

    await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

    // Create listings
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("5")], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("10")], { account: seller.account });

    // Overloaded updateListing with private buyer
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("6"), buyer.account.address], { account: seller.account });
    let listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing0[1], parseEther("6"));
    assert.equal(listing0[3].toLowerCase(), buyer.account.address.toLowerCase());

    // Batch update listings
    await marketplace.write.batchUpdateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("7"), parseEther("12")]],
      { account: seller.account }
    );
    listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    let listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
    assert.equal(listing0[1], parseEther("7"));
    assert.equal(listing1[1], parseEther("12"));

    // Batch update private listings
    await marketplace.write.batchUpdatePrivateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("8"), parseEther("13")], [buyer.account.address, buyer2.account.address]],
      { account: seller.account }
    );
    listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
    assert.equal(listing0[1], parseEther("8"));
    assert.equal(listing0[3].toLowerCase(), buyer.account.address.toLowerCase());
    assert.equal(listing1[1], parseEther("13"));
    assert.equal(listing1[3].toLowerCase(), buyer2.account.address.toLowerCase());
  });

  it("Should batch extend exhibitions and batch move with duration in ExhibitVault", async function () {
    const { vault1, vault2, bragNFT, mock1155, owner, seller } = await deployAll();

    // Mint 2 ERC721 tokens to seller
    await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

    // Mint ERC1155 tokens
    await mock1155.write.mint([seller.account.address, 100n, 10n], { account: owner.account });
    await mock1155.write.mint([seller.account.address, 101n, 10n], { account: owner.account });

    // Batch exhibit ERC721
    await bragNFT.write.setApprovalForAll([vault1.address, true], { account: seller.account });
    await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: seller.account });

    // Batch extend ERC721
    await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1800n], { account: seller.account });
    const exp721_0 = await vault1.read.expiry721([bragNFT.address, 0n]);
    assert.ok(exp721_0 > 0n);

    // Batch exhibit ERC1155
    await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });
    await vault1.write.batchExhibit1155([[mock1155.address, mock1155.address], [100n, 101n], [5n, 5n], 3600n], { account: seller.account });

    // Batch extend ERC1155
    await vault1.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [100n, 101n], 1800n], { account: seller.account });
    const exp1155_100 = await vault1.read.expiry1155([mock1155.address, 100n, seller.account.address]);
    assert.ok(exp1155_100 > 0n);
  });

  it("Should batch update on-chain media in BragNFT", async function () {
    const { bragNFT, owner, seller } = await deployAll();

    await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

    await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["ipfs://media0", "ipfs://media1"]], { account: owner.account });

    assert.equal(await bragNFT.read.onChainMedia([0n]), "ipfs://media0");
    assert.equal(await bragNFT.read.onChainMedia([1n]), "ipfs://media1");
  });
});
