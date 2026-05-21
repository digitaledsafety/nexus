import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

async function main() {
    const client = createPublicClient({ chain: sepolia, transport: http("https://eth-sepolia.g.alchemy.com/v2/test") });
    const code = await client.getBytecode({ address: "0x4e59b44847b379578588920cA78FbF26c0B4956C" });
    console.log("Factory Code Length:", code ? code.length : 0);
}
main();
