import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress, encodeAbiParameters, parseAbiParameters, toBytes } from "viem";

const Base64 = {
    encode: (bytes: Uint8Array) => Buffer.from(bytes).toString('base64'),
};

describe("Enhancements v4", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, user1, user2] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "Description"]);

    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, priceFeed, registry, vault, mock1155, owner, user1, user2 };
  }

  describe("BragNFT: Price Feed Staleness", function () {
    it("Should fail to use stale price feed and fallback if available", async function () {
      const { bragNFT, priceFeed, owner, user1 } = await deployContracts();

      // Set updatedAt to 26 hours ago
      const now = BigInt(Math.floor(Date.now() / 1000));
      const staleTime = now - (26n * 3600n);
      await priceFeed.write.setUpdatedAt([staleTime]);

      // Without manual price, usdValue should be 0
      await bragNFT.write.donate(["stale test", ""], { account: user1.account, value: parseEther("1") });
      const record1 = await bragNFT.read.taxRegistry([0n]);
      assert.equal(record1[1], 0n);

      // With manual price, it should fallback
      await bragNFT.write.setManualEthPrice([200000000000n]); // $2000
      await bragNFT.write.donate(["stale fallback", ""], { account: user1.account, value: parseEther("1") });
      const record2 = await bragNFT.read.taxRegistry([1n]);
      assert.equal(record2[1], 200000000000n);
    });
  });

  describe("BragNFT: updateMedia", function () {
    it("Should allow owner to update art media", async function () {
      const { bragNFT, user1, user2 } = await deployContracts();

      await bragNFT.write.donate(["mint", "ipfs://initial"], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      // Non-owner cannot update
      await assert.rejects(
        bragNFT.write.updateMedia([tokenId, "ipfs://new", false], { account: user2.account }),
        /Not the owner/
      );

      // Owner updates to new URI
      await bragNFT.write.updateMedia([tokenId, "ipfs://new", false], { account: user1.account });

      const uri = await bragNFT.read.tokenURI([tokenId]);
      const base64Part = uri.split(",")[1];
      const decoded1 = JSON.parse(Buffer.from(base64Part, 'base64').toString());
      assert.equal(decoded1.image, "ipfs://new");
    });
  });

  describe("BragNFT: Dynamic SVG Background", function () {
    it("Should change background color based on TaxStatus", async function () {
      const { bragNFT, owner, user1 } = await deployContracts();

      await bragNFT.write.donate(["color test", ""], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const getBgColor = async (tid: bigint) => {
        const uri = await bragNFT.read.tokenURI([tid]);
        const decoded = JSON.parse(atob(uri.split(",")[1]));
        const svg = atob(decoded.image.split(",")[1]);
        const match = svg.match(/fill="([^"]+)"/);
        return match ? match[1] : null;
      };

      assert.equal(await getBgColor(tokenId), "#6366f1"); // Pending

      await bragNFT.write.setTaxStatus([tokenId, 1]); // Verified
      assert.equal(await getBgColor(tokenId), "#22c55e");

      await bragNFT.write.setTaxStatus([tokenId, 2]); // Claimed
      assert.equal(await getBgColor(tokenId), "#eab308");

      await bragNFT.write.setTaxStatus([tokenId, 3]); // Flagged
      assert.equal(await getBgColor(tokenId), "#ef4444");
    });
  });

  describe("ExhibitVault: Batch Exhibition", function () {
    it("Should batch exhibit ERC721 with duration", async function () {
      const { bragNFT, vault, user1, owner } = await deployContracts();
      // Verify user1 as vault operator to allow passing duration via 32-byte data
      await vault.write.grantRole([await vault.read.DEFAULT_ADMIN_ROLE(), owner.account.address]);
      const registry = await viem.getContractAt("ExhibitRegistry", await vault.read.registry());
      await registry.write.verifyVault([user1.account.address, 0, "User1", "D"]);

      await bragNFT.write.donate(["n1", ""], { account: user1.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["n2", ""], { account: user1.account, value: parseEther("0.1") });

      await bragNFT.write.setApprovalForAll([vault.address, true], { account: user1.account });

      await vault.write.batchExhibit721([bragNFT.address, [0n, 1n], 3600n], { account: user1.account });

      assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(vault.address));
      assert.equal(await vault.read.owner721([bragNFT.address, 0n]), getAddress(user1.account.address));
      assert.ok(await vault.read.expiry721([bragNFT.address, 0n]) > 0n);
    });

    it("Should batch exhibit ERC1155 with duration", async function () {
        const { mock1155, vault, user1, owner } = await deployContracts();
        const registry = await viem.getContractAt("ExhibitRegistry", await vault.read.registry());
        await registry.write.verifyVault([user1.account.address, 0, "User1", "D"]);

        await mock1155.write.mint([user1.account.address, 1n, 100n], { account: owner.account });
        await mock1155.write.setApprovalForAll([vault.address, true], { account: user1.account });

        await vault.write.batchExhibit1155([mock1155.address, [1n], [50n], 3600n], { account: user1.account });

        assert.equal(await vault.read.balances1155([mock1155.address, 1n, user1.account.address]), 50n);
        assert.ok(await vault.read.expiry1155([mock1155.address, 1n, user1.account.address]) > 0n);
    });
  });

  describe("ExhibitVault: Extend Exhibition", function () {
      it("Should extend ERC721 exhibition", async function () {
          const { bragNFT, vault, user1 } = await deployContracts();
          await bragNFT.write.donate(["n1", ""], { account: user1.account, value: parseEther("0.1") });
          await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n, encodeAbiParameters(parseAbiParameters('uint256'), [3600n])], { account: user1.account });

          const expiry1 = await vault.read.expiry721([bragNFT.address, 0n]);
          await vault.write.extendExhibition721([bragNFT.address, 0n, 3600n], { account: user1.account });
          const expiry2 = await vault.read.expiry721([bragNFT.address, 0n]);

          assert.equal(expiry2 - expiry1, 3600n);
      });
  });

  describe("NFTMarketplace: Batch Reject", function () {
    it("Should batch reject offers", async function () {
      const { marketplace, bragNFT, bragToken, user1, user2, owner } = await deployContracts();

      await bragNFT.write.donate(["n1", ""], { account: owner.account, value: parseEther("0.1") });
      await bragNFT.write.donate(["n2", ""], { account: owner.account, value: parseEther("0.1") });

      await bragToken.write.transfer([user1.account.address, parseEther("100")], { account: owner.account });
      await bragToken.write.transfer([user2.account.address, parseEther("100")], { account: owner.account });

      await bragToken.write.approve([marketplace.address, parseEther("50")], { account: user1.account });
      await bragToken.write.approve([marketplace.address, parseEther("50")], { account: user2.account });

      await marketplace.write.createOffer([bragNFT.address, 0n, 1n, parseEther("50")], { account: user1.account });
      await marketplace.write.createOffer([bragNFT.address, 1n, 1n, parseEther("50")], { account: user2.account });

      await marketplace.write.batchRejectOffers([bragNFT.address, [0n, 1n], [user1.account.address, user2.account.address]], { account: owner.account });

      const offer1 = await marketplace.read.offers([bragNFT.address, 0n, user1.account.address]);
      assert.equal(offer1[0], 0n);
      const offer2 = await marketplace.read.offers([bragNFT.address, 1n, user2.account.address]);
      assert.equal(offer2[0], 0n);
    });
  });
});
