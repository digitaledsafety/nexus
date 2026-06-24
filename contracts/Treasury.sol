// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Account, IEntryPoint, PackedUserOperation} from "@openzeppelin/contracts/account/Account.sol";
import {ERC4337Utils} from "@openzeppelin/contracts/account/utils/draft-ERC4337Utils.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {MessageHashUtils} from "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";
import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {ERC721Holder} from "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import {ERC1155Holder} from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title Treasury
 * @dev An EIP-4337 compliant multi-sig smart contract account.
 * Supports a "proposal and multi-transaction" flow for M-of-N operations.
 * Also supports direct 1-of-1 execution via AA or direct calls.
 */
contract Treasury is Account, ERC721Holder, ERC1155Holder, IERC1271, AccessControl {
    using EnumerableSet for EnumerableSet.AddressSet;

    EnumerableSet.AddressSet private _owners;
    uint256 public threshold;
    IEntryPoint private immutable _entryPoint;

    // Nonce -> Signer (to attribute actions across validation and execution)
    mapping(uint256 => address) private _signerByNonce;

    struct Call {
        address target;
        uint256 value;
        bytes data;
    }

    struct Proposal {
        Call[] calls;
        bool executed;
        bool canceled;
        address proposer;
        uint256 approvalCount;
        mapping(address => bool) approved;
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCount;

    event OwnerAdded(address indexed owner);
    event OwnerRemoved(address indexed owner);
    event ThresholdChanged(uint256 threshold);
    event Proposed(uint256 indexed proposalId, address indexed proposer, Call[] calls);
    event Approved(uint256 indexed proposalId, address indexed owner);
    event Executed(uint256 indexed proposalId);
    event Canceled(uint256 indexed proposalId);

    error NotOwner();
    error AlreadyOwner();
    error InvalidThreshold();
    error ProposalNotFound();
    error AlreadyExecuted();
    error AlreadyCanceled();
    error AlreadyApproved();
    error ThresholdNotMet();
    error ExecutionFailed();
    error NotProposer();
    error InvalidOwner();

    /**
     * @dev Initialize the treasury with owners and threshold.
     * @param initialOwners List of owner addresses.
     * @param initialThreshold Required number of approvals for M-of-N operations.
     * @param entryPointAddress The EIP-4337 EntryPoint contract address.
     */
    constructor(address[] memory initialOwners, uint256 initialThreshold, address entryPointAddress) {
        require(initialOwners.length > 0, "No owners provided");
        require(initialThreshold > 0 && initialThreshold <= initialOwners.length, "Invalid threshold");
        require(entryPointAddress != address(0), "Invalid EntryPoint");

        for (uint256 i = 0; i < initialOwners.length; i++) {
            address owner = initialOwners[i];
            require(owner != address(0), "Invalid owner");
            if (_owners.add(owner)) {
                emit OwnerAdded(owner);
                _grantRole(DEFAULT_ADMIN_ROLE, owner);
            }
        }
        threshold = initialThreshold;
        _entryPoint = IEntryPoint(entryPointAddress);
        emit ThresholdChanged(threshold);
    }

    modifier onlyOwner(uint256 nonce) {
        _checkOwner(_getMsgSender(nonce));
        _;
    }

    modifier onlySelf() {
        if (msg.sender != address(this)) {
            revert AccountUnauthorized(msg.sender);
        }
        _;
    }

    // --- AA Implementation ---

    function entryPoint() public view override returns (IEntryPoint) {
        return _entryPoint;
    }

    /**
     * @dev Validates the signature of a UserOperation.
     * Stores the signer in `_signerByNonce` so that the execution call knows who signed.
     */
    function _validateUserOp(
        PackedUserOperation calldata userOp,
        bytes32 userOpHash,
        bytes calldata signature
    ) internal override returns (uint256) {
        (address signer, ECDSA.RecoverError error, ) = ECDSA.tryRecover(userOpHash, signature);
        if (error != ECDSA.RecoverError.NoError || !_owners.contains(signer)) {
            // Fallback: Check for Ethereum Signed Message prefix
            (signer, error, ) = ECDSA.tryRecover(MessageHashUtils.toEthSignedMessageHash(userOpHash), signature);
            if (error != ECDSA.RecoverError.NoError || !_owners.contains(signer)) {
                return ERC4337Utils.SIG_VALIDATION_FAILED;
            }
        }

        _signerByNonce[userOp.nonce] = signer;
        return ERC4337Utils.SIG_VALIDATION_SUCCESS;
    }

    function _rawSignatureValidation(bytes32 hash, bytes calldata signature) internal view override returns (bool) {
        address signer = ECDSA.recover(hash, signature);
        if (_owners.contains(signer)) return true;

        signer = ECDSA.recover(MessageHashUtils.toEthSignedMessageHash(hash), signature);
        return _owners.contains(signer);
    }

    // --- Multi-sig Logic (Proposal Flow) ---

    /**
     * @dev Propose a batch of transactions. The proposer auto-approves it.
     */
    function propose(address[] calldata targets, uint256[] calldata values, bytes[] calldata datas, uint256 nonce) external onlyOwner(nonce) returns (uint256) {
        Call[] memory calls = new Call[](targets.length);
        for (uint256 i = 0; i < targets.length; i++) {
            calls[i] = Call({target: targets[i], value: values[i], data: datas[i]});
        }
        return proposeBatch(calls, nonce);
    }

    /**
     * @dev Propose a batch of transactions using Call struct array.
     */
    function proposeBatch(Call[] memory calls, uint256 nonce) public onlyOwner(nonce) returns (uint256) {
        require(calls.length > 0, "Empty proposal");

        address proposer = _getMsgSender(nonce);
        uint256 proposalId = proposalCount++;

        Proposal storage p = proposals[proposalId];
        for (uint256 i = 0; i < calls.length; i++) {
            p.calls.push(calls[i]);
        }
        p.proposer = proposer;

        emit Proposed(proposalId, proposer, calls);

        p.approved[proposer] = true;
        p.approvalCount = 1;
        emit Approved(proposalId, proposer);

        return proposalId;
    }

    /**
     * @dev Approve an existing proposal.
     */
    function approve(uint256 proposalId, uint256 nonce) public onlyOwner(nonce) {
        _approve(proposalId, nonce);
    }

    /**
     * @dev Batch approve multiple proposals.
     */
    function batchApprove(uint256[] calldata proposalIds, uint256 nonce) external onlyOwner(nonce) {
        for (uint256 i = 0; i < proposalIds.length; i++) {
            _approve(proposalIds[i], nonce);
        }
    }

    function _approve(uint256 proposalId, uint256 nonce) internal {
        address owner = _getMsgSender(nonce);
        if (proposalId >= proposalCount) revert ProposalNotFound();

        Proposal storage p = proposals[proposalId];
        if (p.executed) revert AlreadyExecuted();
        if (p.canceled) revert AlreadyCanceled();
        if (p.approved[owner]) revert AlreadyApproved();

        p.approved[owner] = true;
        p.approvalCount++;

        emit Approved(proposalId, owner);
    }

    /**
     * @dev Execute a proposal that has reached the threshold.
     */
    function executeProposal(uint256 proposalId) external payable {
        if (proposalId >= proposalCount) revert ProposalNotFound();

        Proposal storage p = proposals[proposalId];
        if (p.executed) revert AlreadyExecuted();
        if (p.canceled) revert AlreadyCanceled();
        if (p.approvalCount < threshold) revert ThresholdNotMet();

        p.executed = true;

        for (uint256 i = 0; i < p.calls.length; i++) {
            (bool success, ) = p.calls[i].target.call{value: p.calls[i].value}(p.calls[i].data);
            if (!success) revert ExecutionFailed();
        }

        emit Executed(proposalId);
    }

    /**
     * @dev View function to get proposal data (including individual arrays for backward compatibility).
     */
    function getProposal(uint256 proposalId) external view returns (
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory datas,
        bool executed,
        bool canceled,
        address proposer,
        uint256 approvalCount
    ) {
        if (proposalId >= proposalCount) revert ProposalNotFound();
        Proposal storage p = proposals[proposalId];
        uint256 len = p.calls.length;
        targets = new address[](len);
        values = new uint256[](len);
        datas = new bytes[](len);
        for (uint256 i = 0; i < len; i++) {
            targets[i] = p.calls[i].target;
            values[i] = p.calls[i].value;
            datas[i] = p.calls[i].data;
        }
        return (targets, values, datas, p.executed, p.canceled, p.proposer, p.approvalCount);
    }

    /**
     * @dev Get calls for a proposal.
     */
    function getProposalCalls(uint256 proposalId) external view returns (Call[] memory) {
        if (proposalId >= proposalCount) revert ProposalNotFound();
        return proposals[proposalId].calls;
    }

    /**
     * @dev Cancel a proposal (only by proposer or via treasury execution).
     */
    function cancel(uint256 proposalId, uint256 nonce) external {
        _cancel(proposalId, nonce);
    }

    /**
     * @dev Batch cancel multiple proposals.
     */
    function batchCancel(uint256[] calldata proposalIds, uint256 nonce) external {
        for (uint256 i = 0; i < proposalIds.length; i++) {
            _cancel(proposalIds[i], nonce);
        }
    }

    function _cancel(uint256 proposalId, uint256 nonce) internal {
        address caller = _getMsgSender(nonce);
        if (proposalId >= proposalCount) revert ProposalNotFound();

        Proposal storage p = proposals[proposalId];
        if (p.executed) revert AlreadyExecuted();
        if (p.canceled) revert AlreadyCanceled();

        if (caller != p.proposer && msg.sender != address(this)) {
             revert NotProposer();
        }

        p.canceled = true;
        emit Canceled(proposalId);
    }

    /**
     * @dev Direct execution. Allowed if:
     * 1. Called by EntryPoint (AA) and threshold is 1.
     * 2. Called by the Treasury itself (e.g. via executeProposal).
     * 3. Called by an owner and threshold is 1.
     */
    function execute(address target, uint256 value, bytes calldata data, uint256 nonce) external {
        if (msg.sender == address(entryPoint())) {
            if (threshold != 1) revert InvalidThreshold();
        } else if (msg.sender != address(this)) {
            _checkOwner(msg.sender);
            if (threshold != 1) revert InvalidThreshold();
        }

        (bool success, ) = target.call{value: value}(data);
        if (!success) revert ExecutionFailed();

        // Clean up signer data if called by EntryPoint
        if (msg.sender == address(entryPoint())) {
            delete _signerByNonce[nonce];
        }
    }

    /**
     * @dev Batch direct execution.
     */
    function executeBatch(address[] calldata targets, uint256[] calldata values, bytes[] calldata datas, uint256 nonce) external {
        if (msg.sender == address(entryPoint())) {
            if (threshold != 1) revert InvalidThreshold();
        } else if (msg.sender != address(this)) {
            _checkOwner(msg.sender);
            if (threshold != 1) revert InvalidThreshold();
        }

        require(targets.length == values.length && values.length == datas.length, "Mismatched arrays");

        for (uint256 i = 0; i < targets.length; i++) {
            (bool success, ) = targets[i].call{value: values[i]}(datas[i]);
            if (!success) revert ExecutionFailed();
        }

        // Clean up signer data if called by EntryPoint
        if (msg.sender == address(entryPoint())) {
            delete _signerByNonce[nonce];
        }
    }

    // --- Owner & Threshold Management (Internal Actions) ---

    function addOwner(address newOwner) external onlySelf {
        if (newOwner == address(0)) revert InvalidOwner();
        if (!_owners.add(newOwner)) revert AlreadyOwner();
        emit OwnerAdded(newOwner);
    }

    function removeOwner(address owner) external onlySelf {
        if (!_owners.remove(owner)) revert NotOwner();
        if (_owners.length() < threshold) revert InvalidThreshold();
        if (_owners.length() == 0) revert InvalidThreshold();
        emit OwnerRemoved(owner);
    }

    function changeThreshold(uint256 newThreshold) external onlySelf {
        if (newThreshold == 0 || newThreshold > _owners.length()) revert InvalidThreshold();
        threshold = newThreshold;
        emit ThresholdChanged(threshold);
    }

    // --- Helpers ---

    function _getMsgSender(uint256 nonce) internal view returns (address) {
        if (msg.sender == address(entryPoint())) {
            return _signerByNonce[nonce];
        }
        return msg.sender;
    }

    function _checkOwner(address account) internal view {
        if (!_owners.contains(account)) revert NotOwner();
    }

    function isOwner(address account) public view returns (bool) {
        return _owners.contains(account);
    }

    function getOwners() external view returns (address[] memory) {
        return _owners.values();
    }

    function hasApproved(uint256 proposalId, address owner) external view returns (bool) {
        return proposals[proposalId].approved[owner];
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155Holder, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function isValidSignature(bytes32 hash, bytes calldata signature) external view override returns (bytes4) {
        if (_rawSignatureValidation(hash, signature)) {
            return IERC1271.isValidSignature.selector;
        }
        return 0xffffffff;
    }

    receive() external payable override(Account) {}
}
