import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
import path from "node:path";
import fs from "node:fs";
import { EventEmitter } from "node:events";

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

describe("Sepolia Mode (/nexus:my_nfts) Test Suite", () => {
    let originalAppEnv: string | undefined;
    let originalChainId: string | undefined;
    let sepoliaDeploymentDir: string;
    let sepoliaDeploymentFile: string;

    const mockBragAddress = "0x1111111111111111111111111111111111111111";
    const mockVaultAddress = "0x2222222222222222222222222222222222222222";

    beforeEach(() => {
        originalAppEnv = process.env.APP_ENV;
        originalChainId = process.env.CHAIN_ID;

        process.env.APP_ENV = "sepolia";
        delete process.env.CHAIN_ID;

        // Ensure ignition/deployments/chain-11155111/deployed_addresses.json exists for tests
        sepoliaDeploymentDir = path.join(process.cwd(), "ignition", "deployments", "chain-11155111");
        sepoliaDeploymentFile = path.join(sepoliaDeploymentDir, "deployed_addresses.json");

        if (!fs.existsSync(sepoliaDeploymentDir)) {
            fs.mkdirSync(sepoliaDeploymentDir, { recursive: true });
        }

        fs.writeFileSync(
            sepoliaDeploymentFile,
            JSON.stringify(
                {
                    "AppModule#BragNFT": mockBragAddress,
                    "AppModule#ExhibitVault": mockVaultAddress
                },
                null,
                2
            )
        );
    });

    afterEach(() => {
        if (originalAppEnv !== undefined) {
            process.env.APP_ENV = originalAppEnv;
        } else {
            delete process.env.APP_ENV;
        }

        if (originalChainId !== undefined) {
            process.env.CHAIN_ID = originalChainId;
        } else {
            delete process.env.CHAIN_ID;
        }
    });

    it("should default CHAIN_ID to 11155111 and load Sepolia contract deployments when APP_ENV=sepolia", async () => {
        const bridge = await import("../scripts/nft-bridge.js");

        const testAddress = "0x3333333333333333333333333333333333333333";
        const xuid = "xuid-sepolia-player-1";

        bridge.mappings.set(xuid, testAddress);

        // Populate status cache directly to simulate resolved Sepolia state
        bridge.statusCache.set(testAddress.toLowerCase(), {
            walletNfts: [
                {
                    tokenId: "0",
                    location: "Wallet",
                    nftContract: mockBragAddress,
                    image: "data:image/png;base64,mockImage",
                    animation_url: null
                }
            ],
            vaults: {
                [mockVaultAddress.toLowerCase()]: [
                    {
                        tokenId: "1",
                        nftContract: mockBragAddress,
                        location: "Nexus Staging",
                        image: "data:image/png;base64,mockVaultImage",
                        animation_url: null
                    }
                ]
            }
        });

        const status = await bridge.getOwnershipStatus(xuid, "local-dev", "SepoliaUser");

        assert.strictEqual(status.isHolder, true);
        assert.strictEqual(status.inWallet, true);
        assert.strictEqual(status.inVault, true);
        assert.ok(status.nfts.length >= 2);

        const tokenIds = status.nfts.map((n) => n.tokenId);
        assert.ok(tokenIds.includes("0"));
        assert.ok(tokenIds.includes("1"));
    });

    it("should process nexus:my_nfts message over WebSocket and output held Sepolia NFTs", async () => {
        const bridge = await import("../scripts/nft-bridge.js");

        const mockWs = new MockWebSocket();
        bridge.serverSockets.set("server-1", mockWs as any);

        const mockWss = new EventEmitter() as any;
        mockWss.clients = new Set([mockWs]);
        bridge.setupWss(mockWss);
        mockWss.emit("connection", mockWs, { socket: { remoteAddress: "127.0.0.1" } });

        const testAddress = "0x4444444444444444444444444444444444444444";
        const xuid = "xuid-sepolia-player-2";
        const playerName = "SepoliaMiner";

        bridge.mappings.set(xuid, testAddress);
        bridge.statusCache.set(testAddress.toLowerCase(), {
            walletNfts: [
                {
                    tokenId: "42",
                    location: "Wallet",
                    nftContract: mockBragAddress,
                    image: "https://example.com/nft42.png"
                }
            ],
            vaults: {}
        });

        // Simulate incoming nexus:my_nfts WS message from Minecraft server
        const incomingPayload = JSON.stringify({
            header: { version: 1, messagePurpose: "event" },
            body: {
                eventName: "PlayerMessage",
                properties: {
                    Message: `nexus:my_nfts ${xuid} server-1 "${playerName}"`
                }
            }
        });

        mockWs.emit("message", incomingPayload);

        await new Promise((resolve) => setTimeout(resolve, 100));

        const commandLines = mockWs.sentMessages
            .filter((m) => m.body && m.body.commandLine)
            .map((m) => m.body.commandLine);

        assert.ok(commandLines.length > 0, "Bridge should respond with commands to Minecraft server");

        assert.ok(
            commandLines.some((cmd) => cmd.includes("Your NFTs:")),
            "Output should contain header 'Your NFTs:'"
        );
        assert.ok(
            commandLines.some((cmd) => cmd.includes("ID #42 (Wallet)")),
            "Output should display NFT ID #42 (Wallet)"
        );
    });

    it("should handle unlinked or non-holder player gracefully for nexus:my_nfts in Sepolia mode", async () => {
        const bridge = await import("../scripts/nft-bridge.js");

        const mockWs = new MockWebSocket();
        bridge.serverSockets.set("server-1", mockWs as any);

        const mockWss = new EventEmitter() as any;
        mockWss.clients = new Set([mockWs]);
        bridge.setupWss(mockWss);
        mockWss.emit("connection", mockWs, { socket: { remoteAddress: "127.0.0.1" } });

        const xuid = "xuid-unlinked-sepolia-player";
        const playerName = "UnlinkedUser";

        const incomingPayload = JSON.stringify({
            header: { version: 1, messagePurpose: "event" },
            body: {
                eventName: "PlayerMessage",
                properties: {
                    Message: `nexus:my_nfts ${xuid} server-1 "${playerName}"`
                }
            }
        });

        mockWs.emit("message", incomingPayload);

        await new Promise((resolve) => setTimeout(resolve, 100));

        const commandLines = mockWs.sentMessages
            .filter((m) => m.body && m.body.commandLine)
            .map((m) => m.body.commandLine);

        assert.ok(
            commandLines.some((cmd) => cmd.includes("No NFTs found in your linked wallet.")),
            "Output should warn that no NFTs were found"
        );
    });
});
