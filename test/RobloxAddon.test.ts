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
    getPlatformStatus,
    getOwnershipStatus
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

const TEST_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = privateKeyToAccount(TEST_PRIVATE_KEY);

describe("Roblox Addon & N-Platform Integration Test Suite", () => {
    beforeEach(() => {
        pendingTokens.clear();
        mappings.clear();
        statusCache.clear();
        serverSockets.clear();

        // Setup test server configs
        serverConfigs["server-2"] = { vaultAddress: "0x2222222222222222222222222222222222222222", name: "Roblox Experience Vault" };
    });

    describe("Roblox HttpService Token Registration & SIWE Verification", () => {
        it("should issue registration token for Roblox UserId and link wallet via SIWE", async () => {
            const robloxUserId = "roblox:987654321";

            // 1. Request token via HTTP GET /?path=request-token
            const reqToken = new MockRequest(`/?path=request-token&platformId=${robloxUserId}`, "GET");
            const resToken = new MockResponse();
            await handleRequest(reqToken as any, resToken as any);

            assert.strictEqual(resToken.statusCode, 200);
            const tokenData = JSON.parse(resToken.body);
            assert.ok(tokenData.token);
            assert.strictEqual(tokenData.uuid, robloxUserId);
            assert.ok(tokenData.registrationUrl.includes(tokenData.token));

            // 2. Perform SIWE message signature verification via POST /verify-link
            const domain = "localhost:3000";
            const origin = "http://localhost:3000";
            const statement = "Connect your wallet to Brag Charity.";
            const message = `${domain} wants you to connect your Ethereum account:\n${account.address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: 31337\nIssued At: ${new Date().toISOString()}`;

            const signature = await account.signMessage({ message });

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
            assert.strictEqual(linkResult.platformId, robloxUserId);
            assert.strictEqual(linkResult.address, account.address);

            // 3. Verify status query via GET /?path=check-platform
            const reqCheck = new MockRequest(`/?path=check-platform&platformId=${robloxUserId}`, "GET");
            const resCheck = new MockResponse();
            await handleRequest(reqCheck as any, resCheck as any);

            assert.strictEqual(resCheck.statusCode, 200);
            const checkData = JSON.parse(resCheck.body);
            assert.strictEqual(checkData.linked, true);
            assert.strictEqual(checkData.address, account.address);
            assert.ok(checkData.linkedPlatforms.includes(robloxUserId));
        });
    });

    describe("Cross-Platform Identity Verification Across N Platforms", () => {
        it("should track and list all linked N platform IDs for a single wallet address", async () => {
            const platforms = [
                "xuid-bedrock-player-1",
                "roblox:12345678",
                "discord:888777666",
                "steam:76561198000000000"
            ];

            // Register all platform IDs under the same wallet address
            for (const pid of platforms) {
                mappings.set(pid, account.address);
            }

            // Query status for Roblox user
            const status = await getPlatformStatus("roblox:12345678");
            assert.strictEqual(status.linked, true);
            assert.strictEqual(status.address, account.address);
            assert.strictEqual(status.linkedPlatforms.length, platforms.length);

            for (const pid of platforms) {
                assert.ok(status.linkedPlatforms.includes(pid), `Missing platform ${pid} in linkedPlatforms`);
            }
        });
    });

    describe("Roblox In-Game NFT Ownership Queries", () => {
        it("should return exhibited vault NFTs for Roblox players", async () => {
            const robloxUserId = "roblox:11223344";
            mappings.set(robloxUserId, account.address);

            const vaultAddress = "0x2222222222222222222222222222222222222222";
            statusCache.set(account.address.toLowerCase(), {
                walletNfts: [],
                vaults: {
                    [vaultAddress]: [
                        {
                            tokenId: "301",
                            nftContract: "0xBragNFTAddress",
                            location: "Roblox Experience Vault",
                            image: "http://example.com/roblox_nft.png",
                            animation_url: null
                        }
                    ]
                }
            });

            // HTTP Query /?path=check-ownership
            const reqOwnership = new MockRequest(`/?path=check-ownership&uuid=${robloxUserId}&serverId=server-2&playerName=RobloxPlayerOne`, "GET");
            const resOwnership = new MockResponse();
            await handleRequest(reqOwnership as any, resOwnership as any);

            assert.strictEqual(resOwnership.statusCode, 200);
            const ownershipData = JSON.parse(resOwnership.body);
            assert.strictEqual(ownershipData.isHolder, true);
            assert.strictEqual(ownershipData.inVault, true);
            assert.strictEqual(ownershipData.nfts.length, 1);
            assert.strictEqual(ownershipData.nfts[0].tokenId, "301");
            assert.ok(ownershipData.linkedPlatforms.includes(robloxUserId));
        });
    });
});
