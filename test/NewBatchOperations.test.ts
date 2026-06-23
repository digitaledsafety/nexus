import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes } from "viem";

describe("New Batch Operations & Features", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer, buyer2] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "desc"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "desc"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, buyer2 };
  }

  describe("NFTMarketplace New Batch Ops", () => {
    it("Should batch reject offers", async function () {
      const { marketplace, bragNFT, bragToken, owner, seller, buyer, buyer2 } = await setup();

      // Setup: 2 NFTs, 2 buyers make offers
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
      await bragToken.write.transfer([buyer2.account.address, parseEther("100")], { account: owner.account });

      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer2.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: buyer2.account });

      // Batch reject
      await marketplace.write.batchRejectOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [buyer.account.address, buyer2.account.address]
      ], { account: seller.account });

      // Verify offers are gone
      const offer1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      const offer2 = await marketplace.read.offers([bragNFT.address, 1n, buyer2.account.address]);
      assert.equal(offer1[0], 0n);
      assert.equal(offer2[0], 0n);

      // Verify refunds
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
      assert.equal(await bragToken.read.balanceOf([buyer2.account.address]), parseEther("100"));
    });

    it("Should batch update listings", async function () {
      const { marketplace, bragNFT, seller } = await setup();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      // Batch update
      await marketplace.write.batchUpdateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("15"), parseEther("25")]
      ], { account: seller.account });

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing1[1], parseEther("15"));
      assert.equal(listing2[1], parseEther("25"));
    });

    it("Should update private buyer in listing", async function () {
      const { marketplace, bragNFT, seller, buyer, buyer2 } = await setup();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await marketplace.write.createPrivateListing([bragNFT.address, 0n, 1n, parseEther("10"), buyer.account.address], { account: seller.account });

      // Update to buyer2
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("12"), buyer2.account.address], { account: seller.account });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[3], getAddress(buyer2.account.address));
      assert.equal(listing[1], parseEther("12"));
    });
  });

  describe("ExhibitVault New Batch Ops", () => {
    it("Should batch move ERC721 with duration", async function () {
      const { bragNFT, vault1, vault2, seller } = await setup();
      const publicClient = await viem.getPublicClient();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

      // Batch move with 1 hour duration
      const duration = 3600n;
      await vault1.write.batchMove721WithDuration([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        vault2.address,
        duration
      ], { account: seller.account });

      // Verify in vault2 and locked
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
      assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));

      await assert.rejects(
        vault2.write.withdraw721([bragNFT.address, 0n], { account: seller.account }),
        /Exhibition not yet expired/
      );

      // Time travel
      await publicClient.request({ method: "evm_increaseTime" as any, params: [3601] });
      await publicClient.request({ method: "evm_mine" as any, params: [] });

      await vault2.write.withdraw721([bragNFT.address, 0n], { account: seller.account });
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(seller.account.address));
    });

    it("Should batch move ERC1155 with duration", async function () {
        const { mock1155, vault1, vault2, seller, owner } = await setup();
        const publicClient = await viem.getPublicClient();

        await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
        await mock1155.write.mint([seller.account.address, 2n, 20n], { account: owner.account });

        await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 5n, "0x"], { account: seller.account });
        await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 10n, "0x"], { account: seller.account });

        const duration = 3600n;
        await vault1.write.batchMove1155WithDuration([
          [mock1155.address, mock1155.address],
          [1n, 2n],
          [5n, 10n],
          vault2.address,
          duration
        ], { account: seller.account });

        assert.equal(await vault2.read.balances1155([mock1155.address, 1n, seller.account.address]), 5n);

        await assert.rejects(
            vault2.write.withdraw1155([mock1155.address, 1n, 5n], { account: seller.account }),
            /Exhibition not yet expired/
        );
    });
  });

  describe("BragNFT Proportional Top-up", () => {
    it("Should add proportional glow duration", async function () {
      const { bragNFT, seller } = await setup();
      const publicClient = await viem.getPublicClient();

      await bragNFT.write.donate(["topup test", ""], { account: seller.account, value: parseEther("0.1") });

      // $2500/ETH. $1.00 = 0.0004 ETH. $2.00 = 0.0008 ETH.
      // Top up with $2.00 worth of ETH
      const topUpAmount = parseEther("0.0008");
      await bragNFT.write.topUp([0n], { account: seller.account, value: topUpAmount });

      const expiry = await bragNFT.read.glowExpiry([0n]);
      const block = await publicClient.getBlock();
      const now = block.timestamp;

      // $2.00 should be exactly 60 days (5184000 seconds) from the block timestamp of topUp
      // Since donate and topUp might be in different blocks, let's just check the duration added.
      const expectedDuration = 60n * 24n * 3600n;

      // glowExpiry was 0, so it set to block.timestamp + duration
      // We check that expiry is close to now + expectedDuration
      assert.ok(expiry >= now + expectedDuration - 5n && expiry <= now + expectedDuration + 5n, `Duration mismatch: ${expiry - now}`);

      // Top up again with $1.00
      await bragNFT.write.topUp([0n], { account: seller.account, value: parseEther("0.0004") });
      const expiry2 = await bragNFT.read.glowExpiry([0n]);
      // Should add exactly 30 days
      assert.equal(expiry2, expiry + (30n * 24n * 3600n));
    });
  });

});
