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
        uint256 expiry;    // When the offer expires (0 for no expiry)
    }

    // Mapping from NFT contract -> Token ID -> Buyer -> Offer
    mapping(address => mapping(uint256 => mapping(address => Offer))) public offers;

    IERC20 public immutable paymentToken;

    uint256 public protocolFeeBps; // e.g., 250 for 2.5%
    address public feeRecipient;
    uint256 public minOfferPrice;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event OfferUpdated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 newPrice, uint256 newAmount);
    event OfferRejected(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller);
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
     * @param expiry Timestamp when the offer expires (0 for no expiry)
     */
    function createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price, uint256 expiry) external nonReentrant {
        _createOffer(nftContract, tokenId, amount, price, expiry);
    }

    /**
     * @notice Create an offer for an NFT (legacy support)
     */
    function createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external nonReentrant {
        _createOffer(nftContract, tokenId, amount, price, 0);
    }

    function _createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price, uint256 expiry) internal {
        require(price >= minOfferPrice, "Offer price below minimum");
        require(price > 0, "Offer price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");
        require(expiry == 0 || expiry > block.timestamp, "Invalid expiry");
        require(offers[nftContract][tokenId][msg.sender].price == 0, "Offer already exists");

        paymentToken.safeTransferFrom(msg.sender, address(this), price);

        offers[nftContract][tokenId][msg.sender] = Offer({
            price: price,
            amount: amount,
            timestamp: block.timestamp,
            expiry: expiry
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
        _acceptOffer(nftContract, tokenId, buyer);
    }

    /**
     * @notice Batch accept multiple offers for your NFTs
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param buyers Array of buyer addresses
     */
    function batchAcceptOffers(address[] calldata nftContracts, uint256[] calldata tokenIds, address[] calldata buyers) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == buyers.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _acceptOffer(nftContracts[i], tokenIds[i], buyers[i]);
        }
    }

    function _acceptOffer(address nftContract, uint256 tokenId, address buyer) internal {
        Offer memory offer = offers[nftContract][tokenId][buyer];
        require(offer.price > 0, "No valid offer exists");
        require(offer.expiry == 0 || block.timestamp <= offer.expiry, "Offer expired");

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

        // Pay the seller and handle fees/royalties
        uint256 protocolFee = (offer.price * protocolFeeBps) / 10000;
        uint256 royaltyFee = 0;
        address royaltyRecipient;

        try IERC2981(nftContract).royaltyInfo(tokenId, offer.price) returns (address receiver, uint256 amount) {
            if (receiver != address(0)) {
                royaltyFee = amount;
                royaltyRecipient = receiver;
            }
        } catch {}

        // Cap royalty fee to prevent underflow if (protocolFee + royaltyFee) > offer.price
        if (protocolFee + royaltyFee > offer.price) {
            royaltyFee = offer.price - protocolFee;
        }

        uint256 sellerProceeds = offer.price - protocolFee - royaltyFee;

        if (protocolFee > 0 && feeRecipient != address(0)) {
            paymentToken.safeTransfer(feeRecipient, protocolFee);
        }
        if (royaltyFee > 0) {
            paymentToken.safeTransfer(royaltyRecipient, royaltyFee);
        }
        paymentToken.safeTransfer(msg.sender, sellerProceeds);

        emit OfferAccepted(nftContract, tokenId, msg.sender, offer.price, offer.amount);
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
     * @param newExpiry New timestamp when the offer expires
     */
    function updateOffer(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice, uint256 newExpiry) external nonReentrant {
        _updateOffer(nftContract, tokenId, newAmount, newPrice, newExpiry);
    }

    /**
     * @notice Update an existing offer (legacy support)
     */
    function updateOffer(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice) external nonReentrant {
        _updateOffer(nftContract, tokenId, newAmount, newPrice, 0);
    }

    function _updateOffer(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice, uint256 newExpiry) internal {
        Offer storage offer = offers[nftContract][tokenId][msg.sender];
        require(offer.price > 0, "Offer does not exist");
        require(newPrice >= minOfferPrice, "New price below minimum");
        require(newPrice > 0, "New price must be greater than 0");
        require(newAmount > 0, "New amount must be greater than 0");
        require(newExpiry == 0 || newExpiry > block.timestamp, "Invalid expiry");

        uint256 oldPrice = offer.price;

        if (newPrice > oldPrice) {
            paymentToken.safeTransferFrom(msg.sender, address(this), newPrice - oldPrice);
        } else if (newPrice < oldPrice) {
            paymentToken.safeTransfer(msg.sender, oldPrice - newPrice);
        }

        offer.price = newPrice;
        offer.amount = newAmount;
        offer.timestamp = block.timestamp;
        offer.expiry = newExpiry;

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
}
