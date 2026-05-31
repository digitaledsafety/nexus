import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress, numberToHex } from "viem";

describe("AgencyImprovements", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, otherAccount, buyer, privateBuyer] = await viem.getWalletClients();

    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [
      [owner.account.address],
      1n,
      entryPoint.address,
    ]);

    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [
      250000000000n, // $2500 ETH
    ]);

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      0n,
      mockPriceFeed.address,
    ]);

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("0"), // Initial supply
      parseEther("1000000000000"), // Large max supply to avoid "Exceeds maxSupply"
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);

    const exhibitRegistry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [
      owner.account.address,
      exhibitRegistry.address,
    ]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    const publicClient = await viem.getPublicClient();
    const testClient = await viem.getTestClient();

    return {
      bragNFT,
      bragToken,
      marketplace,
      treasury,
      vault,
      exhibitRegistry,
      owner,
      otherAccount,
      buyer,
      privateBuyer,
      publicClient,
      testClient,
    };
  }

  describe("BragNFT Improvements", async function () {
    it("should handle cumulative glow correctly", async function () {
      const { bragNFT, publicClient } = await deployFixture();

      await bragNFT.write.donate(["Cumulative test", "uri", false], {
        value: parseEther("0.1"),
      });
      const tokenId = 0n;

      assert.equal(await bragNFT.read.isGlowing([tokenId]), false);

      // First top up
      await bragNFT.write.topUp([tokenId], { value: parseEther("0.001") }); // $2.50
      assert.equal(await bragNFT.read.isGlowing([tokenId]), true);

      const expiry1 = await bragNFT.read.glowExpiry([tokenId]);
      const block = await publicClient.getBlock();
      const now = block.timestamp;
      assert.ok(expiry1 >= now + BigInt(30 * 24 * 60 * 60) - 10n);

      // Second top up should be cumulative
      await bragNFT.write.topUp([tokenId], { value: parseEther("0.001") });
      const expiry2 = await bragNFT.read.glowExpiry([tokenId]);
      assert.ok(expiry2 >= expiry1 + BigInt(30 * 24 * 60 * 60) - 10n);
    });

    it("should grant BRAG tokens on topUp", async function () {
      const { bragNFT, bragToken, owner } = await deployFixture();

      await bragNFT.write.donate(["Reward test", "uri", false]);
      const tokenId = 0n;

      const balanceBefore = await bragToken.read.balanceOf([owner.account.address]);
      await bragNFT.write.topUp([tokenId], { value: parseEther("0.001") }); // $2.50
      const balanceAfter = await bragToken.read.balanceOf([owner.account.address]);

      assert.ok(balanceAfter > balanceBefore);
      // $2.50 * 1,000,000 = 2,500,000 tokens
      assert.equal(balanceAfter - balanceBefore, parseEther("2500000"));
    });

    it("should use manualEthPrice as fallback", async function () {
      const { bragNFT } = await deployFixture();

      // Set manual price to $3000
      await bragNFT.write.setManualEthPrice([300000000000n]);

      // Disable price feed by setting to zero address
      await bragNFT.write.setPriceFeed([zeroAddress]);

      await bragNFT.write.donate(["Manual price test", "uri", false], {
        value: parseEther("1"),
      });

      // Since it's a new deployFixture, and this is the first donate, it should be tokenId 1
      // Wait, donate is called in other tests but they should have separate fixtures if they were parallel.
      // But they are in same describe. Fixture is called inside each it.
      // So tokenId should be 1 if deployFixture's donate (in it body) is called.
      // Ah, I don't call donate in deployFixture.
      // Wait, let's check nextTokenId.
      const tokenId = await bragNFT.read.nextTokenId() - 1n;
      const record = await bragNFT.read.taxRegistry([tokenId]);
      assert.equal(record[1], 300000000000n);
    });

    it("should validate setMaxSupply", async function () {
      const { bragNFT } = await deployFixture();

      await bragNFT.write.donate(["Supply test", "uri", false]);
      const nextId = await bragNFT.read.nextTokenId();

      // Should revert if setting max supply below nextTokenId
      await assert.rejects(
        bragNFT.write.setMaxSupply([nextId - 1n])
      );

      // Should succeed if setting to current or above
      await bragNFT.write.setMaxSupply([nextId]);
      assert.equal(await bragNFT.read.maxSupply(), nextId);
    });
  });

  describe("NFTMarketplace Improvements", async function () {
    it("should handle private listings correctly", async function () {
      const { marketplace, bragNFT, buyer, privateBuyer, bragToken, owner } = await deployFixture();

      await bragNFT.write.donate(["Private test", "uri", false]);
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId]);

      await marketplace.write.createPrivateListing([
        bragNFT.address,
        tokenId,
        1n,
        parseEther("100"),
        privateBuyer.account.address
      ]);

      // Unauthorized buyer should revert
      await bragToken.write.mint([buyer.account.address, parseEther("1000")]);
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address], { account: buyer.account }),
        /Unauthorized buyer/
      );

      // Authorized buyer should succeed
      await bragToken.write.mint([privateBuyer.account.address, parseEther("1000")]);
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: privateBuyer.account });

      await marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address], { account: privateBuyer.account });
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(privateBuyer.account.address));
    });

    it("should batch create offers with expiries", async function () {
      const { marketplace, bragNFT, bragToken, buyer, publicClient } = await deployFixture();

      await bragNFT.write.donate(["Batch 1", "uri", false]);
      await bragNFT.write.donate(["Batch 2", "uri", false]);
      const token0 = 0n;
      const token1 = 1n;

      const block = await publicClient.getBlock();
      const expiry = block.timestamp + 3600n;

      await bragToken.write.mint([buyer.account.address, parseEther("1000")]);
      await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: buyer.account });

      await marketplace.write.batchCreateOffersWithExpiries([
        [bragNFT.address, bragNFT.address],
        [token0, token1],
        [1n, 1n],
        [parseEther("10"), parseEther("20")],
        [expiry, expiry]
      ], { account: buyer.account });

      const offer1 = await marketplace.read.offers([bragNFT.address, token0, buyer.account.address]);
      assert.equal(offer1[3], expiry); // Price, Amount, Timestamp, Expiry
      const offer2 = await marketplace.read.offers([bragNFT.address, token1, buyer.account.address]);
      assert.equal(offer2[3], expiry);
    });
  });

  describe("ExhibitVault Improvements", async function () {
    it("should clear expiry on withdrawal", async function () {
      const { vault, bragNFT, owner, testClient } = await deployFixture();

      await bragNFT.write.donate(["Vault test", "uri", false]);
      const tokenId = 0n;

      await bragNFT.write.safeTransferFrom([
        owner.account.address,
        vault.address,
        tokenId,
        numberToHex(3600n, { size: 32 }) // 1 hour duration
      ]);

      assert.ok(await vault.read.expiry721([bragNFT.address, tokenId]) > 0n);

      // Fast forward time
      await testClient.increaseTime({ seconds: 3601 });
      await testClient.mine({ blocks: 1 });

      await vault.write.withdraw721([bragNFT.address, tokenId]);

      assert.equal(await vault.read.expiry721([bragNFT.address, tokenId]), 0n);
    });

    it("should revert on unauthorized 64-byte data", async function () {
      const { vault, bragNFT, owner } = await deployFixture();

      await bragNFT.write.donate(["Data test", "uri", false]);
      const tokenId = 0n;

      // 64 bytes data
      const data = keccak256(toBytes("some-data")) + keccak256(toBytes("more-data")).slice(2);

      await assert.rejects(
        bragNFT.write.safeTransferFrom([
          owner.account.address,
          vault.address,
          tokenId,
          data as `0x${string}`
        ]),
        /Unauthorized data/
      );
    });
  });
});
