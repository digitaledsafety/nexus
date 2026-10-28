import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress, keccak256, toBytes } from "viem";

describe("Batch Extensions Operations Test Suite", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, user1, user2, user3] = await viem.getWalletClients();

    // Deploy MockPriceFeed (1 ETH = $2500 USD)
    const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    // Deploy Treasury Multi-sig
    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address, user2.account.address],
      2n,
      mockEntryPoint.address,
    ]);

    // Deploy BragToken
    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("10000000"),
      parseEther("1000000000"),
    ]);

    // Deploy BragNFT
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.address,
      parseEther("0.01"),
      mockPriceFeed.address,
    ]);

    // Grant MINTER_ROLE on BragToken to BragNFT
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });

    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    // Deploy ExhibitRegistry and ExhibitVault
    const exhibitRegistry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const exhibitVault = await viem.deployContract("ExhibitVault", [owner.account.address, exhibitRegistry.address]);
    await exhibitRegistry.write.verifyVault([exhibitVault.address, 0, "Vault 1", "Desc 1"], { account: owner.account });

    // Deploy Mock ERC1155
    const mock1155 = await viem.deployContract("MockERC1155");

    return {
      owner,
      user1,
      user2,
      user3,
      treasury,
      bragToken,
      bragNFT,
      exhibitRegistry,
      exhibitVault,
      mock1155,
    };
  }

  describe("BragNFT Batch Operations", function () {
    it("should batch donate ETH and mint multiple BragNFTs", async function () {
      const { bragNFT, user1 } = await deployFixture();

      const messages = ["Cause 1", "Cause 2", "Cause 3"];
      const uris = ["https://uri1", "https://uri2", "https://uri3"];
      const donationValue = parseEther("0.1"); // Total for 3 NFTs

      await bragNFT.write.batchDonate([messages, uris], {
        account: user1.account,
        value: donationValue,
      });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));
    });

    it("should batch donate ETH to recipient addresses", async function () {
      const { bragNFT, user1, user2, user3 } = await deployFixture();

      const recipients = [user1.account.address, user2.account.address, user3.account.address];
      const messages = ["To User1", "To User2", "To User3"];
      const uris = ["https://uri1", "https://uri2", "https://uri3"];

      await bragNFT.write.batchDonateTo([recipients, messages, uris], {
        account: user1.account,
        value: parseEther("0.15"),
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user3.account.address));
    });

    it("should batch top up collectibles with ETH", async function () {
      const { bragNFT, user1 } = await deployFixture();

      // Donate first to get 2 NFTs
      await bragNFT.write.batchDonate([["N1", "N2"], ["https://u1", "https://u2"]], {
        account: user1.account,
        value: parseEther("0.1"),
      });

      const initialExpiry0 = await bragNFT.read.glowExpiry([0n]);
      const initialExpiry1 = await bragNFT.read.glowExpiry([1n]);

      // Top up both NFTs
      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: user1.account,
        value: parseEther("0.02"), // $50 USD total, well over $1 each
      });

      const updatedExpiry0 = await bragNFT.read.glowExpiry([0n]);
      const updatedExpiry1 = await bragNFT.read.glowExpiry([1n]);

      assert.equal(updatedExpiry0, initialExpiry0 + 30n * 86400n);
      assert.equal(updatedExpiry1, initialExpiry1 + 30n * 86400n);
    });

    it("should batch top up collectibles with BRAG tokens", async function () {
      const { bragNFT, bragToken, owner, user1 } = await deployFixture();

      // Mint NFTs
      await bragNFT.write.batchDonate([["N1", "N2"], ["https://u1", "https://u2"]], {
        account: user1.account,
        value: parseEther("0.1"),
      });

      // Transfer BRAG tokens to user1 and approve BragNFT
      const topUpCost = parseEther("2000000"); // 1,000,000 per NFT * 2
      await bragToken.write.transfer([user1.account.address, topUpCost], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, topUpCost], { account: user1.account });

      const initialExpiry0 = await bragNFT.read.glowExpiry([0n]);
      const initialExpiry1 = await bragNFT.read.glowExpiry([1n]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      assert.equal(await bragNFT.read.glowExpiry([0n]), initialExpiry0 + 30n * 86400n);
      assert.equal(await bragNFT.read.glowExpiry([1n]), initialExpiry1 + 30n * 86400n);
    });
  });

  describe("ExhibitVault Batch Extensions Operations", function () {
    it("should batch extend exhibition duration for ERC721 tokens", async function () {
      const { bragNFT, exhibitVault, user1 } = await deployFixture();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate([["NFT 0", "NFT 1"], ["uri0", "uri1"]], {
        account: user1.account,
        value: parseEther("0.1"),
      });

      // Exhibit NFTs with duration 1000s
      await bragNFT.write.approve([exhibitVault.address, 0n], { account: user1.account });
      await bragNFT.write.approve([exhibitVault.address, 1n], { account: user1.account });

      await exhibitVault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 1000n], {
        account: user1.account,
      });

      const initialExpiry0 = await exhibitVault.read.expiry721([bragNFT.address, 0n]);

      // Batch extend by 5000s
      await exhibitVault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 5000n], {
        account: user1.account,
      });

      const updatedExpiry0 = await exhibitVault.read.expiry721([bragNFT.address, 0n]);
      assert.equal(updatedExpiry0, initialExpiry0 + 5000n);
    });

    it("should batch extend exhibition duration for ERC1155 tokens", async function () {
      const { mock1155, exhibitVault, user1, owner } = await deployFixture();

      await mock1155.write.mint([user1.account.address, 1n, 100n], { account: owner.account });
      await mock1155.write.mint([user1.account.address, 2n, 100n], { account: owner.account });

      await mock1155.write.setApprovalForAll([exhibitVault.address, true], { account: user1.account });

      await exhibitVault.write.batchExhibit1155([[mock1155.address, mock1155.address], [1n, 2n], [10n, 20n], 1000n], {
        account: user1.account,
      });

      const initialExpiry = await exhibitVault.read.expiry1155([mock1155.address, 1n, user1.account.address]);

      await exhibitVault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 2000n], {
        account: user1.account,
      });

      const updatedExpiry = await exhibitVault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      assert.equal(updatedExpiry, initialExpiry + 2000n);
    });
  });

  describe("Treasury Batch Operations", function () {
    it("should batch approve proposals", async function () {
      const { treasury, owner, user1, user2 } = await deployFixture();

      // Create 2 proposals from owner
      await treasury.write.propose([[user2.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasury.write.propose([[user2.account.address], [0n], ["0x"], 0n], { account: owner.account });

      // user1 batch approves proposals 0 and 1
      await treasury.write.batchApprove([[0n, 1n], 0n], { account: user1.account });

      assert.equal(await treasury.read.hasApproved([0n, user1.account.address]), true);
      assert.equal(await treasury.read.hasApproved([1n, user1.account.address]), true);

      // Both proposals now have 2 approvals (owner + user1) and can be executed
      await treasury.write.executeProposal([0n]);
      await treasury.write.executeProposal([1n]);

      const proposal0 = await treasury.read.proposals([0n]);
      const proposal1 = await treasury.read.proposals([1n]);

      assert.equal(proposal0[0], true); // executed is 1st field in mapping getter tuple
      assert.equal(proposal1[0], true); // executed is 1st field in mapping getter tuple
    });

    it("should batch cancel proposals", async function () {
      const { treasury, owner } = await deployFixture();

      await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });
      await treasury.write.propose([[owner.account.address], [0n], ["0x"], 0n], { account: owner.account });

      await treasury.write.batchCancel([[0n, 1n], 0n], { account: owner.account });

      const proposal0 = await treasury.read.proposals([0n]);
      const proposal1 = await treasury.read.proposals([1n]);

      assert.equal(proposal0[1], true); // canceled is 2nd field in mapping getter tuple
      assert.equal(proposal1[1], true); // canceled is 2nd field in mapping getter tuple
    });
  });
});
