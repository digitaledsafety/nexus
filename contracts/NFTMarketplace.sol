// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFTMarketplace is ReentrancyGuard, AccessControl {
    using SafeERC20 for IERC20;

    struct Offer {
        uint256 price;
        uint256 amount;    // Number of tokens (usually 1 for ERC721)
        uint256 timestamp; // When the offer was created
    }

    struct Listing {
        address seller;
        uint256 price;
        uint256 amount;
        bool active;
    }

    // Mapping from NFT contract -> Token ID -> Buyer -> Offer
    mapping(address => mapping(uint256 => mapping(address => Offer))) public offers;

    // Mapping from NFT contract -> Token ID -> Listing
    mapping(address => mapping(uint256 => Listing)) public listings;

    IERC20 public immutable paymentToken;

    uint256 public protocolFeeBps; // e.g., 250 for 2.5%
    address public feeRecipient;
    uint256 public minOfferPrice;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event OfferUpdated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 newPrice, uint256 newAmount);
    event OfferRejected(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller);
    event ListingCreated(address indexed nftContract, uint256 indexed tokenId, address seller, uint256 price, uint256 amount);
    event ListingBought(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller, uint256 price, uint256 amount);
    event ListingCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed seller);
    event FeeRecipientUpdated(address indexed newRecipient);
    event ProtocolFeeUpdated(uint256 newFeeBps);
    event MinOfferPriceUpdated(uint256 newMinPrice);

    constructor(address initialAdmin, address _paymentToken) {
        paymentToken = IERC20(_paymentToken);
        feeRecipient = initialAdmin;
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
    }

    /**
     * @notice Create an offer for an NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     * @param amount Number of tokens to buy (should be 1 for ERC721)
     * @param price Total price in payment tokens
     */
    function createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external nonReentrant {
        require(price >= minOfferPrice, "Offer price below minimum");
        require(price > 0, "Offer price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");
        require(offers[nftContract][tokenId][msg.sender].price == 0, "Offer already exists");

        // Transfer tokens from buyer to this contract
        paymentToken.safeTransferFrom(msg.sender, address(this), price);

        // Save the offer
        offers[nftContract][tokenId][msg.sender] = Offer({
            price: price,
            amount: amount,
            timestamp: block.timestamp
        });

        emit OfferCreated(nftContract, tokenId, msg.sender, price, amount);
    }

    /**
     * @notice Accept an offer for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being sold
     * @param buyer The address of the buyer whose offer is being accepted
     */
    function acceptOffer(address nftContract, uint256 tokenId, address buyer) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId][buyer];
        require(offer.price > 0, "No valid offer exists");

        if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) { // IERC721
            require(offer.amount == 1, "ERC721 offer must have amount 1");
            IERC721 nft = IERC721(nftContract);
            require(nft.ownerOf(tokenId) == msg.sender, "You do not own this NFT");
            require(
                nft.isApprovedForAll(msg.sender, address(this)) || nft.getApproved(tokenId) == address(this),
                "Contract not approved to transfer NFT"
            );
            // Transfer the NFT to the buyer
            nft.safeTransferFrom(msg.sender, buyer, tokenId);
        } else if (IERC165(nftContract).supportsInterface(type(IERC1155).interfaceId)) { // IERC1155
            IERC1155 nft = IERC1155(nftContract);
            require(nft.balanceOf(msg.sender, tokenId) >= offer.amount, "Insufficient balance");
            require(nft.isApprovedForAll(msg.sender, address(this)), "Contract not approved to transfer NFT");
            // Transfer the NFT to the buyer
            nft.safeTransferFrom(msg.sender, buyer, tokenId, offer.amount, "");
        } else {
            revert("Unsupported NFT type");
        }

        // CEI: Clear the offer after ownership check but before token transfers
        delete offers[nftContract][tokenId][buyer];

        // Automatically cancel any active listing for this token
        if (listings[nftContract][tokenId].active) {
            delete listings[nftContract][tokenId];
            emit ListingCanceled(nftContract, tokenId, msg.sender);
        }

        // Pay the seller and handle fees/royalties
        _distributeProceeds(nftContract, tokenId, offer.price, msg.sender);

        emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price, offer.amount);
    }

    /**
     * @notice Internal function to distribute proceeds to seller, protocol and royalty recipient
     */
    function _distributeProceeds(address nftContract, uint256 tokenId, uint256 price, address seller) internal {
        uint256 protocolFee = (price * protocolFeeBps) / 10000;
        uint256 royaltyFee = 0;
        address royaltyRecipient;

        try IERC2981(nftContract).royaltyInfo(tokenId, price) returns (address receiver, uint256 amount) {
            if (receiver != address(0)) {
                royaltyFee = amount;
                royaltyRecipient = receiver;
            }
        } catch {}

        // Cap royalty fee to prevent underflow if (protocolFee + royaltyFee) > price
        if (protocolFee + royaltyFee > price) {
            royaltyFee = price - protocolFee;
        }

        uint256 sellerProceeds = price - protocolFee - royaltyFee;

        if (protocolFee > 0 && feeRecipient != address(0)) {
            paymentToken.safeTransfer(feeRecipient, protocolFee);
        }
        if (royaltyFee > 0) {
            paymentToken.safeTransfer(royaltyRecipient, royaltyFee);
        }
        if (sellerProceeds > 0) {
            paymentToken.safeTransfer(seller, sellerProceeds);
        }
    }

    /**
     * @notice Cancel an offer you made
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token for which the offer was made
     */
    function cancelOffer(address nftContract, uint256 tokenId) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId][msg.sender];
        require(offer.price > 0, "You did not make this offer");

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId][msg.sender];

        // Refund the buyer
        paymentToken.safeTransfer(msg.sender, offer.price);

        emit OfferCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @notice Update an existing offer
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     * @param newAmount New number of tokens to buy
     * @param newPrice New total price in payment tokens
     */
    function updateOffer(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice) external nonReentrant {
        Offer storage offer = offers[nftContract][tokenId][msg.sender];
        require(offer.price > 0, "Offer does not exist");
        require(newPrice >= minOfferPrice, "New price below minimum");
        require(newPrice > 0, "New price must be greater than 0");
        require(newAmount > 0, "New amount must be greater than 0");

        uint256 oldPrice = offer.price;

        if (newPrice > oldPrice) {
            // Transfer additional tokens from buyer
            paymentToken.safeTransferFrom(msg.sender, address(this), newPrice - oldPrice);
        } else if (newPrice < oldPrice) {
            // Refund the difference to buyer
            paymentToken.safeTransfer(msg.sender, oldPrice - newPrice);
        }

        offer.price = newPrice;
        offer.amount = newAmount;
        offer.timestamp = block.timestamp;

        emit OfferUpdated(nftContract, tokenId, msg.sender, newPrice, newAmount);
    }

    /**
     * @notice Batch cancel multiple offers you made
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     */
    function cancelOffers(address[] calldata nftContracts, uint256[] calldata tokenIds) external nonReentrant {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            address nftContract = nftContracts[i];
            uint256 tokenId = tokenIds[i];
            Offer memory offer = offers[nftContract][tokenId][msg.sender];
            if (offer.price > 0) {
                delete offers[nftContract][tokenId][msg.sender];
                paymentToken.safeTransfer(msg.sender, offer.price);
                emit OfferCanceled(nftContract, tokenId, msg.sender);
            }
        }
    }

    /**
     * @notice Reject an offer for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being sold
     * @param buyer The address of the buyer whose offer is being rejected
     */
    function rejectOffer(address nftContract, uint256 tokenId, address buyer) external nonReentrant {
        Offer memory offer = offers[nftContract][tokenId][buyer];
        require(offer.price > 0, "No valid offer exists");

        // Verify ownership
        if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) { // IERC721
            require(IERC721(nftContract).ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        } else if (IERC165(nftContract).supportsInterface(type(IERC1155).interfaceId)) { // IERC1155
            require(IERC1155(nftContract).balanceOf(msg.sender, tokenId) >= offer.amount, "Insufficient balance");
        } else {
            revert("Unsupported NFT type");
        }

        // Clear the offer first (CEI)
        delete offers[nftContract][tokenId][buyer];

        // Refund the buyer
        paymentToken.safeTransfer(buyer, offer.price);

        emit OfferRejected(nftContract, tokenId, buyer, msg.sender);
    }

    function setProtocolFee(uint256 _feeBps) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_feeBps <= 1000, "Fee cannot exceed 10%");
        protocolFeeBps = _feeBps;
        emit ProtocolFeeUpdated(_feeBps);
    }

    function setFeeRecipient(address _recipient) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_recipient != address(0), "Invalid address");
        feeRecipient = _recipient;
        emit FeeRecipientUpdated(_recipient);
    }

    function setMinOfferPrice(uint256 _minPrice) external onlyRole(DEFAULT_ADMIN_ROLE) {
        minOfferPrice = _minPrice;
        emit MinOfferPriceUpdated(_minPrice);
    }

    /**
     * @notice Create a fixed-price listing for an NFT
     */
    function createListing(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external nonReentrant {
        require(price > 0, "Price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");

        if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) {
            require(amount == 1, "ERC721 amount must be 1");
            require(IERC721(nftContract).ownerOf(tokenId) == msg.sender, "Not owner");
            require(
                IERC721(nftContract).isApprovedForAll(msg.sender, address(this)) ||
                IERC721(nftContract).getApproved(tokenId) == address(this),
                "Not approved"
            );
        } else if (IERC165(nftContract).supportsInterface(type(IERC1155).interfaceId)) {
            require(IERC1155(nftContract).balanceOf(msg.sender, tokenId) >= amount, "Insufficient balance");
            require(IERC1155(nftContract).isApprovedForAll(msg.sender, address(this)), "Not approved");
        } else {
            revert("Unsupported NFT type");
        }

        listings[nftContract][tokenId] = Listing({
            seller: msg.sender,
            price: price,
            amount: amount,
            active: true
        });

        emit ListingCreated(nftContract, tokenId, msg.sender, price, amount);
    }

    /**
     * @notice Cancel an active listing
     */
    function cancelListing(address nftContract, uint256 tokenId) external nonReentrant {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.active, "No active listing");
        require(listing.seller == msg.sender, "Not the seller");

        delete listings[nftContract][tokenId];

        emit ListingCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @notice Buy an NFT from a fixed-price listing
     */
    function buyFromListing(address nftContract, uint256 tokenId) external nonReentrant {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.active, "No active listing");

        // Transfer payment from buyer to this contract
        paymentToken.safeTransferFrom(msg.sender, address(this), listing.price);

        // Transfer NFT to buyer
        if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) {
            IERC721(nftContract).safeTransferFrom(listing.seller, msg.sender, tokenId);
        } else {
            IERC1155(nftContract).safeTransferFrom(listing.seller, msg.sender, tokenId, listing.amount, "");
        }

        // CEI: Clear listing
        delete listings[nftContract][tokenId];

        // Distribute proceeds
        _distributeProceeds(nftContract, tokenId, listing.price, listing.seller);

        emit ListingBought(nftContract, tokenId, msg.sender, listing.seller, listing.price, listing.amount);
    }

    /**
     * @notice Batch accept multiple offers
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param buyers Array of buyer addresses
     */
    function acceptOffers(address[] calldata nftContracts, uint256[] calldata tokenIds, address[] calldata buyers) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == buyers.length, "Mismatched arrays");

        for (uint256 i = 0; i < nftContracts.length; i++) {
            address nftContract = nftContracts[i];
            uint256 tokenId = tokenIds[i];
            address buyer = buyers[i];

            Offer memory offer = offers[nftContract][tokenId][buyer];
            if (offer.price == 0) continue;

            if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) {
                require(offer.amount == 1, "ERC721 offer must have amount 1");
                IERC721 nft = IERC721(nftContract);
                if (nft.ownerOf(tokenId) != msg.sender) continue;
                if (!nft.isApprovedForAll(msg.sender, address(this)) && nft.getApproved(tokenId) != address(this)) continue;

                nft.safeTransferFrom(msg.sender, buyer, tokenId);
            } else if (IERC165(nftContract).supportsInterface(type(IERC1155).interfaceId)) {
                IERC1155 nft = IERC1155(nftContract);
                if (nft.balanceOf(msg.sender, tokenId) < offer.amount) continue;
                if (!nft.isApprovedForAll(msg.sender, address(this))) continue;

                nft.safeTransferFrom(msg.sender, buyer, tokenId, offer.amount, "");
            } else {
                continue;
            }

            delete offers[nftContract][tokenId][buyer];

            if (listings[nftContract][tokenId].active) {
                delete listings[nftContract][tokenId];
                emit ListingCanceled(nftContract, tokenId, msg.sender);
            }

            _distributeProceeds(nftContract, tokenId, offer.price, msg.sender);
            emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price, offer.amount);
        }
    }
}
