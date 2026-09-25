import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const ROOT = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(ROOT, 'config.json');

const NAME_TO_ID = {
    'sepolia': '11155111',
    'holesky': '17000',
    'mainnet': '1',
    'hardhat': '31337',
    'localhost': '31337',
    'polygon': '137',
    'mumbai': '80001',
    'arbitrum': '42161',
    'optimism': '10',
    'base': '8453'
};

const BASE_INTERFACES = {
    "IERC165": {
        "abi": [
            {"inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}], "name": "supportsInterface", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function"}
        ]
    },
    "IERC721": {
        "abi": [
            {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}], "name": "ownerOf", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}], "name": "tokenURI", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"},
            {"inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"},
            {"inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {"internalType": "bool", "name": "approved", "type": "bool"}], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "operator", "type": "address"}], "name": "isApprovedForAll", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}], "name": "getApproved", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"}
        ]
    },
    "IERC1155": {
        "abi": [
            {"inputs": [{"internalType": "address", "name": "account", "type": "address"}, {"internalType": "uint256", "name": "id", "type": "uint256"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}], "name": "uri", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {"internalType": "bool", "name": "approved", "type": "bool"}], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "account", "type": "address"}, {"internalType": "address", "name": "operator", "type": "address"}], "name": "isApprovedForAll", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function"},
            {"inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "id", "type": "uint256"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {"internalType": "bytes", "name": "data", "type": "bytes"}], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"}
        ]
    }
};

/**
 * Loads contract ABIs and bytecode from build artifacts
 */
export function loadContractABIs() {
    const contracts = { ...BASE_INTERFACES };
    const contractsDir = path.join(ROOT, "artifacts", "contracts");

    if (fs.existsSync(contractsDir)) {
        const solFolders = fs.readdirSync(contractsDir);
        solFolders.forEach(solFolder => {
            if (solFolder.endsWith(".sol")) {
                const contractName = solFolder.replace(".sol", "");
                const artifactPath = path.join(contractsDir, solFolder, `${contractName}.json`);
                if (fs.existsSync(artifactPath)) {
                    try {
                        const data = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
                        if (data.abi && data.abi.length > 0) {
                            contracts[contractName] = {
                                abi: data.abi,
                                bytecode: data.bytecode
                            };
                        }
                    } catch (e) {
                        console.warn(`[loader] Could not parse artifact ${artifactPath}:`, e.message);
                    }
                }
            }
        });
    }

    // Fallback: If any contract is missing from artifacts, try loading from existing config.js / contracts.js
    const configPath = path.join(ROOT, "frontend", "config.js");
    if (fs.existsSync(configPath)) {
        try {
            const content = fs.readFileSync(configPath, "utf8");
            const match = content.match(/window\.APP_CONFIG = ({[\s\S]*?});/);
            if (match) {
                const existingConfig = JSON.parse(match[1]);
                if (existingConfig.contracts) {
                    for (const [name, obj] of Object.entries(existingConfig.contracts)) {
                        if (!contracts[name]) {
                            contracts[name] = obj;
                        }
                    }
                }
            }
        } catch (e) {
            // Ignore fallback errors
        }
    }

    return contracts;
}

/**
 * Gets the ABI for a specific contract name
 */
export function getContractAbi(contractName) {
    const abis = loadContractABIs();
    return abis[contractName]?.abi || null;
}

/**
 * Loads deployed addresses from ignition/deployments and existing configs
 */
export function loadDeployments() {
    let addresses = {};

    // First load from config.json if contracts field is defined
    const rawConfig = loadConfig();
    if (rawConfig.contracts) {
        for (const [chainId, map] of Object.entries(rawConfig.contracts)) {
            addresses[chainId] = { ...map };
            addresses[`chain-${chainId}`] = { ...map };
        }
    }

    // Load from existing frontend/contracts.js or frontend/config.js if present
    const frontendPath = path.join(ROOT, "frontend", "contracts.js");
    if (fs.existsSync(frontendPath)) {
        const existingContent = fs.readFileSync(frontendPath, "utf8");
        const match = existingContent.match(/const CONTRACT_DATA = ({[\s\S]*});/);
        if (match) {
            try {
                const existingData = JSON.parse(match[1]);
                if (existingData.deployments) {
                    for (const [chain, map] of Object.entries(existingData.deployments)) {
                        addresses[chain] = { ...(addresses[chain] || {}), ...map };
                    }
                }
            } catch (e) {
                // Ignore parse errors
            }
        }
    }

    const deploymentsDir = path.join(ROOT, "ignition", "deployments");
    if (fs.existsSync(deploymentsDir)) {
        const chains = fs.readdirSync(deploymentsDir);
        chains.forEach(chain => {
            const deployedContractsPath = path.join(deploymentsDir, chain, "deployed_addresses.json");
            if (fs.existsSync(deployedContractsPath)) {
                try {
                    const deployed = JSON.parse(fs.readFileSync(deployedContractsPath, "utf8"));

                    let chainId = chain;
                    if (NAME_TO_ID[chain.toLowerCase()]) {
                        chainId = NAME_TO_ID[chain.toLowerCase()];
                    } else if (chain.startsWith("chain-")) {
                        chainId = chain.replace("chain-", "");
                    }

                    for (const [key, addr] of Object.entries(deployed)) {
                        const nameMatch = key.split("#")[1] || key;
                        if (nameMatch) {
                            if (!addresses[chain]) addresses[chain] = {};
                            addresses[chain][nameMatch] = addr;

                            if (chainId !== chain) {
                                if (!addresses[chainId]) addresses[chainId] = {};
                                addresses[chainId][nameMatch] = addr;
                            }

                            const prefixedId = `chain-${chainId}`;
                            if (!addresses[prefixedId]) addresses[prefixedId] = {};
                            addresses[prefixedId][nameMatch] = addr;
                        }
                    }
                } catch (e) {
                    console.warn(`[loader] Error reading deployments from ${deployedContractsPath}:`, e.message);
                }
            }
        });
    }

    return addresses;
}

/**
 * Reads config.json and applies process.env overrides
 */
export function loadConfig() {
    let rawConfig = {};
    if (fs.existsSync(CONFIG_PATH)) {
        try {
            rawConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
        } catch (e) {
            console.error(`[loader] Error parsing ${CONFIG_PATH}:`, e.message);
        }
    }

    const appEnv = process.env.APP_ENV || process.env.HARDHAT_NETWORK || rawConfig.env || 'local';
    const chainId = process.env.CHAIN_ID
        ? parseInt(process.env.CHAIN_ID)
        : (appEnv === 'sepolia' ? 11155111 : 31337);

    // Merge env overrides
    const config = {
        env: appEnv,
        chainId: chainId,
        ports: {
            bridgeHttp: parseInt(process.env.BRIDGE_HTTP_PORT || process.env.PORT || rawConfig.ports?.bridgeHttp || 9000),
            bridgeWs: parseInt(process.env.BRIDGE_WS_PORT || process.env.WS_PORT || rawConfig.ports?.bridgeWs || 9001),
            envManager: parseInt(process.env.ENV_MANAGER_PORT || rawConfig.ports?.envManager || 9002),
            frontend: parseInt(process.env.FRONTEND_PORT || rawConfig.ports?.frontend || 3000),
            bedrockManager: parseInt(process.env.BEDROCK_MANAGER_PORT || rawConfig.ports?.bedrockManager || 9003)
        },
        bridge: {
            summonFeeBrag: process.env.SUMMON_FEE_BRAG || rawConfig.bridge?.summonFeeBrag || "10",
            servers: rawConfig.bridge?.servers || {}
        },
        contracts: rawConfig.contracts || {},
        frontend: rawConfig.frontend || {},
        addon: rawConfig.addon || {}
    };

    // Override Alchemy keys from environment if present
    if (process.env.ALCHEMY_API_KEY && config.frontend.alchemy?.['11155111']) {
        config.frontend.alchemy['11155111'].apiKey = process.env.ALCHEMY_API_KEY;
    }
    if (process.env.ALCHEMY_GAS_POLICY_ID && config.frontend.alchemy?.['11155111']) {
        config.frontend.alchemy['11155111'].gasPolicyId = process.env.ALCHEMY_GAS_POLICY_ID;
    }

    // Override Addon parameters from environment if present
    if (process.env.WS_URL) config.addon.wsUrl = process.env.WS_URL;
    if (process.env.SERVER_ID) config.addon.serverId = process.env.SERVER_ID;

    return config;
}

/**
 * Returns contract address with fallback chain:
 * 1. process.env (e.g. CONTRACT_ADDRESS_BRAGNFT)
 * 2. config.json contracts[chainId][contractName]
 * 3. ignition/deployments/chain-{chainId}/deployed_addresses.json
 */
export function getContractAddress(contractName, chainId) {
    const envVar = `CONTRACT_ADDRESS_${contractName.toUpperCase()}`;
    if (process.env[envVar]) return process.env[envVar];

    const config = loadConfig();
    const effectiveChainId = chainId || config.chainId;

    if (config.contracts?.[effectiveChainId]?.[contractName]) {
        return config.contracts[effectiveChainId][contractName];
    }

    const deploymentPath = path.join(ROOT, 'ignition', 'deployments', `chain-${effectiveChainId}`, 'deployed_addresses.json');
    if (fs.existsSync(deploymentPath)) {
        try {
            const deployments = JSON.parse(fs.readFileSync(deploymentPath, 'utf8'));
            return deployments[`AppModule#${contractName}`] || null;
        } catch (e) {
            console.error(`[loader] Error reading deployment file ${deploymentPath}:`, e.message);
        }
    }

    return null;
}

/**
 * Dynamically generates frontend/config.js based on central config
 */
export function generateFrontendConfigJS() {
    const config = loadConfig();
    const contracts = loadContractABIs();
    const deployments = loadDeployments();

    let externalCollections = config.frontend.externalCollections || [];
    if (externalCollections.length === 0) {
        const contractsJsPath = path.join(ROOT, "frontend", "contracts.js");
        if (fs.existsSync(contractsJsPath)) {
            const existingContent = fs.readFileSync(contractsJsPath, "utf8");
            const match = existingContent.match(/const CONTRACT_DATA = ({[\s\S]*});/);
            if (match) {
                try {
                    const existingData = JSON.parse(match[1]);
                    if (existingData.externalCollections) {
                        externalCollections = existingData.externalCollections;
                    }
                } catch (e) {
                    // Ignore
                }
            }
        }
    }

    const isStaging = config.env === 'staging';
    const wsUrl = (isStaging ? process.env.STAGING_BRIDGE_URL : null) || process.env.WS_URL || config.frontend.wsUrl || config.addon?.wsUrl || `ws://127.0.0.1:${config.ports?.bridgeWs || 9001}`;

    const frontendConfig = {
        wsUrl,
        ...config.frontend,
        contracts,
        deployments,
        externalCollections
    };

    const frontendContent = `/**
 * config.js - Global configuration for brag.charity frontend.
 * Auto-generated by scripts/loader.js - DO NOT EDIT MANUALLY.
 */

window.APP_CONFIG = ${JSON.stringify(frontendConfig, null, 2)};
window.CONTRACT_DATA = window.APP_CONFIG;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.APP_CONFIG;
}
`;
    const targetPath = path.join(ROOT, 'frontend', 'config.js');
    fs.writeFileSync(targetPath, frontendContent);

    // Maintain frontend/contracts.js as a shim pointing to APP_CONFIG
    const contractsJsContent = `// Deprecated shim: CONTRACT_DATA is consolidated in window.APP_CONFIG inside config.js
const CONTRACT_DATA = window.APP_CONFIG || ${JSON.stringify({ contracts, deployments, externalCollections }, null, 2)};
`;
    const contractsJsPath = path.join(ROOT, 'frontend', 'contracts.js');
    fs.writeFileSync(contractsJsPath, contractsJsContent);

    return targetPath;
}

/**
 * Dynamically generates addons/minecraft-bedrock-addon/.../scripts/config.js based on central config
 */
export function generateAddonConfigJS() {
    const config = loadConfig();
    const isStaging = config.env === 'staging';
    const wsUrl = (isStaging ? process.env.STAGING_BRIDGE_URL : null) || process.env.WS_URL || config.addon.wsUrl || 'ws://127.0.0.1:9001';
    const serverId = process.env.SERVER_ID || config.addon.serverId || 'local-dev';

    let nexusAddress = (isStaging ? process.env.STAGING_BRAGNFT_ADDRESS : null) || process.env.CONTRACT_ADDRESS_BRAGNFT || config.addon.nexusAddress;
    if (!nexusAddress || nexusAddress === '0x0000000000000000000000000000000000000000') {
        nexusAddress = getContractAddress('BragNFT', config.chainId) || '0x0000000000000000000000000000000000000000';
    }

    const addonContent = `// Auto-generated by scripts/loader.js - DO NOT EDIT MANUALLY
export const WS_URL = "${wsUrl}";
export const SERVER_ID = "${serverId}";
export const NEXUS_ADDRESS = "${nexusAddress}";
`;

    const targetPath = path.join(
        ROOT,
        'addons',
        'minecraft-bedrock-addon',
        'development_behavior_packs',
        'behavior_pack_sample',
        'scripts',
        'config.js'
    );

    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(targetPath, addonContent);
    return targetPath;
}
