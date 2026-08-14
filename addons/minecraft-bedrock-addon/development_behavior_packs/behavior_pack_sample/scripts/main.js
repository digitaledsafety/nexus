import { world, system } from "@minecraft/server";

/**
 * ARCHITECTURE NOTE:
 * The project uses a unified Node.js Bridge (scripts/nft-bridge.js) which supports
 * Sign-In with Ethereum (SIWE) for secure wallet linking and WebSockets for real-time updates.
 */
const WS_URL = "__WS_URL__"; // Injected at runtime
const SERVER_ID = "__SERVER_ID__"; // Injected at runtime
const NEXUS_ADDRESS = "__NEXUS_ADDRESS__"; // Injected at runtime

/**
 * Handles checking NFT status when a player spawns.
 * This also registers the player as 'active' on this server in the Bridge.
 */
async function checkNftStatus(player) {
    if (!player.xuid) return;

    try {
        // Send check command via WebSocket
        world.getDimension("overworld").runCommand(`say !check ${player.xuid} ${SERVER_ID} "${player.name}"`);
    } catch (error) {
        console.warn("NFT Bridge Error: " + error);
    }
}

/**
 * Automatically connect to the Bridge WebSocket and perform handshake.
 */
function initiateBridgeConnection() {
    try {
        // 1. Establish the WebSocket link
        world.getDimension("overworld").runCommand(`connect ${WS_URL}`);

        // 2. Perform handshake so bridge identifies this server instance
        // We delay to allow the connection to potentially be established
        system.runTimeout(() => {
            world.getDimension("overworld").runCommand(`say !handshake ${SERVER_ID}`);
            console.warn(`[NFT] Handshaked with bridge as ${SERVER_ID}`);
        }, 500);
    } catch (e) {
        console.warn(`[NFT] Connection/Handshake failed: ${e}`);
    }
}

// Initial connection on startup
world.afterEvents.worldInitialize.subscribe(() => {
    system.runTimeout(initiateBridgeConnection, 100);
});

/**
 * Handles the !register command.
 */
async function handleChat(event) {
    const message = event.message.trim();
    const player = event.sender;

    if (message.toLowerCase() === "!register") {
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
    } else if (message.toLowerCase() === "!my_nfts") {
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
    } else if (message.toLowerCase() === "!nexus") {
        player.sendMessage(`§6[Nexus]§r Contract Address: §f${NEXUS_ADDRESS}§r`);
    } else if (message.toLowerCase() === "!reconnect") {
        player.sendMessage("§bAttempting to reconnect to bridge...§r");
        initiateBridgeConnection();
    }
}

// Subscribe to events
world.afterEvents.playerSpawn.subscribe((event) => checkNftStatus(event.player));
world.afterEvents.chatSend.subscribe(handleChat);
