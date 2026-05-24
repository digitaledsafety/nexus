# brag.charity Ecosystem Features

This document provides a comprehensive overview of the smart contract features and technical capabilities of the brag.charity ecosystem.

## 1. BragNFT (Nexus Architecture)
`BragNFT.sol` is the core collectible contract, implementing a "Dual-State" model that satisfies both user utility and regulatory requirements.

*   **Dual-State Metadata:** Combines a tradable visual art layer with a soulbound (non-transferable) tax receipt layer (`PermanentRecord`) anchored to the original donor.
*   **Impact Vitality (Glowing State):** NFTs feature a dynamic visual "glow" that lasts for 30 days. Owners can maintain this state by "topping up" with a $1 donation in ETH or 1,000,000 BRAG tokens.
*   **Multimedia Support:** Advanced on-chain detection for images, GIFs, audio, video, and 3D models (GLB/GLTF), with automatic SVG fallback generation for thumbnails.
*   **Flexible Storage:** Supports both traditional IPFS/web URIs and direct on-chain media storage for high-fidelity persistence.
*   **EIP-2981 Royalties:** Implements a fixed 8% perpetual royalty to support the mission, enforced on compatible marketplaces.
*   **EIP-6454 Signaling:** Implements transferability signaling while preserving the immutable nature of the tax receipt.
*   **Reward Ratio:** Automatically mints 1,000,000 BRAG tokens for every $1 USD donated (calculated via Chainlink Price Feeds).

## 2. BragToken (Governance)
`BragToken.sol` is the utility and governance token of the ecosystem.

*   **Standard Compliance:** Fully ERC20 compliant with `Burnable`, `Permit`, and `Votes` extensions.
*   **Governance Enabled:** Integrates with OpenZeppelin's governance suite for decentralized treasury management and protocol upgrades.
*   **Max Supply:** Capped at 1 quadrillion tokens to support high-volume donation rewards and granular voting power.

## 3. NFT Marketplace
`NFTMarketplace.sol` is a feature-rich trading platform designed for the ecosystem.

*   **Multi-Offer System:** Allows multiple simultaneous offers on a single item, with secure escrow of payment tokens.
*   **Batch Operations:** High-efficiency functions for `batchCreateOffers`, `batchAcceptOffers`, `batchCancelOffers`, and `batchBuyFromListings`.
*   **Offer Expiration:** Granular control for buyers to set time limits on their bids.
*   **Private Listings:** Sellers can target specific buyer addresses for private OTC-style trades.
*   **Royalty Enforcement:** Automatic calculation and distribution of royalties to creators via EIP-2981.
*   **Protocol Protection:** Administrative controls for minimum offer prices and protocol fee management.

## 4. Exhibit Vaults & Registry
The Vault system enables NFTs to be securely locked for cross-platform utility (e.g., Minecraft).

*   **Verified Locations:** `ExhibitRegistry` tracks trusted vault instances, preventing malicious lock-ups.
*   **Time-Gated Exhibition:** Users can specify a duration for their lock-up, ideal for "checking in" to seasonal events or galleries.
*   **Vault-to-Vault Movement:** `Move` functions allow assets to transition between verified locations (e.g., from a survival server to a creative gallery) without returning to the user's wallet.
*   **Batch Management:** Optimized functions for bulk exhibiting, withdrawing, and moving assets across contracts.
*   **Multi-Standard:** Full support for both ERC721 and ERC1155 tokens.

## 5. Treasury (Smart Contract Account)
`Treasury.sol` serves as the ecosystem's secure funds manager and multi-sig wallet.

*   **EIP-4337 Compliant:** Functions as a Smart Contract Account (SCA) compatible with standard Account Abstraction entry points.
*   **Proposal Workflow:** Supports a formal `Propose -> Approve -> Execute` flow for multi-transaction batches.
*   **Atomic Execution:** Execute multiple calls in a single transaction, ensuring all steps succeed or fail together.
*   **Flexible Thresholds:** Dynamic M-of-N signature requirements for administrative actions.

## 6. Ecosystem Utilities
*   **Gasless Experience:** Integration with Alchemy AA SDK and Paymasters for native-free transactions on Sepolia.
*   **Minecraft Bridge:** A secure WebSocket/HTTP bridge for the "Verification Handshake" (SIWE mapping of Wallets to Minecraft XUIDs).
*   **Admin Manager:** A comprehensive web interface for contract configuration, treasury management, and environment monitoring.
*   **Tax Receipt PDF Engine:** Automated generation of IRS-compliant donation receipts based on on-chain `PermanentRecord` data.
