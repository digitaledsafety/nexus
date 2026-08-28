import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("New Batch Operations and Proportional Glow", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "D1"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault, mock1155, owner, seller, buyer, treasury };
  }

  it("BragNFT: Should calculate proportional glow logic", async function () {
    const { bragNFT, buyer } = await deployAll();

    // $2500/ETH. 0.1 ETH donation = $250.
    // Proportional glow: ($250 * 30 days) / $1 = 7500 days.
    await bragNFT.write.donate(["nft1", ""], { account: buyer.account, value: parseEther("0.1") });

    const expiry = await bragNFT.read.glowExpiry([0n]);
    const now = BigInt(Math.floor(Date.now() / 1000));
    const expectedDuration = 7500n * 24n * 3600n;

    // Allow small difference due to block.timestamp
    assert.ok(expiry >= now + expectedDuration - 100n);
  });

  it("BragNFT: Should batch update on-chain media", async function () {
    const { bragNFT, owner, buyer } = await deployAll();
    await bragNFT.write.donate(["nft1", ""], { account: buyer.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: buyer.account, value: parseEther("0.1") });

    await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media1", "media2"]], { account: owner.account });

    assert.equal(await bragNFT.read.onChainMedia([0n]), "media1");
    assert.equal(await bragNFT.read.onChainMedia([1n]), "media2");
  });

  it("NFTMarketplace: Should batch update listings", async function () {
    const { marketplace, bragNFT, seller } = await deployAll();
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
    await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

    await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]],
        { account: seller.account }
    );

    const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
    assert.equal(l1[1], parseEther("1.5"));
    assert.equal(l2[1], parseEther("2.5"));
  });

  it("NFTMarketplace: Should update listing with private buyer", async function () {
    const { marketplace, bragNFT, seller, buyer } = await deployAll();
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

    // Update to private
    await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1"), buyer.account.address], { account: seller.account });

    const l = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(l[3], getAddress(buyer.account.address));
  });

  it("ExhibitVault: Should batch extend exhibition duration", async function () {
    const { bragNFT, vault, seller } = await deployAll();
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 0n], { account: seller.account });
    await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 1n], { account: seller.account });

    const initialExpiry = await vault.read.expiry721([bragNFT.address, 0n]);

    await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: seller.account });

    const newExpiry = await vault.read.expiry721([bragNFT.address, 0n]);
    assert.ok(newExpiry >= initialExpiry + 3600n);
  });

  it("BragToken: Should batch mint tokens", async function () {
    const { bragToken, owner, buyer, seller } = await deployAll();

    await bragToken.write.batchMint([[buyer.account.address, seller.account.address], [parseEther("100"), parseEther("200")]], { account: owner.account });

    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
    assert.equal(await bragToken.read.balanceOf([seller.account.address]), parseEther("200"));
  });
});
