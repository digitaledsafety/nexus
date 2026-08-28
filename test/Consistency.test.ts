import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, zeroAddress } from "viem";

describe("Consistency and Bug Verification", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [admin, seller, buyer, other] = await viem.getWalletClients();

    const mockERC20 = await viem.deployContract("MockUSDC", []);
    const mockERC721 = await viem.deployContract("BragNFT", [
      admin.account.address,
      admin.account.address,
      parseEther("0.01"),
      zeroAddress,
    ]);
    const marketplace = await viem.deployContract("NFTMarketplace", [
      admin.account.address,
      mockERC20.address,
    ]);

    // Setup BragNFT
    await admin.writeContract({
      address: mockERC721.address,
      abi: mockERC721.abi,
      functionName: "setManualEthPrice",
      args: [2000_00000000n], // $2000/ETH
    });

    // Mint some NFTs to seller
    await seller.writeContract({
      address: mockERC721.address,
      abi: mockERC721.abi,
      functionName: "donate",
      args: ["test", "uri", false],
      value: parseEther("0.1"),
    });
    const tokenId = 0n;

    return { admin, seller, buyer, other, mockERC20, mockERC721, marketplace, tokenId };
  }

  it("should verify if non-owner can update listing in NFTMarketplace (Bug Fix)", async function () {
    const { seller, buyer, mockERC721, marketplace, tokenId } = await deployFixture();

    // Seller creates listing
    await marketplace.write.createListing([mockERC721.address, tokenId, 1n, parseEther("100")], { account: seller.account });

    // Seller transfers NFT to buyer
    await mockERC721.write.transferFrom([seller.account.address, buyer.account.address, tokenId], { account: seller.account });

    // Seller (no longer owner) tries to update listing - SHOULD FAIL
    await assert.rejects(
      marketplace.write.updateListing([mockERC721.address, tokenId, 1n, parseEther("50")], { account: seller.account }),
      /You do not own this NFT/
    );
  });

  it("should check batchUpdateListings in NFTMarketplace", async function () {
    const { seller, mockERC721, marketplace, tokenId } = await deployFixture();

    await marketplace.write.createListing([mockERC721.address, tokenId, 1n, parseEther("100")], { account: seller.account });

    await marketplace.write.batchUpdateListings([[mockERC721.address], [tokenId], [1n], [parseEther("150")]], { account: seller.account });

    const [sellerAddr, price] = await marketplace.read.listings([mockERC721.address, tokenId, seller.account.address]);
    assert.equal(price, parseEther("150"));
  });

  it("should check proportional glow in BragNFT", async function () {
    const { admin, seller, mockERC721 } = await deployFixture();
    const publicClient = await viem.getPublicClient();

    // $2000/ETH. 0.1 ETH = $200. $200 * 30 days = 6000 days.
    // 0.1 ETH donation
    await seller.writeContract({
      address: mockERC721.address,
      abi: mockERC721.abi,
      functionName: "donate",
      args: ["glow test", "uri", false],
      value: parseEther("0.1"),
      account: seller.account
    });
    const tokenId = 1n; // Second NFT minted in this test (fixture mints 0)

    const expiry = await mockERC721.read.glowExpiry([tokenId]);
    const block = await publicClient.getBlock();
    const duration = expiry - block.timestamp;

    // Expected duration: 200 * 30 days = 6000 days = 518400000 seconds
    // Allow some small buffer for block timestamp
    assert.ok(duration >= 518400000n && duration < 518401000n);

    // Top up with 0.01 ETH = $20. $20 * 30 days = 600 days = 51840000 seconds
    await mockERC721.write.topUp([tokenId], {
        value: parseEther("0.01"),
        account: seller.account
    });

    const newExpiry = await mockERC721.read.glowExpiry([tokenId]);
    assert.equal(newExpiry, expiry + 51840000n);
  });

  it("should check batchMint in BragToken", async function () {
      const [admin, other1, other2] = await viem.getWalletClients();
      const bragToken = await viem.deployContract("BragToken", [admin.account.address, 0n, parseEther("1000000")]);

      await bragToken.write.batchMint([[other1.account.address, other2.account.address], [parseEther("100"), parseEther("200")]]);

      assert.equal(await bragToken.read.balanceOf([other1.account.address]), parseEther("100"));
      assert.equal(await bragToken.read.balanceOf([other2.account.address]), parseEther("200"));
  });

  it("should check batch extension in ExhibitVault", async function () {
    const { admin, seller, mockERC721 } = await deployFixture();
    const registry = await viem.deployContract("ExhibitRegistry", [admin.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [admin.account.address, registry.address]);
    const tokenId = 0n;

    // Exhibit
    await mockERC721.write.approve([vault.address, tokenId], { account: seller.account });
    await mockERC721.write.safeTransferFrom([seller.account.address, vault.address, tokenId, "0x"], { account: seller.account });

    const initialExpiry = await vault.read.expiry721([mockERC721.address, tokenId]);
    assert.equal(initialExpiry, 0n);

    const duration = 3600n;
    await vault.write.batchExtendExhibition721([[mockERC721.address], [tokenId], duration], { account: seller.account });

    const newExpiry = await vault.read.expiry721([mockERC721.address, tokenId]);
    assert.ok(newExpiry > 0n);
  });
});
