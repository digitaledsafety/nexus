// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Nonces.sol";

/**
 * @title BragToken
 * @dev The governance token for the brag.charity ecosystem.
 * Holders can vote on how treasury funds are spent.
 * Implements ERC20Burnable for token burning and ERC20Votes for governance.
 * Uses AccessControl to allow multiple minters (e.g., BragNFT and Governance).
 */
contract BragToken is ERC20, ERC20Burnable, ERC20Permit, ERC20Votes, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 public immutable maxSupply;

    constructor(address initialOwner, uint256 initialSupply, uint256 _maxSupply)
        ERC20("Brag Token", "BRAG")
        ERC20Permit("Brag Token")
    {
        require(_maxSupply >= initialSupply, "Max supply must be >= initial supply");
        maxSupply = _maxSupply;

        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _grantRole(MINTER_ROLE, initialOwner);

        if (initialSupply > 0) {
            _mint(initialOwner, initialSupply);
        }
    }

    /**
     * @dev Mints new tokens. Only addresses with MINTER_ROLE can call this.
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        require(totalSupply() + amount <= maxSupply, "Exceeds maxSupply");
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}
