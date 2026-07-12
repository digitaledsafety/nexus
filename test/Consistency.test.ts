import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Consistency and Batch Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155");

    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { bragToken, bragNFT, marketplace, registry, vault1, vault2, mock1155, owner, seller, buyer, treasury, other, priceFeed };
  }

  describe("BragNFT Enhancements", () => {
    it("Should apply proportional glow duration", async () => {
      const { bragNFT, buyer, priceFeed } = await deployAll();

      // $2500/ETH. 0.1 ETH = $250.
      // Proportional duration: ($250 / $1.00) * 30 days = 250 * 30 days = 7500 days.
      await bragNFT.write.donate(["msg", "media", false], { account: buyer.account, value: parseEther("0.1") });
      const tokenId = 0n;
      const expiry = await bragNFT.read.glowExpiry([tokenId]);
      const now = BigInt(Math.floor(Date.now() / 1000));

      const expectedDuration = 250n * 30n * 24n * 60n * 60n;
      // Use a range to account for block.timestamp variations
      assert.ok(expiry >= now + expectedDuration - 100n);
    });

    it("Should apply minimum 30 days glow for small donations", async () => {
        const { bragNFT, buyer, priceFeed } = await deployAll();
        // Set price feed to something very low to test minimum
        await priceFeed.write.setPrice([100000000n]); // $1/ETH
        // 0.1 ETH = $0.10. Proportional = 3 days. Should be 30 days.
        await bragNFT.write.donate(["msg", "media", false], { account: buyer.account, value: parseEther("0.1") });
        const expiry = await bragNFT.read.glowExpiry([0n]);
        const now = BigInt(Math.floor(Date.now() / 1000));
        assert.ok(expiry >= now + (30n * 24n * 60n * 60n) - 100n);
    });

    it("Should batch update on-chain media", async () => {
        const { bragNFT, owner, buyer } = await deployAll();
        await bragNFT.write.donate(["msg1", "old1", true], { account: buyer.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["msg2", "old2", true], { account: buyer.account, value: parseEther("0.1") });

        await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["new1", "new2"]], { account: owner.account });

        assert.equal(await bragNFT.read.onChainMedia([0n]), "new1");
        assert.equal(await bragNFT.read.onChainMedia([1n]), "new2");
    });
  });

  describe("NFTMarketplace Enhancements", () => {
    it("Should enforce amount=1 for ERC721 offers", async () => {
        const { marketplace, bragNFT, bragToken, buyer, owner } = await deployAll();
        await bragToken.write.transfer([buyer.account.address, parseEther("1000")], { account: owner.account });
        await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: buyer.account });

        await assert.rejects(
            marketplace.write.createOffer([bragNFT.address, 0n, 2n, parseEther("1")], { account: buyer.account }),
            /ERC721 offer must have amount 1/
        );
    });

    it("Should enforce ownership check on listing updates", async () => {
        const { marketplace, bragNFT, seller, other } = await deployAll();
        await bragNFT.write.donate(["msg", "media", false], { account: seller.account, value: parseEther("0.1") });
        await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

        await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

        // Transfer NFT away
        await bragNFT.write.transferFrom([seller.account.address, other.account.address, 0n], { account: seller.account });

        // Try to update listing
        await assert.rejects(
            marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("2")], { account: seller.account }),
            /You do not own this NFT/
        );
    });

    it("Should batch update listings", async () => {
        const { marketplace, bragNFT, seller } = await deployAll();
        await bragNFT.write.donate(["n1", "", false], { account: seller.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["n2", "", false], { account: seller.account, value: parseEther("0.1") });

        await marketplace.write.batchCreateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1"), parseEther("2")]], { account: seller.account });

        await marketplace.write.batchUpdateListings([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("2.5")]], { account: seller.account });

        const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
        const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

        assert.equal(l1[1], parseEther("1.5"));
        assert.equal(l2[1], parseEther("2.5"));
    });

    it("Should allow updating private buyer", async () => {
        const { marketplace, bragNFT, seller, buyer, other } = await deployAll();
        await bragNFT.write.donate(["n1", "", false], { account: seller.account, value: parseEther("0.1") });

        await marketplace.write.createPrivateListing([bragNFT.address, 0n, 1n, parseEther("1"), buyer.account.address], { account: seller.account });

        // Update private buyer to other
        await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1"), other.account.address], { account: seller.account });

        const l = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
        assert.equal(l[3], getAddress(other.account.address));
    });
  });

  describe("BragToken and ExhibitVault Enhancements", () => {
    it("BragToken: Should batch mint", async () => {
        const { bragToken, owner, buyer, other } = await deployAll();
        await bragToken.write.batchMint([[buyer.account.address, other.account.address], [parseEther("100"), parseEther("200")]], { account: owner.account });

        assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
        assert.equal(await bragToken.read.balanceOf([other.account.address]), parseEther("200"));
    });

    it("ExhibitVault: Should batch extend exhibition", async () => {
        const { bragNFT, vault1, seller } = await deployAll();
        await bragNFT.write.donate(["n1", "", false], { account: seller.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["n2", "", false], { account: seller.account, value: parseEther("0.1") });

        await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
        await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

        await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1000n], { account: seller.account });

        const expiry0 = await vault1.read.expiry721([bragNFT.address, 0n]);
        const expiry1 = await vault1.read.expiry721([bragNFT.address, 1n]);
        const now = BigInt(Math.floor(Date.now() / 1000));

        assert.ok(expiry0 >= now + 1000n);
        assert.ok(expiry1 >= now + 1000n);
    });

    it("ExhibitVault: Should batch move with duration", async () => {
        const { bragNFT, vault1, vault2, seller } = await deployAll();
        await bragNFT.write.donate(["n1", "", false], { account: seller.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["n2", "", false], { account: seller.account, value: parseEther("0.1") });

        await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
        await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

        await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 5000n], { account: seller.account });

        assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
        assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault2.address));

        const expiry0 = await vault2.read.expiry721([bragNFT.address, 0n]);
        const now = BigInt(Math.floor(Date.now() / 1000));
        assert.ok(expiry0 >= now + 5000n);
    });
  });
});
