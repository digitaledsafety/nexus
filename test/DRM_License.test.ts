import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("LicenseNFT", function () {
  async function setup() {
    const { viem } = await network.connect();
    const [owner, otherAccount] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    const licenseNft = await viem.deployContract("LicenseNFT", [owner.account.address]);

    return { viem, licenseNft, owner, otherAccount, publicClient };
  }

  it("Should mint a license to an account", async function () {
    const { licenseNft, otherAccount } = await setup();

    const otherAddr = otherAccount.account.address;
    await licenseNft.write.mintLicense([otherAddr, "CONTENT_123"]);

    assert.equal(await licenseNft.read.balanceOf([otherAddr]), 1n);
    const ownerOf = await licenseNft.read.ownerOf([0n]);
    assert.equal(ownerOf.toLowerCase(), otherAddr.toLowerCase());
    assert.equal(await licenseNft.read.contentIds([0n]), "CONTENT_123");
  });

  it("Should only allow owner to mint", async function () {
    const { licenseNft, otherAccount } = await setup();

    await assert.rejects(
      licenseNft.write.mintLicense([otherAccount.account.address, "CONTENT_123"], {
        account: otherAccount.account,
      }),
      /OwnableUnauthorizedAccount/
    );
  });

  it("Should allow updating contentId by owner", async function () {
    const { licenseNft, owner } = await setup();

    await licenseNft.write.mintLicense([owner.account.address, "CONTENT_1"]);
    await licenseNft.write.setContentId([0n, "CONTENT_2"]);

    assert.equal(await licenseNft.read.contentIds([0n]), "CONTENT_2");
  });
});
