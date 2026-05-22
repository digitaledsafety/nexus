// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title RevertingRecipient
 * @dev A contract that reverts whenever it receives ETH.
 */
contract RevertingRecipient {
    receive() external payable {
        revert("RevertingRecipient: Revert on purpose");
    }
}
