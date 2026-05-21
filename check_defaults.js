import { sepolia } from "viem/chains";
import { getDefaultUserOperationFeeOptions } from "@alchemy/aa-core";

const defaults = getDefaultUserOperationFeeOptions(sepolia);
console.log("maxFeePerGas multiplier:", defaults.maxFeePerGas.multiplier);
console.log("maxPriorityFeePerGas multiplier:", defaults.maxPriorityFeePerGas.multiplier);
