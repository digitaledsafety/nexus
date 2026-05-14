import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, decodeEventLog, Hex } from "viem";

describe("Refinement & Robustness", async function () {
    const { viem } = await network.connect();

    async function deployFixture() {
        const [owner, user1, user2, treasury] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
        const vault = await viem.deployContract("ExhibitVault", [registry.address]);

        return {
            owner,
            user1,
            user2,
            treasury,
            bragToken,
            bragNFT,
            registry,
            vault,
            mockPriceFeed
        };
    }

    describe("BragNFT SVG and Glowing State", async function () {
        it("should have different SVG for glowing state", async function () {
            const { bragNFT, user1 } = await deployFixture();

            await bragNFT.write.donate(["Initial Message", ""], { account: user1.account, value: parseEther("0.01") });
            const tokenId = 0n;

            const uriBefore = await bragNFT.read.tokenURI([tokenId]);
            const jsonBefore = JSON.parse(atob(uriBefore.split(",")[1]));
            const svgBefore = atob(jsonBefore.image.split(",")[1]);

            assert.ok(svgBefore.includes('fill="#6366f1"'), "Should have normal background color");
            assert.ok(!svgBefore.includes('stroke="white"'), "Should not have border");

            // Top up to make it glow
            await bragNFT.write.topUp([tokenId], { account: user1.account, value: parseEther("0.01") });

            const uriAfter = await bragNFT.read.tokenURI([tokenId]);
            const jsonAfter = JSON.parse(atob(uriAfter.split(",")[1]));
            const svgAfter = atob(jsonAfter.image.split(",")[1]);

            assert.ok(svgAfter.includes('fill="#4f46e5"'), "Should have glowing background color");
            assert.ok(svgAfter.includes('stroke="white"'), "Should have white border");
            assert.ok(svgAfter.includes('filter="url(#glow)"'), "Should have glow filter");
        });

        it("should allow topUpWithBrag", async function () {
            const { bragNFT, bragToken, user1, owner } = await deployFixture();

            await bragNFT.write.donate(["Brag TopUp", ""], { account: user1.account, value: parseEther("0.01") });
            const tokenId = 0n;

            // Initially not glowing (lastTopUpTimestamp is 0, but it is actually set in _donate)
            // Wait, let's check BragNFT.sol: _donate does NOT set lastTopUpTimestamp.
            // So initially it's NOT glowing unless we top up.
            // Actually, isGlowing uses: block.timestamp <= lastTopUpTimestamp[tokenId] + 30 days;
            // If lastTopUpTimestamp is 0, it's false.

            assert.equal(await bragNFT.read.isGlowing([tokenId]), false);

            // Fund user1 with BRAG
            const bragAmount = 1_000_000n * 10n**18n;
            await bragToken.write.transfer([user1.account.address, bragAmount], { account: owner.account });
            await bragToken.write.approve([bragNFT.address, bragAmount], { account: user1.account });

            await bragNFT.write.topUpWithBrag([tokenId], { account: user1.account });

            assert.equal(await bragNFT.read.isGlowing([tokenId]), true);
            const lastTopUp = await bragNFT.read.lastTopUpTimestamp([tokenId]);
            assert.ok(lastTopUp > 0n);
        });
    });

    describe("ExhibitVault Verified Operator", async function () {
        it("should allow verified operator to set actualOwner", async function () {
            const { vault, registry, bragNFT, user1, user2, owner } = await deployFixture();

            // Verify user2 as a trusted operator (e.g. a bridge)
            await registry.write.verifyVault([user2.account.address, 1, "Bridge", "Trusted Bridge"]);

            await bragNFT.write.donate(["Operator Test", ""], { account: user1.account, value: parseEther("0.01") });
            const tokenId = 0n;

            // user1 approves user2
            await bragNFT.write.approve([user2.account.address, tokenId], { account: user1.account });

            // user2 (verified) transfers to vault on behalf of user1, setting actualOwner to user1
            const data = user1.account.address as Hex;
            await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, tokenId, data], { account: user2.account });

            const storedOwner = await vault.read.owner721([bragNFT.address, tokenId]);
            assert.equal(getAddress(storedOwner), getAddress(user1.account.address));
        });

        it("should NOT allow unverified operator to set actualOwner", async function () {
            const { vault, bragNFT, user1, user2 } = await deployFixture();

            await bragNFT.write.donate(["Unverified Test", ""], { account: user1.account, value: parseEther("0.01") });
            const tokenId = 0n;

            await bragNFT.write.approve([user2.account.address, tokenId], { account: user1.account });

            // user2 (NOT verified) tries to set actualOwner to themselves or someone else via data
            // Since user2 is not verified, 32 bytes data is interpreted as duration
            const duration = 3600n;
            const data = ("0x" + duration.toString(16).padStart(64, '0')) as Hex;

            await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, tokenId, data], { account: user2.account });

            // actualOwner should be user1 (the 'from' address)
            const storedOwner = await vault.read.owner721([bragNFT.address, tokenId]);
            assert.equal(getAddress(storedOwner), getAddress(user1.account.address));

            const expiry = await vault.read.expiry721([bragNFT.address, tokenId]);
            assert.ok(expiry > 0n);
        });
    });
});
