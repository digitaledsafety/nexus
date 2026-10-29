import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import path from "node:path";
import fs from "node:fs";
import {
    handleSummonCommand,
    mappings,
    statusCache,
    serverConfigs,
    preAuthorizations
} from "../scripts/nft-bridge.js";

describe("DOM & Bridge Sanitization Unit Tests", () => {
    describe("NFT Bridge Token ID Path Sanitization", () => {
        beforeEach(() => {
            mappings.clear();
            statusCache.clear();
            preAuthorizations.clear();
        });

        it("should sanitize path traversal sequences in tokenId during handleSummonCommand", async () => {
            const platformId = "xuid-path-test-1";
            const walletAddr = "0x1234567890123456789012345678901234567890";
            const serverId = "local-dev";
            const playerName = "SecurityTester";

            mappings.set(platformId, walletAddr);

            // Mock statusCache with a malicious token ID containing path traversal characters
            const maliciousTokenId = "../../etc/passwd";
            statusCache.set(walletAddr.toLowerCase(), {
                walletNfts: [
                    {
                        tokenId: maliciousTokenId,
                        nftContract: "0xContractAddr",
                        location: "Wallet",
                        image: "data:application/octet-stream;base64,TUNL",
                        mcstructure: true
                    }
                ],
                vaults: {}
            });

            serverConfigs[serverId] = {
                name: "Dev Server",
                vaultAddress: null,
                summonFeeBrag: "0"
            };

            const result = await handleSummonCommand(maliciousTokenId, platformId, serverId, playerName);

            assert.strictEqual(result.success, true);
            assert.ok(result.structureName);
            // Sanitized token ID should remove / and . characters
            assert.strictEqual(result.structureName, "nft_etcpasswd");

            // Verify file was written to structures directory without path traversal
            const expectedPath = path.join(
                process.cwd(),
                "addons",
                "minecraft-bedrock-addon",
                "development_behavior_packs",
                "behavior_pack_sample",
                "structures",
                "nft_etcpasswd.mcstructure"
            );

            assert.ok(fs.existsSync(expectedPath), `Sanitized file should exist at ${expectedPath}`);

            // Cleanup created test file
            if (fs.existsSync(expectedPath)) {
                fs.unlinkSync(expectedPath);
            }
        });

        it("should fallback to '0' if tokenId contains only invalid characters", async () => {
            const platformId = "xuid-path-test-2";
            const walletAddr = "0x2222222222222222222222222222222222222222";
            const serverId = "local-dev";
            const playerName = "SpecialCharTester";

            mappings.set(platformId, walletAddr);

            const invalidTokenId = "../../..";
            statusCache.set(walletAddr.toLowerCase(), {
                walletNfts: [
                    {
                        tokenId: invalidTokenId,
                        nftContract: "0xContractAddr",
                        location: "Wallet",
                        image: "data:application/octet-stream;base64,TUNL",
                        mcstructure: true
                    }
                ],
                vaults: {}
            });

            serverConfigs[serverId] = {
                name: "Dev Server",
                vaultAddress: null,
                summonFeeBrag: "0"
            };

            const result = await handleSummonCommand(invalidTokenId, platformId, serverId, playerName);

            assert.strictEqual(result.success, true);
            assert.strictEqual(result.structureName, "nft_0");

            const expectedPath = path.join(
                process.cwd(),
                "addons",
                "minecraft-bedrock-addon",
                "development_behavior_packs",
                "behavior_pack_sample",
                "structures",
                "nft_0.mcstructure"
            );

            assert.ok(fs.existsSync(expectedPath));

            if (fs.existsSync(expectedPath)) {
                fs.unlinkSync(expectedPath);
            }
        });
    });

    describe("Frontend Null Guard Verification", () => {
        it("should verify that DOM accesses in home.js, product.js, app.js, and marketplace.js are guarded", async () => {
            const homeContent = fs.readFileSync("frontend/home.js", "utf8");
            const productContent = fs.readFileSync("frontend/product.js", "utf8");
            const appContent = fs.readFileSync("frontend/app.js", "utf8");
            const marketContent = fs.readFileSync("frontend/marketplace.js", "utf8");

            // Verify home.js has guarded DOM elements
            assert.ok(homeContent.includes("const totalEl = document.getElementById('nftsTotal');"));
            assert.ok(homeContent.includes("if (totalEl) totalEl.innerText = total.toString();"));
            assert.ok(homeContent.includes("const ethAmountEl = document.getElementById('ethAmount');"));
            assert.ok(homeContent.includes("if (ethAmountEl) ethAmountEl.innerText = ethStr;"));

            // Verify product.js has guarded DOM elements
            assert.ok(productContent.includes("const loadingEl = document.getElementById('productLoading');"));
            assert.ok(productContent.includes("if (loadingEl) loadingEl.classList.add('hidden');"));
            assert.ok(productContent.includes("const nftNameEl = document.getElementById('nftName');"));
            assert.ok(productContent.includes("if (nftNameEl) nftNameEl.textContent = metadata.name || \"Unnamed NFT\";"));

            // Verify app.js has guarded treasury DOM elements
            assert.ok(appContent.includes("const balEl = document.getElementById('treasuryBalance');"));
            assert.ok(appContent.includes("if (balEl) balEl.innerText = `${ethers.utils.formatEther(balance)} ETH`;"));

            // Verify marketplace.js has guarded emptyState DOM element
            assert.ok(marketContent.includes("if (emptyState) emptyState.classList.add('hidden');"));
        });
    });
});
