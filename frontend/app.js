/**
 * app.js - Admin Manager Logic
 * Uses core.js for shared Web3 functionality.
 */

const logElement = document.getElementById('logs');

function log(message, type = 'info') {
    if (!logElement) return;
    const div = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString();
    div.className = type === 'error' ? 'text-red-400' : (type === 'success' ? 'text-emerald-400' : 'text-slate-400');
    div.innerHTML = `<span class="text-slate-600 mr-2">[${timestamp}]</span> ${message}`;
    logElement.appendChild(div);
    logElement.scrollTop = logElement.scrollHeight;
}

// Persistent addresses logic for Admin
const addressFields = ['addrBragNFT', 'addrExhibitRegistry', 'addrNFTMarketplace', 'addrTreasury'];

function setupManagerListeners() {
    // Gasless Toggle Logic
    const toggleGasless = document.getElementById('toggleGasless');
    const gaslessConfig = document.getElementById('gaslessConfig');
    const alchemyApiKeyInput = document.getElementById('alchemyApiKey');
    const alchemyPolicyIdInput = document.getElementById('alchemyPolicyId');

    if (toggleGasless) {
        isGaslessMode = localStorage.getItem('gasless_mode') === 'true';
        toggleGasless.checked = isGaslessMode;

        // Load saved Alchemy credentials
        if (alchemyApiKeyInput) alchemyApiKeyInput.value = localStorage.getItem('alchemyApiKey') || '';
        if (alchemyPolicyIdInput) alchemyPolicyIdInput.value = localStorage.getItem('alchemyPolicyId') || '';

        if (isGaslessMode) {
            document.getElementById('scaInfo')?.classList.remove('hidden');
            gaslessConfig?.classList.remove('hidden');
        }

        toggleGasless.onchange = async (e) => {
            isGaslessMode = e.target.checked;
            localStorage.setItem('gasless_mode', isGaslessMode);

            if (isGaslessMode) {
                log('Initializing Gasless Mode...');
                document.getElementById('scaInfo')?.classList.remove('hidden');
                gaslessConfig?.classList.remove('hidden');
                await initSmartAccount();
                log('Gasless Mode Active', 'success');
            } else {
                document.getElementById('scaInfo')?.classList.add('hidden');
                gaslessConfig?.classList.add('hidden');
                log('Gasless Mode Disabled');
            }
        };

        if (alchemyApiKeyInput) {
            alchemyApiKeyInput.onchange = async (e) => {
                localStorage.setItem('alchemyApiKey', e.target.value);
                if (isGaslessMode && e.target.value) {
                    log('API Key updated, re-initializing Smart Account...');
                    await initSmartAccount();
                }
            };
        }

        if (alchemyPolicyIdInput) {
            alchemyPolicyIdInput.onchange = async (e) => {
                localStorage.setItem('alchemyPolicyId', e.target.value);
                if (isGaslessMode && e.target.value) {
                    log('Policy ID updated, re-initializing Smart Account...');
                    await initSmartAccount();
                }
            };
        }
    }

    addressFields.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        // Load saved value
        let saved = localStorage.getItem(id);
        if (!saved && id === 'addrNFTMarketplace') saved = localStorage.getItem('addrMarketplace');
        if (saved) el.value = saved;

        // Save on any change (input or change event)
        const saver = (e) => {
            localStorage.setItem(id, e.target.value);
            if (id === 'addrNFTMarketplace') localStorage.setItem('addrMarketplace', e.target.value);

            // Sync with any hidden explorer fields if they exist
            const contractName = id.replace('addr', '');
            const explorerInput = document.getElementById(`explorerAddr_${contractName}`);
            if (explorerInput) explorerInput.value = e.target.value;

            if (id === 'addrTreasury') refreshTreasuryInfo();
        };

        el.addEventListener('change', saver);
        el.addEventListener('input', saver);
    });

    // File Upload Logic
    const btnUpload = document.getElementById('btnUpload');
    if (btnUpload) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,audio/*,video/*';
        btnUpload.onclick = () => fileInput.click();

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('mintTokenURI').value = event.target.result;
                document.getElementById('mintOnChain').checked = true;
                log(`File loaded as Data URI. On-chain storage selected.`, 'success');
                document.getElementById('aiPreview').classList.add('hidden');
            };
            reader.readAsDataURL(file);
        };
    }

    const btnAI = document.getElementById('btnGenerateAI');
    if (btnAI) {
        btnAI.onclick = async () => {
            const mintTokenURI = document.getElementById('mintTokenURI');
            const mintOnChain = document.getElementById('mintOnChain');
            const preview = document.getElementById('aiPreview');
            const previewImg = document.getElementById('aiPreviewImg');

            try {
                btnAI.disabled = true;
                const originalHtml = btnAI.innerHTML;
                btnAI.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                log('Requesting AI NFT generation...');

                const response = await fetch('http://localhost:9000/generate-nft', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) throw new Error('AI Generation failed');
                const data = await response.json();

                if (mintTokenURI) mintTokenURI.value = data.image;
                if (mintOnChain) mintOnChain.checked = true;

                if (previewImg) previewImg.src = data.image;
                if (preview) preview.classList.remove('hidden');

                log(`AI Image generated!`, 'success');
            } catch (error) {
                log(`AI Generation error: ${error.message}`, 'error');
            } finally {
                btnAI.disabled = false;
                btnAI.innerHTML = '<i class="fas fa-robot"></i>';
            }
        };
    }

    const btnMint = document.getElementById('btnMint');
    if (btnMint) {
        btnMint.onclick = async () => {
            const addrEl = document.getElementById('addrBragNFT');
            const amountEl = document.getElementById('mintAmount');
            const messageEl = document.getElementById('mintMessage');
            const tokenURIEl = document.getElementById('mintTokenURI');
            const onChainEl = document.getElementById('mintOnChain');

            if (!addrEl || !amountEl) return log('Required fields missing', 'error');

            const addr = addrEl.value;
            const amount = amountEl.value;
            const message = messageEl ? messageEl.value : "";
            const tokenURI = tokenURIEl ? tokenURIEl.value : "";
            const onChain = onChainEl ? onChainEl.checked : false;

            try {
                const contract = getAdminContract('BragNFT', addr);
                const val = ethers.utils.parseEther(amount);

                // Max gas if huge file
                let gasOverride = null;
                if (onChain && tokenURI.length > 50000) {
                    gasOverride = BigInt(APP_CONFIG.gasLimits.hugeCalldataGasLimit);
                    log(`Large file detected (${Math.round(tokenURI.length/1024)}KB). Applying gas limit override: ${gasOverride.toString()}`);
                }

                await txHandler(
                    contract,
                    "donate(string,string,bool)",
                    [message, tokenURI, onChain, { value: val }],
                    'NFT Minted',
                    gasOverride
                );
            } catch (e) {
                log(e.message, 'error');
            }
        };
    }

    const btnDeployVault = document.getElementById('btnDeployVault');
    if (btnDeployVault) {
        btnDeployVault.onclick = async () => {
            try {
                if (isGaslessMode) {
                    throw new Error("Contract deployment not yet supported in Gasless mode via Manager. Use standard mode.");
                }

                const factory = new ethers.ContractFactory(
                    CONTRACT_DATA.contracts.ExhibitVault.abi,
                    CONTRACT_DATA.contracts.ExhibitVault.bytecode,
                    signer
                );
                const registry = document.getElementById('addrExhibitRegistry').value;

                log('Deploying ExhibitVault...');
                const contract = await factory.deploy(registry);
                await contract.deployed();
                log(`ExhibitVault deployed at: ${contract.address}`, 'success');
                document.getElementById('regVaultAddr').value = contract.address;
            } catch (error) {
                log(`Deployment failed: ${error.message}`, 'error');
            }
        };
    }

    const btnRegisterVault = document.getElementById('btnRegisterVault');
    if (btnRegisterVault) {
        btnRegisterVault.onclick = async () => {
            const addr = document.getElementById('addrExhibitRegistry').value;
            const vault = document.getElementById('regVaultAddr').value;
            const contract = getAdminContract('ExhibitRegistry', addr);
            await txHandler(contract, 'verifyVault', [vault, 0, "Managed Vault", "Registry via Manager"], 'Vault Registered');
        };
    }

    const btnAutofill = document.getElementById('btnAutofill');
    if (btnAutofill) {
        btnAutofill.onclick = () => {
            if (!network) return log('Connect wallet first', 'error');
            const chainId = network.chainId.toString();
            const deps = CONTRACT_DATA.deployments[chainId] || CONTRACT_DATA.deployments[`chain-${chainId}`];
            if (deps) {
                Object.entries(deps).forEach(([name, addr]) => {
                    let fieldId = `addr${name}`;
                    // Special mapping for Marketplace alias
                    if (name === 'Marketplace' || name === 'NFTMarketplace') {
                        fieldId = 'addrNFTMarketplace';
                    }

                    const field = document.getElementById(fieldId);
                    if (field) {
                        field.value = addr;
                        localStorage.setItem(fieldId, addr);
                        if (fieldId === 'addrNFTMarketplace') {
                            localStorage.setItem('addrMarketplace', addr);
                        }
                    }
                });
                log('Addresses pre-filled from deployment data', 'success');
                refreshTreasuryInfo();
            }
        };
    }
}

/**
 * Get Admin contract instance (with signer for writing)
 */
function getAdminContract(name, addressOverride = null) {
    const address = addressOverride || getDeploymentAddress(name);
    if (!address || !ethers.utils.isAddress(address)) {
        throw new Error(`Invalid address for ${name}`);
    }
    return new ethers.Contract(address, CONTRACT_DATA.contracts[name].abi, signer || provider);
}

/**
 * Unified Transaction Handler
 * Routes through EOA (ethers) or SCA (viem/aa-sdk) depending on mode.
 */
async function txHandler(contractOrTarget, functionNameOrData, argsOrValue = [], successMsg = "Success", gasOverride = null) {
    try {
        if (isGaslessMode && smartAccountClient) {
            log('Sending Gasless UserOperation...');

            let target, data, value = 0n;

            if (typeof contractOrTarget === 'string') {
                // Raw call
                target = contractOrTarget;
                data = functionNameOrData;
                value = BigInt(argsOrValue?.value?.toString() || 0);
            } else {
                // Ethers contract instance
                target = contractOrTarget.address;

                // Separate arguments from overrides (like {value: ...})
                let encodedArgs = argsOrValue;
                const lastArg = argsOrValue[argsOrValue.length - 1];
                if (lastArg && typeof lastArg === 'object' && (lastArg.value || lastArg.gasLimit)) {
                    if (lastArg.value) value = BigInt(lastArg.value.toString());
                    encodedArgs = argsOrValue.slice(0, -1);
                }

                // Encode using ethers
                data = contractOrTarget.interface.encodeFunctionData(functionNameOrData, encodedArgs);
            }

            const uoResponse = await smartAccountClient.sendUserOperation({
                uo: {
                    target,
                    data,
                    value,
                },
                overrides: gasOverride ? {
                    callGasLimit: gasOverride
                } : undefined
            });

            log(`UserOp Hash: ${uoResponse.hash}`);
            const txHash = await smartAccountClient.waitForUserOperationTransaction(uoResponse);
            log(`Tx Hash: ${txHash}`);

            // Wait for receipt
            const receipt = await smartAccountClient.waitForTransactionReceipt({ hash: txHash });

            log(`${successMsg} (Block: ${receipt.blockNumber})`, 'success');
            return receipt;

        } else {
            // Standard EOA flow
            log('Sending EOA Transaction...');
            let tx;
            if (typeof contractOrTarget === 'string') {
                 // Raw execution from Manager UI
                 const signer = provider.getSigner();
                 tx = await signer.sendTransaction({
                     to: contractOrTarget,
                     data: functionNameOrData,
                     value: argsOrValue.value || 0,
                     gasLimit: (gasOverride && !isNaN(gasOverride)) ? ethers.BigNumber.from(gasOverride.toString()) : undefined
                 });
            } else {
                // Standard ethers contract call
                let finalArgs = [...argsOrValue];

                // Safely apply gasOverride if provided
                if (gasOverride && !isNaN(gasOverride)) {
                    try {
                        const limit = ethers.BigNumber.from(gasOverride.toString());
                        const lastArg = finalArgs[finalArgs.length - 1];
                        // If the last arg is an override object, merge it
                        if (lastArg && typeof lastArg === 'object' && !ethers.BigNumber.isBigNumber(lastArg)) {
                            lastArg.gasLimit = limit;
                        } else {
                            finalArgs.push({ gasLimit: limit });
                        }
                    } catch (e) {
                        console.warn("Invalid gasOverride ignored:", gasOverride);
                    }
                }

                // ethers supports calling by name or full signature directly
                tx = await contractOrTarget[functionNameOrData](...finalArgs);
            }

            log(`Tx Hash: ${tx.hash}`);
            const receipt = await tx.wait();
            log(`${successMsg} (Block: ${receipt.blockNumber})`, 'success');
            return receipt;
        }
    } catch (error) {
        console.error(error);
        const errMsg = error.reason || error.message || "Unknown error";
        log(`Transaction failed: ${errMsg}`, 'error');
        throw error;
    }
}


// Initializer for Manager specific UI
async function initManager() {
    await coreReady;
    setupManagerListeners();
    if (typeof initEnvControl === 'function') initEnvControl();

    // Auto-fill empty fields if we can find them in deployment data
    addressFields.forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.value) {
            const contractName = id.replace('addr', '');
            const addr = getDeploymentAddress(contractName);
            if (addr) {
                el.value = addr;
                localStorage.setItem(id, addr);
                if (id === 'addrNFTMarketplace') localStorage.setItem('addrMarketplace', addr);
            }
        }
    });

    // Re-trigger wallet UI update specifically for manager elements
    if (userAddress) {
        updateWalletUI();
        refreshTreasuryInfo();
    }

    // Treasury Button Listeners
    document.getElementById('btnRefreshTreasury')?.addEventListener('click', refreshTreasuryInfo);

    document.getElementById('btnTreasuryWithdraw')?.addEventListener('click', async () => {
        const addr = document.getElementById('addrTreasury').value;
        const recipient = document.getElementById('withdrawRecipient').value;
        const amount = document.getElementById('withdrawAmount').value;
        if (!ethers.utils.isAddress(recipient)) return log('Invalid recipient address', 'error');

        try {
            const treasury = getAdminContract('Treasury', addr);
            const val = ethers.utils.parseEther(amount);
            const threshold = await treasury.threshold();
            const nonce = Math.floor(Date.now() / 1000);

            if (threshold.eq(1)) {
                await txHandler(treasury, "execute(address,uint256,bytes,uint256)", [recipient, val, "0x", nonce], 'Withdrawal Executed');
            } else {
                await txHandler(treasury, 'propose', [recipient, val, "0x", nonce], 'Withdrawal Proposed');
            }
            refreshTreasuryInfo();
        } catch (e) {
            log(e.message, 'error');
        }
    });

    document.getElementById('btnTreasuryExecute')?.addEventListener('click', async () => {
        const addr = document.getElementById('addrTreasury').value;
        const target = document.getElementById('execTarget').value;
        const value = document.getElementById('execValue').value || '0';
        const data = document.getElementById('execData').value || '0x';
        if (!ethers.utils.isAddress(target)) return log('Invalid target address', 'error');

        try {
            const treasury = getAdminContract('Treasury', addr);
            const val = ethers.utils.parseEther(value);
            const threshold = await treasury.threshold();
            const nonce = Math.floor(Date.now() / 1000);

            if (threshold.eq(1)) {
                await txHandler(treasury, "execute(address,uint256,bytes,uint256)", [target, val, data, nonce], 'Execution Successful');
            } else {
                await txHandler(treasury, 'propose', [target, val, data, nonce], 'Proposal Created');
            }
            refreshTreasuryInfo();
        } catch (e) {
            log(e.message, 'error');
        }
    });
}

/**
 * Treasury Management Logic
 */
async function refreshTreasuryInfo() {
    const treasuryAddr = document.getElementById('addrTreasury')?.value;
    if (!treasuryAddr || !ethers.utils.isAddress(treasuryAddr)) return;

    try {
        const treasury = getAdminContract('Treasury', treasuryAddr);

        // 1. Get Balance
        const balance = await provider.getBalance(treasuryAddr);
        document.getElementById('treasuryBalance').innerText = `${ethers.utils.formatEther(balance)} ETH`;

        // 2. Get Threshold & Owners
        const threshold = await treasury.threshold();
        const owners = await treasury.getOwners();
        document.getElementById('treasuryThreshold').innerText = `${threshold} / ${owners.length}`;
        document.getElementById('treasuryOwners').innerText = owners.join('\n');

        // 3. Render Proposals
        await renderProposals(treasury);

    } catch (e) {
        console.error("Treasury refresh error:", e);
        log(`Failed to refresh treasury: ${e.message}`, 'error');
    }
}

async function renderProposals(treasury) {
    const list = document.getElementById('proposalList');
    if (!list) return;

    try {
        const count = await treasury.proposalCount();
        if (count.eq(0)) {
            list.innerHTML = '<div class="text-center py-8 text-slate-600 text-xs italic">No proposals found.</div>';
            return;
        }

        list.innerHTML = '';
        // Show last 10 proposals
        const start = count.gt(10) ? count.sub(10) : ethers.BigNumber.from(0);

        for (let i = count.sub(1); i.gte(start); i = i.sub(1)) {
            const p = await treasury.proposals(i);
            const isApproved = userAddress ? await treasury.hasApproved(i, userAddress) : false;
            const threshold = await treasury.threshold();

            const div = document.createElement('div');
            div.className = `bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3 ${p.executed ? 'opacity-50' : ''}`;

            let statusTag = '';
            if (p.executed) statusTag = '<span class="text-[8px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 uppercase font-black">Executed</span>';
            else if (p.canceled) statusTag = '<span class="text-[8px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 uppercase font-black">Canceled</span>';
            else statusTag = `<span class="text-[8px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 uppercase font-black">${p.approvalCount} / ${threshold} Approved</span>`;

            div.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="text-[10px] font-black text-slate-500 uppercase">Proposal #${i}</span>
                    ${statusTag}
                </div>
                <div class="space-y-1">
                    <div class="text-[10px] font-mono text-slate-400 truncate"><span class="text-slate-600 mr-2">Target:</span>${p.target}</div>
                    <div class="text-[10px] font-mono text-slate-400"><span class="text-slate-600 mr-2">Value:</span>${ethers.utils.formatEther(p.value)} ETH</div>
                </div>
                ${!p.executed && !p.canceled ? `
                <div class="flex space-x-2 pt-2">
                    ${!isApproved ? `<button class="btn-approve btn-primary px-3 py-1.5 rounded-lg text-[9px] font-black uppercase" data-id="${i}">Approve</button>` : ''}
                    ${p.approvalCount.gte(threshold) ? `<button class="btn-execute-prop btn-secondary px-3 py-1.5 rounded-lg text-[9px] font-black uppercase" data-id="${i}">Execute</button>` : ''}
                </div>
                ` : ''}
            `;

            // Add listener for buttons
            div.querySelector('.btn-approve')?.addEventListener('click', async () => {
                const nonce = Math.floor(Date.now() / 1000);
                await txHandler(treasury, 'approve', [i, nonce], `Proposal #${i} Approved`);
                refreshTreasuryInfo();
            });

            div.querySelector('.btn-execute-prop')?.addEventListener('click', async () => {
                await txHandler(treasury, 'executeProposal', [i], `Proposal #${i} Executed`);
                refreshTreasuryInfo();
            });

            list.appendChild(div);
        }
    } catch (e) {
        console.error("Proposal render error:", e);
    }
}
