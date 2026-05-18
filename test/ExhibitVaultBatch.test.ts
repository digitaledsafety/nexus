import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("ExhibitVault Batch Operations", async function () {
  const { viem } = await network.connect();

  async function deployVault() {
    const [owner, user] = await viem.getWalletClients();
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);
    const mock1155 = await viem.deployContract("MockERC1155", []);

    await registry.write.verifyVault([vault.address, 1, "Main Vault", "Testing"]);

    return { vault, mock1155, registry, owner, user };
  }

  it("Should withdrawBatch1155", async function () {
    const { vault, mock1155, user, owner } = await deployVault();

    const ids = [1n, 2n, 3n];
    const amounts = [10n, 20n, 30n];

    for (let i = 0; i < ids.length; i++) {
        await mock1155.write.mint([user.account.address, ids[i], amounts[i]], { account: owner.account });
    }
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });

    // Exhibit batch
    await mock1155.write.safeBatchTransferFrom([user.account.address, vault.address, ids, amounts, "0x"], { account: user.account });

    // Check balances in vault
    for (let i = 0; i < ids.length; i++) {
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], user.account.address]), amounts[i]);
    }

    // Withdraw batch
    await vault.write.withdrawBatch1155([mock1155.address, ids, amounts], { account: user.account });

    // Check balances in user wallet
    for (let i = 0; i < ids.length; i++) {
        assert.equal(await mock1155.read.balanceOf([user.account.address, ids[i]]), amounts[i]);
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], user.account.address]), 0n);
    }
  });

  it("Should moveBatch1155", async function () {
    const { vault, mock1155, registry, owner, user } = await deployVault();
    const destVault = await viem.deployContract("ExhibitVault", [registry.address]);
    await registry.write.verifyVault([destVault.address, 1, "Dest Vault", "Testing"]);

    const ids = [1n, 2n];
    const amounts = [100n, 200n];
    await mock1155.write.mint([user.account.address, ids[0], amounts[0]], { account: owner.account });
    await mock1155.write.mint([user.account.address, ids[1], amounts[1]], { account: owner.account });
    await mock1155.write.setApprovalForAll([vault.address, true], { account: user.account });

    await mock1155.write.safeBatchTransferFrom([user.account.address, vault.address, ids, amounts, "0x"], { account: user.account });

    // Move batch
    await vault.write.moveBatch1155([mock1155.address, ids, amounts, destVault.address], { account: user.account });

    // Check balances in destVault
    for (let i = 0; i < ids.length; i++) {
        assert.equal(await destVault.read.balances1155([mock1155.address, ids[i], user.account.address]), amounts[i]);
        assert.equal(await vault.read.balances1155([mock1155.address, ids[i], user.account.address]), 0n);
    }
  });
});
