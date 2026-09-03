import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { EventEmitter } from "node:events";
import { privateKeyToAccount } from "viem/accounts";
import {
    handleRequest,
    pendingTokens,
    mappings,
    statusCache,
    serverConfigs,
    serverSockets,
    handleSummonCommand,
    getPlatformStatus
} from "../scripts/nft-bridge.js";

class MockResponse extends EventEmitter {
    statusCode: number = 200;
    headers: Record<string, string> = {};
    body: string = "";
    writableEnded: boolean = false;

    setHeader(name: string, value: string) {
        this.headers[name] = value;
    }

    writeHead(statusCode: number, headers?: Record<string, string>) {
        this.statusCode = statusCode;
        if (headers) Object.assign(this.headers, headers);
    }

    end(data?: string) {
        if (data) this.body += data;
        this.writableEnded = true;
        this.emit("finish");
    }

    write(data: string) {
        this.body += data;
    }
}

class MockRequest extends EventEmitter {
    url: string;
    method: string;
    headers: Record<string, string>;
    body: string;

    constructor(url: string, method: string = "GET", headers: Record<string, string> = {}) {
        super();
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = "";
    }

    async *[Symbol.asyncIterator]() {
        yield Buffer.from(this.body);
    }
}

class MockWebSocket extends EventEmitter {
    sentMessages: any[] = [];
    readyState = 1;

    send(data: string) {
        this.sentMessages.push(JSON.parse(data));
    }

    close() {
        this.readyState = 3;
        this.emit("close");
    }
}

const TEST_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = privateKeyToAccount(TEST_PRIVATE_KEY);

describe("Multi-Game User Registration & Vault Exclusivity Test Suite", () => {
    beforeEach(() => {
        pendingTokens.clear();
        mappings.clear();
        statusCache.clear();
        serverSockets.clear();

        // Setup test server configs
        serverConfigs["server-1"] = { vaultAddress: "0x1111111111111111111111111111111111111111", name: "Minecraft Survival" };
        serverConfigs["server-2"] = { vaultAddress: "0x2222222222222222222222222222222222222222", name: "Roblox / Digital Education Safety Hub" };
    });

    describe("End-to-End User Registration Flow", () => {
        it("should generate token via /request-token and complete SIWE registration via /verify-link", async () => {
            const platformId = "xuid-minecraft-player-101";

            // 1. Request registration token
            const reqToken = new MockRequest(`/?path=request-token&platformId=${platformId}`, "GET");
            const resToken = new MockResponse();
            await handleRequest(reqToken as any, resToken as any);

            assert.strictEqual(resToken.statusCode, 200);
            const tokenData = JSON.parse(resToken.body);
            assert.ok(tokenData.token);
            assert.strictEqual(tokenData.uuid, platformId);
            assert.ok(tokenData.registrationUrl.includes(tokenData.token));

            // 2. Prepare SIWE message matching login.js
            const domain = "localhost:3000";
            const origin = "http://localhost:3000";
            const statement = "Connect your wallet to Brag Charity.";
            const message = `${domain} wants you to connect your Ethereum account:\n${account.address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: 31337\nIssued At: ${new Date().toISOString()}`;

            const signature = await account.signMessage({ message });

            // 3. POST to /verify-link
            const reqLink = new MockRequest("/verify-link", "POST");
            reqLink.body = JSON.stringify({
                token: tokenData.token,
                address: account.address,
                message,
                signature
            });
            const resLink = new MockResponse();
            await handleRequest(reqLink as any, resLink as any);

            assert.strictEqual(resLink.statusCode, 200);
            const linkResult = JSON.parse(resLink.body);
            assert.strictEqual(linkResult.success, true);
            assert.strictEqual(linkResult.platformId, platformId);
            assert.strictEqual(linkResult.address, account.address);

            // 4. Verify mapping is stored
            const status = await getPlatformStatus(platformId);
            assert.strictEqual(status.linked, true);
            assert.strictEqual(status.address, account.address);

            // 5. Verify token is consumed and cannot be reused
            const reqLinkReuse = new MockRequest("/verify-link", "POST");
            reqLinkReuse.body = JSON.stringify({
                token: tokenData.token,
                address: account.address,
                message,
                signature
            });
            const resLinkReuse = new MockResponse();
            await handleRequest(reqLinkReuse as any, resLinkReuse as any);
            assert.strictEqual(resLinkReuse.statusCode, 400);
        });
    });

    describe("Multi-Platform Identifier Compatibility", () => {
        it("should register and resolve Xbox XUID, Roblox UserID, and Education Engine UserID", async () => {
            const platforms = [
                { id: "xuid-xbox-12345", type: "Minecraft Bedrock" },
                { id: "roblox:user_998877", type: "Roblox Platform" },
                { id: "engine:edu_student_442", type: "digitaleducationsafety.org Engine" }
            ];

            for (const p of platforms) {
                // Request token
                const reqToken = new MockRequest(`/?path=request-token&platformId=${p.id}`, "GET");
                const resToken = new MockResponse();
                await handleRequest(reqToken as any, resToken as any);
                const { token } = JSON.parse(resToken.body);

                // SIWE verify
                const message = `localhost:3000 wants you to connect your Ethereum account:\n${account.address}\n\nStatement\n\nURI: http://localhost:3000`;
                const signature = await account.signMessage({ message });

                const reqLink = new MockRequest("/verify-link", "POST");
                reqLink.body = JSON.stringify({ token, address: account.address, message, signature });
                const resLink = new MockResponse();
                await handleRequest(reqLink as any, resLink as any);

                assert.strictEqual(resLink.statusCode, 200);

                // Verify status lookup
                const status = await getPlatformStatus(p.id);
                assert.strictEqual(status.linked, true, `Failed linking for ${p.type}`);
                assert.strictEqual(status.address, account.address);
            }
        });
    });

    describe("Single-Vault Exclusivity & Cross-Game Summoning MVP", () => {
        it("should allow summoning only when NFT is present in the target game server vault", async () => {
            const platformId = "xuid-multi-game-user";
            mappings.set(platformId, account.address);

            const mockWs = new MockWebSocket();
            serverSockets.set("server-1", mockWs as any);
            serverSockets.set("server-2", mockWs as any);

            const vaultA = "0x1111111111111111111111111111111111111111";
            const vaultB = "0x2222222222222222222222222222222222222222";

            // User has deposited NFT #101 into Server 1's Vault A only
            statusCache.set(account.address.toLowerCase(), {
                walletNfts: [],
                vaults: {
                    [vaultA]: [
                        {
                            tokenId: "101",
                            nftContract: "0xBragNFTAddress",
                            location: "Minecraft Survival",
                            image: "http://example.com/nft.png",
                            animation_url: "data:application/octet-stream;base64,TU9DS19NQ1NUUlVDVFVSRV9EQVRB",
                            mcstructure: true
                        }
                    ],
                    [vaultB]: [] // Not in Vault B
                }
            });

            // 1. Attempt summon on Server 1 (Vault A holds NFT) -> SUCCESS
            const resServer1 = await handleSummonCommand("101", platformId, "server-1", "MinecraftPlayer");
            assert.strictEqual(resServer1.success, true);
            assert.strictEqual(resServer1.tokenId, "101");

            // 2. Attempt summon on Server 2 (Vault B does not hold NFT) -> REJECTED (vault exclusivity)
            const resServer2 = await handleSummonCommand("101", platformId, "server-2", "RobloxPlayer");
            assert.strictEqual(resServer2.success, false);
            assert.strictEqual(resServer2.reason, "not_in_vault");

            // 3. Move/Exhibit NFT into Server 2's Vault B
            statusCache.set(account.address.toLowerCase(), {
                walletNfts: [],
                vaults: {
                    [vaultA]: [], // No longer in Vault A
                    [vaultB]: [
                        {
                            tokenId: "101",
                            nftContract: "0xBragNFTAddress",
                            location: "Roblox / Digital Education Safety Hub",
                            image: "http://example.com/nft.png",
                            animation_url: "http://example.com/model.mcstructure"
                        }
                    ]
                }
            });

            // 4. Attempt summon on Server 1 -> REJECTED (no longer in Vault A)
            const resServer1After = await handleSummonCommand("101", platformId, "server-1", "MinecraftPlayer");
            assert.strictEqual(resServer1After.success, false);
            assert.strictEqual(resServer1After.reason, "not_in_vault");

            // 5. Attempt summon on Server 2 -> SUCCESS
            const resServer2After = await handleSummonCommand("101", platformId, "server-2", "RobloxPlayer");
            assert.strictEqual(resServer2After.success, true);
            assert.strictEqual(resServer2After.tokenId, "101");
        });

        it("should reject summon attempt if user is unlinked", async () => {
            const unlinkedPlatformId = "engine:unlinked_user_999";
            const res = await handleSummonCommand("1", unlinkedPlatformId, "server-1", "GuestPlayer");

            assert.strictEqual(res.success, false);
            assert.strictEqual(res.reason, "unlinked");
        });

        it("should reject summon if media is not a valid structure format", async () => {
            const platformId = "xuid-player-non-structure";
            mappings.set(platformId, account.address);

            const vaultA = "0x1111111111111111111111111111111111111111";
            statusCache.set(account.address.toLowerCase(), {
                walletNfts: [],
                vaults: {
                    [vaultA]: [
                        {
                            tokenId: "50",
                            nftContract: "0xBragNFTAddress",
                            location: "Minecraft Survival",
                            image: "http://example.com/image.png",
                            animation_url: "http://example.com/video.mp4"
                        }
                    ]
                }
            });

            const res = await handleSummonCommand("50", platformId, "server-1", "PlayerOne");
            assert.strictEqual(res.success, false);
            assert.strictEqual(res.reason, "not_mcstructure");
        });
    });
});
