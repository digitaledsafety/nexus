import assert from "node:assert/strict";
import { describe, it, before, beforeEach } from "node:test";
import hre from "hardhat";
import {
  getAddress,
  parseEther,
  encodeFunctionData,
  keccak256,
  toHex,
  pad
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

describe("Treasury Multi-sig Smart Wallet", async function () {
  const { viem } = await hre.network.connect();
  let publicClient: any;
  let entryPoint: any;
  let treasury: any;
  let factory: any;
  let owner1: any;
  let owner2: any;
  let owner3: any;
  let nonOwner: any;

  before(async () => {
    publicClient = await viem.getPublicClient();
    const wallets = await viem.getWalletClients();
    owner1 = wallets[0];
    owner2 = wallets[1];
    owner3 = wallets[2];
    nonOwner = wallets[3];

    entryPoint = await viem.deployContract("MockEntryPoint", []);
    factory = await viem.deployContract("TreasuryFactory", []);
  });

  describe("Deployment", async () => {
    it("Should deploy a Treasury with multiple owners and threshold", async () => {
      const owners = [owner1.account.address, owner2.account.address];
      const threshold = 2n;
      const salt = keccak256(toHex("test-salt"));

      await factory.write.createTreasury([owners, threshold, entryPoint.address, salt]);
      const logs = await publicClient.getContractEvents({
        address: factory.address,
        abi: factory.abi,
        eventName: "TreasuryCreated",
      });

      const treasuryAddress = logs[0].args.treasury;
      treasury = await viem.getContractAt("Treasury", treasuryAddress);

      assert.equal(await treasury.read.threshold(), threshold);
      assert.ok(await treasury.read.isOwner([owner1.account.address]));
      assert.ok(await treasury.read.isOwner([owner2.account.address]));
      assert.ok(!(await treasury.read.isOwner([nonOwner.account.address])));
    });
  });

  describe("Multi-sig Flow (M-of-N)", async () => {
    beforeEach(async () => {
      const owners = [owner1.account.address, owner2.account.address, owner3.account.address];
      const threshold = 2n;
      const salt = keccak256(toHex(`salt-${Math.random()}`));
      await factory.write.createTreasury([owners, threshold, entryPoint.address, salt]);
      const logs = await publicClient.getContractEvents({ address: factory.address, abi: factory.abi, eventName: "TreasuryCreated" });
      treasury = await viem.getContractAt("Treasury", logs[logs.length - 1].args.treasury);

      await owner1.sendTransaction({
        to: treasury.address,
        value: parseEther("1"),
      });
    });

    it("Should allow an owner to propose a transaction", async () => {
      const target = nonOwner.account.address;
      const value = parseEther("0.1");
      const data = "0x";

      await treasury.write.propose([[target], [value], [data as Hex], 0n], { account: owner1.account });

      const proposal = await treasury.read.getProposal([0n]);
      assert.equal(proposal[0][0], getAddress(target));
      assert.equal(proposal[1][0], value);
      assert.equal(proposal[5], getAddress(owner1.account.address));
      assert.equal(proposal[6], 1n);
    });

    it("Should allow other owners to approve", async () => {
      await treasury.write.propose([[nonOwner.account.address], [parseEther("0.1")], ["0x" as Hex], 0n], { account: owner1.account });
      await treasury.write.approve([0n, 0n], { account: owner2.account });

      const proposal = await treasury.read.getProposal([0n]);
      assert.equal(proposal[6], 2n);
      assert.ok(await treasury.read.hasApproved([0n, owner2.account.address]));
    });

    it("Should execute when threshold is reached", async () => {
      const target = nonOwner.account.address;
      const value = parseEther("0.1");
      const initialBalance = await publicClient.getBalance({ address: target });

      await treasury.write.propose([[target], [value], ["0x" as Hex], 0n], { account: owner1.account });
      await treasury.write.approve([0n, 0n], { account: owner2.account });

      await treasury.write.executeProposal([0n]);

      const finalBalance = await publicClient.getBalance({ address: target });
      assert.equal(finalBalance - initialBalance, value);
    });
  });

  describe("Account Abstraction (EIP-4337)", async () => {
     it("Should validate and execute a UserOperation (1-of-1)", async () => {
        const pk = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
        const account = privateKeyToAccount(pk);

        const owners = [account.address];
        const threshold = 1n;
        const salt = keccak256(toHex("aa-test"));
        await factory.write.createTreasury([owners, threshold, entryPoint.address, salt]);
        const logs = await publicClient.getContractEvents({ address: factory.address, abi: factory.abi, eventName: "TreasuryCreated" });
        treasury = await viem.getContractAt("Treasury", logs[0].args.treasury);

        const target = nonOwner.account.address;
        const value = parseEther("0.05");
        await owner1.sendTransaction({ to: treasury.address, value: parseEther("1") });

        const nonce = 42n;
        const callData = encodeFunctionData({
            abi: treasury.abi,
            functionName: "execute",
            args: [target, value, "0x" as `0x${string}`, nonce]
        });

        const userOp = {
            sender: treasury.address,
            nonce: nonce,
            initCode: "0x" as `0x${string}`,
            callData,
            accountGasLimits: pad("0x", { size: 32 }),
            preVerificationGas: 0n,
            gasFees: pad("0x", { size: 32 }),
            paymasterAndData: "0x" as `0x${string}`,
            signature: "0x" as `0x${string}`
        };

        const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
        const signature = await account.signMessage({ message: { raw: userOpHash } });
        userOp.signature = signature;

        const initialBalance = await publicClient.getBalance({ address: target });

        await entryPoint.write.handleOps([[userOp], owner1.account.address]);

        const finalBalance = await publicClient.getBalance({ address: target });
        assert.equal(finalBalance - initialBalance, value);
     });
  });
});
