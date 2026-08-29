import { world, system, CommandPermissionLevel, CustomCommandStatus } from "@minecraft/server";
import { websocket } from "@minecraft/server-net";
import { WS_URL, SERVER_ID, NEXUS_ADDRESS } from "./config.js";

let activeSocket = null;

function sendBridgeMessage(message) {
    if (!activeSocket) {
        console.warn("[NFT] Bridge WebSocket is not connected.");
        return false;
    }
    try {
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
    } catch (e) {
        console.warn(`[NFT] Error sending message to bridge: ${e}`);
        return false;
    }
}

function processIncomingMessage(msg) {
    if (!msg) return;

    if (msg.body && msg.body.commandLine) {
        const commandLine = msg.body.commandLine;
        system.run(() => {
            try {
                world.getDimension("overworld").runCommand(commandLine);
            } catch (e) {
                console.warn(`[NFT] Failed to run command from bridge '${commandLine}': ${e}`);
            }
        });
    }
}

async function initiateBridgeConnection() {
    if (activeSocket) {
        try {
            activeSocket.close();
        } catch (e) {}
        activeSocket = null;
    }

    try {
        if (!websocket) {
            console.warn("[NFT] @minecraft/server-net websocket is not available.");
            return;
        }

        const client = await websocket.connect(WS_URL);
        activeSocket = client;
        console.warn(`[NFT] Connected to NFT bridge at ${WS_URL}`);

        sendBridgeMessage(`nexus:handshake ${SERVER_ID}`);

        if (client.afterEvents && client.afterEvents.message) {
            client.afterEvents.message.subscribe((event) => {
                try {
                    const data = JSON.parse(event.message);
                    processIncomingMessage(data);
                } catch (e) {
                    console.warn(`[NFT] Error parsing bridge message: ${e}`);
                }
            });
        }
    } catch (e) {
        console.warn(`[NFT] Connection/Handshake failed: ${e}`);
    }
}

async function checkNftStatus(player) {
    const platformId = player?.xuid || player?.id;
    if (!player || !platformId) return;

    system.run(() => {
        sendBridgeMessage(`nexus:check ${platformId} ${SERVER_ID} "${player.name}"`);
    });
}

// 1. World Initialization Listener
world.afterEvents.worldLoad.subscribe(() => {
    system.runTimeout(initiateBridgeConnection, 100);
});

// 2. Player Spawn Listener
world.afterEvents.playerSpawn.subscribe((event) => {
    if (event.initialSpawn) {
        checkNftStatus(event.player);
    }
});

// 3. Register Custom Commands
if (system.beforeEvents && system.beforeEvents.startup) {
    system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
        if (!customCommandRegistry) return;

        customCommandRegistry.registerCommand(
            {
                name: "nexus:register",
                description: "Request registration link for NFT bridge",
                permissionLevel: CommandPermissionLevel ? CommandPermissionLevel.Any : "Any",
                cheatsRequired: false
            },
            (origin) => {
                const player = origin.initiator ?? origin.sourceEntity;
                const platformId = player?.xuid || player?.id;
                if (!player || !platformId) {
                    player?.sendMessage?.("§cYou must be signed in to Xbox Live to register.§r");
                    return { status: CustomCommandStatus ? CustomCommandStatus.Failure : 0 };
                }
                player.sendMessage("§bRequesting registration link...§r");

                system.run(() => {
                    const sent = sendBridgeMessage(`nexus:register ${platformId} ${SERVER_ID} "${player.name}"`);
                    if (!sent) {
                        player.sendMessage("§cBridge server is offline.§r");
                    }
                });
                return { status: CustomCommandStatus ? CustomCommandStatus.Success : 1 };
            }
        );

        customCommandRegistry.registerCommand(
            {
                name: "nexus:my_nfts",
                description: "Fetch and display your NFTs",
                permissionLevel: CommandPermissionLevel ? CommandPermissionLevel.Any : "Any",
                cheatsRequired: false
            },
            (origin) => {
                const player = origin.initiator ?? origin.sourceEntity;
                const platformId = player?.xuid || player?.id;
                if (!player || !platformId) {
                    player?.sendMessage?.("§cYou must be signed in to Xbox Live to view your NFTs.§r");
                    return { status: CustomCommandStatus ? CustomCommandStatus.Failure : 0 };
                }

                player.sendMessage("§bFetching your NFTs...§r");

                system.run(() => {
                    const sent = sendBridgeMessage(`nexus:my_nfts ${platformId} ${SERVER_ID} "${player.name}"`);
                    if (!sent) {
                        player.sendMessage("§cBridge server error.§r");
                    }
                });
                return { status: CustomCommandStatus ? CustomCommandStatus.Success : 1 };
            }
        );

        customCommandRegistry.registerCommand(
            {
                name: "nexus:contract",
                description: "Display the Nexus contract address",
                permissionLevel: CommandPermissionLevel ? CommandPermissionLevel.Any : "Any",
                cheatsRequired: false
            },
            (origin) => {
                const player = origin.initiator ?? origin.sourceEntity;
                if (player?.sendMessage) {
                    player.sendMessage(`§6[Nexus]§r Contract Address: §f${NEXUS_ADDRESS}§r`);
                }
                return { status: CustomCommandStatus ? CustomCommandStatus.Success : 1 };
            }
        );

        customCommandRegistry.registerCommand(
            {
                name: "nexus:reconnect",
                description: "Reconnect to the NFT bridge server",
                permissionLevel: CommandPermissionLevel ? CommandPermissionLevel.Any : "Any",
                cheatsRequired: false
            },
            (origin) => {
                const player = origin.initiator ?? origin.sourceEntity;
                if (player?.sendMessage) {
                    player.sendMessage("§bAttempting to reconnect to bridge...§r");
                }
                initiateBridgeConnection();
                return { status: CustomCommandStatus ? CustomCommandStatus.Success : 1 };
            }
        );

        customCommandRegistry.registerCommand(
            {
                name: "nexus:summon",
                description: "Summon an owned structure NFT into the world",
                permissionLevel: CommandPermissionLevel ? CommandPermissionLevel.Any : "Any",
                cheatsRequired: false
            },
            (origin, target) => {
                const player = origin.initiator ?? origin.sourceEntity;
                const platformId = player?.xuid || player?.id;
                if (!player || !platformId) {
                    player?.sendMessage?.("§cYou must be signed in to Xbox Live to summon structures.§r");
                    return { status: CustomCommandStatus ? CustomCommandStatus.Failure : 0 };
                }

                if (!target) {
                    player.sendMessage("§cUsage: /nexus:summon <tokenId_or_name>§r");
                    return { status: CustomCommandStatus ? CustomCommandStatus.Failure : 0 };
                }

                player.sendMessage(`§bRequesting structure summon for ${target}...§r`);

                system.run(() => {
                    const sent = sendBridgeMessage(`nexus:summon ${target} ${platformId} ${SERVER_ID} "${player.name}"`);
                    if (!sent) {
                        player.sendMessage("§cBridge server error.§r");
                    }
                });
                return { status: CustomCommandStatus ? CustomCommandStatus.Success : 1 };
            }
        );
    });
}

export {
    sendBridgeMessage,
    initiateBridgeConnection,
    checkNftStatus,
    processIncomingMessage
};
