import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex, encodeFunctionData, decodeEventLog } from "viem";

describe("Refinement & New Features", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount, seller] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        return {
            owner,
            otherAccount,
            seller,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            mockPriceFeed
        };
    }

    describe("Marketplace Offer Expiration", async function () {
        it("should enforce offer expiration", async function () {
            const { otherAccount, seller, bragToken, marketplace, bragNFT } = await deployFixture();
            const testClient = await viem.getTestClient();

            // Seller mints NFT
            await bragNFT.write.donate(["Sale", "uri"], { account: seller.account, value: parseEther("0.01") });
            const tokenId = 0n;

            // Fund buyer
            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            // Create offer that expires in 1 hour
            const publicClient = await viem.getPublicClient();
            const block = await publicClient.getBlock();
            const expiry = block.timestamp + 3600n;

            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: otherAccount.account });

            // Advance time past expiry
            await testClient.increaseTime({ seconds: 4000 });
            await testClient.mine({ blocks: 1 });

            // Accept should fail
            await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });
            await assert.rejects(
                marketplace.write.acceptOffer([bragNFT.address, tokenId, otherAccount.account.address], { account: seller.account }),
                /Offer expired/
            );
        });

        it("should allow updating expiry", async function () {
             const { otherAccount, seller, bragToken, marketplace, bragNFT } = await deployFixture();

             await bragNFT.write.donate(["Sale", "uri"], { account: seller.account, value: parseEther("0.01") });
             const tokenId = 0n;
             await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
             await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

             const publicClient = await viem.getPublicClient();
             const block = await publicClient.getBlock();
             const expiry = block.timestamp + 3600n;

             await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: otherAccount.account });

             const newExpiry = expiry + 3600n;
             await marketplace.write.updateOffer([bragNFT.address, tokenId, 1n, parseEther("60"), newExpiry], { account: otherAccount.account });

             const offer = await marketplace.read.offers([bragNFT.address, tokenId, otherAccount.account.address]);
             assert.equal(offer[3], newExpiry);
        });
    });

    describe("Batch Accept Offers", async function () {
        it("should accept multiple offers in one transaction", async function () {
            const { otherAccount, seller, bragToken, marketplace, bragNFT } = await deployFixture();

            // Seller mints two NFTs
            await bragNFT.write.donate(["NFT 1", "uri1"], { account: seller.account, value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT 2", "uri2"], { account: seller.account, value: parseEther("0.01") });

            // Fund buyer
            await bragToken.write.transfer([otherAccount.account.address, parseEther("200")]);
            await bragToken.write.approve([marketplace.address, parseEther("200")], { account: otherAccount.account });

            // Create offers
            await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("50")], { account: otherAccount.account });
            await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("60")], { account: otherAccount.account });

            // Approve marketplace
            await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

            // Batch accept
            await marketplace.write.batchAcceptOffers([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                [otherAccount.account.address, otherAccount.account.address]
            ], { account: seller.account });

            assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(otherAccount.account.address));
            assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(otherAccount.account.address));
        });
    });

    describe("Optimized Multimedia Detection", async function () {
        it("should detect various formats case-insensitively", async function () {
            const { bragNFT } = await deployFixture();

            const formats = [
                "https://example.com/art.WEBP",
                "https://example.com/video.mp4",
                "https://example.com/model.glb",
                "https://example.com/scene.GLTF",
                "data:audio/mp3;base64,AAA",
                "data:video/webm;base64,BBB",
                "data:image/gif;base64,CCC"
            ];

            for (let i = 0; i < formats.length; i++) {
                await bragNFT.write.donate(["Test " + i, formats[i]], { value: parseEther("0.01") });
                const uri = await bragNFT.read.tokenURI([BigInt(i)]);
                const decoded = JSON.parse(atob(uri.split(",")[1]));
                assert.ok(decoded.animation_url, `animation_url should be set for ${formats[i]}`);
            }
        });

        it("should NOT detect static images as multimedia", async function () {
             const { bragNFT } = await deployFixture();

             const staticImages = [
                 "https://example.com/art.png",
                 "https://example.com/photo.JPG",
                 "data:image/png;base64,DDD"
             ];

             for (let i = 0; i < staticImages.length; i++) {
                await bragNFT.write.donate(["Static " + i, staticImages[i]], { value: parseEther("0.01") });
                const uri = await bragNFT.read.tokenURI([BigInt(i)]);
                const decoded = JSON.parse(atob(uri.split(",")[1]));
                assert.ok(!decoded.animation_url, `animation_url should NOT be set for ${staticImages[i]}`);
                assert.equal(decoded.image, staticImages[i]);
            }
        });
    });
});
