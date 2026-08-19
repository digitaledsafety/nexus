import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { prepareAddon, ROOT } from "../scripts/env-manager.js";

describe("Environment Manager Logic", () => {
    const configJsPath = path.join(ROOT, "addons", "minecraft-bedrock-addon", "development_behavior_packs", "behavior_pack_sample", "scripts", "config.js");
    const mockDeploymentPath = path.join(ROOT, "ignition", "deployments", "chain-31337");
    const mockAddressesFile = path.join(mockDeploymentPath, "deployed_addresses.json");

    const resetConfigToDefaults = () => {
        const defaultContent = 'export const WS_URL = "ws://127.0.0.1:9001";\nexport const SERVER_ID = "local-dev";\nexport const NEXUS_ADDRESS = "0x0000000000000000000000000000000000000000";\n';
        fs.writeFileSync(configJsPath, defaultContent);
    };

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
        resetConfigToDefaults();
    });

    it("should prepare local addon with default values in config.js", async () => {
        await prepareAddon();

        const content = fs.readFileSync(configJsPath, "utf8");

        assert.ok(content.includes('export const WS_URL = "ws://127.0.0.1:9001";'));
        assert.ok(content.includes('export const SERVER_ID = "local-dev";'));
        assert.ok(content.includes('export const NEXUS_ADDRESS = "0xLOCAL_NEXUS_ADDRESS";'));
    });

    it("should prepare local addon with custom SERVER_ID and WS_URL", async () => {
        process.env.SERVER_ID = "custom-server";
        process.env.WS_URL = "127.0.0.1:9001";
        await prepareAddon();

        const content = fs.readFileSync(configJsPath, "utf8");

        assert.ok(content.includes('export const WS_URL = "127.0.0.1:9001";'));
        assert.ok(content.includes('export const SERVER_ID = "custom-server";'));
    });

    it("should prepare staging addon with staging environment variables", async () => {
        process.env.APP_ENV = "staging";
        process.env.STAGING_BRIDGE_URL = "wss://staging-bridge.example.com";
        process.env.STAGING_BRAGNFT_ADDRESS = "0xSTAGING_NEXUS_ADDRESS";
        process.env.SERVER_ID = "staging-server";

        await prepareAddon();

        const content = fs.readFileSync(configJsPath, "utf8");

        assert.ok(content.includes('export const WS_URL = "wss://staging-bridge.example.com";'));
        assert.ok(content.includes('export const SERVER_ID = "staging-server";'));
        assert.ok(content.includes('export const NEXUS_ADDRESS = "0xSTAGING_NEXUS_ADDRESS";'));
    });

    it("should import configuration constants in main.js from config.js", () => {
        const rawSourcePath = path.join(ROOT, "addons", "minecraft-bedrock-addon", "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(rawSourcePath, "utf8");

        assert.ok(content.includes('import { WS_URL, SERVER_ID, NEXUS_ADDRESS } from "./config.js";'));
    });
});
