import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Missing Batch Features & Overloaded Updates", async function () {
  const { viem } = await network.connect();

  async function deployVaultSetup() {
    const [owner, user1, user2] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "Desc 1"], { account: owner.account });
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Desc 2"], { account: owner.account });

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);
    const mock1155 = await viem.deployContract("MockERC1155");

    return { registry, vault1, vault2, bragNFT, mock1155, owner, user1, user2 };
  }

  async function deployMarketplaceSetup() {
    const [owner, seller, buyer1, buyer2] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer1, buyer2 };
  }

  it("ExhibitVault: batchMove721WithDuration", async function () {
    const { vault1, vault2, bragNFT, user1 } = await deployVaultSetup();

    // Mint two NFTs to user1
    await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

    // Deposit both into vault1
    await bragNFT.write.safeTransferFrom([user1.account.address, vault1.address, 0n], { account: user1.account });
    await bragNFT.write.safeTransferFrom([user1.account.address, vault1.address, 1n], { account: user1.account });

    assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), getAddress(user1.account.address));
    assert.equal(await vault1.read.owner721([bragNFT.address, 1n]), getAddress(user1.account.address));

    // Batch move with duration (86400 seconds)
    await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 86400n], { account: user1.account });

    assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), "0x0000000000000000000000000000000000000000");
    assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(user1.account.address));
    assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(user1.account.address));

    const expiry = await vault2.read.expiry721([bragNFT.address, 0n]);
    assert.ok(expiry > 0n);
  });

  it("ExhibitVault: batchMove1155WithDuration", async function () {
    const { vault1, vault2, mock1155, user1 } = await deployVaultSetup();

    await mock1155.write.mint([user1.account.address, 10n, 100n]);
    await mock1155.write.mint([user1.account.address, 20n, 200n]);

    await mock1155.write.safeTransferFrom([user1.account.address, vault1.address, 10n, 50n, "0x"], { account: user1.account });
    await mock1155.write.safeTransferFrom([user1.account.address, vault1.address, 20n, 100n, "0x"], { account: user1.account });

    // Batch move 1155 with duration
    await vault1.write.batchMove1155WithDuration([[mock1155.address, mock1155.address], [10n, 20n], [50n, 100n], vault2.address, 86400n], { account: user1.account });

    assert.equal(await vault1.read.balances1155([mock1155.address, 10n, user1.account.address]), 0n);
    assert.equal(await vault2.read.balances1155([mock1155.address, 10n, user1.account.address]), 50n);
    assert.equal(await vault2.read.balances1155([mock1155.address, 20n, user1.account.address]), 100n);

    const expiry = await vault2.read.expiry1155([mock1155.address, 10n, user1.account.address]);
    assert.ok(expiry > 0n);
  });

  it("ExhibitVault: batchExtendExhibition721 & batchExtendExhibition1155", async function () {
    const { vault1, bragNFT, mock1155, user1 } = await deployVaultSetup();

    // 721
    await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.safeTransferFrom([user1.account.address, vault1.address, 0n], { account: user1.account });
    await bragNFT.write.safeTransferFrom([user1.account.address, vault1.address, 1n], { account: user1.account });

    const initialExpiry721 = await vault1.read.expiry721([bragNFT.address, 0n]);
    await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: user1.account });
    const newExpiry721 = await vault1.read.expiry721([bragNFT.address, 0n]);
    assert.ok(newExpiry721 > initialExpiry721);

    // 1155
    await mock1155.write.mint([user1.account.address, 5n, 10n]);
    await mock1155.write.mint([user1.account.address, 6n, 10n]);
    await mock1155.write.safeTransferFrom([user1.account.address, vault1.address, 5n, 5n, "0x"], { account: user1.account });
    await mock1155.write.safeTransferFrom([user1.account.address, vault1.address, 6n, 5n, "0x"], { account: user1.account });

    const initialExpiry1155 = await vault1.read.expiry1155([mock1155.address, 5n, user1.account.address]);
    await vault1.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [5n, 6n], 3600n], { account: user1.account });
    const newExpiry1155 = await vault1.read.expiry1155([mock1155.address, 5n, user1.account.address]);
    assert.ok(newExpiry1155 > initialExpiry1155);
  });

  it("NFTMarketplace: updateListing with private buyer", async function () {
    const { marketplace, bragNFT, seller, buyer1, buyer2 } = await deployMarketplaceSetup();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

    // Create public listing
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

    // Update listing to private buyer1
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1.5"), buyer1.account.address], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing[1], parseEther("1.5")); // price
    assert.equal(listing[3], getAddress(buyer1.account.address)); // privateBuyer
  });

  it("NFTMarketplace: batchUpdateListings", async function () {
    const { marketplace, bragNFT, seller } = await deployMarketplaceSetup();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });
    await bragNFT.write.approve([marketplace.address, 1n], { account: seller.account });

    await marketplace.write.batchCreateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("2")]],
      { account: seller.account }
    );

    // Batch update listings
    await marketplace.write.batchUpdateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.2"), parseEther("2.5")]],
      { account: seller.account }
    );

    const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
    assert.equal(l1[1], parseEther("1.2"));
    assert.equal(l2[1], parseEther("2.5"));
  });
});
