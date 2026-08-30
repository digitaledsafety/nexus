import http from 'http';
import fs from 'fs';
import path from 'path';
import { createPublicClient, http as viemHttp, getContract, verifyMessage, parseAbiItem, getAddress } from 'viem';
import { mainnet, localhost, sepolia } from 'viem/chains';
import { WebSocketServer } from 'ws';
import { randomUUID } from 'node:crypto';

const PORT = 9000;
const WS_PORT = 9001;
const CHAIN_ID = process.env.CHAIN_ID ? parseInt(process.env.CHAIN_ID) : 31337;
const isMain = process.argv[1] && (path.resolve(process.argv[1]) === path.resolve('scripts/nft-bridge.js'));
const MAPPINGS_FILE = path.join(process.cwd(), 'mappings.json');
const CONFIG_FILE = path.join(process.cwd(), 'bridge-config.json');

// --- Configuration ---
let serverConfigs = {
    "local-dev": { vaultAddress: null, name: "Nexus Staging" },
    "server-1": { vaultAddress: null, name: "Survival" },
    "server-2": { vaultAddress: null, name: "Creative" }
};

if (fs.existsSync(CONFIG_FILE)) {
    try {
        const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        serverConfigs = { ...serverConfigs, ...config.servers };
        console.log("Loaded server configurations");
    } catch (e) {
        console.error("Failed to load bridge-config.json:", e);
    }
}

let mappings = new Map();
if (fs.existsSync(MAPPINGS_FILE)) {
    try {
        const data = JSON.parse(fs.readFileSync(MAPPINGS_FILE, 'utf8'));
        mappings = new Map(Object.entries(data));
    } catch (e) {}
}

const pendingTokens = new Map();
const statusCache = new Map();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

const activePlayers = new Map(); // XUID -> { serverId, playerName }
const serverSockets = new Map(); // serverId -> WebSocket (Minecraft uses only one connection per server)

function saveMappings() {
    fs.writeFileSync(MAPPINGS_FILE, JSON.stringify(Object.fromEntries(mappings), null, 2));
}

// --- Core Logic ---
async function getPlatformStatus(platformId) {
    const linkedAddress = mappings.get(platformId);
    return { linked: !!linkedAddress, address: linkedAddress || null, uuid: platformId };
}

async function createRegistrationToken(platformId) {
    const token = Math.random().toString(36).substring(2, 10).toUpperCase();
    pendingTokens.set(token, { platformId, expires: Date.now() + (10 * 60 * 1000) });
    return { token, uuid: platformId, registrationUrl: `http://localhost:3000?token=${token}` };
}

async function getOwnershipStatus(uuid, serverId, playerName) {
    const addressToCheck = mappings.get(uuid) || uuid;

    if (uuid && serverId && playerName) {
        activePlayers.set(uuid, { serverId, playerName });
    }

    if (!addressToCheck || !addressToCheck.startsWith('0x') || addressToCheck.length !== 42) {
         return { isHolder: false, address: addressToCheck };
    }

    let status = await fetchCurrentStatus(addressToCheck);
    statusCache.set(addressToCheck.toLowerCase(), status);

    const serverConfig = serverConfigs[serverId];
    const vaultAddr = (serverConfig && serverConfig.vaultAddress) ? serverConfig.vaultAddress.toLowerCase() : null;
    const inVault = vaultAddr ? (status.vaults[vaultAddr]?.length > 0) : false;
    const inWallet = status.walletNfts.length > 0;

    return {
        isHolder: inVault || inWallet,
        inVault,
        inWallet,
        address: addressToCheck,
        nfts: [...status.walletNfts, ...(vaultAddr ? (status.vaults[vaultAddr] || []) : [])]
    };
}

async function handleSummonCommand(target, platformId, serverId, playerName) {
    const platformStatus = await getPlatformStatus(platformId);
    if (!platformStatus.linked) {
        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§c[NFT] You must link your wallet first using /nexus:register.§r"}]}`);
        return { success: false, reason: "unlinked" };
    }

    const ownership = await getOwnershipStatus(platformId, serverId, playerName);
    const serverConfig = serverConfigs[serverId];
    const vaultAddr = (serverConfig && serverConfig.vaultAddress) ? serverConfig.vaultAddress.toLowerCase() : null;

    if (!vaultAddr || !ownership.inVault) {
        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§c[NFT] You do not have an active exhibited NFT in this server's vault.§r"}]}`);
        return { success: false, reason: "not_in_vault" };
    }

    const vaultNfts = statusCache.get(ownership.address.toLowerCase())?.vaults[vaultAddr] || [];
    // Match target against tokenId or title/name or media URL
    const cleanTarget = target ? target.replace(/^#/, '').toLowerCase() : '';
    const matchingNft = target
        ? vaultNfts.find(nft =>
            nft.tokenId.toString().toLowerCase() === cleanTarget ||
            (nft.animation_url && nft.animation_url.toLowerCase().includes(cleanTarget)) ||
            (nft.image && nft.image.toLowerCase().includes(cleanTarget))
          )
        : vaultNfts[0];

    if (!matchingNft) {
        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§c[NFT] NFT structure target '${target}' not found in your vault exhibition.§r"}]}`);
        return { success: false, reason: "nft_not_found" };
    }

    const mediaUrl = matchingNft.animation_url || matchingNft.image;
    if (!mediaUrl || (!mediaUrl.toLowerCase().endsWith('.mcstructure') && !mediaUrl.toLowerCase().includes('.mcstructure'))) {
        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§c[NFT] Selected NFT #${matchingNft.tokenId} is not a valid .mcstructure object.§r"}]}`);
        return { success: false, reason: "not_mcstructure" };
    }

    try {
        const structuresDir = path.join(process.cwd(), 'addons', 'minecraft-bedrock-addon', 'development_behavior_packs', 'behavior_pack_sample', 'structures');
        if (!fs.existsSync(structuresDir)) {
            fs.mkdirSync(structuresDir, { recursive: true });
        }

        const structureName = `nft_${matchingNft.tokenId}`;
        const structureFilePath = path.join(structuresDir, `${structureName}.mcstructure`);

        if (mediaUrl.startsWith('data:')) {
            const base64Data = mediaUrl.split(',')[1];
            fs.writeFileSync(structureFilePath, Buffer.from(base64Data, 'base64'));
        } else if (mediaUrl.startsWith('http://') || mediaUrl.startsWith('https://')) {
            const response = await fetch(mediaUrl);
            const arrayBuffer = await response.arrayBuffer();
            fs.writeFileSync(structureFilePath, Buffer.from(arrayBuffer));
        } else {
            // Local file or mock path
            fs.writeFileSync(structureFilePath, Buffer.from(`MOCK_STRUCTURE_DATA_FOR_${structureName}`));
        }

        sendMinecraftCommand(serverId, `execute at "${playerName}" run structure load "${structureName}" ~ ~ ~`);
        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§a[NFT] Successfully summoned structure '${structureName}' for NFT #${matchingNft.tokenId}!§r"}]}`);
        return { success: true, structureName, tokenId: matchingNft.tokenId };
    } catch (e) {
        console.error("Failed to download or load structure:", e);
        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§c[NFT] Failed to load structure: ${e.message}§r"}]}`);
        return { success: false, error: e.message };
    }
}

// --- WebSocket Server (Minecraft Bedrock Protocol) ---
let wss;
if (isMain) {
    wss = new WebSocketServer({ port: WS_PORT });
    setupWss(wss);
}

function setupWss(wss) {
wss.on('connection', (ws, req) => {
    console.log(`Minecraft server connected from ${req.socket.remoteAddress}`);

    // In a real scenario, the first message from the server would identify which serverId it is.
    // For now, we'll assign the first connection to server-1, second to server-2, etc. or use a handshake.
    ws.on('message', async (data) => {
        try {
            const msg = JSON.parse(data);

            // Handle Minecraft Bedrock Handshake via PlayerMessage
            if (msg.body && msg.body.eventName === 'PlayerMessage') {
                const message = msg.body.properties.Message;
                if (!message) return;

                if (message.startsWith('nexus:handshake ') || message.startsWith('!handshake ')) {
                    const serverId = message.split(' ')[1];
                    if (serverConfigs[serverId]) {
                        serverSockets.set(serverId, ws);
                        console.log(`WebSocket handshaked and assigned to ${serverId} (${serverConfigs[serverId].name})`);
                    }
                } else {
                    // Handle nexus:summon <target> <platformId> <serverId> "<playerName>"
                    const matchSummon = message.match(/^(?:nexus:|!)summon\s+(\S+)\s+(\S+)\s+(\S+)\s+"(.+)"$/);
                    const match = message.match(/^(?:nexus:|!)(check|register|my_nfts)\s+(\S+)\s+(\S+)\s+"(.+)"$/);

                    if (matchSummon) {
                        const [_, target, platformId, serverId, playerName] = matchSummon;
                        await handleSummonCommand(target, platformId, serverId, playerName);
                    } else if (match) {
                        const [_, command, platformId, serverId, playerName] = match;

                        if (command === 'check') {
                            const platformStatus = await getPlatformStatus(platformId);
                            if (!platformStatus.linked) return;

                            const data = await getOwnershipStatus(platformId, serverId, playerName);
                            if (data.isHolder) {
                                sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§a[NFT] Verified NFT Holder!§r"}]}`);
                                sendMinecraftCommand(serverId, `tag "${playerName}" add nft_holder`);
                            } else {
                                sendMinecraftCommand(serverId, `tag "${playerName}" remove nft_holder`);
                            }
                        } else if (command === 'register') {
                            const data = await createRegistrationToken(platformId);
                            const registrationUrl = data.registrationUrl;

                            sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§e====================================§r"}]}`);
                            sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§aTo link your wallet, visit this URL:§r"}]}`);
                            sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§f${registrationUrl}§r"}]}`);
                            sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§7(The link is valid for 10 minutes)§r"}]}`);
                            sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§e====================================§r"}]}`);
                        } else if (command === 'my_nfts') {
                            const data = await getOwnershipStatus(platformId, serverId, playerName);
                            if (data.isHolder && data.nfts && data.nfts.length > 0) {
                                sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§eYour NFTs:§r"}]}`);
                                for (const nft of data.nfts) {
                                    sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§b- ID #${nft.tokenId} (${nft.location})§r"}]}`);
                                    if (nft.animation_url) {
                                        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"  §7Media: §f${nft.animation_url}§r"}]}`);
                                    } else if (nft.image) {
                                        sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"  §7Image: §f${nft.image}§r"}]}`);
                                    }
                                }
                            } else {
                                sendMinecraftCommand(serverId, `tellraw "${playerName}" {"rawtext":[{"text":"§6No NFTs found in your linked wallet.§r"}]}`);
                            }
                        }
                    }
                }
            }

            // Handle Command Responses (optional but good for debugging)
            if (msg.header && msg.header.messagePurpose === 'commandResponse') {
                // console.log("Command Response:", JSON.stringify(msg.body, null, 2));
            }

        } catch (e) {
            console.error("Error processing WS message:", e);
        }
    });

    ws.on('close', () => {
        for (const [id, socket] of serverSockets.entries()) {
            if (socket === ws) {
                serverSockets.delete(id);
                console.log(`WebSocket disconnected for ${id}`);
                break;
            }
        }
    });

    // Subscribe to interesting events
    // We subscribe to PlayerMessage for commands
    ws.send(JSON.stringify({
        header: {
            version: 1,
            requestId: randomUUID(),
            messageType: "commandRequest",
            messagePurpose: "subscribe"
        },
        body: { eventName: "PlayerMessage" }
    }));
});
}

function sendMinecraftCommand(serverId, commandLine) {
    const ws = serverSockets.get(serverId);
    if (!ws) {
        console.warn(`No active WebSocket for server ${serverId}. Command ignored: ${commandLine}`);
        return;
    }

    const msg = {
        header: {
            version: 1,
            requestId: randomUUID(),
            messageType: "commandRequest",
            messagePurpose: "commandRequest"
        },
        body: {
            commandLine: commandLine,
            version: 1
        }
    };
    ws.send(JSON.stringify(msg));
}

// --- Blockchain Integration ---
const DEPLOYMENT_PATH = path.join(process.cwd(), 'ignition', 'deployments', `chain-${CHAIN_ID}`, 'deployed_addresses.json');

function getContractAddress(contractName) {
    const envVar = `CONTRACT_ADDRESS_${contractName.toUpperCase()}`;
    if (process.env[envVar]) return process.env[envVar];

    if (!fs.existsSync(DEPLOYMENT_PATH)) return null;
    const deployments = JSON.parse(fs.readFileSync(DEPLOYMENT_PATH, 'utf8'));
    return deployments[`AppModule#${contractName}`];
}

const BRAG_ABI = [
    { "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
];

const chain = CHAIN_ID === 31337 ? localhost : sepolia;
const RPC_URL = process.env.RPC_URL || (CHAIN_ID === 31337 ? 'http://127.0.0.1:8545' : undefined);
if (isMain) console.log(`Bridge using RPC_URL: ${RPC_URL} for Chain ID: ${CHAIN_ID}`);

async function handleStatusChange(address) {
    if (!address || address === '0x0000000000000000000000000000000000000000') return;
    let normalizedAddress;
    try {
        normalizedAddress = getAddress(address);
    } catch (e) {
        return;
    }

    // Find all XUIDs linked to this address
    const xuids = [];
    for (const [xuid, addr] of mappings.entries()) {
        try {
            if (getAddress(addr) === normalizedAddress) xuids.push(xuid);
        } catch (e) {}
    }

    for (const xuid of xuids) {
        const active = activePlayers.get(xuid);
        if (!active) continue;

        console.log(`Pushing real-time update for player ${active.playerName} (${xuid}) on ${active.serverId}`);

        // Refresh status
        const lowerAddr = normalizedAddress.toLowerCase();
        const status = await fetchCurrentStatus(lowerAddr);
        statusCache.set(lowerAddr, status);

        const serverConfig = serverConfigs[active.serverId];
        const vaultAddr = (serverConfig && serverConfig.vaultAddress) ? serverConfig.vaultAddress.toLowerCase() : null;
        const inVault = vaultAddr ? (status.vaults[vaultAddr]?.length > 0) : false;
        const inWallet = status.walletNfts.length > 0;
        const isHolder = inVault || inWallet;

        if (isHolder) {
            sendMinecraftCommand(active.serverId, `tag "${active.playerName}" add nft_holder`);
            sendMinecraftCommand(active.serverId, `tellraw "${active.playerName}" {"rawtext":[{"text":"§a[NFT] Your status has been updated! Qualification verified.§r"}]}`);
        } else {
            sendMinecraftCommand(active.serverId, `tag "${active.playerName}" remove nft_holder`);
            sendMinecraftCommand(active.serverId, `tellraw "${active.playerName}" {"rawtext":[{"text":"§c[NFT] Your status has changed. You no longer hold a qualifying NFT for this server.§r"}]}`);
        }
    }
}

async function setupEventListeners(force = false) {
    if (!isMain && !force) return;
    const bragAddress = getContractAddress('BragNFT');
    if (bragAddress) {
        console.log(`Setting up event listener for BragNFT at ${bragAddress}`);
        publicClient.watchEvent({
            address: bragAddress,
            event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)'),
            polling: true,
            onLogs: (logs) => {
                logs.forEach(log => {
                    console.log(`Transfer event detected: ${log.args.from} -> ${log.args.to}`);
                    handleStatusChange(log.args.from);
                    handleStatusChange(log.args.to);
                });
            }
        });
    }

    Object.values(serverConfigs).forEach(config => {
        if (!config.vaultAddress) return;
        const events = [
            'event Exhibited721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, string location, uint256 expiry)',
            'event Withdrawn721(address indexed nftContract, uint256 indexed tokenId, address indexed owner)',
            'event Moved721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, address destinationVault)',
            'event Exhibited1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, string location, uint256 expiry)',
            'event Withdrawn1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount)'
        ];
        events.forEach(e => {
            publicClient.watchEvent({
                address: config.vaultAddress,
                event: parseAbiItem(e),
                polling: true,
                onLogs: (logs) => logs.forEach(log => handleStatusChange(log.args.owner))
            });
        });
    });
}

// --- HTTP API ---
export const handleRequest = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

    const url = new URL(req.url || '', `http://localhost:${PORT}`);
    const pathname = url.pathname;
    const searchParams = url.searchParams;

    try {
        if (searchParams.get('path') === 'check-platform') {
            const platformId = searchParams.get('platformId');
            const data = await getPlatformStatus(platformId);
            res.writeHead(200);
            res.end(JSON.stringify(data));
            return;
        }

        if (searchParams.get('path') === 'request-token') {
            const platformId = searchParams.get('platformId');
            const data = await createRegistrationToken(platformId);
            res.writeHead(200);
            res.end(JSON.stringify(data));
            return;
        }

        if (pathname === '/verify-link' && req.method === 'POST') {
            let body = '';
            for await (const chunk of req) body += chunk;
            const { token, signature, message, address, skipVerify } = JSON.parse(body);
            const pending = pendingTokens.get(token);
            if (!pending || pending.expires < Date.now()) { res.writeHead(400); res.end(JSON.stringify({ error: "Invalid token" })); return; }

            // Allow skipping signature verification for local dev testing if requested
            if (!skipVerify || CHAIN_ID !== 31337) {
                // Verify that the message includes the address to prevent simple replay (stateless)
                // In a production environment, you should also verify the timestamp.
                if (!message.includes(address)) {
                    res.writeHead(400); res.end(JSON.stringify({ error: "Message must include address" }));
                    return;
                }
                const isValid = await verifyMessage({ address, message, signature });
                if (!isValid) { res.writeHead(401); res.end(JSON.stringify({ error: "Invalid signature" })); return; }
            }

            mappings.set(pending.platformId, address);
            saveMappings();
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, platformId: pending.platformId, address }));
            return;
        }

        if (searchParams.get('path') === 'check-ownership') {
            const uuid = searchParams.get('uuid'); // This is the XUID from Minecraft
            const serverId = searchParams.get('serverId');
            const playerName = searchParams.get('playerName');

            if (uuid && serverId && playerName) {
                // If this is the first time we see this connection, try to bind the socket if it's generic
                if (!serverSockets.has(serverId) && wss.clients.size > 0) {
                    // For local mock testing, we'll just take the first available socket if not bound
                    const firstSocket = Array.from(wss.clients)[0];
                    serverSockets.set(serverId, firstSocket);
                }
            }

            const data = await getOwnershipStatus(uuid, serverId, playerName);
            res.writeHead(200);
            res.end(JSON.stringify(data));
            return;
        }

        if (pathname === '/generate-nft' && req.method === 'POST') {
            const themes = ["crypto art", "glitch art", "philanthropy", "decentralized finance", "charity"];
            const styles = ["abstract", "cyberpunk", "minimalist", "surreal", "vibrant", "ethereal", "pixel art", "watercolor"];
            const subjects = ["global connection", "digital heart", "decentralized future", "giving back", "blockchain network", "humanity", "technology"];

            const theme = themes[Math.floor(Math.random() * themes.length)];
            const style = styles[Math.floor(Math.random() * styles.length)];
            const subject = subjects[Math.floor(Math.random() * subjects.length)];
            const prompt = `A ${style} ${theme} representation of ${subject}, high resolution, digital art, symbolic of giving and technology.`;

            console.log(`Generating AI NFT with prompt: ${prompt}`);

            if (!GEMINI_API_KEY || GEMINI_API_KEY === "MOCK_KEY") {
                console.log("No Gemini API key found, returning mock image");
                // Return a mock base64 image (a simple blue square)
                const mockImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA6jnS7gAAAABJRU5ErkJggg==";
                res.writeHead(200);
                res.end(JSON.stringify({
                    image: mockImage,
                    prompt: prompt,
                    isMock: true
                }));
                return;
            }

            try {
                // Using the Imagen 4.0 endpoint for Google AI Studio as per latest docs
                // Note: docs say imagen-3.0 is shut down, recommending imagen-4.0-generate-001
                const api_url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${GEMINI_API_KEY}`;

                const response = await fetch(api_url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        instances: [{ prompt: prompt }],
                        parameters: { sampleCount: 1 }
                    })
                });

                if (!response.ok) {
                    const error = await response.text();
                    throw new Error(`Gemini API error: ${response.status} - ${error}`);
                }

                const result = await response.json();
                // Correct response format for Gemini API generateImages:
                // result.generatedImages[0].image.imageBytes (which is base64 in REST)
                // Wait, REST docs say:
                // "predictions": [ { "bytesBase64Encoded": "..." } ]
                // Re-checking the REST example in the docs:
                /*
                curl -X POST \
                    "https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict" \
                    -H "x-goog-api-key: $GEMINI_API_KEY" \
                    -H "Content-Type: application/json" \
                    -d '{
                        "instances": [ { "prompt": "Robot holding a red skateboard" } ],
                        "parameters": { "sampleCount": 4 }
                      }'
                */
                // The JS SDK uses generatedImages, but the REST API uses predictions for Imagen.
                // Let's verify the response structure for REST.
                // Based on Vertex AI (which is similar), it's result.predictions[0].bytesBase64Encoded

                let base64Image;
                if (result.predictions && result.predictions[0]) {
                    base64Image = result.predictions[0].bytesBase64Encoded;
                } else if (result.generatedImages && result.generatedImages[0]) {
                    base64Image = result.generatedImages[0].image.imageBytes;
                }

                if (!base64Image) {
                    throw new Error("Invalid response format from Gemini API: " + JSON.stringify(result));
                }

                const dataUri = `data:image/png;base64,${base64Image}`;

                res.writeHead(200);
                res.end(JSON.stringify({
                    image: dataUri,
                    prompt: prompt,
                    isMock: false
                }));
            } catch (error) {
                console.error("AI Generation failed:", error);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
            return;
        }

        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not found" }));
    } catch (error) {
        console.error(error);
        if (!res.writableEnded) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    }
};

const server = http.createServer(handleRequest);

export {
    pendingTokens,
    mappings,
    handleSummonCommand,
    getOwnershipStatus,
    setupWss,
    sendMinecraftCommand,
    handleStatusChange,
    setupEventListeners,
    publicClient,
    activePlayers,
    serverSockets,
    serverConfigs,
    statusCache
};

async function fetchWithRetry(fn, label, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (e) {
            if (i === maxRetries - 1) throw e;
            console.warn(`[Retry] ${label} failed (attempt ${i+1}/${maxRetries}): ${e.message}`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

async function fetchCurrentStatus(address) {
    console.log(`Fetching current on-chain status for ${address}...`);
    const bragAddress = getContractAddress('BragNFT');
    let walletNfts = [];

    // Check Wallet
    if (bragAddress) {
        try {
            const balance = await fetchWithRetry(() => publicClient.readContract({
                address: bragAddress,
                abi: BRAG_ABI,
                functionName: 'balanceOf',
                args: [address]
            }), `balanceOf(${address})`);

            if (balance > 0n) {
                walletNfts.push({ tokenId: "any", location: "Wallet", nftContract: bragAddress });
            }
        } catch (e) {
            console.error(`Error checking balance for ${address}:`, e.message);
        }
    }

    const vaults = {};
    for (const config of Object.values(serverConfigs)) {
        if (!config.vaultAddress) continue;
        const vaultAddr = config.vaultAddress.toLowerCase();
        vaults[vaultAddr] = [];

        try {
            // Check for exhibited BragNFTs in this vault
            // We use getLogs to find tokens the user has exhibited
            const logs = await fetchWithRetry(() => publicClient.getLogs({
                address: vaultAddr,
                event: parseAbiItem('event Exhibited721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, string location, uint256 expiry)'),
                args: { owner: address },
                fromBlock: 0n
            }), `getLogs(${vaultAddr})`);

            // For each token, verify it's still in the vault
            for (const log of logs) {
                const { nftContract, tokenId } = log.args;
                const currentOwner = await fetchWithRetry(() => publicClient.readContract({
                    address: vaultAddr,
                    abi: [parseAbiItem('function owner721(address, uint256) view returns (address)')],
                    functionName: 'owner721',
                    args: [nftContract, tokenId]
                }), `owner721(${vaultAddr}, ${tokenId})`);

                if (currentOwner.toLowerCase() === address.toLowerCase()) {
                    let media = { image: null, animation_url: null };
                    try {
                        const uri = await fetchWithRetry(() => publicClient.readContract({
                            address: nftContract,
                            abi: [parseAbiItem('function tokenURI(uint256) view returns (string)')],
                            functionName: 'tokenURI',
                            args: [tokenId]
                        }), `tokenURI(${nftContract}, ${tokenId})`);

                        if (uri.startsWith('data:application/json;base64,')) {
                            const json = JSON.parse(Buffer.from(uri.split(',')[1], 'base64').toString());
                            media.image = json.image;
                            media.animation_url = json.animation_url;
                        }
                    } catch (e) {
                        console.error(`Error fetching tokenURI for ${nftContract} #${tokenId}:`, e.message);
                    }

                    vaults[vaultAddr].push({
                        tokenId: tokenId.toString(),
                        nftContract,
                        location: config.name,
                        image: media.image,
                        animation_url: media.animation_url
                    });
                }
            }
        } catch (e) {
            console.error(`Error checking vault ${vaultAddr} for ${address}:`, e.message);
        }
    }

    return { walletNfts, vaults };
}

const publicClient = isMain ? createPublicClient({
    chain: chain,
    transport: viemHttp(RPC_URL, {
        retryCount: 10,
        retryDelay: 1000,
    }),
    pollingInterval: 500, // Faster polling for events
}) : {
    readContract: async () => 0n,
    getLogs: async () => [],
    watchEvent: () => {}
};

if (isMain) {
    server.listen(PORT, async () => {
        console.log(`HTTP Bridge: http://localhost:${PORT}`);
        console.log(`WS Bridge: ws://localhost:${WS_PORT}`);
        setupEventListeners().catch(console.error);
    });
}
