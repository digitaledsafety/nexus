import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("BragNFT Optimizations", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner] = await viem.getWalletClients();
        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        return { bragNFT };
    }

    it("should have a maxSupply of 10000", async function () {
        const { bragNFT } = await deployFixture();
        const maxSupply = await bragNFT.read.maxSupply();
        assert.equal(maxSupply, 10000n);
    });

    describe("Multimedia Detection", async function () {
        it("should detect .glb as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["3D Model", "https://example.com/model.glb"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "animation_url should be set for .glb");
            assert.equal(decoded.animation_url, "https://example.com/model.glb");
        });

        it("should detect .gltf as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["3D Model", "https://example.com/model.gltf"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "animation_url should be set for .gltf");
            assert.equal(decoded.animation_url, "https://example.com/model.gltf");
        });

        it("should detect audio data URI as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            const audioData = "data:audio/mp3;base64,SUQz...";
            await bragNFT.write.donate(["Audio", audioData], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "animation_url should be set for audio data URI");
            assert.equal(decoded.animation_url, audioData);
        });

        it("should detect video data URI as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            const videoData = "data:video/mp4;base64,AAAA...";
            await bragNFT.write.donate(["Video", videoData], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "animation_url should be set for video data URI");
            assert.equal(decoded.animation_url, videoData);
        });

        it("should detect gif data URI as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            const gifData = "data:image/gif;base64,R0lG...";
            await bragNFT.write.donate(["GIF", gifData], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "animation_url should be set for gif data URI");
            assert.equal(decoded.animation_url, gifData);
        });
    });
});
