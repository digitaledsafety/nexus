import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("New Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "Description"]);

    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });

    return { bragNFT, bragToken, marketplace, vault, registry, owner, user1, user2, treasury };
  }

  describe("BragNFT Batch Operations", function () {
    it("Should batchDonate multiple NFTs", async function () {
      const { bragNFT, user1, treasury } = await deployAll();
      const messages = ["M1", "M2"];
      const media = ["URI1", "URI2"];
      const onChain = [false, false];

      const publicClient = await viem.getPublicClient();
      const initialBalance = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.batchDonate([messages, media, onChain], {
        account: user1.account,
        value: parseEther("0.2")
      });

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));

      const finalBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalBalance - initialBalance, parseEther("0.2"));
    });

    it("Should batchDonateTo multiple recipients", async function () {
      const { bragNFT, user1, user2 } = await deployAll();
      await bragNFT.write.batchDonateTo([
        [user1.account.address, user2.account.address],
        ["M1", "M2"],
        ["URI1", "URI2"],
        [false, false]
      ], { account: user1.account, value: parseEther("0.2") });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
    });

    it("Should batchTopUp multiple NFTs", async function () {
      const { bragNFT, user1 } = await deployAll();
      await bragNFT.write.donate(["M1", "URI1"], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["M2", "URI2"], { account: user1.account, value: parseEther("0.1") });

      // $1.00 USD is 0.0004 ETH at $2500
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: user1.account, value: parseEther("0.001") });

      assert.ok(await bragNFT.read.isGlowing([0n]));
      assert.ok(await bragNFT.read.isGlowing([1n]));
    });
  });

  describe("NFTMarketplace Batch Operations", function () {
    it("Should batchRejectOffers", async function () {
      const { bragNFT, bragToken, marketplace, owner, user1, user2 } = await deployAll();
      await bragNFT.write.donate(["M1", ""], { account: user1.account, value: parseEther("0.1") });

      await bragToken.write.transfer([user2.account.address, parseEther("100")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: user2.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: user2.account });

      assert.equal(await bragToken.read.balanceOf([user2.account.address]), parseEther("90"));

      await marketplace.write.batchRejectOffers([[bragNFT.address], [0n], [user2.account.address]], { account: user1.account });

      assert.equal(await bragToken.read.balanceOf([user2.account.address]), parseEther("100"));
    });

    it("Should batchUpdateListings", async function () {
      const { bragNFT, marketplace, user1 } = await deployAll();
      await bragNFT.write.donate(["M1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["M2", ""], { account: user1.account, value: parseEther("0.1") });

      await marketplace.write.batchCreateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("1")]],
        { account: user1.account }
      );

      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("2"), parseEther("3")]],
        { account: user1.account }
      );

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, user1.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, user1.account.address]);
      assert.equal(l1[1], parseEther("2"));
      assert.equal(l2[1], parseEther("3"));
    });
  });

  describe("ExhibitVault Batch Operations", function () {
    it("Should batchExhibit721 from multiple contracts", async function () {
      const { bragNFT, vault, user1, owner } = await deployAll();
      const anotherNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), getAddress("0x0000000000000000000000000000000000000000")]);

      await bragNFT.write.donate(["M1", ""], { account: user1.account, value: parseEther("0.1") });
      await anotherNFT.write.donate(["M2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragNFT.write.approve([vault.address, 0n], { account: user1.account });
      await anotherNFT.write.approve([vault.address, 0n], { account: user1.account });

      await vault.write.batchExhibit721([[bragNFT.address, anotherNFT.address], [0n, 0n], 0n], { account: user1.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault.address));
      assert.equal(await anotherNFT.read.ownerOf([0n]), getAddress(vault.address));
    });
  });

  describe("BragToken Batch Operations", function () {
    it("Should batchMint tokens", async function () {
      const { bragToken, owner, user1, user2 } = await deployAll();
      await bragToken.write.batchMint(
        [[user1.account.address, user2.account.address], [parseEther("100"), parseEther("200")]],
        { account: owner.account }
      );

      assert.equal(await bragToken.read.balanceOf([user1.account.address]), parseEther("100"));
      assert.equal(await bragToken.read.balanceOf([user2.account.address]), parseEther("200"));
    });
  });
});
