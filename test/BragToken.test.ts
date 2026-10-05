import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes } from "viem";

describe("BragToken Integration", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));

  async function deploySystem(initialSupply = 0n, maxSupply = parseEther("1000000000000")) {
    const [owner, donor] = await viem.getWalletClients();

    // Deploy contracts manually for the test to ensure clean state
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, 1n // 1 wei minimum
    , priceFeed.address]);
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
    await bragNFT.write.donate(["praise be", ""], {
      account: donor.account,
      value: donationAmount
    });

    const balance = await bragToken.read.balanceOf([donor.account.address]);
    // 1,000,000 BRAG per $1. $2500 * 1,000,000 = 2,500,000,000 BRAG
    assert.equal(balance, parseEther("2500000000"));
  });

  it("Should receive BRAG governance token and NFT after donations on homepage", async function () {
    const { donor, bragNFT, bragToken } = await deploySystem();

    // Verify initial balances
    const initialNftBalance = await bragNFT.read.balanceOf([donor.account.address]);
    const initialBragBalance = await bragToken.read.balanceOf([donor.account.address]);
    assert.equal(initialNftBalance, 0n);
    assert.equal(initialBragBalance, 0n);

    // Perform homepage donation: donate("Home Page Donation", "", false)
    const donationAmount = parseEther("0.1"); // 0.1 ETH ($250 at $2500/ETH rate)
    await bragNFT.write.donate(["Home Page Donation", "", false], {
      account: donor.account,
      value: donationAmount
    });

    // 1. Check NFT balance and ownership
    const finalNftBalance = await bragNFT.read.balanceOf([donor.account.address]);
    assert.equal(finalNftBalance, 1n);

    const tokenId = 0n; // first minted NFT
    const ownerOfNft = await bragNFT.read.ownerOf([tokenId]);
    assert.equal(ownerOfNft.toLowerCase(), donor.account.address.toLowerCase());

    // 2. Check PermanentRecord in taxRegistry for token message and details
    const record = await bragNFT.read.taxRegistry([tokenId]);
    assert.equal(record[0].toLowerCase(), donor.account.address.toLowerCase()); // originalDonor
    assert.equal(record[5], "Home Page Donation"); // message

    // 3. Check BRAG governance token balance
    // 0.1 ETH * $2500/ETH = $250 USD value
    // 1,000,000 BRAG per $1 USD = 250,000,000 BRAG tokens
    const finalBragBalance = await bragToken.read.balanceOf([donor.account.address]);
    assert.equal(finalBragBalance, parseEther("250000000"));
  });

  it("Should fail to mint beyond maxSupply", async function () {
    const maxSupply = parseEther("10000000"); // 10M BRAG
    const { donor, bragNFT } = await deploySystem(0n, maxSupply);

    // This should fail because it exceeds maxSupply ($2500 * 100,000 = 250M > 10M BRAG)
    await assert.rejects(
      bragNFT.write.donate(["too much", ""], {
        account: donor.account,
        value: parseEther("1")
      }),
      /Exceeds maxSupply/
    );
  });

  it("Should allow voting delegation and track voting power", async function () {
    const { donor, bragNFT, bragToken } = await deploySystem();

    const donationAmount = parseEther("1"); // 1 ETH ($2500)
    await bragNFT.write.donate(["big donor", ""], {
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
