import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Recovery & Truncation Tests", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, other] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    return { viem, publicClient, bragToken, bragNFT, vault, marketplace, batchGrant, owner, other };
  }

  describe("Administrative Recovery", function () {
    it("Should recover ETH from ExhibitVault", async function () {
      const { publicClient, vault, owner, other } = await deployContracts();
      const amount = parseEther("1");

      await other.sendTransaction({
        to: vault.address,
        value: amount
      });

      const balanceBefore = await publicClient.getBalance({ address: owner.account.address });
      await vault.write.withdrawETH({ account: owner.account });
      const balanceAfter = await publicClient.getBalance({ address: owner.account.address });

      assert.ok(balanceAfter > balanceBefore, "Owner should have more ETH after withdrawal");
    });

    it("Should recover ERC20 from BragNFT", async function () {
      const { bragNFT, bragToken, owner, other } = await deployContracts();
      const amount = parseEther("10");

      await bragToken.write.transfer([bragNFT.address, amount], { account: owner.account });

      await bragNFT.write.withdrawERC20([bragToken.address], { account: owner.account });
      const balance = await bragToken.read.balanceOf([owner.account.address]);
      assert.ok(balance >= amount);
    });

    it("Should recover ETH from NFTMarketplace", async function () {
      const { publicClient, marketplace, owner, other } = await deployContracts();
      const amount = parseEther("0.5");

      await other.sendTransaction({
        to: marketplace.address,
        value: amount
      });

      const balanceBefore = await publicClient.getBalance({ address: owner.account.address });
      await marketplace.write.withdrawETH({ account: owner.account });
      const balanceAfter = await publicClient.getBalance({ address: owner.account.address });

      assert.ok(balanceAfter > balanceBefore);
    });
  });

  describe("UTF-8 Safe Truncation", function () {
    it("Should truncate message without splitting multi-byte characters", async function () {
      const { bragNFT, owner } = await deployContracts();

      // An emoji like 🚀 is 4 bytes in UTF-8
      // 'A' is 1 byte.
      // "AAAA... (28 times) 🚀" would be 28 + 4 = 32 bytes.
      // If we truncate to 32 bytes, it should be fine.
      // If we have "AAAA... (30 times) 🚀" and truncate to 32, it should exclude 🚀.

      const message = "A".repeat(30) + "🚀"; // 30 + 4 = 34 bytes
      await bragNFT.write.donate([message, ""], { account: owner.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const uri = await bragNFT.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

      // The message in SVG should be 30 'A's and NO partial emoji
      // 30 'A's fits in 32 bytes.
      assert.ok(svg.includes("A".repeat(30)));
      assert.ok(!svg.includes("🚀"));

      // If message is exactly 32 bytes
      const message32 = "A".repeat(28) + "🚀";
      await bragNFT.write.donate([message32, ""], { account: owner.account, value: parseEther("0.1") });
      const tokenId2 = 1n;
      const uri2 = await bragNFT.read.tokenURI([tokenId2]);
      const json2 = JSON.parse(Buffer.from(uri2.split(",")[1], "base64").toString());
      const svg2 = Buffer.from(json2.image.split(",")[1], "base64").toString();
      assert.ok(svg2.includes("🚀"));
    });
  });
});
