import fs from "fs";
import path from "path";
import hre from "hardhat";
import {
    createPublicClient,
    http,
    encodeDeployData,
    Hex,
    keccak256,
    toHex,
    concat,
    getContractAddress,
    getAddress,
    encodeFunctionData,
    createWalletClient,
    walletActions,
    defineChain
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia, localhost } from "viem/chains";
import { stringToHex } from "viem/utils";
// @ts-ignore
import { createMultiOwnerLightAccount } from "@alchemy/aa-accounts";
// @ts-ignore
import { createAlchemySmartAccountClient, defineAlchemyChain } from "@alchemy/aa-alchemy";
// @ts-ignore
import { LocalAccountSigner } from "@alchemy/aa-core";

const hardhatLocal = defineChain({
    ...localhost,
    id: 31337,
});

/** * CORRECTED ROLES: 
 * Using keccak256(stringToHex()) ensures exactly 32 bytes (64 hex chars + 0x).
 * This prevents AbiEncodingBytesSizeMismatchError.
 */
const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000" as Hex;
const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));
const TREASURY_ROLE = keccak256(stringToHex("TREASURY_ROLE"));
const VERIFIER_ROLE = keccak256(stringToHex("VERIFIER_ROLE"));

/**
 * Retrieves a configuration variable from either environment variables or Hardhat configuration variables.
 */
function getConfig(key: string, defaultValue?: string): string {
    if (process.env[key]) return process.env[key] as string;
    const vars = (hre.config as any).vars;
    if (vars && vars[key]) return vars[key];

    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Config variable ${key} is not set in process.env or hardhat config`);
}

async function main() {
    const networkName = process.env.HARDHAT_NETWORK || "localhost";
    const isSepolia = networkName === "sepolia";
    const alchemyApiKey = getConfig("ALCHEMY_API_KEY", "");
    const chain = isSepolia ? defineAlchemyChain({
        chain: sepolia,
        rpcBaseUrl: "https://eth-sepolia.g.alchemy.com/v2"
    }) : hardhatLocal;
    const gasPolicyId = getConfig("ALCHEMY_GAS_POLICY_ID", "");
    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`) :
                    "http://127.0.0.1:8545");

    if (isSepolia && (!alchemyApiKey || !gasPolicyId)) {
        throw new Error("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless Sepolia deployment.");
    }

    const deploySaltBase = getConfig("DEPLOY_SALT", "v1");

    let privateKey: string;
    if (isSepolia) {
        privateKey = getConfig("SEPOLIA_PRIVATE_KEY");
    } else {
        privateKey = process.env.LOCAL_PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    }
    if (privateKey && !privateKey.startsWith("0x")) {
        privateKey = `0x${privateKey}`;
    }
    const viemAccount = privateKeyToAccount(privateKey as Hex);
    const eoaAddress = viemAccount.address;
    const signer = LocalAccountSigner.privateKeyToAccountSigner(privateKey as Hex);

    const publicClient = createPublicClient({
        chain,
        transport: http(rpcUrl)
    });

    console.log(`Deploying contracts to ${networkName} gaslessly...`);
    console.log(`EOA Address (to become owner): ${eoaAddress}`);

    const smartAccountClient = await createAlchemySmartAccountClient({
        chain,
        account: await createMultiOwnerLightAccount({
            transport: http(rpcUrl),
            chain: isSepolia ? chain : sepolia, // Fallback to sepolia metadata for local factory discovery
            signer,
            owners: [eoaAddress],
            version: "v2.0.0"
        }),
        ...(isSepolia ? {
            apiKey: alchemyApiKey,
            gasManagerConfig: {
                policyId: gasPolicyId,
            },
            opts: {
                feeOptions: {
                    maxFeePerGas: { multiplier: 5.0 },
                    maxPriorityFeePerGas: { multiplier: 5.0 }
                }
            }
        } : {
            rpcUrl
        }),
    });

    const scaAddress = smartAccountClient.account.address;
    console.log(`Smart Contract Account Address: ${scaAddress}`);

    /**
     * Robust UserOperation waiter with retries and exponential backoff.
     * Mitigates FailedToFindTransactionError and bundler latency on Sepolia.
     */
    async function waitForUserOp(uoHash: Hex) {
        console.log(`Waiting for UserOp: ${uoHash}...`);
        let retries = 0;
        const maxRetries = 20;
        const baseInterval = 5000;

        while (retries < maxRetries) {
            try {
                const txHash = await smartAccountClient.waitForUserOperationTransaction({ hash: uoHash });
                console.log(`UserOp mined! Tx Hash: ${txHash}`);
                return txHash;
            } catch (e: any) {
                retries++;
                const delay = baseInterval + (Math.pow(2, retries) * 100);
                console.warn(`Retry ${retries}/${maxRetries} for ${uoHash}. Waiting ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                if (retries === maxRetries) throw e;
            }
        }
        throw new Error(`UserOp ${uoHash} timed out after ${maxRetries} retries`);
    }

    async function deploy(name: string, args: any[]) {
        console.log(`Deploying ${name}...`);
        const artifactPath = path.join(process.cwd(), `artifacts/contracts/${name}.sol/${name}.json`);
        const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

        const deployData = encodeDeployData({ abi, args, bytecode });

        if (isSepolia) {
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            // Use a deterministic salt based on contract name and deployment version
            // This prevents "replacement underpriced" errors on retry if the nonce is the same
            const salt = keccak256(toHex(`${name}-${deploySaltBase}`));
            const data = concat([salt, deployData]);

            try {
                // Fetch current gas prices to ensure we are not underpricing
                const gasPrice = await publicClient.getGasPrice();
                console.log(`Current gas price: ${gasPrice.toString()}`);

                const uoResponse = await smartAccountClient.sendUserOperation({
                    uo: { target: factoryAddress, data }
                });

                const txHash = await waitForUserOp(uoResponse.hash);
                await publicClient.waitForTransactionReceipt({ hash: txHash });

                const deployedAddress = getContractAddress({
                    bytecode: deployData,
                    from: factoryAddress,
                    opcode: "CREATE2",
                    salt
                });

                console.log(`${name} deployed at ${deployedAddress}`);
                return { address: deployedAddress, abi };
            } catch (e: any) {
                console.error(`Factory deployment failed for ${name}: ${e.message}`);
                throw e;
            }
        } else {
            const eoaClient = createWalletClient({ account: viemAccount, chain, transport: http(rpcUrl) }).extend(walletActions);
            const hash = await eoaClient.deployContract({ abi, bytecode, args });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            console.log(`${name} deployed at ${receipt.contractAddress}`);
            return { address: receipt.contractAddress!, abi };
        }
    }

    // --- Contract Deployments ---
    const minimumDonation = 0n;
    const externalTreasury = process.env.TREASURY_ADDRESS;
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032"; // v0.7.0

    let treasury: { address: `0x${string}`, abi: any };
    if (externalTreasury && externalTreasury !== "") {
        console.log(`Using external treasury: ${externalTreasury}`);
        // We still need the Treasury ABI for role granting later
        const treasuryArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/Treasury.sol/Treasury.json"), "utf8"));
        treasury = { address: getAddress(externalTreasury), abi: treasuryArtifact.abi };
    } else {
        // Deploy Treasury as 1-of-1 multi-sig with scaAddress as initial owner
        treasury = await deploy("Treasury", [[scaAddress], 1n, entryPointAddress]);
    }

    const exhibitRegistry = await deploy("ExhibitRegistry", [scaAddress]);
    const mockPriceFeed = await deploy("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
    const bragNFT = await deploy("BragNFT", [scaAddress, treasury.address, minimumDonation, mockPriceFeed.address]);

    const initialSupply = 0n;
    const maxSupply = 1000000000000000000000000000000000n;
    const bragToken = await deploy("BragToken", [scaAddress, initialSupply, maxSupply]);
    const marketplace = await deploy("NFTMarketplace", [scaAddress, bragToken.address]);

    // --- Batch Setup Transactions ---
    console.log("Batching setup and ownership transfer...");
    const setupTxs: any[] = [
        {
            to: bragNFT.address,
            data: encodeFunctionData({
                abi: bragNFT.abi,
                functionName: "setBragToken",
                args: [bragToken.address]
            })
        },
        {
            to: bragToken.address,
            data: encodeFunctionData({
                abi: bragToken.abi,
                functionName: "grantRole",
                args: [MINTER_ROLE, bragNFT.address]
            })
        }
    ];

    // --- BragNFT Roles ---
    setupTxs.push({
        to: bragNFT.address,
        data: encodeFunctionData({
            abi: bragNFT.abi,
            functionName: "grantRole",
            args: [DEFAULT_ADMIN_ROLE, eoaAddress]
        })
    });

    // --- BragToken Roles ---
    setupTxs.push({
        to: bragToken.address,
        data: encodeFunctionData({
            abi: bragToken.abi,
            functionName: "grantRole",
            args: [DEFAULT_ADMIN_ROLE, eoaAddress]
        })
    });
    setupTxs.push({
        to: bragToken.address,
        data: encodeFunctionData({
            abi: bragToken.abi,
            functionName: "grantRole",
            args: [MINTER_ROLE, eoaAddress]
        })
    });

    // --- NFTMarketplace Roles & Fee Recipient ---
    setupTxs.push({
        to: marketplace.address,
        data: encodeFunctionData({
            abi: marketplace.abi,
            functionName: "grantRole",
            args: [DEFAULT_ADMIN_ROLE, eoaAddress]
        })
    });
    setupTxs.push({
        to: marketplace.address,
        data: encodeFunctionData({
            abi: marketplace.abi,
            functionName: "setFeeRecipient",
            args: [eoaAddress]
        })
    });

    // --- ExhibitRegistry Roles ---
    setupTxs.push({
        to: exhibitRegistry.address,
        data: encodeFunctionData({
            abi: exhibitRegistry.abi,
            functionName: "grantRole",
            args: [DEFAULT_ADMIN_ROLE, eoaAddress]
        })
    });
    setupTxs.push({
        to: exhibitRegistry.address,
        data: encodeFunctionData({
            abi: exhibitRegistry.abi,
            functionName: "grantRole",
            args: [VERIFIER_ROLE, eoaAddress]
        })
    });

    // --- Treasury Ownership Transfer ---
    // The smart account (scaAddress) is currently the only owner of the Treasury.
    // We add the EOA as an owner so it can also manage the treasury.
    setupTxs.push({
        to: treasury.address,
        data: encodeFunctionData({
            abi: treasury.abi,
            functionName: "execute",
            args: [
                treasury.address,
                0n,
                encodeFunctionData({
                    abi: treasury.abi,
                    functionName: "addOwner",
                    args: [eoaAddress]
                }),
                0n
            ]
        })
    });

    console.log(`Sending batch of ${setupTxs.length} transactions...`);
    const uoResponse = await smartAccountClient.sendUserOperation({
        uo: setupTxs.map(tx => ({
            target: tx.to,
            data: tx.data
        }))
    });
    
    const batchTxHash = await waitForUserOp(uoResponse.hash);
    await publicClient.waitForTransactionReceipt({ hash: batchTxHash });
    console.log("Batch setup complete!");

    // --- Save Deployment Artifacts ---
    const chainId = await publicClient.getChainId();
    const deploymentDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
    if (!fs.existsSync(deploymentDir)) {
        fs.mkdirSync(deploymentDir, { recursive: true });
    }

    const deployedAddresses = {
        "AppModule#BragNFT": bragNFT.address,
        "AppModule#BragToken": bragToken.address,
        "AppModule#ExhibitRegistry": exhibitRegistry.address,
        "AppModule#NFTMarketplace": marketplace.address,
        "AppModule#Treasury": treasury.address,
    };

    fs.writeFileSync(
        path.join(deploymentDir, "deployed_addresses.json"),
        JSON.stringify(deployedAddresses, null, 2)
    );

    console.log("Deployment complete! Artifacts saved.");
    console.log(deployedAddresses);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
