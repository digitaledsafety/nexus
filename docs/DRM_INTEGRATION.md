# Design Document: Smart Contract & Widevine DRM Integration

## Overview

This document outlines the architecture for integrating Ethereum-based NFTs as "License Keys" for media content (DASH/HLS streams) protected by Widevine DRM. The system ensures that only users who own a specific NFT can obtain the DRM license required for playback.

## Goals
- **Ownership over Distribution:** The NFT represents the authoritative right to access content.
- **1-to-1 Licensing (MVP):** One NFT Token ID unlocks one specific Content ID.
- **Verification Handshake:** Use Sign-In with Ethereum (SIWE) to link a user's playback session to their wallet.

---

## Architecture

### Components
1.  **License NFT (Smart Contract):** An ERC-721 or ERC-1155 contract. Each `tokenId` corresponds to a `contentId` (e.g., a DASH manifest URL or a unique identifier in the DRM system).
2.  **Frontend Player (Shaka Player):** A web-based player that requests encrypted content and manages the license request flow.
3.  **DRM Proxy (Node.js/Auth Server):** A middleware server that intercepts Widevine license requests, verifies the user's NFT ownership, and forwards authorized requests to the actual Widevine License Server (or returns a mock license for the PoC).
4.  **Widevine License Server:** The backend that generates the CDM (Content Decryption Module) response.

### Sequential Flow
1.  **Auth:** User connects their wallet to the Frontend and signs a SIWE message. This generates a session token (e.g., a JWT or a signed header).
2.  **Manifest Load:** The player loads a DASH manifest (.mpd).
3.  **License Request Interception:**
    -   Shaka Player triggers a `LICENSE` request.
    -   A `requestFilter` attaches the SIWE signature and the desired `tokenId` to the request headers.
4.  **Ownership Verification (DRM Proxy):**
    -   The Proxy receives the request.
    -   It verifies the SIWE signature to identify the `userAddress`.
    -   It queries the blockchain (via `viem` or `ethers`) to check: `balanceOf(userAddress, tokenId) > 0`.
5.  **License Delivery:**
    -   **If Verified:** The Proxy forwards the request to the Widevine License Server and returns the result to the player.
    -   **If Not Verified:** The Proxy returns a `403 Forbidden` error.

---

## On-Chain vs. Off-Chain DRM Policies

The DRM policy (e.g., "rental duration," "max resolution," "offline access") can be stored in different locations.

### 1. On-Chain Policies
Policies are stored directly in the NFT metadata or a specialized contract mapping.
-   **Pros:**
    -   **Immutability:** The user knows exactly what rights they bought, and the platform cannot change them arbitrarily.
    -   **Transparency:** Anyone can audit the license terms.
    -   **Composability:** Other dApps can read these policies to provide secondary utility.
-   **Cons:**
    -   **Gas Costs:** Updating policies or storing complex JSON structures is expensive.
    -   **Inflexibility:** Hard to change if a mistake is made (unless using upgradeable contracts).

### 2. Off-Chain Policies (e.g., Centralized DB or IPFS)
The NFT merely holds a `contentId`, and the DRM Proxy looks up the policy in a database.
-   **Pros:**
    -   **Efficiency:** Zero gas cost for policy changes.
    -   **Complexity:** Can support very detailed/dynamic policies that are hard to represent on-chain.
-   **Cons:**
    -   **Centralization:** The platform could change the "Terms of Service" after the purchase.
    -   **Trust:** Requires the user to trust the metadata server hasn't been tampered with.

### Recommendation for MVP
Use **On-Chain content association** (mapping `tokenId` to `contentId`) but keep **DRM policies off-chain** (defined in the Proxy) for the initial PoC to maximize flexibility.

---

## Proof of Concept (PoC) Scope

Since a real Widevine integration requires Google's CDM certificates, the PoC will focus on the **Authorization Handshake**:
1.  **Mock License Server:** Returns a "ClearKey" license if the NFT check passes.
2.  **Shaka Player Integration:** Demonstrates the `requestFilter` logic and header injection.
3.  **Blockchain Integration:** Live check of an ERC-721 balance on a local Hardhat node or Sepolia.
