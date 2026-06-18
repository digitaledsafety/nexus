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
        uint256 expiry;    // When the offer expires (0 for no expiration)
    }

    struct Listing {
        address seller;
        uint256 price;
        uint256 amount;
        address privateBuyer;
    }

    // Mapping from NFT contract -> Token ID -> Buyer -> Offer
    mapping(address => mapping(uint256 => mapping(address => Offer))) public offers;

    // Mapping from NFT contract -> Token ID -> Seller -> Listing
    mapping(address => mapping(uint256 => mapping(address => Listing))) public listings;

    IERC20 public immutable paymentToken;

    uint256 public protocolFeeBps; // e.g., 250 for 2.5%
    address public feeRecipient;
    uint256 public minOfferPrice;

    event OfferCreated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 price, uint256 amount, uint256 expiry);
    event OfferAccepted(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount);
    event OfferCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed buyer);
    event OfferUpdated(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, uint256 newPrice, uint256 newAmount, uint256 newExpiry);
    event OfferRejected(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller);
    event ListingCreated(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price, uint256 amount, address privateBuyer);
    event ListingUpdated(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 newPrice, uint256 newAmount, address privateBuyer);
    event ListingCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed seller);
    event ListingBought(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller, uint256 price, uint256 amount);
    event FeeRecipientUpdated(address indexed newRecipient);
    event ProtocolFeeUpdated(uint256 newFeeBps);
    event MinOfferPriceUpdated(uint256 newMinPrice);

    constructor(address initialAdmin, address _paymentToken) {
        paymentToken = IERC20(_paymentToken);
        feeRecipient = initialAdmin;
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
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
     * @notice Create an offer for an NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     * @param amount Number of tokens to buy (should be 1 for ERC721)
     * @param price Total price in payment tokens
     */
    function createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external nonReentrant {
        _createOffer(nftContract, tokenId, amount, price, 0);
    }

    /**
     * @notice Create an offer for an NFT with an expiration
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     * @param amount Number of tokens to buy
     * @param price Total price in payment tokens
     * @param expiry Expiration timestamp
     */
    function createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price, uint256 expiry) external nonReentrant {
        _createOffer(nftContract, tokenId, amount, price, expiry);
    }

    /**
     * @notice Batch create multiple offers
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param amounts Array of amounts
     * @param prices Array of prices
     */
    function batchCreateOffers(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256[] calldata amounts, uint256[] calldata prices) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == amounts.length && amounts.length == prices.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            _createOffer(nftContracts[i], tokenIds[i], amounts[i], prices[i], 0);
            unchecked { i++; }
        }
    }

    /**
     * @notice Batch create multiple offers with different expiries
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param amounts Array of amounts
     * @param prices Array of prices
     * @param expiries Array of expiration timestamps
     */
    function batchCreateOffersWithExpiries(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256[] calldata amounts, uint256[] calldata prices, uint256[] calldata expiries) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == amounts.length && amounts.length == prices.length && prices.length == expiries.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            _createOffer(nftContracts[i], tokenIds[i], amounts[i], prices[i], expiries[i]);
            unchecked { i++; }
        }
    }

    function _createOffer(address nftContract, uint256 tokenId, uint256 amount, uint256 price, uint256 expiry) internal {
        require(price >= minOfferPrice, "Offer price below minimum");
        require(price > 0, "Offer price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");
        require(expiry == 0 || expiry > block.timestamp, "Invalid expiry");
        require(offers[nftContract][tokenId][msg.sender].price == 0, "Offer already exists");

        // Transfer tokens from buyer to this contract
        paymentToken.safeTransferFrom(msg.sender, address(this), price);

        // Save the offer
        offers[nftContract][tokenId][msg.sender] = Offer({
            price: price,
            amount: amount,
            timestamp: block.timestamp,
            expiry: expiry
        });

        emit OfferCreated(nftContract, tokenId, msg.sender, price, amount, expiry);
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
     * @notice Batch accept multiple offers
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param buyers Array of buyer addresses
     */
    function batchAcceptOffers(address[] calldata nftContracts, uint256[] calldata tokenIds, address[] calldata buyers) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == buyers.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            _acceptOffer(nftContracts[i], tokenIds[i], buyers[i]);
            unchecked { i++; }
        }
    }

    function _acceptOffer(address nftContract, uint256 tokenId, address buyer) internal {
        Offer memory offer = offers[nftContract][tokenId][buyer];
        require(offer.price > 0, "No valid offer exists");
        require(offer.expiry == 0 || block.timestamp <= offer.expiry, "Offer expired");

        // Transfer the NFT to the buyer
        _transferNFT(nftContract, tokenId, msg.sender, buyer, offer.amount);

        // CEI: Clear the offer after ownership check but before token transfers
        delete offers[nftContract][tokenId][buyer];

        // Automatically cancel any listing by the seller for this token
        if (listings[nftContract][tokenId][msg.sender].price > 0) {
            delete listings[nftContract][tokenId][msg.sender];
            emit ListingCanceled(nftContract, tokenId, msg.sender);
        }

        // Pay the seller and handle fees/royalties
        _distributeProceedsFromContract(nftContract, tokenId, msg.sender, offer.price);

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
     */
    function updateOffer(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice) external nonReentrant {
        _updateOffer(nftContract, tokenId, newAmount, newPrice, 0);
    }

    /**
     * @notice Update an existing offer with an expiration
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being offered on
     * @param newAmount New number of tokens to buy
     * @param newPrice New total price in payment tokens
     * @param newExpiry New expiration timestamp
     */
    function updateOffer(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice, uint256 newExpiry) external nonReentrant {
        _updateOffer(nftContract, tokenId, newAmount, newPrice, newExpiry);
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
            // Transfer additional tokens from buyer
            paymentToken.safeTransferFrom(msg.sender, address(this), newPrice - oldPrice);
        } else if (newPrice < oldPrice) {
            // Refund the difference to buyer
            paymentToken.safeTransfer(msg.sender, oldPrice - newPrice);
        }

        offer.price = newPrice;
        offer.amount = newAmount;
        offer.timestamp = block.timestamp;
        offer.expiry = newExpiry;

        emit OfferUpdated(nftContract, tokenId, msg.sender, newPrice, newAmount, newExpiry);
    }

    /**
     * @notice Batch update multiple offers
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param newAmounts Array of new amounts
     * @param newPrices Array of new prices
     * @param newExpiries Array of new expiration timestamps
     */
    function batchUpdateOffers(
        address[] calldata nftContracts,
        uint256[] calldata tokenIds,
        uint256[] calldata newAmounts,
        uint256[] calldata newPrices,
        uint256[] calldata newExpiries
    ) external nonReentrant {
        require(
            nftContracts.length == tokenIds.length &&
            tokenIds.length == newAmounts.length &&
            newAmounts.length == newPrices.length &&
            newPrices.length == newExpiries.length,
            "Mismatched arrays"
        );
        for (uint256 i = 0; i < nftContracts.length; ) {
            _updateOffer(nftContracts[i], tokenIds[i], newAmounts[i], newPrices[i], newExpiries[i]);
            unchecked { i++; }
        }
    }

    /**
     * @notice Batch cancel multiple offers you made
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     */
    function cancelOffers(address[] calldata nftContracts, uint256[] calldata tokenIds) external nonReentrant {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            address nftContract = nftContracts[i];
            uint256 tokenId = tokenIds[i];
            Offer memory offer = offers[nftContract][tokenId][msg.sender];
            if (offer.price > 0) {
                delete offers[nftContract][tokenId][msg.sender];
                paymentToken.safeTransfer(msg.sender, offer.price);
                emit OfferCanceled(nftContract, tokenId, msg.sender);
            }
            unchecked { i++; }
        }
    }

    /**
     * @notice Create a fixed-price listing for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being listed
     * @param amount Number of tokens to sell
     * @param price Total price for the listing in payment tokens
     */
    function createListing(address nftContract, uint256 tokenId, uint256 amount, uint256 price) external {
        _createListing(nftContract, tokenId, amount, price, address(0));
        emit ListingCreated(nftContract, tokenId, msg.sender, price, amount, address(0));
    }

    /**
     * @notice Create a private fixed-price listing for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being listed
     * @param amount Number of tokens to sell
     * @param price Total price for the listing in payment tokens
     * @param privateBuyer The only address allowed to buy this listing
     */
    function createPrivateListing(address nftContract, uint256 tokenId, uint256 amount, uint256 price, address privateBuyer) external {
        require(privateBuyer != address(0), "Private buyer cannot be zero address");
        _createListing(nftContract, tokenId, amount, price, privateBuyer);
        emit ListingCreated(nftContract, tokenId, msg.sender, price, amount, privateBuyer);
    }

    /**
     * @notice Update an existing listing
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being listed
     * @param newAmount New number of tokens to sell
     * @param newPrice New total price for the listing in payment tokens
     */
    function updateListing(address nftContract, uint256 tokenId, uint256 newAmount, uint256 newPrice) external {
        Listing memory oldListing = listings[nftContract][tokenId][msg.sender];
        require(oldListing.price > 0, "Listing does not exist");
        _createListing(nftContract, tokenId, newAmount, newPrice, oldListing.privateBuyer);
        emit ListingUpdated(nftContract, tokenId, msg.sender, newPrice, newAmount, oldListing.privateBuyer);
    }

    function _createListing(address nftContract, uint256 tokenId, uint256 amount, uint256 price, address privateBuyer) internal {
        require(price > 0, "Price must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");

        if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) {
            require(amount == 1, "ERC721 listing must have amount 1");
            require(IERC721(nftContract).ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        } else if (IERC165(nftContract).supportsInterface(type(IERC1155).interfaceId)) {
            require(IERC1155(nftContract).balanceOf(msg.sender, tokenId) >= amount, "Insufficient balance");
        } else {
            revert("Unsupported NFT type");
        }

        listings[nftContract][tokenId][msg.sender] = Listing({
            seller: msg.sender,
            price: price,
            amount: amount,
            privateBuyer: privateBuyer
        });
    }

    /**
     * @notice Batch create multiple fixed-price listings
     */
    function batchCreateListings(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256[] calldata amounts, uint256[] calldata prices) external {
        require(nftContracts.length == tokenIds.length && tokenIds.length == amounts.length && amounts.length == prices.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            _createListing(nftContracts[i], tokenIds[i], amounts[i], prices[i], address(0));
            emit ListingCreated(nftContracts[i], tokenIds[i], msg.sender, prices[i], amounts[i], address(0));
            unchecked { i++; }
        }
    }

    /**
     * @notice Batch create multiple private fixed-price listings
     */
    function batchCreatePrivateListings(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256[] calldata amounts, uint256[] calldata prices, address[] calldata privateBuyers) external {
        require(nftContracts.length == tokenIds.length && tokenIds.length == amounts.length && amounts.length == prices.length && prices.length == privateBuyers.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            require(privateBuyers[i] != address(0), "Private buyer cannot be zero address");
            _createListing(nftContracts[i], tokenIds[i], amounts[i], prices[i], privateBuyers[i]);
            emit ListingCreated(nftContracts[i], tokenIds[i], msg.sender, prices[i], amounts[i], privateBuyers[i]);
            unchecked { i++; }
        }
    }

    /**
     * @notice Cancel a listing you made
     */
    function cancelListing(address nftContract, uint256 tokenId) external {
        require(listings[nftContract][tokenId][msg.sender].price > 0, "Listing does not exist");
        delete listings[nftContract][tokenId][msg.sender];
        emit ListingCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @notice Batch cancel multiple listings you made
     */
    function batchCancelListings(address[] calldata nftContracts, uint256[] calldata tokenIds) external {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            if (listings[nftContracts[i]][tokenIds[i]][msg.sender].price > 0) {
                delete listings[nftContracts[i]][tokenIds[i]][msg.sender];
                emit ListingCanceled(nftContracts[i], tokenIds[i], msg.sender);
            }
            unchecked { i++; }
        }
    }

    /**
     * @notice Buy an NFT from a listing
     */
    function buyFromListing(address nftContract, uint256 tokenId, address seller) external nonReentrant {
        _buyFromListing(nftContract, tokenId, seller);
    }

    /**
     * @notice Batch buy multiple NFTs from listings
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param sellers Array of seller addresses
     */
    function batchBuyFromListings(address[] calldata nftContracts, uint256[] calldata tokenIds, address[] calldata sellers) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == sellers.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            _buyFromListing(nftContracts[i], tokenIds[i], sellers[i]);
            unchecked { i++; }
        }
    }

    function _buyFromListing(address nftContract, uint256 tokenId, address seller) internal {
        Listing memory listing = listings[nftContract][tokenId][seller];
        require(listing.price > 0, "Listing does not exist");
        require(listing.privateBuyer == address(0) || listing.privateBuyer == msg.sender, "Private listing: only the specified buyer can purchase");

        // Transfer payment from buyer to contract
        paymentToken.safeTransferFrom(msg.sender, address(this), listing.price);

        // Transfer NFT from seller to buyer
        _transferNFT(nftContract, tokenId, seller, msg.sender, listing.amount);

        // CEI: Clear listing
        delete listings[nftContract][tokenId][seller];

        // Distribute proceeds
        _distributeProceedsFromContract(nftContract, tokenId, seller, listing.price);

        emit ListingBought(nftContract, tokenId, msg.sender, seller, listing.price, listing.amount);
    }

    function _transferNFT(address nftContract, uint256 tokenId, address from, address to, uint256 amount) internal {
        if (IERC165(nftContract).supportsInterface(type(IERC721).interfaceId)) {
            require(amount == 1, "ERC721 transfer amount must be 1");
            IERC721 nft = IERC721(nftContract);
            require(nft.ownerOf(tokenId) == from, "From address does not own NFT");
            require(
                nft.isApprovedForAll(from, address(this)) || nft.getApproved(tokenId) == address(this),
                "Contract not approved to transfer NFT"
            );
            nft.safeTransferFrom(from, to, tokenId);
        } else if (IERC165(nftContract).supportsInterface(type(IERC1155).interfaceId)) {
            IERC1155 nft = IERC1155(nftContract);
            require(nft.balanceOf(from, tokenId) >= amount, "Insufficient balance");
            require(nft.isApprovedForAll(from, address(this)), "Contract not approved to transfer NFT");
            nft.safeTransferFrom(from, to, tokenId, amount, "");
        } else {
            revert("Unsupported NFT type");
        }
    }

    function _distributeProceedsFromContract(address nftContract, uint256 tokenId, address seller, uint256 price) internal {
        uint256 protocolFee = (price * protocolFeeBps) / 10000;
        uint256 royaltyFee = 0;
        address royaltyRecipient;

        try IERC2981(nftContract).royaltyInfo(tokenId, price) returns (address receiver, uint256 amount) {
            if (receiver != address(0)) {
                royaltyFee = amount;
                royaltyRecipient = receiver;
            }
        } catch {}

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
        paymentToken.safeTransfer(seller, sellerProceeds);
    }

    /**
     * @notice Reject an offer for your NFT
     * @param nftContract Address of the NFT contract
     * @param tokenId ID of the token being sold
     * @param buyer The address of the buyer whose offer is being rejected
     */
    function rejectOffer(address nftContract, uint256 tokenId, address buyer) external nonReentrant {
        _rejectOffer(nftContract, tokenId, buyer);
    }

    /**
     * @notice Batch reject multiple offers
     * @param nftContracts Array of NFT contract addresses
     * @param tokenIds Array of token IDs
     * @param buyers Array of buyer addresses
     */
    function batchRejectOffers(
        address[] calldata nftContracts,
        uint256[] calldata tokenIds,
        address[] calldata buyers
    ) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == buyers.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; ) {
            _rejectOffer(nftContracts[i], tokenIds[i], buyers[i]);
            unchecked { i++; }
        }
    }

    function _rejectOffer(address nftContract, uint256 tokenId, address buyer) internal {
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
