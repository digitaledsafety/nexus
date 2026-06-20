import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress, encodeFunctionData } from "viem";

describe("AccessControl Security Tests", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
  const VERIFIER_ROLE = keccak256(toBytes("VERIFIER_ROLE"));
  const TREASURY_ROLE = keccak256(toBytes("TREASURY_ROLE"));
  const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";

  async function setup() {
    const [owner, attacker, other] = await viem.getWalletClients();

    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    // Deploy BragNFT via proxy
    const bragNFTLogic = await viem.deployContract("BragNFT");
    const nftInitData = encodeFunctionData({
        abi: bragNFTLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, treasury.address, parseEther("0.1"), priceFeed.address]
    });
    const nftProxy = await viem.deployContract("MockProxy", [bragNFTLogic.address, nftInitData]);
    const bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      0n,
      parseEther("1000")
    ]);

    return { owner, attacker, other, treasury, registry, bragNFT, bragToken };
  }

  describe("BragToken Access", () => {
    it("Should fail to mint without MINTER_ROLE", async function () {
      const { bragToken, attacker } = await setup();
      await assert.rejects(
        bragToken.write.mint([attacker.account.address, 100n], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("BragNFT Access", () => {
    it("Should fail to setTreasury without ADMIN_ROLE", async function () {
      const { bragNFT, attacker, other } = await setup();
      await assert.rejects(
        bragNFT.write.setTreasury([other.account.address], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to setMinimumDonation without ADMIN_ROLE", async function () {
      const { bragNFT, attacker } = await setup();
      await assert.rejects(
        bragNFT.write.setMinimumDonation([1n], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("ExhibitRegistry Access", () => {
    it("Should fail to verifyVault without VERIFIER_ROLE", async function () {
      const { registry, attacker, other } = await setup();
      await assert.rejects(
        registry.write.verifyVault([other.account.address, 0, "Fake", "Fake"], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("Should fail to removeVault without VERIFIER_ROLE", async function () {
      const { registry, attacker, other } = await setup();
      await assert.rejects(
        registry.write.removeVault([other.account.address], { account: attacker.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("Treasury Access", () => {
    it("Should fail to execute without being an owner", async function () {
      const { treasury, attacker, other } = await setup();
      await assert.rejects(
        treasury.write.execute([other.account.address, 0n, "0x", 0n], { account: attacker.account }),
        /NotOwner/
      );
    });
  });

  describe("Role Management", () => {
    it("Should allow ADMIN to grant and revoke roles", async function () {
      const { owner, other, bragToken } = await setup();

      // Grant MINTER_ROLE
      await bragToken.write.grantRole([MINTER_ROLE, other.account.address], { account: owner.account });
      assert.ok(await bragToken.read.hasRole([MINTER_ROLE, other.account.address]));

      // Mint works now
      await bragToken.write.mint([other.account.address, 50n], { account: other.account });

      // Revoke MINTER_ROLE
      await bragToken.write.revokeRole([MINTER_ROLE, other.account.address], { account: owner.account });
      assert.ok(!(await bragToken.read.hasRole([MINTER_ROLE, other.account.address])));

      // Mint fails again
      await assert.rejects(
        bragToken.write.mint([other.account.address, 50n], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });
});
