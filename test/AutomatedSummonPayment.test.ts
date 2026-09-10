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

describe("Automated Summon Payment & Critical Test Cases Suite", () => {
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

    it("1. Critical Test: Successfully summoning from another game platform's vault to current game client's vault", async () => {
        const platformId = "xuid-cross-platform-player";
        mappings.set(platformId, account.address);

        const robloxVault = "0x1111111111111111111111111111111111111111";
        const minecraftVault = "0x2222222222222222222222222222222222222222";

        serverConfigs["roblox-server"] = { vaultAddress: robloxVault, name: "Roblox Game Hub", summonFeeBrag: "10" };
        serverConfigs["minecraft-server"] = { vaultAddress: minecraftVault, name: "Minecraft Realm", summonFeeBrag: "10" };

        const nftInRobloxVault = {
            tokenId: "555",
            nftContract: "0xBragNFTAddress",
            location: "Roblox Game Hub",
            image: "http://example.com/nft.png",
            animation_url: "http://example.com/castle.mcstructure",
            mcstructure: true
        };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [],
            bragBalance: "50",
            vaults: {
                [robloxVault.toLowerCase()]: [nftInRobloxVault],
                [minecraftVault.toLowerCase()]: []
            }
        });

        // Pre-authorize user
        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });

        // Summon on minecraft-server -> transfers from Roblox Vault to Minecraft Vault
        const res = await handleSummonCommand("555", platformId, "minecraft-server", "Steve");
        assert.strictEqual(res.success, true);
        assert.strictEqual(res.tokenId, "555");
        assert.strictEqual(res.feePaid, "10");

        // Verify status cache shows NFT transferred to Minecraft Vault and BRAG balance deducted
        const updatedStatus = statusCache.get(account.address.toLowerCase());
        assert.strictEqual(updatedStatus.bragBalance, "40");
        assert.strictEqual(updatedStatus.vaults[robloxVault.toLowerCase()].length, 0);
        assert.strictEqual(updatedStatus.vaults[minecraftVault.toLowerCase()].length, 1);
        assert.strictEqual(updatedStatus.vaults[minecraftVault.toLowerCase()][0].location, "Minecraft Realm");
    });

    it("2. Critical Test: Failing when summoning an NFT not owned by user at all / not in any vault or wallet", async () => {
        const platformId = "xuid-user-no-nfts";
        mappings.set(platformId, account.address);

        const mcVault = "0x3333333333333333333333333333333333333333";
        serverConfigs["minecraft-server-1"] = { vaultAddress: mcVault, name: "Survival", summonFeeBrag: "10" };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [],
            bragBalance: "100",
            vaults: {
                [mcVault.toLowerCase()]: []
            }
        });

        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });

        // User attempts to summon tokenId "999" which they don't own
        const res = await handleSummonCommand("999", platformId, "minecraft-server-1", "Steve");
        assert.strictEqual(res.success, false);
        assert.strictEqual(res.reason, "not_in_vault");
    });

    it("3. Critical Test: Single-summon in-vault checking (does not re-charge fee when already in vault)", async () => {
        const platformId = "xuid-user-already-in-vault";
        mappings.set(platformId, account.address);

        const currentVault = "0x4444444444444444444444444444444444444444";
        serverConfigs["server-1"] = { vaultAddress: currentVault, name: "Survival Server", summonFeeBrag: "10" };

        const nftInCurrentVault = {
            tokenId: "777",
            nftContract: "0xBragNFTAddress",
            location: "Survival Server",
            image: "http://example.com/nft.png",
            animation_url: "http://example.com/structure.mcstructure",
            mcstructure: true
        };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [],
            bragBalance: "20",
            vaults: {
                [currentVault.toLowerCase()]: [nftInCurrentVault]
            }
        });

        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });

        // First summon when already in current vault
        const resFirst = await handleSummonCommand("777", platformId, "server-1", "Alex");
        assert.strictEqual(resFirst.success, true);
        assert.strictEqual(resFirst.alreadyInVault, true);
        assert.strictEqual(resFirst.feePaid, "0");

        // BRAG balance should remain unchanged (20)
        assert.strictEqual(statusCache.get(account.address.toLowerCase()).bragBalance, "20");
    });

    it("4. Critical Test: Failing when user has insufficient BRAG token balance", async () => {
        const platformId = "xuid-user-low-brag";
        mappings.set(platformId, account.address);

        const currentVault = "0x5555555555555555555555555555555555555555";
        serverConfigs["server-1"] = { vaultAddress: currentVault, name: "Survival Server", summonFeeBrag: "10" };

        statusCache.set(account.address.toLowerCase(), {
            walletNfts: [
                {
                    tokenId: "303",
                    nftContract: "0xBragNFTAddress",
                    location: "Wallet",
                    image: "http://example.com/nft.png",
                    animation_url: "http://example.com/house.mcstructure",
                    mcstructure: true
                }
            ],
            bragBalance: "3", // Only 3 BRAG available, but 10 BRAG required
            vaults: {
                [currentVault.toLowerCase()]: []
            }
        });

        setPreAuthorization(account.address, { bragApproved: true, nftApproved: true });

        // Summon attempt -> should fail with insufficient_brag
        const res = await handleSummonCommand("303", platformId, "server-1", "Steve");
        assert.strictEqual(res.success, false);
        assert.strictEqual(res.reason, "insufficient_brag");
        assert.strictEqual(res.available, "3");
        assert.strictEqual(res.required, "10");
    });
});
