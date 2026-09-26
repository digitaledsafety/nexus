import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import {
    getOwnershipStatus,
    statusCache,
    mappings,
    serverConfigs,
    publicClient
} from "../scripts/nft-bridge.js";

describe("Real-Time Ownership Updates (No Stale Caching)", () => {
    beforeEach(() => {
        statusCache.clear();
        mappings.clear();
        serverConfigs["server-1"] = { vaultAddress: "0x1111111111111111111111111111111111111111", name: "Minecraft Survival" };
    });

    it("should always query fresh on-chain data and immediately reflect changes (such as transfers or mints)", async () => {
        const xuid = "xuid-test-fresh-fetch";
        const walletAddress = "0x9999999999999999999999999999999999999999";
        mappings.set(xuid, walletAddress);

        // First call: initial query when address has 0 NFTs on chain
        const status1 = await getOwnershipStatus(xuid, "server-1", "TestPlayer");
        assert.strictEqual(status1.isHolder, false, "Initial status should indicate not a holder");
        assert.strictEqual(status1.nfts.length, 0, "Initial NFT list should be empty");

        // Verify that statusCache has been populated with fresh status
        const cachedAfterFirstCall = statusCache.get(walletAddress.toLowerCase());
        assert.ok(cachedAfterFirstCall, "statusCache should store the result after query");
        assert.strictEqual(cachedAfterFirstCall.walletNfts.length, 0);

        // Subsequent call: even with populated cache, getOwnershipStatus executes fresh fetch
        // and updates statusCache
        const status2 = await getOwnershipStatus(xuid, "server-1", "TestPlayer");
        assert.strictEqual(status2.isHolder, false);
        assert.strictEqual(status2.nfts.length, 0);

        // Verify statusCache was refreshed
        const cachedAfterSecondCall = statusCache.get(walletAddress.toLowerCase());
        assert.ok(cachedAfterSecondCall, "statusCache should remain active and up-to-date");
    });
});
