import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { prepareAddon, ROOT } from "../scripts/env-manager.js";

describe("Environment Manager Logic", () => {
    const tempDir = path.join(ROOT, "temp_addon");
    const mockDeploymentPath = path.join(ROOT, "ignition", "deployments", "chain-31337");
    const mockAddressesFile = path.join(mockDeploymentPath, "deployed_addresses.json");

    beforeEach(() => {
        // Ensure mock deployment exists for local tests
        if (!fs.existsSync(mockDeploymentPath)) {
            fs.mkdirSync(mockDeploymentPath, { recursive: true });
        }
        fs.writeFileSync(mockAddressesFile, JSON.stringify({
            "AppModule#BragNFT": "0xLOCAL_NEXUS_ADDRESS"
        }));

        // Clear environment variables
        delete process.env.APP_ENV;
        delete process.env.STAGING_BRIDGE_URL;
        delete process.env.STAGING_BRAGNFT_ADDRESS;
        delete process.env.SERVER_ID;
        delete process.env.WS_URL;
        delete process.env.CONTRACT_ADDRESS_BRAGNFT;
    });

    afterEach(() => {
        if (fs.existsSync(tempDir)) {
            fs.rmSync(tempDir, { recursive: true, force: true });
        }
    });

    it("should prepare local addon with default values", async () => {
        await prepareAddon();

        const mainJsPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(mainJsPath, "utf8");

        assert.ok(content.includes('const RAW_WS_URL = "localhost:9001";'));
        assert.ok(content.includes('const RAW_SERVER_ID = "local-dev";'));
        assert.ok(content.includes('const RAW_NEXUS_ADDRESS = "0xLOCAL_NEXUS_ADDRESS";'));
    });

    it("should prepare local addon with custom SERVER_ID and WS_URL", async () => {
        process.env.SERVER_ID = "custom-server";
        process.env.WS_URL = "127.0.0.1:9001";
        await prepareAddon();

        const mainJsPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(mainJsPath, "utf8");

        assert.ok(content.includes('const RAW_WS_URL = "127.0.0.1:9001";'));
        assert.ok(content.includes('const RAW_SERVER_ID = "custom-server";'));
    });

    it("should prepare staging addon with staging environment variables", async () => {
        process.env.APP_ENV = "staging";
        process.env.STAGING_BRIDGE_URL = "wss://staging-bridge.example.com";
        process.env.STAGING_BRAGNFT_ADDRESS = "0xSTAGING_NEXUS_ADDRESS";
        process.env.SERVER_ID = "staging-server";

        await prepareAddon();

        const mainJsPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(mainJsPath, "utf8");

        assert.ok(content.includes('const RAW_WS_URL = "wss://staging-bridge.example.com";'));
        assert.ok(content.includes('const RAW_SERVER_ID = "staging-server";'));
        assert.ok(content.includes('const RAW_NEXUS_ADDRESS = "0xSTAGING_NEXUS_ADDRESS";'));
    });

    it("should fallback to default values in main.js when placeholders remain unreplaced", () => {
        const rawSourcePath = path.join(ROOT, "addons", "minecraft-bedrock-addon", "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(rawSourcePath, "utf8");

        assert.ok(content.includes('const RAW_WS_URL = "__WS_URL__";'));
        assert.ok(content.includes('const WS_URL = (!RAW_WS_URL || RAW_WS_URL.indexOf("__") !== -1) ? "localhost:9001" : RAW_WS_URL;'));
        assert.ok(content.includes('const SERVER_ID = (!RAW_SERVER_ID || RAW_SERVER_ID.indexOf("__") !== -1) ? "local-dev" : RAW_SERVER_ID;'));
        assert.ok(content.includes('const NEXUS_ADDRESS = (!RAW_NEXUS_ADDRESS || RAW_NEXUS_ADDRESS.indexOf("__") !== -1) ? "0x0000000000000000000000000000000000000000" : RAW_NEXUS_ADDRESS;'));
    });
});
