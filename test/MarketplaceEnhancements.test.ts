import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getAddress, parseEther, zeroAddress } from "viem";

describe("Marketplace Enhancements", async function () {
    const { viem } = await network.connect();
    const publicClient = await viem.getPublicClient();

    async function deployFixture() {
        const [owner, seller, buyer1, buyer2] = await viem.getWalletClients();

        const entryPoint = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const treasury = await viem.deployContract("Treasury", [[owner.account.address], 1n, entryPoint]);
        const bragToken = await viem.deployContract("BragToken", [owner.account.address, parseEther("1000000"), parseEther("1000000000")]);
        const marketplace = await viem.deployContract("NFTMarketplace", [owner.account.address, bragToken.address]);
        const mockPriceFeed = await viem.deployContract("MockPriceFeed", [250000000000n]); // 2500 USD/ETH
        const bragNFT = await viem.deployContract("BragNFT", [owner.account.address, treasury.address, parseEther("0.01"), mockPriceFeed.address]);

        await bragNFT.write.setBragToken([bragToken.address]);
        const MINTER_ROLE = await bragToken.read.MINTER_ROLE();
        await bragToken.write.grantRole([MINTER_ROLE, bragNFT.address]);

        return {
            owner,
            seller,
            buyer1,
            buyer2,
            treasury,
            bragToken,
            marketplace,
            bragNFT,
            mockPriceFeed
        };
    }

    describe("Offer Expiry", async function () {
        it("should allow creating an offer with expiry", async function () {
            const { buyer1, bragToken, marketplace, bragNFT } = await deployFixture();

            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([buyer1.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer1.account });

            const expiry = BigInt(Math.floor(Date.now() / 1000) + 3600);
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: buyer1.account });

            const offer = await marketplace.read.offers([bragNFT.address, tokenId, buyer1.account.address]);
            assert.equal(offer[3], expiry);
        });

        it("should fail to accept an expired offer", async function () {
            const { owner, buyer1, bragToken, marketplace, bragNFT } = await deployFixture();

            await bragNFT.write.donate(["Impact", "uri"], { value: parseEther("0.01") });
            const tokenId = 0n;

            await bragToken.write.transfer([buyer1.account.address, parseEther("100")]);
            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer1.account });

            const currentTimestamp = BigInt(Math.floor(Date.now() / 1000));
            const expiry = currentTimestamp + 100n;
            await marketplace.write.createOffer([bragNFT.address, tokenId, 1n, parseEther("50"), expiry], { account: buyer1.account });

            // Fast forward time
            await publicClient.request({ method: "evm_increaseTime" as any, params: [200] });
            await publicClient.request({ method: "evm_mine" as any });

            await bragNFT.write.approve([marketplace.address, tokenId]);
            await assert.rejects(
                marketplace.write.acceptOffer([bragNFT.address, tokenId, buyer1.account.address]),
                /Offer expired/
            );
        });
    });

    describe("Batch Accept Offers", async function () {
        it("should allow batch accepting multiple offers", async function () {
            const { owner, seller, buyer1, buyer2, bragToken, marketplace, bragNFT } = await deployFixture();

            // Seller mints 2 NFTs
            await bragNFT.write.donateTo([seller.account.address, "NFT 1", "uri1"], { value: parseEther("0.01") });
            await bragNFT.write.donateTo([seller.account.address, "NFT 2", "uri2"], { value: parseEther("0.01") });
            const tokenId1 = 0n;
            const tokenId2 = 1n;

            // Fund buyers
            await bragToken.write.transfer([buyer1.account.address, parseEther("50")]);
            await bragToken.write.transfer([buyer2.account.address, parseEther("50")]);

            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer1.account });
            await bragToken.write.approve([marketplace.address, parseEther("50")], { account: buyer2.account });

            // Buyers make offers
            await marketplace.write.createOffer([bragNFT.address, tokenId1, 1n, parseEther("50"), 0n], { account: buyer1.account });
            await marketplace.write.createOffer([bragNFT.address, tokenId2, 1n, parseEther("50"), 0n], { account: buyer2.account });

            // Seller approves marketplace for all
            await bragNFT.write.setApprovalForAll([marketplace.address, true], { account: seller.account });

            // Seller batch accepts
            await marketplace.write.batchAcceptOffers(
                [[bragNFT.address, bragNFT.address], [tokenId1, tokenId2], [buyer1.account.address, buyer2.account.address]],
                { account: seller.account }
            );

            assert.equal(await bragNFT.read.ownerOf([tokenId1]), getAddress(buyer1.account.address));
            assert.equal(await bragNFT.read.ownerOf([tokenId2]), getAddress(buyer2.account.address));

            const sellerBalance = await bragToken.read.balanceOf([seller.account.address]);
            // 50 + 50 = 100. 8% royalty to treasury. 100 - 8 = 92.
            assert.equal(sellerBalance, parseEther("92"));
        });
    });
});
