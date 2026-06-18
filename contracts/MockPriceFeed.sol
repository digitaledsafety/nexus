// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title MockPriceFeed
 * @dev Mock Chainlink Price Feed for testing.
 */
contract MockPriceFeed {
    int256 private _price;
    uint256 private _updatedAt;
    bool private _shouldRevert;

    constructor(int256 initialPrice) {
        _price = initialPrice;
        _updatedAt = block.timestamp;
    }

    function setPrice(int256 newPrice) external {
        _price = newPrice;
    }

    function setUpdatedAt(uint256 updatedAt) external {
        _updatedAt = updatedAt;
    }

    function setRevert(bool shouldRevert) external {
        _shouldRevert = shouldRevert;
    }

    function latestRoundData()
        external
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        if (_shouldRevert) {
            revert("Price feed failure");
        }
        return (0, _price, 0, _updatedAt, 0);
    }
}
