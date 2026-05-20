// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title RevertingRecipient
 * @dev A contract that always reverts when receiving ETH.
 */
contract RevertingRecipient {
    receive() external payable {
        revert("I refuse ETH");
    }
}
