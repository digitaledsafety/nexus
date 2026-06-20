import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeAbiParameters, parseAbiParameters, encodeFunctionData } from "viem";

describe("Agency Enhancements", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 1000000n]);

    // Marketplace logic and proxy
    const marketplaceLogic = await viem.deployContract("NFTMarketplace");
    const marketplaceInitData = encodeFunctionData({
        abi: marketplaceLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, bragToken.address]
    });
    const marketplaceProxy = await viem.deployContract("MockProxy", [marketplaceLogic.address, marketplaceInitData]);
    const marketplace = await viem.getContractAt("NFTMarketplace", marketplaceProxy.address);

    // PriceFeed
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH

    // BragNFT logic and proxy
    const bragNFTLogic = await viem.deployContract("BragNFT");
    const nftInitData = encodeFunctionData({
        abi: bragNFTLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]
    });
    const nftProxy = await viem.deployContract("MockProxy", [bragNFTLogic.address, nftInitData]);
    const bragNFT = await viem.getContractAt("BragNFT", nftProxy.address);

    // Registry & Vault logic and proxy
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vaultLogic = await viem.deployContract("ExhibitVault");
    const vaultInitData = encodeFunctionData({
        abi: vaultLogic.abi,
        functionName: 'initialize',
        args: [owner.account.address, registry.address]
    });
    const vaultProxy = await viem.deployContract("MockProxy", [vaultLogic.address, vaultInitData]);
    const vault = await viem.getContractAt("ExhibitVault", vaultProxy.address);

    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    return { marketplace, bragNFT, bragToken, priceFeed, registry, vault, owner, user1, user2 };
  }

  describe("NFTMarketplace Private Listings", function () {
    it("Should restrict private listings to the specified buyer", async function () {
      const { marketplace, bragNFT, bragToken, user1, user2, owner } = await deployContracts();

      // Mint NFT to user1
      await bragNFT.write.donate(["test nft", "", false], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      // User1 creates a private listing for user2
      const price = parseEther("100");
      await bragNFT.write.approve([marketplace.address, tokenId], { account: user1.account });
      await marketplace.write.createPrivateListing([bragNFT.address, tokenId, 1n, price, user2.account.address], { account: user1.account });

      // Owner tries to buy - should fail
      await bragToken.write.approve([marketplace.address, price], { account: owner.account });
      await assert.rejects(
        marketplace.write.buyFromListing([bragNFT.address, tokenId, user1.account.address, price], { account: owner.account }),
        /Private listing: only the specified buyer can purchase/
      );

      // User2 buys - should succeed
      await bragToken.write.transfer([user2.account.address, price], { account: owner.account });
      await bragToken.write.approve([marketplace.address, price], { account: user2.account });
      await marketplace.write.buyFromListing([bragNFT.address, tokenId, user1.account.address, price], { account: user2.account });

      assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(user2.account.address));
    });
  });

  describe("BragNFT Manual Price Fallback", function () {
    it("Should use manual price fallback when price feed fails", async function () {
      const { bragNFT, owner, user1, bragToken } = await deployContracts();

      // Set manual price to $2000
      const manualPrice = 200000000000n;
      await bragNFT.write.setManualEthPrice([manualPrice], { account: owner.account });

      // Point to a non-existent price feed to simulate failure
      await bragNFT.write.setPriceFeed([zeroAddress], { account: owner.account });

      const donationAmount = parseEther("1"); // 1 ETH = $2000 USD
      await bragNFT.write.donate(["fallback test", "", false], { account: user1.account, value: donationAmount });

      const tokenId = 0n;
      const record = await bragNFT.read.taxRegistry([tokenId]);

      // usdValue should be $2000 (with 8 decimals)
      assert.equal(record[1], manualPrice);

      // Check BragToken rewards: $2000 * 1,000,000 = 2,000,000,000 tokens (18 decimals)
      const balance = await bragToken.read.balanceOf([user1.account.address]);
      assert.equal(balance, 2000n * 1000000n * parseEther("1"));
    });
  });

  describe("BragNFT Top-up Rewards", function () {
      it("Should mint BragToken rewards for top-ups", async function () {
          const { bragNFT, owner, user1, bragToken } = await deployContracts();

          await bragNFT.write.donate(["mint nft", "", false], { account: user1.account, value: parseEther("0.1") });
          const tokenId = 0n;

          const initialBalance = await bragToken.read.balanceOf([user1.account.address]);

          // Top up with $2 worth of ETH (0.0008 ETH @ $2500)
          const topUpAmount = parseEther("0.0008");
          await bragNFT.write.topUp([tokenId], { account: user1.account, value: topUpAmount });

          const finalBalance = await bragToken.read.balanceOf([user1.account.address]);
          // $2 * 1,000,000 = 2,000,000 tokens
          assert.equal(finalBalance - initialBalance, 2n * 1000000n * parseEther("1"));
      });
  });

  describe("ExhibitVault State Management", function () {
    it("Should clear expiry721 on withdrawal", async function () {
      const { bragNFT, vault, user1 } = await deployContracts();
      const testClient = await viem.getTestClient();

      await bragNFT.write.donate(["vault nft", "", false], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const duration = 3600n;
      await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, tokenId, encodeAbiParameters(parseAbiParameters('uint256'), [duration])], { account: user1.account });

      const expiryBefore = await vault.read.expiry721([bragNFT.address, tokenId]);
      assert.ok(expiryBefore > 0n);

      // Fast forward time
      await testClient.increaseTime({ seconds: 4000 });
      await testClient.mine({ blocks: 1 });

      await vault.write.withdraw721([bragNFT.address, tokenId], { account: user1.account });

      const expiryAfter = await vault.read.expiry721([bragNFT.address, tokenId]);
      assert.equal(expiryAfter, 0n);
    });

    it("Should clear expiry721 on move (take 2)", async function () {
        const { bragNFT, vault, registry, owner, user1 } = await deployContracts();
        const testClient = await viem.getTestClient();

        const vaultLogic = await viem.deployContract("ExhibitVault");
        const vaultInitData = encodeFunctionData({
            abi: vaultLogic.abi,
            functionName: 'initialize',
            args: [owner.account.address, registry.address]
        });
        const vault2Proxy = await viem.deployContract("MockProxy", [vaultLogic.address, vaultInitData]);
        const vault2 = await viem.getContractAt("ExhibitVault", vault2Proxy.address);

        await registry.write.verifyVault([vault2.address, 0, "Vault 2", "Second vault"], { account: owner.account });
        // Also verify vault1
        await registry.write.verifyVault([vault.address, 0, "Vault 1", "First vault"], { account: owner.account });

        await bragNFT.write.donate(["move nft", "", false], { account: user1.account, value: parseEther("0.1") });
        const tokenId = 0n;

        const duration = 3600n;
        await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, tokenId, encodeAbiParameters(parseAbiParameters('uint256'), [duration])], { account: user1.account });

        // Fast forward
        await testClient.increaseTime({ seconds: 4000 });
        await testClient.mine({ blocks: 1 });

        await vault.write.move721([bragNFT.address, tokenId, vault2.address], { account: user1.account });

        const expiryInVault1 = await vault.read.expiry721([bragNFT.address, tokenId]);
        assert.equal(expiryInVault1, 0n);

        const ownerInVault2 = await vault2.read.owner721([bragNFT.address, tokenId]);
        assert.equal(ownerInVault2, getAddress(user1.account.address));
    });
  });
});
