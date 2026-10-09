# Nexus NFT Bridge - Roblox Addon

The **Nexus NFT Bridge Roblox Addon** mirrors the Minecraft Bedrock Addon functionality by enabling Roblox experiences to integrate with the Brag Charity NFT ecosystem. It allows players to link their Ethereum Web3 wallet to their Roblox account (`roblox:<UserId>`), view exhibited NFTs in server vaults, and summon interactive 3D NFT pedestals at their character's position in-game.

---

## Features

- **Wallet Registration (`/request-token`)**: Generates single-use registration tokens for player authentication via SIWE (Sign-In With Ethereum) on the web portal.
- **Vault NFT Inspection (`/check-ownership`)**: Queries active exhibited NFTs deposited in the server's `ExhibitVault`.
- **In-Game 3D Summoning**: Spawns a glowing 3D holographic display pedestal displaying the NFT's token ID and metadata directly in front of the player's character (`HumanoidRootPart.CFrame`).
- **Multi-Platform & Cross-Platform Identity Tracking**: Works seamlessly alongside Minecraft Bedrock, Digital Education Safety Engine, and arbitrary $N$ platforms linked to the same wallet address.

---

## Installation & Setup Instructions

### Prerequisites

1. **Roblox Studio** installed on your development machine.
2. An active instance of `nft-bridge.js` running (default: `http://localhost:9000`).
3. **HTTP Requests Enabled** in your Roblox Studio experience.

---

### Step 1: Enable HttpService in Roblox Studio

By default, Roblox Studio blocks outbound HTTP requests. You must enable `HttpService`:

1. Open your game place in **Roblox Studio**.
2. Go to **Home** > **Game Settings**.
3. Under **Security**, toggle **Allow HTTP Requests** to **ON**.
4. Click **Save**.

*Alternatively, execute this line in the Command Bar in Studio:*
```lua
game:GetService("HttpService").HttpEnabled = true
```

---

### Step 2: Import Addon Files into Roblox Studio

You can import the addon into your Roblox Studio project manually or using **Rojo**.

#### Option A: Manual Installation (Drag & Drop / Copy-Paste)

Copy the files from `addons/roblox-addon/src/` into the corresponding Studio Explorer services:

1. **`ReplicatedStorage/NexusBridgeConfig.module.luau`**
   - Move into `game.ReplicatedStorage`.
   - Rename instance to `NexusBridgeConfig`.

2. **`ServerScriptService/NexusBridgeServer.server.luau`**
   - Move into `game.ServerScriptService`.
   - Rename instance to `NexusBridgeServer`.

3. **`StarterPlayer/StarterPlayerScripts/NexusBridgeClient.client.luau`**
   - Move into `game.StarterPlayer.StarterPlayerScripts`.
   - Rename instance to `NexusBridgeClient`.

4. **`StarterGui/NexusGui.client.luau`**
   - Move into `game.StarterGui`.
   - Rename instance to `NexusGui`.

#### Option B: Rojo Synchronization

If using [Rojo](https://rojo.space/):

1. Place `default.project.json` in `addons/roblox-addon/` mapping `src` to Studio services.
2. Run `rojo serve` inside `addons/roblox-addon/`.
3. Connect via the Rojo plugin in Roblox Studio.

---

### Step 3: Configure Bridge Server Connection

Open `ReplicatedStorage/NexusBridgeConfig.module.luau` and configure the target bridge URL and server ID:

```lua
local NexusBridgeConfig = {}

-- Set to your public/production bridge server or local dev URL
NexusBridgeConfig.BRIDGE_URL = "http://localhost:9000"
NexusBridgeConfig.SERVER_ID = "server-2" -- Must match server ID in bridge-config.json

return NexusBridgeConfig
```

---

## Usage Guide for Players

1. **Registering Your Wallet**:
   - Click the **"Nexus: Register Wallet"** button on the UI.
   - A registration URL with a valid 10-minute token will be sent to your client.
   - Open the link in a browser, sign the SIWE message using your EVM wallet (MetaMask / WalletConnect).

2. **Viewing Vault NFTs**:
   - Click **"Nexus: My Vault NFTs"**.
   - View your exhibited NFTs, token IDs, and media URIs.

3. **Summoning an NFT Pedestal**:
   - Enter a target Token ID (optional, or leave blank for default).
   - Click **"Nexus: Summon NFT Pedestal"**.
   - A 3D holographic display pedestal will spawn at your character's position!

---

## Multi-Platform / Cross-Game Identity

When a user links their EVM wallet, `nft-bridge.js` tracks all platform IDs (e.g. `xuid-...` for Bedrock and `roblox:<UserId>` for Roblox) associated with that address. Querying platform status returns all `linkedPlatforms` to identify players across multiple game clients.
