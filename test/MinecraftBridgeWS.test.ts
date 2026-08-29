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
    setupEventListeners,
    publicClient,
    serverConfigs,
    pendingTokens,
    setupWss
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

class MockServer extends EventEmitter {
    clients = new Set();
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

        statusCache.set(testAddress.toLowerCase(), {
            walletNfts: [{ tokenId: "10", location: "Wallet" }],
            vaults: {}
        });

        await handleStatusChange(testAddress);

        assert.ok(mockWs.sentMessages.length >= 1);
        const commandLines = mockWs.sentMessages.map((m) => m.body.commandLine);

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

    it("should trigger real-time WebSocket updates when blockchain event logs arrive via setupEventListeners", async () => {
        const mockWs = new MockWebSocket();
        serverSockets.set("server-1", mockWs as any);

        const testAddress = "0x1111222233334444555566667777888899990000";
        const xuid = "xuid-event-player";

        mappings.set(xuid, testAddress);
        activePlayers.set(xuid, { serverId: "server-1", playerName: "Charlie" });

        // Pre-populate status cache
        statusCache.set(testAddress.toLowerCase(), {
            walletNfts: [{ tokenId: "100", location: "Wallet" }],
            vaults: {}
        });

        // Set up mock vault in serverConfigs to test watchEvent for vaults as well
        serverConfigs["server-1"].vaultAddress = "0xVaultAddress000000000000000000000000000";

        const watchedEvents: Array<{ address: string; onLogs: Function }> = [];
        (publicClient as any).watchEvent = (params: any) => {
            watchedEvents.push(params);
        };

        // Temporarily set CONTRACT_ADDRESS_BRAGNFT so getContractAddress('BragNFT') resolves
        process.env.CONTRACT_ADDRESS_BRAGNFT = "0xBragNFTAddress000000000000000000000000000";

        await setupEventListeners(true);

        assert.ok(watchedEvents.length > 0, "Expected event listeners to be registered");

        // Simulate incoming Transfer event log for testAddress
        const transferListener = watchedEvents.find(
            (e) => e.address === process.env.CONTRACT_ADDRESS_BRAGNFT
        );
        assert.ok(transferListener, "Transfer event listener should be registered");

        transferListener.onLogs([
            { args: { from: "0x0000000000000000000000000000000000000000", to: testAddress, tokenId: 100n } }
        ]);

        await new Promise((resolve) => setTimeout(resolve, 100));

        assert.ok(mockWs.sentMessages.length >= 1);
        const commandLines = mockWs.sentMessages.map((m) => m.body.commandLine);
        assert.ok(commandLines.some((cmd) => cmd.includes('tag "Charlie"')));
    });

    it("should handle prefixed PlayerMessage commands like '[Server] say nexus:register'", async () => {
        const mockWss = new MockServer();
        setupWss(mockWss as any);

        const mockWs = new MockWebSocket();
        mockWss.emit("connection", mockWs, { socket: { remoteAddress: "127.0.0.1" } });

        // First handshake with server-1
        mockWs.emit("message", JSON.stringify({
            body: {
                eventName: "PlayerMessage",
                properties: { Message: "[Server] say nexus:handshake server-1" }
            }
        }));

        assert.strictEqual(serverSockets.get("server-1"), mockWs as any);

        // Send nexus:register command prefixed with "[Server] say "
        mockWs.emit("message", JSON.stringify({
            body: {
                eventName: "PlayerMessage",
                properties: { Message: '[Server] say nexus:register test-xuid-prefixed server-1 "Test Player"' }
            }
        }));

        await new Promise((resolve) => setTimeout(resolve, 50));

        // Verify that server-1 received tellraw response with registration URL
        const commandLines = mockWs.sentMessages.filter(m => m.body && m.body.commandLine).map((m) => m.body.commandLine);
        assert.ok(commandLines.some((cmd) => cmd.includes("To link your wallet, visit this URL:")));
    });
});
