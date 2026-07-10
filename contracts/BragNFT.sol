// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface IBragToken {
    function mint(address to, uint256 amount) external;
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

// EIP-6454: Minimal Non-Transferable Tokens
interface IERC6454 {
    function isTransferable(uint256 tokenId, address from, address to) external view returns (bool);
}

// Chainlink Price Feed Interface
interface AggregatorV3Interface {
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

/**
 * @title BragNFT
 * @dev A Dual-State NFT that combines tradable art with a soulbound tax receipt.
 * Implements EIP-2981 for royalties and EIP-6454 for transferability signaling.
 */
contract BragNFT is ERC721URIStorage, AccessControl, ReentrancyGuard, Pausable, IERC2981, IERC6454 {
    using Strings for uint256;
    using SafeERC20 for IERC20;

    enum TaxStatus { Pending, Verified, Claimed, Flagged }

    struct PermanentRecord {
        address originalDonor;
        uint256 usdValue; // Recorded in 8 decimals (Chainlink standard)
        uint256 ethAmount; // Recorded in Wei
        uint256 timestamp;
        TaxStatus status;
        string message;
    }

    uint256 public nextTokenId;
    uint256 public maxSupply;
    uint256 public manualEthPrice; // 8 decimals, Chainlink standard
    address public treasury;
    address public royaltyRecipient;
    uint256 public minimumDonation;
    IBragToken public bragToken;
    AggregatorV3Interface public priceFeed;
    uint256 public priceFeedStaleThreshold = 25 hours;

    // EIP-2981 Royalty Support (8% hardcoded for 2026 model)
    uint96 public constant ROYALTY_BPS = 800;

    // Dual-State Registry
    mapping(uint256 => PermanentRecord) public taxRegistry;
    mapping(uint256 => uint256) public glowExpiry;

    // Optional on-chain media storage
    mapping(uint256 => string) public onChainMedia;

    event Donated(address indexed donor, uint256 amount, uint256 usdValue, uint256 tokenId, string message);
    event TopUp(uint256 indexed tokenId, address indexed donor, uint256 amount);
    event PriceFeedFailed();

    constructor(address _initialOwner, address _treasury, uint256 _minimumDonation, address _priceFeed)
        ERC721("BragNFT", "BRAGNFT")
    {
        require(_treasury != address(0), "Invalid treasury address");
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);
        treasury = _treasury;
        royaltyRecipient = _treasury;
        minimumDonation = _minimumDonation;
        priceFeed = AggregatorV3Interface(_priceFeed);
        maxSupply = 100; // Default max supply
    }

    function totalSupply() public view returns (uint256) {
        return nextTokenId;
    }

    function setMaxSupply(uint256 _maxSupply) external onlyRole(DEFAULT_ADMIN_ROLE) {
        maxSupply = _maxSupply;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage, AccessControl, IERC165) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId ||
               interfaceId == type(IERC6454).interfaceId ||
               super.supportsInterface(interfaceId);
    }

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
     * @dev EIP-6454 implementation. Returns true as the NFT itself is transferable.
     * The tax receipt (PermanentRecord) remains pinned to the original donor.
     */
    function isTransferable(uint256 /* tokenId */, address /* from */, address /* to */) external pure override returns (bool) {
        return true;
    }

    /**
     * @dev EIP-2981 royaltyInfo implementation.
     */
    function royaltyInfo(uint256, uint256 salePrice) external view override returns (address, uint256) {
        uint256 royaltyAmount = (salePrice * ROYALTY_BPS) / 10000;
        return (royaltyRecipient, royaltyAmount);
    }

    function setTreasury(address _treasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_treasury != address(0), "Invalid treasury address");
        treasury = _treasury;
    }

    function setRoyaltyRecipient(address _royaltyRecipient) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_royaltyRecipient != address(0), "Invalid royalty recipient address");
        royaltyRecipient = _royaltyRecipient;
    }

    function setMinimumDonation(uint256 _minimumDonation) external onlyRole(DEFAULT_ADMIN_ROLE) {
        minimumDonation = _minimumDonation;
    }

    function setPriceFeed(address _priceFeed) external onlyRole(DEFAULT_ADMIN_ROLE) {
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    function setManualEthPrice(uint256 _manualEthPrice) external onlyRole(DEFAULT_ADMIN_ROLE) {
        manualEthPrice = _manualEthPrice;
    }

    function setPriceFeedStaleThreshold(uint256 _threshold) external onlyRole(DEFAULT_ADMIN_ROLE) {
        priceFeedStaleThreshold = _threshold;
    }

    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }

    function setTaxStatus(uint256 tokenId, TaxStatus status) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _requireOwned(tokenId);
        taxRegistry[tokenId].status = status;
    }

    function setBragToken(address _bragToken) external onlyRole(DEFAULT_ADMIN_ROLE) {
        bragToken = IBragToken(_bragToken);
    }

    /**
     * @dev Update on-chain media for a token. Restricted to DEFAULT_ADMIN_ROLE.
     */
    function updateOnChainMedia(uint256 tokenId, string calldata media) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _requireOwned(tokenId);
        onChainMedia[tokenId] = media;
    }

    /**
     * @dev Batch update on-chain media for multiple tokens. Restricted to DEFAULT_ADMIN_ROLE.
     */
    function batchUpdateOnChainMedia(uint256[] calldata tokenIds, string[] calldata medias) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(tokenIds.length == medias.length, "Mismatched arrays");
        for (uint256 i = 0; i < tokenIds.length; ) {
            _requireOwned(tokenIds[i]);
            onChainMedia[tokenIds[i]] = medias[i];
            unchecked { i++; }
        }
    }

    /**
     * @dev Update the art metadata for a token. Restricted to the current owner.
     * This allows owners to change their Art layer without affecting the immutable tax record.
     */
    function updateMedia(uint256 tokenId, string calldata media, bool onChain) external nonReentrant whenNotPaused {
        _requireOwned(tokenId);
        require(ownerOf(tokenId) == msg.sender, "Not the owner");

        if (onChain) {
            onChainMedia[tokenId] = media;
            _setTokenURI(tokenId, ""); // Clear URI if switching to on-chain
        } else {
            onChainMedia[tokenId] = ""; // Clear on-chain if switching to URI
            _setTokenURI(tokenId, media);
        }
    }

    /**
     * @dev Mint a new BragNFT by donating ETH.
     */
    function donate(string calldata message, string calldata tokenURI_) external payable nonReentrant whenNotPaused {
        _donate(msg.sender, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH with optional on-chain media.
     */
    function donate(string calldata message, string calldata media, bool onChain) external payable nonReentrant whenNotPaused {
        _donate(msg.sender, message, media, onChain);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a specific recipient.
     */
    function donateTo(address recipient, string calldata message, string calldata tokenURI_) external payable nonReentrant whenNotPaused {
        _donate(recipient, message, tokenURI_, false);
    }

    /**
     * @dev Mint a new BragNFT by donating ETH to a recipient with optional on-chain media.
     */
    function donateTo(address recipient, string calldata message, string calldata media, bool onChain) external payable nonReentrant whenNotPaused {
        _donate(recipient, message, media, onChain);
    }

    /**
     * @dev Fallback to handle raw ETH transfers.
     */
    receive() external payable nonReentrant whenNotPaused {
        _donate(msg.sender, "Direct donation", "", false);
    }

    function _getUsdValue(uint256 ethAmount) internal returns (uint256) {
        uint256 usdValue = 0;
        bool feedSuccess = false;
        if (address(priceFeed) != address(0)) {
            int256 answer;
            uint256 updatedAt;
            bool callSuccess = false;
            try priceFeed.latestRoundData() returns (uint80, int256 _answer, uint256, uint256 _updatedAt, uint80) {
                answer = _answer;
                updatedAt = _updatedAt;
                callSuccess = true;
            } catch {
                emit PriceFeedFailed();
            }

            if (callSuccess && answer > 0 && block.timestamp <= updatedAt + priceFeedStaleThreshold) {
                usdValue = (uint256(answer) * ethAmount) / 1e18;
                feedSuccess = true;
            } else if (callSuccess) {
                emit PriceFeedFailed();
            }
        }

        if (!feedSuccess && manualEthPrice > 0) {
            usdValue = (manualEthPrice * ethAmount) / 1e18;
        }

        return usdValue;
    }

    /**
     * @dev Internal donation logic. Records a permanent tax record and mints the NFT.
     */
    function _donate(address recipient, string memory message, string memory media, bool onChain) internal {
        require(msg.value >= minimumDonation, "Donation below minimum");
        require(nextTokenId < maxSupply, "Max supply reached");

        uint256 nftTokenId = nextTokenId++;

        // 1. Get USD Value from Chainlink
        uint256 usdValue = _getUsdValue(msg.value);

        // 2. Create Permanent Record (Effect)
        taxRegistry[nftTokenId] = PermanentRecord({
            originalDonor: msg.sender,
            usdValue: usdValue,
            ethAmount: msg.value,
            timestamp: block.timestamp,
            status: TaxStatus.Pending,
            message: message
        });

        // Initialize glow (proportional to USD value: $1.00 = 30 days)
        uint256 glowDuration = (usdValue * 30 days) / 1e8;
        if (glowDuration < 30 days) glowDuration = 30 days; // Minimum 30 days for new mints
        glowExpiry[nftTokenId] = block.timestamp + glowDuration;

        // 3. Set metadata
        if (onChain) {
            onChainMedia[nftTokenId] = media;
        } else if (bytes(media).length > 0) {
            _setTokenURI(nftTokenId, media);
        }

        // 4. Mint the transferable BragNFT
        _safeMint(recipient, nftTokenId);

        // 5. Mint Brag Tokens (1,000,000 per USD)
        if (address(bragToken) != address(0) && usdValue > 0) {
            bragToken.mint(msg.sender, usdValue * 10**16);
        }

        // 6. Transfer to treasury
        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Transfer to treasury failed");

        emit Donated(msg.sender, msg.value, usdValue, nftTokenId, message);
    }

    /**
     * @dev Top up the impact to keep the collectible glowing.
     * Required amount is at least $1.00 USD worth of ETH.
     * Glow duration is added proportionally ($1.00 = 30 days).
     */
    function topUp(uint256 tokenId) external payable nonReentrant whenNotPaused {
        _requireOwned(tokenId);

        uint256 usdValue = _getUsdValue(msg.value);

        require(usdValue >= 1e8, "Top-up requires $1.00 USD");

        uint256 addedDuration = (usdValue * 30 days) / 1e8;

        if (glowExpiry[tokenId] < block.timestamp) {
            glowExpiry[tokenId] = block.timestamp + addedDuration;
        } else {
            glowExpiry[tokenId] += addedDuration;
        }

        // Mint Brag Tokens (1,000,000 per USD)
        if (address(bragToken) != address(0) && usdValue > 0) {
            bragToken.mint(msg.sender, usdValue * 10**16);
        }

        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Transfer to treasury failed");

        emit TopUp(tokenId, msg.sender, msg.value);
    }

    /**
     * @dev Recharge the "glow" of an NFT using BRAG tokens.
     * Requires 1,000,000 BRAG tokens (fixed at $1 value).
     */
    function topUpWithBrag(uint256 tokenId) external nonReentrant whenNotPaused {
        _requireOwned(tokenId);
        uint256 bragAmount = 1_000_000 * 10**18; // 1,000,000 BRAG tokens

        require(address(bragToken) != address(0), "BRAG token not set");
        require(bragToken.transferFrom(msg.sender, treasury, bragAmount), "BRAG transfer failed");

        if (glowExpiry[tokenId] < block.timestamp) {
            glowExpiry[tokenId] = block.timestamp + 30 days;
        } else {
            glowExpiry[tokenId] += 30 days;
        }

        emit TopUp(tokenId, msg.sender, bragAmount);
    }

    /**
     * @dev Checks if the collectible is currently "glowing".
     */
    function isGlowing(uint256 tokenId) public view returns (bool) {
        return glowExpiry[tokenId] > 0 && block.timestamp <= glowExpiry[tokenId];
    }

    /**
     * @dev Returns the metadata URI for a given token. Generates on-chain JSON.
     * Includes "Glowing" state and tax record metadata.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);

        PermanentRecord memory record = taxRegistry[tokenId];
        bool glowing = isGlowing(tokenId);

        string memory imageURI;
        string memory animationURL;

        // Priority: 1. onChainMedia, 2. stored tokenURI, 3. SVG Fallback
        string memory media = onChainMedia[tokenId];
        if (bytes(media).length == 0) {
            media = super.tokenURI(tokenId);
        }

        if (bytes(media).length > 0) {
            if (_isMultimedia(media)) {
                animationURL = media;
                // For multimedia, we use the generated SVG as the thumbnail/image
                imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, record.message, record.status)))));
            } else {
                imageURI = media;
            }
        } else {
            // SVG Fallback using the message
            imageURI = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(_generateSVG(tokenId, record.message, record.status)))));
        }

        string memory animationPart = "";
        if (bytes(animationURL).length > 0) {
            animationPart = string(abi.encodePacked('", "animation_url": "', _escapeJSON(animationURL)));
        }

        bytes memory attributes = abi.encodePacked(
            '{"trait_type": "Message", "value": "', _escapeJSON(record.message), '"},',
            '{"trait_type": "Original Donor", "value": "', Strings.toHexString(record.originalDonor), '"},',
            '{"trait_type": "Donation Value", "value": "$', _formatUSD(record.usdValue), '"},',
            '{"trait_type": "Donation ETH", "value": "', _formatETH(record.ethAmount), ' ETH"},',
            '{"trait_type": "Tax Status", "value": "', _getStatusString(record.status), '"},',
            '{"trait_type": "Glowing", "value": "', glowing ? "Yes" : "No", '"}'
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "BragNFT #',
                        tokenId.toString(),
                        '", "description": "Brag.Charity Dual-State Collectible',
                        bytes(record.message).length > 0 ? string(abi.encodePacked(": ", _escapeJSON(record.message))) : "",
                        '", "image": "',
                        _escapeJSON(imageURI),
                        animationPart,
                        '", "attributes": [',
                        attributes,
                        ']}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function _getStatusString(TaxStatus status) internal pure returns (string memory) {
        if (status == TaxStatus.Pending) return "Pending";
        if (status == TaxStatus.Verified) return "Verified";
        if (status == TaxStatus.Claimed) return "Claimed";
        return "Flagged";
    }

    /**
     * @dev Detect if a media string is an audio/video data URI or has a common multimedia extension.
     */
    function _isMultimedia(string memory _media) internal pure returns (bool) {
        bytes memory b = bytes(_media);
        uint256 len = b.length;
        if (len < 4) return false;

        // Check for "data:audio/", "data:video/" or "data:image/gif" prefix
        if (len >= 11) {
            if (b[0] == 'd' && b[1] == 'a' && b[2] == 't' && b[3] == 'a' && b[4] == ':') {
                if (b[5] == 'a' && b[6] == 'u' && b[7] == 'd' && b[8] == 'i' && b[9] == 'o' && b[10] == '/') return true;
                if (b[5] == 'v' && b[6] == 'i' && b[7] == 'd' && b[8] == 'e' && b[9] == 'o' && b[10] == '/') return true;
                if (len >= 14 && b[5] == 'i' && b[6] == 'm' && b[7] == 'a' && b[8] == 'g' && b[9] == 'e' && b[10] == '/' && b[11] == 'g' && b[12] == 'i' && b[13] == 'f') return true;
            }
        }

        // Check for 3-letter extensions: .mp3, .wav, .ogg, .m4a, .aac, .mp4, .mov, .ogv, .m4v, .gif, .glb
        if (b[len - 4] == '.') {
            bytes1 b1 = _toLower(b[len - 3]);
            bytes1 b2 = _toLower(b[len - 2]);
            bytes1 b3 = _toLower(b[len - 1]);

            if (b1 == 'm' && b2 == 'p' && b3 == '3') return true;
            if (b1 == 'w' && b2 == 'a' && b3 == 'v') return true;
            if (b1 == 'o' && b2 == 'g' && b3 == 'g') return true;
            if (b1 == 'm' && b2 == '4' && b3 == 'a') return true;
            if (b1 == 'a' && b2 == 'a' && b3 == 'c') return true;
            if (b1 == 'm' && b2 == 'p' && b3 == '4') return true;
            if (b1 == 'm' && b2 == 'o' && b3 == 'v') return true;
            if (b1 == 'o' && b2 == 'g' && b3 == 'v') return true;
            if (b1 == 'm' && b2 == '4' && b3 == 'v') return true;
            if (b1 == 'g' && b2 == 'i' && b3 == 'f') return true;
            if (b1 == 'g' && b2 == 'l' && b3 == 'b') return true;
        }

        // Check for 4-letter extensions: .webm, .webp, .gltf
        if (len >= 5 && b[len - 5] == '.') {
            bytes1 b1 = _toLower(b[len - 4]);
            bytes1 b2 = _toLower(b[len - 3]);
            bytes1 b3 = _toLower(b[len - 2]);
            bytes1 b4 = _toLower(b[len - 1]);

            if (b1 == 'w' && b2 == 'e' && b3 == 'b' && b4 == 'm') return true;
            if (b1 == 'w' && b2 == 'e' && b3 == 'b' && b4 == 'p') return true;
            if (b1 == 'g' && b2 == 'l' && b3 == 't' && b4 == 'f') return true;
        }

        return false;
    }

    function _toLower(bytes1 b) internal pure returns (bytes1) {
        if (uint8(b) >= 65 && uint8(b) <= 90) {
            return bytes1(uint8(b) + 32);
        }
        return b;
    }

    /**
     * @dev Generates a simple SVG image with the donation message and optional glow.
     */
    function _generateSVG(uint256 tokenId, string memory message, TaxStatus status) internal view returns (string memory) {
        bool glowing = isGlowing(tokenId);
        string memory truncatedMessage = _substring(message, 32);
        string memory displayText = bytes(truncatedMessage).length > 0 ? _escapeSVG(truncatedMessage) : string(abi.encodePacked("BragNFT #", tokenId.toString()));

        string memory filterDef = "";
        string memory textStyle = "fill: white; font-family: sans-serif; font-size: 20px; font-weight: bold;";

        if (glowing) {
            filterDef = '<defs><filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>';
        }

        string memory gStart = glowing ? '<g filter="url(#glow)">' : '<g>';

        string memory bgColor = "#6366f1"; // Pending (Indigo)
        if (status == TaxStatus.Verified) bgColor = "#22c55e"; // Green
        else if (status == TaxStatus.Claimed) bgColor = "#eab308"; // Gold
        else if (status == TaxStatus.Flagged) bgColor = "#ef4444"; // Red

        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            filterDef,
            '<style>.base { ', textStyle, ' }</style>',
            '<rect width="100%" height="100%" fill="', bgColor, '" />',
            gStart,
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">',
            displayText,
            '</text></g></svg>'
        ));
    }

    function _formatUSD(uint256 usdValue) internal pure returns (string memory) {
        uint256 dollars = usdValue / 1e8;
        uint256 cents = (usdValue % 1e8) / 1e6;
        string memory centsStr = cents < 10 ? string(abi.encodePacked("0", cents.toString())) : cents.toString();
        return string(abi.encodePacked(dollars.toString(), ".", centsStr));
    }

    function _formatETH(uint256 weiValue) internal pure returns (string memory) {
        uint256 eth = weiValue / 1e18;
        uint256 remainder = (weiValue % 1e18) / 1e14; // 4 decimals
        string memory remainderStr = remainder.toString();
        while (bytes(remainderStr).length < 4) {
            remainderStr = string(abi.encodePacked("0", remainderStr));
        }
        return string(abi.encodePacked(eth.toString(), ".", remainderStr));
    }

    /**
     * @dev Safely truncate a UTF-8 string to a maximum number of bytes without splitting multi-byte characters.
     */
    function _substring(string memory str, uint256 maxLen) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        if (strBytes.length <= maxLen) return str;

        uint256 len = maxLen;
        // If the byte at maxLen is a continuation byte, we are in the middle of a character.
        // We must back up to the start byte of this character.
        if ((uint8(strBytes[len]) & 0xC0) == 0x80) {
            while (len > 0 && (uint8(strBytes[len]) & 0xC0) == 0x80) {
                len--;
            }
            // 'len' is now at the start byte of the truncated character.
            // We should not include this start byte.
        }

        bytes memory result = new bytes(len);
        for (uint256 i = 0; i < len; ) {
            result[i] = strBytes[i];
            unchecked { i++; }
        }
        return string(result);
    }

    /**
     * @dev Escape special characters for SVG text.
     */
    function _escapeSVG(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; ) {
            if (inputBytes[i] == '&') extraLength += 4; // &amp;
            else if (inputBytes[i] == '<') extraLength += 3; // &lt;
            else if (inputBytes[i] == '>') extraLength += 3; // &gt;
            else if (inputBytes[i] == '"') extraLength += 5; // &quot;
            else if (inputBytes[i] == '\'') extraLength += 5; // &apos;
            unchecked { i++; }
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        for (uint256 i = 0; i < length; ) {
            bytes1 b = inputBytes[i];
            if (b == '&') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'm'; outputBytes[j++] = 'p'; outputBytes[j++] = ';';
            } else if (b == '<') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'l'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '>') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'g'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '"') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'q'; outputBytes[j++] = 'u'; outputBytes[j++] = 'o'; outputBytes[j++] = 't'; outputBytes[j++] = ';';
            } else if (b == '\'') {
                outputBytes[j++] = '&'; outputBytes[j++] = 'a'; outputBytes[j++] = 'p'; outputBytes[j++] = 'o'; outputBytes[j++] = 's'; outputBytes[j++] = ';';
            } else {
                outputBytes[j++] = b;
            }
            unchecked { i++; }
        }
        return string(outputBytes);
    }

    /**
     * @dev Escape double quotes, backslashes and control characters for JSON compatibility.
     */
    function _escapeJSON(string memory input) internal pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        uint256 length = inputBytes.length;
        uint256 extraLength = 0;

        for (uint256 i = 0; i < length; ) {
            if (inputBytes[i] == '"' || inputBytes[i] == '\\') {
                extraLength++;
            } else if (uint8(inputBytes[i]) < 0x20) {
                extraLength += 5; // \uXXXX
            }
            unchecked { i++; }
        }

        if (extraLength == 0) return input;

        bytes memory outputBytes = new bytes(length + extraLength);
        uint256 j = 0;
        bytes memory hexAlphabet = "0123456789abcdef";
        for (uint256 i = 0; i < length; ) {
            uint8 b = uint8(inputBytes[i]);
            if (b == 0x22 || b == 0x5C) { // " or \
                outputBytes[j++] = '\\';
                outputBytes[j++] = bytes1(b);
            } else if (b < 0x20) {
                outputBytes[j++] = '\\';
                outputBytes[j++] = 'u';
                outputBytes[j++] = '0';
                outputBytes[j++] = '0';
                outputBytes[j++] = hexAlphabet[b >> 4];
                outputBytes[j++] = hexAlphabet[b & 0x0f];
            } else {
                outputBytes[j++] = bytes1(b);
            }
            unchecked { i++; }
        }
        return string(outputBytes);
    }
}
