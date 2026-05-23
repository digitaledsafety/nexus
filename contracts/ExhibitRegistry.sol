// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title ExhibitRegistry
 * @dev A central registry for verified "Exhibit Vaults".
 * Each vault represents a location (Game, Gallery, Website, etc.) where an NFT can be "exhibited".
 * Uses AccessControl for flexible permissions.
 */
contract ExhibitRegistry is AccessControl {
    using SafeERC20 for IERC20;

    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

    enum LocationType { Game, Physical, Website, Gallery, Other }

    struct VaultInfo {
        bool verified;
        LocationType locationType;
        string name;
        string description;
    }

    mapping(address => VaultInfo) public vaults;
    address[] public vaultAddresses;

    event VaultVerified(address indexed vault, LocationType locationType, string name);
    event VaultRemoved(address indexed vault);

    constructor(address initialOwner) {
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _grantRole(VERIFIER_ROLE, initialOwner);
    }

    /**
     * @dev Allows the contract to receive ETH.
     */
    receive() external payable {}

    /**
     * @dev Withdraw ETH from the contract. Restricted to DEFAULT_ADMIN_ROLE.
     */
    function withdrawETH() external onlyRole(DEFAULT_ADMIN_ROLE) {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "ETH transfer failed");
    }

    /**
     * @dev Withdraw ERC20 tokens from the contract. Restricted to DEFAULT_ADMIN_ROLE.
     */
    function withdrawERC20(address token) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 balance = IERC20(token).balanceOf(address(this));
        IERC20(token).safeTransfer(msg.sender, balance);
    }

    /**
     * @dev Register and verify a vault address.
     */
    function verifyVault(
        address vault,
        LocationType locationType,
        string calldata name,
        string calldata description
    ) external onlyRole(VERIFIER_ROLE) {
        require(vault != address(0), "Invalid address");
        if (!vaults[vault].verified) {
            vaultAddresses.push(vault);
        }
        vaults[vault] = VaultInfo({
            verified: true,
            locationType: locationType,
            name: name,
            description: description
        });

        emit VaultVerified(vault, locationType, name);
    }

    /**
     * @dev Remove a vault from the verified list.
     */
    function removeVault(address vault) external onlyRole(VERIFIER_ROLE) {
        require(vaults[vault].verified, "Vault not verified");
        vaults[vault].verified = false;

        emit VaultRemoved(vault);
    }

    function isVerified(address vault) external view returns (bool) {
        return vaults[vault].verified;
    }

    function getVaultCount() external view returns (uint256) {
        return vaultAddresses.length;
    }

    function getVaultInfo(address vault) external view returns (VaultInfo memory) {
        return vaults[vault];
    }
}
