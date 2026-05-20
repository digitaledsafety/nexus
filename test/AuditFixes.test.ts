import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Audit Fixes & Optimizations", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, buyer, treasuryAccount] = await viem.getWalletClients();

    // Deploy Mocks
    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500/ETH
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, parseEther("1000000000")]);

    // Deploy BragNFT
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasuryAccount.account.address,
      parseEther("0.01"),
      mockPriceFeed.address,
    ]);
    await bragNFT.write.setBragToken([bragToken.address]);
    await bragToken.write.grantRole([keccak256(toBytes("MINTER_ROLE")), bragNFT.address]);

    // Deploy Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address
    ]);

    return {
      owner, donor, buyer, treasuryAccount,
      bragNFT, bragToken, marketplace
    };
  }

  describe("BragNFT UTF-8 Truncation", async function () {
    it("Should safely truncate long messages in SVG", async function () {
      const { donor, bragNFT } = await deployContracts();

      const longMessage = "This is a very long message that should be truncated in the SVG to avoid layout issues in the generated image.";
      await bragNFT.write.donate([longMessage, ""], {
        value: parseEther("0.1"),
        account: donor.account,
      });

      const tokenUri = await bragNFT.read.tokenURI([0n]);
      const json = JSON.parse(Buffer.from(tokenUri.split(",")[1], "base64").toString());

      const svgBase64 = json.image.split(",")[1];
      const svg = Buffer.from(svgBase64, "base64").toString();

      // Should be truncated to 32 bytes
      assert.ok(svg.includes("This is a very long message that"));
      assert.ok(!svg.includes("should be truncated"));
    });

    it("Should not split multi-byte UTF-8 characters during truncation", async function () {
      const { donor, bragNFT } = await deployContracts();

      // 🦀 is 4 bytes: 0xf0 0x9f 0xa6 0x80
      // "A" * 31 + "🦀" = 35 bytes. Truncating to 32 should keep 31 "A"s and drop the 🦀
      const boundaryMessage = "A".repeat(31) + "🦀🦀🦀";
      await bragNFT.write.donate([boundaryMessage, ""], {
        value: parseEther("0.1"),
        account: donor.account,
      });

      const tokenUri = await bragNFT.read.tokenURI([0n]);
      const json = JSON.parse(Buffer.from(tokenUri.split(",")[1], "base64").toString());
      const svg = Buffer.from(json.image.split(",")[1], "base64").toString();

      assert.ok(svg.includes("A".repeat(31)));
      assert.ok(!svg.includes("🦀"));
    });
  });

  describe("NFTMarketplace Gas Optimization", async function () {
    it("Should correctly aggregate refunds in cancelOffers", async function () {
      const { donor, buyer, bragNFT, bragToken, marketplace, owner } = await deployContracts();

      // Donor mints 2 NFTs
      await bragNFT.write.donate(["NFT 1", "uri1"], { value: parseEther("0.1"), account: donor.account });
      await bragNFT.write.donate(["NFT 2", "uri2"], { value: parseEther("0.1"), account: donor.account });

      // Give buyer tokens
      await bragToken.write.mint([buyer.account.address, parseEther("1000")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: buyer.account });

      // Buyer makes 2 offers
      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("100")], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("200")], { account: buyer.account });

      const balanceBefore = await bragToken.read.balanceOf([buyer.account.address]);

      // Batch cancel
      await marketplace.write.cancelOffers([
        [bragNFT.address, bragNFT.address],
        [0n, 1n]
      ], { account: buyer.account });

      const balanceAfter = await bragToken.read.balanceOf([buyer.account.address]);
      assert.equal(balanceAfter - balanceBefore, parseEther("300"));

      // Verify offers are deleted
      const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      const offer1 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);
      assert.equal(offer0[0], 0n);
      assert.equal(offer1[0], 0n);
    });
  });

  describe("BragNFT Supply Limits", async function () {
    it("Should enforce maxSupply", async function () {
      const { donor, bragNFT, owner } = await deployContracts();

      await bragNFT.write.setMaxSupply([2n], { account: owner.account });

      await bragNFT.write.donate(["1", ""], { value: parseEther("0.01"), account: donor.account });
      await bragNFT.write.donate(["2", ""], { value: parseEther("0.01"), account: donor.account });

      await assert.rejects(
        bragNFT.write.donate(["3", ""], { value: parseEther("0.01"), account: donor.account }),
        /Max supply reached/
      );
    });
  });
});
