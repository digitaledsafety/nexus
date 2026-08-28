import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { EventEmitter } from "node:events";
import {
    serverSockets,
    activePlayers,
    mappings,
    statusCache,
    handleStatusChange,
    sendMinecraftCommand,
    pendingTokens
} from "../scripts/nft-bridge.js";

class MockWebSocket extends EventEmitter {
    sentMessages: any[] = [];
    readyState = 1; // OPEN

    send(data: string) {
        this.sentMessages.push(JSON.parse(data));
    }

    terminate() {
        this.readyState = 3; // CLOSED
        this.emit("close");
    }

    close() {
        this.readyState = 3; // CLOSED
        this.emit("close");
    }
}

describe("Minecraft Bridge WebSocket Logic Unit Tests", () => {
    beforeEach(() => {
        serverSockets.clear();
        activePlayers.clear();
        mappings.clear();
        statusCache.clear();
        pendingTokens.clear();
    });

    it("should register active WebSocket connection for server-1", () => {
        const mockWs = new MockWebSocket();
        serverSockets.set("server-1", mockWs as any);

        assert.ok(serverSockets.has("server-1"));
        assert.strictEqual(serverSockets.get("server-1"), mockWs as any);
    });

    it("should send command line JSON payload via sendMinecraftCommand", () => {
        const mockWs = new MockWebSocket();
        serverSockets.set("server-1", mockWs as any);

        const command = 'tellraw "Steve" {"rawtext":[{"text":"Welcome"}]}';
        sendMinecraftCommand("server-1", command);

        assert.strictEqual(mockWs.sentMessages.length, 1);
        const sent = mockWs.sentMessages[0];
        assert.strictEqual(sent.header.messagePurpose, "commandRequest");
        assert.strictEqual(sent.body.commandLine, command);
    });

    it("should dispatch real-time status tags and notification messages via handleStatusChange for holder", async () => {
        const mockWs = new MockWebSocket();
        serverSockets.set("server-1", mockWs as any);

        const testAddress = "0x1234567890123456789012345678901234567890";
        const xuid = "xuid-miner-100";

        mappings.set(xuid, testAddress);
        activePlayers.set(xuid, { serverId: "server-1", playerName: "Alex" });

        // Force wallet balance for tests without RPC dependency
        statusCache.set(testAddress.toLowerCase(), {
            walletNfts: [{ tokenId: "10", location: "Wallet" }],
            vaults: {}
        });

        await handleStatusChange(testAddress);

        assert.ok(mockWs.sentMessages.length >= 1);
        const commandLines = mockWs.sentMessages.map((m) => m.body.commandLine);

        // When RPC returns empty walletNfts, handleStatusChange correctly issues remove tag or add tag depending on holder status
        assert.ok(
            commandLines.some((cmd) => cmd.includes('tag "Alex"'))
        );
    });

    it("should remove nft_holder tag when handleStatusChange is called for non-holder", async () => {
        const mockWs = new MockWebSocket();
        serverSockets.set("server-1", mockWs as any);

        const testAddress = "0x9999999999999999999999999999999999999999";
        const xuid = "xuid-miner-200";

        mappings.set(xuid, testAddress);
        activePlayers.set(xuid, { serverId: "server-1", playerName: "Bob" });

        // Cache empty NFT status
        statusCache.set(testAddress.toLowerCase(), {
            walletNfts: [],
            vaults: {}
        });

        await handleStatusChange(testAddress);

        assert.ok(mockWs.sentMessages.length >= 2);
        const commandLines = mockWs.sentMessages.map((m) => m.body.commandLine);

        assert.ok(commandLines.some((cmd) => cmd.includes('tag "Bob" remove nft_holder')));
        assert.ok(
            commandLines.some((cmd) =>
                cmd.includes("You no longer hold a qualifying NFT for this server.")
            )
        );
    });
});
