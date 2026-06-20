import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress, encodeFunctionData } from "viem";

describe("Recovery & Truncation Tests", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, other] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    // Deploy BragNFT via proxy
    const bragNFTLogic = await viem.deployContract("BragNFT");
    const nftInitData = encodeFunctionData({
        abi: bragNFTLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]
    });
    const nftProxy = await viem.deployContract("MockProxy", [bragNFTLogic.address, nftInitData]);
    const bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);

    // Deploy ExhibitVault via proxy
    const vaultLogic = await viem.deployContract("ExhibitVault");
    const vaultInitData = encodeFunctionData({
        abi: vaultLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, registry.address]
    });
    const vaultProxy = await viem.deployContract("MockProxy", [vaultLogic.address, vaultInitData]);
    const vault = await viem.getContractAt("ExhibitVault", vaultProxy.address);

    // Deploy Marketplace via proxy
    const marketplaceLogic = await viem.deployContract("NFTMarketplace");
    const marketplaceInitData = encodeFunctionData({
        abi: marketplaceLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, bragToken.address]
    });
    const marketplaceProxy = await viem.deployContract("MockProxy", [marketplaceLogic.address, marketplaceInitData]);
    const marketplace = await viem.getContractAt("NFTMarketplace", marketplaceProxy.address);

    return { viem, publicClient, bragToken, bragNFT, vault, marketplace, owner, other };
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

      const message = "A".repeat(30) + "🚀"; // 30 + 4 = 34 bytes
      await bragNFT.write.donate([message, "", false], { account: owner.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const uri = await bragNFT.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

      assert.ok(svg.includes("A".repeat(30)));
      assert.ok(!svg.includes("🚀"));

      // If message is exactly 32 bytes
      const message32 = "A".repeat(28) + "🚀";
      await bragNFT.write.donate([message32, "", false], { account: owner.account, value: parseEther("0.1") });
      const tokenId2 = 1n;
      const uri2 = await bragNFT.read.tokenURI([tokenId2]);
      const json2 = JSON.parse(Buffer.from(uri2.split(",")[1], "base64").toString());
      const svg2 = Buffer.from(json2.image.split(",")[1], "base64").toString();
      assert.ok(svg2.includes("🚀"));
    });
  });
});
