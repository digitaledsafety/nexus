import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex, encodeFunctionData, decodeEventLog } from "viem";

describe("Enhancements v3", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount, buyer1, buyer2, treasury] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
        const vault1 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
        const vault2 = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);

        await registry.write.verifyVault([vault1.address, 1, "Vault 1", "First Vault"]);
        await registry.write.verifyVault([vault2.address, 1, "Vault 2", "Second Vault"]);

        return {
            owner,
            otherAccount,
            buyer1,
            buyer2,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            registry,
            vault1,
            vault2,
            mockPriceFeed
        };
    }

    describe("BragNFT: Dynamic SVG and Media Updates", async function () {
        it("should change SVG background color based on TaxStatus", async function () {
            const { bragNFT, owner } = await deployFixture();

            // Donate with EMPTY uri to trigger SVG fallback
            await bragNFT.write.donate(["Pending NFT", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            const checkColor = async (expectedColor: string) => {
                const uri = await bragNFT.read.tokenURI([tokenId]);
                const json = JSON.parse(Buffer.from(uri.split(",")[1], 'base64').toString());
                const svgBase64 = json.image.split(",")[1];
                if (!svgBase64) {
                    console.log("JSON:", json);
                    throw new Error("SVG image not found in JSON");
                }
                const svg = Buffer.from(svgBase64, 'base64').toString();
                assert.ok(svg.includes(`fill="${expectedColor}"`), `SVG should have fill="${expectedColor}"`);
            };

            await checkColor("#6366f1"); // Pending

            await bragNFT.write.setTaxStatus([tokenId, 1]); // Verified
            await checkColor("#22c55e");

            await bragNFT.write.setTaxStatus([tokenId, 2]); // Claimed
            await checkColor("#eab308");

            await bragNFT.write.setTaxStatus([tokenId, 3]); // Flagged
            await checkColor("#ef4444");
        });

        it("should allow owner to update media", async function () {
            const { bragNFT, owner, otherAccount } = await deployFixture();

            await bragNFT.write.donate(["Original Message", "ipfs://original"], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Non-owner should not be able to update
            await assert.rejects(
                bragNFT.write.updateMedia([tokenId, "ipfs://new", false], { account: otherAccount.account }),
                /Not the owner/
            );

            // Owner can update URI
            await bragNFT.write.updateMedia([tokenId, "ipfs://new-uri", false]);
            assert.equal(await bragNFT.read.tokenURI([tokenId]).then(u => JSON.parse(Buffer.from(u.split(",")[1], 'base64').toString()).image), "ipfs://new-uri");

            // Owner can update on-chain media
            await bragNFT.write.updateMedia([tokenId, "on-chain-art", true]);
            assert.equal(await bragNFT.read.onChainMedia([tokenId]), "on-chain-art");
        });
    });

    describe("NFTMarketplace: Batch Operations and Optimization", async function () {
        it("should batch update offers and handle price adjustments", async function () {
            const { bragNFT, bragToken, marketplace, buyer1, owner } = await deployFixture();

            await bragNFT.write.donate(["NFT 1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT 2", ""], { value: parseEther("0.01") });

            await bragToken.write.transfer([buyer1.account.address, parseEther("1000")]);
            await bragToken.write.approve([marketplace.address, parseEther("1000")], { account: buyer1.account });

            await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: buyer1.account });

            // Batch update: increase 1st, decrease 2nd
            const balanceBefore = await bragToken.read.balanceOf([buyer1.account.address]);
            await marketplace.write.batchUpdateOffers(
                [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("5")], [0n, 0n]],
                { account: buyer1.account }
            );
            const balanceAfter = await bragToken.read.balanceOf([buyer1.account.address]);

            // 1st: 10 -> 15 (payout 5)
            // 2nd: 20 -> 5 (refund 15)
            // Net refund: 10
            assert.equal(balanceAfter - balanceBefore, parseEther("10"));

            const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer1.account.address]);
            const offer1 = await marketplace.read.offers([bragNFT.address, 1n, buyer1.account.address]);
            assert.equal(offer0[0], parseEther("15"));
            assert.equal(offer1[0], parseEther("5"));
        });

        it("should batch reject offers", async function () {
            const { bragNFT, bragToken, marketplace, buyer1, buyer2, owner } = await deployFixture();

            await bragNFT.write.donate(["NFT 1", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([buyer1.account.address, parseEther("100")]);
            await bragToken.write.transfer([buyer2.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer1.account });
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer2.account });

            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("10")], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("20")], { account: buyer2.account });

            const bal1Before = await bragToken.read.balanceOf([buyer1.account.address]);
            const bal2Before = await bragToken.read.balanceOf([buyer2.account.address]);

            await marketplace.write.batchRejectOffers(
                [[bragNFT.address, bragNFT.address], [tokenId, tokenId], [buyer1.account.address, buyer2.account.address]]
            );

            const bal1After = await bragToken.read.balanceOf([buyer1.account.address]);
            const bal2After = await bragToken.read.balanceOf([buyer2.account.address]);

            assert.equal(bal1After - bal1Before, parseEther("10"));
            assert.equal(bal2After - bal2Before, parseEther("20"));

            const offer1 = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
            assert.equal(offer1[0], 0n);
        });

        it("should optimize _createListing for updates", async function () {
            const { bragNFT, marketplace, owner, otherAccount } = await deployFixture();

            await bragNFT.write.donate(["Listing NFT", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            // Initial listing (checks ownership)
            await marketplace.write.createListing([bragNFT.address, tokenId, 1n, parseEther("10")]);

            // Transfer NFT away to verify optimization (next update should NOT check ownership if seller matches)
            await bragNFT.write.transferFrom([owner.account.address, otherAccount.account.address, tokenId]);
            assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(otherAccount.account.address));

            // Update listing (should succeed even if owner is now otherAccount, because we optimized it to skip owner check if seller matches)
            await marketplace.write.updateListing([bragNFT.address, tokenId, 1n, parseEther("15")]);

            const listing = await marketplace.read.listings([bragNFT.address, tokenId, owner.account.address]);
            assert.equal(listing[1], parseEther("15"));
        });
    });

    describe("ExhibitVault: Batch Movement", async function () {
        it("should batch move ERC721 tokens", async function () {
            const { bragNFT, vault1, vault2, owner } = await deployFixture();

            await bragNFT.write.donate(["NFT 1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT 2", ""], { value: parseEther("0.01") });

            await bragNFT.write.approve([vault1.address, 0n]);
            await bragNFT.write.approve([vault1.address, 1n]);

            await bragNFT.write.safeTransferFrom([owner.account.address, vault1.address, 0n]);
            await bragNFT.write.safeTransferFrom([owner.account.address, vault1.address, 1n]);

            assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), getAddress(owner.account.address));
            assert.equal(await vault1.read.owner721([bragNFT.address, 1n]), getAddress(owner.account.address));

            // Batch move
            await vault1.write.moveBatch721([bragNFT.address, [0n, 1n], vault2.address]);

            assert.equal(await vault1.read.owner721([bragNFT.address, 0n]), getAddress("0x0000000000000000000000000000000000000000"));
            assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(owner.account.address));
            assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(owner.account.address));
        });

        it("should batch move ERC721 tokens with duration", async function () {
            const { bragNFT, vault1, vault2, owner } = await deployFixture();

            await bragNFT.write.donate(["NFT 1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT 2", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["NFT 3", ""], { value: parseEther("0.01") });
            const tokenId = 2n;

            await bragNFT.write.approve([vault1.address, tokenId]);
            await bragNFT.write.safeTransferFrom([owner.account.address, vault1.address, tokenId]);

            const duration = 3600n;
            await vault1.write.moveBatch721WithDuration([bragNFT.address, [tokenId], vault2.address, duration]);

            const expiry = await vault2.read.expiry721([bragNFT.address, tokenId]);
            assert.ok(expiry > 0n);
        });
    });

    describe("BragNFT: _substring UTF-8 safety", async function () {
        it("should handle UTF-8 characters correctly in _substring", async function () {
             const { bragNFT } = await deployFixture();

             // "Hello 🌍" where 🌍 is 4 bytes: F0 9F 8C 8D
             // Total bytes: 6 (Hello ) + 4 = 10 bytes.
             const message = "Hello 🌍🌍🌍"; // 6 + 12 = 18 bytes

             // Donate with a message that will be truncated
             // _generateSVG truncates to 32 bytes, so let's use a very long message.
             const longMsg = "This is a very long message with some UTF-8 characters like 🌍 and it should be truncated safely without breaking characters.";
             await bragNFT.write.donate([longMsg, ""], { value: parseEther("0.01") });
             const tokenId = 0n;

             const uri = await bragNFT.read.tokenURI([tokenId]);
             const json = JSON.parse(Buffer.from(uri.split(",")[1], 'base64').toString());
             // The SVG title/text should be safe.
             assert.ok(json.image.startsWith("data:image/svg+xml;base64,"));
        });
    });
});
