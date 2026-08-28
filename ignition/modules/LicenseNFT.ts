import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LicenseNFTModule = buildModule("LicenseNFTModule", (m) => {
  const initialOwner = m.getAccount(0);
  const licenseNft = m.contract("LicenseNFT", [initialOwner]);

  return { licenseNft };
});

export default LicenseNFTModule;
