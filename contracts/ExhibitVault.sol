// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

interface IExhibitRegistry {
    struct VaultInfo {
        bool verified;
        uint8 locationType;
        string name;
        string description;
    }
    function isVerified(address vault) external view returns (bool);
    function getVaultInfo(address vault) external view returns (VaultInfo memory);
}

/**
 * @title ExhibitVault
 * @dev A vault contract where NFTs are "exhibited".
 * It tracks the original owner and allows them to withdraw or move the NFT,
 * with optional time-gating (duration).
 */
contract ExhibitVault is ERC721Holder, ERC1155Holder, ReentrancyGuard, AccessControl {
    using SafeERC20 for IERC20;

    IExhibitRegistry public registry;

    // Track original owner of ERC721 tokens
    // nftContract => tokenId => owner
    mapping(address => mapping(uint256 => address)) public owner721;

    // Track original owner of ERC1155 tokens
    // nftContract => tokenId => userAddress => amount
    mapping(address => mapping(uint256 => mapping(address => uint256))) public balances1155;

    // Optional expiries
    mapping(address => mapping(uint256 => uint256)) public expiry721;
    mapping(address => mapping(uint256 => mapping(address => uint256))) public expiry1155;

    event Exhibited721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, string location, uint256 expiry);
    event Exhibited1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, string location, uint256 expiry);
    event Withdrawn721(address indexed nftContract, uint256 indexed tokenId, address indexed owner);
    event Withdrawn1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount);
    event Moved721(address indexed nftContract, uint256 indexed tokenId, address indexed owner, address destinationVault);
    event Moved1155(address indexed nftContract, uint256 indexed tokenId, address indexed owner, uint256 amount, address destinationVault);

    constructor(address initialAdmin, address _registry) {
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
        registry = IExhibitRegistry(_registry);
    }

    /**
     * @dev Allows the contract to receive ETH.
     */
    receive() external payable {}

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155Holder, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
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

    function _parseDepositData(
        address from,
        address operator,
        bytes memory data
    ) internal view returns (address actualOwner, uint256 duration) {
        actualOwner = (from == address(0)) ? operator : from;
        duration = 0;

        bool verifiedOperator = registry.isVerified(operator);
        bool verifiedFrom = from != address(0) && registry.isVerified(from);

        if (data.length == 32) {
            if (verifiedFrom || verifiedOperator) {
                actualOwner = abi.decode(data, (address));
            } else {
                duration = abi.decode(data, (uint256));
            }
        } else if (data.length == 64) {
            require(verifiedFrom || verifiedOperator, "Unauthorized data");
            (actualOwner, duration) = abi.decode(data, (address, uint256));
        }
    }

    /**
     * @dev ERC721 tokens are exhibited by sending them to this contract via safeTransferFrom.
     */
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes memory data
    ) public override returns (bytes4) {
        (address actualOwner, uint256 duration) = _parseDepositData(from, operator, data);

        owner721[msg.sender][tokenId] = actualOwner;
        uint256 newExpiry = duration > 0 ? block.timestamp + duration : 0;
        if (newExpiry > expiry721[msg.sender][tokenId]) {
            expiry721[msg.sender][tokenId] = newExpiry;
        }

        string memory location = registry.getVaultInfo(address(this)).name;
        emit Exhibited721(msg.sender, tokenId, actualOwner, location, expiry721[msg.sender][tokenId]);

        return super.onERC721Received(operator, from, tokenId, data);
    }

    /**
     * @dev ERC1155 tokens are exhibited by sending them to this contract via safeTransferFrom.
     */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public override returns (bytes4) {
        (address actualOwner, uint256 duration) = _parseDepositData(from, operator, data);

        balances1155[msg.sender][id][actualOwner] += value;
        uint256 newExpiry = duration > 0 ? block.timestamp + duration : 0;
        if (newExpiry > expiry1155[msg.sender][id][actualOwner]) {
            expiry1155[msg.sender][id][actualOwner] = newExpiry;
        }

        string memory location = registry.getVaultInfo(address(this)).name;
        emit Exhibited1155(msg.sender, id, actualOwner, value, location, expiry1155[msg.sender][id][actualOwner]);

        return super.onERC1155Received(operator, from, id, value, data);
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] memory ids,
        uint256[] memory values,
        bytes memory data
    ) public override returns (bytes4) {
        require(ids.length == values.length, "Mismatched arrays");
        (address actualOwner, uint256 duration) = _parseDepositData(from, operator, data);

        uint256 newExpiry = duration > 0 ? block.timestamp + duration : 0;
        string memory location = registry.getVaultInfo(address(this)).name;
        address nftContract = msg.sender;

        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 value = values[i];
            balances1155[nftContract][id][actualOwner] += value;
            if (newExpiry > expiry1155[nftContract][id][actualOwner]) {
                expiry1155[nftContract][id][actualOwner] = newExpiry;
            }
            emit Exhibited1155(nftContract, id, actualOwner, value, location, expiry1155[nftContract][id][actualOwner]);
        }
        return super.onERC1155BatchReceived(operator, from, ids, values, data);
    }

    /**
     * @dev Withdraw an ERC721 token back to the owner's wallet.
     */
    function withdraw721(address nftContract, uint256 tokenId) external nonReentrant {
        _withdraw721(nftContract, tokenId);
    }

    /**
     * @dev Withdraw multiple ERC721 tokens back to the owner's wallet.
     */
    function batchWithdraw721(address[] calldata nftContracts, uint256[] calldata tokenIds) external nonReentrant {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _withdraw721(nftContracts[i], tokenIds[i]);
        }
    }

    function _withdraw721(address nftContract, uint256 tokenId) internal {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
        require(block.timestamp >= expiry721[nftContract][tokenId], "Exhibition not yet expired");

        owner721[nftContract][tokenId] = address(0);
        expiry721[nftContract][tokenId] = 0;
        IERC721(nftContract).safeTransferFrom(address(this), msg.sender, tokenId);

        emit Withdrawn721(nftContract, tokenId, msg.sender);
    }

    /**
     * @dev Withdraw ERC1155 tokens back to the owner's wallet.
     */
    function withdraw1155(address nftContract, uint256 tokenId, uint256 amount) external nonReentrant {
        _withdraw1155(nftContract, tokenId, amount);
    }

    /**
     * @dev Withdraw multiple ERC1155 tokens back to the owner's wallet.
     */
    function batchWithdraw1155(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256[] calldata amounts) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _withdraw1155(nftContracts[i], tokenIds[i], amounts[i]);
        }
    }

    function _withdraw1155(address nftContract, uint256 tokenId, uint256 amount) internal {
        require(balances1155[nftContract][tokenId][msg.sender] >= amount, "Insufficient balance");
        require(block.timestamp >= expiry1155[nftContract][tokenId][msg.sender], "Exhibition not yet expired");

        balances1155[nftContract][tokenId][msg.sender] -= amount;
        if (balances1155[nftContract][tokenId][msg.sender] == 0) {
            expiry1155[nftContract][tokenId][msg.sender] = 0;
        }
        IERC1155(nftContract).safeTransferFrom(address(this), msg.sender, tokenId, amount, "");

        emit Withdrawn1155(nftContract, tokenId, msg.sender, amount);
    }

    /**
     * @dev Withdraw multiple ERC1155 tokens from the same contract back to the owner's wallet.
     */
    function withdrawBatch1155(address nftContract, uint256[] calldata ids, uint256[] calldata amounts) external nonReentrant {
        require(ids.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];
            require(balances1155[nftContract][id][msg.sender] >= amount, "Insufficient balance");
            require(block.timestamp >= expiry1155[nftContract][id][msg.sender], "Exhibition not yet expired");

            balances1155[nftContract][id][msg.sender] -= amount;
            if (balances1155[nftContract][id][msg.sender] == 0) {
                expiry1155[nftContract][id][msg.sender] = 0;
            }
            emit Withdrawn1155(nftContract, id, msg.sender, amount);
        }
        IERC1155(nftContract).safeBatchTransferFrom(address(this), msg.sender, ids, amounts, "");
    }

    /**
     * @dev Move an ERC721 token directly to another verified vault.
     */
    function move721(address nftContract, uint256 tokenId, address destinationVault) external nonReentrant {
        _move721(nftContract, tokenId, destinationVault, 0);
    }

    function move721WithDuration(address nftContract, uint256 tokenId, address destinationVault, uint256 duration) public nonReentrant {
        _move721(nftContract, tokenId, destinationVault, duration);
    }

    /**
     * @dev Move multiple ERC721 tokens directly to another verified vault.
     */
    function batchMove721(address[] calldata nftContracts, uint256[] calldata tokenIds, address destinationVault) external nonReentrant {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _move721(nftContracts[i], tokenIds[i], destinationVault, 0);
        }
    }

    function _move721(address nftContract, uint256 tokenId, address destinationVault, uint256 duration) internal {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
        require(registry.isVerified(destinationVault), "Destination not verified");
        require(block.timestamp >= expiry721[nftContract][tokenId], "Exhibition not yet expired");

        owner721[nftContract][tokenId] = address(0);
        expiry721[nftContract][tokenId] = 0;

        bytes memory data;
        if (duration > 0) {
            data = abi.encode(msg.sender, duration);
        } else {
            data = abi.encode(msg.sender);
        }

        IERC721(nftContract).safeTransferFrom(address(this), destinationVault, tokenId, data);

        emit Moved721(nftContract, tokenId, msg.sender, destinationVault);
    }

    /**
     * @dev Move ERC1155 tokens directly to another verified vault.
     */
    function move1155(address nftContract, uint256 tokenId, uint256 amount, address destinationVault) external nonReentrant {
        _move1155(nftContract, tokenId, amount, destinationVault, 0);
    }

    function move1155WithDuration(address nftContract, uint256 tokenId, uint256 amount, address destinationVault, uint256 duration) public nonReentrant {
        _move1155(nftContract, tokenId, amount, destinationVault, duration);
    }

    /**
     * @dev Move multiple ERC1155 tokens directly to another verified vault.
     */
    function batchMove1155(address[] calldata nftContracts, uint256[] calldata ids, uint256[] calldata amounts, address destinationVault) external nonReentrant {
        require(nftContracts.length == ids.length && ids.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _move1155(nftContracts[i], ids[i], amounts[i], destinationVault, 0);
        }
    }

    function _move1155(address nftContract, uint256 tokenId, uint256 amount, address destinationVault, uint256 duration) internal {
        require(balances1155[nftContract][tokenId][msg.sender] >= amount, "Insufficient balance");
        require(registry.isVerified(destinationVault), "Destination not verified");
        require(block.timestamp >= expiry1155[nftContract][tokenId][msg.sender], "Exhibition not yet expired");

        balances1155[nftContract][tokenId][msg.sender] -= amount;
        if (balances1155[nftContract][tokenId][msg.sender] == 0) {
            expiry1155[nftContract][tokenId][msg.sender] = 0;
        }

        bytes memory data;
        if (duration > 0) {
            data = abi.encode(msg.sender, duration);
        } else {
            data = abi.encode(msg.sender);
        }

        IERC1155(nftContract).safeTransferFrom(address(this), destinationVault, tokenId, amount, data);

        emit Moved1155(nftContract, tokenId, msg.sender, amount, destinationVault);
    }

    /**
     * @dev Move multiple ERC1155 tokens from the same contract directly to another verified vault.
     */
    function moveBatch1155(address nftContract, uint256[] calldata ids, uint256[] calldata amounts, address destinationVault) external nonReentrant {
        _moveBatch1155(nftContract, ids, amounts, destinationVault, 0);
    }

    function moveBatch1155WithDuration(address nftContract, uint256[] calldata ids, uint256[] calldata amounts, address destinationVault, uint256 duration) public nonReentrant {
        _moveBatch1155(nftContract, ids, amounts, destinationVault, duration);
    }

    function _moveBatch1155(address nftContract, uint256[] calldata ids, uint256[] calldata amounts, address destinationVault, uint256 duration) internal {
        require(ids.length == amounts.length, "Mismatched arrays");
        require(registry.isVerified(destinationVault), "Destination not verified");

        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];
            require(balances1155[nftContract][id][msg.sender] >= amount, "Insufficient balance");
            require(block.timestamp >= expiry1155[nftContract][id][msg.sender], "Exhibition not yet expired");

            balances1155[nftContract][id][msg.sender] -= amount;
            if (balances1155[nftContract][id][msg.sender] == 0) {
                expiry1155[nftContract][id][msg.sender] = 0;
            }
            emit Moved1155(nftContract, id, msg.sender, amount, destinationVault);
        }

        bytes memory data;
        if (duration > 0) {
            data = abi.encode(msg.sender, duration);
        } else {
            data = abi.encode(msg.sender);
        }

        IERC1155(nftContract).safeBatchTransferFrom(address(this), destinationVault, ids, amounts, data);
    }

    /**
     * @dev Batch exhibit ERC721 tokens.
     */
    function batchExhibit721(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256 duration) external nonReentrant {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        bytes memory data = duration > 0 ? abi.encode(msg.sender, duration) : abi.encode(msg.sender);
        for (uint256 i = 0; i < nftContracts.length; i++) {
            IERC721(nftContracts[i]).safeTransferFrom(msg.sender, address(this), tokenIds[i], data);
        }
    }

    /**
     * @dev Batch exhibit ERC1155 tokens.
     */
    function batchExhibit1155(address[] calldata nftContracts, uint256[] calldata tokenIds, uint256[] calldata amounts, uint256 duration) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == amounts.length, "Mismatched arrays");
        bytes memory data = duration > 0 ? abi.encode(msg.sender, duration) : abi.encode(msg.sender);
        for (uint256 i = 0; i < nftContracts.length; i++) {
            IERC1155(nftContracts[i]).safeTransferFrom(msg.sender, address(this), tokenIds[i], amounts[i], data);
        }
    }

    /**
     * @dev Extend exhibition duration for an ERC721 token.
     */
    function extendExhibition721(address nftContract, uint256 tokenId, uint256 duration) external nonReentrant {
        require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
        require(duration > 0, "Duration must be > 0");

        uint256 currentExpiry = expiry721[nftContract][tokenId];
        uint256 base = currentExpiry > block.timestamp ? currentExpiry : block.timestamp;
        expiry721[nftContract][tokenId] = base + duration;

        string memory location = registry.getVaultInfo(address(this)).name;
        emit Exhibited721(nftContract, tokenId, msg.sender, location, expiry721[nftContract][tokenId]);
    }

    /**
     * @dev Extend exhibition duration for an ERC1155 token.
     */
    function extendExhibition1155(address nftContract, uint256 tokenId, uint256 duration) external nonReentrant {
        require(balances1155[nftContract][tokenId][msg.sender] > 0, "No balance");
        require(duration > 0, "Duration must be > 0");

        uint256 currentExpiry = expiry1155[nftContract][tokenId][msg.sender];
        uint256 base = currentExpiry > block.timestamp ? currentExpiry : block.timestamp;
        expiry1155[nftContract][tokenId][msg.sender] = base + duration;

        string memory location = registry.getVaultInfo(address(this)).name;
        emit Exhibited1155(nftContract, tokenId, msg.sender, balances1155[nftContract][tokenId][msg.sender], location, expiry1155[nftContract][tokenId][msg.sender]);
    }

    /**
     * @dev Batch extend exhibition duration for ERC721 tokens.
     */
    function batchExtendExhibition721(
        address[] calldata nftContracts,
        uint256[] calldata tokenIds,
        uint256[] calldata durations
    ) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == durations.length, "Mismatched arrays");
        string memory location = registry.getVaultInfo(address(this)).name;
        for (uint256 i = 0; i < nftContracts.length; i++) {
            address nftContract = nftContracts[i];
            uint256 tokenId = tokenIds[i];
            uint256 duration = durations[i];

            require(owner721[nftContract][tokenId] == msg.sender, "Not the owner");
            require(duration > 0, "Duration must be > 0");

            uint256 currentExpiry = expiry721[nftContract][tokenId];
            uint256 base = currentExpiry > block.timestamp ? currentExpiry : block.timestamp;
            expiry721[nftContract][tokenId] = base + duration;

            emit Exhibited721(nftContract, tokenId, msg.sender, location, expiry721[nftContract][tokenId]);
        }
    }

    /**
     * @dev Batch extend exhibition duration for ERC1155 tokens.
     */
    function batchExtendExhibition1155(
        address[] calldata nftContracts,
        uint256[] calldata tokenIds,
        uint256[] calldata durations
    ) external nonReentrant {
        require(nftContracts.length == tokenIds.length && tokenIds.length == durations.length, "Mismatched arrays");
        string memory location = registry.getVaultInfo(address(this)).name;
        for (uint256 i = 0; i < nftContracts.length; i++) {
            address nftContract = nftContracts[i];
            uint256 tokenId = tokenIds[i];
            uint256 duration = durations[i];

            require(balances1155[nftContract][tokenId][msg.sender] > 0, "No balance");
            require(duration > 0, "Duration must be > 0");

            uint256 currentExpiry = expiry1155[nftContract][tokenId][msg.sender];
            uint256 base = currentExpiry > block.timestamp ? currentExpiry : block.timestamp;
            expiry1155[nftContract][tokenId][msg.sender] = base + duration;

            emit Exhibited1155(nftContract, tokenId, msg.sender, balances1155[nftContract][tokenId][msg.sender], location, expiry1155[nftContract][tokenId][msg.sender]);
        }
    }

    /**
     * @dev Move multiple ERC721 tokens with duration directly to another verified vault.
     */
    function batchMove721WithDuration(
        address[] calldata nftContracts,
        uint256[] calldata tokenIds,
        address destinationVault,
        uint256 duration
    ) external nonReentrant {
        require(nftContracts.length == tokenIds.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _move721(nftContracts[i], tokenIds[i], destinationVault, duration);
        }
    }

    /**
     * @dev Move multiple ERC1155 tokens with duration directly to another verified vault.
     */
    function batchMove1155WithDuration(
        address[] calldata nftContracts,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        address destinationVault,
        uint256 duration
    ) external nonReentrant {
        require(nftContracts.length == ids.length && ids.length == amounts.length, "Mismatched arrays");
        for (uint256 i = 0; i < nftContracts.length; i++) {
            _move1155(nftContracts[i], ids[i], amounts[i], destinationVault, duration);
        }
    }

}
