import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, toFunctionSelector } from "viem";

describe("Diamond", async function () {
  const { viem } = await network.connect();

  async function deployDiamond() {
    const [owner, user] = await viem.getWalletClients();

    // 1. Deploy DiamondCutFacet
    const cutFacet = await viem.deployContract("DiamondCutFacet");

    // 2. Deploy Diamond
    const diamond = await viem.deployContract("Diamond", [
        owner.account.address,
        cutFacet.address
    ]);

    // 3. Deploy other facets
    const loupeFacet = await viem.deployContract("DiamondLoupeFacet");
    const ownershipFacet = await viem.deployContract("OwnershipFacet");
    const marketplaceFacet = await viem.deployContract("MarketplaceFacet");

    // 4. Register facets
    const diamondCut = await viem.getContractAt("IDiamondCut", diamond.address);

    const getSelectors = (abi: any) => {
        return abi
            .filter((item: any) => item.type === "function")
            .map((item: any) => toFunctionSelector(item));
    };

    const cut = [
        {
            facetAddress: loupeFacet.address,
            action: 0, // Add
            functionSelectors: getSelectors(loupeFacet.abi)
        },
        {
            facetAddress: ownershipFacet.address,
            action: 0, // Add
            functionSelectors: getSelectors(ownershipFacet.abi)
        },
        {
            facetAddress: marketplaceFacet.address,
            action: 0, // Add
            functionSelectors: getSelectors(marketplaceFacet.abi)
        }
    ];

    await diamondCut.write.diamondCut([cut, "0x0000000000000000000000000000000000000000", "0x"]);

    return { diamond, loupeFacet, ownershipFacet, marketplaceFacet, owner, user };
  }

  it("Should have all facets added", async function () {
    const { diamond, loupeFacet, ownershipFacet, marketplaceFacet } = await deployDiamond();
    const loupe = await viem.getContractAt("IDiamondLoupe", diamond.address);

    const addresses = await loupe.read.facetAddresses();
    const formattedAddresses = addresses.map(a => getAddress(a));

    assert.ok(formattedAddresses.includes(getAddress(loupeFacet.address)));
    assert.ok(formattedAddresses.includes(getAddress(ownershipFacet.address)));
    assert.ok(formattedAddresses.includes(getAddress(marketplaceFacet.address)));
  });

  it("Should allow marketplace operations via Diamond", async function () {
    const { diamond, owner, user } = await deployDiamond();
    const marketplace = await viem.getContractAt("MarketplaceFacet", diamond.address);

    // Deploy a mock NFT to test
    const bragNFT = await viem.deployContract("BragNFT", [
        owner.account.address,
        owner.account.address,
        parseEther("0.1")
    ]);

    const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
    await receipt.write.setMinter([bragNFT.address, true]);
    await bragNFT.write.setReceiptContract([receipt.address]);

    const tokenId = 0n;
    // Mint one for owner
    await bragNFT.write.donate(["test"], { value: parseEther("0.1") });

    // User creates offer
    const price = parseEther("1");
    await marketplace.write.createOffer([bragNFT.address, tokenId], {
        account: user.account,
        value: price
    });

    const offer = await marketplace.read.getOffer([bragNFT.address, tokenId]);
    assert.equal(offer.buyer, getAddress(user.account.address));
    assert.equal(offer.price, price);
  });

  it("Should restrict owner-only functions", async function () {
    const { diamond, user } = await deployDiamond();
    const marketplace = await viem.getContractAt("MarketplaceFacet", diamond.address);

    await assert.rejects(
        marketplace.write.updateRefundPeriod([3600n], { account: user.account }),
        /LibDiamond: Must be contract owner/
    );
  });
});
