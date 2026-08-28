# Interacting with Smart Contracts

This project uses [Hardhat](https://hardhat.org/) and [Viem](https://viem.sh/) for smart contract development and interaction.

## Using Viem (Recommended)

Viem is a modern, lightweight, and type-safe library for interacting with Ethereum. It is the primary library used in this project's tests and scripts.

### Basic Concepts

1.  **Public Client**: Used for read-only operations (reading state, fetching events, etc.).
2.  **Wallet Client**: Used for write operations (sending transactions).
3.  **Contract Instance**: A representation of a deployed contract that provides easy access to its read and write functions.

### Example Script

A comprehensive example can be found in `scripts/interact-brag.ts`. This script demonstrates:

-   Connecting to the Hardhat network.
-   Deploying contracts using `viem.deployContract`.
-   Calling write functions (transactions).
-   Calling read functions (view calls).
-   Fetching and parsing contract events.

To run the example script:

```bash
npx hardhat run scripts/interact-brag.ts
```

### Programmatic Interaction Snippets

#### TypeScript (Recommended)

```typescript
import { network } from "hardhat";
import { parseEther } from "viem";

async function main() {
  // In Hardhat 3, use network.connect() to get the viem helpers
  const { viem } = await network.connect();
  const [owner] = await viem.getWalletClients();
  const publicClient = await viem.getPublicClient();

  // Connect to an existing contract
  const bragNFT = await viem.getContractAt(
    "BragNFT",
    "0x..." // contract address
  );

  // Read data
  const minDonation = await bragNFT.read.minimumDonation();
  console.log(minDonation);

  // Send a transaction
  const hash = await bragNFT.write.donate(["Hello!"], {
    value: parseEther("0.1"),
    account: owner.account,
  });

  // Wait for confirmation
  await publicClient.waitForTransactionReceipt({ hash });
}
```

#### JavaScript (Node.js)

If you prefer using plain JavaScript, you can use the following pattern:

```javascript
const { network } = require("hardhat");
const { parseEther } = require("viem");

async function main() {
  const { viem } = await network.connect();
  const [owner] = await viem.getWalletClients();
  const publicClient = await viem.getPublicClient();

  const bragNFT = await viem.getContractAt("BragNFT", "0x...");

  const hash = await bragNFT.write.donate(["Hello!"], {
    value: parseEther("0.1"),
    account: owner.account,
  });

  await publicClient.waitForTransactionReceipt({ hash });
}
```

## Other Libraries

While Viem is recommended, you can still use other libraries like `ethers.js` or `web3.js` if preferred, although you would need to install them and manage the provider connection manually as they are not the primary focus of the current project setup.

Existing (legacy) examples for ethers and web3 can be found in the `scripts/` directory, though they may require adjustments to work with the current contract versions and local environment.
