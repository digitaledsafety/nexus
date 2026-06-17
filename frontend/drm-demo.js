// Shaka Player Integration for DRM NFT Demo
const DRM_PROXY_URL = 'http://localhost:9005/license';
const MOCK_MANIFEST = 'https://storage.googleapis.com/shaka-demo-assets/sintel-widevine/dash.mpd'; // Real manifest for player loading

let player;
let drmAuth = {
    address: '',
    message: '',
    signature: ''
};

async function initDrmDemo() {
    await window.coreReady;

    // UI Elements
    const btnDrmSiwe = document.getElementById('btnDrmSiwe');
    const btnCheckOwnership = document.getElementById('btnCheckOwnership');
    const inputTokenId = document.getElementById('inputTokenId');
    const btnPlayWithDrm = document.getElementById('btnPlayWithDrm');
    const ownershipBadge = document.getElementById('ownershipBadge');
    const drmAuthStatus = document.getElementById('drmAuthStatus');
    const drmErrorLog = document.getElementById('drmErrorLog');
    const logContent = document.getElementById('logContent');

    // Load Shaka Player library dynamically if not present
    if (typeof shaka === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.5/shaka-player.compiled.js';
        document.head.appendChild(script);
        await new Promise(r => script.onload = r);
    }

    // Initialize Shaka
    shaka.polyfill.installAll();
    if (!shaka.Player.isBrowserSupported()) {
        alert('Browser not supported for Shaka Player!');
        return;
    }

    // 1. SIWE Authorization
    btnDrmSiwe.onclick = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();

            const message = `Authorize DRM License Request\nWallet: ${address}\nTimestamp: ${Date.now()}`;
            const signature = await signer.signMessage(message);

            drmAuth = { address, message, signature };

            drmAuthStatus.innerHTML = `
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
                <span class="text-green-400 font-bold">Wallet Linked for DRM: ${address.slice(0,6)}...${address.slice(-4)}</span>
            `;
            btnDrmSiwe.innerText = "Linked Successfully";
            btnDrmSiwe.classList.replace('bg-indigo-600', 'bg-green-600');
        } catch (e) {
            console.error(e);
            alert('Authorization failed');
        }
    };

    // 2. Ownership Check (Frontend side)
    btnCheckOwnership.onclick = async () => {
        const tokenId = inputTokenId.value;
        const contractAddr = localStorage.getItem('addrLicenseNFT') || '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Localhost default

        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(contractAddr, [
                "function ownerOf(uint256 tokenId) view returns (address)"
            ], provider);

            const owner = await contract.ownerOf(tokenId);
            const userAddr = await provider.getSigner().getAddress();

            if (owner.toLowerCase() === userAddr.toLowerCase()) {
                ownershipBadge.innerText = "Verified Owner";
                ownershipBadge.classList.replace('bg-red-500/10', 'bg-green-500/10');
                ownershipBadge.classList.replace('text-red-400', 'text-green-400');
                ownershipBadge.classList.replace('border-red-500/20', 'border-green-500/20');
            } else {
                ownershipBadge.innerText = "Not Owner";
            }
        } catch (e) {
            console.error(e);
            ownershipBadge.innerText = "Token Not Found";
        }
    };

    // 3. DRM Playback Logic
    btnPlayWithDrm.onclick = async () => {
        if (!drmAuth.signature) {
            alert('Please sign authorization message first (Step 1)');
            return;
        }

        const video = document.getElementById('videoPlayer');
        const lockedOverlay = document.getElementById('playerLockedOverlay');
        const loading = document.getElementById('playerLoading');
        const tokenId = inputTokenId.value;
        const contractAddr = localStorage.getItem('addrLicenseNFT') || '0x5FbDB2315678afecb367f032d93F642f64180aa3';

        loading.classList.remove('hidden');
        drmErrorLog.classList.add('hidden');
        logContent.innerHTML = '';

        player = new shaka.Player(video);

        // Configure Networking Engine with NFT Headers
        player.getNetworkingEngine().registerRequestFilter((type, request) => {
            if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
                console.log('Injecting NFT Auth Headers into License Request');
                request.headers['x-auth-address'] = drmAuth.address;
                request.headers['x-auth-signature'] = drmAuth.signature;
                // Base64 encode the message to safely transmit through headers (new lines/special chars)
                request.headers['x-auth-message'] = btoa(drmAuth.message);
                request.headers['x-token-id'] = tokenId;
                request.headers['x-contract-address'] = contractAddr;
            }
        });

        // Configure DRM Server
        player.configure({
            drm: {
                servers: {
                    'com.widevine.alpha': DRM_PROXY_URL,
                    'org.w3.clearkey': DRM_PROXY_URL // Fallback for testing
                }
            }
        });

        try {
            await player.load(MOCK_MANIFEST);
            console.log('Manifest loaded, awaiting license authorization...');

            // In PoC, if the license request succeeds, we reveal the player.
            // Since we don't have real Widevine certificates, the decryption will still fail
            // in the CDM, but we've proven the AUTHORIZATION layer.

            lockedOverlay.classList.add('hidden');
            video.classList.remove('hidden');
        } catch (e) {
            console.error('Playback Error:', e);
            drmErrorLog.classList.remove('hidden');
            logContent.innerHTML = `[ERROR] Code: ${e.code} - ${e.message}<br><br>The DRM Proxy rejected the request or the license server is unreachable.`;
        } finally {
            loading.classList.add('hidden');
        }
    };
}

// Export to window for router
window.initDrmDemo = initDrmDemo;
