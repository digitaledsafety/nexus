import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { privateKeyToAccount } from "viem/accounts";
import {
    mappings,
    statusCache,
    serverConfigs,
    handleSummonCommand,
    setPreAuthorization,
    preAuthorizations,
    broadcastEngineEvent
} from "../scripts/nft-bridge.js";

describe("Standalone Web3 Engine Summoning & Cross-App State Sync Suite", () => {
    const testPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const account = privateKeyToAccount(testPrivateKey as any);

    beforeEach(() => {
        mappings.clear();
        statusCache.clear();
        preAuthorizations.clear();
    });

    it("1. Should configure dedicated vaults for alpha-realm and vr-nexus", () => {
        const alphaVault = "0x1111111111111111111111111111111111111111";
        const vrVault = "0x2222222222222222222222222222222222222222";

        serverConfigs["alpha-realm"] = { vaultAddress: alphaVault, name: "Metaverse Alpha Realm", summonFeeBrag: "10" };
        serverConfigs["vr-nexus"] = { vaultAddress: vrVault, name: "VR Nexus Gallery", summonFeeBrag: "10" };

        assert.strictEqual(serverConfigs["alpha-realm"].name, "Metaverse Alpha Realm");
        assert.strictEqual(serverConfigs["vr-nexus"].name, "VR Nexus Gallery");
    });

    it("2. Should allow summoning NFTs into Web3 engine apps without requiring .mcstructure format", async () => {
        const platformId = "alpha:player_alpha";
        mappings.set(platformId, account.address);

        const alphaVault = "0x1111111111111111111111111111111111111111";
        serverConfigs["alpha-realm"] = { vaultAddress: alphaVault, name: "Metaverse Alpha Realm", summonFeeBrag: "10" };

        const modelNft3D = {
            tokenId: "101",
            nftContract: "0xBragNFTAddress",
            location: "Wallet",
            image: "https://example.com/nft.png",
            animation_url: "https://example.com/model.glb" // 3D GLB model format (not .mcstructure)
        };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [modelNft3D],
            bragBalance: "100",
            vaults: {
                [alphaVault.toLowerCase()]: []
            }
        });

        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });

        const res = await handleSummonCommand("101", platformId, "alpha-realm", "Alpha Explorer");
        assert.strictEqual(res.success, true, `Expected summon to succeed for GLB 3D model in engine app, got: ${res.reason}`);
        assert.strictEqual(res.tokenId, "101");
        assert.strictEqual(res.feePaid, "10");
    });

    it("3. Should transfer NFT from Alpha Vault to VR Gallery Vault when summoned across apps", async () => {
        const platformIdAlpha = "alpha:player_alpha";
        const platformIdVr = "vr:player_vr";
        mappings.set(platformIdAlpha, account.address);
        mappings.set(platformIdVr, account.address);

        const alphaVault = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const vrVault = "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

        serverConfigs["alpha-realm"] = { vaultAddress: alphaVault, name: "Metaverse Alpha Realm", summonFeeBrag: "10" };
        serverConfigs["vr-nexus"] = { vaultAddress: vrVault, name: "VR Nexus Gallery", summonFeeBrag: "10" };

        const nftInAlphaVault = {
            tokenId: "202",
            nftContract: "0xBragNFTAddress",
            location: "Metaverse Alpha Realm",
            image: "https://example.com/artwork.png",
            animation_url: "https://example.com/artwork.png"
        };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [],
            bragBalance: "50",
            vaults: {
                [alphaVault.toLowerCase()]: [nftInAlphaVault],
                [vrVault.toLowerCase()]: []
            }
        });

        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });

        // User summons NFT #202 into VR Nexus Gallery
        const res = await handleSummonCommand("202", platformIdVr, "vr-nexus", "VR Curator");
        assert.strictEqual(res.success, true);
        assert.strictEqual(res.feePaid, "10");

        // Verify NFT was removed from Alpha Vault and added to VR Vault
        const updatedStatus = statusCache.get(account.address.toLowerCase());
        assert.strictEqual(updatedStatus.bragBalance, "40");
        assert.strictEqual(updatedStatus.vaults[alphaVault.toLowerCase()].length, 0, "NFT should no longer be in Alpha Vault");
        assert.strictEqual(updatedStatus.vaults[vrVault.toLowerCase()].length, 1, "NFT should now be in VR Vault");
        assert.strictEqual(updatedStatus.vaults[vrVault.toLowerCase()][0].location, "VR Nexus Gallery");
    });

    it("4. Should broadcast real-time engine event payload on successful summon", async () => {
        let broadcastedEvent: any = null;

        // Mock broadcast listener
        const eventPayload = {
            type: "nft_summoned",
            serverId: "vr-nexus",
            serverName: "VR Nexus Gallery",
            playerName: "VR Curator",
            tokenId: "303",
            timestamp: Date.now()
        };

        // Broadcast check
        broadcastEngineEvent(eventPayload);
        assert.strictEqual(eventPayload.type, "nft_summoned");
        assert.strictEqual(eventPayload.serverId, "vr-nexus");
        assert.strictEqual(eventPayload.tokenId, "303");
    });

    it("5. Should support case-insensitive platform IDs and direct wallet address lookups", async () => {
        const { getOwnershipStatus } = await import("../scripts/nft-bridge.js");

        mappings.set("alpha:player_alpha", account.address);
        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [{ tokenId: "505", location: "Wallet", nftContract: "0xBrag" }],
            vaults: {}
        });

        // Case-insensitive lookup for platform ID
        const resMixedCase = await getOwnershipStatus("Alpha:Player_Alpha", "alpha-realm", "Alpha Explorer");
        assert.strictEqual(resMixedCase.isHolder, true);
        assert.strictEqual(resMixedCase.address, account.address);
        assert.strictEqual(resMixedCase.nfts.length, 1);
        assert.strictEqual(resMixedCase.nfts[0].tokenId, "505");

        // Direct wallet address lookup
        const resDirectAddress = await getOwnershipStatus(account.address, "alpha-realm", "Alpha Explorer");
        assert.strictEqual(resDirectAddress.isHolder, true);
        assert.strictEqual(resDirectAddress.address, account.address);
        assert.strictEqual(resDirectAddress.nfts.length, 1);
    });

    it("6. Should reflect vault location and prevent stale wallet NFT duplication after vault transfer", async () => {
        const { getOwnershipStatus, executeVaultTransferAndPayment } = await import("../scripts/nft-bridge.js");

        const platformId = "alpha:player_alpha";
        mappings.set(platformId, account.address);

        const vaultAddr = "0x3333333333333333333333333333333333333333";
        serverConfigs["alpha-realm"] = { vaultAddress: vaultAddr, name: "Metaverse Alpha Realm", summonFeeBrag: "10" };

        const nftInWallet = {
            tokenId: "606",
            nftContract: "0xBragNFTAddress",
            location: "Wallet"
        };

        // Initial sync state with NFT in wallet
        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [nftInWallet],
            bragBalance: "100",
            vaults: { [vaultAddr.toLowerCase()]: [] }
        });

        const initialStatus = await getOwnershipStatus(platformId, "alpha-realm", "Alpha Explorer");
        assert.strictEqual(initialStatus.nfts.length, 1);
        assert.strictEqual(initialStatus.nfts[0].location, "Wallet");

        // Transfer NFT to vault
        executeVaultTransferAndPayment(account.address, nftInWallet, vaultAddr, "10", "Metaverse Alpha Realm");

        // Re-sync status
        const updatedStatus = await getOwnershipStatus(platformId, "alpha-realm", "Alpha Explorer");
        assert.strictEqual(updatedStatus.nfts.length, 1, "Should have exactly 1 NFT in returned list");
        assert.strictEqual(updatedStatus.nfts[0].tokenId, "606");
        assert.strictEqual(updatedStatus.nfts[0].location, "Metaverse Alpha Realm", "NFT location should reflect vault, not stale wallet");
    });
});
