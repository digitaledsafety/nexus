import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Agency Enhancements & Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasuryOwner] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasuryOwner.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 1, "Vault 1", "First Vault"], { account: owner.account });
    await registry.write.verifyVault([vault2.address, 1, "Vault 2", "Second Vault"], { account: owner.account });

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint.address]);

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, treasury, owner, seller, buyer, treasuryOwner };
  }

  it("Should batch extend exhibition duration in ExhibitVault", async function () {
    const { vault1, bragNFT, seller } = await deployAll();

    // Mint 2 NFTs to seller
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    // Exhibit both NFTs in vault1
    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

    // Extend exhibition for both tokens via batchExtendExhibition721
    const duration = 3600n; // 1 hour
    await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], duration], { account: seller.account });

    const expiry0 = await vault1.read.expiry721([bragNFT.address, 0n]);
    const expiry1 = await vault1.read.expiry721([bragNFT.address, 1n]);

    assert.ok(expiry0 > 0n);
    assert.ok(expiry1 > 0n);
  });

  it("Should batch move ERC721 with duration in ExhibitVault", async function () {
    const { vault1, vault2, bragNFT, seller } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

    const duration = 7200n; // 2 hours
    await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, duration], { account: seller.account });

    assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
    assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(seller.account.address));

    const expiry0 = await vault2.read.expiry721([bragNFT.address, 0n]);
    assert.ok(expiry0 > 0n);
  });

  it("Should update listing with new private buyer in NFTMarketplace", async function () {
    const { marketplace, bragNFT, seller, buyer } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

    // Overloaded updateListing to set buyer as private buyer
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1.5"), buyer.account.address], { account: seller.account });

    const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing[1], parseEther("1.5"));
    assert.equal(listing[3], getAddress(buyer.account.address));
  });

  it("Should batch update listings in NFTMarketplace", async function () {
    const { marketplace, bragNFT, seller } = await deployAll();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

    await marketplace.write.batchUpdateListings(
      [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.2"), parseEther("2.5")]],
      { account: seller.account }
    );

    const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

    assert.equal(listing1[1], parseEther("1.2"));
    assert.equal(listing2[1], parseEther("2.5"));
  });

  it("Should revert Treasury.propose on mismatched array lengths", async function () {
    const { treasury, owner } = await deployAll();

    await assert.rejects(
      treasury.write.propose([[owner.account.address], [0n, 0n], ["0x"], 0n], { account: owner.account }),
      /Mismatched arrays/
    );
  });
});
