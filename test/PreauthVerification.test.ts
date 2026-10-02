import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
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
    createRegistrationToken,
    pendingTokens
} from "../scripts/nft-bridge.js";

class MockResponse {
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
    }
}

describe("Pre-Authorization End-to-End Verification Suite", () => {
    const testPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const account = privateKeyToAccount(testPrivateKey as any);
    const address = account.address; // Checksummed address

    beforeEach(() => {
        mappings.clear();
        statusCache.clear();
        preAuthorizations.clear();
        pendingTokens.clear();
    });

    it("1. Should check preauth status via GET check-preauth with different address casing", async () => {
        setPreAuthorization(address, { bragApproved: true, nftApproved: true });

        // Query with lowercased address
        const req1: any = new Readable();
        req1._read = () => {};
        req1.method = "GET";
        req1.url = `/?path=check-preauth&address=${address.toLowerCase()}`;
        const res1 = new MockResponse();
        await handleRequest(req1, res1);
        const data1 = JSON.parse(res1.body);
        assert.strictEqual(data1.bragApproved, true);
        assert.strictEqual(data1.nftApproved, true);

        // Query with checksummed address
        const req2: any = new Readable();
        req2._read = () => {};
        req2.method = "GET";
        req2.url = `/?path=check-preauth&address=${address}`;
        const res2 = new MockResponse();
        await handleRequest(req2, res2);
        const data2 = JSON.parse(res2.body);
        assert.strictEqual(data2.bragApproved, true);
        assert.strictEqual(data2.nftApproved, true);
    });

    it("2. Should process /verify-preauth with valid SIWE signature and enable pre-authorization", async () => {
        const domain = "localhost:3000";
        const origin = "http://localhost:3000";
        const statement = "Connect your wallet to Brag Charity.";
        const message = `${domain} wants you to connect your Ethereum account:\n${address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: 31337\nIssued At: ${new Date().toISOString()}`;

        const signature = await account.signMessage({ message });

        const payload = JSON.stringify({
            address,
            bragApproved: true,
            nftApproved: true,
            message,
            signature
        });

        const req: any = Readable.from([Buffer.from(payload)]);
        req.method = "POST";
        req.url = "/verify-preauth";

        const res = new MockResponse();
        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200, `Expected 200 but got ${res.statusCode}: ${res.body}`);
        const data = JSON.parse(res.body);
        assert.strictEqual(data.success, true);

        const preauth = getPreAuthorization(address);
        assert.strictEqual(preauth.bragApproved, true);
        assert.strictEqual(preauth.nftApproved, true);
    });

    it("3. Should automatically set preauth during /verify-link when preauth parameter or flag is passed", async () => {
        const tokenData = await createRegistrationToken("test-platform-user");
        const token = tokenData.token;

        const domain = "localhost:3000";
        const origin = "http://localhost:3000";
        const statement = "Connect your wallet to Brag Charity.";
        const message = `${domain} wants you to connect your Ethereum account:\n${address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: 31337\nIssued At: ${new Date().toISOString()}`;

        const signature = await account.signMessage({ message });

        const payload = JSON.stringify({
            token,
            address,
            preauth: true,
            bragApproved: true,
            nftApproved: true,
            message,
            signature
        });

        const req: any = Readable.from([Buffer.from(payload)]);
        req.method = "POST";
        req.url = "/verify-link";

        const res = new MockResponse();
        await handleRequest(req, res);

        assert.strictEqual(res.statusCode, 200, `Expected 200 but got ${res.statusCode}: ${res.body}`);

        // Verify account linking succeeded
        assert.strictEqual(mappings.get("test-platform-user"), address);

        // Verify pre-authorization was also established
        const preauth = getPreAuthorization(address);
        assert.strictEqual(preauth.bragApproved, true, "Preauth bragApproved should be true after linking with preauth flag");
        assert.strictEqual(preauth.nftApproved, true, "Preauth nftApproved should be true after linking with preauth flag");
    });

    it("4. Should reject /verify-preauth when invalid signature is supplied for non-dev chain or strict verification", async () => {
        const message = `localhost:3000 wants you to connect your Ethereum account:\n${address}`;
        const invalidSignature = "0x" + "00".repeat(65);

        const payload = JSON.stringify({
            address,
            bragApproved: true,
            nftApproved: true,
            message,
            signature: invalidSignature,
            skipVerify: false
        });

        const req: any = Readable.from([Buffer.from(payload)]);
        req.method = "POST";
        req.url = "/verify-preauth";

        const res = new MockResponse();
        await handleRequest(req, res);

        // If strict verification runs, should return 401 or 400
        assert.notStrictEqual(res.statusCode, 200, "Should not return 200 for invalid signature");
    });
});
