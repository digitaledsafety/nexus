import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress, keccak256, toBytes } from "viem";

describe("Batch Extensions and Administrative Updates", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, user1, user2, treasuryWallet] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    // Deploy BRAG Token with 10B maxSupply to support dynamic donation minting
    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("10000000"),
      parseEther("10000000000")
    ]);

    // Mock Price Feed: $2500 per ETH (8 decimals: 2500 * 1e8 = 250000000000)
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasuryWallet.account.address,
      parseEther("0.1"),
      priceFeed.address
    ]);

    // Grant MINTER_ROLE on BragToken to BragNFT
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    // Deploy Exhibit Vault setup
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Gallery"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    // Deploy Multi-sig Treasury
    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const multiSigTreasury = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address],
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
      multiSigTreasury,
      publicClient,
      owner,
      user1,
      user2,
      treasuryWallet
    };
  }

  describe("BragNFT Batch Operations & Admin Updates", function () {
    it("Should batch donate and distribute ETH dust to final NFT", async function () {
      const { bragNFT, publicClient, user1, treasuryWallet } = await deployFixture();

      const initialTreasuryBalance = await publicClient.getBalance({
        address: treasuryWallet.account.address
      });

      // Send 0.300000000000000007 ETH for 3 NFTs
      const totalValue = parseEther("0.3") + 7n;
      const messages = ["Msg 1", "Msg 2", "Msg 3"];
      const uris = ["uri1", "uri2", "uri3"];

      await bragNFT.write.batchDonate([messages, uris], {
        account: user1.account,
        value: totalValue
      });

      assert.equal(await bragNFT.read.totalSupply(), 3n);
      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(user1.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(user1.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([2n])), getAddress(user1.account.address));

      // Check dust distribution: item 0 and 1 get baseEth (100000000000000002 wei), item 2 gets baseEth + 1 wei remainder (100000000000000003 wei)
      const [, , ethAmount0] = await bragNFT.read.taxRegistry([0n]);
      const [, , ethAmount1] = await bragNFT.read.taxRegistry([1n]);
      const [, , ethAmount2] = await bragNFT.read.taxRegistry([2n]);

      const expectedBase = totalValue / 3n;
      const expectedRemainder = totalValue % 3n;

      assert.equal(ethAmount0, expectedBase);
      assert.equal(ethAmount1, expectedBase);
      assert.equal(ethAmount2, expectedBase + expectedRemainder);
      assert.equal(ethAmount0 + ethAmount1 + ethAmount2, totalValue);

      // Treasury should have received full totalValue
      const finalTreasuryBalance = await publicClient.getBalance({
        address: treasuryWallet.account.address
      });
      assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalValue);
    });

    it("Should batch donate to specified recipients", async function () {
      const { bragNFT, user1, user2 } = await deployFixture();

      const recipients = [user1.account.address, user2.account.address];
      const messages = ["Gift 1", "Gift 2"];
      const uris = ["uriA", "uriB"];

      await bragNFT.write.batchDonateTo([recipients, messages, uris], {
        account: user1.account,
        value: parseEther("0.2")
      });

      assert.equal(getAddress(await bragNFT.read.ownerOf([0n])), getAddress(user1.account.address));
      assert.equal(getAddress(await bragNFT.read.ownerOf([1n])), getAddress(user2.account.address));
    });

    it("Should batch top-up with ETH and extend glow expiries", async function () {
      const { bragNFT, user1 } = await deployFixture();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate([["N1", "N2"], ["U1", "U2"]], {
        account: user1.account,
        value: parseEther("0.2")
      });

      const initialGlow0 = await bragNFT.read.glowExpiry([0n]);
      const initialGlow1 = await bragNFT.read.glowExpiry([1n]);

      // Batch top up with ETH (0.001 ETH each = $2.50 USD > $1.00 USD)
      await bragNFT.write.batchTopUp([[0n, 1n]], {
        account: user1.account,
        value: parseEther("0.002")
      });

      const newGlow0 = await bragNFT.read.glowExpiry([0n]);
      const newGlow1 = await bragNFT.read.glowExpiry([1n]);

      assert.equal(newGlow0, initialGlow0 + 30n * 86400n);
      assert.equal(newGlow1, initialGlow1 + 30n * 86400n);
    });

    it("Should batch top-up with BRAG tokens", async function () {
      const { bragNFT, bragToken, owner, user1, treasuryWallet } = await deployFixture();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate([["N1", "N2"], ["U1", "U2"]], {
        account: user1.account,
        value: parseEther("0.2")
      });

      // Transfer BRAG tokens to user1 and approve BragNFT contract
      const topUpAmount = parseEther("2000000"); // 2,000,000 BRAG (1,000,000 each)
      await bragToken.write.transfer([user1.account.address, topUpAmount], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, topUpAmount], { account: user1.account });

      const initialGlow0 = await bragNFT.read.glowExpiry([0n]);
      const initialGlow1 = await bragNFT.read.glowExpiry([1n]);

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: user1.account });

      const newGlow0 = await bragNFT.read.glowExpiry([0n]);
      const newGlow1 = await bragNFT.read.glowExpiry([1n]);

      assert.equal(newGlow0, initialGlow0 + 30n * 86400n);
      assert.equal(newGlow1, initialGlow1 + 30n * 86400n);

      // Treasury should have received 2,000,000 BRAG tokens
      assert.equal(await bragToken.read.balanceOf([treasuryWallet.account.address]), topUpAmount);
    });

    it("Should allow admin to update tax record USD value", async function () {
      const { bragNFT, owner, user1 } = await deployFixture();

      await bragNFT.write.donate(["Message", "uri"], { account: user1.account, value: parseEther("0.1") });

      // Update USD value as admin
      const newUsdValue = 500000000n; // $5.00 in 8 decimals
      await bragNFT.write.updateUsdValue([0n, newUsdValue], { account: owner.account });

      const [, usdValue] = await bragNFT.read.taxRegistry([0n]);
      assert.equal(usdValue, newUsdValue);
    });

    it("Should revert batch operations on array mismatch or invalid arguments", async function () {
      const { bragNFT, user1 } = await deployFixture();

      await assert.rejects(
        bragNFT.write.batchDonate([["Msg 1"], ["URI 1", "URI 2"]], {
          account: user1.account,
          value: parseEther("0.2")
        })
      );

      await assert.rejects(
        bragNFT.write.batchTopUp([[]], {
          account: user1.account,
          value: parseEther("0.1")
        })
      );
    });
  });

  describe("ExhibitVault Batch Extensions", function () {
    it("Should batch extend exhibition duration for ERC721", async function () {
      const { bragNFT, vault, user1 } = await deployFixture();

      // Mint 2 NFTs
      await bragNFT.write.batchDonate([["NFT 1", "NFT 2"], ["", ""]], {
        account: user1.account,
        value: parseEther("0.2")
      });

      // Approve vault for ERC721 transfers
      await bragNFT.write.setApprovalForAll([vault.address, true], { account: user1.account });

      // Exhibit 2 NFTs with 100s duration
      await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 100n], {
        account: user1.account
      });

      const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
      const expiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

      // Batch extend by 500s each
      await vault.write.batchExtendExhibition721(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [500n, 500n]],
        { account: user1.account }
      );

      assert.equal(await vault.read.expiry721([bragNFT.address, 0n]), expiry0 + 500n);
      assert.equal(await vault.read.expiry721([bragNFT.address, 1n]), expiry1 + 500n);
    });

    it("Should batch extend exhibition duration for ERC1155", async function () {
      const { mock1155, vault, owner, user1 } = await deployFixture();

      await mock1155.write.mint([user1.account.address, 1n, 10n], { account: owner.account });
      await mock1155.write.mint([user1.account.address, 2n, 20n], { account: owner.account });

      // Approve vault for ERC1155 transfers
      await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });

      await vault.write.batchExhibit1155(
        [[mock1155.address, mock1155.address], [1n, 2n], [5n, 10n], 200n],
        { account: user1.account }
      );

      const expiry1 = await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]);
      const expiry2 = await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]);

      await vault.write.batchExtendExhibition1155(
        [[mock1155.address, mock1155.address], [1n, 2n], [300n, 300n]],
        { account: user1.account }
      );

      assert.equal(
        await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]),
        expiry1 + 300n
      );
      assert.equal(
        await vault.read.expiry1155([mock1155.address, 2n, user1.account.address]),
        expiry2 + 300n
      );
    });
  });

  describe("Treasury Batch Approvals & Cancellations", function () {
    it("Should batch approve multiple proposals", async function () {
      const { multiSigTreasury, owner, user1 } = await deployFixture();

      // Propose 2 calls by owner (nonce 0 and nonce 1)
      await multiSigTreasury.write.propose(
        [[owner.account.address], [0n], ["0x"], 0n],
        { account: owner.account }
      );
      await multiSigTreasury.write.propose(
        [[owner.account.address], [0n], ["0x"], 1n],
        { account: owner.account }
      );

      assert.equal(await multiSigTreasury.read.hasApproved([0n, user1.account.address]), false);
      assert.equal(await multiSigTreasury.read.hasApproved([1n, user1.account.address]), false);

      // Batch approve by user1
      await multiSigTreasury.write.batchApprove([[0n, 1n], [0n, 0n]], { account: user1.account });

      assert.equal(await multiSigTreasury.read.hasApproved([0n, user1.account.address]), true);
      assert.equal(await multiSigTreasury.read.hasApproved([1n, user1.account.address]), true);
    });

    it("Should batch cancel multiple proposals by proposer", async function () {
      const { multiSigTreasury, owner } = await deployFixture();

      await multiSigTreasury.write.propose(
        [[owner.account.address], [0n], ["0x"], 0n],
        { account: owner.account }
      );
      await multiSigTreasury.write.propose(
        [[owner.account.address], [0n], ["0x"], 1n],
        { account: owner.account }
      );

      await multiSigTreasury.write.batchCancel([[0n, 1n], [0n, 0n]], { account: owner.account });

      const prop0 = await multiSigTreasury.read.getProposal([0n]);
      const prop1 = await multiSigTreasury.read.getProposal([1n]);

      assert.equal(prop0[4], true); // canceled = true (index 4 in tuple)
      assert.equal(prop1[4], true);
    });
  });
});
