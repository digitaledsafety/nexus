--!strict
-- NexusGui.luau
-- Constructs the in-game ScreenGui interface for Nexus NFT Bridge actions

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local NexusBridgeConfig = require(ReplicatedStorage:WaitForChild("NexusBridgeConfig") :: ModuleScript)

local LocalPlayer = Players.LocalPlayer
local PlayerGui = LocalPlayer:WaitForChild("PlayerGui")

local registerEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.REGISTER) :: RemoteEvent
local myNftsEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.MY_NFTS) :: RemoteEvent
local summonEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.SUMMON) :: RemoteEvent

-- Create Main ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "NexusGui"
screenGui.ResetOnSpawn = false
screenGui.Parent = PlayerGui

-- Main UI Frame Container
local mainFrame = Instance.new("Frame")
mainFrame.Name = "MainFrame"
mainFrame.Size = UDim2.new(0, 240, 0, 220)
mainFrame.Position = UDim2.new(0, 20, 0.5, -110)
mainFrame.BackgroundColor3 = Color3.fromRGB(24, 28, 36)
mainFrame.BorderSizePixel = 0
mainFrame.Parent = screenGui

local uiCorner = Instance.new("UICorner")
uiCorner.CornerRadius = UDim.new(0, 8)
uiCorner.Parent = mainFrame

-- Title Header Label
local titleLabel = Instance.new("TextLabel")
titleLabel.Name = "TitleLabel"
titleLabel.Size = UDim2.new(1, 0, 0, 36)
titleLabel.Position = UDim2.new(0, 0, 0, 0)
titleLabel.BackgroundTransparency = 1
titleLabel.Text = "Nexus NFT Bridge"
titleLabel.TextColor3 = Color3.fromRGB(0, 200, 255)
titleLabel.Font = Enum.Font.SourceSansBold
titleLabel.TextSize = 18
titleLabel.Parent = mainFrame

-- Register Button
local registerBtn = Instance.new("TextButton")
registerBtn.Name = "RegisterBtn"
registerBtn.Size = UDim2.new(0.9, 0, 0, 32)
registerBtn.Position = UDim2.new(0.05, 0, 0, 42)
registerBtn.BackgroundColor3 = Color3.fromRGB(40, 120, 240)
registerBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
registerBtn.Text = "Nexus: Register Wallet"
registerBtn.Font = Enum.Font.SourceSansSemibold
registerBtn.TextSize = 14
registerBtn.Parent = mainFrame

local registerBtnCorner = Instance.new("UICorner")
registerBtnCorner.CornerRadius = UDim.new(0, 6)
registerBtnCorner.Parent = registerBtn

-- My NFTs Button
local myNftsBtn = Instance.new("TextButton")
myNftsBtn.Name = "MyNftsBtn"
myNftsBtn.Size = UDim2.new(0.9, 0, 0, 32)
myNftsBtn.Position = UDim2.new(0.05, 0, 0, 82)
myNftsBtn.BackgroundColor3 = Color3.fromRGB(50, 160, 90)
myNftsBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
myNftsBtn.Text = "Nexus: My Vault NFTs"
myNftsBtn.Font = Enum.Font.SourceSansSemibold
myNftsBtn.TextSize = 14
myNftsBtn.Parent = mainFrame

local myNftsBtnCorner = Instance.new("UICorner")
myNftsBtnCorner.CornerRadius = UDim.new(0, 6)
myNftsBtnCorner.Parent = myNftsBtn

-- Target ID / Name Input Box
local targetInput = Instance.new("TextBox")
targetInput.Name = "TargetInput"
targetInput.Size = UDim2.new(0.9, 0, 0, 28)
targetInput.Position = UDim2.new(0.05, 0, 0, 124)
targetInput.BackgroundColor3 = Color3.fromRGB(36, 42, 54)
targetInput.TextColor3 = Color3.fromRGB(255, 255, 255)
targetInput.PlaceholderText = "Target Token ID (Optional)"
targetInput.Font = Enum.Font.SourceSans
targetInput.TextSize = 14
targetInput.Parent = mainFrame

local targetInputCorner = Instance.new("UICorner")
targetInputCorner.CornerRadius = UDim.new(0, 6)
targetInputCorner.Parent = targetInput

-- Summon Button
local summonBtn = Instance.new("TextButton")
summonBtn.Name = "SummonBtn"
summonBtn.Size = UDim2.new(0.9, 0, 0, 32)
summonBtn.Position = UDim2.new(0.05, 0, 0, 160)
summonBtn.BackgroundColor3 = Color3.fromRGB(160, 60, 220)
summonBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
summonBtn.Text = "Nexus: Summon NFT Pedestal"
summonBtn.Font = Enum.Font.SourceSansSemibold
summonBtn.TextSize = 14
summonBtn.Parent = mainFrame

local summonBtnCorner = Instance.new("UICorner")
summonBtnCorner.CornerRadius = UDim.new(0, 6)
summonBtnCorner.Parent = summonBtn

-- Event Handlers
registerBtn.MouseButton1Click:Connect(function()
    registerEvent:FireServer()
end)

myNftsBtn.MouseButton1Click:Connect(function()
    myNftsEvent:FireServer()
end)

summonBtn.MouseButton1Click:Connect(function()
    summonEvent:FireServer(targetInput.Text)
end)

print("[NexusBridge] ScreenGui created successfully.")
