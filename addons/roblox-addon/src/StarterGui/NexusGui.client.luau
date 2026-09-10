--!strict
-- NexusGui.luau
-- Constructs the in-game ScreenGui interface for Nexus NFT Bridge actions

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local NexusBridgeConfig = require(ReplicatedStorage:WaitForChild("NexusBridgeConfig") :: ModuleScript)

local LocalPlayer = Players.LocalPlayer
local PlayerGui = LocalPlayer:WaitForChild("PlayerGui")

local summonEvent = ReplicatedStorage:WaitForChild(NexusBridgeConfig.REMOTE_EVENTS.SUMMON) :: RemoteEvent

-- Create Main ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "NexusGui"
screenGui.ResetOnSpawn = false
screenGui.Parent = PlayerGui

-- Main UI Frame Container
local mainFrame = Instance.new("Frame")
mainFrame.Name = "MainFrame"
mainFrame.Size = UDim2.new(0, 240, 0, 150)
mainFrame.Position = UDim2.new(0, 20, 0.5, -75)
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

-- Target ID / Name Input Box
local targetInput = Instance.new("TextBox")
targetInput.Name = "TargetInput"
targetInput.Size = UDim2.new(0.9, 0, 0, 32)
targetInput.Position = UDim2.new(0.05, 0, 0, 46)
targetInput.BackgroundColor3 = Color3.fromRGB(36, 42, 54)
targetInput.TextColor3 = Color3.fromRGB(255, 255, 255)
targetInput.PlaceholderText = "Token ID (Leave blank to list)"
targetInput.Font = Enum.Font.SourceSans
targetInput.TextSize = 14
targetInput.Parent = mainFrame

local targetInputCorner = Instance.new("UICorner")
targetInputCorner.CornerRadius = UDim.new(0, 6)
targetInputCorner.Parent = targetInput

-- Summon Button
local summonBtn = Instance.new("TextButton")
summonBtn.Name = "SummonBtn"
summonBtn.Size = UDim2.new(0.9, 0, 0, 36)
summonBtn.Position = UDim2.new(0.05, 0, 0, 92)
summonBtn.BackgroundColor3 = Color3.fromRGB(160, 60, 220)
summonBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
summonBtn.Text = "Nexus: Summon / List NFTs"
summonBtn.Font = Enum.Font.SourceSansSemibold
summonBtn.TextSize = 14
summonBtn.Parent = mainFrame

local summonBtnCorner = Instance.new("UICorner")
summonBtnCorner.CornerRadius = UDim.new(0, 6)
summonBtnCorner.Parent = summonBtn

-- Event Handler
summonBtn.MouseButton1Click:Connect(function()
    summonEvent:FireServer(targetInput.Text)
end)

print("[NexusBridge] ScreenGui created successfully.")
