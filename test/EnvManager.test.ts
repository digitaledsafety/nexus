import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { prepareAddon, ROOT, getLocalClientPaths, injectToLocalClient } from "../scripts/env-manager.js";

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
        delete process.env.MC_EDITION;
        delete process.env.MC_SERVER_VERSION;
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

        assert.ok(content.includes('const WS_URL = "localhost:9001";'));
        assert.ok(content.includes('const SERVER_ID = "local-dev";'));
        assert.ok(content.includes('const NEXUS_ADDRESS = "0xLOCAL_NEXUS_ADDRESS";'));
    });

    it("should prepare local addon with custom SERVER_ID", async () => {
        process.env.SERVER_ID = "custom-server";
        await prepareAddon();

        const mainJsPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(mainJsPath, "utf8");

        assert.ok(content.includes('const SERVER_ID = "custom-server";'));
    });

    it("should prepare staging addon with staging environment variables", async () => {
        process.env.APP_ENV = "staging";
        process.env.STAGING_BRIDGE_URL = "wss://staging-bridge.example.com";
        process.env.STAGING_BRAGNFT_ADDRESS = "0xSTAGING_NEXUS_ADDRESS";
        process.env.SERVER_ID = "staging-server";

        await prepareAddon();

        const mainJsPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "scripts", "main.js");
        const content = fs.readFileSync(mainJsPath, "utf8");

        assert.ok(content.includes('const WS_URL = "wss://staging-bridge.example.com";'));
        assert.ok(content.includes('const SERVER_ID = "staging-server";'));
        assert.ok(content.includes('const NEXUS_ADDRESS = "0xSTAGING_NEXUS_ADDRESS";'));
    });

    it("should fallback to stable version 1.10.0 for @minecraft/server when MC_EDITION=education", async () => {
        process.env.MC_EDITION = "education";
        await prepareAddon();

        const manifestPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "manifest.json");
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        const serverDep = manifest.dependencies.find((dep: any) => dep.module_name === "@minecraft/server");

        assert.strictEqual(serverDep.version, "1.10.0");
    });

    it("should allow custom version override via MC_SERVER_VERSION", async () => {
        process.env.MC_SERVER_VERSION = "1.8.0-beta";
        await prepareAddon();

        const manifestPath = path.join(tempDir, "development_behavior_packs", "behavior_pack_sample", "manifest.json");
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        const serverDep = manifest.dependencies.find((dep: any) => dep.module_name === "@minecraft/server");

        assert.strictEqual(serverDep.version, "1.8.0-beta");
    });

    describe("Local Client Injection", () => {
        const mockBaseDir = path.join(ROOT, "test_mock_com_mojang");

        beforeEach(() => {
            if (fs.existsSync(mockBaseDir)) {
                fs.rmSync(mockBaseDir, { recursive: true, force: true });
            }
            fs.mkdirSync(mockBaseDir, { recursive: true });
        });

        afterEach(() => {
            if (fs.existsSync(mockBaseDir)) {
                fs.rmSync(mockBaseDir, { recursive: true, force: true });
            }
        });

        it("should successfully inject behavior and resource packs to mock directories", async () => {
            await prepareAddon();

            const originalAppData = process.env.APPDATA;
            const originalLocalAppData = process.env.LOCALAPPDATA;

            process.env.APPDATA = path.join(mockBaseDir, "AppData", "Roaming");
            process.env.LOCALAPPDATA = path.join(mockBaseDir, "AppData", "Local");

            // Create mock folders so existsSync passes
            const mceeMsiPath = path.join(process.env.APPDATA, "Minecraft Education Edition", "games", "com.mojang");
            fs.mkdirSync(mceeMsiPath, { recursive: true });

            // Check path resolution
            const resolvedPaths = getLocalClientPaths("education-msi");
            assert.strictEqual(resolvedPaths[0], mceeMsiPath);

            // Test client injection
            const result = injectToLocalClient(tempDir, "education-msi");
            assert.strictEqual(result.success, true);
            assert.ok(fs.existsSync(path.join(mceeMsiPath, "development_behavior_packs", "behavior_pack_sample")));
            assert.ok(fs.existsSync(path.join(mceeMsiPath, "development_resource_packs", "resource_pack_sample")));

            // Clean up environment overrides
            process.env.APPDATA = originalAppData;
            process.env.LOCALAPPDATA = originalLocalAppData;
        });
    });
});
