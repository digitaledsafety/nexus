import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("BragNFT Optimizations", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner] = await viem.getWalletClients();
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
        const treasury = "0x0000000000000000000000000000000000000001";
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury, parseEther("0.01"), mockPriceFeed.address]);
        return { bragNFT };
    }

    async function checkMultimedia(bragNFT: any, uri: string) {
        await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
        const tokenId = await bragNFT.read.nextTokenId() - 1n;
        const tokenURI = await bragNFT.read.tokenURI([tokenId]);
        const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
        return !!decoded.animation_url;
    }

    it("should detect various multimedia formats correctly", async function () {
        const { bragNFT } = await deployFixture();

        // Standard images (should NOT have animation_url)
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.png"), false, ".png failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.jpg"), false, ".jpg failed");

        // Multimedia extensions
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.mp3"), true, ".mp3 failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.mp4"), true, ".mp4 failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.gif"), true, ".gif failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.webm"), true, ".webm failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.webp"), true, ".webp failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.glb"), true, ".glb failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.gltf"), true, ".gltf failed");

        // Case insensitivity
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.MP4"), true, ".MP4 failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "https://example.com/art.GlB"), true, ".GlB failed");

        // Data URIs
        assert.strictEqual(await checkMultimedia(bragNFT, "data:audio/mpeg;base64,AAA"), true, "data:audio failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "data:video/mp4;base64,AAA"), true, "data:video failed");
        assert.strictEqual(await checkMultimedia(bragNFT, "data:image/gif;base64,AAA"), true, "data:image/gif failed");
    });
});
