--!strict
-- NexusBridgeConfig.module.luau
-- Shared configuration module for Nexus NFT Bridge Roblox Addon

local NexusBridgeConfig = {}

-- Bridge HTTP Server Configuration
NexusBridgeConfig.BRIDGE_URL = "http://localhost:9000" -- Set to public/deployed NFT bridge URL in production
NexusBridgeConfig.SERVER_ID = "server-2"              -- Registered server ID in bridge-config.json
NexusBridgeConfig.REQUEST_TIMEOUT = 10                  -- Seconds before HTTP request timeout
NexusBridgeConfig.MAX_RETRIES = 3                       -- Maximum HTTP retry attempts

-- RemoteEvent Names
NexusBridgeConfig.REMOTE_EVENTS = {
    REGISTER = "NexusRegisterEvent",
    MY_NFTS = "NexusMyNFTsEvent",
    SUMMON = "NexusSummonEvent",
    NOTIFICATION = "NexusNotificationEvent"
}

return NexusBridgeConfig
