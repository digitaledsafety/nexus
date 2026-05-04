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

    describe("Multimedia Detection", async function () {
        it("should detect .mp4 as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "video.mp4"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "Should have animation_url");
        });

        it("should detect .webp as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "image.webp"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "Should have animation_url");
        });

        it("should detect .glb as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "model.glb"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "Should have animation_url");
        });

        it("should detect .gltf as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "model.gltf"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "Should have animation_url");
        });

        it("should detect data:audio prefix", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "data:audio/mp3;base64,AAAA"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "Should have animation_url");
        });

        it("should detect data:video prefix", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "data:video/mp4;base64,AAAA"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(decoded.animation_url, "Should have animation_url");
        });

        it("should NOT detect plain .png as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            await bragNFT.write.donate(["Test", "image.png"], { value: parseEther("0.01") });
            const uri = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            assert.ok(!decoded.animation_url, "Should NOT have animation_url");
        });
    });

    describe("Max Supply", async function () {
        it("should have a default max supply of 10000", async function () {
            const { bragNFT } = await deployFixture();
            const maxSupply = await bragNFT.read.maxSupply();
            assert.equal(maxSupply, 10000n);
        });
    });
});
