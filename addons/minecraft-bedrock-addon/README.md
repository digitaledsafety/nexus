# Minecraft Bedrock Add-on

This directory contains the Minecraft Bedrock Add-on for the Brag ecosystem. It includes behavior and resource packs that integrate blockchain-verified NFT ownership with in-game mechanics and provides UI enhancements.

## Features

### 1. NFT Integration (Behavior Pack)
*   **Wallet Linking**: Uses a Node.js bridge to link Xbox Live XUIDs with Ethereum wallet addresses.
*   **Ownership Verification**: Automatically checks for specific NFT holdings when a player joins the server.
*   **Dynamic Tagging**: Grants the `nft_holder` tag to verified players.
*   **Gameplay Impact**: Aggressive mobs (like the sample Cow) will ignore players with the `nft_holder` tag.

### 2. UI Enhancements (Resource Pack)
*   **Toggleable Preview Text**: Includes a sub-pack to hide the "Preview" version and debug information panel at the top of the screen.
*   **Custom Entity Assets**: Provides textures and sound variants for modified entities.

---

## Installation & Usage

### A. Manual Installation (Windows/Client)

1.  **Locate the com.mojang folder**:
    *   Press `Win+R` and paste: `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`
2.  **Install Packs**:
    *   Copy `development_behavior_packs/behavior_pack_sample` into the `development_behavior_packs` folder.
    *   Copy `development_resource_packs/resource_pack_sample` into the `development_resource_packs` folder.
3.  **Activate in Minecraft**:
    *   Launch Minecraft and create a new world.
    *   In the world settings, navigate to **Behavior Packs** and **Resource Packs** and activate "My Behavior Pack" and "My Resource Pack".
    *   **Toggle Debug Text**: To hide the preview text, click on the active "My Resource Pack" in settings, click the **Cog icon** (Sub-pack settings), and move the slider to "Hide Debug Text".
4.  **Enable Experiments**:
    *   Ensure **Beta APIs** is enabled in the world settings.

### B. Server Installation (BDS)

1.  **Install Packs**:
    *   Copy the packs into your server's `behavior_packs` and `resource_packs` directories.
    *   Register them in your world's `world_behavior_packs.json` and `world_resource_packs.json`.
2.  **Enable Scripting Permissions**:
    *   Ensure `@minecraft/server-net` is allowed in your server's `config/default/permissions.json`.
3.  **Start the Bridge**:
    *   Run the NFT bridge server (e.g., `node scripts/nft-bridge.js`) to allow the addon to communicate with the blockchain.

---

## Configuration Injection

The addon's main entry script (`development_behavior_packs/behavior_pack_sample/scripts/main.js`) contains placeholder constants that are dynamic and environment-specific:

```javascript
const RAW_WS_URL = "__WS_URL__";
const RAW_SERVER_ID = "__SERVER_ID__";
const RAW_NEXUS_ADDRESS = "__NEXUS_ADDRESS__";

const WS_URL = (!RAW_WS_URL || RAW_WS_URL.indexOf("__") !== -1) ? "localhost:9001" : RAW_WS_URL;
const SERVER_ID = (!RAW_SERVER_ID || RAW_SERVER_ID.indexOf("__") !== -1) ? "local-dev" : RAW_SERVER_ID;
const NEXUS_ADDRESS = (!RAW_NEXUS_ADDRESS || RAW_NEXUS_ADDRESS.indexOf("__") !== -1) ? "0x0000000000000000000000000000000000000000" : RAW_NEXUS_ADDRESS;
```

### How Configuration Injection & Runtime Fallbacks Work
1. **Source & Templates**: The static source files live in `addons/minecraft-bedrock-addon/`.
2. **Runtime Safety Net**: If the raw addon files are loaded directly into Minecraft without running the `prepareAddon()` build step (e.g. manual copy of `addons/minecraft-bedrock-addon/`), `main.js` automatically detects un-replaced `__...__` placeholders and falls back to safe runtime defaults (`localhost:9001`, `local-dev`, `0x0000000000000000000000000000000000000000`).
3. **`prepareAddon()` Pipeline**:
   - The orchestration script `scripts/env-manager.js` exports a `prepareAddon()` function.
   - It copies `addons/minecraft-bedrock-addon/` into a runtime directory at `temp_addon/`.
   - It resolves the values for the placeholders depending on the environment (`APP_ENV`):
     - **Local Environment (`APP_ENV=local` or unset)**:
       - `WS_URL`: Resolves from `process.env.WS_URL` or defaults to `localhost:9001` (WebSocket port of the local NFT bridge).
       - `SERVER_ID`: Resolves from `process.env.SERVER_ID` or defaults to `'local-dev'`.
       - `NEXUS_ADDRESS`: Reads `process.env.CONTRACT_ADDRESS_BRAGNFT` or local deployment address from `ignition/deployments/chain-31337/deployed_addresses.json` (`AppModule#BragNFT`), falling back to `0x0000000000000000000000000000000000000000`.
     - **Staging Environment (`APP_ENV=staging`)**:
       - `WS_URL`: Resolves from `process.env.STAGING_BRIDGE_URL`.
       - `SERVER_ID`: Resolves from `process.env.SERVER_ID` or defaults to `'local-dev'`.
       - `NEXUS_ADDRESS`: Resolves from `process.env.STAGING_BRAGNFT_ADDRESS`.
3. **In-place Substitution**: `prepareAddon()` replaces `__WS_URL__`, `__SERVER_ID__`, and `__NEXUS_ADDRESS__` in `temp_addon/.../scripts/main.js`.
4. **Server Manager Injection**:
   - Calling `/minecraft/inject` on the Environment Manager (or Bedrock Server Manager) copies `temp_addon` directly into the Minecraft Bedrock Dedicated Server's active `behavior_packs` and `resource_packs` directories.

---

## Getting the Addon Fully Working (Step-by-Step)

To get the Minecraft addon fully operational end-to-end, follow these steps:

### 1. Environment Initialization & Contract Deployment
Run the environment manager initialization:
```bash
npm run env:init
```
This command:
* Starts a local Hardhat node on port `8545`.
* Deploys the smart contracts (`BragNFT`, `NFTMarketplace`, `Treasury`).
* Exports ABIs and addresses to `frontend/contracts.js` and `ignition/deployments/chain-31337/`.
* Seeds initial test NFTs and marketplace listings.
* Calls `prepareAddon()` to generate `temp_addon/` with the active WebSocket server URL (`localhost:9001`), server ID (`local-dev`), and deployed contract address.
* Starts the Bedrock Server Manager and injects the prepared addon.

### 2. Run the NFT Bridge Server
The bridge listens for incoming WebSocket connections from Minecraft on port `9001` and provides an HTTP API on port `9000`:
```bash
npm run bridge
```
*(Note: `npm run env:init` or `npm run env:start` automatically runs the bridge service).*

### 3. Configure Server Permissions
Ensure the server grants net permissions to the script engine by editing `config/default/permissions.json` in your Bedrock server folder:
```json
{
    "allowed_modules": [
        "@minecraft/server",
        "@minecraft/server-net"
    ]
}
```

### 4. Enable Beta APIs / Experimental Features
In the Minecraft server or world settings, ensure **Beta APIs** is enabled. This is required for `@minecraft/server` v2.9.0 and custom commands.

### 5. Verify In-Game Commands
Once connected to the server, players can interact with the bridge using the custom commands registered by the addon:
* `/nexus:contract`: Displays the connected Nexus NFT smart contract address in chat.
* `/nexus:reconnect`: Forces a WebSocket reconnection and handshake between Minecraft and the NFT bridge server.
* `/nexus:register`: Generates an Xbox Live XUID registration link to link your Ethereum wallet.
* `/nexus:my_nfts`: Queries the bridge for the player's held NFTs and updates in-game tags (`nft_holder`).

---

## Technical Details

### UI Sub-packs
The resource pack uses the `subpacks` feature to offer configuration options.
*   **Default**: Shows the vanilla preview text.
*   **hidden**: Uses `hud_screen.json` with the `modifications` array to remove the `test_version_info` and `debug_info` controls from the HUD.

### Scripting API
The behavior pack uses `@minecraft/server` and `@minecraft/server-net` to:
*   Listen for `playerSpawn` events.
*   Trigger WebSocket/HTTP commands to the bridge.
*   Apply tags and handle custom commands (`/nexus:register`, `/nexus:my_nfts`, `/nexus:contract`, `/nexus:reconnect`).

---

## Validation
To verify the integrity of the addon files and configuration logic, run the included test suite:
```bash
node --test test/MinecraftAddonValidation.test.ts test/EnvManager.test.ts
```
