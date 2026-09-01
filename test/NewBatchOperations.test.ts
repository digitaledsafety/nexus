import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes, getAddress } from "viem";

describe("New Batch Operations & Security Hardening", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, buyer2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "Description 1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Description 2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, buyer2, treasury };
  }

  describe("NFTMarketplace Security & Overloaded/Batch Operations", function () {
    it("Should revert createOffer and updateOffer for ERC721 if amount != 1", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

      await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
      await bragNFT.write.donate(["test NFT", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const offerPrice = parseEther("5");
      await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer.account });

      // createOffer with amount 2 on ERC721 should revert
      await assert.rejects(
        marketplace.write.createOffer([bragNFT.address, tokenId, 2n, offerPrice], { account: buyer.account }),
        /ERC721 offer amount must be 1/
      );

      // Create valid offer with amount 1
      await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], { account: buyer.account });

      // updateOffer with amount 2 on ERC721 should revert
      await assert.rejects(
        marketplace.write.updateOffer([bragNFT.address, tokenId, 2n, parseEther("10")], { account: buyer.account }),
        /ERC721 offer amount must be 1/
      );
    });

    it("Should prevent seller from updating listing if they no longer own the NFT", async function () {
      const { marketplace, bragNFT, seller, buyer, owner } = await deployAll();

      await bragNFT.write.donate(["test NFT", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;

      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")], { account: seller.account });

      // Transfer NFT away to owner/another wallet
      await bragNFT.write.transferFrom([seller.account.address, owner.account.address, tokenId], { account: seller.account });

      // Updating listing should fail because seller no longer owns it
      await assert.rejects(
        marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("20")], { account: seller.account }),
        /You do not own this NFT/
      );
    });

    it("Should allow updating listing with privateBuyer and batch updating listings", async function () {
      const { marketplace, bragNFT, seller, buyer, buyer2 } = await deployAll();

      await bragNFT.write.donate(["NFT 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 2", ""], { account: seller.account, value: parseEther("0.1") });

      await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("15")], { account: seller.account });

      // Update listing 0 with privateBuyer = buyer
      await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseEther("8"), buyer.account.address], { account: seller.account });

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      assert.equal(listing0[1], parseEther("8")); // price is index 1
      assert.equal(listing0[3].toLowerCase(), buyer.account.address.toLowerCase()); // privateBuyer is index 3

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("5"), parseEther("12")]],
        { account: seller.account }
      );

      const updated0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const updated1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);
      assert.equal(updated0[1], parseEther("5"));
      assert.equal(updated1[1], parseEther("12"));
    });
  });

  describe("ExhibitVault Batch Operations", function () {
    it("Should batchMove721WithDuration and batchMove1155WithDuration", async function () {
      const { bragNFT, mock1155, vault1, vault2, seller } = await deployAll();

      // Mint 2 ERC721s
      await bragNFT.write.donate(["NFT 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 2", ""], { account: seller.account, value: parseEther("0.1") });

      // Mint ERC1155s
      await mock1155.write.mint([seller.account.address, 1n, 100n]);
      await mock1155.write.mint([seller.account.address, 2n, 100n]);

      // Exhibit into vault1
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 50n, "0x"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 30n, "0x"], { account: seller.account });

      // Batch move ERC721s with duration
      const duration = 86400n; // 1 day
      await vault1.write.batchMove721WithDuration(
        [[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, duration],
        { account: seller.account }
      );

      assert.equal(getAddress(await vault2.read.owner721([bragNFT.address, 0n])), getAddress(seller.account.address));
      assert.equal(getAddress(await vault2.read.owner721([bragNFT.address, 1n])), getAddress(seller.account.address));

      // Batch move ERC1155s with duration
      await vault1.write.batchMove1155WithDuration(
        [[mock1155.address, mock1155.address], [1n, 2n], [20n, 10n], vault2.address, duration],
        { account: seller.account }
      );

      assert.equal(await vault2.read.balances1155([mock1155.address, 1n, seller.account.address]), 20n);
      assert.equal(await vault2.read.balances1155([mock1155.address, 2n, seller.account.address]), 10n);
    });

    it("Should batchExtendExhibition721 and batchExtendExhibition1155", async function () {
      const { bragNFT, mock1155, vault1, seller } = await deployAll();

      await bragNFT.write.donate(["NFT 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 2", ""], { account: seller.account, value: parseEther("0.1") });
      await mock1155.write.mint([seller.account.address, 1n, 100n]);
      await mock1155.write.mint([seller.account.address, 2n, 100n]);

      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
      await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 50n, "0x"], { account: seller.account });
      await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 30n, "0x"], { account: seller.account });

      const extension = 3600n; // 1 hour
      await vault1.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], extension],
        { account: seller.account }
      );

      const expiry0 = await vault1.read.expiry721([bragNFT.address, 0n]);
      const expiry1 = await vault1.read.expiry721([bragNFT.address, 1n]);
      assert(expiry0 > 0n);
      assert(expiry1 > 0n);

      await vault1.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [1n, 2n], extension],
        { account: seller.account }
      );

      const expiry1155_1 = await vault1.read.expiry1155([mock1155.address, 1n, seller.account.address]);
      const expiry1155_2 = await vault1.read.expiry1155([mock1155.address, 2n, seller.account.address]);
      assert(expiry1155_1 > 0n);
      assert(expiry1155_2 > 0n);
    });
  });

  describe("BragNFT and BragToken Batch Admin Functions", function () {
    it("Should batchUpdateOnChainMedia in BragNFT", async function () {
      const { bragNFT, owner, seller } = await deployAll();

      await bragNFT.write.donate(["NFT 1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["NFT 2", ""], { account: seller.account, value: parseEther("0.1") });

      // Non-admin should revert
      await assert.rejects(
        bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["media1", "media2"]], { account: seller.account }),
        /AccessControl/
      );

      // Admin updates on-chain media
      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], ["ipfs://media1", "ipfs://media2"]], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "ipfs://media1");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "ipfs://media2");
    });

    it("Should batchMint in BragToken", async function () {
      const { bragToken, owner, buyer, buyer2 } = await deployAll();

      // Non-minter should revert
      await assert.rejects(
        bragToken.write.batchMint([[buyer.account.address, buyer2.account.address], [parseEther("10"), parseEther("20")]], { account: buyer.account }),
        /AccessControl/
      );

      // Admin (who has MINTER_ROLE) mints to multiple recipients
      await bragToken.write.batchMint([[buyer.account.address, buyer2.account.address], [parseEther("100"), parseEther("200")]], { account: owner.account });

      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("100"));
      assert.equal(await bragToken.read.balanceOf([buyer2.account.address]), parseEther("200"));
    });
  });
});
