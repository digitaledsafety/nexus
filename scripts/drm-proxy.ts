import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ethers } from 'ethers';

const app = express();
const port = 9005;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/octet-stream' }));

// Mock configuration
const RPC_URL = 'http://localhost:8545';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// Abi for the LicenseNFT check
const LICENSE_NFT_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function ownerOf(uint256 tokenId) view returns (address)",
    "function contentIds(uint256 tokenId) view returns (string)"
];

/**
 * Verification Handshake (SIWE) Logic
 */
async function verifySiwe(address: string, message: string, signature: string) {
    const recoveredAddress = ethers.utils.verifyMessage(message, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
}

/**
 * License Request Endpoint (Widevine Proxy Mock)
 */
app.post('/license', async (req, res) => {
    try {
        console.log('--- Incoming License Request ---');

        const authAddress = req.headers['x-auth-address'] as string;
        const authSignature = req.headers['x-auth-signature'] as string;
        const encodedMessage = req.headers['x-auth-message'] as string;
        const tokenId = req.headers['x-token-id'] as string;
        const contractAddress = req.headers['x-contract-address'] as string;

        if (!authAddress || !authSignature || !encodedMessage || !tokenId || !contractAddress) {
            console.error('Missing required auth headers');
            return res.status(401).json({ error: 'Unauthorized: Missing auth headers' });
        }

        let authMessage = encodedMessage;
        try {
            authMessage = Buffer.from(encodedMessage, 'base64').toString();
        } catch (e) {
            // fallback
        }

        // 1. Verify SIWE
        const isVerified = await verifySiwe(authAddress, authMessage, authSignature);
        if (!isVerified) {
            console.error('SIWE verification failed');
            return res.status(403).json({ error: 'Forbidden: Invalid signature' });
        }
        console.log(`SIWE Verified for ${authAddress}`);

        // 2. Verify NFT Ownership
        const contract = new ethers.Contract(contractAddress, LICENSE_NFT_ABI, provider);

        let owner;
        try {
            owner = await contract.ownerOf(tokenId);
        } catch (err: any) {
             console.error(`Token ${tokenId} check failed (likely non-existent)`);
             return res.status(403).json({ error: 'Forbidden: License NFT does not exist' });
        }

        if (owner.toLowerCase() !== authAddress.toLowerCase()) {
            console.error(`Ownership check failed. Expected ${authAddress}, got ${owner}`);
            return res.status(403).json({ error: 'Forbidden: You do not own this License NFT' });
        }
        console.log(`NFT Ownership Verified for Token ${tokenId}`);

        console.log('License Authorized successfully.');
        return res.status(200).send(Buffer.from("MOCK_LICENSE_BLOB_AUTHORIZED"));

    } catch (err: any) {
        console.error('Error processing license request:', err);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
});

app.listen(port, () => {
    console.log(`DRM Proxy listening at http://localhost:${port}`);
});
