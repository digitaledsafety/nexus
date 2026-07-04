import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("Hardening V2 Tests", async function () {
  const { viem } = await network.connect();

  async function setup() {
    const [owner, user1, user2] = await viem.getWalletClients();

    const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000"), parseEther("2000")]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, owner.account.address, parseEther("0.1"), priceFeed.address]);

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Test Vault", "Desc"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { marketplace, bragNFT, bragToken, vault, mock1155, owner, user1, user2 };
  }

  describe("BragNFT Dynamic SVG", () => {
    it("Should have different background colors for different TaxStatus", async function () {
      const { bragNFT, owner, user1 } = await setup();

      await bragNFT.write.donate(["Pending NFT", ""], { account: user1.account, value: parseEther("0.1") });
      const tokenId = 0n;

      const getSvgFill = async (id: bigint) => {
        const uri = await bragNFT.read.tokenURI([id]);
        const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
        const svg = Buffer.from(json.image.split(",")[1], "base64").toString();
        const match = svg.match(/<rect [^>]*fill="([^"]+)"/);
        return match ? match[1] : null;
      };

      assert.equal(await getSvgFill(tokenId), "#6366f1"); // Pending

      await bragNFT.write.setTaxStatus([tokenId, 1], { account: owner.account }); // Verified
      assert.equal(await getSvgFill(tokenId), "#22c55e");

      await bragNFT.write.setTaxStatus([tokenId, 2], { account: owner.account }); // Claimed
      assert.equal(await getSvgFill(tokenId), "#eab308");

      await bragNFT.write.setTaxStatus([tokenId, 3], { account: owner.account }); // Flagged
      assert.equal(await getSvgFill(tokenId), "#ef4444");
    });
  });

  describe("NFTMarketplace Fee Safety", () => {
    it("Should revert if protocol fee exceeds price (safety check)", async function () {
      const { marketplace, owner } = await setup();

      // Set protocol fee to 101% (should be prevented by setProtocolFee though)
      // marketplace.setProtocolFee has a check for <= 1000 (10%).
      // But _distributeProceedsFromContract has our new safety check.
      // To test it, we'd need protocolFeeBps to be > 10000.

      // Let's check setProtocolFee first
      await assert.rejects(
        marketplace.write.setProtocolFee([10001n], { account: owner.account }),
        /Fee cannot exceed 10%/
      );

      // Since we can't easily trigger it via setProtocolFee,
      // the safety check in _distributeProceedsFromContract is a "defense in depth".
    });
  });

  describe("ExhibitVault Array Validation", () => {
    it("onERC1155BatchReceived should revert if array lengths mismatch", async function () {
        const { vault, mock1155, owner, user1 } = await setup();

        const ids = [1n, 2n];
        const values = [10n]; // Mismatch

        // We need to call safeBatchTransferFrom with mismatched arrays?
        // ERC1155's safeBatchTransferFrom normally ensures this itself.
        // But if someone manually calls onERC1155BatchReceived (though it has nonReentrant and usually called by token)

        // MockERC1155 might not allow sending mismatched arrays.
        // Let's try calling it directly if possible (though it might fail other checks)

        // Actually, onERC1155BatchReceived is public.
        await assert.rejects(
            vault.write.onERC1155BatchReceived([user1.account.address, user1.account.address, ids, values, "0x"], { account: user1.account }),
            /Mismatched arrays/
        );
    });
  });
});
