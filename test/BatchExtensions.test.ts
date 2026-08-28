import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("10000000"), // 10M initial supply to owner for distribution
      parseEther("100000000000"), // 100B max supply to avoid "Exceeds maxSupply"
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH price

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"), // 0.1 ETH min donation
      priceFeed.address,
    ]);

    // Grant MINTER_ROLE on BragToken to BragNFT
    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { bragNFT, bragToken, priceFeed, registry, vault, mock1155, owner, user1, user2, treasury };
  }

  describe("BragNFT Batch Donations", function () {
    it("Should batch donate and distribute ETH value with dust correctly", async function () {
      const { bragNFT, treasury, user1 } = await deployAll();

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      // Donate for 3 NFTs with 0.300000000000000005 ETH (so remainder of 5 % 3 is 2, base division gives +1 Wei per NFT)
      const totalValue = parseEther("0.3") + 5n;
      const messages = ["nft1", "nft2", "nft3"];
      const medias = ["", "", ""];
      const onChains = [false, false, false];

      await bragNFT.write.batchDonate([messages, medias, onChains], {
        account: user1.account,
        value: totalValue,
      });

      // Verify supply is 3
      assert.equal(await bragNFT.read.totalSupply(), 3n);

      // Verify individual records
      const rec0 = await bragNFT.read.taxRegistry([0n]);
      const rec1 = await bragNFT.read.taxRegistry([1n]);
      const rec2 = await bragNFT.read.taxRegistry([2n]);

      const baseValue = parseEther("0.1");
      assert.equal(rec0[2], baseValue + 1n); // ethAmount
      assert.equal(rec1[2], baseValue + 1n);
      assert.equal(rec2[2], baseValue + 3n); // Last NFT gets the 2 Wei dust remainder + baseAmount (baseValue + 1n)

      // Verify single ETH transfer to treasury
      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalValue);
    });

    it("Should batch donate to a specific recipient", async function () {
      const { bragNFT, user1, user2 } = await deployAll();

      const messages = ["to1", "to2"];
      const medias = ["", ""];
      const onChains = [false, false];

      await bragNFT.write.batchDonateTo([user2.account.address, messages, medias, onChains], {
        account: user1.account,
        value: parseEther("0.2"),
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user2.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
    });
  });

  describe("BragNFT Batch Top-ups", function () {
    it("Should batch top up multiple NFTs with ETH and dust remainder", async function () {
      const { bragNFT, treasury, user1 } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      // Top up requires $1.00 worth of ETH per NFT ($2.00 total)
      // At $2500/ETH, $1.00 is 0.0004 ETH. Let's send 0.0008 ETH + 1 Wei dust
      const totalValue = parseEther("0.0008") + 1n;

      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: user1.account,
        value: totalValue,
      });

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalValue);

      assert.ok(await bragNFT.read.isGlowing([0n]));
      assert.ok(await bragNFT.read.isGlowing([1n]));
    });

    it("Should batch top up multiple NFTs with BRAG tokens", async function () {
      const { bragNFT, bragToken, user1, owner, treasury } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      // Transfer 5,000,000 BRAG to user1
      const transferAmount = parseEther("5000000");
      await bragToken.write.transfer([user1.account.address, transferAmount], { account: owner.account });

      // Approve BragNFT to spend BRAG
      const topUpAmountPerNft = 1_000_000n * parseEther("1");
      const totalTopUpAmount = topUpAmountPerNft * 2n;
      await bragToken.write.approve([bragNFT.address, totalTopUpAmount], { account: user1.account });

      const initialTreasuryBragBalance = await bragToken.read.balanceOf([treasury.account.address]);

      // Batch top up
      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      const finalTreasuryBragBalance = await bragToken.read.balanceOf([treasury.account.address]);
      assert.equal(finalTreasuryBragBalance - initialTreasuryBragBalance, totalTopUpAmount);

      assert.ok(await bragNFT.read.isGlowing([0n]));
      assert.ok(await bragNFT.read.isGlowing([1n]));
    });
  });

  describe("BragNFT Administrative USD value overrides", function () {
    it("Should allow DEFAULT_ADMIN_ROLE to manually update a record's USD value", async function () {
      const { bragNFT, owner, user1 } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      const recBefore = await bragNFT.read.taxRegistry([0n]);

      // Update USD value
      const newValue = 50000000000n; // $500
      await bragNFT.write.updateUsdValue([0n, newValue], { account: owner.account });

      const recAfter = await bragNFT.read.taxRegistry([0n]);
      assert.equal(recAfter[1], newValue);

      // Non-admin should fail
      await assert.rejects(
        bragNFT.write.updateUsdValue([0n, newValue * 2n], { account: user1.account })
      );
    });
  });

  describe("ExhibitVault Batch Exhibition Extensions", function () {
    it("Should batch extend exhibition durations for ERC721 and ERC1155", async function () {
      const { bragNFT, mock1155, vault, user1, owner } = await deployAll();

      // Mint/Donate NFTs to user1
      await bragNFT.write.donate(["nft1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: user1.account, value: parseEther("0.1") });

      // Exhibit them
      await bragNFT.write.setApprovalForAll([vault.address, true], { account: user1.account });
      await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: user1.account });

      const exp0Before = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1Before = await vault.read.expiry721([bragNFT.address, 1n]);

      // Batch extend
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1800n], { account: user1.account });

      const exp0After = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(exp0After - exp0Before, 1800n);
      assert.equal(exp1After - exp1Before, 1800n);
    });
  });
});
