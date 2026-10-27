import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("Agency Enhancements Batch & Security Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, buyer1, treasury] = await viem.getWalletClients();

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

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);

    const vault = await viem.deployContract("ExhibitVault", [
      owner.account.address,
      registry.address
    ]);

    await registry.write.verifyVault([vault.address, 0, "Agency Vault", "Description"], { account: owner.account });

    return { owner, user1, user2, buyer1, treasury, bragToken, bragNFT, marketplace, registry, vault };
  }

  it("Should revert batch operations on array length mismatch", async function () {
    const { bragNFT, marketplace, vault, owner, user1 } = await deployAll();

    // BragNFT batchUpdateOnChainMedia mismatch
    await assert.rejects(
      bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media1"]], { account: owner.account }),
      /Mismatched arrays/
    );

    // Marketplace batchUpdateListings mismatch
    await assert.rejects(
      marketplace.write.batchUpdateListings([[bragNFT.address], [0n, 1n], [1n], [parseEther("1")]], { account: user1.account }),
      /Mismatched arrays/
    );

    // Marketplace batchUpdatePrivateListings mismatch
    await assert.rejects(
      marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1")], [user1.account.address, user1.account.address]],
        { account: user1.account }
      ),
      /Mismatched arrays/
    );

    // ExhibitVault batchExtendExhibition721 mismatch
    await assert.rejects(
      vault.write.batchExtendExhibition721([[bragNFT.address], [0n, 1n], 3600n], { account: user1.account }),
      /Mismatched arrays/
    );

    // ExhibitVault batchExtendExhibition1155 mismatch
    await assert.rejects(
      vault.write.batchExtendExhibition1155([[bragNFT.address], [0n, 1n], 3600n], { account: user1.account }),
      /Mismatched arrays/
    );
  });

  it("Should enforce ownership checks on batch listing updates and exhibition extensions", async function () {
    const { bragNFT, marketplace, vault, user1, user2 } = await deployAll();

    // Mint token to user1
    await bragNFT.write.donate(["Donation", ""], { account: user1.account, value: parseEther("0.1") });

    // user1 lists token
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: user1.account });

    // user2 tries to batch update user1's listing -> reverts because user2 has no active listing
    await assert.rejects(
      marketplace.write.batchUpdateListings([[bragNFT.address], [0n], [1n], [parseEther("0.5")]], { account: user2.account }),
      /Listing does not exist/
    );

    // Deposit token to vault as user1
    await marketplace.write.cancelListing([bragNFT.address, 0n], { account: user1.account });
    await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n], { account: user1.account });

    // user2 tries to extend user1's 721 exhibition -> reverts "Not the owner"
    await assert.rejects(
      vault.write.batchExtendExhibition721([[bragNFT.address], [0n], 3600n], { account: user2.account }),
      /Not the owner/
    );
  });
});
