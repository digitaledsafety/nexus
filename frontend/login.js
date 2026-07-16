const API_BASE = 'http://localhost:9000';

async function initLogin() {
    const btnSiwe = document.getElementById('btnSiwe');
    if (!btnSiwe) return;

    // Helper to get params from hash or query
    const getParams = () => {
        const hash = window.location.hash;
        const hashQuery = hash.includes('?') ? hash.split('?')[1] : '';
        const search = window.location.search.substring(1);
        return new URLSearchParams(hashQuery || search);
    };

    btnSiwe.onclick = async () => {
        try {
            if (!window.ethereum) {
                alert('Please install MetaMask or another Ethereum wallet.');
                return;
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const network = await provider.getNetwork();

            // 1. Prepare SIWE-like Message (Local proof of ownership)
            const domain = window.location.host;
            const origin = window.location.origin;
            const statement = 'Connect your wallet to Brag Charity.';
            const message = `${domain} wants you to connect your Ethereum account:\n${address}\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nIssued At: ${new Date().toISOString()}`;

            // 2. Sign Message
            const signature = await signer.signMessage(message);

            // 3. Store locally (instead of session-based auth)
            localStorage.setItem('wallet_connected', 'true');
            localStorage.setItem('brag_address', address);

            // Sync global Web3 state in core.js
            if (typeof connectWallet === 'function') {
                await connectWallet(true);
            }

            // 4. Handle Account Linking if token present
            const params = getParams();
            const token = params.get('token');
            if (token) {
                console.log('Attempting to link account with token:', token);
                try {
                    const linkRes = await fetch(`${API_BASE}/verify-link`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token, address, message, signature })
                    });
                    if (!linkRes.ok) {
                       const err = await linkRes.json();
                       alert('Linking failed: ' + err.error);
                    }
                } catch (e) {
                    console.error('Linking failed', e);
                    alert('Connection to bridge failed. Is it running?');
                }
            }

            router.navigateTo('manager');
        } catch (err) {
            console.error(err);
            alert('An error occurred during connection.');
        }
    };

    const params = getParams();
    const token = params.get('token');
    const linkingStatus = document.getElementById('linkingStatus');
    const displayToken = document.getElementById('displayToken');
    if (token && linkingStatus && displayToken) {
        linkingStatus.classList.remove('hidden');
        displayToken.innerText = token;
    }
}
