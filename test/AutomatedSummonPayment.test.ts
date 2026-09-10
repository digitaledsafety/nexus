import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { EventEmitter } from "node:events";
import { Readable } from "node:stream";
import { privateKeyToAccount } from "viem/accounts";
import {
    handleRequest,
    mappings,
    statusCache,
    serverConfigs,
    handleSummonCommand,
    setPreAuthorization,
    getPreAuthorization,
    preAuthorizations,
    executeVaultTransferAndPayment
} from "../scripts/nft-bridge.js";

class MockResponse extends EventEmitter {
    statusCode: number = 200;
    headers: Record<string, string> = {};
    body: string = "";
    writableEnded: boolean = false;

    setHeader(name: string, value: string) {
        this.headers[name] = value;
    }

    writeHead(code: number, headers: Record<string, string> = {}) {
        this.statusCode = code;
        this.headers = { ...this.headers, ...headers };
    }

    end(chunk?: any) {
        if (chunk) this.body += chunk;
        this.writableEnded = true;
        this.emit("finish");
    }
}

describe("Automated Summon Payment & Pre-authorization Test Suite", () => {
    const testPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const account = privateKeyToAccount(testPrivateKey as any);

    beforeEach(() => {
        mappings.clear();
        statusCache.clear();
        preAuthorizations.clear();
    });

    it("should manage pre-authorizations via setPreAuthorization and getPreAuthorization", () => {
        const address = account.address;
        assert.strictEqual(getPreAuthorization(address).bragApproved, false);

        setPreAuthorization(address, { bragApproved: true, nftApproved: true });
        const current = getPreAuthorization(address);
        assert.strictEqual(current.bragApproved, true);
        assert.strictEqual(current.nftApproved, true);
    });

    it("should accept pre-authorization submission via HTTP /verify-preauth", async () => {
        const address = account.address;
        const payload = JSON.stringify({
            address,
            bragApproved: true,
            nftApproved: true,
            skipVerify: true
        });

        const req: any = Readable.from([Buffer.from(payload)]);
        req.method = "POST";
        req.url = "/verify-preauth";

        const res = new MockResponse();
        handleRequest(req, res);

        await new Promise((resolve) => res.on("finish", resolve));

        assert.strictEqual(res.statusCode, 200);
        const data = JSON.parse(res.body);
        assert.strictEqual(data.success, true);
        assert.strictEqual(data.address, address);

        const preauth = getPreAuthorization(address);
        assert.strictEqual(preauth.bragApproved, true);
    });

    it("should require pre-authorization if NFT is in wallet and user attempts /nexus:summon", async () => {
        const platformId = "xuid-summon-user-1";
        mappings.set(platformId, account.address);

        const targetVault = "0x1111111111111111111111111111111111111111";
        serverConfigs["server-1"] = { vaultAddress: targetVault, name: "Survival Server", summonFeeBrag: "10" };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [
                {
                    tokenId: "777",
                    nftContract: "0xBragNFTAddress",
                    location: "Wallet",
                    image: "http://example.com/nft.png",
                    animation_url: "http://example.com/structure.mcstructure",
                    mcstructure: true
                }
            ],
            vaults: {
                [targetVault.toLowerCase()]: []
            }
        });

        // Preauth missing -> should prompt for preauth
        const resNoPreauth = await handleSummonCommand("777", platformId, "server-1", "PlayerOne");
        assert.strictEqual(resNoPreauth.success, false);
        assert.strictEqual(resNoPreauth.reason, "preauth_required");

        // Set preauth -> should succeed and execute automated transfer + BRAG fee
        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });
        const resWithPreauth = await handleSummonCommand("777", platformId, "server-1", "PlayerOne");
        assert.strictEqual(resWithPreauth.success, true);
        assert.strictEqual(resWithPreauth.feePaid, "10");
        assert.strictEqual(resWithPreauth.tokenId, "777");

        // Secondary summon -> should recognize NFT is ALREADY in vault (single-summon / in-vault rule)
        const resAlreadyInVault = await handleSummonCommand("777", platformId, "server-1", "PlayerOne");
        assert.strictEqual(resAlreadyInVault.success, true);
        assert.strictEqual(resAlreadyInVault.alreadyInVault, true);
        assert.strictEqual(resAlreadyInVault.feePaid, "0");
    });

    it("should execute vault transfer and status update via executeVaultTransferAndPayment", () => {
        const address = account.address;
        const targetVault = "0x2222222222222222222222222222222222222222";
        const nft = {
            tokenId: "888",
            nftContract: "0xBragNFTAddress",
            image: "http://example.com/nft.png",
            animation_url: "http://example.com/model.mcstructure"
        };

        statusCache.set(address.toLowerCase(), {
            walletNfts: [nft],
            vaults: {}
        });

        executeVaultTransferAndPayment(address, nft, targetVault.toLowerCase(), "10", "Creative Server");

        const updated = statusCache.get(address.toLowerCase());
        assert.strictEqual(updated.walletNfts.length, 0);
        assert.strictEqual(updated.vaults[targetVault.toLowerCase()].length, 1);
        assert.strictEqual(updated.vaults[targetVault.toLowerCase()][0].tokenId, "888");
        assert.strictEqual(updated.vaults[targetVault.toLowerCase()][0].location, "Creative Server");
    });
});
