const fs = require("fs");
const path = require("path");

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

const output = {
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
const contractsDir = path.join(__dirname, "..", "artifacts", "contracts");

if (fs.existsSync(contractsDir)) {
  const solFiles = fs.readdirSync(contractsDir);
  solFiles.forEach(solFolder => {
    if (solFolder.endsWith(".sol")) {
      const contractName = solFolder.replace(".sol", "");
      const artifactPath = path.join(contractsDir, solFolder, `${contractName}.json`);
      if (fs.existsSync(artifactPath)) {
        const data = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
        if (data.abi && data.abi.length > 0) {
          output[contractName] = {
            abi: data.abi,
            bytecode: data.bytecode
          };
          console.log(`Extracted ABI for ${contractName}`);
        }
      }
    }
  });
}

// Try to find deployment addresses in ignition/deployments
const deploymentsDir = path.join(__dirname, "..", "ignition", "deployments");
let addresses = {};
let externalCollections = [];

// Load existing deployments from contracts.js if it exists to avoid wiping them
const frontendPath = path.join(__dirname, "..", "frontend", "contracts.js");
if (fs.existsSync(frontendPath)) {
  const existingContent = fs.readFileSync(frontendPath, "utf8");
  const match = existingContent.match(/const CONTRACT_DATA = ({[\s\S]*});/);
  if (match) {
    try {
      const existingData = JSON.parse(match[1]);
      if (existingData.deployments) {
        addresses = existingData.deployments;
      }
      if (existingData.externalCollections) {
        externalCollections = existingData.externalCollections;
      }
    } catch (e) {
      console.warn("Could not parse existing deployments from contracts.js");
    }
  }
}

if (fs.existsSync(deploymentsDir)) {
  const chains = fs.readdirSync(deploymentsDir);
  chains.forEach(chain => {
    const deployedContractsPath = path.join(deploymentsDir, chain, "deployed_addresses.json");
    if (fs.existsSync(deployedContractsPath)) {
      const deployed = JSON.parse(fs.readFileSync(deployedContractsPath, "utf8"));

      // Resolve chain name to ID if possible
      let chainId = chain;
      if (NAME_TO_ID[chain.toLowerCase()]) {
        chainId = NAME_TO_ID[chain.toLowerCase()];
      } else if (chain.startsWith("chain-")) {
        chainId = chain.replace("chain-", "");
      }

      for (const [key, addr] of Object.entries(deployed)) {
        const nameMatch = key.split("#")[1];
        if (nameMatch) {
          // Store under both original name/folder and resolved ID
          if (!addresses[chain]) addresses[chain] = {};
          addresses[chain][nameMatch] = addr;

          if (chainId !== chain) {
            if (!addresses[chainId]) addresses[chainId] = {};
            addresses[chainId][nameMatch] = addr;
          }

          // Also ensure chain-ID version exists
          const prefixedId = `chain-${chainId}`;
          if (!addresses[prefixedId]) addresses[prefixedId] = {};
          addresses[prefixedId][nameMatch] = addr;
        }
      }
    }
  });
}

// Environment variable overrides (e.g. for Production/Mainnet)
const envChainId = process.env.DEPLOY_NETWORK_ID || '1';
const knownContracts = ['BragNFT', 'BragToken', 'DonationReceipt', 'ExhibitRegistry', 'NFTMarketplace', 'Treasury'];

knownContracts.forEach(name => {
  const envVar = `CONTRACT_ADDRESS_${name.toUpperCase()}`;
  if (process.env[envVar]) {
    const addr = process.env[envVar];
    console.log(`Using environment override for ${name}: ${addr} on chain ${envChainId}`);

    if (!addresses[envChainId]) addresses[envChainId] = {};
    addresses[envChainId][name] = addr;

    const prefixedId = `chain-${envChainId}`;
    if (!addresses[prefixedId]) addresses[prefixedId] = {};
    addresses[prefixedId][name] = addr;
  }
});

const finalData = {
  contracts: output,
  deployments: addresses,
  externalCollections: externalCollections
};

const content = `const CONTRACT_DATA = ${JSON.stringify(finalData, null, 2)};`;

fs.writeFileSync(frontendPath, content);
console.log(`Successfully updated ${frontendPath}`);
