--!strict
-- NexusBridgeClient.client.luau
-- Client-side controller for handling UI interactions and bridge communications in Roblox

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local NexusBridgeConfig = require(ReplicatedStorage:WaitForChild("NexusBridgeConfig") :: ModuleScript)

local LocalPlayer = Players.LocalPlayer

local registerEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.REGISTER) :: RemoteEvent
local myNftsEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.MY_NFTS) :: RemoteEvent
local summonEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.SUMMON) :: RemoteEvent
local notificationEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.NOTIFICATION) :: RemoteEvent

-- Display notification in Roblox UI or Chat
notificationEvent.OnClientEvent:Connect(function(data: { title: string, message: string, isError: boolean? })
    local title = data.title or "Nexus NFT Bridge"
    local message = data.message or ""

    -- Output to Local Developer Console / Chat
    if data.isError then
        warn(string.format("[%s] ERROR: %s", title, message))
    else
        print(string.format("[%s]: %s", title, message))
    end

    -- Trigger Roblox StarterGui Notification System
    pcall(function()
        game:GetService("StarterGui"):SetCore("SendNotification", {
            Title = title,
            Text = string.sub(message, 1, 150),
            Duration = 8
        })
    end)
end)

print("[NexusBridge] Client Controller initialized for " .. LocalPlayer.Name)
