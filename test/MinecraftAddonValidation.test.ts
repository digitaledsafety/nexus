import assert from "node:assert/strict";
import { describe, it } from "node:test";
import fs from "node:fs";
import path from "node:path";

const BEHAVIOR_PATH = "addons/minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample";
const RESOURCE_PATH = "addons/minecraft-bedrock-addon/development_resource_packs/resource_pack_sample";

describe('Minecraft Addon Validation', () => {

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

        it('should NOT define properties in the components block (Failure Mode)', () => {
            const components = cowJson['minecraft:entity'].components;
            assert.ok(!components['minecraft:actor_properties'], 'actor_properties should not be in components');
            assert.ok(!components['minecraft:properties'], 'properties should not be in components');
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
            // The variant in sounds.json for entity_sounds must be a Molang expression that resolves to a string key in entity_sounds.json or a hardcoded string.
            // Our fix uses: "query.property('minecraft:sound_variant') == 0 ? 'default' : 'default'"
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

    describe('UI Modifications', () => {
        const hudScreenPath = path.join(RESOURCE_PATH, 'ui/hud_screen.json');
        const uiDefsPath = path.join(RESOURCE_PATH, 'ui/_ui_defs.json');

        it('should have hud_screen.json to hide preview text', () => {
            assert.ok(fs.existsSync(hudScreenPath), 'hud_screen.json missing');
            const hudScreen = JSON.parse(fs.readFileSync(hudScreenPath, 'utf8'));

            assert.strictEqual(hudScreen.namespace, 'hud', 'Namespace should be hud');
            assert.ok(hudScreen.preview_info_panel?.modifications, 'preview_info_panel modifications missing');
            assert.ok(hudScreen.debug_panel?.modifications, 'debug_panel modifications missing');
        });

        it('should have _ui_defs.json including hud_screen.json', () => {
            assert.ok(fs.existsSync(uiDefsPath), '_ui_defs.json missing');
            const uiDefs = JSON.parse(fs.readFileSync(uiDefsPath, 'utf8'));
            assert.ok(uiDefs.ui_defs.includes('ui/hud_screen.json'), 'hud_screen.json not in ui_defs');
        });
    });
});
