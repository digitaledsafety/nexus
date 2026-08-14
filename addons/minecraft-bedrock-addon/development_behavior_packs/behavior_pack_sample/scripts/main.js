import { world, system } from "@minecraft/server";

const WS_URL = "__WS_URL__";
const SERVER_ID = "__SERVER_ID__";
const NEXUS_ADDRESS = "__NEXUS_ADDRESS__";

async function checkNftStatus(player) {
    if (!player || !player.xuid) return;

    try {
        world.getDimension("overworld").runCommand(`say !check ${player.xuid} ${SERVER_ID} "${player.name}"`);
    } catch (error) {
        console.warn("NFT Bridge Error: " + error);
    }
}

function initiateBridgeConnection() {
    try {
        world.getDimension("overworld").runCommand(`connect ${WS_URL}`);

        system.runTimeout(() => {
            world.getDimension("overworld").runCommand(`say !handshake ${SERVER_ID}`);
            console.warn(`[NFT] Handshaked with bridge as ${SERVER_ID}`);
        }, 500);
    } catch (e) {
        console.warn(`[NFT] Connection/Handshake failed: ${e}`);
    }
}

async function handleChat(event) {
    const message = event.message.trim().toLowerCase();
    const player = event.sender;

    if (message === "!register") {
        if (!player.xuid) {
            player.sendMessage("§cYou must be signed in to Xbox Live to register.§r");
            return;
        }
        player.sendMessage("§bRequesting registration link...§r");

        try {
            world.getDimension("overworld").runCommand(`say !register ${player.xuid} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            player.sendMessage("§cBridge server is offline.§r");
        }
    } else if (message === "!my_nfts") {
        if (!player.xuid) {
            player.sendMessage("§cYou must be signed in to Xbox Live to view your NFTs.§r");
            return;
        }

        player.sendMessage("§bFetching your NFTs...§r");

        try {
            world.getDimension("overworld").runCommand(`say !my_nfts ${player.xuid} ${SERVER_ID} "${player.name}"`);
        } catch (error) {
            player.sendMessage("§cBridge server error.§r");
        }
    } else if (message === "!nexus") {
        player.sendMessage(`§6[Nexus]§r Contract Address: §f${NEXUS_ADDRESS}§r`);
    } else if (message === "!reconnect") {
        player.sendMessage("§bAttempting to reconnect to bridge...§r");
        initiateBridgeConnection();
    }
}

// 1. World Initialization Listener
world.beforeEvents.worldInitialize.subscribe(() => {
    system.runTimeout(initiateBridgeConnection, 100);
});

// 2. Player Spawn Listener (Checks initialSpawn so it doesn't re-run on player death/respawn)
world.afterEvents.playerSpawn.subscribe((event) => {
    if (event.initialSpawn) {
        checkNftStatus(event.player);
    }
});

// 3. Before Chat Listener (Cancels the !command broadcast to other players)
world.afterEvents.chatSend.subscribe((event) => {
    if (event.message.trim().startsWith("!")) {
        event.cancel = true; // Hides command from public chat
        handleChat(event);
    }
});
