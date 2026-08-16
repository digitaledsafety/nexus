import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

describe("Agency Enhancement Batch Features", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, recipient] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      parseEther("1000000"),
      parseEther("10000000"),
    ]);
    const mockFeed = await viem.deployContract("MockPriceFeed", [200000000000n]); // $2000 ETH
    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      owner.account.address,
      1n,
      mockFeed.address,
    ]);

    await bragToken.write.grantRole([
      await bragToken.read.MINTER_ROLE(),
      bragNFT.address,
    ]);

    const marketplace = await viem.deployContract("NFTMarketplace", [
      owner.account.address,
      bragToken.address,
    ]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [
      owner.account.address,
      registry.address,
    ]);
    const vault2 = await viem.deployContract("ExhibitVault", [
      owner.account.address,
      registry.address,
    ]);

    await registry.write.verifyVault([vault1.address, 0, "Vault Alpha", "Location Alpha"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault Beta", "Location Beta"]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return {
      owner,
      seller,
      buyer,
      recipient,
      bragToken,
      bragNFT,
      marketplace,
      registry,
      vault1,
      vault2,
      mock1155,
    };
  }

  it("Should batch extend exhibition duration for ERC721 and ERC1155 in ExhibitVault", async function () {
    const { seller, bragNFT, mock1155, vault1 } = await deployAll();

    // Mint ERC721 tokens
    await bragNFT.write.donate(["Item 1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Item 2", ""], { account: seller.account, value: parseEther("0.1") });

    // Exhibit ERC721
    await bragNFT.write.setApprovalForAll([vault1.address, true], { account: seller.account });
    await vault1.write.batchExhibit721(
      [[bragNFT.address, bragNFT.address], [0n, 1n], 3600n],
      { account: seller.account }
    );

    let expiry0 = await vault1.read.expiry721([bragNFT.address, 0n]);
    assert.ok(expiry0 > 0n);

    // Batch extend
    await vault1.write.batchExtendExhibition721(
      [[bragNFT.address, bragNFT.address], [0n, 1n], 7200n],
      { account: seller.account }
    );

    let expiry0Updated = await vault1.read.expiry721([bragNFT.address, 0n]);
    assert.equal(expiry0Updated, expiry0 + 7200n);

    // Mint ERC1155
    await mock1155.write.mint([seller.account.address, 10n, 100n]);
    await mock1155.write.mint([seller.account.address, 11n, 100n]);
    await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });

    await vault1.write.batchExhibit1155(
      [[mock1155.address, mock1155.address], [10n, 11n], [10n, 20n], 3600n],
      { account: seller.account }
    );

    let expiry1155_10 = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
    assert.ok(expiry1155_10 > 0n);

    await vault1.write.batchExtendExhibition1155(
      [[mock1155.address, mock1155.address], [10n, 11n], 7200n],
      { account: seller.account }
    );

    let expiry1155_10_updated = await vault1.read.expiry1155([mock1155.address, 10n, seller.account.address]);
    assert.equal(expiry1155_10_updated, expiry1155_10 + 7200n);
  });

  it("Should batch move ERC721 and ERC1155 tokens with duration in ExhibitVault", async function () {
    const { seller, bragNFT, mock1155, vault1, vault2 } = await deployAll();

    await bragNFT.write.donate(["Item 1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["Item 2", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.setApprovalForAll([vault1.address, true], { account: seller.account });

    await vault1.write.batchExhibit721(
      [[bragNFT.address, bragNFT.address], [0n, 1n], 0n],
      { account: seller.account }
    );

    await vault1.write.batchMove721WithDuration(
      [[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address, 5000n],
      { account: seller.account }
    );

    assert.equal(getAddress(await vault2.read.owner721([bragNFT.address, 0n])), getAddress(seller.account.address));
    let vault2Expiry = await vault2.read.expiry721([bragNFT.address, 0n]);
    assert.ok(vault2Expiry > 0n);

    // ERC1155 batch move with duration
    await mock1155.write.mint([seller.account.address, 10n, 50n]);
    await mock1155.write.mint([seller.account.address, 11n, 50n]);
    await mock1155.write.setApprovalForAll([vault1.address, true], { account: seller.account });

    await vault1.write.batchExhibit1155(
      [[mock1155.address, mock1155.address], [10n, 11n], [10n, 10n], 0n],
      { account: seller.account }
    );

    await vault1.write.batchMove1155WithDuration(
      [[mock1155.address, mock1155.address], [10n, 11n], [10n, 10n], vault2.address, 5000n],
      { account: seller.account }
    );

    assert.equal(await vault2.read.balances1155([mock1155.address, 10n, seller.account.address]), 10n);
    let vault2Expiry1155 = await vault2.read.expiry1155([mock1155.address, 10n, seller.account.address]);
    assert.ok(vault2Expiry1155 > 0n);
  });

  it("Should reject ERC721 offer creation or update if amount != 1 in NFTMarketplace", async function () {
    const { seller, buyer, owner, bragNFT, bragToken, marketplace } = await deployAll();

    await bragNFT.write.donate(["Item 1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("100")], { account: buyer.account });

    // Reverts on create offer with amount != 1 for ERC721
    await assert.rejects(
      marketplace.write.createOffer([bragNFT.address, 0n, 2n, parseEther("10")], { account: buyer.account }),
      /ERC721 offer amount must be 1/
    );

    // Valid create offer
    await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("10")], { account: buyer.account });

    // Reverts on update offer with amount != 1 for ERC721
    await assert.rejects(
      marketplace.write.updateOffer([bragNFT.address, 0n, 2n, parseEther("15")], { account: buyer.account }),
      /ERC721 offer amount must be 1/
    );
  });

  it("Should allow updating listing with new private buyer and batch updating listings in NFTMarketplace", async function () {
    const { seller, buyer, bragNFT, marketplace } = await deployAll();

    await bragNFT.write.donate(["Item 1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.approve([marketplace.address, 0n], { account: seller.account });

    // Create initial listing
    await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseEther("10")], { account: seller.account });

    // Update listing with private buyer
    await marketplace.write.updateListing(
      [bragNFT.address, 0n, 1n, parseEther("12"), buyer.account.address],
      { account: seller.account }
    );

    let listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing[1], parseEther("12"));
    assert.equal(getAddress(listing[3]), getAddress(buyer.account.address));

    // Batch update listings
    await marketplace.write.batchUpdateListings(
      [[bragNFT.address], [0n], [1n], [parseEther("15")]],
      { account: seller.account }
    );

    listing = await marketplace.read.listings([bragNFT.address, 0n, seller.account.address]);
    assert.equal(listing[1], parseEther("15"));
  });
});
