import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, keccak256, toBytes, encodeAbiParameters, parseAbiParameters, getAddress } from "viem";

describe("Batch Extensions & Admin Updates", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, donor, recipient1, recipient2, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("10000000"), // 10M initial supply
      parseEther("10000000000") // 10B max supply
    ]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2,500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    // Grant MINTER_ROLE on bragToken to bragNFT
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Gallery Vault", "Test Vault"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryContract = await viem.deployContract("Treasury", [
      [owner.account.address, donor.account.address],
      2n,
      mockEntryPoint.address
    ]);

    return {
      bragToken,
      priceFeed,
      bragNFT,
      registry,
      vault,
      mock1155,
      treasuryContract,
      owner,
      donor,
      recipient1,
      recipient2,
      treasury
    };
  }

  describe("BragNFT Batch Operations", function () {
    it("batchDonate: should mint multiple NFTs and handle ETH dust distribution", async function () {
      const { bragNFT, donor, treasury, bragToken } = await deployAll();

      const totalDonation = parseEther("0.300000000000000005"); // Has dust remainder
      const messages = ["Batch Don 1", "Batch Don 2", "Batch Don 3"];
      const tokenURIs = ["https://example.com/1", "https://example.com/2", "https://example.com/3"];

      const publicClient = await viem.getPublicClient();
      const initialTreasuryBal = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.batchDonate([messages, tokenURIs], {
        account: donor.account,
        value: totalDonation
      });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(donor.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(donor.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([2n])), getAddress(donor.account.address));

      const rec0 = await bragNFT.read.taxRegistry([0n]);
      const rec2 = await bragNFT.read.taxRegistry([2n]);

      // rec2 gets remainder
      const ethAmount0 = Array.isArray(rec0) ? rec0[2] : (rec0 as any).ethAmount;
      const ethAmount2 = Array.isArray(rec2) ? rec2[2] : (rec2 as any).ethAmount;

      const expectedPerNft = totalDonation / 3n;
      const expectedRemainder = totalDonation % 3n;

      assert.equal(ethAmount0, expectedPerNft);
      assert.equal(ethAmount2, expectedPerNft + expectedRemainder);

      const finalTreasuryBal = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBal - initialTreasuryBal, totalDonation);

      // Donor receives BRAG tokens ($250 USD per 0.1 ETH => 250,000,000 BRAG tokens * 3)
      const donorBrag = await bragToken.read.balanceOf([donor.account.address]);
      assert.ok(donorBrag > 0n);
    });

    it("batchDonateTo: should mint multiple NFTs to specific recipients", async function () {
      const { bragNFT, donor, recipient1, recipient2 } = await deployAll();

      const recipients = [recipient1.account.address, recipient2.account.address];
      const messages = ["Gift 1", "Gift 2"];
      const medias = ["media1.png", "media2.png"];
      const onChains = [false, true];

      await bragNFT.write.batchDonateTo([recipients, messages, medias, onChains], {
        account: donor.account,
        value: parseEther("0.2")
      });

      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(recipient1.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(recipient2.account.address));

      assert.equal(await bragNFT.read.onChainMedia([1n]), "media2.png");
    });

    it("batchTopUp: should top up multiple NFTs with ETH", async function () {
      const { bragNFT, donor } = await deployAll();

      await bragNFT.write.donate(["Donation 1", "uri1"], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["Donation 2", "uri2"], { account: donor.account, value: parseEther("0.1") });

      const prevGlow0 = await bragNFT.read.glowExpiry([0n]);
      const prevGlow1 = await bragNFT.read.glowExpiry([1n]);

      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: donor.account,
        value: parseEther("0.001") // ~$2.50 USD each at $2,500/ETH
      });

      const newGlow0 = await bragNFT.read.glowExpiry([0n]);
      const newGlow1 = await bragNFT.read.glowExpiry([1n]);

      assert.equal(newGlow0, prevGlow0 + 30n * 86400n);
      assert.equal(newGlow1, prevGlow1 + 30n * 86400n);
    });

    it("batchTopUpWithBrag: should top up multiple NFTs with BRAG tokens", async function () {
      const { bragNFT, donor, bragToken, owner, treasury } = await deployAll();

      await bragNFT.write.donate(["D1", "uri1"], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["D2", "uri2"], { account: donor.account, value: parseEther("0.1") });

      // Transfer BRAG tokens to donor
      const totalBragRequired = parseEther("2000000"); // 1M per NFT * 2
      await bragToken.write.transfer([donor.account.address, totalBragRequired], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, totalBragRequired], { account: donor.account });

      const prevGlow0 = await bragNFT.read.glowExpiry([0n]);
      const prevTreasuryBrag = await bragToken.read.balanceOf([treasury.account.address]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: donor.account });

      const newGlow0 = await bragNFT.read.glowExpiry([0n]);
      const newTreasuryBrag = await bragToken.read.balanceOf([treasury.account.address]);

      assert.equal(newGlow0, prevGlow0 + 30n * 86400n);
      assert.equal(newTreasuryBrag - prevTreasuryBrag, totalBragRequired);
    });

    it("updateUsdValue: should allow admin to correct USD tax record", async function () {
      const { bragNFT, donor, owner, recipient1 } = await deployAll();

      await bragNFT.write.donate(["D1", "uri1"], { account: donor.account, value: parseEther("0.1") });

      const recBefore = await bragNFT.read.taxRegistry([0n]);
      const usdValueBefore = Array.isArray(recBefore) ? recBefore[1] : (recBefore as any).usdValue;
      assert.ok(usdValueBefore > 0n);

      // Admin updates record
      const newUsdVal = 300000000n; // $300.00
      await bragNFT.write.updateUsdValue([0n, newUsdVal], { account: owner.account });

      const recAfter = await bragNFT.read.taxRegistry([0n]);
      const usdValueAfter = Array.isArray(recAfter) ? recAfter[1] : (recAfter as any).usdValue;
      assert.equal(usdValueAfter, newUsdVal);

      // Non-admin should fail
      await assert.rejects(async () => {
        await bragNFT.write.updateUsdValue([0n, 500000000n], { account: recipient1.account });
      });
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("batchExtendExhibition721: should extend duration for multiple ERC721 tokens", async function () {
      const { bragNFT, vault, donor } = await deployAll();

      await bragNFT.write.donate(["D1", "uri1"], { account: donor.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["D2", "uri2"], { account: donor.account, value: parseEther("0.1") });

      // Deposit into vault with 100s duration (32 bytes)
      const data = encodeAbiParameters(parseAbiParameters("uint256"), [100n]);
      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 0n, data], { account: donor.account });
      await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, 1n, data], { account: donor.account });

      const exp0Before = await vault.read.expiry721([bragNFT.address, 0n]);

      // Batch extend by 500 seconds
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 500n], { account: donor.account });

      const exp0After = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp1After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(exp0After, exp0Before + 500n);
      assert.ok(exp1After > 0n);
    });

    it("batchExtendExhibition1155: should extend duration for multiple ERC1155 tokens", async function () {
      const { mock1155, vault, owner, donor } = await deployAll();

      await mock1155.write.mint([donor.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([donor.account.address, 2n, 20n], { account: owner.account });

      const data = encodeAbiParameters(parseAbiParameters("uint256"), [100n]);
      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 1n, 5n, data], { account: donor.account });
      await mock1155.write.safeTransferFrom([donor.account.address, vault.address, 2n, 10n, data], { account: donor.account });

      const exp1Before = await vault.read.expiry1155([mock1155.address, 1n, donor.account.address]);

      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 1000n], { account: donor.account });

      const exp1After = await vault.read.expiry1155([mock1155.address, 1n, donor.account.address]);
      assert.equal(exp1After, exp1Before + 1000n);
    });
  });

  describe("Treasury Batch Operations", function () {
    it("batchApprove: should batch approve proposals", async function () {
      const { treasuryContract, owner, donor, recipient1 } = await deployAll();

      // Owner creates 2 proposals
      await treasuryContract.write.propose([[recipient1.account.address], [parseEther("0.1")], ["0x"], 1n], { account: owner.account });
      await treasuryContract.write.propose([[recipient1.account.address], [parseEther("0.2")], ["0x"], 2n], { account: owner.account });

      // Second owner batch approves proposals 0 and 1
      await treasuryContract.write.batchApprove([[0n, 1n], 3n], { account: donor.account });

      assert.equal(await treasuryContract.read.hasApproved([0n, donor.account.address]), true);
      assert.equal(await treasuryContract.read.hasApproved([1n, donor.account.address]), true);

      const prop0 = await treasuryContract.read.getProposal([0n]);
      assert.equal(prop0[6], 2n); // approvalCount is 2 (threshold met)
    });

    it("batchCancel: should batch cancel proposals", async function () {
      const { treasuryContract, owner, recipient1 } = await deployAll();

      await treasuryContract.write.propose([[recipient1.account.address], [parseEther("0.1")], ["0x"], 1n], { account: owner.account });
      await treasuryContract.write.propose([[recipient1.account.address], [parseEther("0.2")], ["0x"], 2n], { account: owner.account });

      // Proposer batch cancels proposals 0 and 1
      await treasuryContract.write.batchCancel([[0n, 1n], 3n], { account: owner.account });

      const prop0 = await treasuryContract.read.getProposal([0n]);
      const prop1 = await treasuryContract.read.getProposal([1n]);

      assert.equal(prop0[4], true); // canceled
      assert.equal(prop1[4], true); // canceled
    });
  });
});
