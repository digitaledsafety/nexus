import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("BragNFT Multimedia & Glow", function () {
  async function setup() {
    const { viem } = await network.connect();
    const [owner] = await viem.getWalletClients();
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        owner.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    return { viem, owner, bragNFT };
  }

  describe("Multimedia Detection", function () {
    it("should detect multimedia with query parameters", async function () {
      const { bragNFT, owner } = await setup();

      const uris = [
        "https://example.com/video.mp4?v=1",
        "ipfs://CID/audio.wav#fragment",
        "https://example.com/model.glb?auth=token&expires=123"
      ];

      for (const uri of uris) {
        await bragNFT.write.donate(["test", uri], { value: parseEther("0.1"), account: owner.account });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadataJson = atob(metadataBase64.split(",")[1]);
        const metadata = JSON.parse(metadataJson);

        assert.ok(metadata.animation_url, `Should have animation_url for ${uri}`);
        assert.equal(metadata.animation_url, uri);
      }
    });

    it("should NOT detect multimedia for non-media extensions with params", async function () {
        const { bragNFT, owner } = await setup();

        const uri = "https://example.com/image.png?v=mp4"; // mp4 is in query, not extension

        await bragNFT.write.donate(["test", uri], { value: parseEther("0.1"), account: owner.account });
        const tokenId = await bragNFT.read.totalSupply() - 1n;
        const metadataBase64 = await bragNFT.read.tokenURI([tokenId]);
        const metadataJson = atob(metadataBase64.split(",")[1]);
        const metadata = JSON.parse(metadataJson);

        assert.ok(!metadata.animation_url, `Should NOT have animation_url for ${uri}`);
    });
  });

  describe("Glow Duration", function () {
    it("should allow changing glow duration", async function () {
      const { bragNFT, owner } = await setup();

      // Default is 30 days
      assert.equal(await bragNFT.read.glowDuration(), BigInt(30 * 24 * 60 * 60));

      await bragNFT.write.setGlowDuration([BigInt(7 * 24 * 60 * 60)], { account: owner.account });
      assert.equal(await bragNFT.read.glowDuration(), BigInt(7 * 24 * 60 * 60));
    });
  });
});
