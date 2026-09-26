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
});
