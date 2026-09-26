import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("New Batch Features & Safety Validations", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155");

    await registry.write.verifyVault([vault1.address, 1, "Vault 1", "Primary Vault"], { account: owner.account });
    await registry.write.verifyVault([vault2.address, 1, "Vault 2", "Secondary Vault"], { account: owner.account });

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, buyer2, treasury };
  }

  describe("NFTMarketplace - ERC721 Offer Validation & Batch Listing Updates", function () {
    it("Should reject ERC721 offers with amount > 1 in createOffer and updateOffer", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

      await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });

      await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

      // Attempt createOffer with amount = 2 on ERC721
      await assert.rejects(
        marketplace.write.createOffer([bragNFT.address, 0n, 2n, parseEther("1")], { account: buyer.account }),
        /ERC721 offer amount must be 1/
      );

      // Create valid offer with amount = 1
      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });

      // Attempt updateOffer with newAmount = 2 on ERC721
      await assert.rejects(
        marketplace.write.updateOffer([bragNFT.address, 0n, 2n, parseEther("2")], { account: buyer.account }),
        /ERC721 offer amount must be 1/
      );
    });

    it("Should update existing listing with private buyer using overloaded updateListing", async function () {
      const { marketplace, bragNFT, seller, buyer, buyer2 } = await deployAll();

      await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });

      // Overloaded updateListing specifying buyer as privateBuyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("1.5"), buyer.account.address], { account: seller.account });

      const listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing[1], parseEther("1.5")); // price
      assert.equal(listing[3], getAddress(buyer.account.address)); // privateBuyer
    });

    it("Should batch update listings and private listings", async function () {
      const { marketplace, bragNFT, seller, buyer } = await deployAll();

      await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.2"), parseEther("2.5")]],
        { account: seller.account }
      );

      const l1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const l2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(l1[1], parseEther("1.2"));
      assert.equal(l2[1], parseEther("2.5"));

      // Batch update private listings
      await marketplace.write.batchUpdatePrivateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("1.5"), parseEther("3.0")], [buyer.account.address, buyer.account.address]],
        { account: seller.account }
      );

      const pl1 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const pl2 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(pl1[1], parseEther("1.5"));
      assert.equal(pl1[3], getAddress(buyer.account.address));
      assert.equal(pl2[1], parseEther("3.0"));
      assert.equal(pl2[3], getAddress(buyer.account.address));
    });
  });

  describe("ExhibitVault - Batch Extension & Move Duration Operations", function () {
    it("Should batch extend exhibition duration for ERC721 and ERC1155 tokens", async function () {
      const { vault1, bragNFT, mock1155, seller, owner } = await deployAll();

      await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      // Exhibit 2 ERC721 tokens
      await bragNFT.write.approve([vault1.address, 0n], { account: seller.account });
      await bragNFT.write.approve([vault1.address, 1n], { account: seller.account });
      await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: seller.account });

      // Batch extend ERC721 exhibition by 7200 seconds
      await vault1.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 7200n], { account: seller.account });

      const expiry0 = await vault1.read.expiry721([bragNFT.address, 0n]);
      const expiry1 = await vault1.read.expiry721([bragNFT.address, 1n]);
      assert.ok(expiry0 > 0n);
      assert.ok(expiry1 > 0n);

      // Exhibit ERC1155 tokens
      await mock1155.write.mint([seller.account.address, 10n, 100n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });
      await vault1.write.batchExhibit1155([[mock1155.address], [10n], [50n], 3600n], { account: seller.account });

      // Batch extend ERC1155 exhibition
      await vault1.write.batchExtendExhibition1155([[mock1155.address], [10n], 3600n], { account: seller.account });
      const exp1155 = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
      assert.ok(exp1155 > 0n);
    });

    it("Should batch move ERC721 and ERC1155 tokens with custom durations", async function () {
      const { vault1, vault2, bragNFT, mock1155, seller, owner } = await deployAll();

      await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.approve([vault1.address, 0n], { account: seller.account });
      await bragNFT.write.approve([vault1.address, 1n], { account: seller.account });
      await vault1.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 0n], { account: seller.account });

      // Batch move ERC721 to vault2 with duration
      await vault1.write.batchMove721WithDuration([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 3600n], { account: seller.account });

      assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
      assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(seller.account.address));

      // ERC1155 Batch move with duration
      await mock1155.write.mint([seller.account.address, 20n, 100n], { account: owner.account });
      await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });
      await vault1.write.batchExhibit1155([[mock1155.address], [20n], [50n], 0n], { account: seller.account });

      await vault1.write.batchMove1155WithDuration([[mock1155.address], [20n], [50n], vault2.address, 7200n], { account: seller.account });
      assert.equal(await vault2.read.balances1155([mock1155.address, 20n, seller.account.address]), 50n);
    });
  });

  describe("BragNFT - Batch On-Chain Media Updates", function () {
    it("Should allow admin to batch update on-chain media", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["nft0", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["data:image/png;base64,media0", "data:image/png;base64,media1"]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "data:image/png;base64,media0");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "data:image/png;base64,media1");
    });

    it("Should reject batchUpdateOnChainMedia from non-admin accounts", async function () {
      const { bragNFT, seller } = await deployAll();
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n], ["media"]], { account: seller.account }),
        /AccessControl/
      );
    });
  });
});
