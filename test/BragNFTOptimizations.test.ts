import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("BragNFT Optimizations", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner] = await viem.getWalletClients();
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, "0x0000000071727De22E5E9d8BAf0edAc6f37da032"]);
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        return { bragNFT };
    }

    describe("Multimedia Detection", async function () {
        const multimediaExtensions = [
            ".mp3", ".wav", ".ogg", ".m4a", ".aac", ".mp4", ".mov", ".ogv", ".m4v", ".gif", ".glb",
            ".webm", ".webp", ".gltf"
        ];

        for (const ext of multimediaExtensions) {
            it(`should detect ${ext} as multimedia`, async function () {
                const { bragNFT } = await deployFixture();
                const uri = `https://example.com/asset${ext}`;
                await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
                const tokenId = 0n;
                const tokenURI = await bragNFT.read.tokenURI([tokenId]);
                const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
                assert.ok(decoded.animation_url, `animation_url should be set for ${ext}`);
            });

            it(`should detect uppercase ${ext.toUpperCase()} as multimedia`, async function () {
                const { bragNFT } = await deployFixture();
                const uri = `https://example.com/asset${ext.toUpperCase()}`;
                await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
                const tokenId = 0n;
                const tokenURI = await bragNFT.read.tokenURI([tokenId]);
                const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
                assert.ok(decoded.animation_url, `animation_url should be set for uppercase ${ext}`);
            });
        }

        it("should detect data:audio/ prefix", async function () {
            const { bragNFT } = await deployFixture();
            const uri = "data:audio/mpeg;base64,AAA";
            await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
            const tokenURI = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
            assert.ok(decoded.animation_url);
        });

        it("should detect data:video/ prefix", async function () {
            const { bragNFT } = await deployFixture();
            const uri = "data:video/mp4;base64,AAA";
            await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
            const tokenURI = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
            assert.ok(decoded.animation_url);
        });

        it("should detect data:image/gif prefix", async function () {
            const { bragNFT } = await deployFixture();
            const uri = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
            const tokenURI = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
            assert.ok(decoded.animation_url);
        });

        it("should NOT detect .jpg as multimedia", async function () {
            const { bragNFT } = await deployFixture();
            const uri = "https://example.com/asset.jpg";
            await bragNFT.write.donate(["Test", uri], { value: parseEther("0.01") });
            const tokenURI = await bragNFT.read.tokenURI([0n]);
            const decoded = JSON.parse(atob(tokenURI.split(",")[1]));
            assert.strictEqual(decoded.animation_url, undefined);
            assert.strictEqual(decoded.image, uri);
        });
    });
});
