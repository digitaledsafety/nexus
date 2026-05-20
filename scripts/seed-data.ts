import fs from "fs";
import path from "path";
import hre from "hardhat";
import {
    createPublicClient,
    createWalletClient,
    http,
    parseEther,
    formatEther,
    getAddress,
    encodeFunctionData,
    Hex,
    Chain,
    encodeAbiParameters,
    parseAbiParameters,
    encodePacked,
    defineChain,
    decodeEventLog,
    walletActions,
    encodeDeployData,
    concat,
    getContractAddress,
    keccak256,
    toHex
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { localhost, sepolia } from "viem/chains";
import { stringToHex } from "viem/utils";

// @ts-ignore
import { createLightAccountClient, createMultiOwnerLightAccount } from "@alchemy/aa-accounts";
// @ts-ignore
import { createAlchemySmartAccountClient, defineAlchemyChain } from "@alchemy/aa-alchemy";
// @ts-ignore
import { LocalAccountSigner } from "@alchemy/aa-core";

const hardhatLocal = defineChain({
    ...localhost,
    id: 31337,
});

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
    const gasPolicyId = getConfig("ALCHEMY_GAS_POLICY_ID", "");
    const chain = isSepolia ? defineAlchemyChain({
        chain: sepolia,
        rpcBaseUrl: "https://eth-sepolia.g.alchemy.com/v2"
    }) : hardhatLocal;

    if (isSepolia && (!alchemyApiKey || !gasPolicyId)) {
        throw new Error("Missing ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID for gasless Sepolia seeding.");
    }

    const rpcUrl = process.env.RPC_URL ||
                   (isSepolia ?
                    (process.env.SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`) :
                    "http://127.0.0.1:8545");

    let privateKey0 = process.env.LOCAL_PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    let privateKey1 = process.env.LOCAL_BUYER_PRIVATE_KEY || "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

    if (isSepolia) {
        privateKey0 = getConfig("SEPOLIA_PRIVATE_KEY");
        privateKey1 = getConfig("SEPOLIA_BUYER_PRIVATE_KEY");
    }

    if (privateKey0 && !privateKey0.startsWith("0x")) privateKey0 = `0x${privateKey0}`;
    if (privateKey1 && !privateKey1.startsWith("0x")) privateKey1 = `0x${privateKey1}`;

    const account0 = privateKeyToAccount(privateKey0 as Hex);
    const account1 = privateKeyToAccount(privateKey1 as Hex);

    const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });
    const chainId = await publicClient.getChainId();

    // 1. Setup Clients (Gasless for Sepolia)
    let client0: any = createWalletClient({ account: account0, chain, transport: http(rpcUrl) }).extend(walletActions);
    let client1: any = createWalletClient({ account: account1, chain, transport: http(rpcUrl) }).extend(walletActions);

    if (isSepolia) {
        console.log("Initializing Smart Account Clients for Sepolia...");
        const signer0 = LocalAccountSigner.privateKeyToAccountSigner(privateKey0 as Hex);
        const signer1 = LocalAccountSigner.privateKeyToAccountSigner(privateKey1 as Hex);

        client0 = await createAlchemySmartAccountClient({
            chain,
            account: await createMultiOwnerLightAccount({
                transport: http(rpcUrl),
                chain,
                signer: signer0,
                owners: [account0.address],
                version: "v2.0.0"
            }),
            apiKey: alchemyApiKey,
            gasManagerConfig: { policyId: gasPolicyId },
        });

        client1 = await createAlchemySmartAccountClient({
            chain,
            account: await createMultiOwnerLightAccount({
                transport: http(rpcUrl),
                chain,
                signer: signer1,
                owners: [account1.address],
                version: "v2.0.0"
            }),
            apiKey: alchemyApiKey,
            gasManagerConfig: { policyId: gasPolicyId },
        });
        console.log(`SCA 0: ${client0.account.address}`);
        console.log(`SCA 1: ${client1.account.address}`);
    } else {
        // Local SCA for testing if needed, but usually we just use EOA for local seeding
        // If we want to test SCA locally:
        /*
        client0 = await createAlchemySmartAccountClient({
            chain,
            account: await createMultiOwnerLightAccount({
                transport: http(rpcUrl),
                chain,
                signer: LocalAccountSigner.privateKeyToAccountSigner(privateKey0 as Hex),
                owners: [account0.address],
                version: "v2.0.0"
            }),
            rpcUrl
        });
        */
    }

    const deploymentPath = path.join(process.cwd(), `ignition/deployments/chain-${chainId}/deployed_addresses.json`);
    if (!fs.existsSync(deploymentPath)) {
        throw new Error(`Deployment not found at ${deploymentPath}. Please deploy first.`);
    }
    const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

    const bragNFTAddr = deployment["AppModule#BragNFT"];
    const bragTokenAddr = deployment["AppModule#BragToken"];
    const marketplaceAddr = deployment["AppModule#NFTMarketplace"];
    const registryAddr = deployment["AppModule#ExhibitRegistry"];

    const bragNFTArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/BragNFT.sol/BragNFT.json"), "utf8"));

    const donationAmount = isSepolia ? 0n : parseEther("0.1");

    // Helper for sending transactions (UserOp or Standard)
    async function sendTx(client: any, txs: { to: `0x${string}`, data: `0x${string}`, value?: bigint }[]) {
        if (isSepolia) {
            const uoResponse = await client.sendUserOperation({
                uo: txs.map(tx => ({ target: tx.to, data: tx.data, value: tx.value }))
            });
            const hash = await client.waitForUserOperationTransaction(uoResponse);
            return await publicClient.waitForTransactionReceipt({ hash });
        } else {
            let lastReceipt;
            for (const tx of txs) {
                const hash = await client.sendTransaction({
                    to: tx.to,
                    data: tx.data,
                    value: tx.value
                });
                lastReceipt = await publicClient.waitForTransactionReceipt({ hash });
            }
            return lastReceipt;
        }
    }

    // 1. Initial Donations
    console.log("Seeding donations...");
    const donations = [
        { message: "Art Deco Masterpiece", uri: "https://picsum.photos/id/10/800/800", onChain: false },
        { message: "On-Chain SVG Native", uri: "", onChain: false },
        { message: "Multimedia Impact (Video)", uri: "https://www.w3schools.com/html/mov_bbb.mp4", onChain: false },
        { message: "Echoes of Charity (Audio)", uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", onChain: false },
        { message: "Dimensional Giving (3D)", uri: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", onChain: true },
        { message: "Dynamic Impact (GIF)", uri: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", onChain: true },
        { message: "Crystal Clear Support (WebP)", uri: "https://www.gstatic.com/webp/gallery/1.webp", onChain: false }
    ];

    let lastTokenId = 0n;
    for (const d of donations) {
        console.log(`Donating: ${d.message}...`);
        const receipt = await sendTx(client0, [{
            to: bragNFTAddr,
            data: encodeFunctionData({
                abi: bragNFTArtifact.abi,
                functionName: 'donate',
                args: [d.message, d.uri, d.onChain]
            }),
            value: donationAmount
        }]);

        for (const log of receipt.logs) {
            try {
                const decoded = decodeEventLog({ abi: bragNFTArtifact.abi, data: log.data, topics: log.topics });
                if (decoded.eventName === 'Donated') {
                    lastTokenId = (decoded.args as any).tokenId;
                    console.log(`Minted Token ID: ${lastTokenId}`);
                    break;
                }
            } catch (e) {}
        }
    }

    // 2. Deploy and Register ExhibitVaults
    const vaultNames = ["minecraft-server-1", "minecraft-server-2", "gallery-1", "roblox-1", "custom-1"];
    const vaultAddresses: `0x${string}`[] = [];
    const vaultArtifact = JSON.parse(fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/ExhibitVault.sol/ExhibitVault.json"), "utf8"));

    console.log("Deploying 5 ExhibitVaults...");
    const timestamp = Date.now();

    for (const name of vaultNames) {
        const salt = keccak256(toHex(`${name}-${timestamp}`));
        const deployData = encodeDeployData({ abi: vaultArtifact.abi, args: [registryAddr], bytecode: vaultArtifact.bytecode });

        let vaultAddr: `0x${string}`;
        if (isSepolia) {
            const factoryAddress = "0x4e59b44847b379578588920cA78FbF26c0B4956C";
            const data = concat([salt, deployData]);

            const uoResponse = await client0.sendUserOperation({
                uo: { target: factoryAddress, data }
            });
            const hash = await client0.waitForUserOperationTransaction(uoResponse);
            await publicClient.waitForTransactionReceipt({ hash });

            vaultAddr = getContractAddress({
                bytecode: deployData,
                from: factoryAddress,
                opcode: "CREATE2",
                salt
            });
        } else {
            const hash = await client0.deployContract({
                abi: vaultArtifact.abi,
                bytecode: vaultArtifact.bytecode,
                args: [registryAddr]
            });
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            vaultAddr = receipt.contractAddress!;
        }

        console.log(`Vault ${name} deployed at ${vaultAddr}`);
        vaultAddresses.push(vaultAddr);

        // Register vault
        await sendTx(client0, [{
            to: registryAddr,
            data: encodeFunctionData({
                abi: [{ name: 'verifyVault', type: 'function', inputs: [{ name: 'vault', type: 'address' }, { name: 'locationType', type: 'uint8' }, { name: 'name', type: 'string' }, { name: 'description', type: 'string' }], outputs: [] }],
                args: [vaultAddr, 0, name, `Seeded vault for ${name}`]
            })
        }]);
    }

    // 3. User B: Marketplace Setup
    console.log("Setting up marketplace for User B...");
    const offerPrice = parseEther("1");

    // Mint tokens to User B
    await sendTx(client0, [{
        to: bragTokenAddr,
        data: encodeFunctionData({
            abi: [{ name: 'mint', type: 'function', inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [] }],
            args: [client1.account.address, parseEther("100")]
        })
    }]);

    // User B: Create Offer
    console.log("User B: Creating offer...");
    await sendTx(client1, [
        {
            to: bragTokenAddr,
            data: encodeFunctionData({
                abi: [{ name: 'approve', type: 'function', inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }], outputs: [{ name: '', type: 'bool' }] }],
                args: [marketplaceAddr, offerPrice]
            })
        },
        {
            to: marketplaceAddr,
            data: encodeFunctionData({
                abi: [{ name: 'createOffer', type: 'function', inputs: [{ name: 'nftContract', type: 'address' }, { name: 'tokenId', type: 'uint256' }, { name: 'amount', type: 'uint256' }, { name: 'price', type: 'uint256' }], outputs: [] }],
                args: [bragNFTAddr, lastTokenId, 1n, offerPrice]
            })
        }
    ]);

    // 4. Save Artifacts
    const artifacts = {
        network: networkName,
        chainId,
        vaults: vaultNames.reduce((acc, name, i) => ({ ...acc, [name]: vaultAddresses[i] }), {}),
        userA: client0.account.address,
        userB: client1.account.address,
    };

    const deploymentDir = path.join(process.cwd(), `ignition/deployments/chain-${chainId}`);
    if (!fs.existsSync(deploymentDir)) {
        fs.mkdirSync(deploymentDir, { recursive: true });
    }
    const artifactFile = path.join(deploymentDir, `seed_artifacts.json`);
    fs.writeFileSync(artifactFile, JSON.stringify(artifacts, null, 2));

    // Also save to root of deployments for easier artifact upload in workflow
    const rootArtifactDir = path.join(process.cwd(), "ignition/deployments");
    if (!fs.existsSync(rootArtifactDir)) {
        fs.mkdirSync(rootArtifactDir, { recursive: true });
    }
    const rootArtifactFile = path.join(rootArtifactDir, "seed_artifacts.json");
    fs.writeFileSync(rootArtifactFile, JSON.stringify(artifacts, null, 2));

    console.log("Seeding complete!");
    console.log(`Artifacts saved to ${artifactFile} and ${rootArtifactFile}`);
    console.log(JSON.stringify(artifacts, null, 2));
}

main().catch(console.error);
