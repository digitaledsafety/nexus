import assert from "node:assert/strict";
import { describe, it } from "node:test";
import fs from "node:fs";
import path from "node:path";

const BEHAVIOR_PATH = "addons/minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample";
const RESOURCE_PATH = "addons/minecraft-bedrock-addon/development_resource_packs/resource_pack_sample";

describe('Minecraft Addon Validation', () => {

    describe('Behavior Pack Manifest (manifest.json)', () => {
        const manifestPath = path.join(BEHAVIOR_PATH, 'manifest.json');
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

        it('should require @minecraft/server version 2.9.0', () => {
            const serverDep = manifest.dependencies.find((dep: any) => dep.module_name === '@minecraft/server');
            assert.ok(serverDep, '@minecraft/server dependency missing');
            assert.strictEqual(serverDep.version, '2.9.0');
        });

        it('should require @minecraft/server-net dependency', () => {
            const netDep = manifest.dependencies.find((dep: any) => dep.module_name === '@minecraft/server-net');
            assert.ok(netDep, '@minecraft/server-net dependency missing');
            assert.strictEqual(netDep.version, '1.0.0-beta');
        });

        it('should have min_engine_version [1, 21, 0] or higher', () => {
            const version = manifest.header.min_engine_version;
            assert.ok(Array.isArray(version));
            assert.ok(version[0] >= 1 && version[1] >= 21);
        });
    });

    describe('Cow Entity Behavior Pack (cow.json)', () => {
        const cowJsonPath = path.join(BEHAVIOR_PATH, 'entities/cow.json');
        const cowJson = JSON.parse(fs.readFileSync(cowJsonPath, 'utf8'));

        it('should have format_version 1.20.0 or higher', () => {
            const version = cowJson.format_version.split('.').map(Number);
            assert.ok(version[0] >= 1 && version[1] >= 20);
        });

        it('should define properties in the description block', () => {
            const description = cowJson['minecraft:entity'].description;
            assert.ok(description.properties, 'Properties block missing from description');
            assert.ok(description.properties['minecraft:climate_variant'], 'climate_variant missing');
            assert.ok(description.properties['minecraft:sound_variant'], 'sound_variant missing');
        });

        it('should define actor_properties in the components block', () => {
            const components = cowJson['minecraft:entity'].components;
            assert.ok(components['minecraft:actor_properties'], 'actor_properties missing from components');
            assert.ok(Array.isArray(components['minecraft:actor_properties'].properties), 'actor_properties.properties should be an array');
        });

        it('should use valid types for properties (No string type)', () => {
            const properties = cowJson['minecraft:entity'].description.properties;
            assert.notStrictEqual(properties['minecraft:sound_variant'].type, 'string', 'Property type "string" is not supported in actor properties');
            assert.strictEqual(properties['minecraft:sound_variant'].type, 'int', 'sound_variant should be an int or enum');
        });
    });

    describe('Resource Pack (sounds.json)', () => {
        const soundsJsonPath = path.join(RESOURCE_PATH, 'sounds.json');

        it('should exist', () => {
            assert.ok(fs.existsSync(soundsJsonPath));
        });

        const soundsJson = JSON.parse(fs.readFileSync(soundsJsonPath, 'utf8'));

        it('should have a sound variant that returns a string result (Fix for "Expected a string result")', () => {
            const cowSound = soundsJson.entity_sounds.entities.cow;
            const variant = cowSound.variant;
            assert.ok(typeof variant === 'string');
            assert.ok(variant.includes("'"), 'Molang expression should return a string literal (quoted)');
        });
    });

    describe('Texture Assets', () => {
        it('should have the wolf collar textures', () => {
            const wolfPath = path.join(RESOURCE_PATH, 'textures/entity/wolf');
            assert.ok(fs.existsSync(path.join(wolfPath, 'wolf_collar_baby.png')), 'wolf_collar_baby.png missing');
            assert.ok(fs.existsSync(path.join(wolfPath, 'wolf_collar_baby_mers.png')), 'wolf_collar_baby_mers.png missing');
        });

        it('should have non-empty textures', () => {
            const wolfPath = path.join(RESOURCE_PATH, 'textures/entity/wolf');
            const stats = fs.statSync(path.join(wolfPath, 'wolf_collar_baby_mers.png'));
            assert.ok(stats.size > 0, 'Texture file is empty (Invalid for engine)');
        });
    });

    describe('UI Modifications (Subpacks)', () => {
        const hudScreenHiddenPath = path.join(RESOURCE_PATH, 'subpacks/hidden/ui/hud_screen.json');
        const hudScreenDefaultPath = path.join(RESOURCE_PATH, 'subpacks/default/ui/hud_screen.json');
        const uiDefsPath = path.join(RESOURCE_PATH, 'ui/_ui_defs.json');
        const manifestPath = path.join(RESOURCE_PATH, 'manifest.json');

        it('should have subpacks defined in manifest.json', () => {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            assert.ok(Array.isArray(manifest.subpacks), 'manifest.subpacks should be an array');
            assert.strictEqual(manifest.subpacks.length, 2);
            assert.strictEqual(manifest.subpacks[0].folder_name, 'default');
            assert.strictEqual(manifest.subpacks[1].folder_name, 'hidden');
        });

        it('should have hidden subpack with hud_screen.json that hides debug text', () => {
            assert.ok(fs.existsSync(hudScreenHiddenPath), 'hidden hud_screen.json missing');
            const hudScreen = JSON.parse(fs.readFileSync(hudScreenHiddenPath, 'utf8'));

            assert.strictEqual(hudScreen.namespace, 'hud', 'Namespace should be hud');
            assert.ok(hudScreen.preview_info_panel?.modifications, 'preview_info_panel modifications missing');
            assert.ok(hudScreen.debug_panel?.modifications, 'debug_panel modifications missing');
        });

        it('should have default subpack with hud_screen.json that is empty/neutral', () => {
            assert.ok(fs.existsSync(hudScreenDefaultPath), 'default hud_screen.json missing');
            const hudScreen = JSON.parse(fs.readFileSync(hudScreenDefaultPath, 'utf8'));
            assert.strictEqual(hudScreen.namespace, 'hud', 'Namespace should be hud');
            assert.ok(!hudScreen.preview_info_panel, 'Default subpack should not hide preview_info_panel');
        });

        it('should have _ui_defs.json including hud_screen.json', () => {
            assert.ok(fs.existsSync(uiDefsPath), '_ui_defs.json missing');
            const uiDefs = JSON.parse(fs.readFileSync(uiDefsPath, 'utf8'));
            assert.ok(uiDefs.ui_defs.includes('ui/hud_screen.json'), 'hud_screen.json not in ui_defs');
        });
    });

    describe('Custom Commands and Connection Security (main.js)', () => {
        const mainJsPath = path.join(BEHAVIOR_PATH, 'scripts/main.js');
        const mainJsContent = fs.readFileSync(mainJsPath, 'utf8');

        it('should register nexus:summon custom command using script websocket bridge', () => {
            assert.ok(mainJsContent.includes('nexus:summon'), 'nexus:summon missing from main.js');
            assert.ok(mainJsContent.includes('Summon an owned structure NFT into the world'), 'nexus:summon description missing');
            assert.ok(mainJsContent.includes('sendBridgeMessage'), 'sendBridgeMessage trigger missing');
        });

        it('should NOT register debug nexus:reconnect custom command', () => {
            assert.ok(!mainJsContent.includes('nexus:reconnect'), 'nexus:reconnect command should be removed from main.js');
        });

        it('should defer websocket.connect within system.run to prevent restricted execution errors', () => {
            assert.ok(mainJsContent.includes('system.run(async () =>'), 'websocket connection logic must be wrapped in system.run');
            assert.ok(mainJsContent.includes('websocket.connect(WS_URL)'), 'websocket.connect must be present');
        });

        it('should kick players when WebSocket bridge connection is missing or lost', () => {
            assert.ok(mainJsContent.includes('kickPlayer'), 'kickPlayer function missing from main.js');
            assert.ok(mainJsContent.includes('runCommand(`kick'), 'kick command invocation missing from main.js');
        });
    });

    describe('Bridge Structure Summon Handler (handleSummonCommand)', () => {
        it('should reject unlinked players', async () => {
            const { handleSummonCommand } = await import('../scripts/nft-bridge.js');
            const res = await handleSummonCommand("1", "unlinked_xuid", "server-1", "TestPlayer");
            assert.strictEqual(res.success, false);
            assert.strictEqual(res.reason, "unlinked");
        });

        it('should reject players with no NFTs in vault', async () => {
            const { handleSummonCommand, mappings } = await import('../scripts/nft-bridge.js');
            mappings.set("test_xuid", "0x1111111111111111111111111111111111111111");
            const res = await handleSummonCommand("1", "test_xuid", "server-1", "TestPlayer");
            assert.strictEqual(res.success, false);
            assert.strictEqual(res.reason, "not_in_vault");
        });

        it('should reject non-existent targets when target is specified', async () => {
            const { handleSummonCommand, mappings } = await import('../scripts/nft-bridge.js');
            const addr = "0x2222222222222222222222222222222222222222";
            mappings.set("xuid_with_vault", addr);
            const res = await handleSummonCommand("99999", "xuid_with_vault", "server-1", "TestPlayer");
            assert.strictEqual(res.success, false);
            assert.strictEqual(res.reason, "not_in_vault");
        });
    });
});
