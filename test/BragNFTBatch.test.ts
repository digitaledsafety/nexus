import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("BragNFT Batch Donations", async function () {
  const { viem } = await network.connect();

  async function deployBragNFTFixture() {
    const [owner, donor, recipient1, recipient2, treasury] = await viem.getWalletClients();

    const priceFeed = await viem.deployContract("MockPriceFeed", [200000000000n]); // $2000 ETH

    const bragNFT = await viem.deployContract("BragNFT", [
      owner.account.address,
      treasury.account.address,
      parseEther("0.01"), // $20 min donation
      priceFeed.address,
    ]);

    const bragToken = await viem.deployContract("BragToken", [
      owner.account.address,
      0n,
      parseEther("1000000000"),
    ]);

    await bragNFT.write.setBragToken([bragToken.address]);
    await bragToken.write.grantRole([keccak256(toBytes("MINTER_ROLE")), bragNFT.address]);

    return { bragNFT, bragToken, donor, recipient1, recipient2, treasury };
  }

  it("Should mint multiple NFTs in a batch", async function () {
    const { bragNFT, donor, recipient1, recipient2, treasury } = await deployBragNFTFixture();

    const recipients = [recipient1.account.address, recipient2.account.address];
    const messages = ["Batch 1", "Batch 2"];
    const media = ["uri1", "uri2"];
    const onChain = [false, false];

    const totalValue = parseEther("0.04"); // $80 total, $40 each

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.donateBatch([recipients, messages, media, onChain], {
      account: donor.account,
      value: totalValue,
    });

    assert.equal(await bragNFT.read.nextTokenId(), 2n);
    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(recipient1.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(recipient2.account.address));

    const record0 = await bragNFT.read.taxRegistry([0n]);
    assert.equal(record0[4], "Batch 1");
    assert.equal(record0[0], getAddress(donor.account.address));

    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance - initialTreasuryBalance, totalValue);
  });

  it("Should fail if total donation is insufficient", async function () {
    const { bragNFT, donor, recipient1, recipient2 } = await deployBragNFTFixture();

    const recipients = [recipient1.account.address, recipient2.account.address];
    const messages = ["Fail 1", "Fail 2"];
    const media = ["", ""];
    const onChain = [false, false];

    await assert.rejects(
      bragNFT.write.donateBatch([recipients, messages, media, onChain], {
        account: donor.account,
        value: parseEther("0.01"), // Only enough for one
      }),
      /Total donation below minimum/
    );
  });
});
