import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT Optimizations", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        return {
            owner,
            treasury,
            bragNFT,
            mockPriceFeed
        };
    }

    describe("Multimedia Detection Optimization", async function () {
        it("should detect various multimedia formats", async function () {
            const { bragNFT } = await deployFixture();

            const formats = [
                "art.webp",
                "video.mp4",
                "model.glb",
                "model.gltf",
                "data:audio/mpeg;base64,abc",
                "data:video/mp4;base64,abc",
                "data:image/gif;base64,abc",
                "ART.WEBP", // case sensitivity
            ];

            for (const format of formats) {
                await bragNFT.write.donate(["Test", format], { value: parseEther("0.01") });
                const tokenId = await bragNFT.read.totalSupply() - 1n;
                const uri = await bragNFT.read.tokenURI([tokenId]);
                const decoded = JSON.parse(atob(uri.split(",")[1]));
                assert.ok(decoded.animation_url, `Should detect ${format} as multimedia`);
                assert.equal(decoded.animation_url.toLowerCase(), format.toLowerCase());
            }
        });

        it("should NOT detect plain images as multimedia", async function () {
            const { bragNFT } = await deployFixture();

            const formats = [
                "image.jpg",
                "photo.png",
                "data:image/png;base64,abc",
            ];

            for (const format of formats) {
                await bragNFT.write.donate(["Test", format], { value: parseEther("0.01") });
                const tokenId = await bragNFT.read.totalSupply() - 1n;
                const uri = await bragNFT.read.tokenURI([tokenId]);
                const decoded = JSON.parse(atob(uri.split(",")[1]));
                assert.ok(!decoded.animation_url, `Should NOT detect ${format} as multimedia`);
                assert.equal(decoded.image, format);
            }
        });
    });

    describe("Initial Glow State", async function () {
        it("should start with a glowing state", async function () {
            const { bragNFT } = await deployFixture();

            await bragNFT.write.donate(["Test", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            const glowing = await bragNFT.read.isGlowing([tokenId]);
            assert.ok(glowing, "New NFT should be glowing");

            const uri = await bragNFT.read.tokenURI([tokenId]);
            const decoded = JSON.parse(atob(uri.split(",")[1]));
            const glowingAttr = decoded.attributes.find((a: any) => a.trait_type === "Glowing");
            assert.equal(glowingAttr.value, "Yes");
        });
    });
});
