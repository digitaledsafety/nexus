import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("NFTMarketplace Approval Checks", function () {
  async function setup() {
    const { viem } = await network.connect();
    const [owner, seller] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("10000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const mockNFT = await viem.deployContract("MockRoyaltyNFT", ["Mock", "MCK"]);
    const mock1155 = await viem.deployContract("MockERC1155");

    return { viem, owner, seller, marketplace, mockNFT, mock1155 };
  }

  it("should revert createListing if ERC721 is not approved", async function () {
    const { seller, marketplace, mockNFT } = await setup();

    await mockNFT.write.mint([seller.account.address, 1n]);

    await assert.rejects(
      marketplace.write.createListing([mockNFT.address, 1n, 1n, parseEther("1")], { account: seller.account }),
      /Contract not approved to transfer NFT/
    );

    // Should work after approval
    await mockNFT.write.approve([marketplace.address, 1n], { account: seller.account });
    await marketplace.write.createListing([mockNFT.address, 1n, 1n, parseEther("1")], { account: seller.account });
  });

  it("should revert createListing if ERC1155 is not approved", async function () {
    const { owner, seller, marketplace, mock1155 } = await setup();

    await mock1155.write.mint([seller.account.address, 1n, 10n], { account: owner.account });

    await assert.rejects(
      marketplace.write.createListing([mock1155.address, 1n, 5n, parseEther("1")], { account: seller.account }),
      /Contract not approved to transfer NFT/
    );

    // Should work after approval
    await mock1155.write.setApprovalForAll([marketplace.address, true], { account: seller.account });
    await marketplace.write.createListing([mock1155.address, 1n, 5n, parseEther("1")], { account: seller.account });
  });
});
