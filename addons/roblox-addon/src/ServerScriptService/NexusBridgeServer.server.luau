--!strict
-- NexusBridgeServer.server.luau
-- Server-side script for managing Nexus NFT Bridge interactions in Roblox Studio

local HttpService = game:GetService("HttpService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local NexusBridgeConfig = require(ReplicatedStorage:WaitForChild("NexusBridgeConfig") :: ModuleScript)

-- Ensure RemoteEvents exist in ReplicatedStorage
local function getOrCreateRemoteEvent(eventName: string): RemoteEvent
    local event = ReplicatedStorage:FindFirstChild(eventName)
    if not event then
        event = Instance.new("RemoteEvent")
        event.Name = eventName
        event.Parent = ReplicatedStorage
    end
    return event :: RemoteEvent
end

local registerEvent = getOrCreateRemoteEvent(NexusBridgeConfig.REMOTE_EVENTS.REGISTER)
local myNftsEvent = getOrCreateRemoteEvent(NexusBridgeConfig.REMOTE_EVENTS.MY_NFTS)
local summonEvent = getOrCreateRemoteEvent(NexusBridgeConfig.REMOTE_EVENTS.SUMMON)
local notificationEvent = getOrCreateRemoteEvent(NexusBridgeConfig.REMOTE_EVENTS.NOTIFICATION)

-- Helper: Send notification message to player client
local function notifyPlayer(player: Player, title: string, message: string, isError: boolean?)
    notificationEvent:FireClient(player, {
        title = title,
        message = message,
        isError = isError or false
    })
end

-- Helper: HTTP GET request wrapper
local function httpGet(url: string)
    local success, response = pcall(function()
        return HttpService:GetAsync(url, true)
    end)
    if success then
        local decodeSuccess, data = pcall(function()
            return HttpService:JSONDecode(response)
        end)
        if decodeSuccess then
            return true, data
        end
        return false, "Failed to parse JSON response"
    end
    return false, response
end

-- Handle Registration Request
local function onRegisterRequest(player: Player)
    local platformId = "roblox:" .. tostring(player.UserId)
    local requestUrl = string.format("%s/?path=request-token&platformId=%s", NexusBridgeConfig.BRIDGE_URL, HttpService:UrlEncode(platformId))

    local success, data = httpGet(requestUrl)
    if success and data and data.registrationUrl then
        notifyPlayer(player, "Nexus Registration", string.format("Visit this link to link your wallet:\n%s\n(Valid for 10 minutes)", data.registrationUrl))
    else
        notifyPlayer(player, "Registration Error", "Failed to contact NFT bridge server. Ensure HttpService is enabled.", true)
    end
end

-- Handle My NFTs Query
local function onMyNFTsRequest(player: Player)
    local platformId = "roblox:" .. tostring(player.UserId)
    local requestUrl = string.format("%s/?path=check-ownership&uuid=%s&serverId=%s&playerName=%s",
        NexusBridgeConfig.BRIDGE_URL,
        HttpService:UrlEncode(platformId),
        HttpService:UrlEncode(NexusBridgeConfig.SERVER_ID),
        HttpService:UrlEncode(player.Name)
    )

    local success, data = httpGet(requestUrl)
    if not success or not data then
        notifyPlayer(player, "Vault Error", "Failed to retrieve NFT data from bridge.", true)
        return
    end

    if not data.isHolder or not data.nfts or #data.nfts == 0 then
        notifyPlayer(player, "My NFTs", "No exhibited NFTs found in your linked wallet for this server vault.")
        return
    end

    local nftSummary = string.format("Found %d NFT(s):\n", #data.nfts)
    for index, nft in ipairs(data.nfts) do
        local media = nft.animation_url or nft.image or "N/A"
        nftSummary = nftSummary .. string.format("- ID #%s (%s)\n  Media: %s\n", tostring(nft.tokenId), tostring(nft.location or "Vault"), tostring(media))
    end

    if data.linkedPlatforms and #data.linkedPlatforms > 1 then
        nftSummary = nftSummary .. string.format("\nLinked Platforms: %s", table.concat(data.linkedPlatforms, ", "))
    end

    notifyPlayer(player, "Your Vault NFTs", nftSummary)
end

-- Spawn a 3D NFT Pedestal Model at Player Position
local function spawn3DPedestal(player: Player, tokenId: string, mediaUrl: string)
    local character = player.Character
    if not character or not character:FindFirstChild("HumanoidRootPart") then
        notifyPlayer(player, "Summon Error", "Character root position not found.", true)
        return
    end

    local rootPart = character:FindFirstChild("HumanoidRootPart") :: BasePart
    local spawnCFrame = rootPart.CFrame * CFrame.new(0, 0, -5)

    -- Create Pedestal Model
    local model = Instance.new("Model")
    model.Name = "NexusNFT_Pedestal_" .. tokenId

    -- Base Part
    local basePart = Instance.new("Part")
    basePart.Name = "PedestalBase"
    basePart.Size = Vector3.new(4, 1, 4)
    basePart.CFrame = spawnCFrame
    basePart.Anchored = true
    basePart.Material = Enum.Material.SmoothPlastic
    basePart.Color = Color3.fromRGB(40, 40, 50)
    basePart.Parent = model

    -- Hologram Crystal Display
    local crystal = Instance.new("Part")
    crystal.Name = "DisplayCrystal"
    crystal.Size = Vector3.new(2, 2.5, 2)
    crystal.CFrame = spawnCFrame * CFrame.new(0, 2, 0)
    crystal.Anchored = true
    crystal.Material = Enum.Material.Neon
    crystal.Color = Color3.fromRGB(0, 200, 255)
    crystal.Transparency = 0.3
    crystal.Parent = model

    -- Point Light Effect
    local light = Instance.new("PointLight")
    light.Color = Color3.fromRGB(0, 200, 255)
    light.Range = 12
    light.Brightness = 3
    light.Parent = crystal

    -- SurfaceGui Display for NFT Info
    local surfaceGui = Instance.new("SurfaceGui")
    surfaceGui.Face = Enum.NormalId.Front
    surfaceGui.Parent = crystal

    local textLabel = Instance.new("TextLabel")
    textLabel.Size = UDim2.new(1, 0, 1, 0)
    textLabel.BackgroundTransparency = 1
    textLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
    textLabel.TextScaled = true
    textLabel.Text = string.format("Nexus NFT #%s\n%s", tokenId, player.Name)
    textLabel.Parent = surfaceGui

    model.PrimaryPart = basePart
    model.Parent = workspace

    notifyPlayer(player, "NFT Summoned!", string.format("Successfully summoned 3D display pedestal for NFT #%s!", tokenId))
end

-- Handle Summon Command
local function onSummonRequest(player: Player, targetId: string)
    local platformId = "roblox:" .. tostring(player.UserId)

    -- Check platform linking
    local checkUrl = string.format("%s/?path=check-platform&platformId=%s", NexusBridgeConfig.BRIDGE_URL, HttpService:UrlEncode(platformId))
    local platformSuccess, platformData = httpGet(checkUrl)

    if not platformSuccess or not platformData or not platformData.linked then
        notifyPlayer(player, "Summon Error", "You must link your wallet first using Register.", true)
        return
    end

    -- Check ownership in vault
    local ownerUrl = string.format("%s/?path=check-ownership&uuid=%s&serverId=%s&playerName=%s",
        NexusBridgeConfig.BRIDGE_URL,
        HttpService:UrlEncode(platformId),
        HttpService:UrlEncode(NexusBridgeConfig.SERVER_ID),
        HttpService:UrlEncode(player.Name)
    )

    local ownerSuccess, ownerData = httpGet(ownerUrl)
    if not ownerSuccess or not ownerData or not ownerData.isHolder or not ownerData.nfts or #ownerData.nfts == 0 then
        notifyPlayer(player, "Summon Error", "You do not have an active NFT in your linked wallet or server vault.", true)
        return
    end

    -- Find matching target NFT or default to first
    local cleanTarget = targetId and string.lower(string.gsub(targetId, "^#", "")) or ""
    local matchingNft = nil

    if cleanTarget ~= "" then
        for _, nft in ipairs(ownerData.nfts) do
            if string.lower(tostring(nft.tokenId)) == cleanTarget then
                matchingNft = nft
                break
            end
        end
    else
        matchingNft = ownerData.nfts[1]
    end

    if not matchingNft then
        notifyPlayer(player, "Summon Error", string.format("NFT target '%s' not found in your vault exhibition.", targetId), true)
        return
    end

    local mediaUrl = matchingNft.animation_url or matchingNft.image or "N/A"
    spawn3DPedestal(player, tostring(matchingNft.tokenId), mediaUrl)
end

-- Connect Remote Events
registerEvent.OnServerEvent:Connect(onRegisterRequest)
myNftsEvent.OnServerEvent:Connect(onMyNFTsRequest)
summonEvent.OnServerEvent:Connect(function(player: Player, targetId: string)
    onSummonRequest(player, targetId)
end)

print("[NexusBridge] Roblox Server Script initialized successfully.")
