import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes } from "viem";

describe("BragNFT Dual-State Model", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, treasury, recipient] = await viem.getWalletClients();

    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [registry.address]);

    // Verify vault in registry
    await registry.write.verifyVault([vault.address, 3, "Art Gallery", "Main gallery"]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 500/ETH (8 decimals)

    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        treasury.account.address,
        parseEther("0.1"),
        priceFeed.address
    ]);

    // Optional: Setup BragToken for rewards testing
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, 0n, parseEther("1000000000000")]);
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);
    await bragNFT.write.setBragToken([bragToken.address]);

    const mock1155 = await viem.deployContract("MockERC1155", []);

    return { registry, vault, bragNFT, priceFeed, bragToken, mock1155, owner, donor, treasury, recipient };
  }

  it("Should mint BragNFT and record Tax Receipt on donation", async function () {
    const { bragNFT, bragToken, donor, treasury } = await deployContracts();
    const donationAmount = parseEther("0.5");
    const message = "Generous donor";
    const tokenURI = "https://example.com/nft.json";

    const publicClient = await viem.getPublicClient();
    const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

    await bragNFT.write.donate([message, tokenURI], {
        account: donor.account,
        value: donationAmount
    });

    // 1. Check BragNFT
    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));

    // 2. Check Permanent Record (Tax Registry)
    const [originalDonor, usdValue, timestamp, status, recordMessage] = await bragNFT.read.taxRegistry([tokenId]);
    assert.equal(originalDonor, getAddress(donor.account.address));
    assert.equal(recordMessage, message);
    assert.equal(usdValue, 125000000000n);

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
    assert.equal(json.image, tokenURI);
    assert.equal(json.attributes[0].value, recordMessage);
    assert.equal(json.attributes[1].value, donor.account.address.toLowerCase());
    assert.equal(json.attributes[2].value, "Pending");

    // 2.5 Check BragToken reward
    const balance = await bragToken.read.balanceOf([donor.account.address]);
    // 1,000,000 BRAG per $1. $1250 * 1,000,000 = 1,250,000,000 BRAG
    assert.equal(balance, parseEther("1250000000"));

    // 3. Check Treasury
    const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + donationAmount);
  });

  it("Should allow BragNFT to be transferred while keeping tax record for donor", async function () {
    const { bragNFT, donor, recipient } = await deployContracts();
    await bragNFT.write.donate(["Transferable NFT", "ipfs://uri1"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    await bragNFT.write.transferFrom([donor.account.address, recipient.account.address, tokenId], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(recipient.account.address));

    // Tax record should still point to donor
    const [originalDonor] = await bragNFT.read.taxRegistry([tokenId]);
    assert.equal(originalDonor, getAddress(donor.account.address));
  });

  it("Should implement EIP-6454 isTransferable", async function () {
      const { bragNFT, donor, recipient } = await deployContracts();
      assert.equal(await bragNFT.read.isTransferable([0n, donor.account.address, recipient.account.address]), true);
  });

  it("Should implement EIP-2981 with 8% royalty", async function () {
      const { bragNFT, treasury } = await deployContracts();
      const [recipientAddress, royaltyAmount] = await bragNFT.read.royaltyInfo([0n, parseEther("1")]);
      assert.equal(recipientAddress, getAddress(treasury.account.address));
      assert.equal(royaltyAmount, parseEther("0.08"));
  });

  it("Should handle Top-up and Glowing state", async function () {
      const { bragNFT, donor, treasury } = await deployContracts();
      const publicClient = await viem.getPublicClient();
      const initialTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });

      await bragNFT.write.donate(["Glowing NFT", ""], { account: donor.account, value: parseEther("0.1") });
      const tokenId = 0n;

      assert.equal(await bragNFT.read.isGlowing([tokenId]), false);

      // Top up with $1.00 USD worth of ETH. At $2500/ETH, $1.00 is 0.0004 ETH
      const topUpAmount = parseEther("0.0004");
      await bragNFT.write.topUp([tokenId], { account: donor.account, value: topUpAmount });

      assert.equal(await bragNFT.read.isGlowing([tokenId]), true);

      const finalTreasuryBalance = await publicClient.getBalance({ address: treasury.account.address });
      assert.equal(finalTreasuryBalance, initialTreasuryBalance + parseEther("0.1") + topUpAmount);

      const uri = await bragNFT.read.tokenURI([tokenId]);
      const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());
      assert.equal(json.attributes[3].value, "Yes");

      const svg = Buffer.from(json.image.split(",")[1], "base64").toString();
      assert.ok(svg.includes('filter="url(#glow)"'), "SVG should include glow filter");
  });

  it("Should allow BragNFT to be exhibited", async function () {
    const { bragNFT, vault, donor } = await deployContracts();

    await bragNFT.write.donate(["Exhibition piece", "ipfs://uri3"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, tokenId], { account: donor.account });

    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault.address));
    assert.equal(await vault.read.owner721([bragNFT.address, tokenId]), getAddress(donor.account.address));
  });

  it("Should allow withdrawal of BragNFT from exhibit", async function () {
    const { bragNFT, vault, donor } = await deployContracts();

    await bragNFT.write.donate(["Withdrawal test", "ipfs://uri4"], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    await bragNFT.write.safeTransferFrom([donor.account.address, vault.address, tokenId], { account: donor.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(vault.address));

    await vault.write.withdraw721([bragNFT.address, tokenId], { account: donor.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));
  });

  it("Should support ERC1155 exhibition and return to owner", async function () {
    const { vault, mock1155, donor } = await deployContracts();

    const tokenId = 42n;
    const amount = 100n;
    await mock1155.write.mint([donor.account.address, tokenId, amount], { account: (await viem.getWalletClients())[0].account });

    await mock1155.write.safeTransferFrom([donor.account.address, vault.address, tokenId, amount, "0x"], { account: donor.account });

    assert.equal(await mock1155.read.balanceOf([vault.address, tokenId]), amount);
    assert.equal(await vault.read.balances1155([mock1155.address, tokenId, donor.account.address]), amount);

    await vault.write.withdraw1155([mock1155.address, tokenId, amount], { account: donor.account });
    assert.equal(await mock1155.read.balanceOf([donor.account.address, tokenId]), amount);
  });

  it("Should allow minting with an empty tokenURI and use SVG fallback", async function () {
    const { bragNFT, donor } = await deployContracts();
    const message = "No URI here";

    await bragNFT.write.donate([message, ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(donor.account.address));

    const uri = await bragNFT.read.tokenURI([tokenId]);
    const json = JSON.parse(Buffer.from(uri.split(",")[1], "base64").toString());

    assert.ok(json.image.startsWith("data:image/svg+xml;base64,"), "Image should be an SVG data URI");
    assert.equal(json.attributes[0].value, message);

    // Check SVG content for the message
    const svgBase64 = json.image.split(",")[1];
    const svg = Buffer.from(svgBase64, "base64").toString();
    assert.ok(svg.includes(message), "SVG should include the donation message");
  });

  it("Should track supply correctly", async function () {
    const { bragNFT, donor, recipient } = await deployContracts();

    assert.equal(await bragNFT.read.maxSupply(), 100n);
    assert.equal(await bragNFT.read.totalSupply(), 0n);

    await bragNFT.write.donate(["Supply test", "ipfs://uri"], {
        account: donor.account,
        value: parseEther("0.1")
    });

    assert.equal(await bragNFT.read.totalSupply(), 1n);

    await bragNFT.write.setMaxSupply([1n], { account: (await viem.getWalletClients())[0].account });
    assert.equal(await bragNFT.read.maxSupply(), 1n);

    // Should fail to donate when supply is full
    await assert.rejects(
        bragNFT.write.donate(["Fail test", "ipfs://uri"], {
            account: donor.account,
            value: parseEther("0.1")
        }),
        /Max supply reached/
    );
  });
});
