// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title LicenseNFT
 * @dev A simple NFT to represent a license for a specific piece of media.
 * In a real scenario, this would have more metadata and potentially rental logic.
 */
contract LicenseNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    // Mapping from tokenId to a Content ID (e.g., DASH/HLS URL or unique identifier)
    mapping(uint256 => string) public contentIds;

    constructor(address initialOwner) ERC721("MediaLicense", "MLIC") Ownable(initialOwner) {}

    /**
     * @dev Mints a new license NFT.
     * @param to The address that will own the license.
     * @param contentId The unique identifier or URI of the content this license unlocks.
     */
    function mintLicense(address to, string memory contentId) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        contentIds[tokenId] = contentId;
        return tokenId;
    }

    /**
     * @dev Allows updating the content associated with a license (only owner for PoC).
     */
    function setContentId(uint256 tokenId, string memory contentId) public onlyOwner {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        contentIds[tokenId] = contentId;
    }
}
