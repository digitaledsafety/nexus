const CONTRACT_DATA = {
  "contracts": {
    "IERC165": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    "IERC721": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    "IERC1155": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "uri",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    "BatchGrant": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialAdmin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distribute",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distributeETH",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distributeETHFromBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distributeFromBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60803461006857601f6109e838819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006857516001600160a01b03811681036100685761005890610080565b506040516108be908161010a8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f5160206109c85f395f51905f52602052604090205460ff16610104576001600160a01b03165f8181525f5160206109c85f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a71461047b5750806315270ace146103d0578063227a755814610382578063248a9ca3146103505780632f2ff15d1461032157806336568abe146102eb5780637402c05a1461021957806391d14854146101de578063a217fddf146101c4578063d547741f1461018c5763f8b7fabf146100a1575f61000f565b6100aa36610566565b906100b882849594146105da565b5f5f5b85811061015957503403610114575f5b8481106100d457005b8061010e5f8080806100f16100ec6001988d8d61061a565b61063e565b6100fc878b8b61061a565b35905af1610108610652565b506106b7565b016100cb565b60405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e74000000000000006044820152606490fd5b9061016582858561061a565b35810180911161017857906001016100bb565b634e487b7160e01b5f52601160045260245ffd5b346101c05761001a61019d366105b4565b906101bb6101b6825f525f602052600160405f20015490565b610748565b610808565b5f80fd5b346101c0575f3660031901126101c05760206040515f8152f35b346101c0576101ec366105b4565b905f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101c057610227366104ff565b9290916102326106f9565b61023d8482146105da565b5f5b81811061024857005b6102566100ec82848661061a565b61026182878761061a565b60405163a9059cbb60e01b5f9081526001600160a01b03909316600452903560245290602090604481808b5af19060015f51148216156102ca575b604052156102ac5760010161023f565b635274afe760e01b5f9081526001600160a01b038716600452602490fd5b9060018115166102e257873b15153d1516169061029c565b503d5f823e3d90fd5b346101c0576102f9366105b4565b336001600160a01b038216036103125761001a91610808565b63334bd91960e11b5f5260045ffd5b346101c05761001a610332366105b4565b9061034b6101b6825f525f602052600160405f20015490565b610780565b346101c05760203660031901126101c057602061037a6004355f525f602052600160405f20015490565b604051908152f35b346101c05761039036610566565b9061039c9392936106f9565b6103a78285146105da565b5f5b8481106103b257005b806103ca5f8080806100f16100ec6001988d8d61061a565b016103a9565b346101c0576103de366104ff565b9290916103ec8482146105da565b5f5b8181106103f757005b6104056100ec82848661061a565b61041082878761061a565b6040516323b872dd60e01b5f908152336004526001600160a01b03909316602452903560445290602090606481808b5af19060015f5114821615610463575b6040525f606052156102ac576001016103ee565b9060018115166102e257873b15153d1516169061044f565b346101c05760203660031901126101c0576004359063ffffffff60e01b82168092036101c057602091637965db0b60e01b81149081156104bd575b5015158152f35b6301ffc9a760e01b149050836104b6565b9181601f840112156101c05782359167ffffffffffffffff83116101c0576020808501948460051b0101116101c057565b9060606003198301126101c0576004356001600160a01b03811681036101c0579160243567ffffffffffffffff81116101c0578161053f916004016104ce565b929092916044359067ffffffffffffffff82116101c057610562916004016104ce565b9091565b60406003198201126101c05760043567ffffffffffffffff81116101c05781610591916004016104ce565b929092916024359067ffffffffffffffff82116101c057610562916004016104ce565b60409060031901126101c057600435906024356001600160a01b03811681036101c05790565b156105e157565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b919081101561062a5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036101c05790565b3d156106b2573d9067ffffffffffffffff821161069e5760405191601f8101601f19908116603f0116830167ffffffffffffffff81118482101761069e5760405282523d5f602084013e565b634e487b7160e01b5f52604160045260245ffd5b606090565b156106be57565b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561073157565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff161561076a5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610802575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610802575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea2646970667358221220e4c9ca9461a92dac683e8c95a6fa5eeb8640b1cbcdd981da1f6a189bbc60b47d64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
    },
    "BragNFT": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_initialOwner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_treasury",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_minimumDonation",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_priceFeed",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "StringsInsufficientHexLength",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromTokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_toTokenId",
              "type": "uint256"
            }
          ],
          "name": "BatchMetadataUpdate",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "donor",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "Donated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "MetadataUpdate",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "PriceFeedFailed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "donor",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "TopUp",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "ROYALTY_BPS",
          "outputs": [
            {
              "internalType": "uint96",
              "name": "",
              "type": "uint96"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "bragToken",
          "outputs": [
            {
              "internalType": "contract IBragToken",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenURI_",
              "type": "string"
            }
          ],
          "name": "donate",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "media",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "onChain",
              "type": "bool"
            }
          ],
          "name": "donate",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenURI_",
              "type": "string"
            }
          ],
          "name": "donateTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "media",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "onChain",
              "type": "bool"
            }
          ],
          "name": "donateTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "isGlowing",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "isTransferable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "lastTopUpTimestamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "maxSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minimumDonation",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nextTokenId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "onChainMedia",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "priceFeed",
          "outputs": [
            {
              "internalType": "contract AggregatorV3Interface",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "salePrice",
              "type": "uint256"
            }
          ],
          "name": "royaltyInfo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "royaltyRecipient",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_bragToken",
              "type": "address"
            }
          ],
          "name": "setBragToken",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_maxSupply",
              "type": "uint256"
            }
          ],
          "name": "setMaxSupply",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_minimumDonation",
              "type": "uint256"
            }
          ],
          "name": "setMinimumDonation",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_priceFeed",
              "type": "address"
            }
          ],
          "name": "setPriceFeed",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_royaltyRecipient",
              "type": "address"
            }
          ],
          "name": "setRoyaltyRecipient",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "enum BragNFT.TaxStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "name": "setTaxStatus",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_treasury",
              "type": "address"
            }
          ],
          "name": "setTreasury",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "taxRegistry",
          "outputs": [
            {
              "internalType": "address",
              "name": "originalDonor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "enum BragNFT.TaxStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "topUp",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "topUpWithBrag",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "treasury",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x6080604052346103c2576157666080813803918261001c816103c6565b9384928339810103126103c257610032816103eb565b9061003f602082016103eb565b6100506060604084015193016103eb565b9261005b60406103c6565b6007815266109c9859d3919560ca1b602082015261007960406103c6565b600781526610949051d3919560ca1b6020820152815190916001600160401b0382116102c9575f5490600182811c921680156103b8575b60208310146102ab5781601f84931161034b575b50602090601f83116001146102e8575f926102dd575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116102c957600154600181811c911680156102bf575b60208210146102ab57601f8111610248575b50602090601f83116001146101df5761017d9392915f91836101d4575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556103ff565b50600a80546001600160a01b03199081166001600160a01b03938416908117909255600b80548216909217909155600c92909255600e8054909216921691909117905560646009556040516152bd90816104898239f35b015190505f8061013f565b90601f1983169160015f52815f20925f5b818110610230575091600193918561017d97969410610218575b505050811b01600155610154565b01515f1960f88460031b161c191690555f808061020a565b929360206001819287860151815501950193016101f0565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c810191602085106102a1575b601f0160051c01905b8181106102965750610122565b5f8155600101610289565b9091508190610280565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610110565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100da565b5f8080528281209350601f198516905b818110610333575090846001959493921061031b575b505050811b015f556100ee565b01515f1960f88460031b161c191690555f808061030e565b929360206001819287860151815501950193016102f8565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c810191602085106103ae575b90601f859493920160051c01905b8181106103a057506100c4565b5f8155849350600101610393565b9091508190610385565b91607f16916100b0565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102c957604052565b51906001600160a01b03821682036103c257565b6001600160a01b0381165f9081525f5160206157465f395f51905f52602052604090205460ff16610483576001600160a01b03165f8181525f5160206157465f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561062e575b50361561001a575f80fd5b610022613015565b5f60408051906100328183612c29565b600f82526e2234b932b1ba103237b730ba34b7b760891b602083015260209080519061005e8383612c29565b5f8252600c5434106105f257600854916009548310156105b9576100818361304d565b600855600e545f91906001600160a01b031680610519575b5082516100a581612c0e565b338152858101838152428583019081525f60608401818152608085018b8152898352600f8b5291889020945185546001600160a01b0319166001600160a01b039190911617855592516001850155905160028401559051909160048210156105055761011660049260038301612fc9565b0190518051906001600160401b0382116104355781906101368454612bd6565b601f81116104b7575b508890601f8311600114610454575f92610449575b50508160011b915f199060031b1c19161790555b8051610304575b50815161017c8582612c29565b5f815233156102f1576001600160a01b036101978533613663565b166102de576101a8908433336138bb565b600d546001600160a01b0316801515806102d5575b61022e575b506101f58680805f5160206152285f395f51905f5298993460018060a01b03600a54165af16101ef612f4e565b50612f7d565b815193348552840152820152608060608201528061021833946080830190612b09565b0390a260015f5160206152085f395f51905f5255005b662386f26fc10000820290828204662386f26fc1000014831517156102c157803b156102bd5783516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af19687156102b3575f5160206152285f395f51905f52969761029f575b9695506101c2565b505f6102aa91612c29565b6101f55f610297565b83513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52601160045260245ffd5b508115156101bd565b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b835f5260068552825f20908051906001600160401b03821161043557819061032c8454612bd6565b601f81116103e7575b508790601f8311600114610384575f92610379575b50508160011b915f199060031b1c19161790555b5f5160206152685f395f51905f52848351858152a15f61016f565b015190505f8061034a565b5f8581528981209350601f198516905b8a8282106103d15750509084600195949392106103b9575b505050811b01905561035e565b01515f1960f88460031b161c191690555f80806103ac565b6001859682939686015181550195019301610394565b909150835f52875f20601f840160051c81019189851061042b575b90601f859493920160051c01905b81811061041d5750610335565b5f8155849350600101610410565b9091508190610402565b634e487b7160e01b5f52604160045260245ffd5b015190505f80610154565b5f8581528a81209350601f198516905b8b8282106104a1575050908460019594939210610489575b505050811b019055610168565b01515f1960f88460031b161c191690555f808061047c565b6001859682939686015181550195019301610464565b909150835f52885f20601f840160051c8101918a85106104fb575b90601f859493920160051c01905b8181106104ed575061013f565b5f81558493506001016104e0565b90915081906104d2565b634e487b7160e01b5f52602160045260245ffd5b60a0600491855192838092633fabe5a360e21b82525afa5f9181610583575b5061055657505f5160206152485f395f51905f525f80a15b5f610099565b5f8113610564575b50610550565b670de0b6b3a764000091925061057b903490612eef565b04905f61055e565b6105a691925060a03d60a0116105b2575b61059e8183612c29565b810190612f19565b5050509050905f610538565b503d610594565b815162461bcd60e51b815260048101859052601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b5162461bcd60e51b8152600481018390526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5f905f3560e01c90816301ffc9a714612a385750806302d95a5214612a1057806306fdde0314612949578063081812fc1461290d578063095ea7b3146128235780630fd973ce146122fc5780631653441c14611ccb57806318160ddd1461174a57806323b872dd14611cb3578063248a9ca314611c7f5780632a55205a14611c1f5780632eb9313e14611bdf5780632f2ff15d14611ba057806336568abe14611b5b57806341e42f3014611ac557806342842e0e14611a9557806349c657db14611a785780634c00de8214611a4f57806350017f3e146118cc57806361d027b3146118a35780636352211e1461187257806364cb7e9c146118475780636f8b44b01461182457806370a08231146117d1578063724e78da14611791578063741bef1a1461176857806375794a3c1461174a57806383943dc814611721578063892e9c35146116f7578063916221aa146116ad57806391a6262f1461167e57806391d148541461163457806395d89b41146115515780639604d478146113aa57806396d8f4f31461138c578063a217fddf14611370578063a22cb465146112b8578063a6719b3a14611234578063ab2a6f701461119e578063b88d4fde1461112b578063c631724714611108578063c87b56dd14610a2b578063d3933c1c14610987578063d547741f1461093f578063d5abeb0114610921578063e985e9c5146108c95763f0f442600361000f57346108c65760203660031901126108c657610854612b2d565b61085c613722565b6001600160a01b03168015610881576001600160601b0360a01b600a541617600a5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b80fd5b50346108c65760403660031901126108c65760406108e5612b2d565b916108ee612b43565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346108c657806003193601126108c6576020600954604051908152f35b50346108c65760403660031901126108c65761098360043561095f612b43565b9061097e610979825f526007602052600160405f20015490565b613771565b613837565b5080f35b5060603660031901126108c6576004356001600160401b038111610a27576109b3903690600401612b6f565b906024356001600160401b038111610a23576109d3903690600401612b6f565b9091604435928315158403610a1f576109fc610a0492610a0b966109f5613015565b3691612d05565b923691612d05565b903361305b565b60015f5160206152085f395f51905f525580f35b8580fd5b8380fd5b5080fd5b50346108c65760203660031901126108c65760043590610a4a82612fe1565b50818152600f60205260408120604051610a6381612c0e565b81546001600160a01b031681526001820154602082015260028201546040820152600382015460608201929060ff1660048110156110f4578352610aa990600401612c4a565b9160808201928352610aba85612d48565b9460608186526011602052610ad160408720612c4a565b908151156110e3575b8151156110c557610aea82613faf565b156110bd5750926020610b56603a610b0b610b06895187613b56565b615099565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018a838201520301601f198101835282612c29565b925b60209788604051610b698282612c29565b898152968051611060575b5050610b808751614964565b92516001600160a01b03169182610b97602a612cea565b93610ba56040519586612c29565b602a8552610bb3602a612cea565b601f190136868e013784511561104c5760308c86015384516001101561104c576078602186015360295b60018111610fe35750610fcc5750516004811015610fb857898088818099818e819b8f999b83809c81859f610c12829e614b92565b9015610f955781604051610c27604082612c29565b600381526259657360e81b82820152935b6040519e8f978189017f7b2274726169745f74797065223a20224d657373616765222c202276616c7565905263111d101160e11b60408a015280519182910160448a015e62089f4b60ea1b6044918901918201527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478201526a10113b30b63ab2911d101160a91b60678201528151929091839101607283015e016044019062089f4b60ea1b602e830152603182017f7b2274726169745f74797065223a202254617820537461747573222c20227661905266363ab2911d101160c91b6051830152805192839101605883015e01602e019062089f4b60ea1b602a830152602d82017f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565905263111d101160e11b604d830152805192839101605183015e01602a0161227d60f01b602782015203602701601d1981018952600201610d9d9089612c29565b610da690614c47565b89515190999015610f7a57610df66022610dfc93610dc5869451614964565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f198101835282612c29565b92614964565b91604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e4368617269747920905260538201754475616c2d537461746520436f6c6c65637469626c6560501b9052805192839101606983015e01603301906c1116101134b6b0b3b2911d101160991b6036830152805192839101604383015e0160360190600d8201888152815193849201905e01600d019071222c202261747472696275746573223a205b60701b8252805192839101601283015e0160128101615d7d60f01b905203601201601d1981018252600201610f059082612c29565b610f0e90615099565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008582015281519094859392829101603d85015e820190603d82015203603d01601f1981018352610f629083612c29565b6040519181839283528201610f7691612b09565b0390f35b5050610dfc604051610f8c8382612c29565b8b815292614964565b81604051610fa4604082612c29565b60028152614e6f60f01b8282015293610c38565b634e487b7160e01b89526021600452602489fd5b63e22e27eb60e01b8a526004526014602452604489fd5b90600f81166010811015611038576f181899199a1a9b1b9c1cb0b131b232b360811b901a6110118388613f8a565b5360041c908015611024575f1901610bdd565b634e487b7160e01b8c52601160045260248cfd5b634e487b7160e01b8d52603260045260248dfd5b634e487b7160e01b8b52603260045260248bfd5b6110b591929750611072603591614964565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018b838201520301601f198101835282612c29565b94885f610b74565b939092610b58565b93905060206110dd603a610b0b610b06895187613b56565b92610b58565b90506110ee82613aa6565b90610ada565b634e487b7160e01b85526021600452602485fd5b50346108c65760203660031901126108c657611122613722565b600435600c5580f35b50346108c65760803660031901126108c657611145612b2d565b61114d612b43565b90604435606435926001600160401b03841161119a573660238501121561119a57611185611197943690602481600401359101612d05565b92611191838383612d67565b336139c9565b80f35b8480fd5b50346108c65760203660031901126108c6576004358152600f602052604081209060018060a01b038254169160018101549160028201546111e9600460ff6003860154169401612c4a565b9360405195865260208601526040850152600482101561122057508291610f7691606084015260a0608084015260a0830190612b09565b634e487b7160e01b81526021600452602490fd5b5060803660031901126108c657611249612b2d565b6024356001600160401b0381116112b457611268903690600401612b6f565b916044356001600160401b03811161119a57611288903690600401612b6f565b90926064359384151585036112b0576109fc6112aa92610a0b976109f5613015565b9161305b565b8680fd5b8280fd5b50346108c65760403660031901126108c6576112d2612b2d565b602435908115158092036112b457331561135c576001600160a01b031690811561134857338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b50346108c657806003193601126108c657602090604051908152f35b50346108c657806003193601126108c6576020600c54604051908152f35b50346108c65760203660031901126108c6576004356113c7613015565b6113d081612fe1565b50600d546001600160a01b0316801561151757600a546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269d3c21bcecceda10000006044820152906020908290606490829087905af190811561150c5783916114d1575b50156114955780825260106020524260408320556040519069d3c21bcecceda100000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f5160206152085f395f51905f525580f35b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d602011611504575b816114ec60209383612c29565b810103126112b4575180151581036112b4575f611436565b3d91506114df565b6040513d85823e3d90fd5b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b50346108c657806003193601126108c65760405190806001549061157482612bd6565b808552916001811690811561160d57506001146115b0575b610f768461159c81860382612c29565b604051918291602083526020830190612b09565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b8082106115f35750909150810160200161159c8261158c565b9192600181602092548385880101520191019092916115da565b60ff191660208087019190915292151560051b8501909201925061159c915083905061158c565b50346108c65760403660031901126108c6576040611650612b43565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346108c65760603660031901126108c657611698612b43565b506116a1612b59565b50602060405160018152f35b50346108c65760403660031901126108c65760043560243560048110156112b457611197916116da613722565b6116e381612fe1565b508352600f60205260036040842001612fc9565b50346108c65760203660031901126108c65760406020916004358152601083522054604051908152f35b50346108c657806003193601126108c657600d546040516001600160a01b039091168152602090f35b50346108c657806003193601126108c6576020600854604051908152f35b50346108c657806003193601126108c657600e546040516001600160a01b039091168152602090f35b50346108c65760203660031901126108c6576117ab612b2d565b6117b3613722565b60018060a01b03166001600160601b0360a01b600e541617600e5580f35b50346108c65760203660031901126108c6576001600160a01b036117f3612b2d565b168015611810578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b50346108c65760203660031901126108c65761183e613722565b60043560095580f35b50346108c65760203660031901126108c65761159c6040610f76926004358152601160205220612c4a565b50346108c65760203660031901126108c6576020611891600435612fe1565b6040516001600160a01b039091168152f35b50346108c657806003193601126108c657600a546040516001600160a01b039091168152602090f35b5060203660031901126108c6576004356118e4613015565b6118ed81612fe1565b50600e546305f5e1009083906001600160a01b0316806119c0575b501061197b57808252601060205242604083205561193a8280808060018060a01b03600a541634905af16101ef612f4e565b604051903482527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f5160206152085f395f51905f525580f35b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b60a060049160405192838092633fabe5a360e21b82525afa859181611a29575b506119fe57505f5160206152485f395f51905f528480a15b5f611908565b848113611a0c575b506119f8565b670de0b6b3a76400009150611a22903490612eef565b045f611a06565b611a4391925060a03d60a0116105b25761059e8183612c29565b5050509050905f6119e0565b50346108c657806003193601126108c657600b546040516001600160a01b039091168152602090f35b50346108c657806003193601126108c65760206040516103208152f35b50346108c657611197611aa736612b9c565b9060405192611ab7602085612c29565b858452611191838383612d67565b50346108c65760203660031901126108c657611adf612b2d565b611ae7613722565b6001600160a01b03168015611b0c576001600160601b0360a01b600b541617600b5580f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b50346108c65760403660031901126108c657611b75612b43565b336001600160a01b03821603611b915761098390600435613837565b63334bd91960e11b8252600482fd5b50346108c65760403660031901126108c657610983600435611bc0612b43565b90611bda610979825f526007602052600160405f20015490565b6137ab565b50346108c65760203660031901126108c657611bf9612b2d565b611c01613722565b60018060a01b03166001600160601b0360a01b600d541617600d5580f35b50346108c65760403660031901126108c657602435906103208202918083046103201490151715611c6b57600b54604080516001600160a01b0390921682526127108404602083015290f35b634e487b7160e01b81526011600452602490fd5b50346108c65760203660031901126108c6576020611cab6004355f526007602052600160405f20015490565b604051908152f35b50346108c657611197611cc536612b9c565b91612d67565b5060403660031901126108c6576004356001600160401b038111610a2757611cf7903690600401612b6f565b602435906001600160401b038211610a23576109fc611d1d611d28933690600401612b6f565b9490926109f5613015565b600c5434106122be576008549060095482101561228457611d488261304d565b600855600e548491906001600160a01b0316806121f3575b50604051611d6d81612c0e565b3381526020808201848152426040808501918252606085018a8152608086018a8152898c52600f909552908a20945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190919060048110156121df5790611de160049260038301612fc9565b0190518051906001600160401b0382116121cb578190611e018454612bd6565b601f811161217b575b50602090601f831160011461211957899261210e575b50508160011b915f199060031b1c19161790555b8051611fc3575b50604051611e4a602082612c29565b8481523315611faf576001600160a01b03611e658433613663565b16611f9b57611e76908333336138bb565b600d546001600160a01b031680151580611f92575b611efc575b505f5160206152285f395f51905f5291611ebd858080803460018060a01b03600a54165af16101ef612f4e565b60405191348352602083015260408201526080606082015280611ee533946080830190612b09565b0390a260015f5160206152085f395f51905f525580f35b662386f26fc10000820290828204662386f26fc100001483151715611f7e57908186923b156112b4576040516340c10f1960e01b8152336004820152602481019290925282908290604490829084905af18015611f7357611f5e575b50611e90565b81611f6891612c29565b610a2357835f611f58565b6040513d84823e3d90fd5b634e487b7160e01b86526011600452602486fd5b50811515611e8b565b6339e3563760e11b85526004859052602485fd5b633250574960e11b85526004859052602485fd5b828552600660205260408520908051906001600160401b0382116120fa578190611fed8454612bd6565b601f81116120aa575b50602090601f831160011461204857889261203d575b50508160011b915f199060031b1c19161790555b5f5160206152685f395f51905f526020604051848152a15f611e3b565b015190505f8061200c565b8489528189209250601f198416895b818110612092575090846001959493921061207a575b505050811b019055612020565b01515f1960f88460031b161c191690555f808061206d565b92936020600181928786015181550195019301612057565b90915083885260208820601f840160051c810191602085106120f0575b90601f859493920160051c01905b8181106120e25750611ff6565b8981558493506001016120d5565b90915081906120c7565b634e487b7160e01b87526041600452602487fd5b015190505f80611e20565b848a52818a209250601f1984168a5b818110612163575090846001959493921061214b575b505050811b019055611e34565b01515f1960f88460031b161c191690555f808061213e565b92936020600181928786015181550195019301612128565b90915083895260208920601f840160051c810191602085106121c1575b90601f859493920160051c01905b8181106121b35750611e0a565b8a81558493506001016121a6565b9091508190612198565b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b88526021600452602488fd5b60a060049160405192838092633fabe5a360e21b82525afa86918161225e575b5061223157505f5160206152485f395f51905f528580a15b5f611d60565b85811361223f575b5061222b565b670de0b6b3a7640000919250612256903490612eef565b04905f612239565b61227891925060a03d60a0116105b25761059e8183612c29565b5050509050905f612213565b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5060603660031901126102bd57612311612b2d565b6024356001600160401b0381116102bd57612330903690600401612b6f565b604492919235906001600160401b0382116102bd5761236461235961236c933690600401612b6f565b9590926109f5613015565b933691612d05565b90600c5434106122be57600854906009548210156122845761238d8261304d565b600855600e545f93906001600160a01b031680612792575b506040516123b281612c0e565b33815260208082018681524260408085019182525f60608601818152608087018c81528a8352600f909652919020945185546001600160a01b0319166001600160a01b03919091161785559151600185015551600284015551909160048210156105055761242560049260038301612fc9565b0190518051906001600160401b0382116104355781906124458454612bd6565b601f8111612742575b50602090601f83116001146126df575f926126d4575b50508160011b915f199060031b1c19161790555b805161259c575b5060405161248e602082612c29565b5f81526001600160a01b038216156102f1576001600160a01b036124b28484613663565b166102de57826124c292336138bb565b600d546001600160a01b031680151580612593575b61250a575b50905f5160206152285f395f51905f5291611ebd858080803460018060a01b03600a54165af16101ef612f4e565b662386f26fc10000830290838204662386f26fc1000014841517156102c157803b156102bd576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1801561258857156124dc575f5160206152285f395f51905f52929194505f61257f91612c29565b5f9390916124dc565b6040513d5f823e3d90fd5b508215156124d7565b825f52600660205260405f20908051906001600160401b0382116104355781906125c68454612bd6565b601f8111612684575b50602090601f8311600114612621575f92612616575b50508160011b915f199060031b1c19161790555b5f5160206152685f395f51905f526020604051848152a15f61247f565b015190505f806125e5565b5f8581528281209350601f198516905b81811061266c5750908460019594939210612654575b505050811b0190556125f9565b01515f1960f88460031b161c191690555f8080612647565b92936020600181928786015181550195019301612631565b909150835f5260205f20601f840160051c810191602085106126ca575b90601f859493920160051c01905b8181106126bc57506125cf565b5f81558493506001016126af565b90915081906126a1565b015190505f80612464565b5f8581528281209350601f198516905b81811061272a5750908460019594939210612712575b505050811b019055612478565b01515f1960f88460031b161c191690555f8080612705565b929360206001819287860151815501950193016126ef565b909150835f5260205f20601f840160051c81019160208510612788575b90601f859493920160051c01905b81811061277a575061244e565b5f815584935060010161276d565b909150819061275f565b60a060049160405192838092633fabe5a360e21b82525afa5f91816127fd575b506127d057505f5160206152485f395f51905f525f80a15b5f6123a5565b5f81136127de575b506127ca565b670de0b6b3a76400009194506127f5903490612eef565b04925f6127d8565b61281791925060a03d60a0116105b25761059e8183612c29565b5050509050905f6127b2565b346102bd5760403660031901126102bd5761283c612b2d565b60243561284881612fe1565b331515806128fa575b806128cd575b6128ba5781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615612857565b506001600160a01b038116331415612851565b346102bd5760203660031901126102bd5760043561292a81612fe1565b505f526004602052602060018060a01b0360405f205416604051908152f35b346102bd575f3660031901126102bd576040515f5f5461296881612bd6565b80845290600181169081156129ec5750600114612990575b610f768361159c81850382612c29565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106129d25750909150810160200161159c612980565b9192600181602092548385880101520191019092916129ba565b60ff191660208086019190915291151560051b8401909101915061159c9050612980565b346102bd5760203660031901126102bd576020612a2e600435612d48565b6040519015158152f35b346102bd5760203660031901126102bd576004359063ffffffff60e01b82168092036102bd5760209163152a902d60e11b8114908115612af8575b8115612a81575b5015158152f35b637965db0b60e01b811491508115612a9b575b5083612a7a565b632483248360e11b811491508115612ab5575b5083612a94565b6380ac58cd60e01b811491508115612ae7575b8115612ad6575b5083612aae565b6301ffc9a760e01b14905083612acf565b635b5e139f60e01b81149150612ac8565b6391a6262f60e01b81149150612a73565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036102bd57565b602435906001600160a01b03821682036102bd57565b604435906001600160a01b03821682036102bd57565b9181601f840112156102bd578235916001600160401b0383116102bd57602083818601950101116102bd57565b60609060031901126102bd576004356001600160a01b03811681036102bd57906024356001600160a01b03811681036102bd579060443590565b90600182811c92168015612c04575b6020831014612bf057565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612be5565b60a081019081106001600160401b0382111761043557604052565b90601f801991011681019081106001600160401b0382111761043557604052565b9060405191825f825492612c5d84612bd6565b8084529360018116908115612cc85750600114612c84575b50612c8292500383612c29565b565b90505f9291925260205f20905f915b818310612cac575050906020612c82928201015f612c75565b6020919350806001915483858901015201910190918492612c93565b905060209250612c8294915060ff191682840152151560051b8201015f612c75565b6001600160401b03811161043557601f01601f191660200190565b929192612d1182612cea565b91612d1f6040519384612c29565b8294818452818301116102bd578281602093845f960137010152565b919082018092116102c157565b5f52601060205260405f205462278d0081018091116102c15742111590565b6001600160a01b03909116919082156102f1575f828152600260205260409020546001600160a01b031692829033151580612e5a575b5084612e27575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303612e0f57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612da4565b90915080612e9e575b15612e705782905f612d9d565b8284612e8857637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015612ecd575b80612e6357505f838152600460205260409020546001600160a01b03163314612e63565b505f84815260056020908152604080832033845290915290205460ff16612ea9565b818102929181159184041417156102c157565b519069ffffffffffffffffffff821682036102bd57565b908160a09103126102bd57612f2d81612f02565b91602082015191604081015191612f4b608060608401519301612f02565b90565b3d15612f78573d90612f5f82612cea565b91612f6d6040519384612c29565b82523d5f602084013e565b606090565b15612f8457565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b9060048110156105055760ff80198354169116179055565b5f818152600260205260409020546001600160a01b0316908115613003575090565b637e27328960e01b5f5260045260245ffd5b60025f5160206152085f395f51905f52541461303e5760025f5160206152085f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b5f1981146102c15760010190565b91929092600c54925f9334106122be5760085491600954831015612284576130828361304d565b600855600e545f94906001600160a01b0316806135d2575b506040516130a781612c0e565b33815260208082018781524260408085019182525f60608601818152608087018e81528b8352600f909652919020945185546001600160a01b0319166001600160a01b03919091161785559151600185015551600284015551909160048210156105055761311a60049260038301612fc9565b0190518051906001600160401b03821161043557819061313a8454612bd6565b601f8111613582575b50602090601f831160011461351f575f92613514575b50508160011b915f199060031b1c19161790555b156133cf57825f52601160205260405f20908051906001600160401b03821161043557819061319c8454612bd6565b601f811161337f575b50602090601f831160011461331c575f92613311575b50508160011b915f199060031b1c19161790555b6040516131dd602082612c29565b5f81526001600160a01b038216156102f1576001600160a01b036132018484613663565b166102de578261321192336138bb565b600d546001600160a01b031680151580613308575b613284575b506132578380805f5160206152285f395f51905f52963460018060a01b03600a54165af16101ef612f4e565b6040519134835260208301526040820152608060608201528061327f33946080830190612b09565b0390a2565b662386f26fc10000830290838204662386f26fc1000014841517156102c157803b156102bd576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1938415612588575f5160206152285f395f51905f52946132f4575b935061322b565b505f6132ff91612c29565b6132575f6132ed565b50821515613226565b015190505f806131bb565b5f8581528281209350601f198516905b818110613367575090846001959493921061334f575b505050811b0190556131cf565b01515f1960f88460031b161c191690555f8080613342565b9293602060018192878601518155019501930161332c565b909150835f5260205f20601f840160051c810191602085106133c5575b90601f859493920160051c01905b8181106133b757506131a5565b5f81558493506001016133aa565b909150819061339c565b80516133dc575b506131cf565b825f52600660205260405f20908051906001600160401b0382116104355781906134068454612bd6565b601f81116134c4575b50602090601f8311600114613461575f92613456575b50508160011b915f199060031b1c19161790555b5f5160206152685f395f51905f526020604051848152a15f6133d6565b015190505f80613425565b5f8581528281209350601f198516905b8181106134ac5750908460019594939210613494575b505050811b019055613439565b01515f1960f88460031b161c191690555f8080613487565b92936020600181928786015181550195019301613471565b909150835f5260205f20601f840160051c8101916020851061350a575b90601f859493920160051c01905b8181106134fc575061340f565b5f81558493506001016134ef565b90915081906134e1565b015190505f80613159565b5f8581528281209350601f198516905b81811061356a5750908460019594939210613552575b505050811b01905561316d565b01515f1960f88460031b161c191690555f8080613545565b9293602060018192878601518155019501930161352f565b909150835f5260205f20601f840160051c810191602085106135c8575b90601f859493920160051c01905b8181106135ba5750613143565b5f81558493506001016135ad565b909150819061359f565b60a060049160405192838092633fabe5a360e21b82525afa5f918161363d575b5061361057505f5160206152485f395f51905f525f80a15b5f61309a565b5f811361361e575b5061360a565b670de0b6b3a7640000919550613635903490612eef565b04935f613618565b61365791925060a03d60a0116105b25761059e8183612c29565b5050509050905f6135f2565b5f828152600260205260409020546001600160a01b03169190826136ef575b6001600160a01b0316806136d7575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f2060018154019055613691565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055613682565b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561375a57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156137955750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16613831575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff1615613831575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b9291813b6138ca575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f60248201526044810191909152608060648201529216919060209082908190613915906084830190612b09565b03815f865af15f9181613984575b506139515750613931612f4e565b8051908161394c5782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161397257505f8080806138c4565b633250574960e11b5f5260045260245ffd5b9091506020813d6020116139c1575b816139a060209383612c29565b810103126102bd57516001600160e01b0319811681036102bd57905f613923565b3d9150613993565b823b6139d7575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190613a23906084830190612b09565b03815f865af15f9181613a61575b50613a3f5750613931612f4e565b6001600160e01b03191663757a42ff60e11b0161397257505f808080806139d0565b9091506020813d602011613a9e575b81613a7d60209383612c29565b810103126102bd57516001600160e01b0319811681036102bd57905f613a31565b3d9150613a70565b613aaf81612fe1565b50602090604051613ac08382612c29565b5f8152815f5260068352613ad660405f20612c4a565b815115613b4f5780849151613b1457505050613af190612fe1565b505f604051613b008382612c29565b52613b0e6040519182612c29565b5f815290565b612f4b935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612c29565b9250505090565b60116053612f4b92613b6781612d48565b855190959015613f3c57613b7b9150614daf565b935b60209485604051613b8e8282612c29565b5f815291604051613ba0608082612c29565b604981528281017f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7381527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040830152856868743a20626f6c643b60b81b6060840152613e24575b600f9160828592603c97985f14613e0157604051613c27604082612c29565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000085820152925b6040519d8e9a7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230828d01527f30302f73766722207072657365727665417370656374526174696f3d22784d6960408d01527f6e594d696e206d656574222076696577426f783d22302030203335302033353060608d015261111f60f11b60808d0152805191829101858d015e8a01906e01e39ba3cb6329f173130b9b2903d9608d1b84830152518092609183015e01019069103e9e17b9ba3cb6329f60b11b848301527f3c726563742077696474683d223130302522206865696768743d223130302522601983015271103334b6361e91119b199b1b33189110179f60711b6039830152805192839101604b83015e0101907f3c7465787420783d223530252220793d223530252220636c6173733d22626173848301527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465605c830152723c3a16b0b731b437b91e9136b4b2323632911f60691b607c830152805192839101608f83015e0101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b838201520301600e19810184520182612c29565b604051613e0f604082612c29565b60038152621e339f60e91b8582015292613c52565b603c9450600f9160828592610100613e3f6040519182612c29565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522858201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e082015297509250509150613c08565b50613f846029613f4d602093614c47565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612c29565b93613b7d565b908151811015613f9b570160200190565b634e487b7160e01b5f52603260045260245ffd5b8051906004821061383157600b8210156144e0575b60031982018281116102c157601760f91b6001600160f81b0319613fe88385613f8a565b5116146141a3575b600583101580614174575b614007575b5050505f90565b614026906001600160f81b03199061401f9084613f8a565b51166151c8565b9060021983018381116102c15761404b906001600160f81b03199061401f9084613f8a565b9260011981018181116102c157614070906001600160f81b03199061401f9085613f8a565b915f1982019182116102c15761401f61408e9260ff60f81b92613f8a565b6001600160f81b0319909216607760f81b1492838061415d575b80614146575b8061412f575b614126578361410e575b50826140f6575b50816140de575b506140d9575f8080614000565b600190565b6001600160f81b031916600760fc1b1490505f6140cc565b6001600160f81b031916603160f91b1491505f6140c5565b6001600160f81b031916606560f81b1492505f6140be565b50505050600190565b506001600160f81b03198316606d60f81b146140b4565b506001600160f81b03198216603160f91b146140ae565b506001600160f81b03198116606560f81b146140a8565b5060041983018381116102c157601760f91b906001600160f81b03199061419b9085613f8a565b511614613ffb565b60021983018381116102c1576141c7906001600160f81b03199061401f9085613f8a565b60011984018481116102c1576141eb906001600160f81b03199061401f9086613f8a565b905f1985018581116102c15761420f906001600160f81b03199061401f9087613f8a565b906001600160f81b031916606d60f81b811480806144c9575b806144b2575b61435757607760f81b82148061449b575b80614484575b61435757606f60f81b8214808061446d575b80614456575b61439157818061443f575b80614428575b61439157606160f81b831480614411575b806143fa575b6143915781806143e3575b806143cc575b6143915781806143b5575b8061439e575b614391578061437a575b80614363575b6143575780614340575b80614329575b61431e57606760f81b149182614306575b50816142ee575b5015613ff0575b505050600190565b6001600160f81b031916603360f91b1490505f6142df565b6001600160f81b031916606960f81b1491505f6142d8565b505050505050600190565b506001600160f81b03198216603b60f91b146142c7565b506001600160f81b03198316600d60fa1b146142c1565b50505050505050600190565b506001600160f81b03198316603b60f91b146142b7565b506001600160f81b03198416606760f81b146142b1565b5050505050505050600190565b506001600160f81b03198416603b60f91b146142a7565b506001600160f81b03198516606f60f81b146142a1565b506001600160f81b03198416600d60fa1b14614296565b506001600160f81b03198516600760fc1b14614290565b506001600160f81b03198416606360f81b14614285565b506001600160f81b03198516606160f81b1461427f565b506001600160f81b03198416606160f81b1461426e565b506001600160f81b03198516600d60fa1b14614268565b506001600160f81b03198416606760f81b1461425d565b506001600160f81b03198516606760f81b14614257565b506001600160f81b03198316603b60f91b14614245565b506001600160f81b03198416606160f81b1461423f565b506001600160f81b03198316603360f81b1461422e565b506001600160f81b03198416600760fc1b14614228565b8115613f9b5760208101516001600160f81b031916601960fa1b148061490d575b806148e8575b806148c3575b8061489e575b15613fc457805160051015613f9b576025810180516001600160f81b031916606160f81b1480614879575b80614854575b8061482f575b8061480a575b806147e5575b6142e657815160051015613f9b5780516001600160f81b031916603b60f91b14806147c0575b8061479b575b80614776575b80614751575b8061472c575b6142e657600e8310159081614709575b50806146e4575b806146bf575b8061469a575b80614675575b80614650575b8061462b575b80614606575b806145e1575b15613fc4575050600190565b508051600d1015613f9b57602d8101516001600160f81b031916603360f91b146145d5565b508051600c1015613f9b57602c8101516001600160f81b031916606960f81b146145cf565b508051600b1015613f9b57602b8101516001600160f81b031916606760f81b146145c9565b508051600a1015613f9b57602a8101516001600160f81b031916602f60f81b146145c3565b50805160091015613f9b5760298101516001600160f81b031916606560f81b146145bd565b50805160081015613f9b5760288101516001600160f81b031916606760f81b146145b7565b50805160071015613f9b5760278101516001600160f81b031916606160f81b146145b1565b50805160061015613f9b5760268101516001600160f81b031916606d60f81b146145ab565b9050815160051015613f9b57516001600160f81b031916606960f81b145f6145a4565b508151600a1015613f9b57602a8201516001600160f81b031916602f60f81b14614594565b50815160091015613f9b5760298201516001600160f81b031916606f60f81b1461458e565b50815160081015613f9b5760288201516001600160f81b031916606560f81b14614588565b50815160071015613f9b5760278201516001600160f81b031916601960fa1b14614582565b50815160061015613f9b5760268201516001600160f81b031916606960f81b1461457c565b508151600a1015613f9b57602a8201516001600160f81b031916602f60f81b14614556565b50815160091015613f9b5760298201516001600160f81b031916606f60f81b14614550565b50815160081015613f9b5760288201516001600160f81b031916606960f81b1461454a565b50815160071015613f9b5760278201516001600160f81b031916601960fa1b14614544565b50815160061015613f9b5760268201516001600160f81b031916607560f81b1461453e565b50805160041015613f9b5760248101516001600160f81b031916601d60f91b14614513565b50805160031015613f9b5760238101516001600160f81b031916606160f81b1461450d565b50805160021015613f9b5760228101516001600160f81b031916601d60fa1b14614507565b50805160011015613f9b5760218101516001600160f81b031916606160f81b14614501565b9061493c82612cea565b6149496040519182612c29565b828152809261495a601f1991612cea565b0190602036910137565b80515f5f5b828110614b0557508015614b00576149846149899183612d3b565b614932565b915f5f915b83831061499c575050505090565b6149a68382613f8a565b51928360f81c602281148015614af6575b15614a01575082605c6149d66149cf6001959661304d565b9289613f8a565b536149f76149e38261304d565b956001600160f81b0319165f1a9188613f8a565b535b01919061498e565b6020811015614ae457614ac58495605c614a27614a206001979861304d565b988b613f8a565b536075614a36614a208961304d565b536030614a45614a208961304d565b536030614a54614a208961304d565b53604090614a6482519283612c29565b601082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301526001600160f81b031990614a989060fc1c83613f8a565b511696614ab1614aa78261304d565b985f1a918b613f8a565b536001600160f81b031992600f1690613f8a565b511693614ade614ad48261304d565b955f1a9188613f8a565b536149f9565b5082614ade6149e3600194959261304d565b50605c81146149b7565b505090565b90601160f91b6001600160f81b0319614b1e8487613f8a565b5116148015614b71575b15614b4057614b3860019161304d565b915b01614969565b906020614b4d8286613f8a565b5160f81c10614b5f575b600190614b3a565b90600581018091116102c15790614b57565b50601760fa1b6001600160f81b0319614b8a8487613f8a565b511614614b28565b6004811015610505578015614c215760018114614bfa57600214614bd557604051614bbe604082612c29565b6007815266119b1859d9d95960ca1b602082015290565b604051614be3604082612c29565b600781526610db185a5b595960ca1b602082015290565b50604051614c09604082612c29565b600881526715995c9a599a595960c21b602082015290565b50604051614c30604082612c29565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b821015614d8c575b806d04ee2d6d415b85acef8100000000600a921015614d71575b662386f26fc10000811015614d5d575b6305f5e100811015614d4c575b612710811015614d3d575b6064811015614d2f575b1015614d24575b600a60216001840193614cce85612cea565b94614cdc6040519687612c29565b808652614ceb601f1991612cea565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a8353048015614b0057600a9091614cf6565b600190910190614cbc565b606460029104930192614cb5565b61271060049104930192614cab565b6305f5e10060089104930192614ca0565b662386f26fc1000060109104930192614c93565b6d04ee2d6d415b85acef810000000060209104930192614c83565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8104614c69565b80515f5f5b828110614f8f57508015614b0057614984614dcf9183612d3b565b915f905f5b838110614de2575050505090565b6001600160f81b0319614df58284613f8a565b5116601360f91b8103614e5f57506001906026614e1b614e148661304d565b9588613f8a565b536061614e2a614e148661304d565b53606d614e39614e148661304d565b536070614e48614e148661304d565b53603b614e57614e148661304d565b535b01614dd4565b600f60fa1b8103614eaf57506001906026614e7c614e148661304d565b53606c614e8b614e148661304d565b536074614e9a614e148661304d565b53603b614ea9614e148661304d565b53614e59565b601f60f91b8103614edb57506001906026614ecc614e148661304d565b536067614e8b614e148661304d565b601160f91b8103614f2557506001906026614ef8614e148661304d565b536071614f07614e148661304d565b536075614f16614e148661304d565b53606f614e8b614e148661304d565b602760f81b8103614f7e57506001906026614f42614e148661304d565b536061614f51614e148661304d565b536070614f60614e148661304d565b53606f614f6f614e148661304d565b536073614e9a614e148661304d565b9260019190614ea9614ad48261304d565b90601360f91b6001600160f81b0319614fa88487613f8a565b511603614fc557600481018091116102c157600190915b01614db4565b600f60fa1b6001600160f81b0319614fdd8487613f8a565b511603614ff857600381018091116102c15760019091614fbf565b601f60f91b6001600160f81b03196150108487613f8a565b51160361502b57600381018091116102c15760019091614fbf565b601160f91b6001600160f81b03196150438487613f8a565b51160361505e57600581018091116102c15760019091614fbf565b90602760f81b6001600160f81b03196150778387613f8a565b511614615087575b600190614fbf565b90600581018091116102c1579061507f565b908151156151b8578151600281018091116102c15760039004600281901b91906001600160fe1b038116036102c157604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b80891061517c57506020959697509060039291525106806001146151675760021461515a575b50808452830101604052565b603d905f1901535f61514e565b50603d90815f1982015360011901535f61514e565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c16516002840153165160038201530193615128565b9050604051613b0e602082612c29565b8060f81c6041811015806151fc575b6151df575090565b602091500160ff81116102c15760f81b6001600160f81b03191690565b50605a8111156151d756fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71bf8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7a2646970667358221220e903bd6e08f7e3c729e04be227e771ad36e4c207a4ecc3972e215a2ad6c28a6b64736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
    },
    "BragToken": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialOwner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "initialSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxSupply",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "CheckpointUnorderedInsertion",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ECDSAInvalidSignature",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "ECDSAInvalidSignatureLength",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "ECDSAInvalidSignatureS",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "increasedSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cap",
              "type": "uint256"
            }
          ],
          "name": "ERC20ExceededSafeSupply",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientAllowance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSpender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "ERC2612ExpiredSignature",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC2612InvalidSigner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "timepoint",
              "type": "uint256"
            },
            {
              "internalType": "uint48",
              "name": "clock",
              "type": "uint48"
            }
          ],
          "name": "ERC5805FutureLookup",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC6372InconsistentClock",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "currentNonce",
              "type": "uint256"
            }
          ],
          "name": "InvalidAccountNonce",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidShortString",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "bits",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "SafeCastOverflowedUintDowncast",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "str",
              "type": "string"
            }
          ],
          "name": "StringTooLong",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "VotesExpiredSignature",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "delegator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "fromDelegate",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "toDelegate",
              "type": "address"
            }
          ],
          "name": "DelegateChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "delegate",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "previousVotes",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newVotes",
              "type": "uint256"
            }
          ],
          "name": "DelegateVotesChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "EIP712DomainChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "CLOCK_MODE",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MINTER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "burnFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "pos",
              "type": "uint32"
            }
          ],
          "name": "checkpoints",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint48",
                  "name": "_key",
                  "type": "uint48"
                },
                {
                  "internalType": "uint208",
                  "name": "_value",
                  "type": "uint208"
                }
              ],
              "internalType": "struct Checkpoints.Checkpoint208",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "clock",
          "outputs": [
            {
              "internalType": "uint48",
              "name": "",
              "type": "uint48"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "delegatee",
              "type": "address"
            }
          ],
          "name": "delegate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "delegatee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "delegateBySig",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "delegates",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "eip712Domain",
          "outputs": [
            {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "version",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256[]",
              "name": "extensions",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "timepoint",
              "type": "uint256"
            }
          ],
          "name": "getPastTotalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timepoint",
              "type": "uint256"
            }
          ],
          "name": "getPastVotes",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "getVotes",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "maxSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "numCheckpoints",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "permit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x6101806040523461007d5761001b6100156100ce565b916101c0565b6040516122279081610e6a82396080518161158e015260a0518161164b015260c05181611558015260e051816115dd01526101005181611603015261012051816109a2015261014051816109cb01526101605181818161066b0152610fce0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b601f909101601f19168101906001600160401b038211908210176100b857604052565b610081565b604051906100cc604083610095565b565b61313190606082380392836040519485926100e98285610095565b83398101031261007d578151906001600160a01b038216820361007d576040602084015193015191929190565b60405190610125604083610095565b60048252565b6040519061013a604083610095565b60018252565b6040519061014f604083610095565b600a825269213930b3902a37b5b2b760b11b6020830152565b1561016f57565b60405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b6064820152608490fd5b916101c9610140565b6101d1610140565b906101da610116565b90634252414760e01b60208301526101f061012b565b603160f81b60208201908152845190949193916001600160401b0382116100b85761022582610220600354610367565b61039f565b602090601f83116001146102e05791806102599261026195945f926102d5575b50508160011b915f199060031b1c19161790565b60035561043e565b61026a816106d4565b61012052610277826107c9565b610140526020815191012060e052519020610100524660a0526102986108bb565b6080523060c0526102ab82821015610168565b610160526102b882610517565b506102c28261058d565b50806102cc575050565b6100cc91610628565b015190505f80610245565b60035f52601f19831691907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b925f5b81811061034f575091600193918561026197969410610337575b505050811b0160035561043e565b01515f1960f88460031b161c191690555f8080610329565b9293602060018192878601518155019501930161030f565b90600182811c92168015610395575b602083101461038157565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610376565b601f81116103ab575050565b60035f5260205f20906020601f840160051c830193106103e5575b601f0160051c01905b8181106103da575050565b5f81556001016103cf565b90915081906103c6565b601f82116103fc57505050565b5f5260205f20906020601f840160051c83019310610434575b601f0160051c01905b818110610429575050565b5f815560010161041e565b9091508190610415565b80519091906001600160401b0381116100b85761046781610460600454610367565b60046103ef565b602092601f821160011461049b57610496929382915f926102d55750508160011b915f199060031b1c19161790565b600455565b60045f52601f198216937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b915f5b8681106104ff57508360019596106104e7575b505050811b01600455565b01515f1960f88460031b161c191690555f80806104dc565b919260206001819286850151815501940192016104c9565b6001600160a01b0381165f9081525f5160206130d15f395f51905f52602052604090205460ff16610588576001600160a01b03165f8181525f5160206130d15f395f51905f5260205260408120805460ff191660011790553391905f5160206130915f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206130f15f395f51905f52602052604090205460ff16610588576001600160a01b0381165f9081525f5160206130f15f395f51905f5260205260409020805460ff1916600117905533906001600160a01b03167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a65f5160206130915f395f51905f525f80a4600190565b91906001600160a01b03831680156106c1576002548281018091116106bc576002555f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b038085116106a557506100cc929350610998565b630e58ae9360e11b5f52600485905260245260445ffd5b610984565b63ec442f0560e01b5f525f60045260245ffd5b908151602081105f146106ef5750906106ec90610919565b90565b6001600160401b0381116100b8576107138161070c600554610367565b60056103ef565b602092601f821160011461074a57610742929382915f926102d55750508160011b915f199060031b1c19161790565b60055560ff90565b60055f52601f198216937f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0915f5b8681106107b15750836001959610610799575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f808061078b565b91926020600181928685015181550194019201610778565b908151602081105f146107e15750906106ec90610919565b6001600160401b0381116100b857610805816107fe600654610367565b60066103ef565b602092601f821160011461083c57610834929382915f926102d55750508160011b915f199060031b1c19161790565b60065560ff90565b60065f52601f198216937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f915f5b8681106108a3575083600195961061088b575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f808061087d565b9192602060018192868501518155019401920161086a565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261091360c082610095565b51902090565b601f815111610944576020815191015160208210610935571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b634e487b7160e01b5f52601160045260245ffd5b906109a281610a97565b9165ffffffffffff4311610a7f57600a5480610a4957506109dc6109cc6100cc945f5b6001610e0d565b65ffffffffffff4316600a610d37565b50506001600160a01b03168015610a31575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116610bc6565b610a42610a3d83610a97565b610ac8565b50506109ee565b92835f198101116106bc57600a5f525f5160206130b15f395f51905f52909301546100cc936109dc916109cc919060301c6109c5565b6306dfcc6560e41b5f5260306004524360245260445ffd5b6001600160d01b038111610ab1576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b65ffffffffffff4311610a7f57600a5480610af257506109cc610aee915f5b6002610e0d565b9091565b805f198101116106bc57600a5f525f5160206130b15f395f51905f520154610aee916109cc9160301c610ae7565b65ffffffffffff4311610a7f57805480610b545750610b44610aee925f6002610e0d565b9065ffffffffffff431690610d37565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c610ae7565b65ffffffffffff4311610a7f57805480610b9f5750610b44610aee925f6001610e0d565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c6109c5565b6001600160a01b03808316939291908116908185141580610cb9575b610bee575b5050505050565b81610c5f575b505082610c03575b8080610be7565b6001600160a01b03165f9081526009602052604090205f5160206131115f395f51905f5291610c3c91610c369091610a97565b90610b7b565b604080516001600160d01b039384168152919092166020820152a25f8080610bfc565b6001600160a01b03165f9081526009602052604090205f5160206131115f395f51905f5290610c9790610c9186610a97565b90610b20565b604080516001600160d01b039384168152919092166020820152a25f80610bf4565b50831515610be2565b5f198101919082116106bc57565b908154680100000000000000008110156100b85760018101808455811015610d23575f9283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b634e487b7160e01b5f52603260045260245ffd5b80549293928015610de357610d4e610d5991610cc2565b825f5260205f200190565b8054603081901c9365ffffffffffff91821692918116808411610dd457879303610da05750610d9c92509065ffffffffffff82549181199060301b169116179055565b9190565b915050610d9c91610dc0610db26100bd565b65ffffffffffff9093168352565b6001600160d01b0386166020830152610cd0565b632520601d60e01b5f5260045ffd5b5090610e0891610df4610db26100bd565b6001600160d01b0385166020830152610cd0565b5f9190565b91909180600114610e4f57600214610e3357634e487b7160e01b5f52605160045260245ffd5b6001600160d01b03908116918116919091039081116106bc5790565b506001600160d01b03918216908216019081116106bc579056fe60806040526004361015610011575f80fd5b5f3560e01c806301ffc9a71461024457806306fdde031461023f578063095ea7b31461023a57806318160ddd1461023557806323b872dd14610230578063248a9ca31461022b5780632f2ff15d14610226578063313ce567146102215780633644e5151461021c57806336568abe146102175780633a46b1a81461021257806340c10f191461020d57806342966c68146102085780634bf5d7e914610203578063587cde1e146101fe5780635c19a95c146101f95780636fcfff45146101f457806370a08231146101ef57806379cc6790146101ea5780637ecebe00146101e557806384b0196e146101e05780638e539e8c146101db57806391d14854146101d657806391ddadf4146101d157806395d89b41146101cc5780639ab24eb0146101c7578063a217fddf146101c2578063a9059cbb146101bd578063c3cda520146101b8578063d505accf146101b3578063d5391393146101ae578063d547741f146101a9578063d5abeb01146101a4578063dd62ed3e1461019f5763f1127ed81461019a575f80fd5b611048565b610ff1565b610fb7565b610f79565b610f3f565b610e1b565b610d0c565b610cc6565b610cac565b610c65565b610bc0565b610b95565b610b46565b610a87565b61098a565b610952565b610922565b6108ea565b610888565b610866565b610826565b610796565b610779565b610638565b610553565b61050f565b6104f5565b6104da565b610495565b610462565b61042a565b61040d565b6103dc565b6102d6565b3461029a57602036600319011261029a5760043563ffffffff60e01b811680910361029a57602090637965db0b60e01b8114908115610289575b506040519015158152f35b6301ffc9a760e01b1490505f61027e565b5f80fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102d392818152019061029e565b90565b3461029a575f36600319011261029a576040515f6003546102f68161110e565b808452906001811690811561038c575060011461032e575b61032a8361031e818503826111fc565b604051918291826102c2565b0390f35b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106103725750909150810160200161031e61030e565b91926001816020925483858801015201910190929161035a565b60ff191660208086019190915291151560051b8401909101915061031e905061030e565b600435906001600160a01b038216820361029a57565b602435906001600160a01b038216820361029a57565b3461029a57604036600319011261029a576104026103f86103b0565b6024359033611948565b602060405160018152f35b3461029a575f36600319011261029a576020600254604051908152f35b3461029a57606036600319011261029a576104026104466103b0565b61044e6103c6565b6044359161045d833383611262565b611330565b3461029a57602036600319011261029a57602061048d6004355f52600b602052600160405f20015490565b604051908152f35b3461029a57604036600319011261029a576104d86004356104b46103c6565b906104d36104ce825f52600b602052600160405f20015490565b61148b565b6114c5565b005b3461029a575f36600319011261029a57602060405160128152f35b3461029a575f36600319011261029a57602061048d611555565b3461029a57604036600319011261029a5760043561052b6103c6565b336001600160a01b03821603610544576104d891611671565b63334bd91960e11b5f5260045ffd5b3461029a57604036600319011261029a5761056c6103b0565b6001600160a01b03165f90815260096020526040902061058d6024356116f9565b8154905f8291600584116105e0575b6105a7935084611b68565b90816105c557505060205f5b6040516001600160d01b039091168152f35b6105d0602092611732565b905f52815f20015460301c6105b3565b91926105eb81611a0a565b8103908111610633576105a793855f5265ffffffffffff8260205f2001541665ffffffffffff8516105f1461062157509161059c565b92915061062d9061121e565b9061059c565b6110fa565b3461029a57604036600319011261029a576106516103b0565b60243561065c61141c565b600254818101809111610633577f000000000000000000000000000000000000000000000000000000000000000010610740576001600160a01b038216801561072d576106b36106ae8360025461122c565b600255565b6001600160a01b0383165f90815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254916001600160d01b03808411610716576104d88383611fd1565b630e58ae9360e11b5f52600484905260245260445ffd5b63ec442f0560e01b5f525f60045260245ffd5b60405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b6044820152606490fd5b3461029a57602036600319011261029a576104d860043533611740565b3461029a575f36600319011261029a576107af436119bd565b65ffffffffffff806107c0436119bd565b169116036108175761032a6040516107d96040826111fc565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015260405191829160208352602083019061029e565b6301bfc1c560e61b5f5260045ffd5b3461029a57602036600319011261029a576001600160a01b036108476103b0565b165f526008602052602060018060a01b0360405f205416604051908152f35b3461029a57602036600319011261029a576104d86108826103b0565b33611868565b3461029a57602036600319011261029a576001600160a01b036108a96103b0565b165f52600960205260405f205463ffffffff81116108d35760405163ffffffff9091168152602090f35b6306dfcc6560e41b5f52602060045260245260445ffd5b3461029a57602036600319011261029a57602061048d6109086103b0565b6001600160a01b03165f9081526020819052604090205490565b3461029a57604036600319011261029a576104d861093e6103b0565b6024359061094d823383611262565b611740565b3461029a57602036600319011261029a576001600160a01b036109736103b0565b165f526007602052602060405f2054604051908152f35b3461029a575f36600319011261029a57610a2e6109c67f0000000000000000000000000000000000000000000000000000000000000000611ce3565b6109ef7f0000000000000000000000000000000000000000000000000000000000000000611d43565b60206040516109fe82826111fc565b5f815281610a3c81830194601f198301368737604051978897600f60f81b895260e0858a015260e089019061029e565b90878203604089015261029e565b914660608701523060808701525f60a087015285830360c087015251918281520192915f5b828110610a7057505050500390f35b835185528695509381019392810192600101610a61565b3461029a57602036600319011261029a57610aa36004356116f9565b600a54905f829160058411610af2575b610abf9350600a611b68565b80610ad057506040515f8152602090f35b610aed610ade602092611732565b600a5f52825f20015460301c90565b6105b3565b9192610afd81611a0a565b810390811161063357610abf93600a5f5265ffffffffffff8260205f2001541665ffffffffffff8516105f14610b34575091610ab3565b929150610b409061121e565b90610ab3565b3461029a57604036600319011261029a57602060ff610b89600435610b696103c6565b905f52600b845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b3461029a575f36600319011261029a576020610bb0436119bd565b65ffffffffffff60405191168152f35b3461029a575f36600319011261029a576040515f600454610be08161110e565b808452906001811690811561038c5750600114610c075761032a8361031e818503826111fc565b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610c4b5750909150810160200161031e61030e565b919260018160209254838588010152019101909291610c33565b3461029a57602036600319011261029a576001600160a01b03610c866103b0565b165f526009602052602060018060d01b03610ca360405f206118e9565b16604051908152f35b3461029a575f36600319011261029a5760206040515f8152f35b3461029a57604036600319011261029a57610402610ce26103b0565b6024359033611330565b6064359060ff8216820361029a57565b6084359060ff8216820361029a57565b3461029a5760c036600319011261029a57610d256103b0565b60243590604435610d34610cec565b6084359060a43592804211610e095791610db99391610dab610db09460405160208101917fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf835260018060a01b038a1660408301528a6060830152608082015260808152610da360a0826111fc565b519020611913565b611d7a565b90929192611e25565b6001600160a01b0381165f908152600760205260409020805460018101909155809303610dea576104d89250611868565b90506301d4b62360e61b5f5260018060a01b031660045260245260445ffd5b632341d78760e11b5f5260045260245ffd5b3461029a5760e036600319011261029a57610e346103b0565b610e3c6103c6565b6044359060643592610e4c610cfc565b60a43560c43590864211610f2c576001600160a01b0384165f908152600760205260409020805460018101909155610ef19390610eec909860405160208101917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9835260018060a01b0389169b8c604084015260018060a01b038b1660608401528b608084015260a083015260c082015260c08152610da360e0826111fc565b611939565b936001600160a01b03851603610f0b576104d89350611948565b6325c0072360e11b5f526001600160a01b038085166004521660245260445ffd5b8663313c898160e11b5f5260045260245ffd5b3461029a575f36600319011261029a5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b3461029a57604036600319011261029a576104d8600435610f986103c6565b90610fb26104ce825f52600b602052600160405f20015490565b611671565b3461029a575f36600319011261029a5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b3461029a57604036600319011261029a57602061103f61100f6103b0565b6110176103c6565b6001600160a01b039182165f9081526001855260408082209290931681526020919091522090565b54604051908152f35b3461029a57604036600319011261029a576110616103b0565b6024359063ffffffff8216820361029a5761032a916110b09161108261124a565b5061108b61124a565b506001600160a01b03165f9081526009602052604090206110aa61124a565b50611ea1565b50604051906110be826111db565b5465ffffffffffff811680835260309190911c60209283019081526040805192835290516001600160d01b031692820192909252918291820190565b634e487b7160e01b5f52601160045260245ffd5b90600182811c9216801561113c575b602083101461112857565b634e487b7160e01b5f52602260045260245ffd5b91607f169161111d565b5f92918154916111558361110e565b80835292600181169081156111aa575060011461117157505050565b5f9081526020812093945091925b838310611190575060209250010190565b60018160209294939454838587010152019101919061117f565b915050602093945060ff929192191683830152151560051b010190565b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176111f757604052565b6111c7565b90601f8019910116810190811067ffffffffffffffff8211176111f757604052565b906001820180921161063357565b9190820180921161063357565b604051906112486040836111fc565b565b60405190611257826111db565b5f6020838281520152565b6001600160a01b039081165f81815260016020908152604080832094861683529390529190912091929091545f19811061129d575b50505050565b81811061130f5782156112fc576001600160a01b038416156112e9576112df925f526001602052039160405f209060018060a01b03165f5260205260405f2090565b555f808080611297565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b83637dc7a0d960e11b5f5260018060a01b031660045260245260445260645ffd5b6001600160a01b038116939291908415611409576001600160a01b038216801561072d576001600160a01b0382165f90815260208190526040902054958487106113e357846112489697036113948460018060a01b03165f525f60205260405f2090565b556001600160a01b0384165f9081526020819052604090208054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a361204a565b63391434e360e21b5f526001600160a01b0383166004526024879052604485905260645ffd5b634b637e8f60e11b5f525f60045260245ffd5b335f9081527ff70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8602052604090205460ff161561145457565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b5f818152600b6020908152604080832033845290915290205460ff16156114af5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff1661154f575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480611648575b156115b0577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261164260c0826111fc565b51902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611587565b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff161561154f575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b65ffffffffffff611709436119bd565b168082101561171c57506102d3906119bd565b90637669fc0f60e11b5f5260045260245260445ffd5b5f1981019190821161063357565b6001600160a01b038116908115611409576001600160a01b0381165f90815260208190526040902054838110611843579061179284611248959493039160018060a01b03165f525f60205260405f2090565b5581600254036002555f817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180602081018782520390a3801561182b575b6117e46117df83611eca565b611f9c565b50505f908152600860205260408120549080527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b039081169116611bc1565b61183c61183783611eca565b611f67565b50506117d3565b63391434e360e21b5f526001600160a01b03909116600452602452604482905260645ffd5b6001600160a01b038181165f81815260086020526040812080548685166001600160a01b031982168117909255611248969416946118e39390928691907f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a46001600160a01b03165f9081526020819052604090205490565b91611bc1565b805490816118f75750505f90565b815f19810111610633575f525f199060205f2001015460301c90565b60429061191e611555565b906040519161190160f01b8352600283015260228201522090565b916102d39391610db093611d7a565b6001600160a01b03169081156112fc576001600160a01b0381169283156112e957806119b07f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593855f52600160205260405f209060018060a01b03165f5260205260405f2090565b55604051908152602090a3565b65ffffffffffff81116119d55765ffffffffffff1690565b6306dfcc6560e41b5f52603060045260245260445ffd5b81156119f6570490565b634e487b7160e01b5f52601260045260245ffd5b60018111156102d357806001600160801b821015611b2b575b611ad1611ac7611abd611ab3611aa9611a9f611a8e611ad89760048a600160401b611add9c1015611b1e575b640100000000811015611b11575b62010000811015611b04575b610100811015611af7575b6010811015611aea575b1015611ae2575b60030260011c90565b611a98818b6119ec565b0160011c90565b611a98818a6119ec565b611a9881896119ec565b611a9881886119ec565b611a9881876119ec565b611a9881866119ec565b80936119ec565b821190565b900390565b60011b611a85565b60041c9160021b91611a7e565b60081c9160041b91611a74565b60101c9160081b91611a69565b60201c9160101b91611a5d565b60401c9160201b91611a4f565b5050611add611ad8611ad1611ac7611abd611ab3611aa9611a9f611a8e611b528a60801c90565b9850600160401b9750611a239650505050505050565b905b838310611b775750505090565b90919280841860011c8185160190835f5265ffffffffffff8260205f2001541665ffffffffffff8416105f14611bb15750925b9190611b6a565b9350611bbc9061121e565b611baa565b6001600160a01b03808316939291908116908185141580611cda575b611be9575b5050505050565b81611c6d575b505082611bfe575b8080611be2565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72491611c4a91611c449091611eca565b90611f33565b604080516001600160d01b039384168152919092166020820152a25f8080611bf7565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72490611cb890611cb286611eca565b90611efb565b604080516001600160d01b039384168152919092166020820152a25f80611bef565b50831515611bdd565b60ff8114611d295760ff811690601f8211611d1a5760405191611d076040846111fc565b6020808452838101919036833783525290565b632cd44ac360e21b5f5260045ffd5b506040516102d381611d3c816005611146565b03826111fc565b60ff8114611d675760ff811690601f8211611d1a5760405191611d076040846111fc565b506040516102d381611d3c816006611146565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611dfc579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15611df1575f516001600160a01b03811615611de757905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b60041115611e1157565b634e487b7160e01b5f52602160045260245ffd5b611e2e81611e07565b80611e37575050565b611e4081611e07565b60018103611e575763f645eedf60e01b5f5260045ffd5b611e6081611e07565b60028103611e7b575063fce698f760e01b5f5260045260245ffd5b80611e87600392611e07565b14611e8f5750565b6335e2f38360e21b5f5260045260245ffd5b8054821015611eb6575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b6001600160d01b038111611ee4576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b90611f05436119bd565b90611f0f836118e9565b6001600160d01b03918216908216039190821161063357611f2f9261211b565b9091565b90611f3d436119bd565b90611f47836118e9565b6001600160d01b03918216908216019190821161063357611f2f9261211b565b611f70436119bd565b90611f7b600a6118e9565b6001600160d01b039182169082160190811161063357611f2f91600a61211b565b611fa5436119bd565b90611fb0600a6118e9565b6001600160d01b039182169082160390811161063357611f2f91600a61211b565b9061124891611fe261183783611eca565b50506001600160a01b03168015612037575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116611bc1565b6120436117df83611eca565b5050611ff4565b61124892916001600160a01b039091169081156120ad575b6001600160a01b031690811561209a575b5f90815260086020526040808220549282529020546001600160a01b039081169116611bc1565b6120a66117df84611eca565b5050612073565b6120b961183784611eca565b5050612062565b8054600160401b8110156111f7576120dd91600182018155611ea1565b61210857815160209092015160301b65ffffffffffff191665ffffffffffff92909216919091179055565b634e487b7160e01b5f525f60045260245ffd5b805492939280156121c75761213261213d91611732565b825f5260205f200190565b8054603081901c9365ffffffffffff918216929181168084116121b857879303612184575061218092509065ffffffffffff82549181199060301b169116179055565b9190565b915050612180916121a4612196611239565b65ffffffffffff9093168352565b6001600160d01b03861660208301526120c0565b632520601d60e01b5f5260045ffd5b50906121ec916121d8612196611239565b6001600160d01b03851660208301526120c0565b5f919056fea2646970667358221220953ba7c4a4aa50794cfc05b329003a4d4cf134b95ee0b5f79d8ad89b4ec3f9fb64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a7df7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76f70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
    },
    "ExhibitRegistry": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "VaultRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "enum ExhibitRegistry.LocationType",
              "name": "locationType",
              "type": "uint8"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "VaultVerified",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "VERIFIER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getVaultCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "getVaultInfo",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "verified",
                  "type": "bool"
                },
                {
                  "internalType": "enum ExhibitRegistry.LocationType",
                  "name": "locationType",
                  "type": "uint8"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                }
              ],
              "internalType": "struct ExhibitRegistry.VaultInfo",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "isVerified",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "removeVault",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "vaultAddresses",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "vaults",
          "outputs": [
            {
              "internalType": "bool",
              "name": "verified",
              "type": "bool"
            },
            {
              "internalType": "enum ExhibitRegistry.LocationType",
              "name": "locationType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "enum ExhibitRegistry.LocationType",
              "name": "locationType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "name": "verifyVault",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60803461007257601f610fcf38819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007257516001600160a01b0381168103610072578061005c6100629261008a565b50610100565b50604051610ddb90816101948239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610faf5f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610faf5f395f51905f5260205260408120805460ff191660011790553391905f516020610f6f5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f516020610f8f5f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610f8f5f395f51905f5260205260408120805460ff191660011790553391907f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09905f516020610f6f5f395f51905f529080a460019056fe6080806040526004361015610012575f80fd5b5f3560e01c90816301ffc9a71461098457508063248a9ca3146109525780632f2ff15d1461091557806336568abe146108d157806374d4e491146108b457806390229af7146107cb57806391d1485414610783578063a217fddf14610769578063a622ee7c146106d6578063b9209e3314610699578063ceb68c23146105e5578063d42b291c14610185578063d547741f14610141578063d7bfe386146100ff5763e7705db6146100c1575f80fd5b346100fb575f3660031901126100fb5760206040517f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098152f35b5f80fd5b346100fb5760203660031901126100fb576004356002548110156100fb57610128602091610b78565b905460405160039290921b1c6001600160a01b03168152f35b346100fb5760403660031901126100fb576101836004356101606109d7565b9061017e610179825f525f602052600160405f20015490565b610c65565b610d25565b005b346100fb5760803660031901126100fb5761019e6109ed565b60243560058110156100fb5760443567ffffffffffffffff81116100fb576101ca903690600401610b4a565b60649291923567ffffffffffffffff81116100fb576101ed903690600401610b4a565b9390946101f8610bf6565b6001600160a01b03169384156105ae57845f52600160205260ff60405f20541615610569575b6040519061022b82610a6c565b6001825261025b6020830197610241878a610ba4565b61024c368787610bb0565b92604085019384523691610bb0565b9660608301978852865f52600160205260405f209251151560ff8019855416911617835551600581101561055557825461ff00191660089190911b61ff0016178255518051600183019167ffffffffffffffff821161048a576102be8354610a34565b601f8111610510575b50602090601f83116001146104a9576002949392915f918361049e575b50508160011b915f199060031b1c19161790555b01945194855167ffffffffffffffff811161048a576103178254610a34565b601f8111610445575b506020601f82116001146103b757928492826060969361038598967f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec89a9b5f926103ac575b50508160011b915f199060031b1c19161790555b60405195868095610a03565b60406020850152816040850152848401375f828201840152601f01601f19168101030190a2005b015190508b80610365565b601f19821697835f52815f20985f5b81811061042d5750837f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec8999a61038599979489979460609a9760019510610415575b505050811b019055610379565b01515f1960f88460031b161c191690558b8080610408565b838301518b556001909a0199602093840193016103c6565b825f5260205f20601f830160051c81019160208410610480575b601f0160051c01905b8181106104755750610320565b5f8155600101610468565b909150819061045f565b634e487b7160e01b5f52604160045260245ffd5b015190508a806102e4565b90601f19831691845f52815f20925f5b8181106104f85750916001939185600298979694106104e0575b505050811b0190556102f8565b01515f1960f88460031b161c191690558a80806104d3565b929360206001819287860151815501950193016104b9565b835f5260205f20601f840160051c8101916020851061054b575b601f0160051c01905b81811061054057506102c7565b5f8155600101610533565b909150819061052a565b634e487b7160e01b5f52602160045260245ffd5b6002546801000000000000000081101561048a5780600161058d9201600255610b78565b81546001600160a01b0360039290921b91821b19169087901b17905561021e565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346100fb5760203660031901126100fb576105fe6109ed565b610606610bf6565b6001600160a01b03165f8181526001602052604090205460ff161561065f57805f52600160205260405f2060ff1981541690557fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a5f80a2005b60405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b6044820152606490fd5b346100fb5760203660031901126100fb576001600160a01b036106ba6109ed565b165f526001602052602060ff60405f2054166040519015158152f35b346100fb5760203660031901126100fb576001600160a01b036106f76109ed565b165f52600160205261074660405f20610765815491610757610727600261072060018501610aaa565b9301610aaa565b91604051958560ff8897161515875260ff602088019160081c16610a03565b608060408601526080850190610a10565b908382036060850152610a10565b0390f35b346100fb575f3660031901126100fb5760206040515f8152f35b346100fb5760403660031901126100fb5761079c6109d7565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346100fb5760203660031901126100fb576107e46109ed565b6060806040516107f381610a6c565b5f81525f6020820152816040820152015260018060a01b03165f52600160205260405f2060405161082381610a6c565b61076582549260ff84161515835261084560ff602085019560081c1685610ba4565b6108a1610867600261085960018501610aaa565b936040870194855201610aaa565b916060850192835261088f604051968796602088525115156020880152516040870190610a03565b516080606086015260a0850190610a10565b9051838203601f19016080850152610a10565b346100fb575f3660031901126100fb576020600254604051908152f35b346100fb5760403660031901126100fb576108ea6109d7565b336001600160a01b038216036109065761018390600435610d25565b63334bd91960e11b5f5260045ffd5b346100fb5760403660031901126100fb576101836004356109346109d7565b9061094d610179825f525f602052600160405f20015490565b610c9d565b346100fb5760203660031901126100fb57602061097c6004355f525f602052600160405f20015490565b604051908152f35b346100fb5760203660031901126100fb576004359063ffffffff60e01b82168092036100fb57602091637965db0b60e01b81149081156109c6575b5015158152f35b6301ffc9a760e01b149050836109bf565b602435906001600160a01b03821682036100fb57565b600435906001600160a01b03821682036100fb57565b9060058210156105555752565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90600182811c92168015610a62575b6020831014610a4e57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610a43565b6080810190811067ffffffffffffffff82111761048a57604052565b90601f8019910116810190811067ffffffffffffffff82111761048a57604052565b9060405191825f825492610abd84610a34565b8084529360018116908115610b285750600114610ae4575b50610ae292500383610a88565b565b90505f9291925260205f20905f915b818310610b0c575050906020610ae2928201015f610ad5565b6020919350806001915483858901015201910190918492610af3565b905060209250610ae294915060ff191682840152151560051b8201015f610ad5565b9181601f840112156100fb5782359167ffffffffffffffff83116100fb57602083818601950101116100fb57565b600254811015610b905760025f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b60058210156105555752565b92919267ffffffffffffffff821161048a5760405191610bda601f8201601f191660200184610a88565b8294818452818301116100fb578281602093845f960137010152565b335f9081527f1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81602052604090205460ff1615610c2e57565b63e2517d3f60e01b5f52336004527f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0960245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615610c875750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610d1f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610d1f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea26469706673582212207f6cda01b5946a2fec3603e75dec96556643c5e58e66fff135f36e7a54fad70d64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
    },
    "ExhibitVault": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_registry",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "Exhibited1155",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "Exhibited721",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "Moved1155",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "Moved721",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdrawn1155",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "Withdrawn721",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balances1155",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "batchMove1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "batchMove721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "batchWithdraw1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            }
          ],
          "name": "batchWithdraw721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "expiry1155",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "expiry721",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "move1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "move1155WithDuration",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "move721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "move721WithDuration",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "owner721",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "registry",
          "outputs": [
            {
              "internalType": "contract IExhibitRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "withdraw721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608034609357601f611fa838819003918201601f19168301916001600160401b03831184841017609757808492602094604052833981010312609357516001600160a01b0381169081900360935760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00555f80546001600160a01b031916919091179055604051611efc90816100ac8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a71461114257508063025f75ac1461104a5780630412619614611006578063150b7a0214610e5e5780632ff1d0f914610e1a578063358d48d914610d6e57806335f81b8714610acb578063380ff99914610a825780636f39becd14610a365780637b10399914610a0f5780637b606fdc1461092157806381bd34d2146108d8578063bc197c811461068d578063c10e5153146105d1578063c2fe51851461038c578063d6bd07ee14610351578063d742385814610331578063f07a380e146102ef5763f23a6e61146100ef575f80fd5b346102ec5760a03660031901126102ec576101086111db565b6101106111f1565b6044359160643591608435906001600160401b0382116102ea5760249261013e61014c93369060040161126d565b91610147611545565b61189b565b3386526002602052604086208587526020526040862060018060a01b0383165f5260205260405f2061017f8582546113cc565b905580156102e35761019190426113cc565b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f205481116102b4575b5084546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa80156102a957604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35948891610287575b5001519533815260046020528181208682526020522060018060a01b0382165f5260205260405f20549061026160405192839260018060a01b031697339684611523565b0390a460015f516020611ea75f395f51905f525560405163f23a6e6160e01b8152602090f35b6102a391503d808a833e61029b818361121d565b810190611440565b5f61021d565b6040513d87823e3d90fd5b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f6101c1565b5084610191565b855b80fd5b50346102ec5760403660031901126102ec5761031d61030c6111db565b610314611545565b60243590611c05565b60015f516020611ea75f395f51905f525580f35b50346102ec5761031d610343366112b3565b9161034c611545565b611cfd565b50346102ec5760803660031901126102ec5761031d61036e6111db565b6103766111c5565b9061037f611545565b6044359060243590611665565b50346102ec5760803660031901126102ec576103a66111db565b6024356103b1611207565b9183606435916103bf611545565b60018060a01b0316918282526001602052604082208483526020526103f160018060a01b036040842054163314611bc9565b815460405163b9209e3360e01b81526001600160a01b039687166004820181905296909160209183916024918391165afa80156105c6578390610587575b61043991506115c0565b82825260036020526040822084835260205261045b604083205442101561160c565b828252600160209081526040808420868552909152822080546001600160a01b031916905580156105695760408051336020820152908101919091526104ae81606081015b03601f19810183528261121d565b823b1561056557816104ee9160405180938192635c46a7ef60e11b83523060048401528960248401528860448401526080606484015260848301906114eb565b038183875af1801561055a57610541575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f516020611ea75f395f51905f525580f35b8161054b9161121d565b61055657835f6104ff565b8380fd5b6040513d84823e3d90fd5b5080fd5b506040513360208201526020815261058260408261121d565b6104ae565b506020813d6020116105be575b816105a16020938361121d565b810103126105ba576105b5610439916113ed565b61042f565b8280fd5b3d9150610594565b6040513d85823e3d90fd5b50346102ec5760603660031901126102ec576004356001600160401b03811161056557610602903690600401611195565b6024356001600160401b03811161055657610621903690600401611195565b610629611207565b92610632611545565b61063d828214611354565b855b81811061065b578660015f516020611ea75f395f51905f525580f35b8061068786610675610670600195878c611394565b6113b8565b61068084888a611394565b3590611cfd565b0161063f565b50346102ec5760a03660031901126102ec576106a76111db565b6106af6111f1565b916044356001600160401b038111610565576106cf9036906004016112ed565b926064356001600160401b0381116105ba576106ef9036906004016112ed565b926084356001600160401b038111610556579061013e6107149392369060040161126d565b90929080156108d15761072790426113cc565b82546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa9081156108c6579060409185916108ac575b50015192805b8651811015610889578061077f6001928961150f565b5161078a828761150f565b519033855260026020526040852081865260205260408520848060a01b038a165f5260205260405f206107be8382546113cc565b905533855260046020526040852081865260205260408520848060a01b038a165f5260205260405f2054861161085b575b33855260046020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35604051806108528d898060a01b0316968d339684611523565b0390a401610769565b33855260046020526040852081865260205260408520848060a01b038a165f526020528560405f20556107ef565b60015f516020611ea75f395f51905f525560405163bc197c8160e01b8152602090f35b6108c091503d8087833e61029b818361121d565b5f610763565b6040513d86823e3d90fd5b5081610727565b50346102ec5760406108e9366112b3565b939160018060a01b031682526002602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102ec5760603660031901126102ec576004356001600160401b03811161056557610952903690600401611195565b6024356001600160401b03811161055657610971903690600401611195565b6044929192356001600160401b0381116102ea57610993903690600401611195565b91909261099e611545565b81811480610a06575b6109b090611354565b865b8181106109ce578760015f516020611ea75f395f51905f525580f35b80610a006109e2610670600194868c611394565b6109ed83878b611394565b356109f984898b611394565b3591611a58565b016109b2565b508183146109a7565b50346102ec57806003193601126102ec57546040516001600160a01b039091168152602090f35b50346102ec5760403660031901126102ec576020906001600160a01b03610a5b6111db565b168152600182526040812060243582528252604060018060a01b0391205416604051908152f35b50346102ec576040610a93366112b3565b939160018060a01b031682526004602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b5034610ceb5760a0366003190112610ceb57610ae56111db565b60243560443591610af46111c5565b60843591610b00611545565b6001600160a01b03165f8181526002602090815260408083208784528252808320338452909152902054909290610b399086111561157d565b5f5460405163b9209e3360e01b81526001600160a01b039384166004820181905293909160209183916024918391165afa8015610ce0575f90610d33575b610b8191506115c0565b5f8381526004602090815260408083208784528252808320338452909152902054610bae9042101561160c565b825f52600260205260405f20845f5260205260405f2060018060a01b0333165f5260205260405f20610be1868254611658565b90555f838152600260209081526040808320878452825280832033845290915290205415610d0d575b8015610cef576040805133602082015290810191909152610c2e81606081016104a0565b823b15610ceb575f610c749160405180938192637921219560e11b835230600484015286602484015288604484015289606484015260a0608484015260a48301906114eb565b038183875af18015610ce057610ccb575b5060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a460015f516020611ea75f395f51905f525580f35b610cd89195505f9061121d565b5f935f610c85565b6040513d5f823e3d90fd5b5f80fd5b5060405133602082015260208152610d0860408261121d565b610c2e565b5f8381526004602090815260408083208784528252808320338452909152812055610c0a565b506020813d602011610d66575b81610d4d6020938361121d565b81010312610ceb57610d61610b81916113ed565b610b77565b3d9150610d40565b34610ceb576040366003190112610ceb576004356001600160401b038111610ceb57610d9e903690600401611195565b906024356001600160401b038111610ceb57610dbe903690600401611195565b90610dc7611545565b610dd2828514611354565b5f5b848110610dee5760015f516020611ea75f395f51905f5255005b80610e14610e026106706001948989611394565b610e0d838787611394565b3590611c05565b01610dd4565b34610ceb576060366003190112610ceb57610e4b610e366111db565b610e3e611545565b6044359060243590611a58565b60015f516020611ea75f395f51905f5255005b34610ceb576080366003190112610ceb57610e776111db565b610e7f6111f1565b9060443591606435916001600160401b038311610ceb5761013e610ea793369060040161126d565b335f908152600160209081526040808320868452909152902080546001600160a01b0319166001600160a01b0390931692831790559091908015610fff57610eef90426113cc565b335f52600360205260405f20825f5260205260405f20548111610fe2575b505f80546040516390229af760e01b81523060048201529190829060249082906001600160a01b03165afa8015610ce0576040915f91610fc8575b500151335f52600360205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad360405f205491610f99604051916040835260408301906114eb565b9260208201528033930390a460015f516020611ea75f395f51905f5255604051630a85bd0160e11b8152602090f35b610fdc91503d805f833e61029b818361121d565b84610f48565b335f52600360205260405f20825f5260205260405f205582610f0d565b505f610eef565b34610ceb576040366003190112610ceb576001600160a01b036110276111db565b165f52600360205260405f206024355f52602052602060405f2054604051908152f35b34610ceb576080366003190112610ceb576004356001600160401b038111610ceb5761107a903690600401611195565b906024356001600160401b038111610ceb5761109a903690600401611195565b9190926044356001600160401b038111610ceb576110bc903690600401611195565b94906110c66111c5565b926110cf611545565b85811480611139575b6110e190611354565b5f5b8181106110fd5760015f516020611ea75f395f51905f5255005b8061113386898b61112c856111248161111d8f60019b8d61067092611394565b958d611394565b35928a611394565b3591611665565b016110e3565b508587146110d8565b34610ceb576020366003190112610ceb576004359063ffffffff60e01b8216809203610ceb57602091630271189760e51b8114908115611184575b5015158152f35b6301ffc9a760e01b1490508361117d565b9181601f84011215610ceb578235916001600160401b038311610ceb576020808501948460051b010111610ceb57565b606435906001600160a01b0382168203610ceb57565b600435906001600160a01b0382168203610ceb57565b602435906001600160a01b0382168203610ceb57565b604435906001600160a01b0382168203610ceb57565b90601f801991011681019081106001600160401b0382111761123e57604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b03811161123e57601f01601f191660200190565b81601f82011215610ceb5780359061128482611252565b92611292604051948561121d565b82845260208383010111610ceb57815f926020809301838601378301015290565b6060906003190112610ceb576004356001600160a01b0381168103610ceb5790602435906044356001600160a01b0381168103610ceb5790565b9080601f83011215610ceb578135916001600160401b03831161123e578260051b9060405193611320602084018661121d565b8452602080850192820101928311610ceb57602001905b8282106113445750505090565b8135815260209182019101611337565b1561135b57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156113a45760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b0381168103610ceb5790565b919082018092116113d957565b634e487b7160e01b5f52601160045260245ffd5b51908115158203610ceb57565b81601f82011215610ceb5780519061141182611252565b9261141f604051948561121d565b82845260208383010111610ceb57815f9260208093018386015e8301015290565b602081830312610ceb578051906001600160401b038211610ceb5701608081830312610ceb5760405191608083018381106001600160401b0382111761123e5760405261148c826113ed565b8352602082015160ff81168103610ceb57602084015260408201516001600160401b038111610ceb57816114c19184016113fa565b604084015260608201516001600160401b038111610ceb576114e392016113fa565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b80518210156113a45760209160051b010190565b9392916115409060409286526060602087015260608601906114eb565b930152565b60025f516020611ea75f395f51905f52541461156e5760025f516020611ea75f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b1561158457565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b156115c757565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b1561161357565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b919082039182116113d957565b6001600160a01b03165f8181526002602090815260408083208584528252808320338452909152902054929391929091906116a29085111561157d565b5f5460405163b9209e3360e01b81526001600160a01b039283166004820181905292909160209183916024918391165afa8015610ce0575f9061184c575b6116ea91506115c0565b5f82815260046020908152604080832086845282528083203384529091529020546117179042101561160c565b815f52600260205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f2061174a858254611658565b90555f828152600260209081526040808320868452825280832033845290915290205415611826575b6040513360208201526020815261178b60408261121d565b823b15610ceb575f6117d19160405180938192637921219560e11b835230600484015286602484015288604484015289606484015260a0608484015260a48301906114eb565b038183875af18015610ce057611816575b5060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a4565b5f6118209161121d565b5f6117e2565b5f8281526004602090815260408083208684528252808320338452909152812055611773565b506020813d60201161187f575b816118666020938361121d565b81010312610ceb5761187a6116ea916113ed565b6116e0565b3d9150611859565b51906001600160a01b0382168203610ceb57565b6001600160a01b03811692919083611a5157505b5f928251602081145f1461197a57505f5460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa908115610ce0575f91611940575b50156119255750602081805181010312610ceb576001600160a01b039061192190602001611887565b1691565b92915060208151918180820193849201010312610ceb575190565b90506020813d602011611972575b8161195b6020938361121d565b81010312610ceb5761196c906113ed565b5f6118f8565b3d915061194e565b91949291604014611989575050565b5f5460405163b9209e3360e01b8152600481019290925292949193509091602090829060249082906001600160a01b03165afa908115610ce0575f91611a17575b50156119fd5750604081805181010312610ceb5760406119ec60208301611887565b9101516001600160a01b0390911691565b919060208151918180820193849201010312610ceb575190565b90506020813d602011611a49575b81611a326020938361121d565b81010312610ceb57611a43906113ed565b5f6119ca565b3d9150611a25565b90506118af565b6001600160a01b03165f8181526002602090815260408083208584528252808320338452909152902054611a8e9084111561157d565b5f8181526004602090815260408083208584528252808320338452909152902054611abb9042101561160c565b805f52600260205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f20611aee848254611658565b90555f818152600260209081526040808320858452825280832033845290915290205415611ba3575b803b15610ceb57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af18015610ce057611b93575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f611b9d9161121d565b5f611b64565b5f8181526004602090815260408083208584528252808320338452909152812055611b17565b15611bd057565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b6001600160a01b039081165f818152600160209081526040808320868452909152812054909392611c3891163314611bc9565b805f52600360205260405f20825f52602052611c5a60405f205442101561160c565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055803b15610ceb57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af18015610ce057611ce8575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b611cf59193505f9061121d565b5f915f611cc0565b60018060a01b0316805f52600160205260405f20825f52602052611d2e60018060a01b0360405f2054163314611bc9565b5f5460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa8015610ce0575f90611e6b575b611d7691506115c0565b805f52600360205260405f20825f52602052611d9860405f205442101561160c565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b815416905560405133602082015260208152611ddb60408261121d565b813b15610ceb575f611e1b9160405180938192635c46a7ef60e11b83523060048401528860248401528760448401526080606484015260848301906114eb565b038183865af18015610ce057611e5b575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f611e659161121d565b5f611e2c565b506020813d602011611e9e575b81611e856020938361121d565b81010312610ceb57611e99611d76916113ed565b611d6c565b3d9150611e7856fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a264697066735822122046f8be5a247051727d1779d0c9a01f8970773066174b5b66e38563b0a77b8e5f64736f6c634300081c0033"
    },
    "MaliciousBuyer": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_marketplace",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_nftContract",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "createOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "marketplace",
          "outputs": [
            {
              "internalType": "contract NFTMarketplace",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nftContract",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x608034608557601f6104e338819003918201601f19168301916001600160401b038311848410176089578084926040948552833981010312608557604b6020604583609d565b9201609d565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161043290816100b18239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820360855756fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea26469706673582212200c79bb6279e818124e3416ecbc0bf83b9c77e5defe7d6403eb32ebe09330b02964736f6c634300081c0033"
    },
    "MockERC1155": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC1155InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "idsLength",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "valuesLength",
              "type": "uint256"
            }
          ],
          "name": "ERC1155InvalidArrayLength",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC1155MissingApprovalForAll",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "name": "TransferBatch",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "TransferSingle",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "value",
              "type": "string"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "URI",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MINTER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            }
          ],
          "name": "balanceOfBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeBatchTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "uri",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "bytecode": "0x6080346100e75760208101906001600160401b038211818310176100d3575f9160405252600254600181811c911680156100c9575b60208210146100b557601f811161006d575b5f600255610053336100eb565b5061005d33610161565b5060405161147a90816101f58239f35b60025f52601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b8181106100aa5750610046565b5f815560010161009d565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610034565b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b6001600160a01b0381165f9081525f5160206116af5f395f51905f52602052604090205460ff1661015c576001600160a01b03165f8181525f5160206116af5f395f51905f5260205260408120805460ff191660011790553391905f51602061166f5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f51602061168f5f395f51905f52602052604090205460ff1661015c576001600160a01b03165f8181525f51602061168f5f395f51905f5260205260408120805460ff191660011790553391907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6905f51602061166f5f395f51905f529080a460019056fe60806040526004361015610011575f80fd5b5f3560e01c8062fdd58e1461011357806301ffc9a71461010e5780630e89341c14610109578063156e29f614610104578063248a9ca3146100ff5780632eb2c2d6146100fa5780632f2ff15d146100f557806336568abe146100f05780634e1273f4146100eb57806391d14854146100e6578063a217fddf146100e1578063a22cb465146100dc578063d5391393146100d7578063d547741f146100d2578063e985e9c5146100cd5763f242432a146100c8575f80fd5b6109bc565b61096c565b61092e565b6108f4565b610827565b61080d565b6107be565b6106fd565b610675565b610632565b6105a5565b610460565b61036b565b610277565b6101b6565b61015c565b600435906001600160a01b038216820361012e57565b5f80fd5b602435906001600160a01b038216820361012e57565b35906001600160a01b038216820361012e57565b3461012e57604036600319011261012e57602061019b61017a610118565b6024355f525f835260405f209060018060a01b03165f5260205260405f2090565b54604051908152f35b6001600160e01b031981160361012e57565b3461012e57602036600319011261012e576004356101d3816101a4565b63ffffffff60e01b16637965db0b60e01b81149081156101fc575b506040519015158152602090f35b636cdb3d1360e11b81149150811561022e575b811561021d575b505f6101ee565b6301ffc9a760e01b1490505f610216565b6303a24d0760e21b8114915061020f565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90602061027492818152019061023f565b90565b3461012e57602036600319011261012e576040515f6002548060011c9060018116908115610361575b60208310821461034d57828552602085019190811561033457506001146102e2575b6102de846102d2818603826104a7565b60405191829182610263565b0390f35b60025f9081529250907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b818410610320575050016102d2826102c2565b80548484015260209093019260010161030d565b60ff191682525090151560051b0190506102d2826102c2565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102a0565b3461012e57606036600319011261012e57610384610118565b335f9081527f5562e70da342db81569f3094d36be279beaca7ad8e08f434ea188e79d2bfe10c6020526040902054604435916024359160ff161561042957604051916103d16020846104a7565b5f83526001600160a01b03821615610416576104149361040e60405192600184526020840152604083019160018352606084015260808301604052565b91610eb9565b005b632bfa23e760e11b5f525f60045260245ffd5b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b3461012e57602036600319011261012e57602061048b6004355f526003602052600160405f20015490565b604051908152f35b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff8211176104c957604052565b610493565b67ffffffffffffffff81116104c95760051b60200190565b9080601f8301121561012e5781356104fd816104ce565b9261050b60405194856104a7565b81845260208085019260051b82010192831161012e57602001905b8282106105335750505090565b8135815260209182019101610526565b67ffffffffffffffff81116104c957601f01601f191660200190565b81601f8201121561012e5780359061057682610543565b9261058460405194856104a7565b8284526020838301011161012e57815f926020809301838601378301015290565b3461012e5760a036600319011261012e576105be610118565b6105c6610132565b9060443567ffffffffffffffff811161012e576105e79036906004016104e6565b60643567ffffffffffffffff811161012e576106079036906004016104e6565b906084359367ffffffffffffffff851161012e5761062c61041495369060040161055f565b93610a73565b3461012e57604036600319011261012e57610414600435610651610132565b9061067061066b825f526003602052600160405f20015490565b610d01565b610da1565b3461012e57604036600319011261012e57600435610691610132565b336001600160a01b038216036106aa5761041491610e31565b63334bd91960e11b5f5260045ffd5b90602080835192838152019201905f5b8181106106d65750505090565b82518452602093840193909201916001016106c9565b9060206102749281815201906106b9565b3461012e57604036600319011261012e5760043567ffffffffffffffff811161012e573660238201121561012e5780600401359061073a826104ce565b9161074860405193846104a7565b8083526024602084019160051b8301019136831161012e57602401905b8282106107a6578360243567ffffffffffffffff811161012e576102de9161079461079a9236906004016104e6565b90610c4d565b604051918291826106ec565b602080916107b384610148565b815201910190610765565b3461012e57604036600319011261012e57602060ff6108016004356107e1610132565b905f526003845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b3461012e575f36600319011261012e5760206040515f8152f35b3461012e57604036600319011261012e57610840610118565b602435801515810361012e5733156108e1576001600160a01b0382169182156108cf578161088c61089d92335f52600160205260405f209060018060a01b03165f5260205260405f2090565b9060ff801983541691151516179055565b604051901515815233907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190602090a3005b62ced3e160e81b5f525f60045260245ffd5b631f18c42760e11b5f525f60045260245ffd5b3461012e575f36600319011261012e5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b3461012e57604036600319011261012e5761041460043561094d610132565b9061096761066b825f526003602052600160405f20015490565b610e31565b3461012e57604036600319011261012e57602060ff61080161098c610118565b610994610132565b6001600160a01b039182165f9081526001865260408082209290931681526020919091522090565b3461012e5760a036600319011261012e576109d5610118565b6109dd610132565b604435906064359260843567ffffffffffffffff811161012e57610a0590369060040161055f565b92610a108233610d3b565b6001600160a01b03831615610416576001600160a01b03821615610a615761041494610a5960405192600184526020840152604083019160018352606084015260808301604052565b929091610fde565b626a0d4560e21b5f525f60045260245ffd5b92919094610a818433610d3b565b6001600160a01b038616948515610416576001600160a01b038516958615610a61578351855190818103610c105750505f5b8451811015610b7d578060051b6020808288010151918801015190610af889610ae3835f525f60205260405f2090565b9060018060a01b03165f5260205260405f2090565b54828110610b4657610b368c610ae385948d610b2860019998610b3e970391610ae3845f525f60205260405f2090565b555f525f60205260405f2090565b91825461119a565b905501610ab3565b6040516303dee4c560e01b81526001600160a01b038b16600482015260248101919091526044810183905260648101829052608490fd5b50610bd49697929795919560018551145f14610bd65760208581015187820151604080519283529282015233917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291a45b336113a6565b565b6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610c088a8a836111bb565b0390a4610bce565b635b05999160e01b5f5260045260245260445ffd5b8051821015610c395760209160051b010190565b634e487b7160e01b5f52603260045260245ffd5b91909180518351808203610cec575050805190610c69826104ce565b91610c7760405193846104a7565b808352610c86601f19916104ce565b013660208401375f5b8151811015610ce55780610cd460019260051b60208082870101519189010151905f918252602082815260408084206001600160a01b03909316845291905290205490565b610cde8286610c25565b5201610c8f565b5090925050565b635b05999160e01b5f5260045260245260445ffd5b5f81815260036020908152604080832033845290915290205460ff1615610d255750565b63e2517d3f60e01b5f523360045260245260445ffd5b6001600160a01b0391821691811690828214159081610d73575b50610d5e575050565b63711bec9160e11b5f5260045260245260445ffd5b5f8481526001602090815260408083206001600160a01b0390941683529290522060ff91505416155f610d55565b5f8181526003602090815260408083206001600160a01b038616845290915290205460ff16610e2b575f8181526003602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b5f8181526003602090815260408083206001600160a01b038616845290915290205460ff1615610e2b575f8181526003602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b909392918451815190818103610c105750506001600160a01b03821693841515935f5b8751811015610f2d578086868a60208060019660051b8093010151918901015192610f0b575b50505001610edc565b610f2391610ae3610b36925f525f60205260405f2090565b90555f8681610f02565b509390959460018651145f14610fa3576020868101518482015160408051928352928201525f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629190a45b610f86575b50505050565b602080610f9a950151910151915f3361125d565b5f808080610f80565b5f6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610fd6888c836111bb565b0390a4610f7b565b9493929091938451825190818103610c105750506001600160a01b038681169586151595918516801515939192905f5b84518110156110e7578060051b90898988602080868b010151958c01015192611066575b93600194611044575b5050500161100e565b61105c91610ae3610b36925f525f60205260405f2090565b90555f898161103b565b5050909161107f8d610ae3835f525f60205260405f2090565b548281106110b0578291898f6110a7600197968f950391610ae3855f525f60205260405f2090565b55909450611032565b6040516303dee4c560e01b81526001600160a01b038f16600482015260248101919091526044810183905260648101829052608490fd5b5091989593929790965060018851145f146111605760208881015186820151604080519283529282015233917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291a45b611143575b5050505050565b602080611156960151920151923361125d565b5f8080808061113c565b6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180611192898d836111bb565b0390a4611137565b919082018092116111a757565b634e487b7160e01b5f52601160045260245ffd5b90916111d2610274936040845260408401906106b9565b9160208184039101526106b9565b9081602091031261012e5751610274816101a4565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a0608082018190526102749291019061023f565b3d15611258573d9061123f82610543565b9161124d60405193846104a7565b82523d5f602084013e565b606090565b9091949293853b611271575b505050505050565b60209361129391604051968795869563f23a6e6160e01b8752600487016111f5565b03815f6001600160a01b0387165af15f9181611322575b506112e457506112b861122e565b80519190826112dd57632bfa23e760e11b5f526001600160a01b03821660045260245ffd5b6020915001fd5b6001600160e01b031916630dc5919f60e01b0161130757505f8080808080611269565b632bfa23e760e11b5f526001600160a01b031660045260245ffd5b61134591925060203d60201161134c575b61133d81836104a7565b8101906111e0565b905f6112aa565b503d611333565b6001600160a01b0391821681529116602082015260a0604082018190526102749491939192611398929161138a91908601906106b9565b9084820360608601526106b9565b91608081840391015261023f565b9091949293853b6113b957505050505050565b6020936113db91604051968795869563bc197c8160e01b875260048701611353565b03815f6001600160a01b0387165af15f9181611423575b5061140057506112b861122e565b6001600160e01b0319166343e6837f60e01b0161130757505f8080808080611269565b61143d91925060203d60201161134c5761133d81836104a7565b905f6113f256fea2646970667358221220c8ac708989e1e97f59be0a9c2472051e9a6f23db2cb5375e9edab7d9125b4d5764736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5562e70da342db81569f3094d36be279beaca7ad8e08f434ea188e79d2bfe10c3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff"
    },
    "MockEntryPoint": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "opIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "name": "FailedOp",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "opIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "inner",
              "type": "bytes"
            }
          ],
          "name": "FailedOpWithRevert",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "name": "addStake",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "depositTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint192",
              "name": "",
              "type": "uint192"
            }
          ],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
            }
          ],
          "name": "getUserOpHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "nonce",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes",
                      "name": "initCode",
                      "type": "bytes"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "accountGasLimits",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "uint256",
                      "name": "preVerificationGas",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "gasFees",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "bytes",
                      "name": "paymasterAndData",
                      "type": "bytes"
                    },
                    {
                      "internalType": "bytes",
                      "name": "signature",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct PackedUserOperation[]",
                  "name": "userOps",
                  "type": "tuple[]"
                },
                {
                  "internalType": "contract IAggregator",
                  "name": "aggregator",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IEntryPoint.UserOpsPerAggregator[]",
              "name": "",
              "type": "tuple[]"
            },
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "name": "handleAggregatedOps",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation[]",
              "name": "ops",
              "type": "tuple[]"
            },
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "name": "handleOps",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "unlockStake",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "name": "withdrawStake",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "withdrawTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x6080806040523460155761066a908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c80630396cb601461037e578063205c28781461036557806322cdde4c1461031d57806335567e1a146102d557806370a08231146102b1578063765e827f1461011c5780637ecebe00146100e5578063b760faf9146100d1578063bb9fe6bf146100bf578063c23a5cea146100a65763dbed18e014610092575f80fd5b346100a2576100a0366103b1565b005b5f80fd5b346100a25760203660031901126100a2576100a061039b565b346100a2575f3660031901126100a257005b60203660031901126100a2576100a061039b565b346100a25760203660031901126100a2576001600160a01b0361010661039b565b165f525f602052602060405f2054604051908152f35b346100a25761012a366103b1565b50905f5b82811061013757005b5f8061014c6101478487876105aa565b61056d565b61015f61015a8588886105aa565b6105e1565b908261016c8689896105aa565b916101b2604051809261019860208301966306608bdf60e21b885260606024850152608484019061046b565b90604483015284606483015203601f198101835282610537565b51925af16101be6105f5565b5015610278576101d261015a8285856105aa565b6101dd8285856105aa565b606081013590601e19813603018212156100a257019081359167ffffffffffffffff83116100a2576020019082360382136100a257825f80949381946040519384928337810182815203925af16102326105f5565b50156102405760010161012e565b60405162461bcd60e51b815260206004820152601060248201526f115e1958dd5d1a5bdb8819985a5b195960821b6044820152606490fd5b60405162461bcd60e51b815260206004820152601160248201527015985b1a59185d1a5bdb8819985a5b1959607a1b6044820152606490fd5b346100a25760203660031901126100a2576102ca61039b565b5060206040515f8152f35b346100a25760403660031901126100a2576102ee61039b565b6024356001600160c01b038116036100a25760018060a01b03165f525f602052602060405f2054604051908152f35b346100a25760203660031901126100a25760043567ffffffffffffffff81116100a25761012060031982360301126100a25761035d60209160040161056d565b604051908152f35b346100a25760403660031901126100a2576100a061039b565b60203660031901126100a25760043563ffffffff8116036100a257005b600435906001600160a01b03821682036100a257565b9060406003198301126100a25760043567ffffffffffffffff81116100a25760040182601f820112156100a25780359267ffffffffffffffff84116100a2576020808301928560051b0101116100a25791906024356001600160a01b03811681036100a25790565b9035601e19823603018112156100a257016020813591019167ffffffffffffffff82116100a25781360383136100a257565b908060209392818452848401375f828201840152601f01601f1916010190565b8035916001600160a01b03831683036100a2576001600160a01b03909216825260208181013590830152610534916105256105196104e06104c56104b26040870187610419565b610120604088015261012087019161044b565b6104d26060870187610419565b90868303606088015261044b565b6080850135608085015260a085013560a085015260c085013560c085015261050b60e0860186610419565b9085830360e087015261044b565b92610100810190610419565b9161010081850391015261044b565b90565b90601f8019910116810190811067ffffffffffffffff82111761055957604052565b634e487b7160e01b5f52604160045260245ffd5b6040516105a48161058a602082019460608652608083019061046b565b30604083015246606083015203601f198101835282610537565b51902090565b91908110156105cd5760051b8101359061011e19813603018212156100a2570190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036100a25790565b3d1561062f573d9067ffffffffffffffff82116105595760405191610624601f8201601f191660200184610537565b82523d5f602084013e565b60609056fea26469706673582212204807b8b4192efd60296a9a4ba0d2735c48d699542ae069667396c6213571e7e664736f6c634300081c0033"
    },
    "MockPriceFeed": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "initialPrice",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "latestRoundData",
          "outputs": [
            {
              "internalType": "uint80",
              "name": "roundId",
              "type": "uint80"
            },
            {
              "internalType": "int256",
              "name": "answer",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "startedAt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updatedAt",
              "type": "uint256"
            },
            {
              "internalType": "uint80",
              "name": "answeredInRound",
              "type": "uint80"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "newPrice",
              "type": "int256"
            }
          ],
          "name": "setPrice",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "shouldRevert",
              "type": "bool"
            }
          ],
          "name": "setRevert",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608034604d57601f61018c38819003918201601f19168301916001600160401b03831184841017605157808492602094604052833981010312604d57515f5560405161012690816100668239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60808060405260043610156011575f80fd5b5f3560e01c80638fb5f1711460c3578063f7a308061460ad5763feaf968c146037575f80fd5b3460a9575f36600319011260a95760ff6001541660725760a05f54604051905f825260208201525f60408201524260608201525f6080820152f35b62461bcd60e51b815260206004820152601260248201527150726963652066656564206661696c75726560701b6044820152606490fd5b5f80fd5b3460a957602036600319011260a9576004355f55005b3460a957602036600319011260a95760043580151580910360a95760ff8019600154169116176001555f80f3fea26469706673582212209741ee3f878c33b1bb51a1d7fd27c2e69355dc03343af5b0398caf7b3b7ad43264736f6c634300081c0033"
    },
    "MockRoyaltyNFT": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "salePrice",
              "type": "uint256"
            }
          ],
          "name": "royaltyInfo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "bps",
              "type": "uint96"
            }
          ],
          "name": "setRoyalty",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60806040523461030b57611033803803806100198161030f565b92833981019060408183031261030b5780516001600160401b03811161030b5782610045918301610334565b60208201519092906001600160401b03811161030b576100659201610334565b81516001600160401b038111610221575f54600181811c91168015610301575b602082101461020357601f811161029f575b50602092601f821160011461024057928192935f92610235575b50508160011b915f199060031b1c1916175f555b80516001600160401b03811161022157600154600181811c91168015610217575b602082101461020357601f81116101a0575b50602091601f8211600114610140579181925f92610135575b50508160011b915f199060031b1c1916176001555b604051610cad90816103868239f35b015190505f80610111565b601f1982169260015f52805f20915f5b85811061018857508360019510610170575b505050811b01600155610126565b01515f1960f88460031b161c191690555f8080610162565b91926020600181928685015181550194019201610150565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c810191602084106101f9575b601f0160051c01905b8181106101ee57506100f8565b5f81556001016101e1565b90915081906101d8565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100e6565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100b1565b601f198216935f8052805f20915f5b868110610287575083600195961061026f575b505050811b015f556100c5565b01515f1960f88460031b161c191690555f8080610262565b9192602060018192868501518155019401920161024f565b5f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f830160051c810191602084106102f7575b601f0160051c01905b8181106102ec5750610097565b5f81556001016102df565b90915081906102d6565b90607f1690610085565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761022157604052565b81601f8201121561030b578051906001600160401b03821161022157610363601f8301601f191660200161030f565b928284526020838301011161030b57815f9260208093018386015e830101529056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a71461081a5750806306fdde0314610762578063081812fc14610726578063095ea7b31461063c57806323b872dd146106255780632a55205a146105c757806340c10f19146104c257806342842e0e146104995780636352211e1461046957806370a08231146104185780638f2fc60b146103cb57806395d89b41146102c3578063a22cb4651461020f578063b88d4fde14610185578063c87b56dd146101285763e985e9c5146100ce575f80fd5b346101255760403660031901126101255760406100e96108c3565b916100f26108d9565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b3461018157602036600319011261018157610144600435610c43565b505f604051610154602082610929565b5261017d604051610166602082610929565b5f815260405191829160208352602083019061089f565b0390f35b5f80fd5b346101815760803660031901126101815761019e6108c3565b6101a66108d9565b6064359167ffffffffffffffff83116101815736602384011215610181578260040135916101d38361095f565b926101e16040519485610929565b8084523660248287010111610181576020815f92602461020d9801838801378501015260443591610b03565b005b34610181576040366003190112610181576102286108c3565b602435908115158092036101815733156102b0576001600160a01b031690811561029d57335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b63a9fbf51f60e01b5f525f60045260245ffd5b34610181575f366003190112610181576040515f6001548060011c906001811680156103c1575b6020831081146103ad57828552908115610389575060011461032b575b61017d8361031781850382610929565b60405191829160208352602083019061089f565b91905060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6915f905b80821061036f57509091508101602001610317610307565b919260018160209254838588010152019101909291610357565b60ff191660208086019190915291151560051b840190910191506103179050610307565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102ea565b34610181576040366003190112610181576103e46108c3565b6024356001600160601b0381168103610181576001600160a01b0390911660a09190911b6001600160a01b03191617600655005b34610181576020366003190112610181576001600160a01b036104396108c3565b168015610456575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b34610181576020366003190112610181576020610487600435610c43565b6040516001600160a01b039091168152f35b346101815761020d6104aa366108ef565b90604051926104ba602085610929565b5f8452610b03565b34610181576040366003190112610181576104db6108c3565b6001600160a01b031660243581156105b4575f818152600260205260409020546001600160a01b03168015159290919083610581575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a45061056e57005b6339e3563760e11b5f525f60045260245ffd5b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055610511565b633250574960e11b5f525f60045260245ffd5b34610181576040366003190112610181576024356006548060a01c9182810292818404149015171561061157604080516001600160a01b0390921682526127109092046020820152f35b634e487b7160e01b5f52601160045260245ffd5b346101815761020d610636366108ef565b9161097b565b34610181576040366003190112610181576106556108c3565b60243561066181610c43565b33151580610713575b806106e6575b6106d35781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615610670565b506001600160a01b03811633141561066a565b346101815760203660031901126101815760043561074381610c43565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610181575f366003190112610181576040515f5f548060011c90600181168015610810575b6020831081146103ad5782855290811561038957506001146107b45761017d8361031781850382610929565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106107f657509091508101602001610317610307565b9192600181602092548385880101520191019092916107de565b91607f1691610788565b34610181576020366003190112610181576004359063ffffffff60e01b82168092036101815760209163152a902d60e11b811490811561085c575b5015158152f35b6380ac58cd60e01b81149150811561088e575b811561087d575b5083610855565b6301ffc9a760e01b14905083610876565b635b5e139f60e01b8114915061086f565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361018157565b602435906001600160a01b038216820361018157565b6060906003190112610181576004356001600160a01b038116810361018157906024356001600160a01b0381168103610181579060443590565b90601f8019910116810190811067ffffffffffffffff82111761094b57604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff811161094b57601f01601f191660200190565b6001600160a01b03909116919082156105b4575f828152600260205260409020546001600160a01b031692829033151580610a6e575b5084610a3b575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303610a2357505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f1981540190556109b8565b90915080610ab2575b15610a845782905f6109b1565b8284610a9c57637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015610ae1575b80610a7757505f838152600460205260409020546001600160a01b03163314610a77565b505f84815260056020908152604080832033845290915290205460ff16610abd565b9291610b1081838661097b565b813b610b1d575b50505050565b604051630a85bd0160e11b81523360048201526001600160a01b0394851660248201526044810191909152608060648201529216919060209082908190610b6890608483019061089f565b03815f865af15f9181610bfe575b50610bcb57503d15610bc4573d610b8c8161095f565b90610b9a6040519283610929565b81523d5f602083013e5b80519081610bbf5782633250574960e11b5f5260045260245ffd5b602001fd5b6060610ba4565b6001600160e01b03191663757a42ff60e11b01610bec57505f808080610b17565b633250574960e11b5f5260045260245ffd5b9091506020813d602011610c3b575b81610c1a60209383610929565b8101031261018157516001600160e01b03198116810361018157905f610b76565b3d9150610c0d565b5f818152600260205260409020546001600160a01b0316908115610c65575090565b637e27328960e01b5f5260045260245ffdfea264697066735822122014ff614a93dbe4a2d4f841c587078c3e315477f0c472f45a1a0a8ab6553f081a64736f6c634300081c0033"
    },
    "MockUSDC": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientAllowance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSpender",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60806040523461031457604080519081016001600160401b0381118282101761022757604090815260098252684d6f636b205553444360b81b602083015280519081016001600160401b038111828210176102275760405260058152646d5553444360d81b602082015281516001600160401b03811161022757600354600181811c9116801561030a575b602082101461020957601f81116102a7575b50602092601f821160011461024657928192935f9261023b575b50508160011b915f199060031b1c1916176003555b80516001600160401b03811161022757600454600181811c9116801561021d575b602082101461020957601f81116101a6575b50602091601f8211600114610146579181925f9261013b575b50508160011b915f199060031b1c1916176004555b6040516106a190816103198239f35b015190505f80610117565b601f1982169260045f52805f20915f5b85811061018e57508360019510610176575b505050811b0160045561012c565b01515f1960f88460031b161c191690555f8080610168565b91926020600181928685015181550194019201610156565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c810191602084106101ff575b601f0160051c01905b8181106101f457506100fe565b5f81556001016101e7565b90915081906101de565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100ec565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100b6565b601f1982169360035f52805f20915f5b86811061028f5750836001959610610277575b505050811b016003556100cb565b01515f1960f88460031b161c191690555f8080610269565b91926020600181928685015181550194019201610256565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c81019160208410610300575b601f0160051c01905b8181106102f5575061009c565b5f81556001016102e8565b90915081906102df565b90607f169061008a565b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde031461049c57508063095ea7b31461041a57806318160ddd146103fd57806323b872dd1461031e578063313ce5671461030357806340c10f191461026157806370a082311461022a57806395d89b411461010f578063a9059cbb146100de5763dd62ed3e1461008a575f80fd5b346100da5760403660031901126100da576100a3610595565b6100ab6105ab565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b5f80fd5b346100da5760403660031901126100da576101046100fa610595565b60243590336105c1565b602060405160018152f35b346100da575f3660031901126100da576040515f6004548060011c90600181168015610220575b60208310811461020c578285529081156101f0575060011461019b575b50819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056b565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b8282106101da57506020915082010182610153565b60018160209254838588010152019101906101c5565b90506020925060ff191682840152151560051b82010182610153565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610136565b346100da5760203660031901126100da576001600160a01b0361024b610595565b165f525f602052602060405f2054604051908152f35b346100da5760403660031901126100da5761027a610595565b6001600160a01b031660243581156102f057600254908082018092116102dc5760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f9360025584845283825260408420818154019055604051908152a3005b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b346100da575f3660031901126100da57602060405160128152f35b346100da5760603660031901126100da57610337610595565b61033f6105ab565b6001600160a01b0382165f818152600160209081526040808320338452909152902054909260443592915f19811061037d575b5061010493506105c1565b8381106103e25784156103cf5733156103bc57610104945f52600160205260405f2060018060a01b0333165f526020528360405f209103905584610372565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b346100da575f3660031901126100da576020600254604051908152f35b346100da5760403660031901126100da57610433610595565b6024359033156103cf576001600160a01b03169081156103bc57335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b346100da575f3660031901126100da575f6003548060011c90600181168015610561575b60208310811461020c578285529081156101f0575060011461050c5750819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056b565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b82821061054b57506020915082010182610153565b6001816020925483858801015201910190610536565b91607f16916104c0565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036100da57565b602435906001600160a01b03821682036100da57565b6001600160a01b0316908115610658576001600160a01b03169182156102f057815f525f60205260405f205481811061063f57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b634b637e8f60e11b5f525f60045260245ffdfea2646970667358221220df62e75cd00d503944b524f8c06c0555ef4b2babd6413a4809d330da1f2db4f164736f6c634300081c0033"
    },
    "NFTMarketplace": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialAdmin",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_paymentToken",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "newRecipient",
              "type": "address"
            }
          ],
          "name": "FeeRecipientUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newMinPrice",
              "type": "uint256"
            }
          ],
          "name": "MinOfferPriceUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "seller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "OfferAccepted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            }
          ],
          "name": "OfferCanceled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "OfferCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "seller",
              "type": "address"
            }
          ],
          "name": "OfferRejected",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newAmount",
              "type": "uint256"
            }
          ],
          "name": "OfferUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newFeeBps",
              "type": "uint256"
            }
          ],
          "name": "ProtocolFeeUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            }
          ],
          "name": "acceptOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "cancelOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            }
          ],
          "name": "cancelOffers",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "createOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "feeRecipient",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minOfferPrice",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "offers",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "paymentToken",
          "outputs": [
            {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "protocolFeeBps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            }
          ],
          "name": "rejectOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "setFeeRecipient",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_minPrice",
              "type": "uint256"
            }
          ],
          "name": "setMinOfferPrice",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_feeBps",
              "type": "uint256"
            }
          ],
          "name": "setProtocolFee",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newPrice",
              "type": "uint256"
            }
          ],
          "name": "updateOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a0346100fc57601f611eaa38819003918201601f19168301916001600160401b038311848410176101005780849260409485528339810103126100fc5780610056602061004f6100a494610114565b9201610114565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600380546001600160a01b031916918316919091179055610128565b50604051611cd890816101b2823960805181818161025c01528181610609015281816108910152818161092901528181610cba01528181610fd40152818161104601528181611084015281816114ce01526116270152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100fc57565b6001600160a01b0381165f9081525f516020611e8a5f395f51905f52602052604090205460ff166101ac576001600160a01b03165f8181525f516020611e8a5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146116c957508063058a56ac1461156c578063248a9ca31461153a5780632f2ff15d146114fd5780633013ce29146114b957806335659fb81461149c57806336568abe146114565780633bbb280614610d7a5780634690484014610d515780635536372414610b80578063787dce3d14610aeb5780637c3ae2be14610acd57806391d1485414610a84578063a217fddf14610a68578063c7fff71914610816578063cddc1bc1146104d8578063d3f494cc14610478578063d547741f14610431578063d898aaf2146101f6578063e74b981b146101555763ef71f54114610105575f80fd5b34610152576020366003190112610152577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a33506020600435610144611a8a565b80600455604051908152a180f35b80fd5b50346101525760203660031901126101525761016f61171c565b610177611a8a565b6001600160a01b031680156101bf57600380546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc28280a280f35b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b503461015257610205366117b3565b9261020e6119d1565b60045484106103ec57831561039c578115610357576001600160a01b03168085526001602090815260408087208588528252808720335f908152925290205490919061031b576102808430337f0000000000000000000000000000000000000000000000000000000000000000611c19565b60405161028c816117e1565b8481526002602082018381526040830190428252858952600160205260408920878a526020526040892060018060a01b0333165f5260205260405f20935184555160018401555191015560405193845260208401527f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf760403394a460015f516020611c835f395f51905f525580f35b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4f666665722070726963652062656c6f77206d696e696d756d000000000000006044820152606490fd5b503461015257604036600319011261015257610474600435610451611732565b9061046f61046a825f525f602052600160405f20015490565b611ad9565b611b99565b5080f35b503461015257604061048936611748565b939160018060a01b031682526001602052828220908252602052209060018060a01b03165f52602052606060405f20805490600260018201549101549060405192835260208301526040820152f35b5034610152576104e736611748565b916104f06119d1565b60018060a01b03168084526001602052604084208285526020526040842060018060a01b0384165f5260205260405f206040519061052d826117e1565b6105528154808452600260018401549360208601948552015460408501521515611833565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156107815787916107f7575b50156106c957506040516331a9108f60e11b81526004810184905290602082602481865afa9182156106be578692610679575b5061062d916105cf906001600160a01b03163314611940565b8286526001602052604086208487526020526040862060018060a01b0386165f526020525f600260408220828155826001820155015551847f0000000000000000000000000000000000000000000000000000000000000000611a09565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a460015f516020611c835f395f51905f525580f35b91506020823d6020116106b6575b8161069460209383611811565b810103126106b2576105cf6106ab61062d9361192c565b92506105b6565b8580fd5b3d9150610687565b6040513d88823e3d90fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa9081156107815787916107c8575b501561078c57604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610781578791610749575b506107449061062d9351111561188f565b6105cf565b90506020813d602011610779575b8161076460209383611811565b81010312610775575161062d610733565b5f80fd5b3d9150610757565b6040513d89823e3d90fd5b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b6107ea915060203d6020116107f0575b6107e28183611811565b810190611877565b5f6106fd565b503d6107d8565b610810915060203d6020116107f0576107e28183611811565b5f610583565b503461015257610825366117b3565b9261082e6119d1565b6001600160a01b03168085526001602090815260408087208588528252808720335f9081529252902080549192918015610a2c5760045486106109e75785156109a3578215610954578581811115610909576108b59161088d9161198c565b30337f0000000000000000000000000000000000000000000000000000000000000000611c19565b84815581600182015560024291015560405193845260208401527ffe240e6b60fba78dcf5eae78fca1a9b6ceaf51429c5036812d6b4f2f0a2dfada60403394a460015f516020611c835f395f51905f525580f35b90808210610919575b50506108b5565b61094d916109269161198c565b337f0000000000000000000000000000000000000000000000000000000000000000611a09565b845f610912565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601760248201527f4e65772070726963652062656c6f77206d696e696d756d0000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b5034610152578060031936011261015257602090604051908152f35b5034610152576040366003190112610152576040610aa0611732565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346101525780600319360112610152576020600454604051908152f35b503461015257602036600319011261015257600435610b08611a8a565b6103e88111610b43576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600255604051908152a180f35b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b50346101525760403660031901126101525760043567ffffffffffffffff8111610d4d57610bb2903690600401611782565b60243567ffffffffffffffff8111610d4957610bd2903690600401611782565b9290610bdc6119d1565b838303610d10579091339190855b818110610c06578660015f516020611c835f395f51905f525580f35b610c118183876119ad565b356001600160a01b0381169190829003610d0c57600191610c338289876119ad565b35818a528360205260408a20818b5260205260408a20875f5260205260405f2060405190610c60826117e1565b600281549182845287810154602085015201546040830152610c86575b50505001610bea565b610cde90838c528560205260408c20838d5260205260408c20895f526020525f6002604082208281558289820155015551337f0000000000000000000000000000000000000000000000000000000000000000611a09565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d08b80a45f8080610c7d565b8780fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b8380fd5b5080fd5b50346101525780600319360112610152576003546040516001600160a01b039091168152602090f35b503461077557610d8936611748565b91610d926119d1565b60018060a01b0316805f52600160205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f209260405190610dd0826117e1565b610df58554808452600260018801549760208601988952015460408501521515611833565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156113ba575f91611437575b5015611296576001855103611251576040516331a9108f60e11b815260048101859052602081602481875afa8015610781578790611216575b610e7491506001600160a01b03163314611940565b60405163e985e9c560e01b8152336004820152306024820152602081604481875afa9081156107815787916111f7575b50801561117b575b610eb5906118d2565b823b156106b257604051632142170760e11b81523360048201526001600160a01b0382166024820152604481018590528690818160648183895af180156111705761115b575b50505b828652600160205260408620848752602052604086209060018060a01b03165f526020525f600260408220828155826001820155015580516002549081810291818304149015171561114757612710900485869083516040519063152a902d60e11b82528760048301526024820152604081604481895afa808a928b92611101575b506110e7575b50508083018084116110d3579083610ff894939286518091116110c2575b5081610fb4610fb992885161198c565b61198c565b92801515806110ae575b611071575b5080611040575b5050337f0000000000000000000000000000000000000000000000000000000000000000611a09565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a460015f516020611c835f395f51905f525580f35b61106a917f0000000000000000000000000000000000000000000000000000000000000000611a09565b5f80610fcf565b6003546110a891906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000611a09565b5f610fc8565b506003546001600160a01b03161515610fc3565b6110cc925061198c565b825f610fa4565b634e487b7160e01b89526011600452602489fd5b6001600160a01b03821615610f8657915091505f80610f86565b925090506040823d60401161113f575b8161111e60409383611811565b8101031261113b5760206111318361192c565b920151905f610f80565b8980fd5b3d9150611111565b634e487b7160e01b86526011600452602486fd5b8161116591611811565b6106b257855f610efb565b6040513d84823e3d90fd5b5060405163020604bf60e21b815260048101859052602081602481875afa80156107815787906111b8575b6001600160a01b031630149050610eac565b506020813d6020116111ef575b816111d260209383611811565b810103126111eb576111e6610eb59161192c565b6111a6565b8680fd5b3d91506111c5565b611210915060203d6020116107f0576107e28183611811565b5f610ea4565b506020813d602011611249575b8161123060209383611811565b810103126111eb57611244610e749161192c565b610e5f565b3d9150611223565b60405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481875afa9081156113ba575f91611418575b501561078c57604051627eeac760e11b815233600482015260248101859052602081604481875afa80156113ba575f906113e4575b61130a91508651111561188f565b60405163e985e9c560e01b8152336004820152306024820152602081604481875afa80156113ba57611343915f916113c5575b506118d2565b8451833b1561077557604051637921219560e11b81523360048201526001600160a01b038316602482015260448101869052606481019190915260a060848201525f60a482018190528160c48183885af180156113ba576113a5575b50610efe565b6113b29196505f90611811565b5f945f61139f565b6040513d5f823e3d90fd5b6113de915060203d6020116107f0576107e28183611811565b5f61133d565b506020813d602011611410575b816113fe60209383611811565b810103126107755761130a90516112fc565b3d91506113f1565b611431915060203d6020116107f0576107e28183611811565b5f6112c7565b611450915060203d6020116107f0576107e28183611811565b5f610e26565b346107755760403660031901126107755761146f611732565b336001600160a01b0382160361148d5761148b90600435611b99565b005b63334bd91960e11b5f5260045ffd5b34610775575f366003190112610775576020600254604051908152f35b34610775575f366003190112610775576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346107755760403660031901126107755761148b60043561151c611732565b9061153561046a825f525f602052600160405f20015490565b611b11565b346107755760203660031901126107755760206115646004355f525f602052600160405f20015490565b604051908152f35b346107755760403660031901126107755761158561171c565b602435906115916119d1565b6001600160a01b03165f8181526001602090815260408083208584528252808320338452909152908190209051919291906115cb826117e1565b60028154918284526001810154602085015201546040830152156116845761164b90835f52600160205260405f20835f5260205260405f2060018060a01b0333165f526020525f600260408220828155826001820155015551337f0000000000000000000000000000000000000000000000000000000000000000611a09565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020611c835f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b34610775576020366003190112610775576004359063ffffffff60e01b821680920361077557602091637965db0b60e01b811490811561170b575b5015158152f35b6301ffc9a760e01b14905083611704565b600435906001600160a01b038216820361077557565b602435906001600160a01b038216820361077557565b6060906003190112610775576004356001600160a01b03811681036107755790602435906044356001600160a01b03811681036107755790565b9181601f840112156107755782359167ffffffffffffffff8311610775576020808501948460051b01011161077557565b6080906003190112610775576004356001600160a01b03811681036107755790602435906044359060643590565b6060810190811067ffffffffffffffff8211176117fd57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff8211176117fd57604052565b1561183a57565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b90816020910312610775575180151581036107755790565b1561189657565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b156118d957565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b51906001600160a01b038216820361077557565b1561194757565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b9190820391821161199957565b634e487b7160e01b5f52601160045260245ffd5b91908110156119bd5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b60025f516020611c835f395f51905f5254146119fa5760025f516020611c835f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615611a69575b60405215611a495750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b906001811516611a8157823b15153d15161690611a3e565b503d5f823e3d90fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615611ac257565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615611afb5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611b93575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611b93575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f5114821615611c6a575b6040525f60605215611a495750565b906001811516611a8157823b15153d15161690611c5b56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a264697066735822122010c648f4e25d6c27953c06cf4f26c3c2a12236a500a82d56b8abe63a88f5f30364736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
    },
    "ReentrantDonor": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_bragNFT",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "attack",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "bragNFT",
          "outputs": [
            {
              "internalType": "contract BragNFT",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220c0c20e54a65b4907b1bfdd0d61985beb76e37ec316c333ab96e41cf6175a0c5564736f6c634300081c0033"
    },
    "RevertingRoyaltyNFT": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_reverter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "reverter",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "royaltyFee",
              "type": "uint256"
            }
          ],
          "name": "royaltyInfo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60806040523461043c57610fee6020813803918261001c81610440565b93849283398101031261043c57516001600160a01b0381169081900361043c576100466040610440565b906009825268526576657274696e6760b81b60208301526100676040610440565b60038152622922ab60e91b602082015282519091906001600160401b038111610350575f54600181811c91168015610432575b602082101461033257601f81116103d0575b506020601f821160011461036f57819293945f92610364575b50508160011b915f199060031b1c1916175f555b81516001600160401b03811161035057600154600181811c91168015610346575b602082101461033257601f81116102cf575b50602092601f821160011461026e57928192935f92610263575b50508160011b915f199060031b1c1916176001555b600680546001600160a01b0319169190911790553315610250575f805260026020525f516020610fce5f395f51905f52546001600160a01b031680151580610208575b335f8181526003602090815260408083208054600101905582805260029091525f516020610fce5f395f51905f5280546001600160a01b0319168417905551939091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8380a46101f557610b6890816104668239f35b6339e3563760e11b5f525f60045260245ffd5b7f17ef568e3e12ab5b9c7254a8d58478811de00f9e6eb34345acd53bf8fd09d3ec80546001600160a01b03191690555f82815260036020526040902080545f1901905561017e565b633250574960e11b5f525f60045260245ffd5b015190505f80610126565b601f1982169360015f52805f20915f5b8681106102b7575083600195961061029f575b505050811b0160015561013b565b01515f1960f88460031b161c191690555f8080610291565b9192602060018192868501518155019401920161027e565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c81019160208410610328575b601f0160051c01905b81811061031d575061010c565b5f8155600101610310565b9091508190610307565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100fa565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100c5565b601f198216905f8052805f20915f5b8181106103b8575095836001959697106103a0575b505050811b015f556100d9565b01515f1960f88460031b161c191690555f8080610393565b9192602060018192868b01518155019401920161037e565b5f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f830160051c81019160208410610428575b601f0160051c01905b81811061041d57506100ac565b5f8155600101610410565b9091508190610407565b90607f169061009a565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176103505760405256fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146106b75750806306fdde03146105ff578063081812fc146105c3578063095ea7b3146104d957806323b872dd146104c25780632a55205a1461049257806335ff01031461046a57806342842e0e146104415780636352211e1461041157806370a08231146103c057806395d89b41146102b8578063a22cb46514610204578063b88d4fde1461017a578063c87b56dd1461011d5763e985e9c5146100c3575f80fd5b3461011a57604036600319011261011a5760406100de610760565b916100e7610776565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b3461017657602036600319011261017657610139600435610afe565b505f6040516101496020826107c6565b5261017260405161015b6020826107c6565b5f815260405191829160208352602083019061073c565b0390f35b5f80fd5b3461017657608036600319011261017657610193610760565b61019b610776565b6064359167ffffffffffffffff83116101765736602384011215610176578260040135916101c8836107fc565b926101d660405194856107c6565b8084523660248287010111610176576020815f92602461020298018388013785010152604435916109be565b005b346101765760403660031901126101765761021d610760565b602435908115158092036101765733156102a5576001600160a01b031690811561029257335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b63a9fbf51f60e01b5f525f60045260245ffd5b34610176575f366003190112610176576040515f6001548060011c906001811680156103b6575b6020831081146103a25782855290811561037e5750600114610320575b6101728361030c818503826107c6565b60405191829160208352602083019061073c565b91905060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6915f905b8082106103645750909150810160200161030c6102fc565b91926001816020925483858801015201910190929161034c565b60ff191660208086019190915291151560051b8401909101915061030c90506102fc565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102df565b34610176576020366003190112610176576001600160a01b036103e1610760565b1680156103fe575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b3461017657602036600319011261017657602061042f600435610afe565b6040516001600160a01b039091168152f35b34610176576102026104523661078c565b90604051926104626020856107c6565b5f84526109be565b34610176575f366003190112610176576006546040516001600160a01b039091168152602090f35b3461017657604036600319011261017657600654604080516001600160a01b039092168252602435602083015290f35b34610176576102026104d33661078c565b91610818565b34610176576040366003190112610176576104f2610760565b6024356104fe81610afe565b331515806105b0575b80610583575b6105705781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff161561050d565b506001600160a01b038116331415610507565b34610176576020366003190112610176576004356105e081610afe565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610176575f366003190112610176576040515f5f548060011c906001811680156106ad575b6020831081146103a25782855290811561037e5750600114610651576101728361030c818503826107c6565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106106935750909150810160200161030c6102fc565b91926001816020925483858801015201910190929161067b565b91607f1691610625565b34610176576020366003190112610176576004359063ffffffff60e01b82168092036101765760209163152a902d60e11b81149081156106f9575b5015158152f35b6380ac58cd60e01b81149150811561072b575b811561071a575b50836106f2565b6301ffc9a760e01b14905083610713565b635b5e139f60e01b8114915061070c565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361017657565b602435906001600160a01b038216820361017657565b6060906003190112610176576004356001600160a01b038116810361017657906024356001600160a01b0381168103610176579060443590565b90601f8019910116810190811067ffffffffffffffff8211176107e857604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff81116107e857601f01601f191660200190565b6001600160a01b03909116919082156109ab575f828152600260205260409020546001600160a01b031692829033151580610916575b50846108dd575b805f52600360205260405f2060018154019055815f52600260205260405f20816bffffffffffffffffffffffff60a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b03168083036108c557505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b815f52600460205260405f206bffffffffffffffffffffffff60a01b8154169055845f52600360205260405f205f198154019055610855565b9091508061095a575b1561092c5782905f61084e565b828461094457637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015610989575b8061091f57505f838152600460205260409020546001600160a01b0316331461091f565b505f84815260056020908152604080832033845290915290205460ff16610965565b633250574960e11b5f525f60045260245ffd5b92916109cb818386610818565b813b6109d8575b50505050565b604051630a85bd0160e11b81523360048201526001600160a01b0394851660248201526044810191909152608060648201529216919060209082908190610a2390608483019061073c565b03815f865af15f9181610ab9575b50610a8657503d15610a7f573d610a47816107fc565b90610a5560405192836107c6565b81523d5f602083013e5b80519081610a7a5782633250574960e11b5f5260045260245ffd5b602001fd5b6060610a5f565b6001600160e01b03191663757a42ff60e11b01610aa757505f8080806109d2565b633250574960e11b5f5260045260245ffd5b9091506020813d602011610af6575b81610ad5602093836107c6565b8101031261017657516001600160e01b03198116810361017657905f610a31565b3d9150610ac8565b5f818152600260205260409020546001600160a01b0316908115610b20575090565b637e27328960e01b5f5260045260245ffdfea26469706673582212204cb671c30a581e26e93da1aed221575dab2df5ee46afe838bd70eed399841f5964736f6c634300081c0033ac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b"
    },
    "Treasury": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "initialOwners",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "initialThreshold",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "entryPointAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "AccountUnauthorized",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyApproved",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyCanceled",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyExecuted",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ECDSAInvalidSignature",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "ECDSAInvalidSignatureLength",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "ECDSAInvalidSignatureS",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ExecutionFailed",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidThreshold",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotProposer",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ProposalNotFound",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ThresholdNotMet",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "Approved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "Canceled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "Executed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "OwnerAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "OwnerRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
            }
          ],
          "name": "Proposed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            }
          ],
          "name": "ThresholdChanged",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "addOwner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "cancel",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newThreshold",
              "type": "uint256"
            }
          ],
          "name": "changeThreshold",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "entryPoint",
          "outputs": [
            {
              "internalType": "contract IEntryPoint",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "execute",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "executeProposal",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint192",
              "name": "key",
              "type": "uint192"
            }
          ],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getOwners",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "getProposal",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
            },
            {
              "internalType": "bool",
              "name": "executed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "canceled",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "approvalCount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "hasApproved",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "isOwner",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "hash",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "name": "isValidSignature",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proposalCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "proposals",
          "outputs": [
            {
              "internalType": "bool",
              "name": "executed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "canceled",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "approvalCount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "propose",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "removeOwner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "threshold",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
            },
            {
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "missingAccountFunds",
              "type": "uint256"
            }
          ],
          "name": "validateUserOp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60a06040523461029a57611fda80380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a1604051611c81908161035982396080518181816101cc015281816105a001528181610c2001528181610f500152818161105b01526117ec0152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa89514611416578063013cf08b146113b957806301ffc9a7146113635780630d61b519146111f7578063150b7a02146111a25780631626ba7e14611151578063173825d9146110d557806319822f7c1461101f5780632358d5a814610fd35780632f54bf6e14610f915780633e1b081214610f0757806342cde4e814610eea5780635d35a3d914610dee578063694e80c314610d8b5780637065cb4814610cf757806374420f4c14610be55780639330a22214610659578063a0e67e2b146105cf578063b0d691fe1461058b578063bc197c81146104f6578063c7f758a81461024c578063d087d2881461019b578063da35c6641461017e5763f23a6e610361000e573461017a5760a036600319011261017a5761013e6114dd565b506101476114f3565b506084356001600160401b03811161017a5761016790369060040161157b565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b3461017a575f36600319011261017a576020600554604051908152f35b3461017a575f36600319011261017a57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e575b604051908152602090f35b506020813d602011610239575b8161022860209383611509565b8101031261017a5760209051610203565b3d915061021b565b6040513d5f823e3d90fd5b3461017a57602036600319011261017a576004356005548110156104e7575f52600460205260405f206001810190600281016003820154600483015490604051808560208297549384815201905f5260205f20925f5b8181106104c55750506102b792500385611509565b604051808160208854928381520180985f5260205f20925f5b8181106104ac5750506102e592500382611509565b8354906102f182611632565b916102ff6040519384611509565b808352602083019081965f5260205f20915f905b828210610409575050505060206103356040519760e0895260e08901906115f6565b918783038289015251918281520196905f5b8181106103f357505050848603604086015251808652602086019060208160051b88010194915f905b8282106103b05760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b9091929560208080600193601f198d8203018652818b518051918291828552018484015e5f828201840152601f01601f1916010198019493919091019101610370565b8251895260209889019890920191600101610347565b6040515f8554610418816116cf565b80845290600181169081156104895750600114610452575b506001928261044485946020940382611509565b815201940191019092610313565b5f878152602081209092505b81831061047357505081016020016001610430565b600181602092548386880101520192019161045e565b60ff191660208581019190915291151560051b8401909101915060019050610430565b84548352600194850194869450602090930192016102d0565b84546001600160a01b03168352600194850194899450602090930192016102a2565b63635e873760e01b5f5260045ffd5b3461017a5760a036600319011261017a5761050f6114dd565b506105186114f3565b506044356001600160401b03811161017a57610538903690600401611649565b506064356001600160401b03811161017a57610558903690600401611649565b506084356001600160401b03811161017a5761057890369060040161157b565b5060405163bc197c8160e01b8152602090f35b3461017a575f36600319011261017a576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461017a575f36600319011261017a576040518060205f549182815201905f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106106435761063f8561062b81870382611509565b6040519182916020835260208301906115f6565b0390f35b8254845260209093019260019283019201610614565b3461017a57608036600319011261017a576004356001600160401b03811161017a576106899036906004016115c6565b6024356001600160401b03811161017a576106a89036906004016115c6565b9290916044356001600160401b03811161017a576106ca9036906004016115c6565b6064356106de6106d9826117e9565b6119eb565b8315610baf5786841480610ba6575b15610b6d576106fb906117e9565b94600554946107098661178e565b600555855f52600460205260405f20976001600160401b038611610aa957600160401b8611610aa957610741868a54818c558b6117c6565b5f8981526020812090835b888210610b4857505050600189016001600160401b038211610aa957600160401b8211610aa957610782828254818455836117c6565b83905f5260205f20905f5b838110610b345750505060028901600160401b8511610aa9578054858255808610610abd575b505f9081526020812090865b86821061098e5750505060038901805462010000600160b01b03191660108a901b62010000600160b01b0316179055604051606080825281018790526001600160a01b039890981697956080870192905f905b8082106109645750505085820360208701528082526001600160fb1b03811161017a5760059493941b809260208301370191806020840160208686030160408701525260408301906020808260051b8601010193835f91601e1982360301905b8484106108f45750505060208888600160048d84847f517fcb891178a767bf117b06ea6a469bfc3e466970227b0bce7cab47f6f5b7d48e808f0390a3845f5260058101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90919293949596601f19601f198383030101875287358381121561017a57840190602082359201916001600160401b03811161017a57803603831361017a576020828280600196849695859652848401375f828201840152601f01601f1916010199019701959401929190610872565b90919384359060018060a01b03821680920361017a57602081600193829352019501920190610812565b610998818961175c565b906001600160401b038211610aa9576109b185546116cf565b601f8111610a6e575b505f90601f8311600114610a045792826001949360209386955f926109f9575b50505f19600383901b1c191690841b1786555b019301910190916107bf565b013590505f806109da565b601f19831691865f5260205f20925f5b818110610a565750936020936001969387969383889510610a3d575b505050811b0186556109ed565b01355f19600384901b60f8161c191690555f8080610a30565b91936020600181928787013581550195019201610a14565b610a9990865f5260205f20601f850160051c81019160208610610a9f575b601f0160051c01906117b0565b8e6109ba565b9091508190610a8c565b634e487b7160e01b5f52604160045260245ffd5b815f528560205f2091820191015b818110610ad857506107b3565b80610ae5600192546116cf565b80610af2575b5001610acb565b601f81118314610b0757505f81555b8d610aeb565b610b2390825f5283601f60205f20920160051c820191016117b0565b805f525f6020812081835555610b01565b60019060208335930192818501550161078d565b8035916001600160a01b038316830361017a576020600192019281850155019061074c565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b508187146106ed565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b3461017a57608036600319011261017a57610bfe6114dd565b6044356001600160401b03811161017a57610c1d903690600401611599565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614929091908315610cca57600160025403610cbb575f9283925b81604051928392833781018481520391602435905af1610c80611707565b5015610cac57610c8c57005b6064355f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90303303610cdd575b905f928392610c62565b90610ce7336119eb565b600160025403610cbb5790610cd3565b3461017a57602036600319011261017a57610d106114dd565b303303610d78576001600160a01b03168015610d6957610d2f81611b18565b15610d5a577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461017a57602036600319011261017a57600435303303610d785780158015610de4575b610cbb576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f548111610daf565b3461017a57610e13610dff366114c7565b610e0e6106d9829493946117e9565b6117e9565b6005548210156104e757815f52600460205260405f20600381015460ff8116610edb5760081c60ff16610ecc57600581019060018060a01b0383165f528160205260ff60405f205416610ebd5760049160018060a01b0384165f5260205260405f20600160ff1982541617905501610e8b815461178e565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b3461017a575f36600319011261017a576020600254604051908152f35b3461017a57602036600319011261017a576004356001600160c01b0381169081900361017a57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e57604051908152602090f35b3461017a57602036600319011261017a576020610fc96001600160a01b03610fb76114dd565b165f52600160205260405f2054151590565b6040519015158152f35b3461017a57604036600319011261017a57610fec6114f3565b6004355f526004602052600560405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461017a57606036600319011261017a576004356001600160401b03811161017a578060040190610120600319823603011261017a57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610d785760209261109d6101046110a793018261175c565b91602435906118cb565b90806110b7575b50604051908152f35b5f80808093816040516110ca8982611509565b52335af150826110ae565b3461017a57602036600319011261017a576110ee6114dd565b303303610d78576001600160a01b031661110781611a09565b15611142575f546002548110610cbb5715610cbb577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b3461017a57604036600319011261017a576024356001600160401b03811161017a5761118f6111866020923690600401611599565b90600435611736565b6040516001600160e01b03199091168152f35b3461017a57608036600319011261017a576111bb6114dd565b506111c46114f3565b506064356001600160401b03811161017a576111e490369060040161157b565b50604051630a85bd0160e11b8152602090f35b602036600319011261017a576004356005548110156104e757805f52600460205260405f2060038101805460ff8116610edb5760ff8160081c16610ecc576004830154600254116113545760019060ff19161790555f600182019160028101915b815481101561132d5761126b81836116a6565b905460039190911b1c6001600160a01b031661128782866116a6565b90549060031b1c61129883866116a6565b5090604051915f908054906112ac826116cf565b916001811690811561131657506001146112e4575b5050915f939181859403925af16112d6611707565b5015610cac57600101611258565b9091505f5260205f205f905b828210611302575050820181836112c1565b6001816020925484880152019101906112f0565b60ff191686525050801515028301905081836112c1565b847fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b3461017a57602036600319011261017a5760043563ffffffff60e01b811680910361017a57602090630271189760e51b81149081156113a8575b506040519015158152f35b6301ffc9a760e01b1490508261139d565b3461017a57602036600319011261017a576004355f526004602052608060405f20600460038201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b3461017a5761142f611427366114c7565b9190916117e9565b6005548210156104e757815f526004602052600360405f20019081549060ff8216610edb5760ff8260081c16610ecc57601082901c6001600160a01b0390811691161415806114bd575b6114ae5761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415611479565b604090600319011261017a576004359060243590565b600435906001600160a01b038216820361017a57565b602435906001600160a01b038216820361017a57565b90601f801991011681019081106001600160401b03821117610aa957604052565b6001600160401b038111610aa957601f01601f191660200190565b9291926115518261152a565b9161155f6040519384611509565b82948184528183011161017a578281602093845f960137010152565b9080601f8301121561017a5781602061159693359101611545565b90565b9181601f8401121561017a578235916001600160401b03831161017a576020838186019501011161017a57565b9181601f8401121561017a578235916001600160401b03831161017a576020808501948460051b01011161017a57565b90602080835192838152019201905f5b8181106116135750505090565b82516001600160a01b0316845260209384019390920191600101611606565b6001600160401b038111610aa95760051b60200190565b9080601f8301121561017a57813561166081611632565b9261166e6040519485611509565b81845260208085019260051b82010192831161017a57602001905b8282106116965750505090565b8135815260209182019101611689565b80548210156116bb575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c921680156116fd575b60208310146116e957565b634e487b7160e01b5f52602260045260245ffd5b91607f16916116de565b3d15611731573d906117188261152a565b916117266040519384611509565b82523d5f602084013e565b606090565b906117419291611838565b611751576001600160e01b031990565b630b135d3f60e11b90565b903590601e198136030182121561017a57018035906001600160401b03821161017a5760200191813603831361017a57565b5f19811461179c5760010190565b634e487b7160e01b5f52601160045260245ffd5b8181106117bb575050565b5f81556001016117b0565b918181106117d357505050565b6117e7925f5260205f2091820191016117b0565b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461181e57503390565b5f908152600360205260409020546001600160a01b031690565b9061187861185c61185361184d368786611545565b85611ade565b90929192611b69565b6001600160a01b03165f90815260016020526040902054151590565b6118c357611596926118bd6118539261185c947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611545565b90611ade565b505050600190565b919290926118dd61184d368484611545565b509490809560048110156119b85715908115916119cc575b50611930575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b61196d939450906118bd917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611545565b509190809260048110156119b8571590811591611999575b50611992575f80806118fb565b5050600190565b6001600160a01b03165f90815260016020526040812054159150611985565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f908152600160205260408120541591506118f5565b6001600160a01b03165f908152600160205260409020541561114257565b5f818152600160205260409020548015611ad8575f19810181811161179c575f545f1981019190821161179c57818103611a8c575b5050505f548015611a78575f1901611a56815f6116a6565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b611ac2611a9c611aac935f6116a6565b90549060031b1c9283925f6116a6565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f8080611a3e565b50505f90565b8151919060418303611b0e57611b079250602082015190606060408401519301515f1a90611bc9565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f14611b64575f54600160401b811015610aa957611b4e611aac8260018594015f555f6116a6565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156119b85780611b7b575050565b60018103611b925763f645eedf60e01b5f5260045ffd5b60028103611bad575063fce698f760e01b5f5260045260245ffd5b600314611bb75750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611c40579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610241575f516001600160a01b03811615611c3657905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220237d07384ce6deda7e36e9002c0dab6ad05015badd28f3ac90b882f0574f2cfa64736f6c634300081c0033"
    },
    "TreasuryFactory": {
      "abi": [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "treasury",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "owners",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            }
          ],
          "name": "TreasuryCreated",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "owners",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "entryPoint",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "createTreasury",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "owners",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "entryPoint",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "getAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "bytecode": "0x60808060405234601557612305908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b9060409392935190611fda8083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b9390919286611fda9161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a06040523461029a57611fda80380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a1604051611c81908161035982396080518181816101cc015281816105a001528181610c2001528181610f500152818161105b01526117ec0152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa89514611416578063013cf08b146113b957806301ffc9a7146113635780630d61b519146111f7578063150b7a02146111a25780631626ba7e14611151578063173825d9146110d557806319822f7c1461101f5780632358d5a814610fd35780632f54bf6e14610f915780633e1b081214610f0757806342cde4e814610eea5780635d35a3d914610dee578063694e80c314610d8b5780637065cb4814610cf757806374420f4c14610be55780639330a22214610659578063a0e67e2b146105cf578063b0d691fe1461058b578063bc197c81146104f6578063c7f758a81461024c578063d087d2881461019b578063da35c6641461017e5763f23a6e610361000e573461017a5760a036600319011261017a5761013e6114dd565b506101476114f3565b506084356001600160401b03811161017a5761016790369060040161157b565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b3461017a575f36600319011261017a576020600554604051908152f35b3461017a575f36600319011261017a57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e575b604051908152602090f35b506020813d602011610239575b8161022860209383611509565b8101031261017a5760209051610203565b3d915061021b565b6040513d5f823e3d90fd5b3461017a57602036600319011261017a576004356005548110156104e7575f52600460205260405f206001810190600281016003820154600483015490604051808560208297549384815201905f5260205f20925f5b8181106104c55750506102b792500385611509565b604051808160208854928381520180985f5260205f20925f5b8181106104ac5750506102e592500382611509565b8354906102f182611632565b916102ff6040519384611509565b808352602083019081965f5260205f20915f905b828210610409575050505060206103356040519760e0895260e08901906115f6565b918783038289015251918281520196905f5b8181106103f357505050848603604086015251808652602086019060208160051b88010194915f905b8282106103b05760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b9091929560208080600193601f198d8203018652818b518051918291828552018484015e5f828201840152601f01601f1916010198019493919091019101610370565b8251895260209889019890920191600101610347565b6040515f8554610418816116cf565b80845290600181169081156104895750600114610452575b506001928261044485946020940382611509565b815201940191019092610313565b5f878152602081209092505b81831061047357505081016020016001610430565b600181602092548386880101520192019161045e565b60ff191660208581019190915291151560051b8401909101915060019050610430565b84548352600194850194869450602090930192016102d0565b84546001600160a01b03168352600194850194899450602090930192016102a2565b63635e873760e01b5f5260045ffd5b3461017a5760a036600319011261017a5761050f6114dd565b506105186114f3565b506044356001600160401b03811161017a57610538903690600401611649565b506064356001600160401b03811161017a57610558903690600401611649565b506084356001600160401b03811161017a5761057890369060040161157b565b5060405163bc197c8160e01b8152602090f35b3461017a575f36600319011261017a576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461017a575f36600319011261017a576040518060205f549182815201905f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106106435761063f8561062b81870382611509565b6040519182916020835260208301906115f6565b0390f35b8254845260209093019260019283019201610614565b3461017a57608036600319011261017a576004356001600160401b03811161017a576106899036906004016115c6565b6024356001600160401b03811161017a576106a89036906004016115c6565b9290916044356001600160401b03811161017a576106ca9036906004016115c6565b6064356106de6106d9826117e9565b6119eb565b8315610baf5786841480610ba6575b15610b6d576106fb906117e9565b94600554946107098661178e565b600555855f52600460205260405f20976001600160401b038611610aa957600160401b8611610aa957610741868a54818c558b6117c6565b5f8981526020812090835b888210610b4857505050600189016001600160401b038211610aa957600160401b8211610aa957610782828254818455836117c6565b83905f5260205f20905f5b838110610b345750505060028901600160401b8511610aa9578054858255808610610abd575b505f9081526020812090865b86821061098e5750505060038901805462010000600160b01b03191660108a901b62010000600160b01b0316179055604051606080825281018790526001600160a01b039890981697956080870192905f905b8082106109645750505085820360208701528082526001600160fb1b03811161017a5760059493941b809260208301370191806020840160208686030160408701525260408301906020808260051b8601010193835f91601e1982360301905b8484106108f45750505060208888600160048d84847f517fcb891178a767bf117b06ea6a469bfc3e466970227b0bce7cab47f6f5b7d48e808f0390a3845f5260058101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90919293949596601f19601f198383030101875287358381121561017a57840190602082359201916001600160401b03811161017a57803603831361017a576020828280600196849695859652848401375f828201840152601f01601f1916010199019701959401929190610872565b90919384359060018060a01b03821680920361017a57602081600193829352019501920190610812565b610998818961175c565b906001600160401b038211610aa9576109b185546116cf565b601f8111610a6e575b505f90601f8311600114610a045792826001949360209386955f926109f9575b50505f19600383901b1c191690841b1786555b019301910190916107bf565b013590505f806109da565b601f19831691865f5260205f20925f5b818110610a565750936020936001969387969383889510610a3d575b505050811b0186556109ed565b01355f19600384901b60f8161c191690555f8080610a30565b91936020600181928787013581550195019201610a14565b610a9990865f5260205f20601f850160051c81019160208610610a9f575b601f0160051c01906117b0565b8e6109ba565b9091508190610a8c565b634e487b7160e01b5f52604160045260245ffd5b815f528560205f2091820191015b818110610ad857506107b3565b80610ae5600192546116cf565b80610af2575b5001610acb565b601f81118314610b0757505f81555b8d610aeb565b610b2390825f5283601f60205f20920160051c820191016117b0565b805f525f6020812081835555610b01565b60019060208335930192818501550161078d565b8035916001600160a01b038316830361017a576020600192019281850155019061074c565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b508187146106ed565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b3461017a57608036600319011261017a57610bfe6114dd565b6044356001600160401b03811161017a57610c1d903690600401611599565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614929091908315610cca57600160025403610cbb575f9283925b81604051928392833781018481520391602435905af1610c80611707565b5015610cac57610c8c57005b6064355f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90303303610cdd575b905f928392610c62565b90610ce7336119eb565b600160025403610cbb5790610cd3565b3461017a57602036600319011261017a57610d106114dd565b303303610d78576001600160a01b03168015610d6957610d2f81611b18565b15610d5a577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461017a57602036600319011261017a57600435303303610d785780158015610de4575b610cbb576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f548111610daf565b3461017a57610e13610dff366114c7565b610e0e6106d9829493946117e9565b6117e9565b6005548210156104e757815f52600460205260405f20600381015460ff8116610edb5760081c60ff16610ecc57600581019060018060a01b0383165f528160205260ff60405f205416610ebd5760049160018060a01b0384165f5260205260405f20600160ff1982541617905501610e8b815461178e565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b3461017a575f36600319011261017a576020600254604051908152f35b3461017a57602036600319011261017a576004356001600160c01b0381169081900361017a57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e57604051908152602090f35b3461017a57602036600319011261017a576020610fc96001600160a01b03610fb76114dd565b165f52600160205260405f2054151590565b6040519015158152f35b3461017a57604036600319011261017a57610fec6114f3565b6004355f526004602052600560405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461017a57606036600319011261017a576004356001600160401b03811161017a578060040190610120600319823603011261017a57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610d785760209261109d6101046110a793018261175c565b91602435906118cb565b90806110b7575b50604051908152f35b5f80808093816040516110ca8982611509565b52335af150826110ae565b3461017a57602036600319011261017a576110ee6114dd565b303303610d78576001600160a01b031661110781611a09565b15611142575f546002548110610cbb5715610cbb577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b3461017a57604036600319011261017a576024356001600160401b03811161017a5761118f6111866020923690600401611599565b90600435611736565b6040516001600160e01b03199091168152f35b3461017a57608036600319011261017a576111bb6114dd565b506111c46114f3565b506064356001600160401b03811161017a576111e490369060040161157b565b50604051630a85bd0160e11b8152602090f35b602036600319011261017a576004356005548110156104e757805f52600460205260405f2060038101805460ff8116610edb5760ff8160081c16610ecc576004830154600254116113545760019060ff19161790555f600182019160028101915b815481101561132d5761126b81836116a6565b905460039190911b1c6001600160a01b031661128782866116a6565b90549060031b1c61129883866116a6565b5090604051915f908054906112ac826116cf565b916001811690811561131657506001146112e4575b5050915f939181859403925af16112d6611707565b5015610cac57600101611258565b9091505f5260205f205f905b828210611302575050820181836112c1565b6001816020925484880152019101906112f0565b60ff191686525050801515028301905081836112c1565b847fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b3461017a57602036600319011261017a5760043563ffffffff60e01b811680910361017a57602090630271189760e51b81149081156113a8575b506040519015158152f35b6301ffc9a760e01b1490508261139d565b3461017a57602036600319011261017a576004355f526004602052608060405f20600460038201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b3461017a5761142f611427366114c7565b9190916117e9565b6005548210156104e757815f526004602052600360405f20019081549060ff8216610edb5760ff8260081c16610ecc57601082901c6001600160a01b0390811691161415806114bd575b6114ae5761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415611479565b604090600319011261017a576004359060243590565b600435906001600160a01b038216820361017a57565b602435906001600160a01b038216820361017a57565b90601f801991011681019081106001600160401b03821117610aa957604052565b6001600160401b038111610aa957601f01601f191660200190565b9291926115518261152a565b9161155f6040519384611509565b82948184528183011161017a578281602093845f960137010152565b9080601f8301121561017a5781602061159693359101611545565b90565b9181601f8401121561017a578235916001600160401b03831161017a576020838186019501011161017a57565b9181601f8401121561017a578235916001600160401b03831161017a576020808501948460051b01011161017a57565b90602080835192838152019201905f5b8181106116135750505090565b82516001600160a01b0316845260209384019390920191600101611606565b6001600160401b038111610aa95760051b60200190565b9080601f8301121561017a57813561166081611632565b9261166e6040519485611509565b81845260208085019260051b82010192831161017a57602001905b8282106116965750505090565b8135815260209182019101611689565b80548210156116bb575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c921680156116fd575b60208310146116e957565b634e487b7160e01b5f52602260045260245ffd5b91607f16916116de565b3d15611731573d906117188261152a565b916117266040519384611509565b82523d5f602084013e565b606090565b906117419291611838565b611751576001600160e01b031990565b630b135d3f60e11b90565b903590601e198136030182121561017a57018035906001600160401b03821161017a5760200191813603831361017a57565b5f19811461179c5760010190565b634e487b7160e01b5f52601160045260245ffd5b8181106117bb575050565b5f81556001016117b0565b918181106117d357505050565b6117e7925f5260205f2091820191016117b0565b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461181e57503390565b5f908152600360205260409020546001600160a01b031690565b9061187861185c61185361184d368786611545565b85611ade565b90929192611b69565b6001600160a01b03165f90815260016020526040902054151590565b6118c357611596926118bd6118539261185c947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611545565b90611ade565b505050600190565b919290926118dd61184d368484611545565b509490809560048110156119b85715908115916119cc575b50611930575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b61196d939450906118bd917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611545565b509190809260048110156119b8571590811591611999575b50611992575f80806118fb565b5050600190565b6001600160a01b03165f90815260016020526040812054159150611985565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f908152600160205260408120541591506118f5565b6001600160a01b03165f908152600160205260409020541561114257565b5f818152600160205260409020548015611ad8575f19810181811161179c575f545f1981019190821161179c57818103611a8c575b5050505f548015611a78575f1901611a56815f6116a6565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b611ac2611a9c611aac935f6116a6565b90549060031b1c9283925f6116a6565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f8080611a3e565b50505f90565b8151919060418303611b0e57611b079250602082015190606060408401519301515f1a90611bc9565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f14611b64575f54600160401b811015610aa957611b4e611aac8260018594015f555f6116a6565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156119b85780611b7b575050565b60018103611b925763f645eedf60e01b5f5260045ffd5b60028103611bad575063fce698f760e01b5f5260045260245ffd5b600314611bb75750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611c40579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610241575f516001600160a01b03811615611c3657905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220237d07384ce6deda7e36e9002c0dab6ad05015badd28f3ac90b882f0574f2cfa64736f6c634300081c0033a2646970667358221220c2c6485c3dbf1ce70f72e9a12f442cc682a0c12e1c2ae237836e7b88d2fa56ed64736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "MockPriceFeed": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    },
    "11155111": {
      "BragToken": "0xdaC504Dfa012B1b46d86243fCa9331572554253c",
      "NFTMarketplace": "0x2aB8cD37a3ad1B4299973e125f4Ce898342F77aD",
      "BragNFT": "0xe2B4dE155b5F527abE3668b40C8EA381Ce14ea4f",
      "ExhibitRegistry": "0x1159e2F6d9c363196E39E58bE7d6F4759Df3b4b9",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x007D77548Ee21B31C60112a1a76Df3b527bB2937"
    },
    "chain-31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "MockPriceFeed": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    },
    "chain-11155111": {
      "BragToken": "0xdaC504Dfa012B1b46d86243fCa9331572554253c",
      "NFTMarketplace": "0x2aB8cD37a3ad1B4299973e125f4Ce898342F77aD",
      "BragNFT": "0xe2B4dE155b5F527abE3668b40C8EA381Ce14ea4f",
      "ExhibitRegistry": "0x1159e2F6d9c363196E39E58bE7d6F4759Df3b4b9",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x007D77548Ee21B31C60112a1a76Df3b527bB2937"
    }
  },
  "externalCollections": [
    {
      "name": "Hypocycloids & Epicycloids",
      "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
      "type": "IERC1155",
      "tokens": [
        "77085256408163406308004197185999916350236004123346139875108148132909762478081",
        "77085256408163406308004197185999916350236004123346139875108148152700971778049",
        "77085256408163406308004197185999916350236004123346139875108148149402436894721",
        "77085256408163406308004197185999916350236004123346139875108148137307808989185"
      ]
    },
    {
      "name": "DESF Scratch Cats",
      "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
      "type": "IERC1155",
      "tokens": [
        "77085256408163406308004197185999916350236004123346139875108147956987902033921",
        "77085256408163406308004197185999916350236004123346139875108148066939064811521",
        "77085256408163406308004197185999916350236004123346139875108148101023925272577",
        "77085256408163406308004197185999916350236004123346139875108147965783995056129"
      ]
    }
  ]
};