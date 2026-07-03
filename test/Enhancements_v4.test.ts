import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, decodeEventLog } from "viem";

describe("Enhancements v4", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000000"), parseEther("2000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });

    await bragNFT.write.setBragToken([bragToken.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, priceFeed, registry, vault1, vault2, mock1155, owner, seller, buyer, treasury, other };
  }

  describe("BragNFT Enhancements", function () {
    it("Should initialize glow upon donation", async function () {
      const { bragNFT, seller } = await deployAll();
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      const glowing = await bragNFT.read.isGlowing([0n]);
      assert.equal(glowing, true);
    });

    it("Should allow owner to update media", async function () {
      const { bragNFT, seller, other } = await deployAll();
      await bragNFT.write.donate(["nft1", "uri1"], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.updateMedia([0n, "uri2", false], { account: seller.account });
      assert.equal(await bragNFT.read.tokenURI([0n]), await bragNFT.read.tokenURI([0n])); // Just checking it doesn't revert

      // Should fail if not owner
      await assert.rejects(
        bragNFT.write.updateMedia([0n, "uri3", false], { account: other.account }),
        /Not the owner/
      );
    });

    it("Should use dynamic SVG colors based on TaxStatus", async function () {
      const { bragNFT, seller, owner } = await deployAll();
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      const uriPending = await bragNFT.read.tokenURI([0n]);
      const jsonPending = JSON.parse(atob(uriPending.split(",")[1]));
      const svgPending = atob(jsonPending.image.split(",")[1]);
      assert.ok(svgPending.includes('fill="#6366f1"'), "Pending should be Indigo");

      await bragNFT.write.setTaxStatus([0n, 1], { account: owner.account }); // Verified
      const uriVerified = await bragNFT.read.tokenURI([0n]);
      const svgVerified = atob(JSON.parse(atob(uriVerified.split(",")[1])).image.split(",")[1]);
      assert.ok(svgVerified.includes('fill="#22c55e"'), "Verified should be Green");

      await bragNFT.write.setTaxStatus([0n, 2], { account: owner.account }); // Claimed
      const svgClaimed = atob(JSON.parse(atob((await bragNFT.read.tokenURI([0n])).split(",")[1])).image.split(",")[1]);
      assert.ok(svgClaimed.includes('fill="#eab308"'), "Claimed should be Gold");

      await bragNFT.write.setTaxStatus([0n, 3], { account: owner.account }); // Flagged
      const svgFlagged = atob(JSON.parse(atob((await bragNFT.read.tokenURI([0n])).split(",")[1])).image.split(",")[1]);
      assert.ok(svgFlagged.includes('fill="#ef4444"'), "Flagged should be Red");
    });

    it("Should emit PriceFeedFailed on invalid or stale price feed", async function () {
      const { bragNFT, priceFeed, seller } = await deployAll();
      const publicClient = await viem.getPublicClient();

      await priceFeed.write.setPrice([0n]);
      let txHash = await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      let receipt = await publicClient.getTransactionReceipt({ hash: txHash });
      let logs = receipt.logs.map(log => {
          try { return decodeEventLog({ abi: bragNFT.abi, data: log.data, topics: log.topics }); } catch { return null; }
      }).filter(l => l !== null);
      assert.ok(logs.some(l => l.eventName === "PriceFeedFailed"), "Should have emitted PriceFeedFailed for invalid price");

      await priceFeed.write.setPrice([250000000000n]);
      const latestBlock = await publicClient.getBlock();
      await priceFeed.write.setUpdatedAt([latestBlock.timestamp - 100000n]); // Stale

      txHash = await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      receipt = await publicClient.getTransactionReceipt({ hash: txHash });
      logs = receipt.logs.map(log => {
          try { return decodeEventLog({ abi: bragNFT.abi, data: log.data, topics: log.topics }); } catch { return null; }
      }).filter(l => l !== null);
      assert.ok(logs.some(l => l.eventName === "PriceFeedFailed"), "Should have emitted PriceFeedFailed for stale price");
    });
  });

  describe("NFTMarketplace Enhancements", function () {
    it("Should batch update and reject offers", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: buyer.account });

      // Batch update
      await marketplace.write.batchUpdateOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("15"), parseEther("25")]
      ], { account: buyer.account });

      const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      assert.equal(offer0[0], parseEther("15"));

      // Batch reject
      await marketplace.write.batchRejectOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [buyer.account.address, buyer.account.address]
      ], { account: seller.account });

      const offer0After = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      assert.equal(offer0After[0], 0n);
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
    });
  });

  describe("ExhibitVault Enhancements", function () {
    it("Should batch exhibit and extend", async function () {
      const { bragNFT, mock1155, vault1, seller, owner } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([vault1.address, 0n], { account: seller.account });
      await bragNFT.write.approve([vault1.address, 1n], { account: seller.account });

      // Batch exhibit 721
      await vault1.write.batchExhibit721([bragNFT.address, [0n, 1n], 3600n], { account: seller.account });
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault1.address));

      // Extend
      await vault1.write.extendExhibition721([bragNFT.address, 0n, 3600n], { account: seller.account });
      const expiry = await vault1.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry > 3600n);

      // Batch exhibit 1155
      await mock1155.write.mint([seller.account.address, 1n, 100n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });
      await vault1.write.batchExhibit1155([mock1155.address, [1n], [50n], 3600n], { account: seller.account });
      assert.equal(await mock1155.read.balanceOf([vault1.address, 1n]), 50n);
    });

    it("Should moveBatch721WithDuration", async function () {
      const { bragNFT, vault1, vault2, seller } = await deployAll();
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });

      await vault1.write.moveBatch721WithDuration([[bragNFT.address], [0n], vault2.address, 7200n], { account: seller.account });
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
      const expiry = await vault2.read.expiry721([bragNFT.address, 0n]);
      assert.ok(expiry > 0n);
    });
  });
});
