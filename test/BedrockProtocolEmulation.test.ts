import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
import { EventEmitter } from "node:events";
import dgram from "node:dgram";
import fs from "node:fs";
import path from "node:path";
import {
    serverSockets,
    activePlayers,
    mappings,
    statusCache,
    pendingTokens,
    preAuthorizations,
    handleSummonCommand,
    getOwnershipStatus,
    getPlatformStatus,
    createRegistrationToken
} from "../scripts/nft-bridge.js";

// --- 1. Bedrock UDP/RakNet Protocol Packet Emulation Layer ---

/**
 * RakNet Packet Constants & Bedrock Packet Identifiers
 */
const RAKNET_FRAME_SET_ID = 0x80;
const BEDROCK_TEXT_PACKET_ID = 0x09;
const BEDROCK_COMMAND_REQUEST_PACKET_ID = 0x4d;

export class EmulatedRakNetPacket {
    sequenceNumber: number;
    messageIndex: number;
    payload: Buffer;

    constructor(payload: Buffer, sequenceNumber = 0, messageIndex = 0) {
        this.payload = payload;
        this.sequenceNumber = sequenceNumber;
        this.messageIndex = messageIndex;
    }

    /**
     * Encapsulates a payload into a RakNet Frame Set packet buffer (UDP datagram format)
     */
    encode(): Buffer {
        // RakNet Frame Set Header: [1 byte Frame ID] [3 bytes Sequence Number] [3 bytes Message Index] [2 bytes Payload Bit Length]
        const header = Buffer.alloc(9);
        header.writeUInt8(RAKNET_FRAME_SET_ID, 0);
        header.writeUIntBE(this.sequenceNumber, 1, 3);
        header.writeUIntBE(this.messageIndex, 4, 3);
        header.writeUInt16BE(this.payload.length * 8, 7);
        return Buffer.concat([header, this.payload]);
    }

    /**
     * Decodes a RakNet Frame Set packet buffer from UDP datagram
     */
    static decode(buffer: Buffer): EmulatedRakNetPacket | null {
        if (buffer.length < 9) return null;
        const frameId = buffer.readUInt8(0);
        if ((frameId & 0xf0) !== RAKNET_FRAME_SET_ID) return null;

        const sequenceNumber = buffer.readUIntBE(1, 3);
        const messageIndex = buffer.readUIntBE(4, 3);
        const payloadBitLength = buffer.readUInt16BE(7);
        const payloadByteLength = Math.ceil(payloadBitLength / 8);

        const payload = buffer.subarray(9, 9 + payloadByteLength);
        return new EmulatedRakNetPacket(payload, sequenceNumber, messageIndex);
    }
}

export class BedrockTextPacket {
    type: number; // 0 = Raw, 1 = Chat, 2 = Translation
    sourceName: string;
    message: string;

    constructor(message: string, sourceName = "EmulatedPlayer", type = 1) {
        this.message = message;
        this.sourceName = sourceName;
        this.type = type;
    }

    encode(): Buffer {
        const sourceNameBuf = Buffer.from(this.sourceName, "utf8");
        const messageBuf = Buffer.from(this.message, "utf8");
        const buf = Buffer.alloc(1 + 2 + sourceNameBuf.length + 2 + messageBuf.length);

        let offset = 0;
        buf.writeUInt8(BEDROCK_TEXT_PACKET_ID, offset++);
        buf.writeUInt16BE(sourceNameBuf.length, offset);
        offset += 2;
        sourceNameBuf.copy(buf, offset);
        offset += sourceNameBuf.length;

        buf.writeUInt16BE(messageBuf.length, offset);
        offset += 2;
        messageBuf.copy(buf, offset);

        return buf;
    }

    static decode(buffer: Buffer): BedrockTextPacket | null {
        if (buffer.length < 1 || buffer.readUInt8(0) !== BEDROCK_TEXT_PACKET_ID) return null;
        let offset = 1;

        if (buffer.length < offset + 2) return null;
        const sourceLen = buffer.readUInt16BE(offset);
        offset += 2;

        if (buffer.length < offset + sourceLen) return null;
        const sourceName = buffer.toString("utf8", offset, offset + sourceLen);
        offset += sourceLen;

        if (buffer.length < offset + 2) return null;
        const msgLen = buffer.readUInt16BE(offset);
        offset += 2;

        if (buffer.length < offset + msgLen) return null;
        const message = buffer.toString("utf8", offset, offset + msgLen);

        return new BedrockTextPacket(message, sourceName);
    }
}

/**
 * Emulated Bedrock Client over UDP/RakNet datagrams
 */
export class EmulatedBedrockPlayer extends EventEmitter {
    xuid: string;
    name: string;
    socket: dgram.Socket;
    serverPort: number;
    receivedTextMessages: string[] = [];

    constructor(name: string, xuid: string, serverPort: number) {
        super();
        this.name = name;
        this.xuid = xuid;
        this.serverPort = serverPort;
        this.socket = dgram.createSocket("udp4");

        this.socket.on("message", (msg) => {
            const frame = EmulatedRakNetPacket.decode(msg);
            if (frame && frame.payload) {
                const textPacket = BedrockTextPacket.decode(frame.payload);
                if (textPacket) {
                    this.receivedTextMessages.push(textPacket.message);
                    this.emit("chat", textPacket.message);
                }
            }
        });
    }

    sendChatMessage(commandOrText: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const textPacket = new BedrockTextPacket(commandOrText, this.name);
            const frame = new EmulatedRakNetPacket(textPacket.encode());
            const data = frame.encode();

            this.socket.send(data, this.serverPort, "127.0.0.1", (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    close() {
        try {
            this.socket.close();
        } catch (e) {}
    }
}

// --- 2. Mock Addon Script Runtime & Direct WebSocket Bridge ---

class MockAddonWebSocketClient extends EventEmitter {
    sentBridgeMessages: any[] = [];
    readyState = 1;

    send(data: string) {
        this.sentBridgeMessages.push(JSON.parse(data));
    }

    simulateIncomingMessage(data: any) {
        this.emit("message", JSON.stringify(data));
    }

    close() {
        this.readyState = 3;
        this.emit("close");
    }
}

class MockBedrockDedicatedServerHost {
    udpSocket: dgram.Socket;
    port: number;
    connectedAddonSocket: MockAddonWebSocketClient | null = null;
    players: Map<string, EmulatedBedrockPlayer> = new Map();
    executedInGameCommands: string[] = [];

    constructor(port = 19132) {
        this.port = port;
        this.udpSocket = dgram.createSocket("udp4");

        this.udpSocket.on("message", (msg, rinfo) => {
            const frame = EmulatedRakNetPacket.decode(msg);
            if (!frame) return;

            const textPacket = BedrockTextPacket.decode(frame.payload);
            if (!textPacket) return;

            this.handlePlayerChatCommand(textPacket.sourceName, textPacket.message, rinfo);
        });
    }

    start(): Promise<void> {
        return new Promise((resolve) => {
            this.udpSocket.bind(this.port, "127.0.0.1", () => resolve());
        });
    }

    close(): Promise<void> {
        return new Promise((resolve) => {
            try {
                this.udpSocket.close(() => resolve());
            } catch (e) {
                resolve();
            }
        });
    }

    sendTextToPlayer(playerRinfo: dgram.RemoteInfo, textMessage: string) {
        const textPacket = new BedrockTextPacket(textMessage, "Server");
        const frame = new EmulatedRakNetPacket(textPacket.encode());
        this.udpSocket.send(frame.encode(), playerRinfo.port, playerRinfo.address);
    }

    handlePlayerChatCommand(playerName: string, message: string, rinfo: dgram.RemoteInfo) {
        if (!this.connectedAddonSocket) return;

        const xuid = `xuid-${playerName.toLowerCase().replace(/\s+/g, "_")}`;

        if (message.startsWith("/nexus:") || message.startsWith("nexus:")) {
            const rawCmd = message.startsWith("/") ? message.substring(1) : message;
            const parts = rawCmd.split(" ");
            const cmdName = parts[0];
            const target = parts[1] || "";

            if (cmdName === "nexus:contract") {
                this.sendTextToPlayer(rinfo, "§6[Nexus]§r Contract Address: §f0x1234567890123456789012345678901234567890§r");
            } else if (cmdName === "nexus:summon") {
                this.connectedAddonSocket.send(JSON.stringify({
                    header: { version: 1, messagePurpose: "event" },
                    body: {
                        eventName: "PlayerMessage",
                        properties: {
                            Message: `nexus:summon ${target || "list"} ${xuid} minecraft-server-1 "${playerName}"`
                        }
                    }
                }));
            } else if (cmdName === "nexus:check" || cmdName === "nexus:register" || cmdName === "nexus:my_nfts") {
                this.connectedAddonSocket.send(JSON.stringify({
                    header: { version: 1, messagePurpose: "event" },
                    body: {
                        eventName: "PlayerMessage",
                        properties: {
                            Message: `${cmdName} ${xuid} minecraft-server-1 "${playerName}"`
                        }
                    }
                }));
            }
        }
    }

    processIncomingBridgeCommand(commandLine: string) {
        this.executedInGameCommands.push(commandLine);
    }
}

// --- 3. Test Suite: Bedrock Protocol Client Emulation ---

describe("Bedrock Protocol Client Emulation & Chat Commands", () => {
    let serverHost: MockBedrockDedicatedServerHost;
    let mockAddonSocket: MockAddonWebSocketClient;
    const SERVER_PORT = 19133;

    beforeEach(async () => {
        serverSockets.clear();
        activePlayers.clear();
        mappings.clear();
        statusCache.clear();
        pendingTokens.clear();
        preAuthorizations.clear();

        serverHost = new MockBedrockDedicatedServerHost(SERVER_PORT);
        await serverHost.start();

        mockAddonSocket = new MockAddonWebSocketClient();
        serverHost.connectedAddonSocket = mockAddonSocket;
        serverSockets.set("minecraft-server-1", mockAddonSocket as any);
    });

    afterEach(async () => {
        await serverHost.close();
    });

    it("should emulate player RakNet UDP transport framing and Text packet encoding/decoding", async () => {
        const text = new BedrockTextPacket("Hello Nexus!", "Steve");
        const encodedText = text.encode();
        const decodedText = BedrockTextPacket.decode(encodedText);

        assert.ok(decodedText);
        assert.strictEqual(decodedText.message, "Hello Nexus!");
        assert.strictEqual(decodedText.sourceName, "Steve");

        const frame = new EmulatedRakNetPacket(encodedText, 42, 1);
        const encodedFrame = frame.encode();
        const decodedFrame = EmulatedRakNetPacket.decode(encodedFrame);

        assert.ok(decodedFrame);
        assert.strictEqual(decodedFrame.sequenceNumber, 42);
        assert.strictEqual(decodedFrame.messageIndex, 1);

        const innerText = BedrockTextPacket.decode(decodedFrame.payload);
        assert.ok(innerText);
        assert.strictEqual(innerText.message, "Hello Nexus!");
    });

    it("should process /nexus:contract chat command from emulated player over RakNet UDP datagrams", async () => {
        const player = new EmulatedBedrockPlayer("Alex", "xuid-alex", SERVER_PORT);

        let receivedChat = "";
        player.on("chat", (msg) => {
            receivedChat = msg;
        });

        await player.sendChatMessage("/nexus:contract");
        await new Promise((resolve) => setTimeout(resolve, 100));

        assert.ok(receivedChat.includes("Contract Address:"));
        assert.ok(receivedChat.includes("0x1234567890123456789012345678901234567890"));

        player.close();
    });

    it("should process /nexus:register chat command through RakNet UDP -> Addon -> WebSocket Bridge", async () => {
        const player = new EmulatedBedrockPlayer("Bob", "xuid-bob", SERVER_PORT);

        await player.sendChatMessage("/nexus:register");
        await new Promise((resolve) => setTimeout(resolve, 100));

        assert.strictEqual(mockAddonSocket.sentBridgeMessages.length, 1);
        const bridgeMsg = mockAddonSocket.sentBridgeMessages[0];
        assert.strictEqual(
            bridgeMsg.body.properties.Message,
            'nexus:register xuid-bob minecraft-server-1 "Bob"'
        );

        player.close();
    });

    it("should process /nexus:summon chat command through RakNet UDP -> Addon -> WebSocket Bridge", async () => {
        const player = new EmulatedBedrockPlayer("Charlie", "xuid-charlie", SERVER_PORT);

        await player.sendChatMessage("/nexus:summon 10");
        await new Promise((resolve) => setTimeout(resolve, 100));

        assert.strictEqual(mockAddonSocket.sentBridgeMessages.length, 1);
        const bridgeMsg = mockAddonSocket.sentBridgeMessages[0];
        assert.strictEqual(
            bridgeMsg.body.properties.Message,
            'nexus:summon 10 xuid-charlie minecraft-server-1 "Charlie"'
        );

        player.close();
    });

    it("should simulate end-to-end structure summoning flow from emulated player chat command", async () => {
        const xuid = "xuid-dave";
        const walletAddress = "0x1111222233334444555566667777888899990000";

        // Map xuid to wallet
        mappings.set(xuid, walletAddress);

        // Pre-authorize
        preAuthorizations.set(walletAddress.toLowerCase(), { bragApproved: true, nftApproved: true });

        // Set status cache with .mcstructure NFT
        statusCache.set(walletAddress.toLowerCase(), {
            walletNfts: [
                {
                    tokenId: "1",
                    location: "Wallet",
                    animation_url: "data:application/octet-stream;base64,TUNTVFJVT1RVUkVfVEVTVF9EQVRB",
                    mcstructure: true
                }
            ],
            vaults: {}
        });

        const player = new EmulatedBedrockPlayer("Dave", xuid, SERVER_PORT);

        // Trigger /nexus:summon 1 via UDP chat command
        await player.sendChatMessage("/nexus:summon 1");
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Addon script sent WebSocket message to bridge
        assert.strictEqual(mockAddonSocket.sentBridgeMessages.length, 1);
        const wsMsg = mockAddonSocket.sentBridgeMessages[0].body.properties.Message;

        // Execute handleSummonCommand directly (simulating bridge processing)
        const matchSummon = wsMsg.match(/^nexus:summon\s+(\S+)\s+(\S+)\s+(\S+)\s+"(.+)"$/);
        assert.ok(matchSummon);

        const [_, target, platformId, serverId, playerName] = matchSummon;
        const result = await handleSummonCommand(target, platformId, serverId, playerName);

        assert.ok(result.success, "Expected structure summon to succeed");
        assert.strictEqual(result.tokenId, "1");

        // Verify that commandResponse / tellraw messages were pushed back to mockAddonSocket
        const commandLines = mockAddonSocket.sentBridgeMessages.map((m) => m.body.commandLine).filter(Boolean);
        assert.ok(commandLines.some((cmd) => cmd.includes("structure load")));

        player.close();
    });

    it("should handle unlinked player summon command by providing registration token URL", async () => {
        const unlinkedXuid = "xuid-unlinked-player";
        const player = new EmulatedBedrockPlayer("Eve", unlinkedXuid, SERVER_PORT);

        await player.sendChatMessage("/nexus:summon 1");
        await new Promise((resolve) => setTimeout(resolve, 100));

        assert.strictEqual(mockAddonSocket.sentBridgeMessages.length, 1);
        const wsMsg = mockAddonSocket.sentBridgeMessages[0].body.properties.Message;

        const matchSummon = wsMsg.match(/^nexus:summon\s+(\S+)\s+(\S+)\s+(\S+)\s+"(.+)"$/);
        assert.ok(matchSummon);

        const [_, target, platformId, serverId, playerName] = matchSummon;
        const result = await handleSummonCommand(target, platformId, serverId, playerName);

        assert.strictEqual(result.success, false);
        assert.strictEqual(result.reason, "unlinked");
        assert.ok(result.registrationUrl?.includes("http://localhost:3000?token="));

        player.close();
    });

    it("should handle player /nexus:my_nfts chat command flow for NFT holder", async () => {
        const xuid = "xuid-frank";
        const walletAddress = "0x2222333344445555666677778888999900001111";

        mappings.set(xuid, walletAddress);
        statusCache.set(walletAddress.toLowerCase(), {
            walletNfts: [{ tokenId: "42", location: "Wallet" }],
            vaults: {}
        });

        const player = new EmulatedBedrockPlayer("Frank", xuid, SERVER_PORT);
        await player.sendChatMessage("/nexus:my_nfts");
        await new Promise((resolve) => setTimeout(resolve, 100));

        assert.strictEqual(mockAddonSocket.sentBridgeMessages.length, 1);
        assert.strictEqual(
            mockAddonSocket.sentBridgeMessages[0].body.properties.Message,
            'nexus:my_nfts xuid-frank minecraft-server-1 "Frank"'
        );

        const ownership = await getOwnershipStatus(xuid, "minecraft-server-1", "Frank");
        assert.strictEqual(ownership.isHolder, true);
        assert.strictEqual(ownership.nfts.length, 1);
        assert.strictEqual(ownership.nfts[0].tokenId, "42");

        player.close();
    });
});
