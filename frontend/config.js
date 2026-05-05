/**
 * config.js - Global configuration for brag.charity frontend.
 * Source Alchemy credentials and other environment-specific settings here.
 */

window.APP_CONFIG = {
    // Alchemy Account Abstraction Settings
    alchemy: {
        // Sepolia (Chain ID: 11155111)
        11155111: {
            apiKey: "", // Provide in Manager UI
            gasPolicyId: "", // Provide in Manager UI
            rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/",
            entryPointAddress: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
            factoryAddress: "0x000000000019d2Ee9F2729A65AfE20bb0020AefC"
        },
        // Local Hardhat (Chain ID: 31337)
        31337: {
            apiKey: "LOCAL",
            gasPolicyId: "",
            rpcUrl: "http://0.0.0.0:8545",
            entryPointAddress: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
            factoryAddress: "0x000000000019d2Ee9F2729A65AfE20bb0020AefC"
        }
    },

    // Maximum gas limits for Account Abstraction transactions (UserOperations)
    gasLimits: {
        maxFeePerGas: "100000000000", // 100 Gwei
        maxPriorityFeePerGas: "2000000000", // 2 Gwei
        hugeCalldataGasLimit: 25000000 // 25M gas
    }
};
