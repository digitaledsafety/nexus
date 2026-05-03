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

## Technical Details

### UI Sub-packs
The resource pack uses the `subpacks` feature to offer configuration options.
*   **Default**: Shows the vanilla preview text.
*   **hidden**: Uses `hud_screen.json` with the `modifications` array to remove the `test_version_info` and `debug_info` controls from the HUD.

### Scripting API
The behavior pack uses `@minecraft/server` and `@minecraft/server-net` to:
*   Listen for `playerSpawn` events.
*   Trigger WebSocket/HTTP commands to the bridge.
*   Apply tags and handle chat commands (`!register`, `!my_nfts`, `!nexus`).

---

## Validation
To verify the integrity of the addon files, run the included test suite:
```bash
node --test test/MinecraftAddonValidation.test.ts
```
