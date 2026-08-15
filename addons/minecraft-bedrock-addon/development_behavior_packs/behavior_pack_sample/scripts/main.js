import { world, system, CommandPermissionLevel, CustomCommandStatus } from "@minecraft/server";

const WS_URL = "__WS_URL__";
const SERVER_ID = "__SERVER_ID__";
const NEXUS_ADDRESS = "__NEXUS_ADDRESS__";

async function checkNftStatus(player) {
    if (!player || !player.xuid) return;

    try {
        world.getDimension("overworld").runCommand(`say nexus:check ${player.xuid} ${SERVER_ID} "${player.name}"`);
    } catch (error) {
        console.warn("NFT Bridge Error: " + error);
    }
}

function initiateBridgeConnection() {
    try {
        world.getDimension("overworld").runCommand(`connect ${WS_URL}`);

        system.runTimeout(() => {
            world.getDimension("overworld").runCommand(`say nexus:handshake ${SERVER_ID}`);
            console.warn(`[NFT] Handshaked with bridge as ${SERVER_ID}`);
        }, 500);
    } catch (e) {
        console.warn(`[NFT] Connection/Handshake failed: ${e}`);
    }
}

// 1. World Initialization Listener (Updated for @minecraft/server 2.9.0)
world.afterEvents.worldLoad.subscribe(() => {
    system.runTimeout(initiateBridgeConnection, 100);
});

// 2. Player Spawn Listener (Updated for @minecraft/server 2.9.0+)
world.afterEvents.playerSpawned.subscribe((event) => {
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
                if (!player || !player.xuid) {
                    player?.sendMessage?.("§cYou must be signed in to Xbox Live to register.§r");
                    return { status: CustomCommandStatus ? CustomCommandStatus.Failure : 0 };
                }
                player.sendMessage("§bRequesting registration link...§r");

                try {
                    world.getDimension("overworld").runCommand(`say nexus:register ${player.xuid} ${SERVER_ID} "${player.name}"`);
                } catch (error) {
                    player.sendMessage("§cBridge server is offline.§r");
                }
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
                if (!player || !player.xuid) {
                    player?.sendMessage?.("§cYou must be signed in to Xbox Live to view your NFTs.§r");
                    return { status: CustomCommandStatus ? CustomCommandStatus.Failure : 0 };
                }

                player.sendMessage("§bFetching your NFTs...§r");

                try {
                    world.getDimension("overworld").runCommand(`say nexus:my_nfts ${player.xuid} ${SERVER_ID} "${player.name}"`);
                } catch (error) {
                    player.sendMessage("§cBridge server error.§r");
                }
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
    });
}
