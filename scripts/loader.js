import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const ROOT = path.resolve(__dirname, '..');
const CONFIG_JS_PATH = path.join(ROOT, 'config.js');

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
 * Loads contract ABIs and bytecode from build artifacts or base interfaces
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

    return contracts;
}

/**
 * Loads the central configuration directly from root config.js
 */
export function loadProjectConfig() {
    const configPath = CONFIG_JS_PATH;
    if (fs.existsSync(configPath)) {
        try {
            const content = fs.readFileSync(configPath, "utf8");
            const match = content.match(/(?:window\.APP_CONFIG|const APP_CONFIG) = ({[\s\S]*?});/);
            if (match) {
                return JSON.parse(match[1]);
            }
        } catch (e) {
            console.warn("[loader] Error reading root config.js:", e.message);
        }
    }
    return null;
}

/**
 * Reads root config.js and applies process.env overrides
 */
export function loadConfig() {
    const projConfig = loadProjectConfig() || {};

    const appEnv = process.env.APP_ENV || process.env.HARDHAT_NETWORK || projConfig.env || 'local';
    const chainId = process.env.CHAIN_ID
        ? parseInt(process.env.CHAIN_ID)
        : (appEnv === 'sepolia' ? 11155111 : 31337);

    const config = {
        ...projConfig,
        env: appEnv,
        chainId: chainId,
        ports: {
            bridgeHttp: parseInt(process.env.BRIDGE_HTTP_PORT || process.env.PORT || projConfig.ports?.bridgeHttp || 9000),
            bridgeWs: parseInt(process.env.BRIDGE_WS_PORT || process.env.WS_PORT || projConfig.ports?.bridgeWs || 9001),
            envManager: parseInt(process.env.ENV_MANAGER_PORT || projConfig.ports?.envManager || 9002),
            frontend: parseInt(process.env.FRONTEND_PORT || projConfig.ports?.frontend || 3000),
            bedrockManager: parseInt(process.env.BEDROCK_MANAGER_PORT || projConfig.ports?.bedrockManager || 9003)
        },
        bridge: {
            summonFeeBrag: process.env.SUMMON_FEE_BRAG || projConfig.bridge?.summonFeeBrag || "10",
            servers: projConfig.bridge?.servers || {}
        },
        contracts: projConfig.contracts || {},
        deployments: projConfig.deployments || {},
        frontend: projConfig.frontend || {},
        addon: projConfig.addon || {}
    };

    if (process.env.ALCHEMY_API_KEY && config.frontend.alchemy?.['11155111']) {
        config.frontend.alchemy['11155111'].apiKey = process.env.ALCHEMY_API_KEY;
    }
    if (process.env.ALCHEMY_GAS_POLICY_ID && config.frontend.alchemy?.['11155111']) {
        config.frontend.alchemy['11155111'].gasPolicyId = process.env.ALCHEMY_GAS_POLICY_ID;
    }

    if (process.env.WS_URL) config.addon.wsUrl = process.env.WS_URL;
    if (process.env.SERVER_ID) config.addon.serverId = process.env.SERVER_ID;

    return config;
}

/**
 * Gets the ABI for a specific contract name from root config.js or build artifacts
 */
export function getContractAbi(contractName) {
    const projConfig = loadProjectConfig();
    if (projConfig && projConfig.contracts?.[contractName]?.abi) {
        return projConfig.contracts[contractName].abi;
    }
    const abis = loadContractABIs();
    return abis[contractName]?.abi || null;
}

/**
 * Returns contract address directly from root config.js or process.env
 */
export function getContractAddress(contractName, chainId) {
    const envVar = `CONTRACT_ADDRESS_${contractName.toUpperCase()}`;
    if (process.env[envVar]) return process.env[envVar];

    const config = loadConfig();
    const effectiveChainId = chainId || config.chainId;

    if (config.contracts?.[effectiveChainId]?.[contractName]) {
        return config.contracts[effectiveChainId][contractName];
    }

    const projConfig = loadProjectConfig();
    if (projConfig && projConfig.deployments) {
        const chainKey = effectiveChainId.toString();
        const prefixedKey = `chain-${chainKey}`;
        const map = projConfig.deployments[chainKey] || projConfig.deployments[prefixedKey];
        if (map) {
            if (map[contractName]) return map[contractName];
            if (map[`AppModule#${contractName}`]) return map[`AppModule#${contractName}`];
        }
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
 * Syncs root config.js with active ignition/deployments and compiled contract ABIs
 */
export function syncRootConfigWithDeployments() {
    const projConfig = loadProjectConfig() || {};
    let addresses = projConfig.deployments || {};
    const compiledContracts = loadContractABIs();

    // Merge compiled ABIs into projConfig.contracts if missing or empty
    if (!projConfig.contracts) projConfig.contracts = {};
    for (const [name, obj] of Object.entries(compiledContracts)) {
        if (!projConfig.contracts[name] || typeof projConfig.contracts[name] !== 'object' || !projConfig.contracts[name].abi) {
            projConfig.contracts[name] = obj;
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

    projConfig.deployments = addresses;

    const updatedContent = `/**
 * config.js - Central project configuration for brag.charity.
 */

const APP_CONFIG = ${JSON.stringify(projConfig, null, 2)};

if (typeof window !== 'undefined') {
    window.APP_CONFIG = APP_CONFIG;
    window.CONTRACT_DATA = APP_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
`;
    fs.writeFileSync(CONFIG_JS_PATH, updatedContent);
    generateFrontendConfigJS();
    generateAddonConfigJS();
    return CONFIG_JS_PATH;
}

/**
 * Ensures frontend/config.js is kept in sync with root config.js
 */
export function generateFrontendConfigJS() {
    const rootConfigContent = fs.readFileSync(CONFIG_JS_PATH, 'utf8');
    const targetPath = path.join(ROOT, 'frontend', 'config.js');
    fs.writeFileSync(targetPath, rootConfigContent);

    const contractsJsPath = path.join(ROOT, 'frontend', 'contracts.js');
    const contractsJsContent = `// Shim: CONTRACT_DATA is consolidated in window.APP_CONFIG inside config.js
const CONTRACT_DATA = (typeof window !== 'undefined' && window.APP_CONFIG) ? window.APP_CONFIG : (typeof module !== 'undefined' && module.exports ? module.exports : {});
if (typeof window !== 'undefined') window.CONTRACT_DATA = CONTRACT_DATA;
if (typeof module !== 'undefined' && module.exports) module.exports = CONTRACT_DATA;
`;
    fs.writeFileSync(contractsJsPath, contractsJsContent);

    return targetPath;
}

/**
 * Generates addons/minecraft-bedrock-addon/.../scripts/config.js based on root config
 */
export function generateAddonConfigJS() {
    const config = loadConfig();
    const isStaging = config.env === 'staging';
    const wsUrl = (isStaging ? process.env.STAGING_BRIDGE_URL : null) || process.env.WS_URL || config.addon?.wsUrl || 'ws://127.0.0.1:9001';
    const serverId = process.env.SERVER_ID || config.addon?.serverId || 'local-dev';

    let nexusAddress = (isStaging ? process.env.STAGING_BRAGNFT_ADDRESS : null) || process.env.CONTRACT_ADDRESS_BRAGNFT || config.addon?.nexusAddress;
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
