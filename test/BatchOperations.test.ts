import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, seller, buyer, treasury] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("2000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.account.address, parseEther("0.1")
    , priceFeed.address]);


    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));


    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault1 = await viem.deployContract("ExhibitVault", [registry.address]);
    const vault2 = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([vault1.address, 0, "Vault 1", "D1"]);
    await registry.write.verifyVault([vault2.address, 0, "Vault 2", "D2"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, registry, vault1, vault2, mock1155, owner, seller, buyer, treasury };
  }

  it("NFTMarketplace: Should batch cancel multiple offers", async function () {
    const { marketplace, bragNFT, bragToken, seller, buyer, owner } = await deployAll();

    // Mint 2 NFTs
    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    // Buyer makes 2 offers
    await bragToken.write.transfer([buyer.account.address, parseEther("10")], { account: owner.account });
    await bragToken.write.approve([marketplace.address, parseEther("10")], { account: buyer.account });

    await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("1")], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("2")], { account: buyer.account });

    assert.equal(await bragToken.read.balanceOf([marketplace.address]), parseEther("3"));

    // Batch cancel
    await marketplace.write.cancelOffers([[bragNFT.address, bragNFT.address], [0n, 1n]], { account: buyer.account });

    assert.equal(await bragToken.read.balanceOf([marketplace.address]), 0n);
    assert.equal(await bragToken.read.balanceOf([buyer.account.address]), parseEther("10"));
  });

  it("ExhibitVault: Should batch move ERC721 tokens", async function () {
    const { bragNFT, vault1, vault2, user: seller } = await (async () => {
        const res = await deployAll();
        return { ...res, user: res.seller };
    })();

    await bragNFT.write.donate(["nft1", ""], { account: seller.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["nft2", ""], { account: seller.account, value: parseEther("0.1") });

    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 0n], { account: seller.account });
    await bragNFT.write.safeTransferFrom([seller.account.address, vault1.address, 1n], { account: seller.account });

    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault1.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault1.address));

    // Batch move
    await vault1.write.batchMove721([[bragNFT.address, bragNFT.address], [0n, 1n], vault2.address], { account: seller.account });

    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault2.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(vault2.address));
    assert.equal(await vault2.read.owner721([bragNFT.address, 0n]), getAddress(seller.account.address));
    assert.equal(await vault2.read.owner721([bragNFT.address, 1n]), getAddress(seller.account.address));
  });

  it("ExhibitVault: Should batch move ERC1155 tokens", async function () {
    const { mock1155, vault1, vault2, seller, owner } = await deployAll();

    await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });
    await mock1155.write.mint([seller.account.address, 2n, 20n], { account: owner.account });

    await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 1n, 5n, "0x"], { account: seller.account });
    await mock1155.write.safeTransferFrom([seller.account.address, vault1.address, 2n, 10n, "0x"], { account: seller.account });

    // Batch move
    await vault1.write.batchMove1155([[mock1155.address, mock1155.address], [1n, 2n], [5n, 10n], vault2.address], { account: seller.account });

    assert.equal(await mock1155.read.balanceOf([vault2.address, 1n]), 5n);
    assert.equal(await mock1155.read.balanceOf([vault2.address, 2n]), 10n);
    assert.equal(await vault2.read.balances1155([mock1155.address, 1n, seller.account.address]), 5n);
    assert.equal(await vault2.read.balances1155([mock1155.address, 2n, seller.account.address]), 10n);
  });
});
