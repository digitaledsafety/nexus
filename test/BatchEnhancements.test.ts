import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("Batch Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasurySigner] = await viem.getWalletClients();

    // Large max supply for testing rewards
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH

    // We use seller as a proxy for treasury in BragNFT for simple withdrawal tests
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, seller.account.address, parseEther("0.1"), priceFeed.address]);

    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });
    await bragToken.write.grantRole([await bragToken.read.MINTER_ROLE(), bragNFT.address], { account: owner.account });

    // Deploy actual Treasury for specialized testing
    const entryPoint = await viem.deployContract("MockEntryPoint");
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint.address]);

    return { marketplace, bragNFT, bragToken, owner, seller, buyer, treasurySigner, treasury };
  }

  describe("NFTMarketplace Batch Updates", function () {
    it("Should batch update multiple offers", async function () {
      const { marketplace, bragNFT, bragToken, owner, seller, buyer } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Buyer makes 2 offers
      await bragToken.write.transfer([buyer.account.address, parseEther("20")], { account: owner.account });
      await bragToken.write.approve([marketplace.address, parseEther("20")], { account: buyer.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

      // Batch update
      const nftContracts = [bragNFT.address, bragNFT.address];
      const tokenIds = [0n, 1n];
      const newAmounts = [1n, 1n];
      const newPrices = [parseEther("1.5"), parseEther("2.5")];
      const expiries = [0n, 0n];

      await marketplace.write.batchUpdateOffers([nftContracts, tokenIds, newAmounts, newPrices, expiries], { account: buyer.account });

      const offer0 = await marketplace.read.offers([bragNFT.address, 0n, buyer.account.address]);
      const offer1 = await marketplace.read.offers([bragNFT.address, 1n, buyer.account.address]);

      assert.equal(offer0[0], parseEther("1.5"));
      assert.equal(offer1[0], parseEther("2.5"));
      assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("4"));
      assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("16"));
    });

    it("Should batch update multiple listings", async function () {
      const { marketplace, bragNFT, seller } = await deployAll();

      // Mint 2 NFTs
      await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

      // Seller creates 2 listings
      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("1")], { account: seller.account });
      await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseEther("2")], { account: seller.account });

      // Batch update
      const nftContracts = [bragNFT.address, bragNFT.address];
      const tokenIds = [0n, 1n];
      const newAmounts = [1n, 1n];
      const newPrices = [parseEther("1.2"), parseEther("2.2")];

      await marketplace.write.batchUpdateListings([nftContracts, tokenIds, newAmounts, newPrices], { account: seller.account });

      const listing0 = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
      const listing1 = await marketplace.read.listings([bragNFT.address, 1n, seller.account.address]);

      assert.equal(listing0[1], parseEther("1.2"));
      assert.equal(listing1[1], parseEther("2.2"));
    });
  });

  describe("BragNFT Batch Operations", function () {
    it("Should batch donate (mint)", async function () {
      const { bragNFT, seller } = await deployAll();

      const messages = ["batch1", "batch2"];
      const medias = ["uri1", "uri2"];
      const onChains = [false, false];
      const amounts = [parseEther("0.1"), parseEther("0.2")];

      await bragNFT.write.batchDonate([messages, medias, onChains, amounts], { account: seller.account, value: parseEther("0.3") });

      assert.equal(await bragNFT.read.nextTokenId(), 2n);
      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(seller.account.address));
      assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(seller.account.address));
    });

    it("Should batch top up", async function () {
      const { bragNFT, seller } = await deployAll();

      // Mint 2
      await bragNFT.write.donate(["n1", ""], { account: seller.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["n2", ""], { account: seller.account, value: parseEther("0.1") });

      const tokenIds = [0n, 1n];
      const amounts = [parseEther("0.01"), parseEther("0.01")]; // $25 each at $2500 ETH

      await bragNFT.write.batchTopUp([tokenIds, amounts], { account: seller.account, value: parseEther("0.02") });

      assert.equal(await bragNFT.read.isGlowing([0n]), true);
      assert.equal(await bragNFT.read.isGlowing([1n]), true);
    });
  });

  describe("Standard Administrative Recovery", function () {
    it("Should allow admin to withdraw ETH and ERC20 from BragToken", async function () {
      const { bragToken, owner, seller: buyer } = await deployAll();
      const publicClient = await viem.getPublicClient();

      // Send ETH to BragToken
      await buyer.sendTransaction({ to: bragToken.address, value: parseEther("1") });
      assert.equal(await publicClient.getBalance({ address: bragToken.address }), parseEther("1"));

      // Withdraw ETH
      const initialBalance = await publicClient.getBalance({ address: owner.account.address });
      await bragToken.write.withdrawETH({ account: owner.account });
      const finalBalance = await publicClient.getBalance({ address: owner.account.address });
      assert(finalBalance > initialBalance);
      assert.equal(await publicClient.getBalance({ address: bragToken.address }), 0n);

      // Send ERC20 to BragToken
      const otherToken = await viem.deployContract("MockUSDC");
      await otherToken.write.mint([bragToken.address, 1000n], { account: owner.account });

      // Withdraw ERC20
      await bragToken.write.withdrawERC20([otherToken.address], { account: owner.account });
      assert.equal(await otherToken.read.balanceOf([owner.account.address]), 1000n);
    });

    it("Should allow admin to withdraw ETH and ERC20 from Treasury", async function () {
        const { treasury, owner, seller: buyer } = await deployAll();
        const publicClient = await viem.getPublicClient();

        // Send ETH to Treasury
        await buyer.sendTransaction({ to: treasury.address, value: parseEther("1") });
        assert.equal(await publicClient.getBalance({ address: treasury.address }), parseEther("1"));

        // Withdraw ETH
        const initialBalance = await publicClient.getBalance({ address: owner.account.address });
        await treasury.write.withdrawETH({ account: owner.account });
        const finalBalance = await publicClient.getBalance({ address: owner.account.address });
        assert(finalBalance > initialBalance);
        assert.equal(await publicClient.getBalance({ address: treasury.address }), 0n);

        // Send ERC20 to Treasury
        const otherToken = await viem.deployContract("MockUSDC");
        await otherToken.write.mint([treasury.address, 1000n], { account: owner.account });

        // Withdraw ERC20
        await treasury.write.withdrawERC20([otherToken.address], { account: owner.account });
        assert.equal(await otherToken.read.balanceOf([owner.account.address]), 1000n);
      });
  });
});
