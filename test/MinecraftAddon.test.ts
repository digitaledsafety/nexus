import assert from "node:assert/strict";
import { describe, it, beforeEach, mock } from "node:test";

// Mocking Minecraft & Server-Net Modules
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
    run: (fn: Function) => fn(),
    runTimeout: (fn: Function, delay: number) => fn()
};

class MockWebSocketClient {
    sentMessages: string[] = [];
    messageSubscribers: Function[] = [];
    afterEvents = {
        message: {
            subscribe: (fn: Function) => {
                this.messageSubscribers.push(fn);
            }
        }
    };

    send(data: string) {
        this.sentMessages.push(data);
    }

    close() {}

    simulateIncomingMessage(data: any) {
        for (const sub of this.messageSubscribers) {
            sub({ message: JSON.stringify(data) });
        }
    }
}

const SERVER_ID = "server-1";
const NEXUS_ADDRESS = "0x1234567890123456789012345678901234567890";

class MockCustomCommandRegistry {
    commands: Map<string, { config: any, callback: Function }> = new Map();

    registerCommand(config: any, callback: Function) {
        this.commands.set(config.name, { config, callback });
    }

    executeCommand(name: string, origin: any, arg?: string) {
        const cmd = this.commands.get(name);
        if (!cmd) throw new Error(`Command ${name} not registered`);
        return cmd.callback(origin, arg);
    }
}

// Logic mirror of main.js using websocket client
let activeSocket: MockWebSocketClient | null = null;

function sendBridgeMessage(message: string) {
    if (!activeSocket) {
        return false;
    }
    const payload = JSON.stringify({
        header: {
            version: 1,
            messagePurpose: "event"
        },
        body: {
            eventName: "PlayerMessage",
            properties: {
                Message: message
            }
        }
    });
    activeSocket.send(payload);
    return true;
}

function processIncomingMessage(msg: any, world: any = mockWorld) {
    if (!msg) return;
    if (msg.body && msg.body.commandLine) {
        const commandLine = msg.body.commandLine;
        try {
            world.getDimension("overworld").runCommand(commandLine);
        } catch (e) {}
    }
}

async function checkNftStatus(player: any, system: any = mockSystem) {
    const platformId = player?.xuid || player?.id;
    if (!player || !platformId) return;

    system.run(() => {
        sendBridgeMessage(`nexus:check ${platformId} ${SERVER_ID} "${player.name}"`);
    });
}

function registerCustomCommands(registry: MockCustomCommandRegistry, world: any = mockWorld, system: any = mockSystem) {
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
                const sent = sendBridgeMessage(`nexus:register ${platformId} ${SERVER_ID} "${player.name}"`);
                if (!sent) {
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
                const sent = sendBridgeMessage(`nexus:my_nfts ${platformId} ${SERVER_ID} "${player.name}"`);
                if (!sent) {
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

    registry.registerCommand(
        {
            name: "nexus:summon",
            description: "Summon an owned structure NFT into the world",
            permissionLevel: "Any",
            cheatsRequired: false
        },
        (origin: any, target?: string) => {
            const player = origin.initiator ?? origin.sourceEntity;
            const platformId = player?.xuid || player?.id;
            if (!player || !platformId) {
                player?.sendMessage?.("§cYou must be signed in to Xbox Live to summon structures.§r");
                return { status: 0 };
            }

            if (!target) {
                player.sendMessage("§cUsage: /nexus:summon <tokenId_or_name>§r");
                return { status: 0 };
            }

            player.sendMessage(`§bRequesting structure summon for ${target}...§r`);

            system.run(() => {
                const sent = sendBridgeMessage(`nexus:summon ${target} ${platformId} ${SERVER_ID} "${player.name}"`);
                if (!sent) {
                    player.sendMessage("§cBridge server error.§r");
                }
            });
            return { status: 1 };
        }
    );
}

describe('Minecraft Custom Commands & Direct Script WebSocket Logic', () => {
    let registry: MockCustomCommandRegistry;

    beforeEach(() => {
        mockPlayer.sendMessage.mock.resetCalls();
        mockPlayer.addTag.mock.resetCalls();
        mockPlayer.removeTag.mock.resetCalls();
        mockPlayer.onScreenDisplay.setActionBar.mock.resetCalls();
        mockPlayer.getDynamicProperty.mock.resetCalls();
        mockPlayer.setDynamicProperty.mock.resetCalls();
        mockDimension.runCommand.mock.resetCalls();

        activeSocket = new MockWebSocketClient();
        registry = new MockCustomCommandRegistry();
        registerCustomCommands(registry, mockWorld);
    });

    describe('checkNftStatus', () => {
        it('should send nexus:check payload through direct script WebSocket client', async () => {
            await checkNftStatus(mockPlayer);

            assert.strictEqual(activeSocket!.sentMessages.length, 1);
            const sent = JSON.parse(activeSocket!.sentMessages[0]);
            assert.strictEqual(sent.body.properties.Message, `nexus:check test-xuid server-1 "test-player"`);
        });

        it('should handle player name with spaces via WebSocket payload', async () => {
            const playerWithSpaces = { ...mockPlayer, name: "Player Name With Spaces" };
            await checkNftStatus(playerWithSpaces);

            const sent = JSON.parse(activeSocket!.sentMessages[0]);
            assert.strictEqual(sent.body.properties.Message, `nexus:check test-xuid server-1 "Player Name With Spaces"`);
        });
    });

    describe('custom commands execution', () => {
        it('should execute nexus:my_nfts custom command over script WebSocket', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:my_nfts", origin);

            assert.strictEqual(activeSocket!.sentMessages.length, 1);
            const sent = JSON.parse(activeSocket!.sentMessages[0]);
            assert.strictEqual(sent.body.properties.Message, `nexus:my_nfts test-xuid server-1 "test-player"`);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls[0].arguments[0], "§bFetching your NFTs...§r");
        });

        it('should execute nexus:register custom command over script WebSocket', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:register", origin);

            assert.strictEqual(activeSocket!.sentMessages.length, 1);
            const sent = JSON.parse(activeSocket!.sentMessages[0]);
            assert.strictEqual(sent.body.properties.Message, `nexus:register test-xuid server-1 "test-player"`);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls[0].arguments[0], "§bRequesting registration link...§r");
        });

        it('should execute nexus:summon custom command over script WebSocket', () => {
            const origin = { sourceEntity: mockPlayer };
            registry.executeCommand("nexus:summon", origin, "1");

            assert.strictEqual(activeSocket!.sentMessages.length, 1);
            const sent = JSON.parse(activeSocket!.sentMessages[0]);
            assert.strictEqual(sent.body.properties.Message, `nexus:summon 1 test-xuid server-1 "test-player"`);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls.length, 1);
            assert.strictEqual(mockPlayer.sendMessage.mock.calls[0].arguments[0], "§bRequesting structure summon for 1...§r");
        });

        it('should execute incoming command push payloads from bridge', () => {
            activeSocket!.simulateIncomingMessage({
                body: { commandLine: `tag "test-player" add nft_holder` }
            });
            processIncomingMessage({ body: { commandLine: `tag "test-player" add nft_holder` } });

            assert.strictEqual(mockDimension.runCommand.mock.calls.length, 1);
            assert.strictEqual(mockDimension.runCommand.mock.calls[0].arguments[0], `tag "test-player" add nft_holder`);
        });
    });
});
