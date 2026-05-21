// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title BatchGrant
 * @dev A simple utility to distribute ERC20 tokens to multiple recipients in a single transaction.
 */
contract BatchGrant is AccessControl {
    using SafeERC20 for IERC20;

    constructor(address initialAdmin) {
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
    }

    /**
     * @dev Allows the contract to receive ETH.
     */
    receive() external payable {}

    /**
     * @dev Distributes any ERC20 token to multiple recipients.
     * @param token The ERC20 token to distribute.
     * @param recipients Array of recipient addresses.
     * @param amounts Array of amounts to transfer to each recipient.
     */
    function distribute(IERC20 token, address[] calldata recipients, uint256[] calldata amounts) external {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.safeTransferFrom(msg.sender, recipients[i], amounts[i]);
        }
    }

    /**
     * @dev Distributes native ETH to multiple recipients.
     * @param recipients Array of recipient addresses.
     * @param amounts Array of amounts to transfer to each recipient.
     */
    function distributeETH(address[] calldata recipients, uint256[] calldata amounts) external payable {
        require(recipients.length == amounts.length, "Mismatched arrays");
        uint256 total = 0;
        for (uint256 i = 0; i < recipients.length; i++) {
            total += amounts[i];
        }
        // Explicitly check that msg.value matches total to avoid draining contract balance
        require(msg.value == total, "Incorrect ETH amount sent");

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "ETH transfer failed");
        }
    }

    /**
     * @dev Distributes ERC20 tokens already held by this contract to multiple recipients.
     * Restricted to addresses with DEFAULT_ADMIN_ROLE.
     */
    function distributeFromBalance(IERC20 token, address[] calldata recipients, uint256[] calldata amounts) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            token.safeTransfer(recipients[i], amounts[i]);
        }
    }

    /**
     * @dev Distributes ETH already held by this contract to multiple recipients.
     * Restricted to addresses with DEFAULT_ADMIN_ROLE.
     */
    function distributeETHFromBalance(address[] calldata recipients, uint256[] calldata amounts) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(recipients.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "ETH transfer failed");
        }
    }
}
