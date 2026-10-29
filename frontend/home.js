/**
 * home.js - Logic for the index.html (Home) page.
 * Uses core.js for wallet and contract interactions.
 */

let ethPrice = 0;
let selectedUsdAmount = 50; // Default

const CAUSE_NAME = "Empowering STEM Education";

async function initHome() {
    await coreReady;
    setupHomeListeners();
    await fetchEthPrice();
    await refreshHomeStats();
}

async function fetchEthPrice() {
    try {
        const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await resp.json();
        ethPrice = data.ethereum.usd;
        updateHomeConversion();
        updateDynamicRewards();
    } catch (e) {
        console.error("Failed to fetch ETH price", e);
        ethPrice = 2500; // Fallback
    }
}

async function refreshHomeStats() {
    const bragNFT = getContract('BragNFT');
    if (!bragNFT) return;

    try {
        // Supply Remaining
        const total = await bragNFT.maxSupply();
        const current = await bragNFT.totalSupply();
        const remaining = total.sub(current);

        const totalEl = document.getElementById('nftsTotal');
        const remainingEl = document.getElementById('nftsRemaining');
        if (totalEl) totalEl.innerText = total.toString();
        if (remainingEl) remainingEl.innerText = remaining.toString();

        // Raised Stats
        const treasuryAddr = await bragNFT.treasury();
        if (treasuryAddr && ethers.utils.isAddress(treasuryAddr)) {
            const balance = await provider.getBalance(treasuryAddr);
            const ethVal = parseFloat(ethers.utils.formatEther(balance));
            const usdVal = ethVal * ethPrice;

            const ethValEl = document.getElementById('totalRaisedETH');
            const usdValEl = document.getElementById('totalRaisedUSD');
            if (ethValEl) ethValEl.innerText = ethVal.toFixed(4);
            if (usdValEl) usdValEl.innerText = `$${usdVal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }

        // Contract Link
        const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/address/" : "https://etherscan.io/address/";
        const link = document.getElementById('contractLink');
        if (link) {
            link.innerText = bragNFT.address;
            link.href = explorerUrl + bragNFT.address;
        }

    } catch (e) {
        console.warn("Failed to refresh home stats", e);
    }
}

function setupHomeListeners() {
    const tierBtns = document.querySelectorAll('.tier-btn');
    tierBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
            btn.classList.add('active', 'border-indigo-500', 'bg-indigo-500/10');
            selectedUsdAmount = parseFloat(btn.dataset.usd);
            const customInput = document.getElementById('customAmount');
            if (customInput) customInput.value = '';
            updateHomeConversion();
        });
    });

    const customInput = document.getElementById('customAmount');
    if (customInput) {
        customInput.addEventListener('input', (e) => {
            tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
            selectedUsdAmount = parseFloat(e.target.value) || 0;
            updateHomeConversion();
        });
    }

    const btnDonate = document.getElementById('btnDonateETH');
    if (btnDonate) btnDonate.addEventListener('click', donateETH);
}

function updateDynamicRewards() {
    if (ethPrice > 0) {
        const bragPerEth = (ethPrice * 1000000).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
        const el = document.getElementById('bragPerEth');
        if (el) {
            el.innerText = `Earn ${bragPerEth} BRAG for every 1 ETH donated.`;
        }
    }
}

function updateHomeConversion() {
    const ethDisplay = document.getElementById('ethConversion');
    if (selectedUsdAmount > 0 && ethPrice > 0) {
        const eth = selectedUsdAmount / ethPrice;
        const ethStr = eth.toFixed(4);
        const bragAmount = (selectedUsdAmount * 1000000).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
        const ethAmountEl = document.getElementById('ethAmount');
        const bragRewardEl = document.getElementById('bragRewardAmount');
        if (ethAmountEl) ethAmountEl.innerText = ethStr;
        if (bragRewardEl) bragRewardEl.innerText = bragAmount;
        if (ethDisplay) ethDisplay.classList.remove('hidden');
    } else {
        if (ethDisplay) ethDisplay.classList.add('hidden');
    }
}

async function donateETH() {
    if (!signer) {
        await connectWallet();
        if (!signer) return;
    }

    if (selectedUsdAmount <= 0) {
        alert("Please select or enter a donation amount.");
        return;
    }

    const bragNFT = getContract('BragNFT');
    if (!bragNFT) {
        alert("BragNFT contract not found. Please check network or manager settings.");
        return;
    }

    const ethValue = ethers.utils.parseEther((selectedUsdAmount / ethPrice).toFixed(18));

    try {
        showModal("Minting in Progress", "Please confirm the transaction in your wallet and wait for blockchain confirmation.");

        const tx = await bragNFT["donate(string,string,bool)"]("Home Page Donation", "", false, { value: ethValue });
        const descEl = document.getElementById('statusDesc');
        if (descEl) descEl.innerText = "Transaction sent! Waiting for block confirmation...";

        const receipt = await tx.wait();
        handleHomeSuccess(receipt);
    } catch (e) {
        console.error(e);
        showModal("Donation Failed", e.reason || e.message || "Transaction failed.");
        const iconEl = document.getElementById('statusIcon');
        if (iconEl) {
            iconEl.innerHTML = '<i class="fas fa-times text-white"></i>';
            iconEl.classList.replace('brag-gradient', 'bg-red-500');
        }
    }
}

function showModal(title, desc) {
    const modal = document.getElementById('modalStatus');
    if (modal) modal.classList.remove('hidden');

    const titleEl = document.getElementById('statusTitle');
    if (titleEl) titleEl.innerText = title;

    const descEl = document.getElementById('statusDesc');
    if (descEl) descEl.innerText = desc;

    const iconEl = document.getElementById('statusIcon');
    if (iconEl) {
        iconEl.innerHTML = '<i class="fas fa-spinner fa-spin text-white"></i>';
        iconEl.classList.add('brag-gradient');
        iconEl.classList.remove('bg-red-500', 'bg-green-500');
    }

    const actionsEl = document.getElementById('statusActions');
    if (actionsEl) actionsEl.classList.add('hidden');
}

let lastReceipt = null;

function handleHomeSuccess(receipt) {
    lastReceipt = receipt;
    const bragAmount = (selectedUsdAmount * 1000000).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
    const titleEl = document.getElementById('statusTitle');
    if (titleEl) titleEl.innerText = "Impact Verified!";

    const descEl = document.getElementById('statusDesc');
    if (descEl) descEl.innerHTML = `Your contribution has been recorded. You've minted a unique AI NFT and received <span class="text-indigo-400 font-black">${bragAmount} BRAG</span> tokens. Thank you!`;

    const iconEl = document.getElementById('statusIcon');
    if (iconEl) {
        iconEl.innerHTML = '<i class="fas fa-check text-white"></i>';
        iconEl.classList.replace('brag-gradient', 'bg-emerald-500');
    }

    const actionsEl = document.getElementById('statusActions');
    if (actionsEl) actionsEl.classList.remove('hidden');

    const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/tx/" : "https://etherscan.io/tx/";
    const linkEl = document.getElementById('txExplorerLink');
    if (linkEl) linkEl.href = explorerUrl + receipt.transactionHash;

    const downloadBtn = document.getElementById('btnDownloadReceipt');
    if (downloadBtn) downloadBtn.onclick = generateHomePDF;

    refreshHomeStats();
}

function closeModal() {
    const modal = document.getElementById('modalStatus');
    if (modal) modal.classList.add('hidden');
}

async function generateHomePDF() {
    if (!lastReceipt || !window.jspdf) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const date = new Date().toLocaleString();

    doc.setFontSize(22);
    doc.setTextColor(99, 102, 241);
    doc.text("Official Donation Receipt", 105, 40, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139);
    doc.text(`Campaign: ${CAUSE_NAME}`, 20, 60);
    doc.text(`Organization: DESF Inc.`, 20, 70);
    doc.text(`Date: ${date}`, 20, 80);

    doc.line(20, 90, 190, 90);
    doc.text(`Donor Wallet: ${userAddress}`, 20, 105);
    doc.text(`Amount: $${selectedUsdAmount} USD equivalent`, 20, 115);
    doc.text(`Transaction: ${lastReceipt.transactionHash}`, 20, 125, { maxWidth: 160 });

    doc.setFontSize(14);
    doc.text("Thank you for your support!", 105, 160, { align: "center" });

    doc.save(`Brag_Receipt_${lastReceipt.transactionHash.substring(0, 8)}.pdf`);
}

