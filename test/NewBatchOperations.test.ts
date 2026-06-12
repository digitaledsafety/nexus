import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("New Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, otherAccount, buyer, recipient1, recipient2] = await viem.getWalletClients();

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
      parseEther("1000000"),
      parseEther("1000000000"),
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);

    const exhibitRegistry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const exhibitVault = await viem.deployContract("ExhibitVault", [owner.account.address, exhibitRegistry.address]);
    await exhibitRegistry.write.verifyVault([exhibitVault.address, 1, "Main Vault", "The primary exhibit vault"]);

    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);
    const mockUSDC = await viem.deployContract("MockUSDC");
    await mockUSDC.write.mint([getAddress(owner.account.address), parseEther("10000")]);

    await bragNFT.write.setBragToken([bragToken.address]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    const publicClient = await viem.getPublicClient();

    return {
      bragNFT,
      bragToken,
      marketplace,
      treasury,
      exhibitVault,
      exhibitRegistry,
      batchGrant,
      mockUSDC,
      owner,
      otherAccount,
      buyer,
      recipient1,
      recipient2,
      publicClient,
    };
  }

  describe("BragNFT Batch Operations", async function () {
    it("should batchDonate correctly", async function () {
      const { bragNFT, owner } = await deployFixture();
      const messages = ["Msg 1", "Msg 2"];
      const media = ["uri1", "uri2"];
      const onChain = [false, true];

      await bragNFT.write.batchDonate([messages, media, onChain], {
        value: parseEther("0.2"),
      });

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(owner.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(owner.account.address));

      const record1 = await bragNFT.read.taxRegistry([0n]);
      assert.equal(record1[4], "Msg 1");
      const record2 = await bragNFT.read.taxRegistry([1n]);
      assert.equal(record2[4], "Msg 2");
    });

    it("should batchDonateTo correctly", async function () {
      const { bragNFT, recipient1, recipient2 } = await deployFixture();
      const recipients = [recipient1.account.address, recipient2.account.address];
      const messages = ["To 1", "To 2"];
      const media = ["uri1", "uri2"];
      const onChain = [false, true];

      await bragNFT.write.batchDonateTo([recipients, messages, media, onChain], {
        value: parseEther("0.2"),
      });

      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(recipient1.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(recipient2.account.address));
    });

    it("should batchTopUp correctly", async function () {
      const { bragNFT } = await deployFixture();
      await bragNFT.write.donate(["Donation 1", "uri1", false], { value: parseEther("0.1") });
      await bragNFT.write.donate(["Donation 2", "uri2", false], { value: parseEther("0.1") });

      await bragNFT.write.batchTopUp([[0n, 1n]], { value: parseEther("0.002") }); // $5 total, $2.50 each

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });
  });

  describe("NFTMarketplace Batch Operations", async function () {
    it("should batchUpdateListings correctly", async function () {
      const { marketplace, bragNFT, owner } = await deployFixture();
      await bragNFT.write.donate(["1", "u", false]);
      await bragNFT.write.donate(["2", "u", false]);
      await bragNFT.write.setApprovalForAll([marketplace.address, true]);

      await marketplace.write.batchCreateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("10"), parseEther("20")]
      ]);

      await marketplace.write.batchUpdateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("5"), parseEther("15")]
      ]);

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]);
      assert.equal(l1[1], parseEther("5"));
      assert.equal(l2[1], parseEther("15"));
    });

    it("should batchUpdateOffers correctly", async function () {
      const { marketplace, bragNFT, bragToken, buyer } = await deployFixture();
      await bragNFT.write.donate(["1", "u", false]);
      await bragNFT.write.donate(["2", "u", false]);

      await bragToken.write.transfer([buyer.account.address, parseEther("100")]);
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

      await marketplace.write.batchCreateOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("10"), parseEther("10")]
      ], { account: buyer.account });

      await marketplace.write.batchUpdateOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("15"), parseEther("5")]
      ], { account: buyer.account });

      const o1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      const o2 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);
      assert.equal(o1[0], parseEther("15"));
      assert.equal(o2[0], parseEther("5"));
    });

    it("should batchRejectOffers correctly", async function () {
      const { marketplace, bragNFT, bragToken, buyer, owner } = await deployFixture();
      await bragNFT.write.donate(["1", "u", false]);
      await bragNFT.write.donate(["2", "u", false]);

      await bragToken.write.transfer([buyer.account.address, parseEther("100")]);
      await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

      await marketplace.write.batchCreateOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("10"), parseEther("10")]
      ], { account: buyer.account });

      await marketplace.write.batchRejectOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [buyer.account.address, buyer.account.address]
      ]);

      const o1 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      assert.equal(o1[0], 0n);
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
    });
  });

  describe("ExhibitVault Batch Operations", async function () {
    it("should batchExhibit721 correctly", async function () {
      const { exhibitVault, bragNFT, owner } = await deployFixture();
      await bragNFT.write.donate(["1", "u", false]);
      await bragNFT.write.donate(["2", "u", false]);
      await bragNFT.write.setApprovalForAll([exhibitVault.address, true]);

      await exhibitVault.write.batchExhibit721([
        [getAddress(bragNFT.address), getAddress(bragNFT.address)],
        [0n, 1n],
        0n
      ]);

      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(exhibitVault.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(exhibitVault.address));
      assert.equal(getAddress(await exhibitVault.read.owner721([bragNFT.address, 0n])), getAddress(owner.account.address));
    });

    it("should batchExhibit1155 correctly", async function () {
      const { exhibitVault, owner } = await deployFixture();
      const mock1155 = await viem.deployContract("MockERC1155");
      await mock1155.write.mint([getAddress(owner.account.address), 1n, 10n]);
      await mock1155.write.mint([getAddress(owner.account.address), 2n, 20n]);
      await mock1155.write.setApprovalForAll([exhibitVault.address, true]);

      await exhibitVault.write.batchExhibit1155([
        [getAddress(mock1155.address), getAddress(mock1155.address)],
        [1n, 2n],
        [5n, 10n],
        0n
      ]);

      assert.equal(await exhibitVault.read.balances1155([mock1155.address, 1n, owner.account.address]), 5n);
      assert.equal(await exhibitVault.read.balances1155([mock1155.address, 2n, owner.account.address]), 10n);
    });
  });

  describe("BatchGrant Optimization", async function () {
    it("should distribute correctly with optimization", async function () {
      const { batchGrant, mockUSDC, owner, recipient1, recipient2 } = await deployFixture();
      await mockUSDC.write.approve([batchGrant.address, parseEther("100")]);

      await batchGrant.write.distribute([
        mockUSDC.address,
        [recipient1.account.address, recipient2.account.address],
        [parseEther("10"), parseEther("20")]
      ]);

      assert.equal(await mockUSDC.read.balanceOf([recipient1.account.address]), parseEther("10"));
      assert.equal(await mockUSDC.read.balanceOf([recipient2.account.address]), parseEther("20"));
      assert.equal(await mockUSDC.read.balanceOf([batchGrant.address]), 0n);
    });
  });
});

function getAddress(address: string): string {
    return address.toLowerCase();
}
