import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, stringToHex } from "viem";

describe("Batch Extensions Suite", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasuryWallet] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("1000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2,500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasuryWallet.account.address, parseEther("0.001"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Description"]);

    const mockEntryPoint = await viem.deployContract("MockEntryPoint");
    const treasuryContract = await viem.deployContract("Treasury", [
      [owner.account.address, user1.account.address, user2.account.address],
      2n,
      mockEntryPoint.address,
    ]);

    // Setup BRAG token minter role for BragNFT
    const MINTER_ROLE = keccak256(stringToHex("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    return { marketplace, bragNFT, bragToken, registry, vault, treasuryContract, owner, user1, user2, treasuryWallet };
  }

  describe("NFTMarketplace.batchUpdateListings", function () {
    it("Should batch update listings correctly", async function () {
      const { marketplace, bragNFT, owner } = await deployAll();

      // Donate to get 2 NFTs
      await bragNFT.write.donate(["NFT 1", ""], { account: owner.account, value: parseEther("0.01") });
      await bragNFT.write.donate(["NFT 2", ""], { account: owner.account, value: parseEther("0.01") });

      // Create listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: owner.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("20")], { account: owner.account });

      // Batch update listings
      await marketplace.write.batchUpdateListings(
        [[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("15"), parseEther("25")]],
        { account: owner.account }
      );

      const listing1 = await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]);
      const listing2 = await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]);

      assert.equal(listing1[1], parseEther("15"));
      assert.equal(listing2[1], parseEther("25"));
    });

    it("Should revert batchUpdateListings on array length mismatch", async function () {
      const { marketplace, bragNFT, owner } = await deployAll();
      await assert.rejects(
        marketplace.write.batchUpdateListings(
          [[bragNFT.address], [0n, 1n], [1n], [parseEther("15")]],
          { account: owner.account }
        ),
        /Mismatched arrays/
      );
    });
  });

  describe("BragNFT batch operations", function () {
    it("Should batchDonate and batchDonateTo", async function () {
      const { bragNFT, owner, user1 } = await deployAll();

      // batchDonate
      await bragNFT.write.batchDonate(
        [["Batch 1", "Batch 2"], ["uri1", "uri2"], [false, false]],
        { account: owner.account, value: parseEther("0.02") }
      );

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(owner.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(owner.account.address));

      // batchDonateTo
      await bragNFT.write.batchDonateTo(
        [[user1.account.address, user1.account.address], ["Recipient 1", "Recipient 2"], ["uri3", "uri4"], [false, false]],
        { account: owner.account, value: parseEther("0.02") }
      );

      assert.equal(await bragNFT.read.totalSupply(), 4n);
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(user1.account.address));
      assert.equal(await bragNFT.read.ownerOf([3n]), getAddress(user1.account.address));
    });

    it("Should batchTopUp and batchTopUpWithBrag", async function () {
      const { bragNFT, bragToken, owner } = await deployAll();

      await bragNFT.write.batchDonate(
        [["NFT 1", "NFT 2"], ["uri1", "uri2"], [false, false]],
        { account: owner.account, value: parseEther("0.02") }
      );

      const exp1Before = await bragNFT.read.glowExpiry([0n]);
      const exp2Before = await bragNFT.read.glowExpiry([1n]);

      // batchTopUp with ETH ($1 per token = 0.0004 ETH at $2500/ETH)
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: owner.account, value: parseEther("0.002") });

      const exp1AfterEth = await bragNFT.read.glowExpiry([0n]);
      const exp2AfterEth = await bragNFT.read.glowExpiry([1n]);

      assert.equal(exp1AfterEth, exp1Before + 30n * 86400n);
      assert.equal(exp2AfterEth, exp2Before + 30n * 86400n);

      // batchTopUpWithBrag
      await bragToken.write.approve([bragNFT.address, parseEther("5000000")], { account: owner.account });
      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: owner.account });

      const exp1AfterBrag = await bragNFT.read.glowExpiry([0n]);
      const exp2AfterBrag = await bragNFT.read.glowExpiry([1n]);

      assert.equal(exp1AfterBrag, exp1AfterEth + 30n * 86400n);
      assert.equal(exp2AfterBrag, exp2AfterEth + 30n * 86400n);
    });
  });

  describe("ExhibitVault batch extensions", function () {
    it("Should batchExtendExhibition721 and batchExtendExhibition1155", async function () {
      const { bragNFT, vault, owner } = await deployAll();

      // Mint 2 ERC721 NFTs
      await bragNFT.write.batchDonate(
        [["NFT 1", "NFT 2"], ["uri1", "uri2"], [false, false]],
        { account: owner.account, value: parseEther("0.02") }
      );

      // Batch exhibit in vault with duration = 3600s
      await bragNFT.write.setApprovalForAll([vault.address, true], { account: owner.account });
      await vault.write.batchExhibit721([[bragNFT.address, bragNFT.address], [0n, 1n], 3600n], { account: owner.account });

      const exp1Before = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp2Before = await vault.read.expiry721([bragNFT.address, 1n]);

      // Batch extend exhibition
      await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1800n], { account: owner.account });

      const exp1After = await vault.read.expiry721([bragNFT.address, 0n]);
      const exp2After = await vault.read.expiry721([bragNFT.address, 1n]);

      assert.equal(exp1After, exp1Before + 1800n);
      assert.equal(exp2After, exp2Before + 1800n);

      // ERC1155 batch extend test
      const mock1155 = await viem.deployContract("MockERC1155");
      await mock1155.write.mint([owner.account.address, 1n, 100n]);
      await mock1155.write.mint([owner.account.address, 2n, 100n]);
      await mock1155.write.setApprovalForAll([vault.address, true], { account: owner.account });

      await vault.write.batchExhibit1155([[mock1155.address, mock1155.address], [1n, 2n], [10n, 20n], 3600n], { account: owner.account });

      const exp1155_1_Before = await vault.read.expiry1155([mock1155.address, 1n, owner.account.address]);
      await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [1n, 2n], 1800n], { account: owner.account });
      const exp1155_1_After = await vault.read.expiry1155([mock1155.address, 1n, owner.account.address]);

      assert.equal(exp1155_1_After, exp1155_1_Before + 1800n);
    });
  });

  describe("Treasury batch operations", function () {
    it("Should batchApprove and batchCancel proposals", async function () {
      const { treasuryContract, owner, user1 } = await deployAll();

      // Create 2 proposals by owner (nonce = 0)
      const call1 = { target: owner.account.address, value: 0n, data: "0x" };
      await treasuryContract.write.proposeBatch([[call1], 0n], { account: owner.account });
      await treasuryContract.write.proposeBatch([[call1], 0n], { account: owner.account });

      assert.equal(await treasuryContract.read.hasApproved([0n, user1.account.address]), false);
      assert.equal(await treasuryContract.read.hasApproved([1n, user1.account.address]), false);

      // User1 batch approves proposals 0 and 1
      await treasuryContract.write.batchApprove([[0n, 1n], 0n], { account: user1.account });

      assert.equal(await treasuryContract.read.hasApproved([0n, user1.account.address]), true);
      assert.equal(await treasuryContract.read.hasApproved([1n, user1.account.address]), true);

      // Create another 2 proposals and batch cancel them
      await treasuryContract.write.proposeBatch([[call1], 0n], { account: owner.account }); // proposal 2
      await treasuryContract.write.proposeBatch([[call1], 0n], { account: owner.account }); // proposal 3

      await treasuryContract.write.batchCancel([[2n, 3n], 0n], { account: owner.account });

      const prop2 = await treasuryContract.read.getProposal([2n]);
      const prop3 = await treasuryContract.read.getProposal([3n]);

      assert.equal(prop2[4], true); // canceled = true
      assert.equal(prop3[4], true); // canceled = true
    });
  });
});
