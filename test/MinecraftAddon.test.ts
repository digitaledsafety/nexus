import assert from "node:assert/strict";
import { describe, it, beforeEach, mock } from "node:test";

// Mocking Minecraft Modules
const mockPlayer = {
    name: "test-player",
    id: "test-uuid",
    xuid: "test-xuid",
    sendMessage: mock.fn(),
    addTag: mock.fn(),
    removeTag: mock.fn(),
    onScreenDisplay: {
        setActionBar: mock.fn()
    },
    getDynamicProperty: mock.fn(),
    setDynamicProperty: mock.fn()
};

const mockDimension = {
    runCommand: mock.fn()
};

const mockWorld = {
    getDimension: () => mockDimension
};

const SERVER_ID = "server-1";
const NEXUS_ADDRESS = "0x1234567890123456789012345678901234567890";

// Logic copied from addons/minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample/scripts/main.js
async function checkNftStatus(player: any, world: any) {
    const platformId = player.xuid;
    if (!platformId) return;

    try {
        // Send check command via WebSocket
        world.getDimension("overworld").runCommand(`say !check ${platformId} ${SERVER_ID} "${player.name}"`);
    } catch (error) {
        console.warn("NFT Bridge Error: " + error);
    }
}

async function handleChat(event: any, world: any) {
    const message = event.message.trim();
    const player = event.sender;
    const platformId = player.xuid;

    if (message.toLowerCase() === "!register") {
        if (!platformId) {
            player.sendMessage("§cYou must be signed in to Xbox Live to register.§r");
            return;
        }
        player.sendMessage("§bRequesting registration link...§r");

        try {
            world.getDimension("overworld").runCommand(`say !register ${platformId} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            player.sendMessage("§cBridge server is offline.§r");
        }
    } else if (message.toLowerCase() === "!my_nfts") {
        if (!platformId) {
            player.sendMessage("§cYou must be signed in to Xbox Live to view your NFTs.§r");
            return;
        }

        player.sendMessage("§bFetching your NFTs...§r");

        try {
            world.getDimension("overworld").runCommand(`say !my_nfts ${platformId} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            player.sendMessage("§cBridge server error.§r");
        }
    } else if (message.toLowerCase() === "!nexus") {
        player.sendMessage(`§6[Nexus]§r Contract Address: §f${NEXUS_ADDRESS}§r`);
    }
}

describe('Minecraft Script Logic', () => {
    beforeEach(() => {
        // Reset mocks
        mockPlayer.sendMessage.mock.resetCalls();
        mockPlayer.addTag.mock.resetCalls();
        mockPlayer.removeTag.mock.resetCalls();
        mockPlayer.onScreenDisplay.setActionBar.mock.resetCalls();
        mockPlayer.getDynamicProperty.mock.resetCalls();
        mockPlayer.setDynamicProperty.mock.resetCalls();
        mockDimension.runCommand.mock.resetCalls();
    });

    describe('checkNftStatus', () => {
        it('should send !check command via WebSocket', async () => {
            await checkNftStatus(mockPlayer, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say !check test-xuid server-1 "test-player"`);
        });

        it('should handle player name with spaces', async () => {
            const playerWithSpaces = { ...mockPlayer, name: "Player Name With Spaces" };
            await checkNftStatus(playerWithSpaces, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say !check test-xuid server-1 "Player Name With Spaces"`);
        });
    });

    describe('handleChat', () => {
        it('should send !my_nfts command via WebSocket', async () => {
            const event = { message: "!my_nfts", sender: mockPlayer };
            await handleChat(event, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say !my_nfts test-xuid server-1 "test-player"`);
        });

        it('should provide registration via WebSocket when !register is typed', async () => {
            const event = { message: "!register", sender: mockPlayer };
            await handleChat(event, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say !register test-xuid server-1 "test-player"`);
        });

        it('should not intercept other messages', async () => {
            const event = { message: "Hello", sender: mockPlayer };
            await handleChat(event, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 0);
        });

        it('should display Nexus address when !nexus is typed', async () => {
            const event = { message: "!nexus", sender: mockPlayer };
            await handleChat(event, mockWorld);

            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.ok(mockPlayer.sendMessage.mock.calls[0].arguments[0].includes(NEXUS_ADDRESS));
        });
    });
});
