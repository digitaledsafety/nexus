import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, donor, treasury, recipient, buyer, seller] = await viem.getWalletClients();

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500/ETH (8 decimals)
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("10000000"), parseEther("1000000000000")]);
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    return { bragNFT, priceFeed, bragToken, marketplace, owner, donor, treasury, recipient, buyer, seller };
  }

  describe("BragNFT Batch Donations", async function () {
    it("Should batch donate and handle dust correctly", async function () {
      const { bragNFT, donor, treasury } = await deployAll();
      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      // Donate 0.300000000000000001 ETH for 3 NFTs
      const totalDonation = parseEther("0.3") + 1n;
      const count = 3n;

      await bragNFT.write.batchDonate([count, "Batch donor", ""], {
          account: donor.account,
          value: totalDonation
      });

      assert.equal(await bragNFT.read.totalSupply(), count);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(donor.account.address));
      assert.equal(await bragNFT.read.ownerOf([2n]), getAddress(donor.account.address));

      const record0 = await bragNFT.read.taxRegistry([0n]);
      const record1 = await bragNFT.read.taxRegistry([1n]);
      const record2 = await bragNFT.read.taxRegistry([2n]);

      // amountPerNft = 0.1 ETH. record2 gets the +1 dust.
      // USD Value at 2500/ETH: 0.1 ETH = $250. 0.1 ETH + 1 wei = $250 + small fraction.
      // usdValue in contract is (answer * ethAmount) / 1e18.
      // answer = 2500 * 1e8 = 250,000,000,000
      // usdValue0 = (250,000,000,000 * 1e17) / 1e18 = 25,000,000,000 ($250 in 8 decimals)
      assert.equal(record0[1], 25000000000n);
      assert.equal(record1[1], 25000000000n);
      // record2: (250,000,000,000 * (1e17 + 1)) / 1e18 = 25,000,000,000 + (250,000,000,000 / 1e18) = 25,000,000,000
      // Actually, since 250e9 / 1e18 is 0, record2[1] will also be 25,000,000,000 unless dust is large enough.
      assert.equal(record2[1], 25000000000n);

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance, initialTreasuryBalance + totalDonation);
    });

    it("Should batch donate to a recipient", async function () {
      const { bragNFT, donor, recipient } = await deployAll();
      const totalDonation = parseEther("0.2");
      const count = 2n;

      await bragNFT.write.batchDonateTo([recipient.account.address, count, "For recipient", "ipfs://test"], {
          account: donor.account,
          value: totalDonation
      });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(recipient.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(recipient.account.address));

      const record = await bragNFT.read.taxRegistry([0n]);
      assert.equal(record[0], getAddress(donor.account.address));
    });
  });

  describe("BragNFT Batch Top-ups", async function () {
    it("Should batch top-up with ETH", async function () {
        const { bragNFT, donor, treasury } = await deployAll();
        await bragNFT.write.batchDonate([2n, "Topup test", ""], { account: donor.account, value: parseEther("0.2") });

        assert.equal(await bragNFT.read.isGlowing([0n]), false);
        assert.equal(await bragNFT.read.isGlowing([1n]), false);

        // $1.00 USD at 2500/ETH is 0.0004 ETH.
        const totalTopUp = parseEther("0.0008");
        await bragNFT.write.batchTopUp([[0n, 1n]], { account: donor.account, value: totalTopUp });

        assert.equal(await bragNFT.read.isGlowing([0n]), true);
        assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });

    it("Should batch top-up with BRAG", async function () {
        const { bragNFT, bragToken, donor, owner } = await deployAll();
        await bragNFT.write.batchDonate([2n, "Topup test BRAG", ""], { account: donor.account, value: parseEther("0.2") });

        // Mint BRAG to donor and approve BragNFT
        const bragAmount = 2_000_000n * parseEther("1");
        await bragToken.write.transfer([donor.account.address, bragAmount], { account: owner.account });
        await bragToken.write.approve([bragNFT.address, bragAmount], { account: donor.account });

        await bragNFT.write.batchTopUpWithBrag([[0n, 1n]], { account: donor.account });

        assert.equal(await bragNFT.read.isGlowing([0n]), true);
        assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });
  });

  describe("BragNFT Administrative Updates", async function () {
    it("Should allow admin to update USD value", async function () {
        const { bragNFT, owner, donor } = await deployAll();
        await bragNFT.write.donate(["USD test", ""], { account: donor.account, value: parseEther("0.1") });

        const tokenId = 0n;
        const initialRecord = await bragNFT.read.taxRegistry([tokenId]);
        assert.equal(initialRecord[1], 25000000000n);

        const newUsdValue = 50000000000n;
        await bragNFT.write.updateUsdValue([tokenId, newUsdValue], { account: owner.account });

        const updatedRecord = await bragNFT.read.taxRegistry([tokenId]);
        assert.equal(updatedRecord[1], newUsdValue);
    });

    it("Should revert if non-admin tries to update USD value", async function () {
        const { bragNFT, donor } = await deployAll();
        await bragNFT.write.donate(["USD fail", ""], { account: donor.account, value: parseEther("0.1") });

        await assert.rejects(
            bragNFT.write.updateUsdValue([0n, 100n], { account: donor.account }),
            /AccessControl/
        );
    });
  });

  describe("NFTMarketplace Batch Rejections", async function () {
    it("Should batch reject offers", async function () {
        const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

        // Mint NFTs to seller
        await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
        await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

        // Buyer gets tokens and creates offers
        const offerAmount = parseEther("10");
        await bragToken.write.transfer([buyer.account.address, offerAmount], { account: owner.account });
        await bragToken.write.approve([marketplace.address, offerAmount], { account: buyer.account });

        await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
        await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

        assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("7"));

        // Seller rejects both offers
        await marketplace.write.batchRejectOffers([
            [bragNFT.address, bragNFT.address],
            [0n, 1n],
            [buyer.account.address, buyer.account.address]
        ], { account: seller.account });

        // Buyer should be refunded
        assert.equal(await bragToken.read.balanceOf([buyer.account.address]), offerAmount);

        // Offers should be cleared
        const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
        assert.equal(offer0[0], 0n);
        const offer1 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);
        assert.equal(offer1[0], 0n);
    });
  });
});
