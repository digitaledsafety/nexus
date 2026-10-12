import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("New Batch Features & Verification Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, privateBuyer1, privateBuyer2, treasuryOwner] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasuryOwner.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "Primary Exhibit Vault"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [[owner.account.address, treasuryOwner.account.address], 1n, mockEntryPoint.address]);

    return {
      marketplace,
      bragNFT,
      bragToken,
      registry,
      vault,
      mock1155,
      treasury,
      owner,
      seller,
      buyer,
      privateBuyer1,
      privateBuyer2,
      treasuryOwner,
    };
  }

  describe("Treasury.sol Input Validation", function () {
    it("Should revert propose when array lengths mismatch", async function () {
      const { treasury, owner } = await deployAll();

      await assert.rejects(
        treasury.write.propose([
          [owner.account.address, owner.account.address],
          [0n], // Length 1 vs targets length 2
          ["0x", "0x"],
          0n,
        ], { account: owner.account }),
        /Mismatched arrays/
      );
    });

    it("Should succeed propose when array lengths match", async function () {
      const { treasury, owner } = await deployAll();

      await treasury.write.propose([
        [owner.account.address, owner.account.address],
        [0n, 0n],
        ["0x", "0x"],
        0n,
      ], { account: owner.account });

      const proposalCount = await treasury.read.proposalCount();
      assert.equal(proposalCount, 1n);
    });
  });

  describe("NFTMarketplace.sol Overloaded & Batch Updates", function () {
    it("Should allow updating listing with a private buyer setting", async function () {
      const { marketplace, bragNFT, seller, privateBuyer1 } = await deployAll();

      await bragNFT.write.donate(["test nft", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

      // Create initial public listing
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("50")], { account: seller.account });

      // Update listing to set private buyer
      await marketplace.write.updateListing(
        [bragNFT.address, 0n, 1n, parseEther("40"), privateBuyer1.account.address],
        { account: seller.account }
      );

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("40")); // price
      assert.equal(getAddress(listing[3]), getAddress(privateBuyer1.account.address)); // privateBuyer
    });

    it("Should batch update multiple listings", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      // Create 2 listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("25")]],
        { account: seller.account }
      );

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(l1[1], parseEther("15"));
      assert.equal(l2[1], parseEther("25"));
    });

    it("Should batch update multiple private listings", async function () {
      const { marketplace, bragNFT, seller, privateBuyer1, privateBuyer2 } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: seller.account });

      await marketplace.write.batchUpdatePrivateListings(
        [
          [bragNFT.address, bragNFT.address],
          [0n, 1n],
          [1n, 1n],
          [parseEther("12"), parseEther("22")],
          [privateBuyer1.account.address, privateBuyer2.account.address],
        ],
        { account: seller.account }
      );

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(l1[1], parseEther("12"));
      assert.equal(getAddress(l1[3]), getAddress(privateBuyer1.account.address));
      assert.equal(l2[1], parseEther("22"));
      assert.equal(getAddress(l2[3]), getAddress(privateBuyer2.account.address));
    });
  });

  describe("ExhibitVault.sol Batch Exhibition Extensions", function () {
    it("Should batch extend exhibition duration for ERC721 tokens", async function () {
      const { bragNFT, vault, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Deposit into vault with 100s duration
      await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 0n, "0x0000000000000000000000000000000000000000000000000000000000000064"], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault.address, 1n, "0x0000000000000000000000000000000000000000000000000000000000000064"], { account: seller.account });

      const expiry0Before = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1Before = await vault.read.expiry721([bragNFT.address, 1n]);

      // Batch extend by 3600 seconds
      await vault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], 3600n],
        { account: seller.account }
      );

      const expiry0After = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(expiry0After, expiry0Before + 3600n);
      assert.equal(expiry1After, expiry1Before + 3600n);
    });

    it("Should batch extend exhibition duration for ERC1155 tokens", async function () {
      const { mock1155, vault, seller, owner } = await deployAll();

      await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([seller.account.address, 2n, 20n], { account: owner.account });

      await mock1155.write.safeTransferFrom([seller.account.address, vault.address, 1n, 5n, "0x0000000000000000000000000000000000000000000000000000000000000064"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault.address, 2n, 10n, "0x0000000000000000000000000000000000000000000000000000000000000064"], { account: seller.account });

      const exp1Before = await vault.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      const exp2Before = await vault.read.expiry1155([mock1155.address, 2n, seller.account.address]);

      await vault.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [1n, 2n], 7200n],
        { account: seller.account }
      );

      const exp1After = await vault.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      const exp2After = await vault.read.expiry1155([mock1155.address, 2n, seller.account.address]);

      assert.equal(exp1After, exp1Before + 7200n);
      assert.equal(exp2After, exp2Before + 7200n);
    });
  });

  describe("BragNFT.sol Batch Media Updates", function () {
    it("Should batch update on-chain media when called by admin", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia(
        [[0n, 1n], ["https://media1.org/model.glb", "https://media2.org/art.png"]],
        { account: owner.account }
      );

      const m0 = await bragNFT.read.onChainMedia([0n]);
      const m1 = await bragNFT.read.onChainMedia([1n]);

      assert.equal(m0, "https://media1.org/model.glb");
      assert.equal(m1, "https://media2.org/art.png");
    });

    it("Should revert batchUpdateOnChainMedia when called by non-admin", async function () {
      const { bragNFT, seller } = await deployAll();

      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n], ["https://hacker.com/evil.png"]], { account: seller.account }),
        /AccessControl/
      );
    });
  });
});
