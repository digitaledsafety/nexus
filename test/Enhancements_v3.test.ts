import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, Hex, decodeEventLog } from "viem";

describe("Enhancements v3", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, otherAccount] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
        const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
        await registry.write.verifyVault([vault.address, 0, "Main Vault", "Test"]);

        return {
            owner,
            otherAccount,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            registry,
            vault,
            mockPriceFeed
        };
    }

    describe("BragNFT Dynamic SVG & Metadata", async function () {
        it("should show correct background color and donation value attribute", async function () {
            const { bragNFT, owner } = await deployFixture();

            // Donation of 0.01 ETH at 2500 USD/ETH = 25.00 USD
            await bragNFT.write.donate(["Legacy Message", ""], { value: parseEther("0.01") });
            const tokenId = 0n;

            let uri = await bragNFT.read.tokenURI([tokenId]);
            let decoded = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

            // Check Donation Value attribute
            let donationValueAttr = decoded.attributes.find((a: any) => a.trait_type === "Donation Value");
            assert.equal(donationValueAttr.value, "$25.00");

            // Check default background color (Pending -> Indigo #6366f1)
            let imageURI = decoded.image;
            let svg = Buffer.from(imageURI.split(",")[1], "base64").toString();
            assert.ok(svg.includes('fill="#6366f1"'), "Should have Indigo background");

            // Change Tax Status to Verified -> Green #22c55e
            await bragNFT.write.setTaxStatus([tokenId, 1]); // Verified
            uri = await bragNFT.read.tokenURI([tokenId]);
            decoded = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
            svg = Buffer.from(decoded.image.split(",")[1], "base64").toString();
            assert.ok(svg.includes('fill="#22c55e"'), "Should have Green background");

            // Change Tax Status to Claimed -> Gold #eab308
            await bragNFT.write.setTaxStatus([tokenId, 2]); // Claimed
            uri = await bragNFT.read.tokenURI([tokenId]);
            decoded = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
            svg = Buffer.from(decoded.image.split(",")[1], "base64").toString();
            assert.ok(svg.includes('fill="#eab308"'), "Should have Gold background");

            // Change Tax Status to Flagged -> Red #ef4444
            await bragNFT.write.setTaxStatus([tokenId, 3]); // Flagged
            uri = await bragNFT.read.tokenURI([tokenId]);
            decoded = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
            svg = Buffer.from(decoded.image.split(",")[1], "base64").toString();
            assert.ok(svg.includes('fill="#ef4444"'), "Should have Red background");
        });
    });

    describe("ExhibitVault Batch & Extensions", async function () {
        it("should allow batch exhibiting via pull", async function () {
            const { bragNFT, vault, owner } = await deployFixture();

            await bragNFT.write.donate(["nft1", "uri1"], { value: parseEther("0.01") });
            await bragNFT.write.donate(["nft2", "uri2"], { value: parseEther("0.01") });

            await bragNFT.write.setApprovalForAll([vault.address, true]);

            await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n]);

            assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault.address));
            assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault.address));

            const storedOwner = await vault.read.owner721([bragNFT.address, 0n]);
            assert.equal(getAddress(storedOwner), getAddress(owner.account.address));
            assert.ok(await vault.read.expiry721([bragNFT.address, 0n]) > 0n);
        });

        it("should allow extending exhibition", async function () {
            const { bragNFT, vault, owner } = await deployFixture();

            await bragNFT.write.donate(["nft", "uri"], { value: parseEther("0.01") });
            await bragNFT.write.approve([vault.address, 0n]);
            await bragNFT.write.safeTransferFrom([owner.account.address, vault.address, 0n]);

            const initialExpiry = await vault.read.expiry721([bragNFT.address, 0n]);
            // Expiry is 0 initially if no duration provided
            assert.equal(initialExpiry, 0n);

            await vault.write.extendExhibition721([bragNFT.address, 0n, 3600n]);
            const newExpiry = await vault.read.expiry721([bragNFT.address, 0n]);
            assert.ok(newExpiry >= BigInt(Math.floor(Date.now() / 1000)) + 3500n);

            await vault.write.extendExhibition721([bragNFT.address, 0n, 3600n]);
            const extendedExpiry = await vault.read.expiry721([bragNFT.address, 0n]);
            assert.equal(extendedExpiry, newExpiry + 3600n);
        });
    });

    describe("NFTMarketplace Batch Reject & Update", async function () {
        it("should batch reject offers", async function () {
            const { marketplace, bragNFT, bragToken, owner, otherAccount } = await deployFixture();

            await bragNFT.write.donate(["nft1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["nft2", ""], { value: parseEther("0.01") });

            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: otherAccount.account });
            await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: otherAccount.account });

            assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("30"));

            await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [otherAccount.account.address, otherAccount.account.address]]);

            assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
            assert.equal(await bragToken.read.balanceOf([otherAccount.account.address]), parseEther("100"));
        });

        it("should batch update offers", async function () {
            const { marketplace, bragNFT, bragToken, owner, otherAccount } = await deployFixture();

            await bragNFT.write.donate(["nft1", ""], { value: parseEther("0.01") });
            await bragNFT.write.donate(["nft2", ""], { value: parseEther("0.01") });

            await bragToken.write.transfer([otherAccount.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("100")], { account: otherAccount.account });

            await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: otherAccount.account });
            await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("20")], { account: otherAccount.account });

            await marketplace.write.batchUpdateOffers([
                [bragNFT.address, bragNFT.address],
                [0n, 1n],
                [1n, 1n],
                [parseEther("15"), parseEther("25")],
                [0n, 0n]
            ], { account: otherAccount.account });

            const offer0 = await marketplace.read.offers([bragNFT.address, 0n, otherAccount.account.address]);
            const offer1 = await marketplace.read.offers([bragNFT.address, 1n, otherAccount.account.address]);

            assert.equal(offer0[0], parseEther("15"));
            assert.equal(offer1[0], parseEther("25"));
            assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("40"));
        });
    });
});
