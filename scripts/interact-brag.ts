import { network } from "hardhat";
import { parseEther, formatEther } from "viem";

async function main() {
  console.log("Connecting to the network...");
  // In Hardhat 3, network.connect() is used to access viem helpers for the current network.
  const { viem } = await network.connect();

  const [owner, donor] = await viem.getWalletClients();
  const publicClient = await viem.getPublicClient();

  console.log(`Using owner account: ${owner.account.address}`);
  console.log(`Using donor account: ${donor.account.address}`);

  // 1. Deploy Contracts
  console.log("\n--- Deploying Contracts ---");
  const treasury = await viem.deployContract("Treasury", [owner.account.address]);
  console.log(`Treasury deployed to: ${treasury.address}`);

  const receipt = await viem.deployContract("DonationReceipt", [owner.account.address]);
  console.log(`DonationReceipt deployed to: ${receipt.address}`);

  const minDonation = parseEther("0.1");
  const bragNFT = await viem.deployContract("BragNFT", [
    owner.account.address,
    treasury.address,
    minDonation
  ]);
  console.log(`BragNFT deployed to: ${bragNFT.address}`);

  // 2. Setup Relationships
  console.log("\n--- Setting up Relationships ---");
  await receipt.write.setMinter([bragNFT.address, true], { account: owner.account });
  console.log("Authorized BragNFT to mint receipts.");

  await bragNFT.write.setReceiptContract([receipt.address], { account: owner.account });
  console.log("Linked DonationReceipt to BragNFT.");

  // 3. Read State
  console.log("\n--- Reading State ---");
  const currentMinDonation = await bragNFT.read.minimumDonation();
  console.log(`Minimum donation required: ${formatEther(currentMinDonation)} ETH`);

  // 4. Send Transaction (Donate)
  console.log("\n--- Sending Transaction: Donate ---");
  const donationAmount = parseEther("0.5");
  const message = "Support the project!";

  const hash = await bragNFT.write.donate([message], {
    account: donor.account,
    value: donationAmount,
  });
  console.log(`Transaction sent! Hash: ${hash}`);

  // 5. Wait for Receipt and Inspect Events
  console.log("Waiting for transaction confirmation...");
  const txReceipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("Transaction confirmed!");

  // Parse logs for Donated event
  const logs = await publicClient.getContractEvents({
    address: bragNFT.address,
    abi: bragNFT.abi,
    eventName: 'Donated',
    fromBlock: txReceipt.blockNumber,
    toBlock: txReceipt.blockNumber,
  });

  if (logs.length > 0) {
    const event = logs[0].args;
    console.log("\n--- Event: Donated ---");
    console.log(`Donor: ${event.donor}`);
    console.log(`Amount: ${formatEther(event.amount as bigint)} ETH`);
    console.log(`NFT Token ID: ${event.nftTokenId}`);
    console.log(`Receipt Token ID: ${event.receiptTokenId}`);
    console.log(`Message: ${event.message}`);
  }

  // 6. Read minted receipt details
  console.log("\n--- Reading Minted Receipt Details ---");
  const nftTokenId = 0n; // First one minted
  const receiptTokenId = await bragNFT.read.nftToReceipt([nftTokenId]);
  const receiptDetails = await receipt.read.getReceipt([receiptTokenId]);

  console.log(`Receipt for NFT #${nftTokenId}:`);
  console.log(`- Donor: ${receiptDetails.donor}`);
  console.log(`- Amount: ${formatEther(receiptDetails.amount)} ETH`);
  console.log(`- Timestamp: ${new Date(Number(receiptDetails.timestamp) * 1000).toLocaleString()}`);
  console.log(`- Message: ${receiptDetails.message}`);

  console.log("\nInteraction complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
