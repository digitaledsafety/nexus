/**
 * core.js - Shared infrastructure for brag.charity Frontend
 * Consolidates wallet connection, contract interaction, and shared UI logic.
 */

let provider;
let signer;
let network;
let userAddress;
let cart = [];

// Account Abstraction State
let smartAccountClient;
let scaAddress;
let isGaslessMode = false;

let resolveCoreReady;
const coreReady = new Promise(resolve => { resolveCoreReady = resolve; });

const NETWORK_NAMES = {
    1: 'Mainnet',
    11155111: 'Sepolia',
    17000: 'Holesky',
    31337: 'Hardhat Local',
    137: 'Polygon',
    8453: 'Base'
};

/**
 * Initialize core wallet logic
 */
async function initCore() {
    // 1. Pre-populate user address from storage for UI consistency
    if (localStorage.getItem('wallet_connected') === 'true') {
        userAddress = localStorage.getItem('brag_address');
    }

    // 2. Try to connect wallet (silent)
    if (localStorage.getItem('wallet_connected') === 'true') {
        await connectWallet(true);
    }

    // 3. Fallback to read-only provider if still not connected
    if (!provider) {
        try {
            // Default to local hardhat if no wallet
            provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
            network = await provider.getNetwork();
            console.log("Using read-only fallback provider on chain", network.chainId);
        } catch (e) {
            console.warn("No fallback provider available.");
        }
    }

    // 3. Initialize Cart
    initCart();

    // 4. Handle redirection for manager page if not connected
    if (window.location.hash.startsWith('#/manager') && !userAddress && localStorage.getItem('wallet_connected') !== 'true') {
        router.navigateTo('login');
    }

    initNavbarUI();
    resolveCoreReady();
}

/**
 * Initialize Alchemy Smart Contract Account (Light Account)
 */
async function initSmartAccount() {
    if (!userAddress) return;

    const scaDisp = document.getElementById('scaAddress');
    if (scaDisp) {
        scaDisp.innerText = "Connecting...";
        scaDisp.classList.add('italic');
        scaDisp.classList.remove('text-red-400');
    }

    // 1. Wait for AlchemyAA to be available (it's loaded via type="module")
    let retry = 0;
    const maxRetries = 100;
    while (!window.AlchemyAA && retry < maxRetries) {
        await new Promise(r => setTimeout(r, 100));
        retry++;
        if (retry % 10 === 0) console.log(`Waiting for AA libraries... (${retry}/${maxRetries})`);
    }

    if (!window.AlchemyAA) {
        const errorMsg = "AA Libraries not loaded. Check internet connection or esm.sh status.";
        console.error(errorMsg);
        if (scaDisp) {
            scaDisp.innerText = "Error: Libraries not loaded";
            scaDisp.classList.add('text-red-400');
        }
        return;
    }

    const configData = window.APP_CONFIG || (typeof APP_CONFIG !== 'undefined' ? APP_CONFIG : null);
    if (!configData) {
        console.error("APP_CONFIG not found.");
        if (scaDisp) scaDisp.innerText = "Error: Config missing";
        return;
    }

    try {
        if (!network || !network.chainId) {
            // Try to get network if not set
            if (provider) {
                network = await provider.getNetwork();
            }
        }

        const chainId = network?.chainId;
        if (!chainId) throw new Error("Network not detected. Please connect your wallet.");

        const baseConfig = configData.alchemy[chainId];

        // Allow UI overrides from Manager page inputs
        const uiApiKey = localStorage.getItem('alchemyApiKey');
        const uiPolicyId = localStorage.getItem('alchemyPolicyId');

        const apiKey = (uiApiKey && uiApiKey !== "") ? uiApiKey : baseConfig?.apiKey;
        const policyId = (uiPolicyId && uiPolicyId !== "") ? uiPolicyId : baseConfig?.gasPolicyId;

        if (!apiKey || apiKey === "") {
            throw new Error("Alchemy API Key missing. Please provide it in the Setup section.");
        }

        const rpcUrl = chainId === 11155111 ? `https://eth-sepolia.g.alchemy.com/v2/${apiKey}` : (baseConfig?.rpcUrl || "http://127.0.0.1:8545");

        const {
            createPublicClient, http, custom, createWalletClient,
            sepolia, localhost,
            createMultiOwnerLightAccount,
            createAlchemySmartAccountClient,
            defineAlchemyChain,
            WalletClientSigner,
            alchemy
        } = window.AlchemyAA;

        // Determine chain object for viem
        let chain = chainId === 11155111 ? sepolia : (chainId === 31337 ? { ...localhost, id: 31337 } : sepolia);

        // Augment chain for Alchemy if on Sepolia
        if (chainId === 11155111) {
            chain = defineAlchemyChain({
                chain,
                rpcBaseUrl: "https://eth-sepolia.g.alchemy.com/v2"
            });
        }

        // Create a viem wallet client from the EOA provider (MetaMask)
        const walletClient = createWalletClient({
            account: userAddress,
            chain,
            transport: custom(window.ethereum)
        });

        const signer = new WalletClientSigner(walletClient, "json-rpc");

        // Initialize the Smart Account Client
        console.log("Creating Smart Account Client for chain", chainId);

        // Ensure we are using the correct EntryPoint and Factory for Alchemy Light Account v2 (v0.7)
        const entryPointAddress = baseConfig?.entryPointAddress || "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
        const factoryAddress = baseConfig?.factoryAddress || "0x000000000019d2Ee9F2729A65AfE20bb0020AefC";

        const account = await createMultiOwnerLightAccount({
            transport: http(rpcUrl), // Use Alchemy RPC for counterfactual calculation
            chain,
            signer,
            owners: [userAddress],
            entryPointAddress,
            factoryAddress,
            version: "v2.0.0"
        });

        // Use alchemy transport for live networks to enable Gas Manager features
        // Fallback to http if alchemy transport is not available in the current SDK version
        const transport = (chainId === 31337 || apiKey === "LOCAL" || typeof alchemy !== 'function')
            ? http(rpcUrl)
            : alchemy({ apiKey });

        const clientConfig = {
            transport,
            chain,
            account,
            ...(policyId ? {
                gasManagerConfig: {
                    policyId: policyId,
                }
            } : {})
        };

        // Alchemy SDK v3 client requires apiKey or rpcUrl in the main config object
        if (apiKey && apiKey !== "LOCAL") {
            clientConfig.apiKey = apiKey;
        } else {
            clientConfig.rpcUrl = rpcUrl;
        }

        smartAccountClient = await createAlchemySmartAccountClient(clientConfig);

        scaAddress = smartAccountClient.account.address;
        console.log("Smart Account Initialized:", scaAddress);

        if (scaDisp) {
            scaDisp.innerText = scaAddress;
            scaDisp.classList.remove('italic', 'text-red-400');
            scaDisp.classList.add('text-slate-400');
        }
        document.getElementById('scaInfo')?.classList.remove('hidden');

        return smartAccountClient;
    } catch (e) {
        console.error("Smart Account Initialization Failed:", e);
        if (scaDisp) {
            scaDisp.innerText = `Error: ${e.message || "Failed to initialize"}`;
            scaDisp.classList.add('text-red-400');
        }
    }
}

/**
 * Helper to resolve IPFS URLs to a public gateway
 */
function resolveIPFS(url) {
    if (!url) return url;
    if (url.startsWith('ipfs://')) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
    return url;
}

/**
 * Common metadata parser and fetcher
 */
async function fetchMetadata(tokenURI, tokenId = null) {
    try {
        if (!tokenURI) return null;

        // Handle ERC1155 {id} substitution
        if (tokenId && tokenURI.includes('{id}')) {
            // Some contracts expect hex, some expect decimal.
            // Most modern ones/OpenSea handle both or expect hex without 0x.
            // Let's try decimal first as it's common.
            tokenURI = tokenURI.replace('{id}', tokenId);
        }

        let metadata;
        if (tokenURI.startsWith('data:application/json;base64,')) {
            const base64 = tokenURI.split(',')[1];
            metadata = JSON.parse(atob(base64));
        } else if (tokenURI.startsWith('{')) {
            metadata = JSON.parse(tokenURI);
        } else {
            // Handle external HTTP/IPFS links
            const url = resolveIPFS(tokenURI);
            const response = await fetch(url);
            metadata = await response.json();
        }

        if (metadata) {
            if (metadata.image) metadata.image = resolveIPFS(metadata.image);
            if (metadata.animation_url) metadata.animation_url = resolveIPFS(metadata.animation_url);
        }

        return metadata;
    } catch (e) {
        console.warn("Metadata fetch/parse error", e);
        return null;
    }
}

/**
 * Legacy metadata parser for Base64 JSON (sync)
 */
function parseMetadata(tokenURI) {
    try {
        if (!tokenURI) return null;
        if (tokenURI.startsWith('data:application/json;base64,')) {
            const base64 = tokenURI.split(',')[1];
            return JSON.parse(atob(base64));
        }
        // Handle raw JSON string if any
        if (tokenURI.startsWith('{')) return JSON.parse(tokenURI);
        return null;
    } catch (e) {
        console.warn("Metadata parse error", e);
        return null;
    }
}

/**
 * Connect to Web3 Wallet
 * @param {boolean} silent - If true, won't prompt for connection if not authorized
 */
async function connectWallet(silent = false) {
    if (typeof window.ethereum === 'undefined') {
        if (!silent) {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile) {
                const dappUrl = window.location.href.replace(/^https?:\/\//, '');
                window.location.href = "https://metamask.app.link/dapp/" + dappUrl;
            } else {
                alert("Web3 Wallet not found! Please install MetaMask.");
            }
        }
        return null;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send(silent ? "eth_accounts" : "eth_requestAccounts", []);

        if (accounts.length > 0) {
            signer = provider.getSigner();
            userAddress = await signer.getAddress();
            network = await provider.getNetwork();

            localStorage.setItem('wallet_connected', 'true');
            localStorage.setItem('brag_address', userAddress);

            updateWalletUI();

            // Handle Gasless initialization if already toggled on
            if (localStorage.getItem('gasless_mode') === 'true') {
                initSmartAccount();
            }

            // Event Listeners
            window.ethereum.on('accountsChanged', (newAccounts) => {
                if (newAccounts.length === 0) {
                    localStorage.removeItem('wallet_connected');
                    localStorage.removeItem('brag_address');
                }
                window.location.reload();
            });
            window.ethereum.on('chainChanged', () => window.location.reload());

            return { provider, signer, address: userAddress, network };
        }
    } catch (e) {
        console.error("Connection failed", e);
    }
    return null;
}

/**
 * Update wallet-related UI elements across pages
 */
function updateWalletUI() {
    const connectBtns = document.querySelectorAll('.btn-connect, #btnConnect, #connectBtn, #btnConnectMobile');
    const networkBadges = document.querySelectorAll('.network-badge, #networkBadge, #networkStatus');
    const addressDisplays = document.querySelectorAll('.user-address');

    if (userAddress) {
        const shortAddr = `${userAddress.substring(0, 6)}...${userAddress.substring(38)}`;
        connectBtns.forEach(btn => {
            btn.innerText = shortAddr;
            btn.classList.add('connected');
        });

        const netName = NETWORK_NAMES[network?.chainId] || 'Unknown Network';
        networkBadges.forEach(badge => {
            badge.innerText = netName;
            badge.classList.remove('hidden');
        });

        addressDisplays.forEach(disp => {
            disp.innerText = shortAddr;
            disp.classList.remove('hidden');
        });
    }
}

/**
 * Get contract instance
 */
function getContract(name, addressOverride = null) {
    const address = addressOverride || getDeploymentAddress(name);
    if (!address || !ethers.utils.isAddress(address)) {
        console.warn(`No valid address for contract ${name} on network ${network?.chainId}`);
        return null;
    }
    const contractData = CONTRACT_DATA.contracts[name];
    if (!contractData || !contractData.abi) {
        console.warn(`No ABI found for contract ${name} in CONTRACT_DATA`);
        return null;
    }
    const abi = contractData.abi;
    // Use signer if available (for writes), otherwise fallback to provider (read-only)
    return new ethers.Contract(address, abi, signer || provider);
}

/**
 * Get deployment address for current network
 */
function getDeploymentAddress(name) {
    const aliases = {
        'NFTMarketplace': 'Marketplace',
        'Marketplace': 'NFTMarketplace'
    };
    const alias = aliases[name];

    // Priority 1: localStorage overrides (from Manager)
    let override = localStorage.getItem(`addr${name}`);
    if (!override && alias) {
        override = localStorage.getItem(`addr${alias}`);
    }
    if (override && ethers.utils.isAddress(override)) return override;

    // Priority 2: CONTRACT_DATA
    if (!network) return null;
    const chainId = network.chainId.toString();
    const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];

    if (deps) {
        return deps[name] || (alias ? deps[alias] : null) || null;
    }
    return null;
}

/**
 * Shared navbar and mobile menu logic
 */
function initNavbarUI() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.onclick = () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
        };
    }

    const connectBtn = document.getElementById('btnConnect');
    if (connectBtn) {
        connectBtn.onclick = () => connectWallet();
    }

    const connectBtnMobile = document.getElementById('btnConnectMobile');
    if (connectBtnMobile) {
        connectBtnMobile.onclick = () => connectWallet();
    }
}

/**
 * Cart Logic (DRY)
 */
function initCart() {
    const saved = localStorage.getItem('brag_cart');
    if (saved) cart = JSON.parse(saved);
    updateCartUI();

    const closeCart = document.getElementById('closeCart');
    if (closeCart) closeCart.onclick = () => document.getElementById('cartSidebar')?.classList.add('translate-x-full');

    const clearCart = document.getElementById('clearCart');
    if (clearCart) clearCart.onclick = () => { cart = []; saveCart(); };

    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) cartBtn.onclick = () => document.getElementById('cartSidebar')?.classList.remove('translate-x-full');

    const checkoutBtn = document.getElementById('btnCheckout');
    if (checkoutBtn) checkoutBtn.onclick = showCheckoutModal;

    const closeCheckout = document.getElementById('closeCheckout');
    if (closeCheckout) closeCheckout.onclick = () => document.getElementById('checkoutModal')?.classList.add('hidden');

    const submitBatch = document.getElementById('btnSubmitBatchOffers');
    if (submitBatch) submitBatch.onclick = processBatchOffers;
}

function showCheckoutModal() {
    if (cart.length === 0) return alert("Your cart is empty!");
    if (!userAddress) return connectWallet();

    const modal = document.getElementById('checkoutModal');
    const list = document.getElementById('checkoutList');
    if (!modal || !list) return;

    // Close cart sidebar
    document.getElementById('cartSidebar')?.classList.add('translate-x-full');

    list.innerHTML = '';
    cart.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'flex flex-col sm:flex-row sm:items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/5';
        div.innerHTML = `
            <div class="h-20 w-20 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-800 shadow-xl">
                <img src="${item.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="flex-grow min-w-0">
                <h4 class="font-black text-lg truncate">${item.name || 'Brag NFT'}</h4>
                <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">ID: ${item.id}</p>
            </div>
            <div class="flex flex-col gap-2 min-w-[140px]">
                <label class="text-[8px] font-black text-slate-500 uppercase tracking-widest ml-1">Offer Price (BRAG)</label>
                <input type="number" step="0.1" value="1.0" class="offer-price-input bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-indigo-400 focus:border-indigo-500 outline-none transition-colors" data-idx="${idx}">
            </div>
        `;
        list.appendChild(div);
    });

    updateCheckoutTotal();

    // Add input listeners for total calculation
    list.querySelectorAll('.offer-price-input').forEach(input => {
        input.oninput = updateCheckoutTotal;
    });

    modal.classList.remove('hidden');
}

function updateCheckoutTotal() {
    const inputs = document.querySelectorAll('.offer-price-input');
    let total = 0;
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    const totalDisp = document.getElementById('checkoutTotal');
    if (totalDisp) totalDisp.textContent = total.toFixed(2);
}

async function processBatchOffers() {
    const submitBtn = document.getElementById('btnSubmitBatchOffers');
    const originalText = submitBtn.innerText;

    try {
        const inputs = document.querySelectorAll('.offer-price-input');
        const tasks = [];
        let totalRequired = ethers.BigNumber.from(0);

        inputs.forEach(input => {
            const idx = parseInt(input.dataset.idx);
            const item = cart[idx];
            const price = ethers.utils.parseEther(input.value || "0");

            if (price.gt(0)) {
                tasks.push({
                    price,
                    nftContract: item.address,
                    tokenId: item.id,
                    amount: 1
                });
                totalRequired = totalRequired.add(price);
            }
        });

        if (tasks.length === 0) return alert("Please enter valid prices for your offers.");

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';

        const marketplace = getContract('NFTMarketplace');
        const bragToken = getContract('BragToken');
        if (!marketplace || !bragToken) throw new Error("Contracts not configured.");

        const owner = isGaslessMode ? scaAddress : userAddress;

        // 1. Check Allowance
        const allowance = await bragToken.allowance(owner, marketplace.address);
        if (allowance.lt(totalRequired)) {
            alert(`Approval required for ${ethers.utils.formatEther(totalRequired)} BRAG tokens.`);
            const appTx = await txHandler(bragToken, 'approve', [marketplace.address, totalRequired], 'Approval successful');
            if (!appTx) return;
            if (appTx.wait) await appTx.wait();
        }

        // 2. Submit Offers Sequentially (Batch logic removed from contract)
        log(`Processing ${tasks.length} offers sequentially...`);
        for (const task of tasks) {
            const tx = await txHandler(marketplace, 'createOffer', [task.nftContract, task.tokenId, task.amount, task.price], `Offer for #${task.tokenId} submitted!`);
            if (tx && tx.wait) await tx.wait();
        }

        alert('All offers successfully submitted!');
        cart = [];
        saveCart();
        document.getElementById('checkoutModal')?.classList.add('hidden');
        window.location.reload();

    } catch (e) {
        console.error(e);
        alert(`Failed to submit offers: ${e.message}`);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
    }
}

function addToCart(item) {
    if (cart.find(i => i.id === item.id && i.address === item.address)) {
        alert('Item already in cart!');
        return;
    }
    cart.push(item);
    saveCart();
    // Open sidebar on add
    document.getElementById('cartSidebar')?.classList.remove('translate-x-full');
}

function saveCart() {
    localStorage.setItem('brag_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const count = document.getElementById('cartCount');
    if (count) {
        count.textContent = cart.length;
        count.classList.toggle('hidden', cart.length === 0);
    }

    const container = document.getElementById('cartItems');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p class="text-slate-500 text-center py-12 text-sm italic">Your cart is empty</p>';
        return;
    }

    container.innerHTML = '';
    cart.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'flex items-center space-x-4 bg-white/5 p-3 rounded-2xl group';
        div.innerHTML = `
            <div class="h-12 w-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                <img src="${item.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="flex-grow min-w-0">
                <p class="text-xs font-bold truncate">${item.name || 'Brag NFT'}</p>
                <p class="text-[8px] text-slate-500 font-black uppercase tracking-tighter">ID: ${item.id}</p>
            </div>
            <button class="text-slate-600 hover:text-red-400 p-2 transition-colors remove-item" aria-label="Remove item from cart">
                <i class="fas fa-trash-alt text-xs"></i>
            </button>
        `;
        div.querySelector('.remove-item').onclick = () => {
            cart.splice(idx, 1);
            saveCart();
        };
        container.appendChild(div);
    });
}


// Global initialization
window.addEventListener('DOMContentLoaded', initCore);
