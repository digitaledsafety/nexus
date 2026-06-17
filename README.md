# brag.charity

[![CI](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml/badge.svg)](https://github.com/digitaledsafety/smart-contracts/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Status: Beta](https://img.shields.io/badge/status-beta-orange.svg)

brag.charity is a next-generation NFT ecosystem designed to bridge the gap between blockchain assets and real-world utility—starting with Minecraft. It features gasless transactions, dynamic on-chain metadata, and a secure "Verification Handshake" that lets players bring their digital collections into any game environment.

Whether you're building a decentralized gallery, a cross-platform gaming reward system, or a high-fidelity NFT marketplace, brag.charity provides the tools to make it happen.

---

## 📚 Documentation
*   **[Features & Technical Specs](FEATURES.md):** Detailed breakdown of contract capabilities and ecosystem architecture.
*   **[Changelog](CHANGELOG.md):** Track the evolution of the project and recent updates.
*   **[Community & Governance](COMMUNITY.md):** Learn how to get involved and participate in the BRAG ecosystem.

---

## What's Inside?

1.  **Gasless Experience:** Built-in support for Alchemy Smart Accounts and Paymasters, allowing users to interact with your ecosystem without needing to hold native gas tokens.
2.  **Dual-State Collectibles:** `BragNFT.sol` implements a "Nexus" architecture that combines tradable art with a soulbound tax receipt. The receipt layer is anchored to the original donor, while the art remains transferable.
3.  **The "Verification Handshake":** A secure, off-chain identity mapping system (SIWE) that connects Minecraft XUIDs to Ethereum wallets without ever exposing private keys.
4.  **Exhibit Vaults:** Purpose-built smart contracts for escrowing NFTs. Use them to "display" items in virtual galleries, lock them for in-game perks, or manage them across different web platforms.
5.  **Multi-Offer Marketplace:** A flexible NFT marketplace that supports multiple simultaneous offers on a single item, including built-in refund protections and token-based trading (`BragToken`).
6.  **High-Fidelity Frontend:** A complete e-commerce experience including a discovery gallery, detailed product pages with media support (images/audio), and a comprehensive admin manager.

---

## 1. Prerequisites

*   **Node.js and npm:** The project runs on Node.js (v18+ recommended).
*   **Hardhat 3 Beta:** This project utilizes the latest Hardhat 3 features for faster development and testing.
*   **Alchemy API Key:** Required for gasless features and Sepolia deployments.

---

## 2. Application Setup (Local Development)

The easiest way to run the entire brag.charity ecosystem is using the **Environment Manager**, which orchestrates the Hardhat node, the Minecraft bridge, and the frontend server.

### 1. First-Time Setup (Deploy, Seed, Start)
To deploy contracts locally, seed initial test data, and start all services in one command:
```shell
npm run env:init
```

### 2. Resuming Services
If you have already deployed and seeded, you can start the services later with:
```shell
npm run env:start
```

### 3. Service Dashboard & Status
The Environment Manager runs a control API on port `9002`. You can verify the status of all managed services (Hardhat, Bridge, Frontend) by visiting:
`http://localhost:9002/status`

Once running, the interactive gallery and manager are available at `http://localhost:3000`.

### 4. System Architecture & Flow

```text
    [ LOCAL DEVELOPMENT ]              [ STAGING / PRODUCTION ]

    +-----------------------+          +-----------------------+
    | Developer Machine     |          | Shared Infrastructure |
    |                       |          |                       |
    |  +-----------------+  |          |  +-----------------+  |
    |  | Hardhat Node    |  |          |  | Sepolia/Mainnet |  |
    |  +--------+--------+  |          |  +--------+--------+  |
    |           |           |          |           |           |
    |  +--------v--------+  |          |  +--------v--------+  |
    |  | NFT Bridge      |  |          |  | Live NFT Bridge |  |
    |  | (Local)         |  |          |  | (Shared)        |  |
    |  +--------+--------+  |          |  +--------+--------+  |
    |           |           |          |           |           |
    |  +--------v--------+  |          |  +--------v--------+  |
    |  | Bedrock Manager |  |          |  | Live Manager    |  |
    |  | (Local Clone)   |  |          |  | (Shared)        |  |
    |  +--------+--------+  |          |  +--------+--------+  |
    |           |           |          |           |           |
    |  +--------v--------+  |          |  +--------v--------+  |
    |  | Minecraft Edu   |  |          |  | Minecraft Edu   |  |
    |  | Server (Local)  |  |          |  | Server (Remote) |  |
    |  +-----------------+  |          |  +-----------------+  |
    |                       |          |                       |
    +-----------------------+          +-----------------------+
```

### 5. Running in Staging Mode

To point your local environment to staging services (shared bridge, shared manager, and Sepolia contracts):

1.  Set `APP_ENV=staging` in your `.env` file.
2.  Provide the staging service URLs:
    ```shell
    STAGING_BRIDGE_URL="ws://staging-bridge.brag.charity:9001"
    STAGING_MANAGER_URL="http://staging-manager.brag.charity:9003"
    STAGING_BRAGNFT_ADDRESS="0x..."
    ```
3.  Initialize the environment:
    ```shell
    npm run env:init
    ```
    This will verify connectivity to the staging manager and prepare the NFT addon with staging configurations.

---

## 3. Configuration & Integration

### Overriding Contract Addresses
By default, the bridge and frontend use addresses from the latest local deployment. You can override these using environment variables:
*   `CONTRACT_ADDRESS_BRAGNFT`: Address of the Nexus NFT contract.
*   `CONTRACT_ADDRESS_NFTMARKETPLACE`: Address of the Marketplace.
*   `CONTRACT_ADDRESS_TREASURY`: Address of the Treasury.

### Updating Frontend Addresses
After a new deployment, contract addresses and ABIs are automatically synchronized to `frontend/contracts.js`. To manually trigger this synchronization:
```shell
node scripts/export-abis.cjs
```

### Minecraft Server Integration
The bridge coordinates between the blockchain and game servers. It provides an HTTP API on port `9000` (for web-based linking) and a WebSocket server on port `9001` (for Minecraft client connections).

To map specific Minecraft servers to `ExhibitVault` contracts, create a `bridge-config.json` file in the root directory:

```json
{
  "servers": {
    "survival-1": {
      "vaultAddress": "0x...",
      "name": "Survival Server"
    },
    "creative-1": {
      "vaultAddress": "0x...",
      "name": "Creative Server"
    }
  }
}
```

### Pointing to External Minecraft Managers
If you are using an external service like `bedrock-server-manager` for remote server control, set the `MANAGER_API_URL` environment variable:
```shell
export MANAGER_API_URL="http://your-manager-api:9003"
```

---

## 4. Seeding Test Data

Jumpstart your local environment with realistic data (minted NFTs, active vaults, and marketplace offers). **Note:** `npm run env:init` already performs local seeding.

### Sepolia Seeding (Gasless)
To test the full account abstraction flow on the Sepolia testnet:
```shell
# Set your environment variables
export SEPOLIA_RPC_URL="your-rpc-url"
export ALCHEMY_API_KEY="your-alchemy-api-key"
export ALCHEMY_GAS_POLICY_ID="your-gas-manager-policy-id"

npm run seed:sepolia
```

---

## 4. Testing

brag.charity uses the native Node.js test runner (`node:test`) alongside `viem` for lightning-fast, type-safe integration tests.

To run the full test suite:
```shell
npx hardhat test
```

You can also target specific areas:
- `npx hardhat test solidity`: Run Foundry-compatible unit tests.
- `npx hardhat test nodejs`: Run the TypeScript integration tests.

---

## 5. Troubleshooting

If you encounter environment-specific errors like "not a valid Win32 application" on Windows or port conflicts, refer to our [Troubleshooting Guide](./TROUBLESHOOTING.md).

---

## 6. Core Features & Possibilities

### The Verification Handshake (SIWE)
brag.charity demonstrates how to verify wallet ownership across platforms where the user doesn't have a private key (like a game console or a chat bot).
1.  **Request:** A player requests a linking token in-game.
2.  **Sign:** The player signs a "Sign-In with Ethereum" message on the brag.charity Manager website.
3.  **Map:** The bridge verifies the signature and maps the player's identity to their wallet address.
4.  **Utility:** The game now knows exactly which NFTs the player owns on-chain.

### Exhibit Vaults
Vaults aren't just for storage—they are the key to utility. By moving an NFT into an `ExhibitVault`, a user can "check-in" to a specific server or gallery. This proves intent and allows platform owners to grant specific permissions or display the item safely.

### Nexus "All-in-One" Collectibles
brag.charity utilizes a Dual-State NFT model (Nexus Architecture) that satisfies both the donor's desire for a tradable asset and regulatory requirements for permanent financial records.

1.  **The Art Layer (Tradable):** The visual asset can be traded or sold on secondary markets like OpenSea. It implements EIP-2981 for an 8% perpetual royalty to the mission.
2.  **The Receipt Layer (Soulbound):** A cryptographically signed `PermanentRecord` is hard-coded to the **Original Donor’s Wallet Address**. Even if the NFT is traded, only the original donor can access and export the tax metadata.
3.  **Impact Vitality (Glowing State):** Owners can "top-up" their collectible (0.0004 ETH) to keep the artwork's visual state "glowing," providing a continuous funding stream for the STEM mission.
4.  **Audit Defense:** The system generates verified PDFs for tax compliance, linking on-chain provenance directly to the donor's $1,000 above-the-line deduction (starting in 2026).

---

## 7. Deployment Workflow (CI/CD)

This project uses GitHub Actions for continuous testing and automated deployments to Sepolia.

*   **Continuous Integration:** Every PR is tested against a local Hardhat node to ensure contract integrity.
*   **Manual Deployment:** Trigger a "Deploy to Sepolia" workflow from the Actions tab. This will deploy the `BragNFT`, `Treasury`, and `NFTMarketplace` contracts using deterministic addresses.
*   **Auto-Updating ABIs:** Pushing to `main` automatically updates the frontend with the latest contract ABIs and addresses.

---

Have fun building with brag.charity!
