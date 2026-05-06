import assert from "node:assert/strict";
import { describe, it } from "node:test";
import hre from "hardhat";
import { parseEther } from "viem";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

describe("BragNFT Enhancements", async function () {
  const { viem } = await hre.network.connect();

  async function deployNFTFixture() {
    const [owner] = await viem.getWalletClients();
    const nft = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.001"), ZERO_ADDRESS]);
    return { nft, owner };
  }

  describe("_isMultimedia", function () {
    it("Should correctly detect multimedia with query parameters", async function () {
      const { nft } = await deployNFTFixture();

      const mediaWithQuery = "https://example.com/video.mp4?v=123";
      await nft.write.donate([ "Message", mediaWithQuery, false ], { value: parseEther("0.01") });
      const tokenId = 0n;

      const uri = await nft.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      assert.equal(json.animation_url, mediaWithQuery);
    });

    it("Should correctly detect multimedia with fragments", async function () {
        const { nft } = await deployNFTFixture();

        const mediaWithFragment = "https://example.com/audio.mp3#t=10";
        await nft.write.donate([ "Message", mediaWithFragment, false ], { value: parseEther("0.01") });
        const tokenId = 0n;

        const uri = await nft.read.tokenURI([tokenId]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
        assert.equal(json.animation_url, mediaWithFragment);
      });

      it("Should NOT detect plain images with query params as multimedia", async function () {
        const { nft } = await deployNFTFixture();

        const imageWithQuery = "https://example.com/image.png?size=large";
        await nft.write.donate([ "Message", imageWithQuery, false ], { value: parseEther("0.01") });
        const tokenId = 0n;

        const uri = await nft.read.tokenURI([tokenId]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
        assert.equal(json.animation_url, undefined);
        assert.equal(json.image, imageWithQuery);
      });
  });
});
