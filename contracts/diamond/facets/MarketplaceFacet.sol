// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { LibAppStorage, AppStorage, Offer } from "../libraries/LibAppStorage.sol";
import { LibDiamond } from "../libraries/LibDiamond.sol";

contract MarketplaceFacet {
    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event RefundRequested(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 amount);

    function createOffer(address nftContract, uint256 tokenId) external payable {
        AppStorage storage s = LibAppStorage.diamondStorage();
        require(msg.value > 0, "Offer price must be greater than 0");
        require(s.offers[nftContract][tokenId].buyer == address(0), "Offer already exists");

        s.offers[nftContract][tokenId] = Offer({
            buyer: msg.sender,
            price: msg.value,
            timestamp: block.timestamp
        });

        emit OfferCreated(nftContract, tokenId, msg.sender, msg.value);
    }

    function acceptOffer(address nftContract, uint256 tokenId) external {
        AppStorage storage s = LibAppStorage.diamondStorage();
        Offer memory offer = s.offers[nftContract][tokenId];
        require(offer.buyer != address(0), "No valid offer exists");

        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        require(
            nft.isApprovedForAll(msg.sender, address(this)) || nft.getApproved(tokenId) == address(this),
            "Contract not approved to transfer NFT"
        );

        delete s.offers[nftContract][tokenId];

        nft.safeTransferFrom(msg.sender, offer.buyer, tokenId);
        (bool success, ) = payable(msg.sender).call{value: offer.price}("");
        require(success, "Transfer failed");

        emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price);
    }

    function cancelOffer(address nftContract, uint256 tokenId) external {
        AppStorage storage s = LibAppStorage.diamondStorage();
        Offer memory offer = s.offers[nftContract][tokenId];
        require(offer.buyer == msg.sender, "You did not make this offer");

        delete s.offers[nftContract][tokenId];
        (bool success, ) = payable(msg.sender).call{value: offer.price}("");
        require(success, "Transfer failed");

        emit OfferCanceled(nftContract, tokenId, msg.sender);
    }

    function requestRefund(address nftContract, uint256 tokenId) external {
        AppStorage storage s = LibAppStorage.diamondStorage();
        Offer memory offer = s.offers[nftContract][tokenId];
        require(offer.buyer == msg.sender, "You did not make this offer");
        require(block.timestamp <= offer.timestamp + s.refundPeriod, "Refund period has expired");

        delete s.offers[nftContract][tokenId];
        (bool success, ) = payable(msg.sender).call{value: offer.price}("");
        require(success, "Transfer failed");

        emit RefundRequested(nftContract, tokenId, msg.sender, offer.price);
    }

    function updateRefundPeriod(uint256 newRefundPeriod) external {
        LibDiamond.enforceIsContractOwner();
        AppStorage storage s = LibAppStorage.diamondStorage();
        s.refundPeriod = newRefundPeriod;
    }

    function getOffer(address nftContract, uint256 tokenId) external view returns (Offer memory) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        return s.offers[nftContract][tokenId];
    }

    function getRefundPeriod() external view returns (uint256) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        return s.refundPeriod;
    }
}
