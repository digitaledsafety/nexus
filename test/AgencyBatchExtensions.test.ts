import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, keccak256, toBytes, encodeAbiParameters, parseAbiParameters } from "viem";

describe("Agency Batch Extensions", async function () {
  const { viem } = await network.connect();

  async function deployAll() {
    const [owner, user1, user2, treasuryOwner1, treasuryOwner2] = await viem.getWalletClients();

    // Deploy Treasury with 2 owners and threshold 2
    const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[treasuryOwner1.account.address, treasuryOwner2.account.address], 2n, entryPoint]);

    // Use a large max supply to avoid Exceeds maxSupply error
    const initialSupply = parseEther("10000000");
    const maxSupply = initialSupply * 1000000n;
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, maxSupply]);
    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // $2500 ETH
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.1"), priceFeed.address]);

    // Grant MINTER_ROLE on the BragToken contract to the BragNFT contract address during setup as required by instructions
    const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
    await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address], { account: owner.account });
    await bragNFT.write.setBragToken([bragToken.address], { account: owner.account });

    // Marketplace
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Registry & Vault
    const registry = await viem.deployContract("ExhibitRegistry", [owner.account.address]);
    const vault = await viem.deployContract("ExhibitVault", [owner.account.address, registry.address]);
    await registry.write.verifyVault([vault.address, 0, "Main Vault", "Desc"]);

    const mock1155 = await viem.deployContract("MockERC1155");

    return { treasury, bragToken, bragNFT, marketplace, vault, registry, mock1155, owner, user1, user2, treasuryOwner1, treasuryOwner2 };
  }

  it("should support batchDonateTo and batchUpdateListings", async function () {
    const { bragNFT, marketplace, user1, user2 } = await deployAll();

    // 1. batchDonateTo recipient
    const messages = ["Gift 1", "Gift 2"];
    const mediaUrls = ["", ""];
    const onChain = [false, false];

    await bragNFT.write.batchDonateTo([user2.account.address, messages, mediaUrls, onChain], { account: user1.account, value: parseEther("0.2") });

    assert.equal(await bragNFT.read.ownerOf([0n]), getAddress(user2.account.address));
    assert.equal(await bragNFT.read.ownerOf([1n]), getAddress(user2.account.address));

    // 2. batchCreateListings
    await bragNFT.write.approve([marketplace.address, 0n], { account: user2.account });
    await bragNFT.write.approve([marketplace.address, 1n], { account: user2.account });

    await marketplace.write.batchCreateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("10"), parseEther("15")]
    ], { account: user2.account });

    const l0 = await marketplace.read.listings([bragNFT.address, 0n, user2.account.address]);
    assert.equal(l0[1], parseEther("10")); // price

    // 3. batchUpdateListings
    await marketplace.write.batchUpdateListings([
        [bragNFT.address, bragNFT.address],
        [0n, 1n],
        [1n, 1n],
        [parseEther("20"), parseEther("25")]
    ], { account: user2.account });

    const l0Updated = await marketplace.read.listings([bragNFT.address, 0n, user2.account.address]);
    const l1Updated = await marketplace.read.listings([bragNFT.address, 1n, user2.account.address]);

    assert.equal(l0Updated[1], parseEther("20"));
    assert.equal(l1Updated[1], parseEther("25"));
  });

  it("should support ExhibitVault batchExtendExhibition721 and batchExtendExhibition1155", async function () {
    const { bragNFT, mock1155, vault, user1, owner } = await deployAll();

    // Mint 2 ERC721
    await bragNFT.write.donate(["E1", ""], { account: user1.account, value: parseEther("0.1") });
    await bragNFT.write.donate(["E2", ""], { account: user1.account, value: parseEther("0.1") });

    // Safe transfer 2 ERC721 to vault with duration 3600
    const duration = 3600n;
    const data = encodeAbiParameters(parseAbiParameters('uint256'), [duration]);
    await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 0n, data], { account: user1.account });
    await bragNFT.write.safeTransferFrom([user1.account.address, vault.address, 1n, data], { account: user1.account });

    const expiry0Before = await vault.read.expiry721([bragNFT.address, 0n]);
    const expiry1Before = await vault.read.expiry721([bragNFT.address, 1n]);

    // Batch extend
    await vault.write.batchExtendExhibition721([[bragNFT.address, bragNFT.address], [0n, 1n], 1800n], { account: user1.account });

    assert.equal(await vault.read.expiry721([bragNFT.address, 0n]), expiry0Before + 1800n);
    assert.equal(await vault.read.expiry721([bragNFT.address, 1n]), expiry1Before + 1800n);

    // ERC1155 Batch extend
    await mock1155.write.mint([user1.account.address, 5n, 10n], { account: owner.account });
    await mock1155.write.mint([user1.account.address, 6n, 20n], { account: owner.account });

    await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 5n, 5n, data], { account: user1.account });
    await mock1155.write.safeTransferFrom([user1.account.address, vault.address, 6n, 10n, data], { account: user1.account });

    const exp5Before = await vault.read.expiry1155([mock1155.address, 5n, user1.account.address]);
    const exp6Before = await vault.read.expiry1155([mock1155.address, 6n, user1.account.address]);

    await vault.write.batchExtendExhibition1155([[mock1155.address, mock1155.address], [5n, 6n], 1200n], { account: user1.account });

    assert.equal(await vault.read.expiry1155([mock1155.address, 5n, user1.account.address]), exp5Before + 1200n);
    assert.equal(await vault.read.expiry1155([mock1155.address, 6n, user1.account.address]), exp6Before + 1200n);
  });

  it("should support Treasury batchApprove and batchCancel", async function () {
    const { treasury, user1, treasuryOwner1, treasuryOwner2 } = await deployAll();

    // Create 2 proposals
    // Proposer auto-approves, approvalCount starts at 1
    const targets = [user1.account.address];
    const values = [0n];
    const datas = ["0x" as `0x${string}`];

    await treasury.write.propose([targets, values, datas, 0n], { account: treasuryOwner1.account });
    await treasury.write.propose([targets, values, datas, 0n], { account: treasuryOwner1.account });

    assert.equal(await treasury.read.proposalCount(), 2n);

    const prop0Before = await treasury.read.getProposal([0n]);
    const prop1Before = await treasury.read.getProposal([1n]);
    assert.equal(prop0Before[6], 1n); // approvalCount
    assert.equal(prop1Before[6], 1n); // approvalCount

    // 1. batchApprove by treasuryOwner2
    await treasury.write.batchApprove([[0n, 1n], [0n, 0n]], { account: treasuryOwner2.account });

    const prop0After = await treasury.read.getProposal([0n]);
    const prop1After = await treasury.read.getProposal([1n]);
    assert.equal(prop0After[6], 2n); // approvalCount met
    assert.equal(prop1After[6], 2n); // approvalCount met

    // 2. batchCancel (requires creating new proposals first to cancel them)
    await treasury.write.propose([targets, values, datas, 0n], { account: treasuryOwner1.account });
    await treasury.write.propose([targets, values, datas, 0n], { account: treasuryOwner1.account });

    assert.equal(await treasury.read.proposalCount(), 4n);

    await treasury.write.batchCancel([[2n, 3n], [0n, 0n]], { account: treasuryOwner1.account });

    const prop2 = await treasury.read.getProposal([2n]);
    const prop3 = await treasury.read.getProposal([3n]);

    assert.equal(prop2[4], true); // canceled
    assert.equal(prop3[4], true); // canceled
  });
});
