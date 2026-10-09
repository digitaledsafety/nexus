# BragNFT Frontend

This is a vanilla HTML/JS interface for interacting with the BragNFT ecosystem.

## Deployment to GitHub Pages

This project is configured with a GitHub Action (`.github/workflows/deploy-pages.yml`) that automatically handles deployment for you.

1. Push your changes to the `main` branch.
2. The Action will compile your contracts, update the ABIs, and push the site to a `gh-pages` branch.
3. In your GitHub Repo settings, under **Pages**, ensure the source is set to **Deploy from a branch** and the branch is set to **gh-pages**.

## Local Development

The frontend is a **Single Page Application (SPA)**. To run it locally, use a local server to avoid CORS issues with template fetching:
```bash
npm run serve
```
Then navigate to `http://localhost:3000`.

### Connecting Wallet to Nexus Custom Local Network

When testing or interacting with the frontend against local smart contracts (`npm run env:init`), you must configure your Web3 wallet (e.g. MetaMask) to connect to the local Nexus network spun up on port `8545`.

**Custom Network Configuration:**
*   **Network Name:** `Nexus Devnet` (or `Hardhat Local`)
*   **RPC URL:** `http://127.0.0.1:8545` (or `http://localhost:8545`)
*   **Chain ID:** `31337` (Hex: `0x7A69`)
*   **Currency Symbol:** `ETH`
*   **Block Explorer:** *(Leave blank)*

**Adding to MetaMask:**
1. Open MetaMask and click the network selector at top left.
2. Click **Add Network** -> **Add a network manually**.
3. Enter the network parameters above and save.
4. Import a pre-funded local account private key (e.g., `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`) to send test transactions and mint NFTs on the local network.

## Dual-State Architecture (Nexus)

The frontend implements conditional rendering for the **Nexus Dual-State** model:
*   **Discovery:** Shows all minted NFTs in the gallery.
*   **Product View:** Automatically detects if the connected wallet is the `originalDonor`. If so, it reveals the **Tax Record** section and enables the **Export Tax Bundle (PDF)** feature.
*   **Vitality Glow:** Displays a visual neon-glow effect on the NFT if it has been "topped up" within the last 30 days.

## Viewing NFTs

The SPA uses hash-based routing with query parameters for deep linking.

**URL Template:**
`#/product?id=<TOKEN_ID>&addr=<CONTRACT_ADDRESS>`

**Example:**
`#/product?id=0&addr=0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9`

### Triggering Live Data
To see real data in the gallery and product page:
1.  Open the **Manager** view and connect your wallet.
2.  In the **Donate & Mint** section, enter a donation amount and impact message.
3.  Once the transaction confirms, the NFT will appear in the **Marketplace** discovery gallery.

### Media Support
The frontend supports a wide range of media types:
*   **On-Chain SVG:** Generated dynamically for message-based donations.
*   **Images:** JPG, PNG, WEBP, and animated GIFs.
*   **Multimedia:** MP3/WAV/OGG audio and MP4/WebM video support.
*   **Gateways:** Automatic resolution for `ipfs://` and `ar://` (Arweave) URIs via public gateways.
