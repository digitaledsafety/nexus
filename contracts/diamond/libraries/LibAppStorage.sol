// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Offer {
    address buyer;
    uint256 price;
    uint256 timestamp;
}

struct AppStorage {
    // Marketplace state
    mapping(address => mapping(uint256 => Offer)) offers;
    uint256 refundPeriod;
}

library LibAppStorage {
    function diamondStorage() internal pure returns (AppStorage storage ds) {
        assembly {
            ds.slot := 0
        }
    }
}
