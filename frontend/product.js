/**
 * product.js - Individual NFT detail page logic.
 * Uses core.js for wallet and contract interactions.
 */

async function initProduct() {
    // Force address refresh from storage
    if (localStorage.getItem('wallet_connected') === 'true') {
        userAddress = localStorage.getItem('brag_address');
    }
    await coreReady;
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const urlParams = new URLSearchParams(queryString);
    const tokenId = urlParams.get('id');
    const contractAddr = urlParams.get('addr');

    if (!tokenId || !contractAddr) {
        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productError').classList.remove('hidden');
        return;
    }

    await loadProductData(contractAddr, tokenId);
}

/**
 * Fetch and display NFT data
 */
async function loadProductData(contractAddr, tokenId) {
    // Reset conditional visibility before loading new data
    const taxSection = document.getElementById('taxRecordSection');
    const topUpSection = document.getElementById('topUpSection');
    if (taxSection) taxSection.classList.add('hidden');
    if (topUpSection) topUpSection.classList.add('hidden');

    try {
        const genericNFT = getContract('IERC721', contractAddr);
        const marketplace = getContract('NFTMarketplace');
        const registry = getContract('ExhibitRegistry');

        if (!genericNFT) throw new Error("Contract not initialized");

        // Parallel fetch for better performance
        // Try tokenURI (721) then uri (1155)
        let tokenURI;
        try {
            tokenURI = await genericNFT.tokenURI(tokenId);
        } catch (e) {
            const erc1155 = getContract('IERC1155', contractAddr);
            tokenURI = await erc1155.uri(tokenId);
        }

        let owner = ethers.constants.AddressZero;
        try {
            owner = await genericNFT.ownerOf(tokenId);
        } catch (e) {
            // Might be ERC1155 or other
        }

        const metadata = await fetchMetadata(tokenURI, tokenId);
        if (!metadata) throw new Error("Metadata parse failed");

        const isNative = contractAddr.toLowerCase() === getDeploymentAddress('BragNFT')?.toLowerCase();

        // Dual-State Record & Glowing Status
        let record = null;
        let isGlowing = false;
        if (isNative) {
            try {
                const bragNFT = getContract('BragNFT');
                record = await bragNFT.taxRegistry(tokenId);
                console.log(`Original Donor: ${record.originalDonor}`);
                isGlowing = await bragNFT.isGlowing(tokenId);

                // Show/Hide sections based on state
                const taxRecordSection = document.getElementById('taxRecordSection');
                const topUpSection = document.getElementById('topUpSection');

                const currentAddr = (userAddress || localStorage.getItem('brag_address') || '').toLowerCase();
                console.log(`Current User: ${currentAddr}`);

                if (record && record.originalDonor.toLowerCase() === currentAddr) {
                    console.log("Donor match - showing tax section");
                    taxRecordSection.classList.remove('hidden');
                    document.getElementById('taxValue').textContent = `$${(parseFloat(ethers.utils.formatUnits(record.usdValue, 8))).toFixed(2)}`;
                    const statusNames = ['Pending', 'Verified', 'Claimed', 'Flagged'];
                    document.getElementById('taxStatus').textContent = statusNames[record.status] || 'Unknown';
                    document.getElementById('taxStatus').className = `badge text-[8px] ${record.status === 1 ? 'badge-verified' : ''}`;
                } else {
                    console.log("Not donor - hiding tax section");
                    taxRecordSection.classList.add('hidden');
                }

                if (topUpSection) {
                    topUpSection.classList.remove('hidden');
                }

                if (isGlowing) {
                    document.getElementById('nftImage').style.filter = 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.6))';
                }
            } catch (e) {
                console.warn("Failed to fetch dual-state record", e);
            }
        }

        // UI Injection
        document.getElementById('nftName').textContent = metadata.name || "Unnamed NFT";
        document.getElementById('breadcrumbName').textContent = metadata.name || "Asset Detail";
        document.getElementById('nftDescription').textContent = metadata.description || 'Verified impact contribution.';
        document.getElementById('dispOwner').textContent = owner === userAddress ? 'You' : (owner === ethers.constants.AddressZero ? 'Unknown' : owner);
        document.getElementById('dispContract').textContent = contractAddr;
        document.getElementById('dispTokenId').textContent = tokenId.length > 20 ? tokenId.substring(0, 8) + '...' + tokenId.substring(tokenId.length - 8) : tokenId;
        document.getElementById('dispNetwork').textContent = NETWORK_NAMES[network?.chainId] || 'Connected Network';

        // Detect Standard
        let standard = "ERC-721 Impact Asset";
        let isERC1155 = false;
        try {
            const contract = getContract('IERC165', contractAddr);
            isERC1155 = await contract.supportsInterface("0xd9b67a26");
            if (isERC1155) standard = "ERC-1155 Collection";
        } catch (e) {}
        const stdDisp = document.getElementById('dispTokenId').closest('.grid').querySelector('div:nth-child(3) p:nth-child(2)');
        if (stdDisp) stdDisp.textContent = standard;

        const messageAttr = metadata.attributes?.find(a => a.trait_type === 'Message');
        const messageDisp = document.getElementById('dispMessage');
        if (messageDisp) {
            messageDisp.textContent = messageAttr ? `"${messageAttr.value}"` : 'Impact NFT';
        }


        // Media
        const animUrl = metadata.animation_url || '';
        const isAudio = animUrl.includes('audio') || animUrl.match(/\.(mp3|wav|ogg|m4a|aac)$/i);
        const isVideo = animUrl.includes('video') || animUrl.match(/\.(mp4|mov|ogv|webm|m4v)$/i);
        const isGif = animUrl.includes('image/gif') || animUrl.match(/\.gif$/i);

        if (isAudio) {
            document.getElementById('nftImage').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            document.getElementById('audioPlayer').classList.remove('hidden');
            document.getElementById('nftAudio').src = animUrl;
        } else if (isVideo) {
            document.getElementById('nftImage').classList.add('hidden');
            document.getElementById('audioPlayer').classList.add('hidden');
            document.getElementById('videoPlayer').classList.remove('hidden');
            document.getElementById('nftVideo').src = animUrl;
        } else if (isGif) {
            document.getElementById('audioPlayer').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            document.getElementById('nftImage').classList.remove('hidden');
            document.getElementById('nftImage').src = animUrl;
        } else {
            document.getElementById('audioPlayer').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            document.getElementById('nftImage').classList.remove('hidden');
            document.getElementById('nftImage').src = metadata.image;
        }

        // Marketplace State - Find highest active offer
        if (marketplace) {
            try {
                const offerFilter = marketplace.filters.OfferCreated(contractAddr, tokenId);
                let offerEvents = [];
                try {
                    offerEvents = await marketplace.queryFilter(offerFilter, -50000);
                } catch (e) {
                    offerEvents = await marketplace.queryFilter(offerFilter, 0);
                }

                let highestOffer = { price: ethers.BigNumber.from(0), buyer: ethers.constants.AddressZero };

                // Track unique buyers to check their current offer state
                const buyers = [...new Set(offerEvents.map(e => e.args.buyer))];

                for (const buyer of buyers) {
                    const currentOffer = await marketplace.offers(contractAddr, tokenId, buyer);
                    if (currentOffer.price.gt(highestOffer.price)) {
                        highestOffer = { price: currentOffer.price, buyer: buyer };
                    }
                }

                if (highestOffer.price.gt(0)) {
                    document.getElementById('noOffer').classList.add('hidden');
                    document.getElementById('offerExists').classList.remove('hidden');
                    document.getElementById('highestOfferPrice').textContent = `${ethers.utils.formatEther(highestOffer.price)} BRAG`;
                    document.getElementById('highestOfferBuyer').textContent = `by ${highestOffer.buyer.substring(0, 6)}...${highestOffer.buyer.substring(38)}`;

                    const currentOffer = await marketplace.offers(contractAddr, tokenId, highestOffer.buyer);
                    const expiry = currentOffer.expiry.toNumber();
                    const expiryEl = document.getElementById('highestOfferExpiry');
                    if (expiry > 0) {
                        const isExpired = Date.now() / 1000 > expiry;
                        expiryEl.textContent = isExpired ? ' (Expired)' : ` - Expires ${new Date(expiry * 1000).toLocaleDateString()}`;
                        if (isExpired) expiryEl.classList.add('text-red-400');
                    } else {
                        expiryEl.textContent = ' - Never Expires';
                    }
                }
            } catch (err) {
                console.warn("Failed to load offers", err);
            }
        }

        // Vault State
        if (registry) {
            const isExhibited = await registry.isVerified(owner); // Simplified check for MVP
            if (isExhibited) document.getElementById('vaultBadge').classList.remove('hidden');
        }

        // Detect and display collection name if external
        const externalCollections = CONTRACT_DATA.externalCollections || [];
        const externalColl = externalCollections.find(c => c.address.toLowerCase() === contractAddr.toLowerCase());
        if (externalColl) {
            const collBadge = document.createElement('span');
            collBadge.className = 'px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[8px] font-black uppercase tracking-widest ml-2';
            collBadge.textContent = externalColl.name;
            document.getElementById('nftName').appendChild(collBadge);
        }

        // Buttons
        setupProductActions(contractAddr, tokenId, metadata);

        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productContent').classList.remove('hidden');

    } catch (e) {
        console.error("Product load error", e);
        document.getElementById('productLoading').classList.add('hidden');
        document.getElementById('productError').classList.remove('hidden');
    }
}

function setupProductActions(contractAddr, tokenId, metadata) {
    const isNative = contractAddr.toLowerCase() === getDeploymentAddress('BragNFT')?.toLowerCase();

    if (isNative) {
        const btnTopUp = document.getElementById('btnTopUp');
        if (btnTopUp) {
            btnTopUp.onclick = async () => {
                const bragNFT = getContract('BragNFT');
                try {
                    // Fetch ETH price from CoinGecko or fallback
                    let price = 2500;
                    try {
                        const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                        const data = await resp.json();
                        price = data.ethereum.usd;
                    } catch (e) {}

                    const ethNeeded = (1.05 / price).toFixed(6); // $1 + 5% buffer for slippage
                    const val = ethers.utils.parseEther(ethNeeded);

                    // txHandler takes care of SCA vs EOA
                    const tx = await txHandler(bragNFT, 'topUp', [tokenId, { value: val }], "Recharge successful!");
                    if (!tx) return;
                    alert("Recharge successful! Your art is now glowing.");
                    if (tx.wait) await tx.wait();
                    window.location.reload();
                } catch (e) {
                    alert("Top-up failed: " + (e.reason || e.message));
                }
            };
        }

        const btnTopUpBrag = document.getElementById('btnTopUpBrag');
        if (btnTopUpBrag) {
            btnTopUpBrag.onclick = async () => {
                const bragNFT = getContract('BragNFT');
                const bragToken = getContract('BragToken');
                const bragAmount = ethers.utils.parseEther("1000000");

                try {
                    const owner = isGaslessMode ? scaAddress : userAddress;
                    const allowance = await bragToken.allowance(owner, bragNFT.address);

                    if (allowance.lt(bragAmount)) {
                        alert('Approval required for BRAG tokens.');
                        const appTx = await txHandler(bragToken, 'approve', [bragNFT.address, bragAmount], 'Approval successful');
                        if (!appTx) return;
                        if (appTx.wait) await appTx.wait();
                    }

                    const tx = await txHandler(bragNFT, 'topUpWithBrag', [tokenId], 'Recharge successful!');
                    if (!tx) return;
                    alert("Recharge successful! Your art is now glowing.");
                    if (tx.wait) await tx.wait();
                    window.location.reload();
                } catch (e) {
                    alert("Top-up failed: " + (e.reason || e.message));
                }
            };
        }

        const btnExportTax = document.getElementById('btnExportTax');
        if (btnExportTax) {
            btnExportTax.onclick = () => {
                generateTaxPDF(tokenId, metadata);
            };
        }
    }

    document.getElementById('btnMakeOffer').onclick = async () => {
        const priceStr = document.getElementById('offerAmount').value;
        const expiryDays = parseInt(document.getElementById('offerExpiry').value);
        if (!priceStr || parseFloat(priceStr) <= 0) return alert('Enter valid BRAG price');

        const marketplace = getContract('NFTMarketplace');
        const bragToken = getContract('BragToken');
        if (!marketplace || !bragToken) return alert('Marketplace not configured on this network');

        try {
            const price = ethers.utils.parseEther(priceStr);
            const amount = 1; // Default to 1 for now
            const expiry = expiryDays > 0 ? Math.floor(Date.now() / 1000) + (expiryDays * 86400) : 0;

            // In gasless mode, the SCA is the one making the offer, so it needs the allowance.
            const owner = isGaslessMode ? scaAddress : userAddress;
            const allowance = await bragToken.allowance(owner, marketplace.address);

            if (allowance.lt(price)) {
                alert('Approval required for BRAG tokens.');
                const appTx = await txHandler(bragToken, 'approve', [marketplace.address, price], 'Approval successful');
                if (!appTx) return; // Error handled in txHandler
                if (appTx.wait) await appTx.wait();
            }

            // Use unified txHandler with 5-parameter createOffer
            const tx = await txHandler(marketplace, 'createOffer(address,uint256,uint256,uint256,uint256)', [contractAddr, tokenId, amount, price, expiry]);
            alert('Offer submitted!');
            await tx.wait();
            window.location.reload();
        } catch (e) {
            alert('Offer failed: ' + (e.reason || e.message));
        }
    };

    document.getElementById('btnAddToCart').onclick = () => {
        addToCart({
            id: tokenId,
            address: contractAddr,
            name: metadata.name,
            image: metadata.image
        });
    };
}

function generateTaxPDF(tokenId, metadata) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(99, 102, 241); // Indigo
    doc.text("brag.charity Impact Receipt", 20, 30);

    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139); // Slate-500
    doc.text("Official 2026 Donation Record - NEXUS Dual-State Collectible", 20, 40);

    doc.setDrawColor(226, 232, 240);
    doc.line(20, 45, 190, 45);

    // Details
    doc.setFontSize(14);
    doc.setTextColor(30, 41, 59); // Slate-800
    doc.text(`Asset: BragNFT #${tokenId}`, 20, 60);
    doc.text(`Donor Wallet: ${userAddress}`, 20, 70);

    const usdValue = document.getElementById('taxValue').textContent;
    doc.setFontSize(16);
    doc.text(`Verified Fair Market Value: ${usdValue} USD`, 20, 85);

    const timestamp = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Date of Export: ${timestamp}`, 20, 100);

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text("Nexus Impact Gallery | Digital Education & Safety Foundation (EIN: 00-0000000)", 20, 115);
    doc.text("The funds collected are used to support STEM education in underserved communities.", 20, 120);

    doc.text("Audit Provenance Link: " + window.location.href, 20, 135);

    doc.save(`brag-receipt-nft-${tokenId}.pdf`);
}

