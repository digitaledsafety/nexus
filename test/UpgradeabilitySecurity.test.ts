import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeFunctionData, zeroAddress, keccak256, toBytes } from "viem";

describe("Security and Stability Enhancements", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, other] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    // 1. Deploy BragToken (Immutable)
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("1000000")]);

    // 2. Deploy Treasury (Immutable)
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);

    // 3. Deploy Mocks
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);

    // 4. Deploy Logic contracts
    const bragNFTLogic = await viem.deployContract("BragNFT");
    const marketplaceLogic = await viem.deployContract("NFTMarketplace");
    const vaultLogic = await viem.deployContract("ExhibitVault");

    // 5. Deploy Proxies
    const nftInitData = encodeFunctionData({
        abi: bragNFTLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, treasury.address, parseEther("0.1"), priceFeed.address]
    });
    const nftProxy = await viem.deployContract("MockProxy", [bragNFTLogic.address, nftInitData]);
    const bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    const marketplaceInitData = encodeFunctionData({
        abi: marketplaceLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, bragToken.address]
    });
    const marketplaceProxy = await viem.deployContract("MockProxy", [marketplaceLogic.address, marketplaceInitData]);
    const marketplace = await viem.getContractAt("NFTMarketplace", marketplaceProxy.address);

    const vaultInitData = encodeFunctionData({
        abi: vaultLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, registry.address]
    });
    const vaultProxy = await viem.deployContract("MockProxy", [vaultLogic.address, vaultInitData]);
    const vault = await viem.getContractAt("ExhibitVault", vaultProxy.address);

    return {
        bragToken, treasury, priceFeed, registry,
        bragNFT,
        marketplace,
        vault,
        owner, other, publicClient
    };
  }

  describe("BragNFT Oracle & Pause", () => {
    it("Should reject stale price feed data", async function () {
      const { bragNFT, priceFeed } = await setup();

      // Update price feed with old timestamp
      const now = Math.floor(Date.now() / 1000);
      const fiveHoursAgo = BigInt(now - (5 * 60 * 60));
      await priceFeed.write.updateData([250000000000n, fiveHoursAgo]);

      // Attempt to donate should revert due to stale price (returns 0 usd value, below minimum)
      await bragNFT.write.setManualEthPrice([0n]);

      await assert.rejects(
        bragNFT.write.donate(["stale test", "", false], { value: parseEther("0.05") }),
        /Donation below minimum/
      );
    });

    it("Should allow owner to pause and unpause", async function () {
      const { bragNFT, other } = await setup();

      await bragNFT.write.pause();
      assert.equal(await bragNFT.read.paused(), true);

      await assert.rejects(
        bragNFT.write.donate(["paused test", "", false], { value: parseEther("0.1") }),
        /EnforcedPause/
      );

      await bragNFT.write.unpause();
      assert.equal(await bragNFT.read.paused(), false);
    });
  });

  describe("NFTMarketplace expectedPrice", () => {
    it("Should protect buyer from price shifts", async function () {
      const { marketplace, bragNFT, bragToken, owner, other } = await setup();

      // Setup NFT and Listing
      await bragNFT.write.donate(["item", "", false], { value: parseEther("0.2") });
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId]);

      const originalPrice = parseEther("10");
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, originalPrice]);

      // Buyer prepares to buy at 10 BRAG
      await bragToken.write.transfer([other.account.address, parseEther("20")]);
      await bragToken.write.approve([marketplace.address, parseEther("20")], { account: other.account });

      // Seller front-runs (simulated) by changing price to 11 BRAG
      await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("11")]);

      // Buyer's transaction with expectedPrice = 10 should fail
      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, originalPrice], { account: other.account }),
        /Price shifted/
      );

      // Buying with correct expectedPrice should work
      await marketplace.write.buyFromListing([bragNFT.address, tokenId, owner.account.address, parseEther("11")], { account: other.account });
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(other.account.address));
    });
  });

  describe("Batch Logic Removal", () => {
    it("Should not have batch functions in ABI", async function () {
        const { marketplace, bragNFT, vault } = await setup();

        assert.equal(marketplace.abi.some((f: any) => f.name === 'batchCreateListings'), false);
        assert.equal(bragNFT.abi.some((f: any) => f.name === 'batchDonate'), false);
        assert.equal(vault.abi.some((f: any) => f.name === 'batchWithdraw721'), false);
    });
  });
});
