import assert from "node:assert/strict";
import { describe, it } from "node:test";
import hre, { network } from "hardhat";
import { parseEther, parseUnits, getAddress } from "viem";

describe("New Batch Operations and Security Fixes", async function () {
  const { viem } = await network.connect();

  async function deployFixture() {
    const [owner, otherAccount, donor] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, parseUnits("1000000000", 18)]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.01"), "0x0000000000000000000000000000000000000000"]);
    const mockUSDC = await viem.deployContract("MockUSDC");
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, mockUSDC.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 1, "Test Vault", ""]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { bragToken, bragNFT, marketplace, mockUSDC, vault, mock1155, owner, otherAccount, donor };
  }

  describe("BragToken batchMint", function () {
    it("Should batch mint tokens", async function () {
      const { bragToken, owner, otherAccount } = await deployFixture();
      const recipients = [owner.account.address, otherAccount.account.address];
      const amounts = [parseUnits("100", 18), parseUnits("200", 18)];

      await bragToken.write.batchMint([recipients, amounts]);

      assert.equal(await bragToken.read.balanceOf([recipients[0]]), amounts[0]);
      assert.equal(await bragToken.read.balanceOf([recipients[1]]), amounts[1]);
    });
  });

  describe("NFTMarketplace Listing Security and Updates", function () {
    it("Should prevent listing update if ownership is lost", async function () {
      const { bragNFT, marketplace, owner, otherAccount } = await deployFixture();

      await bragNFT.write.setManualEthPrice([2000_00000000n]);
      await bragNFT.write.donate(["Item 1", ""], { value: parseEther("0.1") });
      await bragNFT.write.approve([marketplace.address, 0n]);

      await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseUnits("100", 6)]);

      // Transfer NFT away
      await bragNFT.write.transferFrom([owner.account.address, otherAccount.account.address, 0n]);

      // Attempt to update listing should now fail because owner no longer owns it
      await assert.rejects(
        marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseUnits("150", 6)]),
        /You do not own this NFT/
      );
    });

    it("Should allow updating private buyer", async function () {
        const { bragNFT, marketplace, owner, otherAccount } = await deployFixture();
        await bragNFT.write.setManualEthPrice([2000_00000000n]);
        await bragNFT.write.donate(["Item 1", ""], { value: parseEther("0.1") });
        await bragNFT.write.approve([marketplace.address, 0n]);

        await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseUnits("100", 6)]);

        await marketplace.write.updateListing([bragNFT.address, 0n, 1n, parseUnits("100", 6), otherAccount.account.address]);

        const listing = await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]);
        assert.equal(listing[3], getAddress(otherAccount.account.address));
    });

    it("Should batch update listings", async function () {
        const { bragNFT, marketplace, owner } = await deployFixture();
        await bragNFT.write.setManualEthPrice([2000_00000000n]);
        await bragNFT.write.donate(["Item 1", ""], { value: parseEther("0.1") });
        await bragNFT.write.donate(["Item 2", ""], { value: parseEther("0.1") });

        await bragNFT.write.approve([marketplace.address, 0n]);
        await bragNFT.write.approve([marketplace.address, 1n]);

        await marketplace.write.createListing([bragNFT.address, 0n, 1n, parseUnits("100", 6)]);
        await marketplace.write.createListing([bragNFT.address, 1n, 1n, parseUnits("100", 6)]);

        await marketplace.write.batchUpdateListings([
            [bragNFT.address, bragNFT.address],
            [0n, 1n],
            [1n, 1n],
            [parseUnits("150", 6), parseUnits("200", 6)]
        ]);

        const listing0 = await marketplace.read.listings([bragNFT.address, 0n, owner.account.address]);
        const listing1 = await marketplace.read.listings([bragNFT.address, 1n, owner.account.address]);

        assert.equal(listing0[1], parseUnits("150", 6));
        assert.equal(listing1[1], parseUnits("200", 6));
    });

    it("Should enforce amount 1 for ERC721 offers", async function () {
        const { bragNFT, marketplace, donor, mockUSDC } = await deployFixture();
        await bragNFT.write.setManualEthPrice([2000_00000000n]);
        await bragNFT.write.donate(["Item", ""], { value: parseEther("0.1") });

        await mockUSDC.write.mint([donor.account.address, parseUnits("1000", 6)]);
        await mockUSDC.write.approve([marketplace.address, parseUnits("1000", 6)], { account: donor.account });

        await assert.rejects(
            marketplace.write.createOffer([bragNFT.address, 0n, 2n, parseUnits("100", 6)], { account: donor.account }),
            /ERC721 offer must have amount 1/
        );
    });
  });

  describe("ExhibitVault batch extensions", function () {
    it("Should batch extend exhibition duration", async function () {
        const { bragNFT, vault, owner } = await deployFixture();
        await bragNFT.write.setManualEthPrice([2000_00000000n]);
        await bragNFT.write.donate(["Item 1", ""], { value: parseEther("0.1") });
        await bragNFT.write.donate(["Item 2", ""], { value: parseEther("0.1") });

        await bragNFT.write.safeTransferFrom([owner.account.address, vault.address, 0n]);
        await bragNFT.write.safeTransferFrom([owner.account.address, vault.address, 1n]);

        const duration = 3600n;
        await vault.write.batchExtendExhibition721([
            [bragNFT.address, bragNFT.address],
            [0n, 1n],
            duration
        ]);

        const expiry0 = await vault.read.expiry721([bragNFT.address, 0n]);
        const expiry1 = await vault.read.expiry721([bragNFT.address, 1n]);

        assert.ok(expiry0 > 0n);
        assert.ok(expiry1 > 0n);
    });
  });

  describe("BragNFT batch administrative updates", function () {
      it("Should batch update on-chain media", async function () {
          const { bragNFT, owner } = await deployFixture();
          await bragNFT.write.setManualEthPrice([2000_00000000n]);
          await bragNFT.write.donate(["Item 1", ""], { value: parseEther("0.1") });
          await bragNFT.write.donate(["Item 2", ""], { value: parseEther("0.1") });

          const medias = ["media1", "media2"];
          await bragNFT.write.batchUpdateOnChainMedia([
              [0n, 1n],
              medias
          ]);

          assert.equal(await bragNFT.read.onChainMedia([0n]), medias[0]);
          assert.equal(await bragNFT.read.onChainMedia([1n]), medias[1]);
      });
  });
});
