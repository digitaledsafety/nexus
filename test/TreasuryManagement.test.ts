import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, encodeFunctionData, keccak256, toBytes } from "viem";

describe("Treasury Management", async function () {
  const { viem } = await network.connect();

  async function deployContracts() {
    const [owner, donor, buyer] = await viem.getWalletClients();

    // BragToken
    const initialSupply = parseEther("1000000");
    const bragToken = await viem.deployContract("BragToken", [owner.account.address, initialSupply, initialSupply * 2n]);

    const entryPointAddress = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPointAddress]);

    const priceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]);
    const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.1")
    , priceFeed.address]);
    const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);

    // Setup: Authorize BragNFT to mint receipts
    const MINTER_ROLE = keccak256(toBytes("MINTER_ROLE"));


    return { treasury, bragNFT, marketplace, bragToken, owner, donor, buyer };
  }

  it("Should allow donating to treasury and then withdrawing by owner", async function () {
    const { bragNFT, treasury, donor, owner } = await deployContracts();

    await bragNFT.write.donateTo([treasury.address, "For the treasury", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });

    const tokenId = 0n;
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(treasury.address));

    // Owner withdraws
    const withdrawData = encodeFunctionData({
        abi: [{
            name: 'safeTransferFrom',
            type: 'function',
            inputs: [{ name: 'from', type: 'address' }, { name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }],
            outputs: [],
        }],
        args: [treasury.address, owner.account.address, tokenId]
    });
    await treasury.write.execute([bragNFT.address, 0n, withdrawData, 0n], { account: owner.account });
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(owner.account.address));
  });

  it("Should allow administrative withdrawal of ERC20 tokens", async function () {
    const { treasury, owner, bragToken } = await deployContracts();
    const recipient = "0x000000000000000000000000000000000000dEaD";
    const amount = parseEther("50");

    // Mint some tokens to the treasury
    await bragToken.write.mint([treasury.address, amount], { account: owner.account });
    assert.equal(await bragToken.read.balanceOf([treasury.address]), amount);

    // Withdraw tokens from the treasury
    const withdrawData = encodeFunctionData({
        abi: [{
            name: 'transfer',
            type: 'function',
            inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }],
            outputs: [{ name: '', type: 'bool' }],
        }],
        args: [recipient, amount]
    });
    await treasury.write.execute([bragToken.address, 0n, withdrawData, 0n], { account: owner.account });

    assert.equal(await bragToken.read.balanceOf([treasury.address]), 0n);
    assert.equal(await bragToken.read.balanceOf([recipient]), amount);
  });

  it("Should allow buying from treasury via marketplace and treasury.execute", async function () {
    const { bragNFT, treasury, marketplace, bragToken, donor, buyer, owner } = await deployContracts();

    // Fund buyer with BragToken
    await bragToken.write.transfer([buyer.account.address, parseEther("100")], { account: owner.account });

    // 1. Mint to treasury
    await bragNFT.write.donateTo([treasury.address, "To be sold", ""], {
        account: donor.account,
        value: parseEther("0.1")
    });
    const tokenId = 0n;

    // 2. Buyer creates an offer on marketplace
    const offerPrice = parseEther("1.0");
    await bragToken.write.approve([marketplace.address, offerPrice], { account: buyer.account });
    await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, offerPrice], {
        account: buyer.account
    });

    // 3. Treasury owner approves marketplace to handle the NFT via treasury.execute
    const approveData = encodeFunctionData({
        abi: [
            {
                name: 'approve',
                type: 'function',
                inputs: [{ name: 'to', type: 'address' }, { name: 'tokenId', type: 'uint256' }],
                outputs: [],
            }
        ],
        args: [marketplace.address, tokenId]
    });
    await treasury.write.execute([bragNFT.address, 0n, approveData, 0n], { account: owner.account });

    // 4. Treasury owner accepts the offer through treasury.execute
    const acceptOfferData = encodeFunctionData({
        abi: [
            {
                name: 'acceptOffer',
                type: 'function',
                inputs: [
                    { name: 'nftContract', type: 'address' },
                    { name: 'tokenId', type: 'uint256' },
                    { name: 'buyer', type: 'address' }
                ],
                outputs: [],
            }
        ],
        args: [bragNFT.address, tokenId, buyer.account.address]
    });

    const initialTreasuryBalance = await bragToken.read.balanceOf([treasury.address]);

    await treasury.write.execute([marketplace.address, 0n, acceptOfferData, 0n], { account: owner.account });

    // 5. Verify results
    assert.equal(await bragNFT.read.ownerOf([tokenId]), getAddress(buyer.account.address));

    const finalTreasuryBalance = await bragToken.read.balanceOf([treasury.address]);
    assert.equal(finalTreasuryBalance, initialTreasuryBalance + offerPrice);
  });

  it("Should revert when proposing a batch with mismatched arrays", async function () {
    const { treasury, owner } = await deployContracts();

    const targets = [owner.account.address];
    const values = [0n, 0n]; // length 2
    const datas = ["0x"] as `0x${string}`[]; // length 1
    const nonce = 0n;

    await assert.rejects(
      treasury.write.propose([targets, values, datas, nonce], { account: owner.account }),
      /Mismatched arrays/
    );
  });
});
