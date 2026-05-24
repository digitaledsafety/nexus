import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Enhancements v2", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, donor, buyer, other] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000000")]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.1"), priceFeed.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Vault 1", "Description"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { bragToken, priceFeed, treasury, bragNFT, marketplace, registry, vault, mock1155, owner, donor, buyer, other };
  }

  describe("BragNFT: Price Feed Staleness", async function () {
    it("should reject donation if price feed is stale", async function () {
      const { bragNFT, priceFeed, donor } = await deployFixture();
      const publicClient = await viem.getPublicClient();
      const block = await publicClient.getBlock();

      // Set price feed update time to 26 hours ago
      await priceFeed.write.setUpdatedAt([block.timestamp - (26n * 3600n)]);

      await assert.rejects(
          bragNFT.write.donate(["Stale test", ""], {
            account: donor.account,
            value: parseEther("0.1")
          }),
          /Stale price feed/
      );
    });

    it("should accept donation if price feed is fresh", async function () {
        const { bragNFT, priceFeed, donor } = await deployFixture();
        const publicClient = await viem.getPublicClient();
        const block = await publicClient.getBlock();

        // Set price feed update time to 1 hour ago
        await priceFeed.write.setUpdatedAt([block.timestamp - 3600n]);

        await bragNFT.write.donate(["Fresh test", ""], {
          account: donor.account,
          value: parseEther("0.1")
        });

        const tokenId = 0n;
        const [originalDonor, usdValue] = await bragNFT.read.taxRegistry([tokenId]);
        assert.equal(usdValue, 25000000000n); // 0.1 ETH * 2500 USD/ETH = 250 USD
      });
  });

  describe("BragNFT: Media Update", async function () {
    it("should allow owner to update media (URI)", async function () {
      const { bragNFT, donor } = await deployFixture();
      await bragNFT.write.donate(["Update test", "ipfs://old"], { account: donor.account, value: parseEther("0.1") });

      const tokenId = 0n;
      assert.equal(await bragNFT.read.tokenURI([tokenId]).then(uri => JSON.parse(atob(uri.split(",")[1])).image), "ipfs://old");

      await bragNFT.write.updateMedia([tokenId, "ipfs://new", false], { account: donor.account });
      assert.equal(await bragNFT.read.tokenURI([tokenId]).then(uri => JSON.parse(atob(uri.split(",")[1])).image), "ipfs://new");
    });

    it("should allow owner to update media (On-chain)", async function () {
        const { bragNFT, donor } = await deployFixture();
        await bragNFT.write.donate(["Update test", "ipfs://old"], { account: donor.account, value: parseEther("0.1") });

        const tokenId = 0n;
        await bragNFT.write.updateMedia([tokenId, "on-chain-art", true], { account: donor.account });

        const uri = await bragNFT.read.tokenURI([tokenId]);
        const json = JSON.parse(atob(uri.split(",")[1]));
        assert.equal(json.image, "on-chain-art");
        assert.equal(await bragNFT.read.onChainMedia([tokenId]), "on-chain-art");
      });

    it("should prevent non-owner from updating media", async function () {
        const { bragNFT, donor, other } = await deployFixture();
        await bragNFT.write.donate(["Fail test", "ipfs://old"], { account: donor.account, value: parseEther("0.1") });

        const tokenId = 0n;
        await assert.rejects(
            bragNFT.write.updateMedia([tokenId, "ipfs://malicious", false], { account: other.account }),
            /Not the owner/
        );
    });
  });

  describe("NFTMarketplace: Private Listings", async function () {
    it("should allow target buyer to buy from private listing", async function () {
      const { bragNFT, marketplace, bragToken, donor, buyer, owner } = await deployFixture();

      await bragNFT.write.donate(["Private test", ""], { account: donor.account, value: parseEther("0.1") });
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId], { account: donor.account });

      await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10"), buyer.account.address], { account: donor.account });

      // Fund buyer
      await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

      await marketplace.write.buyFromListing([bragNFT.address, tokenId, donor.account.address], { account: buyer.account });
      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    });

    it("should prevent non-target buyer from buying from private listing", async function () {
        const { bragNFT, marketplace, bragToken, donor, buyer, other, owner } = await deployFixture();

        await bragNFT.write.donate(["Private test", ""], { account: donor.account, value: parseEther("0.1") });
        const tokenId = 0n;
        await bragNFT.write.approve([marketplace.address, tokenId], { account: donor.account });

        await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10"), buyer.account.address], { account: donor.account });

        // Fund other
        await bragToken.write.transfer([other.account.address, parseEther("10")], { account: owner.account });
        await bragToken.write.approve([marketplace.address, parseEther("10")], { account: other.account });

        await assert.rejects(
            marketplace.write.buyFromListing([bragNFT.address, tokenId, donor.account.address], { account: other.account }),
            /Not the target buyer/
        );
      });
  });

  describe("ExhibitVault: Batch Exhibit Helpers", async function () {
    it("should batch exhibit ERC721 tokens", async function () {
      const { bragNFT, vault, donor } = await deployFixture();

      await bragNFT.write.donate(["nft1", ""], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: donor.account, value: parseEther("0.1") });

      await bragNFT.write.setApprovalForAll([vault.address, true], { account: donor.account });

      await vault.write.batchExhibit721([bragNFT.address, [0n, 1n], 0n], { account: donor.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault.address));
      assert.equal(await vault.read.owner721([bragNFT.address, 0n]), getAddress(donor.account.address));
      assert.equal(await vault.read.owner721([bragNFT.address, 1n]), getAddress(donor.account.address));
    });

    it("should batch exhibit ERC1155 tokens", async function () {
        const { mock1155, vault, donor, owner } = await deployFixture();

        await mock1155.write.mint([donor.account.address, 1n, 10n], { account: owner.account });
        await mock1155.write.mint([donor.account.address, 2n, 20n], { account: owner.account });

        await mock1155.write.setApprovalForAll([vault.address, true], { account: donor.account });

        await vault.write.batchExhibit1155([mock1155.address, [1n, 2n], [5n, 10n], 0n], { account: donor.account });

        assert.equal(await mock1155.read.balanceOf([vault.address, 1n]), 5n);
        assert.equal(await mock1155.read.balanceOf([vault.address, 2n]), 10n);
        assert.equal(await vault.read.balances1155([mock1155.address, 1n, donor.account.address]), 5n);
        assert.equal(await vault.read.balances1155([mock1155.address, 2n, donor.account.address]), 10n);
      });
  });
});
