/**
 * home.js - Logic for the index.html (Home) page.
 * Uses core.js for wallet and contract interactions.
 */

let ethPrice = 0;
let ethPriceAnswer = ethers.utils.parseUnits("2500", 8); // Default 8 decimals BigNumber
let selectedUsdAmount = 50; // Default

const CAUSE_NAME = "Empowering STEM Education";

async function initHome() {
    await coreReady;
    setupHomeListeners();
    await fetchEthPrice();
    await refreshHomeStats();
}

async function fetchEthPrice() {
    const bragNFT = getContract('BragNFT');
    if (bragNFT && provider) {
        try {
            const priceFeedAddr = await bragNFT.priceFeed();
            if (priceFeedAddr && priceFeedAddr !== ethers.constants.AddressZero) {
                const feedContract = new ethers.Contract(priceFeedAddr, [
                    'function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)'
                ], provider);
                const roundData = await feedContract.latestRoundData();
                if (roundData && roundData.answer && roundData.answer.gt(0)) {
                    ethPriceAnswer = roundData.answer;
                    ethPrice = parseFloat(ethers.utils.formatUnits(roundData.answer, 8));
                    updateHomeConversion();
                    updateDynamicRewards();
                    return;
                }
            }
            const manualPrice = await bragNFT.manualEthPrice();
            if (manualPrice && manualPrice.gt(0)) {
                ethPriceAnswer = manualPrice;
                ethPrice = parseFloat(ethers.utils.formatUnits(manualPrice, 8));
                updateHomeConversion();
                updateDynamicRewards();
                return;
            }
        } catch (e) {
            console.warn("Could not read price feed on-chain, falling back to CoinGecko/default", e);
        }
    }

    try {
        const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await resp.json();
        if (data && data.ethereum && data.ethereum.usd) {
            ethPrice = data.ethereum.usd;
            ethPriceAnswer = ethers.utils.parseUnits(ethPrice.toString(), 8);
            updateHomeConversion();
            updateDynamicRewards();
            return;
        }
    } catch (e) {
        console.error("Failed to fetch ETH price", e);
    }

    ethPrice = 2500; // Fallback
    ethPriceAnswer = ethers.utils.parseUnits("2500", 8);
    updateHomeConversion();
    updateDynamicRewards();
}

async function refreshHomeStats() {
    const bragNFT = getContract('BragNFT');
    if (!bragNFT) return;

    try {
        // Supply Remaining
        const total = await bragNFT.maxSupply();
        const current = await bragNFT.totalSupply();
        const remaining = total.sub(current);

        document.getElementById('nftsTotal').innerText = total.toString();
        document.getElementById('nftsRemaining').innerText = remaining.toString();

        // Raised Stats
        const treasuryAddr = await bragNFT.treasury();
        if (treasuryAddr && ethers.utils.isAddress(treasuryAddr)) {
            const balance = await provider.getBalance(treasuryAddr);
            const ethVal = parseFloat(ethers.utils.formatEther(balance));
            const usdVal = ethVal * ethPrice;

            document.getElementById('totalRaisedETH').innerText = ethVal.toFixed(4);
            document.getElementById('totalRaisedUSD').innerText = `$${usdVal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
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
            document.getElementById('customAmount').value = '';
            updateHomeConversion();
        });
    });

    document.getElementById('customAmount').addEventListener('input', (e) => {
        tierBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/10'));
        selectedUsdAmount = parseFloat(e.target.value) || 0;
        updateHomeConversion();
    });

    document.getElementById('btnDonateETH').addEventListener('click', donateETH);
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
    if (selectedUsdAmount > 0 && ethPriceAnswer && ethPriceAnswer.gt(0)) {
        try {
            const usdBN = ethers.utils.parseUnits(selectedUsdAmount.toString(), 8);
            const ethValueBN = usdBN.mul(ethers.utils.parseEther("1")).div(ethPriceAnswer);
            const ethStr = parseFloat(ethers.utils.formatEther(ethValueBN)).toFixed(6);
            const bragAmount = (selectedUsdAmount * 1000000).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
            document.getElementById('ethAmount').innerText = ethStr;
            document.getElementById('bragRewardAmount').innerText = bragAmount;
            ethDisplay.classList.remove('hidden');
        } catch (e) {
            ethDisplay.classList.add('hidden');
        }
    } else {
        ethDisplay.classList.add('hidden');
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

    // Exact BigNumber precision calculation: ethValue = (usdIn8Decimals * 1e18) / ethPriceAnswer
    const usdBN = ethers.utils.parseUnits(selectedUsdAmount.toString(), 8);
    const ethValue = usdBN.mul(ethers.utils.parseEther("1")).div(ethPriceAnswer);

    try {
        showModal("Minting in Progress", "Please confirm the transaction in your wallet and wait for blockchain confirmation.");

        const tx = await bragNFT["donate(string,string,bool)"]("Home Page Donation", "", false, { value: ethValue });
        document.getElementById('statusDesc').innerText = "Transaction sent! Waiting for block confirmation...";

        const receipt = await tx.wait();
        handleHomeSuccess(receipt);
    } catch (e) {
        console.error(e);
        showModal("Donation Failed", e.reason || e.message || "Transaction failed.");
        document.getElementById('statusIcon').innerHTML = '<i class="fas fa-times text-white"></i>';
        document.getElementById('statusIcon').classList.replace('brag-gradient', 'bg-red-500');
    }
}

function showModal(title, desc) {
    document.getElementById('modalStatus').classList.remove('hidden');
    document.getElementById('statusTitle').innerText = title;
    document.getElementById('statusDesc').innerText = desc;
    document.getElementById('statusIcon').innerHTML = '<i class="fas fa-spinner fa-spin text-white"></i>';
    document.getElementById('statusIcon').classList.add('brag-gradient');
    document.getElementById('statusIcon').classList.remove('bg-red-500', 'bg-green-500');
    document.getElementById('statusActions').classList.add('hidden');
}

let lastReceipt = null;

function handleHomeSuccess(receipt) {
    lastReceipt = receipt;
    const bragAmount = (selectedUsdAmount * 1000000).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
    document.getElementById('statusTitle').innerText = "Impact Verified!";
    document.getElementById('statusDesc').innerHTML = `Your contribution has been recorded. You've minted a unique AI NFT and received <span class="text-indigo-400 font-black">${bragAmount} BRAG</span> tokens. Thank you!`;
    document.getElementById('statusIcon').innerHTML = '<i class="fas fa-check text-white"></i>';
    document.getElementById('statusIcon').classList.replace('brag-gradient', 'bg-emerald-500');
    document.getElementById('statusActions').classList.remove('hidden');

    const explorerUrl = network?.chainId === 11155111 ? "https://sepolia.etherscan.io/tx/" : "https://etherscan.io/tx/";
    document.getElementById('txExplorerLink').href = explorerUrl + receipt.transactionHash;
    document.getElementById('btnDownloadReceipt').onclick = generateHomePDF;

    refreshHomeStats();
}

function closeModal() {
    document.getElementById('modalStatus').classList.add('hidden');
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

