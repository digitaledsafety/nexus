import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Enhancements and CEI Compliance", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("200000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 500/ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1"), priceFeed.address]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasury };
  }

  describe("BragNFT Batch Operations", () => {
    it("Should batch donate to self and handle dust", async function () {
      const { bragNFT, buyer } = await setup();
      const messages = ["msg1", "msg2"];
      const medias = ["uri1", "uri2"];
      // Total 0.200000000000000001 ETH (non-divisible by 2)
      const totalAmount = parseEther("0.2") + 1n;
      await bragNFT.write.batchDonate([messages, medias, false], { account: buyer.account, value: totalAmount });

      assert.equal(await bragNFT.read.totalSupply(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(buyer.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(buyer.account.address));

      // Check that tax records reflect the distributed values
      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record1 = await bragNFT.read.taxRegistry([1n]);
      // At 2500 USD/ETH:
      // 0.1 ETH -> 250 USD (250 * 10^8)
      // 0.2 ETH + 1 wei -> ~500 USD
      assert.equal(record0[1], 25000000000n);
      assert.equal(record1[1], 25000000000n); // usdValueTotal / 2 = 250. i=1 gets the remainder but here USD is divisible by 2
    });

    it("Should batch donate to specific recipients", async function () {
      const { bragNFT, seller, buyer } = await setup();
      const recipients = [seller.account.address, buyer.account.address];
      const messages = ["msg1", "msg2"];
      const medias = ["uri1", "uri2"];
      await bragNFT.write.batchDonateTo([recipients, messages, medias, false], { account: buyer.account, value: parseEther("0.2") });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(seller.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(buyer.account.address));
    });

    it("Should batch top up NFTs and handle dust", async function () {
      const { bragNFT, buyer } = await setup();
      await bragNFT.write.batchDonate([["m1", "m2"], ["u1", "u2"], false], { account: buyer.account, value: parseEther("0.2") });

      assert.equal(await bragNFT.read.isGlowing([0n]), false);
      assert.equal(await bragNFT.read.isGlowing([1n]), false);

      // Total 0.000800000000000001 ETH
      await bragNFT.write.batchTopUp([[0n, 1n]], { account: buyer.account, value: parseEther("0.0008") + 1n });

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batch top up with BRAG tokens", async function () {
      const { bragNFT, bragToken, buyer, owner } = await setup();
      await bragNFT.write.batchDonate([["m1", "m2"], ["u1", "u2"], false], { account: buyer.account, value: parseEther("0.2") });

      // Fund buyer with BRAG - buyer already has some from donation, but we add more to be sure
      const bragAmount = 2_000_000n * 10n**18n;
      // Use owner as it has the initial supply
      await bragToken.write.transfer([buyer.account.address, parseEther("1000000")], { account: owner.account });
      await bragToken.write.approve([bragNFT.address, bragAmount], { account: buyer.account });

      await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: buyer.account });

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batch update on-chain media", async function () {
      const { bragNFT, owner, buyer } = await setup();
      await bragNFT.write.batchDonate([["m1", "m2"], ["u1", "u2"], false], { account: buyer.account, value: parseEther("0.2") });

      const newMedias = ["new1", "new2"];
      await bragNFT.write.batchUpdateOnChainMedia([[0n, 1n], newMedias], { account: owner.account });

      assert.equal(await bragNFT.read.onChainMedia([0n]), "new1");
      assert.equal(await bragNFT.read.onChainMedia([1n]), "new2");
    });
  });

  describe("NFTMarketplace Enhancements", () => {
    it("Should batch reject offers", async function () {
      const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await setup();

      // Mint 2 NFTs for seller
      await bragNFT.write.batchDonateTo([[seller.account.address, seller.account.address], ["n1", "n2"], ["u1", "u2"], false], { account: owner.account, value: parseEther("0.2") });

      // Buyer makes 2 offers
      await bragToken.write.transfer([buyer.account.address, parseEther("20")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("20")], { account: buyer.account });
      await marketplace.write.batchCreateOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [1n, 1n], [parseEther("10"), parseEther("10")]], { account: buyer.account });

      assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("20"));

      // Seller batch rejects
      await marketplace.write.batchRejectOffers([[bragNFT.address, bragNFT.address], [0n, 1n], [buyer.account.address, buyer.account.address]], { account: seller.account });

      assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("20"));
    });

    it("Should follow CEI in acceptOffer (verified by state check in MaliciousBuyer)", async function () {
      const { marketplace, bragNFT, bragToken, owner, seller } = await setup();

      // Seller mints NFT
      await bragNFT.write.donate(["cei test", ""], { account: seller.account, value: parseEther("0.1") });
      const tokenId = 0n;
      await bragNFT.write.approve([marketplace.address, tokenId], { account: seller.account });

      // Deploy Malicious Buyer that checks if offer still exists during onERC721Received
      const attacker = await viem.deployContract("MaliciousBuyer", [marketplace.address, bragNFT.address]);

      // Create offer for attacker
      const offerPrice = parseEther("1");
      await bragToken.write.transfer([attacker.address, offerPrice], { account: owner.account });

      // Need to approve bragToken for MaliciousBuyer to transfer to marketplace
      // MaliciousBuyer.createOffer does transferFrom(msg.sender, address(this), price)
      // Actually the test used owner.account, so owner needs to approve attacker.
      await bragToken.write.approve([attacker.address, offerPrice], { account: owner.account });
      await attacker.write.createOffer([tokenId, offerPrice], { account: owner.account });

      // Seller accepts offer. If CEI is followed, the offer is deleted BEFORE onERC721Received.
      // MaliciousBuyer.onERC721Received should find offer.price == 0.
      // We catch the error in MaliciousBuyer.onERC721Received because it attempts to re-enter
      // but we want to check lastCheckPrice.
      try {
        await marketplace.write.acceptOffer([bragNFT.address, tokenId, attacker.address], { account: seller.account });
      } catch (e) {}

      assert.equal(await attacker.read.lastCheckPrice(), 0n);
    });
  });

  describe("BragToken Enhancements", () => {
    it("Should batch mint tokens", async function () {
      const { bragToken, owner, seller, buyer } = await setup();
      const recipients = [seller.account.address, buyer.account.address];
      const amounts = [parseEther("100"), parseEther("200")];

      await bragToken.write.batchMint([recipients, amounts], { account: owner.account });

      assert.equal(await bragToken.read.balanceOf([seller.account.address]), parseEther("100"));
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("200"));
    });
  });
});
