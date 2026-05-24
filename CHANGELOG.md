# Changelog

All notable changes to the brag.charity project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2024-05-20 (Current)

### Added
- **Multi-Standard Exhibit Vaults:** Expanded support to include ERC1155 tokens alongside ERC721.
- **Batch Marketplace Operations:** Implemented `batchAcceptOffers` and `batchBuyFromListings` for gas efficiency.
- **Enhanced Treasury:** Upgraded Treasury to be EIP-4337 (Account Abstraction) compliant with a formal proposal/approval workflow.
- **Offer Expiration:** Added `expiry` timestamps to marketplace offers.
- **Private Listings:** Enabled `targetBuyer` field in Marketplace listings.
- **Multimedia Detection:** Added support for `.webp`, `.mp4`, `.glb`, and `.gltf` media formats in BragNFT.
- **Glow Mechanism:** Implemented "Impact Vitality" state in BragNFT with BRAG token top-up support.

### Changed
- **Chainlink Integration:** Refined `_getUsdValue` logic to include a 25-hour staleness check and improved error handling for price feed failures.
- **Deployment Scripts:** Migrated to Hardhat Ignition for more robust and deterministic deployments.
- **Frontend Core:** Unified `txHandler` to support both EOA and Smart Contract Account (Gasless) transaction modes.

### Fixed
- **NFT Transfer Logic:** Corrected `_acceptOffer` to include a proper `delete` of the offer before distributing proceeds (CEI pattern).
- **Royalty Handling:** Added `try-catch` blocks to marketplace settlements to prevent reverts when interacting with non-standard royalty implementations.

## [0.1.0] - Initial Release

### Added
- **BragNFT.sol:** Initial implementation of Dual-State "Nexus" NFTs.
- **BragToken.sol:** Initial deployment of BRAG governance token.
- **NFTMarketplace.sol:** Basic offer-based trading for ERC721 tokens.
- **Minecraft Bridge:** Initial implementation of the SIWE-based Verification Handshake.
- **Frontend Gallery:** Discovery and donation interface.
