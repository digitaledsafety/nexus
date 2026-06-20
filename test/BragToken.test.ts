import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes, encodeFunctionData } from "viem";

describe("BragToken Integration", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));

  async function deploySystem(initialSupply = 0n, maxSupply = parseEther("1000000000000")) {
    const [owner, donor] = await viem.getWalletClients();

    // Deploy contracts manually for the test to ensure clean state
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    // Deploy BragNFT via proxy
    const bragNFTLogic = await viem.deployContract("BragNFT");
    const nftInitData = encodeFunctionData({
        abi: bragNFTLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, treasury.address, 1n, priceFeed.address]
    });
    const nftProxy = await viem.deployContract("MockProxy", [bragNFTLogic.address, nftInitData]);
    const bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      initialSupply,
      maxSupply
    ]);

    // Setup relationships

    await bragNFT.write.setBragToken([bragToken.address]);

    // Authorize BragNFT to mint tokens
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

    return { owner, donor, bragNFT, bragToken, treasury };
  }

  it("Should pre-mint initial supply to the owner", async function () {
    const initialSupply = parseEther("100");
    const { owner, bragToken } = await deploySystem(initialSupply);

    const balance = await bragToken.read.balanceOf([owner.account.address]);
    assert.equal(balance, initialSupply);
  });

  it("Should mint BRAG tokens when a donation is made", async function () {
    const { donor, bragNFT, bragToken } = await deploySystem();

    const donationAmount = parseEther("1"); // 1 ETH ($2500)
    await bragNFT.write.donate(["praise be", "", false], {
      account: donor.account,
      value: donationAmount
    });

    const balance = await bragToken.read.balanceOf([donor.account.address]);
    // 1,000,000 BRAG per $1. $2500 * 1,000,000 = 2,500,000,000 BRAG
    assert.equal(balance, parseEther("2500000000"));
  });

  it("Should fail to mint beyond maxSupply", async function () {
    const maxSupply = parseEther("10000000"); // 10M BRAG
    const { donor, bragNFT } = await deploySystem(0n, maxSupply);

    // This should fail because it exceeds maxSupply ($2500 * 100,000 = 250M > 10M BRAG)
    await assert.rejects(
      bragNFT.write.donate(["too much", "", false], {
        account: donor.account,
        value: parseEther("1")
      }),
      /Exceeds maxSupply/
    );
  });

  it("Should allow voting delegation and track voting power", async function () {
    const { donor, bragNFT, bragToken } = await deploySystem();

    const donationAmount = parseEther("1"); // 1 ETH ($2500)
    await bragNFT.write.donate(["big donor", "", false], {
      account: donor.account,
      value: donationAmount
    });

    // Check initial voting power (should be 0 until delegated)
    let votes = await bragToken.read.getVotes([donor.account.address]);
    assert.equal(votes, 0n);

    // Delegate to self
    await bragToken.write.delegate([donor.account.address], { account: donor.account });

    // Check voting power now
    votes = await bragToken.read.getVotes([donor.account.address]);
    assert.equal(votes, parseEther("2500000000"));
  });

  it("Should fail if someone else tries to mint tokens directly", async function () {
    const { bragToken } = await deploySystem();
    const [_, __, attacker] = await viem.getWalletClients();

    // attacker doesn't have MINTER_ROLE
    await assert.rejects(
      bragToken.write.mint([attacker.account.address, 100n], { account: attacker.account }),
      /AccessControlUnauthorizedAccount/
    );
  });

  it("Should allow owner (admin) to grant MINTER_ROLE to another address", async function () {
    const { owner, bragToken } = await deploySystem();
    const [_, __, otherMinter] = await viem.getWalletClients();

    // Grant MINTER_ROLE
    await bragToken.write.grantRole([MINTER_ROLE, otherMinter.account.address], { account: owner.account });

    // otherMinter can now mint
    await bragToken.write.mint([otherMinter.account.address, 100n], { account: otherMinter.account });

    const balance = await bragToken.read.balanceOf([otherMinter.account.address]);
    assert.equal(balance, 100n);
  });
});
