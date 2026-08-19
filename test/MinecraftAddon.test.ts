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

const mockSystem = {
    run: (fn: Function) => fn()
};

const SERVER_ID = "server-1";
const NEXUS_ADDRESS = "0x1234567890123456789012345678901234567890";

// Custom Command Registry Mock Implementation
class MockCustomCommandRegistry {
    commands: Map<string, { config: any, callback: Function }> = new Map();

    registerCommand(config: any, callback: Function) {
        this.commands.set(config.name, { config, callback });
    }

    executeCommand(name: string, origin: any) {
        const cmd = this.commands.get(name);
        if (!cmd) throw new Error(`Command ${name} not registered`);
        return cmd.callback(origin);
    }
}

// Logic copied from addons/minecraft-bedrock-addon/development_behavior_packs/behavior_pack_sample/scripts/main.js
async function checkNftStatus(player: any, world: any, system: any = mockSystem) {
    const platformId = player?.xuid || player?.id;
    if (!player || !platformId) return;

    system.run(() => {
        try {
            // Send check command via WebSocket
            world.getDimension("overworld").runCommand(`say nexus:check ${platformId} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            console.warn("NFT Bridge Error: " + error);
        }
    });
}

function registerCustomCommands(registry: MockCustomCommandRegistry, world: any, system: any = mockSystem) {
    registry.registerCommand(
        {
            name: "nexus:register",
            description: "Request registration link for NFT bridge",
            permissionLevel: "Any",
            cheatsRequired: false
        },
        (origin: any) => {
            const player = origin.initiator ?? origin.sourceEntity;
            const platformId = player?.xuid || player?.id;
            if (!player || !platformId) {
                player?.sendMessage?.("§cYou must be signed in to Xbox Live to register.§r");
                return { status: 0 };
            }
            player.sendMessage("§bRequesting registration link...§r");

            system.run(() => {
                try {
                    world.getDimension("overworld").runCommand(`say nexus:register ${platformId} ${SERVER_ID} "${player.name}"`);
                } catch (error) {
                    player.sendMessage("§cBridge server is offline.§r");
                }
            });
            return { status: 1 };
        }
    );

    registry.registerCommand(
        {
            name: "nexus:my_nfts",
            description: "Fetch and display your NFTs",
            permissionLevel: "Any",
            cheatsRequired: false
        },
        (origin: any) => {
            const player = origin.initiator ?? origin.sourceEntity;
            const platformId = player?.xuid || player?.id;
            if (!player || !platformId) {
                player?.sendMessage?.("§cYou must be signed in to Xbox Live to view your NFTs.§r");
                return { status: 0 };
            }

            player.sendMessage("§bFetching your NFTs...§r");

            system.run(() => {
                try {
                    world.getDimension("overworld").runCommand(`say nexus:my_nfts ${platformId} ${SERVER_ID} "${player.name}"`);
                } catch (error) {
                    player.sendMessage("§cBridge server error.§r");
                }
            });
            return { status: 1 };
        }
    );

    registry.registerCommand(
        {
            name: "nexus:contract",
            description: "Display the Nexus contract address",
            permissionLevel: "Any",
            cheatsRequired: false
        },
        (origin: any) => {
            const player = origin.initiator ?? origin.sourceEntity;
            if (player?.sendMessage) {
                player.sendMessage(`§6[Nexus]§r Contract Address: §f${NEXUS_ADDRESS}§r`);
            }
            return { status: 1 };
        }
    );

    registry.registerCommand(
        {
            name: "nexus:reconnect",
            description: "Reconnect to the NFT bridge server",
            permissionLevel: "Any",
            cheatsRequired: false
        },
        (origin: any) => {
            const player = origin.initiator ?? origin.sourceEntity;
            if (player?.sendMessage) {
                player.sendMessage("§bAttempting to reconnect to bridge...§r");
            }
            return { status: 1 };
        }
    );
}

describe('Minecraft Custom Commands Logic', () => {
    let registry: MockCustomCommandRegistry;

    beforeEach(() => {
        // Reset mocks
        mockPlayer.sendMessage.mock.resetCalls();
        mockPlayer.addTag.mock.resetCalls();
        mockPlayer.removeTag.mock.resetCalls();
        mockPlayer.onScreenDisplay.setActionBar.mock.resetCalls();
        mockPlayer.getDynamicProperty.mock.resetCalls();
        mockPlayer.setDynamicProperty.mock.resetCalls();
        mockDimension.runCommand.mock.resetCalls();

        registry = new MockCustomCommandRegistry();
        registerCustomCommands(registry, mockWorld);
    });

    describe('checkNftStatus', () => {
        it('should send nexus:check command via WebSocket', async () => {
            await checkNftStatus(mockPlayer, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say nexus:check test-xuid server-1 "test-player"`);
        });

        it('should handle player name with spaces', async () => {
            const playerWithSpaces = { ...mockPlayer, name: "Player Name With Spaces" };
            await checkNftStatus(playerWithSpaces, mockWorld);

            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say nexus:check test-xuid server-1 "Player Name With Spaces"`);
        });
    });

    describe('custom commands execution', () => {
        it('should execute nexus:my_nfts custom command', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:my_nfts", origin);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say nexus:my_nfts test-xuid server-1 "test-player"`);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls[0].arguments[0], "§bFetching your NFTs...§r");
        });

        it('should execute nexus:register custom command', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:register", origin);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say nexus:register test-xuid server-1 "test-player"`);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls[0].arguments[0], "§bRequesting registration link...§r");
        });

        it('should execute nexus:register falling back to player.id when xuid is missing', () => {
            const playerWithoutXuid = { ...mockPlayer, xuid: undefined, sendMessage: mock.fn() };
            const origin = { sourceEntity: playerWithoutXuid };
            registry.executeCommand("nexus:register", origin);

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `say nexus:register test-uuid server-1 "test-player"`);
            assert.strictEqual(playerWithoutXuid.sendMessage.mock.calls.length, 1);
            assert.strictEqual(playerWithoutXuid.sendMessage.mock.calls[0].arguments[0], "§bRequesting registration link...§r");
        });

        it('should display Nexus address when nexus:contract custom command is executed', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:contract", origin);

            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.ok(mockPlayer.sendMessage.mock.calls[0].arguments[0].includes(NEXUS_ADDRESS));
        });

        it('should execute nexus:reconnect custom command', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:reconnect", origin);

            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls[0].arguments[0], "§bAttempting to reconnect to bridge...§r");
        });
    });
});
