import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, keccak256, toBytes } from "viem";

describe("Contract Hardening Tests", async function () {
  const { viem } = await network.connect();
  const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
  const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";

  async function setup() {
    const [owner, seller, buyer, other] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // BragNFT & Dependencies
    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.1")
    , priceFeed.address]);



    // BatchGrant
    const batchGrant = await viem.deployContract("BatchGrant", [owner.account.address]);

    // MockERC1155
    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { marketplace, bragNFT, bragToken, treasury, batchGrant, mock1155, owner, seller, buyer, other };
  }

  describe("Reentrancy Protection", () => {
    it("Should prevent reentrancy in NFTMarketplace.acceptOffer via onERC721Received", async function () {
      const { marketplace, bragNFT, bragToken, owner, seller } = await setup();
      const [_, __, ___, victim] = await viem.getWalletClients();

      // Fund victim
      await bragToken.write.transfer([victim.account.address, parseEther("100")], { account: owner.account });

      // Victim makes a legitimate offer
      await bragNFT.write.donate(["victim nft", ""], { account: victim.account, value: parseEther("0.1") });
      const victimTokenId = 0n;
      const victimOfferPrice = parseEther("5");
      await bragToken.write.approve([marketplace.address, victimOfferPrice], { account: victim.account });
      await marketplace.write.createOffer([bragNFT.address, victimTokenId, 1n, victimOfferPrice], { account: victim.account });

      // Seller mints NFT to sell to Attacker
      await bragNFT.write.donate(["attacker target", ""], { account: seller.account, value: parseEther("0.1") });
      const attackerTokenId = 1n;
      await bragNFT.write.approve([marketplace.address, attackerTokenId], { account: seller.account });

      // Deploy Malicious Buyer
      const attacker = await viem.deployContract("MaliciousBuyer", [marketplace.address, bragNFT.address]);

      // Attacker creates offer (funded by owner for test)
      const offerPrice = parseEther("1");
      await bragToken.write.approve([attacker.address, offerPrice], { account: owner.account });
      await attacker.write.createOffer([attackerTokenId, offerPrice], { account: owner.account });

      // Seller accepts offer -> should trigger reentrancy in onERC721Received -> should REVERT
      await assert.rejects(
        marketplace.write.acceptOffer([bragNFT.address, attackerTokenId, attacker.address], { account: seller.account }),
        /ReentrancyGuardReentrantCall/
      );
    });

    it("Should prevent reentrancy in BragNFT.donate via onERC721Received hook", async function () {
      const { bragNFT, owner } = await setup();

      // Deploy Malicious Donor
      const attacker = await viem.deployContract("ReentrantDonor", [bragNFT.address]);

      // This attack attempts to re-enter 'donate' during Step 4 of _donate (_safeMint calls onERC721Received).
      // BragNFT uses nonReentrant on all donate functions.

      // Note: OpenZeppelin's _safeMint checks onERC721Received IF the recipient is a contract.
      // If it fails (reverts), it will bubble up.

      try {
        await attacker.write.attack({ value: parseEther("0.2"), account: owner.account });
        assert.fail("Should have reverted");
      } catch (err: any) {
        // We accept either the reentrancy error OR the raw revert if it bubbles up differently
        assert.ok(
            err.message.includes("ReentrancyGuardReentrantCall") || err.message.includes("ERC721InvalidReceiver"),
            `Expected reentrancy or receiver error, got ${err.message}`
        );
      }
    });
  });

  describe("Access Control Hardening", () => {
    it("NFTMarketplace: unauthorized user cannot set protocol fee", async function () {
      const { marketplace, other } = await setup();
      await assert.rejects(
        marketplace.write.setProtocolFee([500n], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("NFTMarketplace: unauthorized user cannot set fee recipient", async function () {
      const { marketplace, other } = await setup();
      await assert.rejects(
        marketplace.write.setFeeRecipient([other.account.address], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("BatchGrant: unauthorized user cannot distribute from balance", async function () {
      const { batchGrant, other, bragToken } = await setup();
      await assert.rejects(
        batchGrant.write.distributeFromBalance([bragToken.address, [other.account.address], [100n]], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("BatchGrant: unauthorized user cannot distribute ETH from balance", async function () {
      const { batchGrant, other } = await setup();
      await assert.rejects(
        batchGrant.write.distributeETHFromBalance([[other.account.address], [100n]], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("MockERC1155: unauthorized user cannot mint", async function () {
      const { mock1155, other } = await setup();
      await assert.rejects(
        mock1155.write.mint([other.account.address, 1n, 100n], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });

    it("MockERC1155: unauthorized user cannot grant roles", async function () {
      const { mock1155, other } = await setup();
      await assert.rejects(
        mock1155.write.grantRole([MINTER_ROLE, other.account.address], { account: other.account }),
        /AccessControlUnauthorizedAccount/
      );
    });
  });

  describe("Batch Operation Robustness (DoS)", () => {
    it("BatchGrant.distributeETH should revert entire batch if one transfer fails", async function () {
      const { batchGrant, owner, other } = await setup();

      // Deploy a contract that reverts on receive
      const reverter = await viem.deployContract("Reverter", []);

      const recipients = [other.account.address, reverter.address];
      const amounts = [parseEther("1"), parseEther("1")];

      await assert.rejects(
        batchGrant.write.distributeETH([recipients, amounts], { value: parseEther("2"), account: owner.account }),
        /ETH transfer failed/
      );
    });
  });

  describe("Marketplace Robustness (DoS)", () => {
    it("NFTMarketplace.acceptOffer should NOT fail if royalty recipient reverts on payment (ERC20 payment)", async function () {
      const { marketplace, bragNFT, bragToken, owner, seller, buyer } = await setup();

      // Attacker/Seller mints a RevertingRoyaltyNFT
      const reverter = await viem.deployContract("Reverter", []);
      const revNFT = await viem.deployContract("RevertingRoyaltyNFT", [reverter.address]);
      const tokenId = 0n;

      // Buyer makes an offer
      await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });
      await marketplace.write.createOffer([revNFT.address, tokenId, 1n, parseEther("10")], { account: buyer.account });

      // Seller accepts offer -> marketplace tries to pay reverter -> should NOT revert because it's ERC20 transfer
      await revNFT.write.approve([marketplace.address, tokenId], { account: owner.account });

      // This should succeed
      await marketplace.write.acceptOffer([revNFT.address, tokenId, buyer.account.address], { account: owner.account });

      assert.equal(await revNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));
    });
  });
});
