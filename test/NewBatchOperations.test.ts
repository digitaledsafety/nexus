import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("New Batch Operations & Overloads", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury, otherBuyer] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, treasury, otherBuyer };
  }

  it("NFTMarketplace: Should batch reject multiple offers", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

    await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

    // Batch reject
    await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

    const offer1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
    const offer2 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);

    assert.equal(offer1[0], 0n);
    assert.equal(offer2[0], 0n);
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
  });

  it("NFTMarketplace: Should batch update multiple listings", async function () {
    const { marketplace, bragNFT, seller } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await marketplace.write.batchCreateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("2")]], { account: seller.account });

    // Batch update
    await marketplace.write.batchUpdateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]], { account: seller.account });

    const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

    assert.equal(listing1[1], parseEther("1.5"));
    assert.equal(listing2[1], parseEther("2.5"));
  });

  it("NFTMarketplace: Should update listing with private buyer", async function () {
    const { marketplace, bragNFT, seller, otherBuyer } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

    // Update to private listing
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1.1"), otherBuyer.account.address], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing[1], parseEther("1.1"));
    assert.equal(getAddress(listing[3]), getAddress(otherBuyer.account.address));
  });

  it("ExhibitVault: Should batch move ERC721 tokens with duration", async function () {
    const { bragNFT, vault1, vault2, seller } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

    const duration = 3600n; // 1 hour
    await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, duration], { account: seller.account });

    const expiry1 = await vault2.read.expiry721([bragNFT.address, 0n]);
    const expiry2 = await vault2.read.expiry721([bragNFT.address, 1n]);

    assert(expiry1 > 0n);
    assert(expiry2 > 0n);
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
  });

  it("ExhibitVault: Should batch move ERC1155 tokens with duration", async function () {
    const { mock1155, vault1, vault2, seller, owner } = await deployAll();

    await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
    await mock1155.write.mint([seller.account.address, 2n, 20n], { account: owner.account });

    await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 5n, "0x"], { account: seller.account });
    await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 10n, "0x"], { account: seller.account });

    const duration = 7200n; // 2 hours
    await vault1.write.batchMove1155WithDuration([[mock1155.address, mock1155.address], [1n, 2n], [5n, 10n], vault2.address, duration], { account: seller.account });

    const expiry1 = await vault2.read.expiry1155([mock1155.address, 1n, seller.account.address]);
    const expiry2 = await vault2.read.expiry1155([mock1155.address, 2n, seller.account.address]);

    assert(expiry1 > 0n);
    assert(expiry2 > 0n);
    assert.equal(await mock1155.read.balanceOf([vault2.address, 1n]), 5n);
  });
});
