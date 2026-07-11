/**
 * marketplace.js - NFT Listing and Filtering Logic
 * Uses core.js for wallet and contract interactions.
 */

async function initMarketplace() {
    await coreReady;
    // Shared cart already initialized in core.js initCore
    await loadNFTs();
}

/**
 * Load and display NFTs from the blockchain
 */
const EXTERNAL_COLLECTIONS = CONTRACT_DATA.externalCollections || [];

async function loadNFTs() {
    const nftGrid = document.getElementById('nftGrid');
    const emptyState = document.getElementById('emptyState');
    if (!nftGrid) return;

    const bragNFT = getContract('BragNFT');

    nftGrid.innerHTML = '';
    emptyState.classList.add('hidden');

    const nativeNFTPromises = [];
    const externalNFTPromises = [];

    try {
        // 1. Load native NFTs if contract exists
        if (bragNFT) {
            const filter = bragNFT.filters.Donated();
            let events = [];
            try {
                events = await bragNFT.queryFilter(filter, -50000);
            } catch (e) {
                events = await bragNFT.queryFilter(filter, 0);
            }

            const seenTokens = new Set();
            if (events.length > 0) {
                const sortedEvents = events.reverse();
                for (const event of sortedEvents) {
                    const tokenId = (event.args.nftTokenId || event.args.tokenId).toString();
                    if (seenTokens.has(tokenId)) continue;
                    seenTokens.add(tokenId);
                    nativeNFTPromises.push(renderNFTCard(bragNFT, tokenId, "Brag.Charity Native"));
                }
            }
        }

        // 2. Load external collections (only on Mainnet or if explicitly requested)
        if (network && (network.chainId === 1 || network.chainId === 11155111)) {
            for (const coll of EXTERNAL_COLLECTIONS) {
                const contract = getContract(coll.type, coll.address);
                if (!contract) {
                    console.warn(`Could not initialize contract for collection ${coll.name}`);
                    continue;
                }
                for (const tokenId of coll.tokens) {
                    externalNFTPromises.push(renderNFTCard(contract, tokenId, coll.name));
                }
            }
        }

        await Promise.allSettled([...nativeNFTPromises, ...externalNFTPromises]);

        // 3. Show empty state/demo if nothing found
        const items = nftGrid.querySelectorAll('.glass-card');
        if (items.length === 0) {
            if (!network || network.chainId !== 1) {
                renderDemoMarketCard();
            } else {
                emptyState.classList.remove('hidden');
            }
        }

    } catch (e) {
        console.error('Error loading marketplace NFTs:', e);
        if (nftGrid.querySelectorAll('.glass-card').length === 0) {
            emptyState.classList.remove('hidden');
        }
    }
}

/**
 * Render a single NFT card
 */
async function renderNFTCard(contract, tokenId, collectionName = "Impact NFT") {
    const nftGrid = document.getElementById('nftGrid');
    try {
        let tokenURI;
        if (contract.tokenURI) {
            tokenURI = await contract.tokenURI(tokenId);
        } else if (contract.uri) {
            tokenURI = await contract.uri(tokenId);
        }

        const metadata = await fetchMetadata(tokenURI, tokenId);
        if (!metadata) return;

        const card = document.createElement('div');
        card.className = 'glass-card rounded-[2rem] overflow-hidden group cursor-pointer transition-all hover:translate-y-[-8px] border-white/5 hover:border-indigo-500/30';
        card.onclick = (e) => {
            if (e.target.closest('.add-to-cart-btn')) return;
            router.navigateTo('product', `?id=${tokenId}&addr=${contract.address}`);
        };

        const animUrl = metadata.animation_url || '';
        const isAudio = animUrl.includes('audio') || animUrl.match(/\.(mp3|wav|ogg|m4a|aac)$/i);
        const isVideo = animUrl.includes('video') || animUrl.match(/\.(mp4|mov|ogv|webm|m4v)$/i);
        const isGif = animUrl.includes('image/gif') || animUrl.match(/\.gif$/i);
        const is3d = animUrl.match(/\.(glb|gltf|mcstructure)$/i);

        const isExternal = CONTRACT_DATA.externalCollections?.some(c => c.address.toLowerCase() === contract.address.toLowerCase());

        card.innerHTML = `
            <div class="aspect-square bg-slate-900 flex items-center justify-center overflow-hidden relative">
                ${isAudio
                    ? `<div class="text-center"><i class="fas fa-music text-4xl text-indigo-500 mb-2"></i></div>`
                    : (isVideo
                        ? `<div class="text-center"><i class="fas fa-video text-4xl text-indigo-500 mb-2"></i></div>`
                        : (is3d
                            ? `<div class="text-center"><i class="fas fa-cube text-4xl text-indigo-500 mb-2"></i></div>`
                            : `<img src="${isGif ? animUrl : metadata.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="this.src='https://via.placeholder.com/400?text=NFT'">`))
                }
                <div class="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <span class="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-black text-white/50 border border-white/5">#${tokenId.length > 10 ? tokenId.substring(0, 4) + '...' + tokenId.substring(tokenId.length - 4) : tokenId}</span>
                    ${isExternal ? `<span class="px-2 py-1 rounded-lg bg-indigo-500 text-white text-[8px] font-black uppercase tracking-tighter shadow-lg">Legacy Collection</span>` : ''}
                </div>
            </div>
            <div class="p-6 space-y-4">
                <div>
                    <h3 class="font-bold text-lg truncate mb-1">${metadata.name || 'Unnamed NFT'}</h3>
                    <div class="flex items-center gap-2">
                        <p class="text-slate-500 text-[10px] truncate uppercase tracking-widest font-black">${collectionName}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-white/5">
                    <div class="text-[10px] font-black uppercase tracking-widest text-indigo-400">View Details</div>
                    <button class="add-to-cart-btn w-8 h-8 rounded-full bg-white/5 hover:bg-indigo-500 text-slate-400 hover:text-white transition-colors flex items-center justify-center">
                        <i class="fas fa-cart-plus text-xs"></i>
                    </button>
                </div>
            </div>
        `;

        card.querySelector('.add-to-cart-btn').onclick = () => addToCart({
            id: tokenId,
            address: contract.address,
            name: metadata.name,
            image: metadata.image
        });

        nftGrid.appendChild(card);
    } catch (e) {
        console.warn(`Failed to render token ${tokenId}`, e);
    }
}


/**
 * Demo Card for Empty State
 */
function renderDemoMarketCard() {
    const nftGrid = document.getElementById('nftGrid');
    const card = document.createElement('div');
    card.className = 'glass-card rounded-[2rem] overflow-hidden group cursor-pointer border-white/5';
    card.innerHTML = `
        <div class="aspect-square bg-slate-900 flex items-center justify-center overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover opacity-40">
            <div class="absolute inset-0 flex items-center justify-center">
                <span class="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/50 text-[10px] font-black uppercase tracking-widest">Demo Asset</span>
            </div>
        </div>
        <div class="p-6">
            <h3 class="font-bold text-lg mb-1 italic text-slate-500">Nature Reserve #0</h3>
            <p class="text-slate-600 text-xs uppercase tracking-widest font-black">Minted by DESF</p>
        </div>
    `;
    card.onclick = () => window.location.href = 'index.html#donate';
    nftGrid.innerHTML = '';
    nftGrid.appendChild(card);
}


