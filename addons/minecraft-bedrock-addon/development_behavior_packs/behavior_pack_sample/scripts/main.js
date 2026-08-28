import { world, system, CommandPermissionLevel, CustomCommandStatus } from "@minecraft/server";
import { WS_URL, SERVER_ID, NEXUS_ADDRESS } from "./config.js";

async function checkNftStatus(player) {
    const platformId = player?.xuid || player?.id;
    if (!player || !platformId) return;

    system.run(() => {
        try {
            world.getDimension("overworld").runCommand(`say nexus:check ${platformId} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            console.warn("NFT Bridge Error: " + error);
        }
    });
}

function initiateBridgeConnection() {
    system.run(() => {
        try {
            world.getDimension("overworld").runCommand(`connect ${WS_URL}`);

            system.runTimeout(() => {
                world.getDimension("overworld").runCommand(`say nexus:handshake ${SERVER_ID}`);
                console.warn(`[NFT] Handshaked with bridge as ${SERVER_ID}`);
            }, 500);
        } catch (e) {
            console.warn(`[NFT] Connection/Handshake failed: ${e}`);
        }
    });
}

// 1. World Initialization Listener (Updated for @minecraft/server 2.9.0)
world.afterEvents.worldLoad.subscribe(() => {
    system.runTimeout(initiateBridgeConnection, 100);
});

// 2. Player Spawn Listener (Updated for @minecraft/server 2.9.0+)
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
                    try {
                        world.getDimension("overworld").runCommand(`say nexus:register ${platformId} ${SERVER_ID} "${player.name}"`);
                    } catch (error) {
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
                    try {
                        world.getDimension("overworld").runCommand(`say nexus:my_nfts ${platformId} ${SERVER_ID} "${player.name}"`);
                    } catch (error) {
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
                    try {
                        world.getDimension("overworld").runCommand(`say nexus:summon ${target} ${platformId} ${SERVER_ID} "${player.name}"`);
                    } catch (error) {
                        player.sendMessage("§cBridge server error.§r");
                    }
                });
                return { status: CustomCommandStatus ? CustomCommandStatus.Success : 1 };
            }
        );
    });
}
