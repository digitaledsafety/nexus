import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("BragNFT .mcstructure Support", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury] = await viem.getWalletClients();
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500/ETH (8 decimals)

    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.01"),
        priceFeed.address
    ]);

    return { bragNFT, owner, donor };
  }

  it("Should recognize .mcstructure as multimedia", async function () {
    const { bragNFT, donor } = await deployContracts();
    const mcUrl = "https://example.com/building.mcstructure";
    const message = "Minecraft Castle";

    await bragNFT.write.donate([message, mcUrl], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

    // If _isMultimedia returns true, animation_url should be set and image should be SVG
    assert.equal(json.animation_url, mcUrl);
    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be an SVG data URI for multimedia");
  });

  it("Should recognize .mcstructure case-insensitively", async function () {
    const { bragNFT, donor } = await deployContracts();
    const mcUrl = "https://example.com/BUILDING.MCSTRUCTURE";

    await bragNFT.write.donate(["Caps test", mcUrl], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

    assert.equal(json.animation_url, mcUrl);
  });
});
