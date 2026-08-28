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
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "withdrawERC20",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawETH",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60803461006857601f610b2f38819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006857516001600160a01b03811681036100685761005890610080565b50604051610a05908161010a8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610b0f5f395f51905f52602052604090205460ff16610104576001600160a01b03165f8181525f516020610b0f5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a71461054a5750806315270ace14610478578063227a75581461042a578063248a9ca3146103f85780632f2ff15d146103bb57806336568abe146103775780637402c05a1461031b57806391d14854146102d3578063a217fddf146102b9578063d547741f14610277578063e086e5ec1461024c578063f4f3b200146101a25763f8b7fabf146100b7575f61000f565b6100c036610635565b906100ce8284959414610699565b5f5f5b85811061016f5750340361012a575f5b8481106100ea57005b806101245f8080806101076101026001988d8d6106d9565b6106fd565b610112878b8b6106d9565b35905af161011e610747565b50610786565b016100e1565b60405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e74000000000000006044820152606490fd5b9061017b8285856106d9565b35810180911161018e57906001016100d1565b634e487b7160e01b5f52601160045260245ffd5b34610235576020366003190112610235576004356001600160a01b03811690819003610235576101d06107c8565b6040516370a0823160e01b815230600482015290602082602481845afa908115610241575f91610207575b61001a92503390610957565b90506020823d602011610239575b8161022260209383610711565b810103126102355761001a9151906101fb565b5f80fd5b3d9150610215565b6040513d5f823e3d90fd5b34610235575f366003190112610235576102646107c8565b61001a5f80808047335af161011e610747565b346102355760403660031901126102355761001a600435610296610683565b906102b46102af825f525f602052600160405f20015490565b610817565b6108d7565b34610235575f3660031901126102355760206040515f8152f35b34610235576040366003190112610235576102ec610683565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461023557610329366105ce565b9193906103346107c8565b61033f838614610699565b5f5b85811061034a57005b8061037161035e6101026001948a8a6106d9565b6103698388876106d9565b359086610957565b01610341565b3461023557604036600319011261023557610390610683565b336001600160a01b038216036103ac5761001a906004356108d7565b63334bd91960e11b5f5260045ffd5b346102355760403660031901126102355761001a6004356103da610683565b906103f36102af825f525f602052600160405f20015490565b61084f565b346102355760203660031901126102355760206104226004355f525f602052600160405f20015490565b604051908152f35b346102355761043836610635565b906104449392936107c8565b61044f828514610699565b5f5b84811061045a57005b806104725f8080806101076101026001988d8d6106d9565b01610451565b3461023557610486366105ce565b929091610494848214610699565b5f5b81811061049f57005b6104ad6101028284866106d9565b6104b88287876106d9565b6040516323b872dd60e01b5f908152336004526001600160a01b03909316602452903560445290602090606481808b5af19060015f5114821615610529575b6040525f6060521561050b57600101610496565b635274afe760e01b5f9081526001600160a01b038716600452602490fd5b90600181151661054157873b15153d151616906104f7565b503d5f823e3d90fd5b34610235576020366003190112610235576004359063ffffffff60e01b821680920361023557602091637965db0b60e01b811490811561058c575b5015158152f35b6301ffc9a760e01b14905083610585565b9181601f840112156102355782359167ffffffffffffffff8311610235576020808501948460051b01011161023557565b906060600319830112610235576004356001600160a01b0381168103610235579160243567ffffffffffffffff8111610235578161060e9160040161059d565b929092916044359067ffffffffffffffff8211610235576106319160040161059d565b9091565b60406003198201126102355760043567ffffffffffffffff811161023557816106609160040161059d565b929092916024359067ffffffffffffffff8211610235576106319160040161059d565b602435906001600160a01b038216820361023557565b156106a057565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156106e95760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102355790565b90601f8019910116810190811067ffffffffffffffff82111761073357604052565b634e487b7160e01b5f52604160045260245ffd5b3d15610781573d9067ffffffffffffffff82116107335760405191610776601f8201601f191660200184610711565b82523d5f602084013e565b606090565b1561078d57565b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561080057565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156108395750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff166108d1575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff16156108d1575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f51148216156109b7575b604052156109975750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661054157823b15153d1516169061098c56fea2646970667358221220be58aef69f37d5502d3476096a3cceb3133774a3feea7435a74a04a06e9910b964736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
          "name": "EnforcedPause",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ExpectedPause",
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
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
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
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
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
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "string[]",
              "name": "media",
              "type": "string[]"
            }
          ],
          "name": "batchUpdateOnChainMedia",
          "outputs": [],
          "stateMutability": "nonpayable",
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
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "glowExpiry",
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
          "inputs": [],
          "name": "manualEthPrice",
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
          "name": "pause",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "paused",
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
          "inputs": [],
          "name": "priceFeedStaleThreshold",
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
              "name": "_manualEthPrice",
              "type": "uint256"
            }
          ],
          "name": "setManualEthPrice",
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
              "internalType": "uint256",
              "name": "_threshold",
              "type": "uint256"
            }
          ],
          "name": "setPriceFeedStaleThreshold",
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
              "name": "ethAmount",
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
          "inputs": [],
          "name": "unpause",
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
          "name": "updateMedia",
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
              "internalType": "string",
              "name": "media",
              "type": "string"
            }
          ],
          "name": "updateOnChainMedia",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "withdrawERC20",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawETH",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60806040523461042157615d1a6080813803918261001c81610425565b938492833981010312610421576100328161044a565b9061003f6020820161044a565b9161005160606040840151930161044a565b9261005c6040610425565b6007815266109c9859d3919560ca1b602082015261007a6040610425565b600781526610949051d3919560ca1b6020820152815190916001600160401b038211610328575f5490600182811c92168015610417575b602083101461030a5781601f8493116103aa575b50602090601f8311600114610347575f9261033c575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116103285760015490600182811c9216801561031e575b602083101461030a5781601f84931161029c575b50602090601f8311600114610236575f9261022b575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005562015f906011556001600160a01b03169081156101e6576101959061045e565b508060018060a01b0319600c541617600c5560018060a01b0319600d541617600d55600e5560018060a01b031660018060a01b031960105416176010556064600a5560405161581290816104e88239f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b015190505f8061013c565b60015f9081528281209350601f198516905b818110610284575090846001959493921061026c575b505050811b01600155610151565b01515f1960f88460031b161c191690555f808061025e565b92936020600181928786015181550195019301610248565b60015f529091507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c81019160208510610300575b90601f859493920160051c01905b8181106102f25750610126565b5f81558493506001016102e5565b90915081906102d7565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610112565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100db565b5f8080528281209350601f198516905b818110610392575090846001959493921061037a575b505050811b015f556100ef565b01515f1960f88460031b161c191690555f808061036d565b92936020600181928786015181550195019301610357565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c8101916020851061040d575b90601f859493920160051c01905b8181106103ff57506100c5565b5f81558493506001016103f2565b90915081906103e4565b91607f16916100b1565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761032857604052565b51906001600160a01b038216820361042157565b6001600160a01b0381165f9081525f516020615cfa5f395f51905f52602052604090205460ff166104e2576001600160a01b03165f8181525f516020615cfa5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe60a0806040526004361015610448575b50361561001a575f80fd5b610022613054565b61002a61308c565b5f604080519061003a8183612b70565b600f82526e2234b932b1ba103237b730ba34b7b760891b60208301526020908051906100668383612b70565b5f8252600e54341061040c5760095491600a548310156103d357610089836130a7565b60095561009534613983565b9082516100a181612b55565b3381528581018381523485830190815242606084019081525f6080850181815260a086018c81528a835260128c5291899020955186546001600160a01b0319166001600160a01b039190911617865593516001860155915160028501555160038401559051909160048210156103bf5761012060059260048301612f7f565b0190518051906001600160401b0382116103ab57610148826101428554612b1d565b85612f18565b8790601f83116001146103485761017692915f918361033d575b50508160011b915f199060031b1c19161790565b90555b62278d0042018042116102ea57845f5260138652835f2055805161032d575b5081516101a58582612b70565b5f8152331561031a576001600160a01b036101c0853361379d565b16610307576101d190843333613c28565b600f546001600160a01b0316801515806102fe575b610257575b5061021e8680805f5160206157bd5f395f51905f5298993460018060a01b03600c54165af1610218612e87565b50612eb6565b815193348552840152820152608060608201528061024133946080830190612a41565b0390a260015f51602061579d5f395f51905f5255005b662386f26fc10000820290828204662386f26fc1000014831517156102ea57803b156102e65783516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af19687156102dc575f5160206157bd5f395f51905f5296976102c8575b9695506101eb565b505f6102d391612b70565b61021e5f6102c0565b83513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52601160045260245ffd5b508115156101e6565b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b6103379084613b13565b5f610198565b015190505f80610162565b90601f19831691845f52895f20925f5b8b82821061039557505090846001959493921061037d575b505050811b019055610179565b01515f1960f88460031b161c191690555f8080610370565b6001859682939686015181550195019301610358565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b815162461bcd60e51b815260048101859052601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b5162461bcd60e51b8152600481018390526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5f905f3560e01c90816301ffc9a7146129705750806302d95a521461294857806306fdde0314612881578063081812fc14612845578063095ea7b31461275b5780630f133e661461273a5780630fd973ce146126d65780631653441c1461265c57806318160ddd1461263f57806323b872dd14612628578063248a9ca3146125f55780632a55205a146125ab5780632eb9313e146125685780632f2ff15d1461252a57806336568abe146124e65780633f4ba83a1461248057806341e42f30146123ea57806342842e0e146123b957806349c657db1461239d5780634c00de821461237557806350017f3e1461219e5780635b137f7b14611fa55780635c975abb14611f8257806361d027b314611f595780636352211e14611f2857806364cb7e9c14611efd57806366a83bcd14611d0a5780636d12c7f414611be15780636f8b44b014611bbe57806370a0823114611b6b578063724e78da14611b2b578063741bef1a14611b0257806375794a3c14611ae457806383943dc814611abb5780638456cb5914611a60578063916221aa14611a1657806391a6262f146119e757806391d148541461199d57806395d89b41146118ba5780639604d478146116ab57806396d8f4f31461168d578063a217fddf14611671578063a22cb465146115b9578063a6719b3a14611539578063ab2a6f7014611498578063b88d4fde14611425578063bfe71a3f146113fb578063c6317247146113d8578063c87b56dd14610a99578063d3933c1c146109f5578063d547741f146109ad578063d5abeb011461098f578063e086e5ec14610922578063e2d3213614610904578063e985e9c5146108ac578063f0f4426014610820578063f12ba13e146107fd578063f4f3b200146106f95763f5cf513b0361000f57346106f657806003193601126106f6576020600b54604051908152f35b80fd5b50346106f65760203660031901126106f657610713612a65565b61071b612fcb565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156107f25783916107bc575b506040519063a9059cbb60e01b84523360045260245260208360448180865af190600184511482161561079c575b501561078a575080f35b635274afe760e01b8252600452602490fd5b60018215166107b45750813b15153d1516165f610780565b3d84823e3d90fd5b90506020813d6020116107ea575b816107d760209383612b70565b810103126107e657515f610752565b8280fd5b3d91506107ca565b6040513d85823e3d90fd5b50346106f65760203660031901126106f657610817612fcb565b60043560115580f35b50346106f65760203660031901126106f65761083a612a65565b610842612fcb565b6001600160a01b03168015610867576001600160601b0360a01b600c541617600c5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b50346106f65760403660031901126106f65760406108c8612a65565b916108d1612a7b565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346106f657806003193601126106f6576020601154604051908152f35b50346106f657806003193601126106f65761093b612fcb565b8080808047335af161094b612e87565b50156109545780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b50346106f657806003193601126106f6576020600a54604051908152f35b50346106f65760403660031901126106f6576109f16004356109cd612a7b565b906109ec6109e7825f526007602052600160405f20015490565b61301a565b6138e8565b5080f35b5060603660031901126106f6576004356001600160401b038111610a9557610a21903690600401612aa7565b602435916001600160401b038311610a9157610a76610a6e91610a4b610a7d953690600401612aa7565b939091610a56612b0e565b95610a5f613054565b610a6761308c565b3691612c7c565b923691612c7c565b9033613412565b60015f51602061579d5f395f51905f525580f35b8380fd5b5080fd5b50346106f65760203660031901126106f657610ab6600435612f97565b5060043581526012602052604081209060405191610ad383612b55565b60018060a01b038154168352600181015460208401908152600282015493604081019485526003830154606082015260ff60048401541692608082019360048110156113c4578452610b2790600501612b91565b9160a08201928352610b3a600435612cb2565b91606060043587526014602052610b5360408820612b91565b908151156113b1575b81511561138357610b6c826143d7565b1561137b5750928451865190600482101561136757603a610b9d610b98602094610be894600435613ec6565b61562e565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018b838201520301601f198101835282612b70565b925b60209889604051610bfb8282612b70565b8a815296805161130a575b5050610c128751614e36565b93516001600160a01b03169182610c29602a612c61565b93610c376040519586612b70565b602a8552610c45602a612c61565b601f190136868f01378451156112f65760308d8601538451600110156112f6576078602186015360295b600181116112a057506112895750918a9291610d2a60018594518d8680610cec6305f5e10082620f424082880604600a81105f14611279576021610cb5610ce49261511c565b604051600360fc1b858201528151909485928291018484015e810189838201520301601f198101835282612b70565b955b0461511c565b9360405199858b9651918291018488015e850190601760f91b83830152805192839101602183015e010190838201520301601f198101855284612b70565b5198610d47655af3107a4000670de0b6b3a76400008c060461511c565b8b600482511015610d8e57604051600360fc1b8188015282519092610d8992602192859281908b018486015e820190838201520301601f198101835282612b70565b610d47565b506001610deb9186809e9d610dad670de0b6b3a764000083920461511c565b9260405199848b9551918291018487015e840190601760f91b83830152805192839101602183015e01018d838201520301601f198101865285612b70565b5160048110156112655760128b99600d8b809b60368f9a6112119d603385603d9f8f6111c59f90839f610b989f60029f600291876110cf97602c82809e602f82809c602e826110729d8f82849d60279f92610e47604494615067565b9a15611241575081604051610e5d604082612b70565b600381526259657360e81b828201529d5b6040516080527f7b2274726169745f74797065223a20224d657373616765222c202276616c756582608051015263111d101160e11b6040608051015280519182910185608051015e608051019062089f4b60ea1b848301527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478301526a10113b30b63ab2911d101160a91b6067830152805192839101607283015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022446f6e6174696f6e2056616c7565222c60318301526b08089d985b1d59488e88088960a21b6051830152805192839101605d83015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022446f6e6174696f6e20455448222c20226032830152683b30b63ab2911d101160b91b6052830152805192839101605b83015e0101906608115512089f4b60ca1b848301527f7b2274726169745f74797065223a202254617820537461747573222c202276618f83015266363ab2911d101160c91b6053830152805192839101605a83015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565603183015263111d101160e11b6051830152805192839101605583015e010161227d60f01b82820152608051900301601d1981016080515201608051612b70565b61107d60043561511c565b8c5151909c9015611229576110c99161109860229251614e36565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f198101835282612b70565b93614e36565b926040519d8e9a727b226e616d65223a2022427261674e4654202360681b828d0152805191829101858d015e8a01907f222c20226465736372697074696f6e223a2022427261672e436861726974792084830152754475616c2d537461746520436f6c6c65637469626c6560501b6053830152805192839101606983015e0101906c1116101134b6b0b3b2911d101160991b84830152805192839101604383015e0101908382018b8152815193849201905e010171222c202261747472696275746573223a205b60701b81526080515190818c608051018583015e01615d7d60f01b838201520301601d19810184520182612b70565b906040519586927f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000828501528051918291018585015e820190838201520301601f198101845283612b70565b611225604051928284938452830190612a41565b0390f35b5060405191506112398483612b70565b815293614e36565b5081604051611251604082612b70565b60028152614e6f60f01b828201529d610e6e565b634e487b7160e01b8a52602160045260248afd5b611283915061511c565b95610ce6565b63e22e27eb60e01b8b52600452601460245260448afd5b90600f811660108110156112e2576112dd91906f181899199a1a9b1b9c1cb0b131b232b360811b901a6112d384896143c6565b5360041c91615284565b610c6f565b634e487b7160e01b8e52603260045260248efd5b634e487b7160e01b8c52603260045260248cfd5b61135f9192975061131c603591614e36565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018c838201520301601f198101835282612b70565b94895f610c06565b634e487b7160e01b89526021600452602489fd5b939092610bea565b9390508451865190600482101561136757603a610b9d610b986020946113ab94600435613ec6565b92610bea565b90506113be600435613e13565b90610b5c565b634e487b7160e01b86526021600452602486fd5b50346106f65760203660031901126106f6576113f2612fcb565b600435600e5580f35b50346106f65760203660031901126106f65760406020916004358152601383522054604051908152f35b50346106f65760803660031901126106f65761143f612a65565b611447612a7b565b90604435606435926001600160401b03841161149457366023850112156114945761147f611491943690602481600401359101612c7c565b9261148b838383612cdf565b33613d36565b80f35b8480fd5b50346106f65760203660031901126106f65760043581526012602052604081209060018060a01b038254169160018101549160028201546003830154906114e9600560ff6004870154169501612b91565b9460405196875260208701526040860152606085015260048210156115255750829161122591608084015260c060a084015260c0830190612a41565b634e487b7160e01b81526021600452602490fd5b5060803660031901126106f65761154e612a65565b6024356001600160401b0381116107e65761156d903690600401612aa7565b916044356001600160401b0381116114945761158d903690600401612aa7565b90926064359384151585036115b557610a6e6115af92610a7d97610a5f613054565b91613412565b8680fd5b50346106f65760403660031901126106f6576115d3612a65565b602435908115158092036107e657331561165d576001600160a01b031690811561164957338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b50346106f657806003193601126106f657602090604051908152f35b50346106f657806003193601126106f6576020600e54604051908152f35b50346106f65760203660031901126106f6576004356116c8613054565b6116d061308c565b6116d981612f97565b50600f546001600160a01b0316801561188057600c546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269d3c21bcecceda10000006044820152906020908290606490829087905af19081156107f2578391611845575b501561180957808252601360205260408220544211156117d35762278d0042018042116117bf57818352601360205260408320555b6040519069d3c21bcecceda100000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f51602061579d5f395f51905f525580f35b634e487b7160e01b83526011600452602483fd5b80825260136020526040822080549062278d0082018092116117f55755611774565b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d602011611878575b8161186060209383612b70565b810103126107e6575180151581036107e6575f61173f565b3d9150611853565b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b50346106f657806003193601126106f6576040519080600154906118dd82612b1d565b80855291600181169081156119765750600114611919575b6112258461190581860382612b70565b604051918291602083526020830190612a41565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b80821061195c57509091508101602001611905826118f5565b919260018160209254838588010152019101909291611943565b60ff191660208087019190915292151560051b8501909201925061190591508390506118f5565b50346106f65760403660031901126106f65760406119b9612a7b565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346106f65760603660031901126106f657611a01612a7b565b50611a0a612a91565b50602060405160018152f35b50346106f65760403660031901126106f65760043560243560048110156107e65761149191611a43612fcb565b611a4c81612f97565b508352601260205260046040842001612f7f565b50346106f657806003193601126106f657611a79612fcb565b611a8161308c565b600160ff1960085416176008557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b50346106f657806003193601126106f657600f546040516001600160a01b039091168152602090f35b50346106f657806003193601126106f6576020600954604051908152f35b50346106f657806003193601126106f6576010546040516001600160a01b039091168152602090f35b50346106f65760203660031901126106f657611b45612a65565b611b4d612fcb565b60018060a01b03166001600160601b0360a01b601054161760105580f35b50346106f65760203660031901126106f6576001600160a01b03611b8d612a65565b168015611baa578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b50346106f65760203660031901126106f657611bd8612fcb565b600435600a5580f35b50346106f65760403660031901126106f657600435906024356001600160401b038111610a9557611c16903690600401612aa7565b9092611c20612fcb565b611c2981612f97565b508252601460205260408220906001600160401b038111611cf657611c5881611c528454612b1d565b84612f18565b82601f8211600114611c965781908495611c86949592611c8b5750508160011b915f199060031b1c19161790565b905580f35b013590505f80610162565b601f198216948385526020852091855b878110611cde575083600195969710611cc5575b505050811b01905580f35b01355f19600384901b60f8161c191690555f8080611cba565b90926020600181928686013581550194019101611ca6565b634e487b7160e01b83526041600452602483fd5b50346106f65760403660031901126106f6576004356001600160401b038111610a9557611d3b903690600401612c31565b6024356001600160401b038111610a9157611d5a903690600401612c31565b611d65939193612fcb565b808303611ec4579236819003601e190190855b848110611d83578680f35b611d97611d91828787612f5b565b35612f97565b5085811015611eb0578060051b82013583811215611eac57820180356001600160401b038111611ea8578036036020830113611ea857611dd8838888612f5b565b35895260146020526040892091611df3826101428554612b1d565b8990601f8311600114611e3c579180611e259260019695948d92611e2e5750508160011b915f199060031b1c19161790565b90555b01611d78565b602092500101355f80610162565b838b5260208b2091601f1984168c5b818110611e8e575091600196959492918388959310611e72575b505050811b019055611e28565b01602001355f19600384901b60f8161c191690555f8080611e65565b919360206001819282888801013581550195019201611e4b565b8880fd5b8780fd5b634e487b7160e01b87526032600452602487fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b50346106f65760203660031901126106f6576119056040611225926004358152601460205220612b91565b50346106f65760203660031901126106f6576020611f47600435612f97565b6040516001600160a01b039091168152f35b50346106f657806003193601126106f657600c546040516001600160a01b039091168152602090f35b50346106f657806003193601126106f657602060ff600854166040519015158152f35b50346106f65760603660031901126106f657600435906024356001600160401b038111610a9557611fda903690600401612aa7565b611fe5939193612b0e565b611fed613054565b611ff561308c565b611ffe83612f97565b5061200883612f97565b336001600160a01b0390911603612169571561210d57818352601460205260408320906001600160401b0381116120f95761204781611c528454612b1d565b83601f8211600114612092579080612078928697610a7d9792611c8b5750508160011b915f199060031b1c19161790565b90555b6040519061208a602083612b70565b838252613b13565b8285526020852090601f198316865b8181106120e1575096839291600194610a7d9899106120c8575b505050811b01905561207b565b01355f19600384901b60f8161c191690555f80806120bb565b9192602060018192868c0135815501940192016120a1565b634e487b7160e01b84526041600452602484fd5b829361213f918361214595526014602052856040812061212d8154612b1d565b601f811161214a575b50553691612c7c565b90613b13565b610a7d565b8183526020832061216391601f0160051c810190612f02565b5f612136565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b5060203660031901126102e6576004356121b6613054565b6121be61308c565b6121c781612f97565b506121d134613983565b6305f5e100811061233057815f52601360205260405f205442115f1461230e5762278d0042018042116102ea57825f52601360205260405f20555b600f546001600160a01b031680151580612305575b612286575b5050612245828080803460018060a01b03600c54165af1610218612e87565b604051903482527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f51602061579d5f395f51905f525580f35b662386f26fc10000820291808304662386f26fc1000014901517156102ea57803b156102e6576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af180156122fa576122e5575b80612226565b6122f29192505f90612b70565b5f905f6122df565b6040513d5f823e3d90fd5b50811515612221565b815f52601360205260405f2080549062278d0082018092116102ea575561220c565b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b346102e6575f3660031901126102e657600d546040516001600160a01b039091168152602090f35b346102e6575f3660031901126102e65760206040516103208152f35b346102e6576123e86123ca36612ad4565b90604051926123da602085612b70565b5f845261148b838383612cdf565b005b346102e65760203660031901126102e657612403612a65565b61240b612fcb565b6001600160a01b03168015612431576001600160601b0360a01b600d541617600d555f80f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b346102e6575f3660031901126102e657612498612fcb565b60085460ff8116156124d75760ff19166008557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b638dfc202b60e01b5f5260045ffd5b346102e65760403660031901126102e6576124ff612a7b565b336001600160a01b0382160361251b576123e8906004356138e8565b63334bd91960e11b5f5260045ffd5b346102e65760403660031901126102e6576123e8600435612549612a7b565b906125636109e7825f526007602052600160405f20015490565b61385c565b346102e65760203660031901126102e657612581612a65565b612589612fcb565b600f80546001600160a01b0319166001600160a01b0392909216919091179055005b346102e65760403660031901126102e65760243561032081029080820461032014901517156102ea57600d54604080516001600160a01b0390921682526127109092046020820152f35b346102e65760203660031901126102e65760206126206004355f526007602052600160405f20015490565b604051908152f35b346102e6576123e861263936612ad4565b91612cdf565b346102e6575f3660031901126102e6576020600954604051908152f35b60403660031901126102e6576004356001600160401b0381116102e657612687903690600401612aa7565b906024356001600160401b0381116102e6576126c392610a6e6126b16126bc933690600401612aa7565b949092610a5f613054565b90336130b5565b60015f51602061579d5f395f51905f5255005b60603660031901126102e6576126ea612a65565b6024356001600160401b0381116102e657612709903690600401612aa7565b91906044356001600160401b0381116102e6576126c393610a6e6126b1612734933690600401612aa7565b916130b5565b346102e65760203660031901126102e657612753612fcb565b600435600b55005b346102e65760403660031901126102e657612774612a65565b60243561278081612f97565b33151580612832575b80612805575b6127f25781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff161561278f565b506001600160a01b038116331415612789565b346102e65760203660031901126102e65760043561286281612f97565b505f526004602052602060018060a01b0360405f205416604051908152f35b346102e6575f3660031901126102e6576040515f5f546128a081612b1d565b808452906001811690811561292457506001146128c8575b6112258361190581850382612b70565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b80821061290a575090915081016020016119056128b8565b9192600181602092548385880101520191019092916128f2565b60ff191660208086019190915291151560051b8401909101915061190590506128b8565b346102e65760203660031901126102e6576020612966600435612cb2565b6040519015158152f35b346102e65760203660031901126102e6576004359063ffffffff60e01b82168092036102e65760209163152a902d60e11b8114908115612a30575b81156129b9575b5015158152f35b637965db0b60e01b8114915081156129d3575b50836129b2565b632483248360e11b8114915081156129ed575b50836129cc565b6380ac58cd60e01b811491508115612a1f575b8115612a0e575b50836129e6565b6301ffc9a760e01b14905083612a07565b635b5e139f60e01b81149150612a00565b6391a6262f60e01b811491506129ab565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036102e657565b602435906001600160a01b03821682036102e657565b604435906001600160a01b03821682036102e657565b9181601f840112156102e6578235916001600160401b0383116102e657602083818601950101116102e657565b60609060031901126102e6576004356001600160a01b03811681036102e657906024356001600160a01b03811681036102e6579060443590565b6044359081151582036102e657565b90600182811c92168015612b4b575b6020831014612b3757565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612b2c565b60c081019081106001600160401b038211176103ab57604052565b90601f801991011681019081106001600160401b038211176103ab57604052565b9060405191825f825492612ba484612b1d565b8084529360018116908115612c0f5750600114612bcb575b50612bc992500383612b70565b565b90505f9291925260205f20905f915b818310612bf3575050906020612bc9928201015f612bbc565b6020919350806001915483858901015201910190918492612bda565b905060209250612bc994915060ff191682840152151560051b8201015f612bbc565b9181601f840112156102e6578235916001600160401b0383116102e6576020808501948460051b0101116102e657565b6001600160401b0381116103ab57601f01601f191660200190565b929192612c8882612c61565b91612c966040519384612b70565b8294818452818301116102e6578281602093845f960137010152565b805f52601360205260405f205415159081612ccb575090565b90505f52601360205260405f205442111590565b6001600160a01b039091169190821561031a575f828152600260205260409020546001600160a01b031692829033151580612dd2575b5084612d9f575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303612d8757505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612d1c565b90915080612e16575b15612de85782905f612d15565b8284612e0057637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015612e45575b80612ddb57505f838152600460205260409020546001600160a01b03163314612ddb565b505f84815260056020908152604080832033845290915290205460ff16612e21565b818102929181159184041417156102ea57565b919082018092116102ea57565b3d15612eb1573d90612e9882612c61565b91612ea66040519384612b70565b82523d5f602084013e565b606090565b15612ebd57565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b818110612f0d575050565b5f8155600101612f02565b9190601f8111612f2757505050565b612bc9925f5260205f20906020601f840160051c83019310612f51575b601f0160051c0190612f02565b9091508190612f44565b9190811015612f6b5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b9060048110156103bf5760ff80198354169116179055565b5f818152600260205260409020546001600160a01b0316908115612fb9575090565b637e27328960e01b5f5260045260245ffd5b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561300357565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff161561303e5750565b63e2517d3f60e01b5f523360045260245260445ffd5b60025f51602061579d5f395f51905f52541461307d5760025f51602061579d5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b60ff6008541661309857565b63d93c066560e01b5f5260045ffd5b5f1981146102ea5760010190565b9091600e5434106133d45760095491600a5483101561339a576130d7836130a7565b6009556130e334613983565b916040516130f081612b55565b338152602080820185815234604080850191825242606086019081525f6080870181815260a088018d81528c83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156103bf5761317360059260048301612f7f565b0190518051906001600160401b0382116103ab57613195826101428554612b1d565b602090601f8311600114613337576131c392915f918361033d5750508160011b915f199060031b1c19161790565b90555b62278d0042018042116102ea57845f52601360205260405f20558051613327575b506040516131f6602082612b70565b5f81526001600160a01b0382161561031a576001600160a01b0361321a858461379d565b16610307578361322a9233613c28565b600f546001600160a01b0316918215158061331e575b61329f575b5f5160206157bd5f395f51905f5292506132725f8080803460018060a01b03600c54165af1610218612e87565b6040519134835260208301526040820152608060608201528061329a33946080830190612a41565b0390a2565b662386f26fc10000820292828404662386f26fc1000014831517156102ea57803b156102e6576040516340c10f1960e01b815233600482015260248101949094525f908490604490829084905af19283156122fa575f5160206157bd5f395f51905f529361330e575b50613245565b5f61331891612b70565b5f613308565b50811515613240565b6133319084613b13565b5f6131e7565b90601f19831691845f52815f20925f5b818110613382575090846001959493921061336a575b505050811b0190556131c6565b01515f1960f88460031b161c191690555f808061335d565b92936020600181928786015181550195019301613347565b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b91929092600e54925f9334106133d45760095491600a5483101561339a57613439836130a7565b60095561344534613983565b9360405161345281612b55565b338152602080820187815234604080850191825242606086019081525f6080870181815260a088018f81528c83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156103bf576134d560059260048301612f7f565b0190518051906001600160401b0382116103ab576134f7826101428554612b1d565b602090601f831160011461373a5761352592915f918361033d5750508160011b915f199060031b1c19161790565b90555b62278d0042018042116102ea57845f52601360205260405f20555f1461371d57825f52601460205260405f20908051906001600160401b0382116103ab57613574826101428554612b1d565b602090601f83116001146136ba576135a292915f918361033d5750508160011b915f199060031b1c19161790565b90555b6040516135b3602082612b70565b5f81526001600160a01b0382161561031a576001600160a01b036135d7848461379d565b1661030757826135e79233613c28565b600f546001600160a01b0316801515806136b1575b61362d575b506132728380805f5160206157bd5f395f51905f52963460018060a01b03600c54165af1610218612e87565b662386f26fc10000830290838204662386f26fc1000014841517156102ea57803b156102e6576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af19384156122fa575f5160206157bd5f395f51905f529461369d575b9350613601565b505f6136a891612b70565b6132725f613696565b508215156135fc565b90601f19831691845f52815f20925f5b81811061370557509084600195949392106136ed575b505050811b0190556135a5565b01515f1960f88460031b161c191690555f80806136e0565b929360206001819287860151815501950193016136ca565b805161372a575b506135a5565b6137349083613b13565b5f613724565b90601f19831691845f52815f20925f5b818110613785575090846001959493921061376d575b505050811b019055613528565b01515f1960f88460031b161c191690555f8080613760565b9293602060018192878601518155019501930161374a565b5f828152600260205260409020546001600160a01b0316919082613829575b6001600160a01b031680613811575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f20600181540190556137cb565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f1981540190556137bc565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff166138e2575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16156138e2575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b519069ffffffffffffffffffff821682036102e657565b6010545f919082906001600160a01b0316806139d0575b5015806139c5575b6139aa575090565b670de0b6b3a764000091506139c190600b54612e67565b0490565b50600b5415156139a2565b9192905f925f600460a05f9360405192838092633fabe5a360e21b82525afa90815f915f93613abd575b50613aaf57505081907f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a15b81613aa5575b81613a8e575b5015613a5b57505050613a5082670de0b6b3a764000092612e67565b049060015b5f61399a565b909193925015613a55577f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a1613a55565b613a9c915060115490612e7a565b4211155f613a34565b5f86139150613a2e565b955060019250829150613a28565b9150915060a0813d60a011613b0b575b81613ada60a09383612b70565b810103126102e657613aeb8161396c565b506020810151613b0260806060840151930161396c565b5090915f6139fa565b3d9150613acd565b919091805f52600660205260405f2083516001600160401b0381116103ab57613b4081611c528454612b1d565b6020601f8211600114613ba057816020949392613b94927ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce797985f9261033d5750508160011b915f199060031b1c19161790565b90555b604051908152a1565b601f19821695835f52815f20965f5b818110613c10575096600192849260209796957ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7999a10613bf8575b505050811b019055613b97565b01515f1960f88460031b161c191690555f8080613beb565b83830151895560019098019760209384019301613baf565b9291813b613c37575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f60248201526044810191909152608060648201529216919060209082908190613c82906084830190612a41565b03815f865af15f9181613cf1575b50613cbe5750613c9e612e87565b80519081613cb95782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b01613cdf57505f808080613c31565b633250574960e11b5f5260045260245ffd5b9091506020813d602011613d2e575b81613d0d60209383612b70565b810103126102e657516001600160e01b0319811681036102e657905f613c90565b3d9150613d00565b823b613d44575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190613d90906084830190612a41565b03815f865af15f9181613dce575b50613dac5750613c9e612e87565b6001600160e01b03191663757a42ff60e11b01613cdf57505f80808080613d3d565b9091506020813d602011613e0b575b81613dea60209383612b70565b810103126102e657516001600160e01b0319811681036102e657905f613d9e565b3d9150613ddd565b613e1c81612f97565b50602090604051613e2d8382612b70565b5f8152815f5260068352613e4360405f20612b91565b815115613ebf5780849151613e8157505050613e5e90612f97565b505f604051613e6d8382612b70565b52613e7b6040519182612b70565b5f815290565b613ebc935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612b70565b90565b9250505090565b919091613edb613ed582612cb2565b93615290565b80511561437857613eec915061533a565b915b602092604051613efe8582612b70565b5f81529260405190613f11608083612b70565b60498252858201937f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7385527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040840152806868743a20626f6c643b60b81b606085015261426f575b1561424c57604051613f8d604082612b70565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000087820152905b60408051613fc68282612b70565b60078152662336333636663160c81b898201529360048310156103bf57889687958694600181036141eb5750508251613fff8482612b70565b60078152662332326335356560c81b85820152915b83517f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32308c8201527f30302f73766722207072657365727665417370656374526174696f3d22784d69818601527f6e594d696e206d656574222076696577426f783d223020302033353020333530606082015261111f60f11b60808201528a51909b8c9b82910160828d015e8a0190608282016e01e39ba3cb6329f173130b9b2903d9608d1b9052518092609183015e0160820191600f830169103e9e17b9ba3cb6329f60b11b9052601983017f3c726563742077696474683d223130302522206865696768743d223130302522905266103334b6361e9160c91b60398401528151938492019083015e01600f0190631110179f60e11b6031830152805192839101603583015e0160310190600482017f3c7465787420783d223530252220793d223530252220636c6173733d226261739052602482017f652220646f6d696e616e742d626173656c696e653d226d6964646c65222074659052723c3a16b0b731b437b91e9136b4b2323632911f60691b6044830152805192839101605783015e0160040160538101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b905203605301600e1981018252601101613ebc9082612b70565b6002810361421a57505082516142018482612b70565b6007815266046cac2c46660760cb1b8582015291614014565b9092906002190161401457915082516142338482612b70565b600781526608d9598d0d0d0d60ca1b8582015291614014565b60405161425a604082612b70565b60038152621e339f60e91b8782015290613fb8565b94506101006142816040519182612b70565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522878201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e082015294613f7a565b506143c0602961438960209361511c565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612b70565b91613eee565b908151811015612f6b570160200190565b805190600482106138e257600b8210156149b2575b60031982018281116102ea57601760f91b6001600160f81b031961441083856143c6565b511614614636575b600583101580614607575b61442f575b5050505f90565b61444e906001600160f81b03199061444790846143c6565b511661575d565b9060021983018381116102ea57614473906001600160f81b03199061444790846143c6565b9260011981018181116102ea57614498906001600160f81b03199061444790856143c6565b915f1982019182116102ea576144476144b69260ff60f81b926143c6565b916001600160f81b031916607760f81b811480806145f0575b806145d9575b806145c2575b6145b857806145a1575b8061458a575b80614573575b61456a57606760f81b149283614552575b508261453a575b5081614522575b5061451d575f8080614428565b600190565b6001600160f81b031916603360f91b1490505f614510565b6001600160f81b031916601d60fa1b1491505f614509565b6001600160f81b031916601b60fa1b1492505f614502565b50505050600190565b506001600160f81b03198316600760fc1b146144f1565b506001600160f81b03198216603160f91b146144eb565b506001600160f81b03198416606560f81b146144e5565b5050505050600190565b506001600160f81b03198416606d60f81b146144db565b506001600160f81b03198316603160f91b146144d5565b506001600160f81b03198516606560f81b146144cf565b5060041983018381116102ea57601760f91b906001600160f81b03199061462e90856143c6565b511614614423565b60021983018381116102ea5761465a906001600160f81b03199061444790856143c6565b60011984018481116102ea5761467e906001600160f81b03199061444790866143c6565b905f1985018581116102ea576146a2906001600160f81b03199061444790876143c6565b906001600160f81b031916606d60f81b8114808061499b575b80614984575b61482957607760f81b82148061496d575b80614956575b61482957606f60f81b8214808061493f575b80614928575b614863578180614911575b806148fa575b61486357606160f81b8314806148e3575b806148cc575b6148635781806148b5575b8061489e575b614863578180614887575b80614870575b614863578061484c575b80614835575b6148295780614812575b806147fb575b6147c257606760f81b149182806147e4575b806147cd575b6147c257826147aa575b5081614792575b5015614418575b505050600190565b6001600160f81b031916603160f91b1490505f614783565b6001600160f81b031916601b60fa1b1491505f61477c565b505050505050600190565b506001600160f81b03198216603360f91b14614772565b506001600160f81b03198116606960f81b1461476c565b506001600160f81b03198216603b60f91b1461475a565b506001600160f81b03198316600d60fa1b14614754565b50505050505050600190565b506001600160f81b03198316603b60f91b1461474a565b506001600160f81b03198416606760f81b14614744565b5050505050505050600190565b506001600160f81b03198416603b60f91b1461473a565b506001600160f81b03198516606f60f81b14614734565b506001600160f81b03198416600d60fa1b14614729565b506001600160f81b03198516600760fc1b14614723565b506001600160f81b03198416606360f81b14614718565b506001600160f81b03198516606160f81b14614712565b506001600160f81b03198416606160f81b14614701565b506001600160f81b03198516600d60fa1b146146fb565b506001600160f81b03198416606760f81b146146f0565b506001600160f81b03198516606760f81b146146ea565b506001600160f81b03198316603b60f91b146146d8565b506001600160f81b03198416606160f81b146146d2565b506001600160f81b03198316603360f81b146146c1565b506001600160f81b03198416600760fc1b146146bb565b8115612f6b5760208101516001600160f81b031916601960fa1b1480614ddf575b80614dba575b80614d95575b80614d70575b156143ec57805160051015612f6b576025810180516001600160f81b031916606160f81b1480614d4b575b80614d26575b80614d01575b80614cdc575b80614cb7575b61478a57815160051015612f6b5780516001600160f81b031916603b60f91b1480614c92575b80614c6d575b80614c48575b80614c23575b80614bfe575b61478a57600e8310159081614bdb575b5080614bb6575b80614b91575b80614b6c575b80614b47575b80614b22575b80614afd575b80614ad8575b80614ab3575b156143ec575050600190565b508051600d1015612f6b57602d8101516001600160f81b031916603360f91b14614aa7565b508051600c1015612f6b57602c8101516001600160f81b031916606960f81b14614aa1565b508051600b1015612f6b57602b8101516001600160f81b031916606760f81b14614a9b565b508051600a1015612f6b57602a8101516001600160f81b031916602f60f81b14614a95565b50805160091015612f6b5760298101516001600160f81b031916606560f81b14614a8f565b50805160081015612f6b5760288101516001600160f81b031916606760f81b14614a89565b50805160071015612f6b5760278101516001600160f81b031916606160f81b14614a83565b50805160061015612f6b5760268101516001600160f81b031916606d60f81b14614a7d565b9050815160051015612f6b57516001600160f81b031916606960f81b145f614a76565b508151600a1015612f6b57602a8201516001600160f81b031916602f60f81b14614a66565b50815160091015612f6b5760298201516001600160f81b031916606f60f81b14614a60565b50815160081015612f6b5760288201516001600160f81b031916606560f81b14614a5a565b50815160071015612f6b5760278201516001600160f81b031916601960fa1b14614a54565b50815160061015612f6b5760268201516001600160f81b031916606960f81b14614a4e565b508151600a1015612f6b57602a8201516001600160f81b031916602f60f81b14614a28565b50815160091015612f6b5760298201516001600160f81b031916606f60f81b14614a22565b50815160081015612f6b5760288201516001600160f81b031916606960f81b14614a1c565b50815160071015612f6b5760278201516001600160f81b031916601960fa1b14614a16565b50815160061015612f6b5760268201516001600160f81b031916607560f81b14614a10565b50805160041015612f6b5760248101516001600160f81b031916601d60f91b146149e5565b50805160031015612f6b5760238101516001600160f81b031916606160f81b146149df565b50805160021015612f6b5760228101516001600160f81b031916601d60fa1b146149d9565b50805160011015612f6b5760218101516001600160f81b031916606160f81b146149d3565b90614e0e82612c61565b614e1b6040519182612b70565b8281528092614e2c601f1991612c61565b0190602036910137565b80515f5f5b828110614fda57508015614fd557614e56614e5b9183612e7a565b614e04565b915f9060405191614e6d604084612b70565b601083526f181899199a1a9b1b9c1cb0b131b232b360811b60208401525f915b848310614e9c57505050505090565b614ea683826143c6565b51928360f81c602281148015614fcb575b15614f01575082605c614ed6614ecf600195966130a7565b928a6143c6565b53614ef7614ee3826130a7565b956001600160f81b0319165f1a91896143c6565b535b019190614e8d565b6020811015614fb9578394605c614f24614f1d600196976130a7565b978b6143c6565b536075614f33614f1d886130a7565b536030614f42614f1d886130a7565b536030614f51614f1d886130a7565b536001600160f81b031990614f699060fc1c886143c6565b511694614f82614f78826130a7565b965f1a918a6143c6565b536001600160f81b031990614f9a90600f16876143c6565b511693614fb3614fa9826130a7565b955f1a91896143c6565b53614ef9565b5082614fb3614ee360019495926130a7565b50605c8114614eb7565b505090565b90601160f91b6001600160f81b0319614ff384876143c6565b5116148015615046575b156150155761500d6001916130a7565b915b01614e3b565b90602061502282866143c6565b5160f81c10615034575b60019061500f565b90600581018091116102ea579061502c565b50601760fa1b6001600160f81b031961505f84876143c6565b511614614ffd565b60048110156103bf5780156150f657600181146150cf576002146150aa57604051615093604082612b70565b6007815266119b1859d9d95960ca1b602082015290565b6040516150b8604082612b70565b600781526610db185a5b595960ca1b602082015290565b506040516150de604082612b70565b600881526715995c9a599a595960c21b602082015290565b50604051615105604082612b70565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b821015615261575b806d04ee2d6d415b85acef8100000000600a921015615246575b662386f26fc10000811015615232575b6305f5e100811015615221575b612710811015615212575b6064811015615204575b10156151f9575b600a602160018401936151a385612c61565b946151b16040519687612b70565b8086526151c0601f1991612c61565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a8353048015614fd557600a90916151cb565b600190910190615191565b60646002910493019261518a565b61271060049104930192615180565b6305f5e10060089104930192615175565b662386f26fc1000060109104930192615168565b6d04ee2d6d415b85acef810000000060209104930192615158565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b810461513e565b80156102ea575f190190565b90602082511115612bc95760208251811015612f6b57608060c082808601015160f81c16146152ff575b6152c381614e04565b905f5b8181106152d4575090925050565b6001906001600160f81b03196152ea82886143c6565b51165f1a6152f882866143c6565b53016152c6565b80151580615320575b1561531b5761531690615284565b6152ff565b6152ba565b50608060c061532f83866143c6565b5160f81c1614615308565b80515f5f5b82811061552457508015614fd557614e5661535a9183612e7a565b915f905f5b83811061536d575050505090565b6001600160f81b031961538082846143c6565b5116601360f91b81036153ea575060019060266153a661539f866130a7565b95886143c6565b5360616153b561539f866130a7565b53606d6153c461539f866130a7565b5360706153d361539f866130a7565b53603b6153e261539f866130a7565b535b0161535f565b600f60fa1b810361543a5750600190602661540761539f866130a7565b53606c61541661539f866130a7565b53607461542561539f866130a7565b53603b61543461539f866130a7565b536153e4565b601f60f91b81036154665750600190602661545761539f866130a7565b53606761541661539f866130a7565b601160f91b81036154b05750600190602661548361539f866130a7565b53607161549261539f866130a7565b5360756154a161539f866130a7565b53606f61541661539f866130a7565b602760f81b8103615509575060019060266154cd61539f866130a7565b5360616154dc61539f866130a7565b5360706154eb61539f866130a7565b53606f6154fa61539f866130a7565b53607361542561539f866130a7565b926001919061543461551a826130a7565b955f1a91886143c6565b90601360f91b6001600160f81b031961553d84876143c6565b51160361555a57600481018091116102ea57600190915b0161533f565b600f60fa1b6001600160f81b031961557284876143c6565b51160361558d57600381018091116102ea5760019091615554565b601f60f91b6001600160f81b03196155a584876143c6565b5116036155c057600381018091116102ea5760019091615554565b601160f91b6001600160f81b03196155d884876143c6565b5116036155f357600581018091116102ea5760019091615554565b90602760f81b6001600160f81b031961560c83876143c6565b51161461561c575b600190615554565b90600581018091116102ea5790615614565b9081511561574d578151600281018091116102ea5760039004600281901b91906001600160fe1b038116036102ea57604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b80891061571157506020959697509060039291525106806001146156fc576002146156ef575b50808452830101604052565b603d905f1901535f6156e3565b50603d90815f1982015360011901535f6156e3565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c165160028401531651600382015301936156bd565b9050604051613e7b602082612b70565b8060f81c604181101580615791575b615774575090565b602091500160ff81116102ea5760f81b6001600160f81b03191690565b50605a81111561576c56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377a26469706673582212209fd6a08b5382c7917ae93127277a1424dd5f03c0009eface360e5d3f45988b0f64736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
          "name": "batchMint",
          "outputs": [],
          "stateMutability": "nonpayable",
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
      "bytecode": "0x610180604052346100845761001b6100156100d5565b916101c7565b60405161241b9081610e718239608051816116f7015260a051816117b4015260c051816116c1015260e051816117460152610100518161176c01526101205181610a5901526101405181610a820152610160518181816106830152818161087301526110a50152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b601f909101601f19168101906001600160401b038211908210176100bf57604052565b610088565b604051906100d360408361009c565b565b61332c90606082380392836040519485926100f0828561009c565b833981010312610084578151906001600160a01b0382168203610084576040602084015193015191929190565b6040519061012c60408361009c565b60048252565b6040519061014160408361009c565b60018252565b6040519061015660408361009c565b600a825269213930b3902a37b5b2b760b11b6020830152565b1561017657565b60405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b6064820152608490fd5b916101d0610147565b6101d8610147565b906101e161011d565b90634252414760e01b60208301526101f7610132565b603160f81b60208201908152845190949193916001600160401b0382116100bf5761022c8261022760035461036e565b6103a6565b602090601f83116001146102e75791806102609261026895945f926102dc575b50508160011b915f199060031b1c19161790565b600355610445565b610271816106db565b6101205261027e826107d0565b610140526020815191012060e052519020610100524660a05261029f6108c2565b6080523060c0526102b28282101561016f565b610160526102bf8261051e565b506102c982610594565b50806102d3575050565b6100d39161062f565b015190505f8061024c565b60035f52601f19831691907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b925f5b81811061035657509160019391856102689796941061033e575b505050811b01600355610445565b01515f1960f88460031b161c191690555f8080610330565b92936020600181928786015181550195019301610316565b90600182811c9216801561039c575b602083101461038857565b634e487b7160e01b5f52602260045260245ffd5b91607f169161037d565b601f81116103b2575050565b60035f5260205f20906020601f840160051c830193106103ec575b601f0160051c01905b8181106103e1575050565b5f81556001016103d6565b90915081906103cd565b601f821161040357505050565b5f5260205f20906020601f840160051c8301931061043b575b601f0160051c01905b818110610430575050565b5f8155600101610425565b909150819061041c565b80519091906001600160401b0381116100bf5761046e8161046760045461036e565b60046103f6565b602092601f82116001146104a25761049d929382915f926102dc5750508160011b915f199060031b1c19161790565b600455565b60045f52601f198216937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b915f5b86811061050657508360019596106104ee575b505050811b01600455565b01515f1960f88460031b161c191690555f80806104e3565b919260206001819286850151815501940192016104d0565b6001600160a01b0381165f9081525f5160206132cc5f395f51905f52602052604090205460ff1661058f576001600160a01b03165f8181525f5160206132cc5f395f51905f5260205260408120805460ff191660011790553391905f51602061328c5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206132ec5f395f51905f52602052604090205460ff1661058f576001600160a01b0381165f9081525f5160206132ec5f395f51905f5260205260409020805460ff1916600117905533906001600160a01b03167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a65f51602061328c5f395f51905f525f80a4600190565b91906001600160a01b03831680156106c8576002548281018091116106c3576002555f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b038085116106ac57506100d392935061099f565b630e58ae9360e11b5f52600485905260245260445ffd5b61098b565b63ec442f0560e01b5f525f60045260245ffd5b908151602081105f146106f65750906106f390610920565b90565b6001600160401b0381116100bf5761071a8161071360055461036e565b60056103f6565b602092601f821160011461075157610749929382915f926102dc5750508160011b915f199060031b1c19161790565b60055560ff90565b60055f52601f198216937f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0915f5b8681106107b857508360019596106107a0575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f8080610792565b9192602060018192868501518155019401920161077f565b908151602081105f146107e85750906106f390610920565b6001600160401b0381116100bf5761080c8161080560065461036e565b60066103f6565b602092601f82116001146108435761083b929382915f926102dc5750508160011b915f199060031b1c19161790565b60065560ff90565b60065f52601f198216937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f915f5b8681106108aa5750836001959610610892575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f8080610884565b91926020600181928685015181550194019201610871565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261091a60c08261009c565b51902090565b601f81511161094b57602081519101516020821061093c571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b634e487b7160e01b5f52601160045260245ffd5b906109a981610a9e565b9165ffffffffffff4311610a8657600a5480610a5057506109e36109d36100d3945f5b6001610e14565b65ffffffffffff4316600a610d3e565b50506001600160a01b03168015610a38575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116610bcd565b610a49610a4483610a9e565b610acf565b50506109f5565b92835f198101116106c357600a5f525f5160206132ac5f395f51905f52909301546100d3936109e3916109d3919060301c6109cc565b6306dfcc6560e41b5f5260306004524360245260445ffd5b6001600160d01b038111610ab8576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b65ffffffffffff4311610a8657600a5480610af957506109d3610af5915f5b6002610e14565b9091565b805f198101116106c357600a5f525f5160206132ac5f395f51905f520154610af5916109d39160301c610aee565b65ffffffffffff4311610a8657805480610b5b5750610b4b610af5925f6002610e14565b9065ffffffffffff431690610d3e565b805f198101116106c3575f82815260209020015f190154610af592610b4b9160301c610aee565b65ffffffffffff4311610a8657805480610ba65750610b4b610af5925f6001610e14565b805f198101116106c3575f82815260209020015f190154610af592610b4b9160301c6109cc565b6001600160a01b03808316939291908116908185141580610cc0575b610bf5575b5050505050565b81610c66575b505082610c0a575b8080610bee565b6001600160a01b03165f9081526009602052604090205f51602061330c5f395f51905f5291610c4391610c3d9091610a9e565b90610b82565b604080516001600160d01b039384168152919092166020820152a25f8080610c03565b6001600160a01b03165f9081526009602052604090205f51602061330c5f395f51905f5290610c9e90610c9886610a9e565b90610b27565b604080516001600160d01b039384168152919092166020820152a25f80610bfb565b50831515610be9565b5f198101919082116106c357565b908154680100000000000000008110156100bf5760018101808455811015610d2a575f9283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b634e487b7160e01b5f52603260045260245ffd5b80549293928015610dea57610d55610d6091610cc9565b825f5260205f200190565b8054603081901c9365ffffffffffff91821692918116808411610ddb57879303610da75750610da392509065ffffffffffff82549181199060301b169116179055565b9190565b915050610da391610dc7610db96100c4565b65ffffffffffff9093168352565b6001600160d01b0386166020830152610cd7565b632520601d60e01b5f5260045ffd5b5090610e0f91610dfb610db96100c4565b6001600160d01b0385166020830152610cd7565b5f9190565b91909180600114610e5657600214610e3a57634e487b7160e01b5f52605160045260245ffd5b6001600160d01b03908116918116919091039081116106c35790565b506001600160d01b03918216908216019081116106c3579056fe60806040526004361015610011575f80fd5b5f3560e01c806301ffc9a71461025457806306fdde031461024f578063095ea7b31461024a57806318160ddd1461024557806323b872dd14610240578063248a9ca31461023b5780632f2ff15d14610236578063313ce567146102315780633644e5151461022c57806336568abe146102275780633a46b1a81461022257806340c10f191461021d57806342966c68146102185780634bf5d7e914610213578063587cde1e1461020e5780635c19a95c1461020957806368573107146102045780636fcfff45146101ff57806370a08231146101fa57806379cc6790146101f55780637ecebe00146101f057806384b0196e146101eb5780638e539e8c146101e657806391d14854146101e157806391ddadf4146101dc57806395d89b41146101d75780639ab24eb0146101d2578063a217fddf146101cd578063a9059cbb146101c8578063c3cda520146101c3578063d505accf146101be578063d5391393146101b9578063d547741f146101b4578063d5abeb01146101af578063dd62ed3e146101aa5763f1127ed8146101a5575f80fd5b611127565b6110c8565b61108e565b61104d565b611013565b610ee7565b610dd4565b610d8a565b610d70565b610d1f565b610c7a565b610c4f565b610bfd565b610b3e565b610a41565b610a06565b6109d2565b610996565b61092e565b6107f5565b61079e565b61075b565b6106cb565b6106ae565b610644565b61055b565b610513565b6104f9565b6104de565b610496565b610463565b610423565b610406565b6103d1565b6102e6565b346102aa5760203660031901126102aa5760043563ffffffff60e01b81168091036102aa57602090637965db0b60e01b8114908115610299575b506040519015158152f35b6301ffc9a760e01b1490505f61028e565b5f80fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102e39281815201906102ae565b90565b346102aa575f3660031901126102aa576040515f600354610306816111f1565b808452906001811690811561039c575060011461033e575b61033a8361032e818503826112df565b604051918291826102d2565b0390f35b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106103825750909150810160200161032e61031e565b91926001816020925483858801015201910190929161036a565b60ff191660208086019190915291151560051b8401909101915061032e905061031e565b6001600160a01b038116036102aa57565b346102aa5760403660031901126102aa576103fb6004356103f1816103c0565b6024359033611b50565b602060405160018152f35b346102aa575f3660031901126102aa576020600254604051908152f35b346102aa5760603660031901126102aa576103fb600435610443816103c0565b60243561044f816103c0565b6044359161045e8333836113b8565b611486565b346102aa5760203660031901126102aa57602061048e6004355f52600b602052600160405f20015490565b604051908152f35b346102aa5760403660031901126102aa576104dc6024356004356104b9826103c0565b6104d76104d2825f52600b602052600160405f20015490565b6115f4565b61162e565b005b346102aa575f3660031901126102aa57602060405160128152f35b346102aa575f3660031901126102aa57602061048e6116be565b346102aa5760403660031901126102aa57600435602435610533816103c0565b336001600160a01b0382160361054c576104dc916117da565b63334bd91960e11b5f5260045ffd5b346102aa5760403660031901126102aa57600435610578816103c0565b6001600160a01b03165f908152600960205260409020610599602435611862565b8154905f8291600584116105ec575b6105b3935084611d70565b90816105d157505060205f5b6040516001600160d01b039091168152f35b6105dc60209261189b565b905f52815f20015460301c6105bf565b91926105f781611c12565b810390811161063f576105b393855f5265ffffffffffff8260205f2001541665ffffffffffff8516105f1461062d5750916105a8565b92915061063990611301565b906105a8565b6111dd565b346102aa5760403660031901126102aa57600435610661816103c0565b60243561066c611585565b6002549181830180931161063f576106a96104dc937f0000000000000000000000000000000000000000000000000000000000000000101561131c565b6118a9565b346102aa5760203660031901126102aa576104dc60043533611948565b346102aa575f3660031901126102aa576106e443611bc5565b65ffffffffffff806106f543611bc5565b1691160361074c5761033a60405161070e6040826112df565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c7400000060208201526040519182916020835260208301906102ae565b6301bfc1c560e61b5f5260045ffd5b346102aa5760203660031901126102aa57600435610778816103c0565b60018060a01b03165f526008602052602060018060a01b0360405f205416604051908152f35b346102aa5760203660031901126102aa576104dc6004356107be816103c0565b33611a70565b9181601f840112156102aa5782359167ffffffffffffffff83116102aa576020808501948460051b0101116102aa57565b346102aa5760403660031901126102aa5760043567ffffffffffffffff81116102aa576108269036906004016107c4565b9060243567ffffffffffffffff81116102aa576108479036906004016107c4565b90610850611585565b8184036108f5575f5f5b8381106108d557506108716108999160025461130f565b7f0000000000000000000000000000000000000000000000000000000000000000101561131c565b5f5b8481106108a457005b806108cf6108bd6108b86001948989611381565b611396565b6108c8838787611381565b35906118a9565b0161089b565b906108ee6001916108e7848787611381565b359061130f565b910161085a565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b346102aa5760203660031901126102aa5760043561094b816103c0565b6001600160a01b03165f9081526009602052604090205463ffffffff811161097f5760405163ffffffff9091168152602090f35b6306dfcc6560e41b5f52602060045260245260445ffd5b346102aa5760203660031901126102aa57602061048e6004356109b8816103c0565b6001600160a01b03165f9081526020819052604090205490565b346102aa5760403660031901126102aa576104dc6004356109f2816103c0565b60243590610a018233836113b8565b611948565b346102aa5760203660031901126102aa57600435610a23816103c0565b60018060a01b03165f526007602052602060405f2054604051908152f35b346102aa575f3660031901126102aa57610ae5610a7d7f0000000000000000000000000000000000000000000000000000000000000000611eeb565b610aa67f0000000000000000000000000000000000000000000000000000000000000000611f4b565b6020604051610ab582826112df565b5f815281610af381830194601f198301368737604051978897600f60f81b895260e0858a015260e08901906102ae565b9087820360408901526102ae565b914660608701523060808701525f60a087015285830360c087015251918281520192915f5b828110610b2757505050500390f35b835185528695509381019392810192600101610b18565b346102aa5760203660031901126102aa57610b5a600435611862565b600a54905f829160058411610ba9575b610b769350600a611d70565b80610b8757506040515f8152602090f35b610ba4610b9560209261189b565b600a5f52825f20015460301c90565b6105bf565b9192610bb481611c12565b810390811161063f57610b7693600a5f5265ffffffffffff8260205f2001541665ffffffffffff8516105f14610beb575091610b6a565b929150610bf790611301565b90610b6a565b346102aa5760403660031901126102aa57602060ff610c43602435600435610c24826103c0565b5f52600b845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b346102aa575f3660031901126102aa576020610c6a43611bc5565b65ffffffffffff60405191168152f35b346102aa575f3660031901126102aa576040515f600454610c9a816111f1565b808452906001811690811561039c5750600114610cc15761033a8361032e818503826112df565b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610d055750909150810160200161032e61031e565b919260018160209254838588010152019101909291610ced565b346102aa5760203660031901126102aa57600435610d3c816103c0565b6001600160a01b03165f9081526009602090815260409091206001600160d01b0390610d6790611af1565b16604051908152f35b346102aa575f3660031901126102aa5760206040515f8152f35b346102aa5760403660031901126102aa576103fb600435610daa816103c0565b6024359033611486565b6064359060ff821682036102aa57565b6084359060ff821682036102aa57565b346102aa5760c03660031901126102aa57600435610df1816103c0565b60243590604435610e00610db4565b6084359060a43592804211610ed55791610e859391610e77610e7c9460405160208101917fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf835260018060a01b038a1660408301528a6060830152608082015260808152610e6f60a0826112df565b519020611b1b565b611f82565b9092919261202d565b6001600160a01b0381165f908152600760205260409020805460018101909155809303610eb6576104dc9250611a70565b90506301d4b62360e61b5f5260018060a01b031660045260245260445ffd5b632341d78760e11b5f5260045260245ffd5b346102aa5760e03660031901126102aa57600435610f04816103c0565b602435610f10816103c0565b6044359060643592610f20610dc4565b60a43560c43590864211611000576001600160a01b0384165f908152600760205260409020805460018101909155610fc59390610fc0909860405160208101917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9835260018060a01b0389169b8c604084015260018060a01b038b1660608401528b608084015260a083015260c082015260c08152610e6f60e0826112df565b611b41565b936001600160a01b03851603610fdf576104dc9350611b50565b6325c0072360e11b5f526001600160a01b038085166004521660245260445ffd5b8663313c898160e11b5f5260045260245ffd5b346102aa575f3660031901126102aa5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b346102aa5760403660031901126102aa576104dc602435600435611070826103c0565b6110896104d2825f52600b602052600160405f20015490565b6117da565b346102aa575f3660031901126102aa5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346102aa5760403660031901126102aa57602061111e6004356110ea816103c0565b602435906110f7826103c0565b60018060a01b03165f526001835260405f209060018060a01b03165f5260205260405f2090565b54604051908152f35b346102aa5760403660031901126102aa57600435611144816103c0565b6024359063ffffffff821682036102aa5761033a91611193916111656113a0565b5061116e6113a0565b506001600160a01b03165f90815260096020526040902061118d6113a0565b506120a9565b50604051906111a1826112be565b5465ffffffffffff811680835260309190911c60209283019081526040805192835290516001600160d01b031692820192909252918291820190565b634e487b7160e01b5f52601160045260245ffd5b90600182811c9216801561121f575b602083101461120b57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611200565b5f9291815491611238836111f1565b808352926001811690811561128d575060011461125457505050565b5f9081526020812093945091925b838310611273575060209250010190565b600181602092949394548385870101520191019190611262565b915050602093945060ff929192191683830152151560051b010190565b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176112da57604052565b6112aa565b90601f8019910116810190811067ffffffffffffffff8211176112da57604052565b906001820180921161063f57565b9190820180921161063f57565b1561132357565b60405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b6044820152606490fd5b6040519061136b6040836112df565b565b634e487b7160e01b5f52603260045260245ffd5b91908110156113915760051b0190565b61136d565b356102e3816103c0565b604051906113ad826112be565b5f6020838281520152565b6001600160a01b039081165f81815260016020908152604080832094861683529390529190912091929091545f1981106113f3575b50505050565b818110611465578215611452576001600160a01b0384161561143f57611435925f526001602052039160405f209060018060a01b03165f5260205260405f2090565b555f8080806113ed565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b83637dc7a0d960e11b5f5260018060a01b031660045260245260445260645ffd5b6001600160a01b038116939291908415611572576001600160a01b038216801561155f576001600160a01b0382165f9081526020819052604090205495848710611539578461136b9697036114ea8460018060a01b03165f525f60205260405f2090565b556001600160a01b0384165f9081526020819052604090208054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a361223e565b63391434e360e21b5f526001600160a01b0383166004526024879052604485905260645ffd5b63ec442f0560e01b5f525f60045260245ffd5b634b637e8f60e11b5f525f60045260245ffd5b335f9081527ff70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8602052604090205460ff16156115bd57565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b5f818152600b6020908152604080832033845290915290205460ff16156116185750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff166116b8575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806117b1575b15611719577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a081526117ab60c0826112df565b51902090565b507f000000000000000000000000000000000000000000000000000000000000000046146116f0565b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff16156116b8575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b65ffffffffffff61187243611bc5565b168082101561188557506102e390611bc5565b90637669fc0f60e11b5f5260045260245260445ffd5b5f1981019190821161063f57565b91906001600160a01b038316801561155f5760025482810180911161063f576002556001600160a01b0384165f90815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a36002546001600160d01b039390848111611931575061136b9293506121c5565b8490630e58ae9360e11b5f5260045260245260445ffd5b6001600160a01b038116908115611572576001600160a01b0381165f90815260208190526040902054838110611a4b579061199a8461136b959493039160018060a01b03165f525f60205260405f2090565b5581600254036002555f817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180602081018782520390a38015611a33575b6119ec6119e7836120be565b612190565b50505f908152600860205260408120549080527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b039081169116611dc9565b611a44611a3f836120be565b61215b565b50506119db565b63391434e360e21b5f526001600160a01b03909116600452602452604482905260645ffd5b6001600160a01b038181165f81815260086020526040812080548685166001600160a01b03198216811790925561136b96941694611aeb9390928691907f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a46001600160a01b03165f9081526020819052604090205490565b91611dc9565b80549081611aff5750505f90565b815f1981011161063f575f525f199060205f2001015460301c90565b604290611b266116be565b906040519161190160f01b8352600283015260228201522090565b916102e39391610e7c93611f82565b6001600160a01b0316908115611452576001600160a01b03811692831561143f5780611bb87f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593855f52600160205260405f209060018060a01b03165f5260205260405f2090565b55604051908152602090a3565b65ffffffffffff8111611bdd5765ffffffffffff1690565b6306dfcc6560e41b5f52603060045260245260445ffd5b8115611bfe570490565b634e487b7160e01b5f52601260045260245ffd5b60018111156102e357806001600160801b821015611d33575b611cd9611ccf611cc5611cbb611cb1611ca7611c96611ce09760048a600160401b611ce59c1015611d26575b640100000000811015611d19575b62010000811015611d0c575b610100811015611cff575b6010811015611cf2575b1015611cea575b60030260011c90565b611ca0818b611bf4565b0160011c90565b611ca0818a611bf4565b611ca08189611bf4565b611ca08188611bf4565b611ca08187611bf4565b611ca08186611bf4565b8093611bf4565b821190565b900390565b60011b611c8d565b60041c9160021b91611c86565b60081c9160041b91611c7c565b60101c9160081b91611c71565b60201c9160101b91611c65565b60401c9160201b91611c57565b5050611ce5611ce0611cd9611ccf611cc5611cbb611cb1611ca7611c96611d5a8a60801c90565b9850600160401b9750611c2b9650505050505050565b905b838310611d7f5750505090565b90919280841860011c8185160190835f5265ffffffffffff8260205f2001541665ffffffffffff8416105f14611db95750925b9190611d72565b9350611dc490611301565b611db2565b6001600160a01b03808316939291908116908185141580611ee2575b611df1575b5050505050565b81611e75575b505082611e06575b8080611dea565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72491611e5291611e4c90916120be565b90612127565b604080516001600160d01b039384168152919092166020820152a25f8080611dff565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72490611ec090611eba866120be565b906120ef565b604080516001600160d01b039384168152919092166020820152a25f80611df7565b50831515611de5565b60ff8114611f315760ff811690601f8211611f225760405191611f0f6040846112df565b6020808452838101919036833783525290565b632cd44ac360e21b5f5260045ffd5b506040516102e381611f44816005611229565b03826112df565b60ff8114611f6f5760ff811690601f8211611f225760405191611f0f6040846112df565b506040516102e381611f44816006611229565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411612004579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15611ff9575f516001600160a01b03811615611fef57905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b6004111561201957565b634e487b7160e01b5f52602160045260245ffd5b6120368161200f565b8061203f575050565b6120488161200f565b6001810361205f5763f645eedf60e01b5f5260045ffd5b6120688161200f565b60028103612083575063fce698f760e01b5f5260045260245ffd5b8061208f60039261200f565b146120975750565b6335e2f38360e21b5f5260045260245ffd5b8054821015611391575f5260205f2001905f90565b6001600160d01b0381116120d8576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b906120f943611bc5565b9061210383611af1565b6001600160d01b03918216908216039190821161063f576121239261230f565b9091565b9061213143611bc5565b9061213b83611af1565b6001600160d01b03918216908216019190821161063f576121239261230f565b61216443611bc5565b9061216f600a611af1565b6001600160d01b039182169082160190811161063f5761212391600a61230f565b61219943611bc5565b906121a4600a611af1565b6001600160d01b039182169082160390811161063f5761212391600a61230f565b9061136b916121d6611a3f836120be565b50506001600160a01b0316801561222b575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116611dc9565b6122376119e7836120be565b50506121e8565b61136b92916001600160a01b039091169081156122a1575b6001600160a01b031690811561228e575b5f90815260086020526040808220549282529020546001600160a01b039081169116611dc9565b61229a6119e7846120be565b5050612267565b6122ad611a3f846120be565b5050612256565b8054600160401b8110156112da576122d1916001820181556120a9565b6122fc57815160209092015160301b65ffffffffffff191665ffffffffffff92909216919091179055565b634e487b7160e01b5f525f60045260245ffd5b805492939280156123bb576123266123319161189b565b825f5260205f200190565b8054603081901c9365ffffffffffff918216929181168084116123ac57879303612378575061237492509065ffffffffffff82549181199060301b169116179055565b9190565b9150506123749161239861238a61135c565b65ffffffffffff9093168352565b6001600160d01b03861660208301526122b4565b632520601d60e01b5f5260045ffd5b50906123e0916123cc61238a61135c565b6001600160d01b03851660208301526122b4565b5f919056fea26469706673582212208f92cc1a2ccb90b3c817be1c4d4297d32ef1dfe85099c949903e9bbbc7e8499c64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a7df7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76f70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "withdrawERC20",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawETH",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60803461007257601f6111d638819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007257516001600160a01b0381168103610072578061005c6100629261008a565b50610100565b50604051610fe290816101948239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f5160206111b65f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f5160206111b65f395f51905f5260205260408120805460ff191660011790553391905f5160206111765f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206111965f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f5160206111965f395f51905f5260205260408120805460ff191660011790553391907f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09905f5160206111765f395f51905f529080a460019056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a714610b3057508063248a9ca314610afe5780632f2ff15d14610ac157806336568abe14610a7d57806374d4e49114610a6057806390229af71461097757806391d148541461092f578063a217fddf14610915578063a622ee7c14610882578063b9209e3314610845578063ceb68c2314610791578063d42b291c14610331578063d547741f146102ef578063d7bfe386146102ad578063e086e5ec1461021e578063e7705db6146101e45763f4f3b200146100e3575f61000f565b346101cd5760203660031901126101cd576100fc610b99565b610104610e1d565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156101d9575f916101a3575b506040519063a9059cbb60e01b5f523360045260245260205f60448180865af19060015f5114821615610183575b501561017157005b635274afe760e01b5f5260045260245ffd5b600182151661019b5750813b15153d1516165f610169565b3d5f823e3d90fd5b90506020813d6020116101d1575b816101be60209383610c34565b810103126101cd57515f61013b565b5f80fd5b3d91506101b1565b6040513d5f823e3d90fd5b346101cd575f3660031901126101cd5760206040517f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098152f35b346101cd575f3660031901126101cd57610236610e1d565b5f80808047335af13d156102a8573d61024e81610d5c565b9061025c6040519283610c34565b81525f60203d92013e5b1561026d57005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b610266565b346101cd5760203660031901126101cd576004356002548110156101cd576102d6602091610d24565b905460405160039290921b1c6001600160a01b03168152f35b346101cd5760403660031901126101cd5761001a60043561030e610b83565b9061032c610327825f525f602052600160405f20015490565b610e6c565b610f2c565b346101cd5760803660031901126101cd5761034a610b99565b60243560058110156101cd5760443567ffffffffffffffff81116101cd57610376903690600401610cf6565b60649291923567ffffffffffffffff81116101cd57610399903690600401610cf6565b9390946103a4610dae565b6001600160a01b031693841561075a57845f52600160205260ff60405f20541615610715575b604051906103d782610c18565b6001825261040760208301976103ed878a610d50565b6103f8368787610d78565b92604085019384523691610d78565b9660608301978852865f52600160205260405f209251151560ff8019855416911617835551600581101561070157825461ff00191660089190911b61ff0016178255518051600183019167ffffffffffffffff82116106365761046a8354610be0565b601f81116106bc575b50602090601f8311600114610655576002949392915f918361064a575b50508160011b915f199060031b1c19161790555b01945194855167ffffffffffffffff8111610636576104c38254610be0565b601f81116105f1575b506020601f821160011461056357928492826060969361053198967f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec89a9b5f92610558575b50508160011b915f199060031b1c19161790555b60405195868095610baf565b60406020850152816040850152848401375f828201840152601f01601f19168101030190a2005b015190508b80610511565b601f19821697835f52815f20985f5b8181106105d95750837f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec8999a61053199979489979460609a97600195106105c1575b505050811b019055610525565b01515f1960f88460031b161c191690558b80806105b4565b838301518b556001909a019960209384019301610572565b825f5260205f20601f830160051c8101916020841061062c575b601f0160051c01905b81811061062157506104cc565b5f8155600101610614565b909150819061060b565b634e487b7160e01b5f52604160045260245ffd5b015190508a80610490565b90601f19831691845f52815f20925f5b8181106106a457509160019391856002989796941061068c575b505050811b0190556104a4565b01515f1960f88460031b161c191690558a808061067f565b92936020600181928786015181550195019301610665565b835f5260205f20601f840160051c810191602085106106f7575b601f0160051c01905b8181106106ec5750610473565b5f81556001016106df565b90915081906106d6565b634e487b7160e01b5f52602160045260245ffd5b60025468010000000000000000811015610636578060016107399201600255610d24565b81546001600160a01b0360039290921b91821b19169087901b1790556103ca565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346101cd5760203660031901126101cd576107aa610b99565b6107b2610dae565b6001600160a01b03165f8181526001602052604090205460ff161561080b57805f52600160205260405f2060ff1981541690557fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a5f80a2005b60405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b6044820152606490fd5b346101cd5760203660031901126101cd576001600160a01b03610866610b99565b165f526001602052602060ff60405f2054166040519015158152f35b346101cd5760203660031901126101cd576001600160a01b036108a3610b99565b165f5260016020526108f260405f206109118154916109036108d360026108cc60018501610c56565b9301610c56565b91604051958560ff8897161515875260ff602088019160081c16610baf565b608060408601526080850190610bbc565b908382036060850152610bbc565b0390f35b346101cd575f3660031901126101cd5760206040515f8152f35b346101cd5760403660031901126101cd57610948610b83565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101cd5760203660031901126101cd57610990610b99565b60608060405161099f81610c18565b5f81525f6020820152816040820152015260018060a01b03165f52600160205260405f206040516109cf81610c18565b61091182549260ff8416151583526109f160ff602085019560081c1685610d50565b610a4d610a136002610a0560018501610c56565b936040870194855201610c56565b9160608501928352610a3b604051968796602088525115156020880152516040870190610baf565b516080606086015260a0850190610bbc565b9051838203601f19016080850152610bbc565b346101cd575f3660031901126101cd576020600254604051908152f35b346101cd5760403660031901126101cd57610a96610b83565b336001600160a01b03821603610ab25761001a90600435610f2c565b63334bd91960e11b5f5260045ffd5b346101cd5760403660031901126101cd5761001a600435610ae0610b83565b90610af9610327825f525f602052600160405f20015490565b610ea4565b346101cd5760203660031901126101cd576020610b286004355f525f602052600160405f20015490565b604051908152f35b346101cd5760203660031901126101cd576004359063ffffffff60e01b82168092036101cd57602091637965db0b60e01b8114908115610b72575b5015158152f35b6301ffc9a760e01b14905083610b6b565b602435906001600160a01b03821682036101cd57565b600435906001600160a01b03821682036101cd57565b9060058210156107015752565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90600182811c92168015610c0e575b6020831014610bfa57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610bef565b6080810190811067ffffffffffffffff82111761063657604052565b90601f8019910116810190811067ffffffffffffffff82111761063657604052565b9060405191825f825492610c6984610be0565b8084529360018116908115610cd45750600114610c90575b50610c8e92500383610c34565b565b90505f9291925260205f20905f915b818310610cb8575050906020610c8e928201015f610c81565b6020919350806001915483858901015201910190918492610c9f565b905060209250610c8e94915060ff191682840152151560051b8201015f610c81565b9181601f840112156101cd5782359167ffffffffffffffff83116101cd57602083818601950101116101cd57565b600254811015610d3c5760025f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b60058210156107015752565b67ffffffffffffffff811161063657601f01601f191660200190565b929192610d8482610d5c565b91610d926040519384610c34565b8294818452818301116101cd578281602093845f960137010152565b335f9081527f1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81602052604090205460ff1615610de657565b63e2517d3f60e01b5f52336004527f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0960245260445ffd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615610e5557565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615610e8e5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610f26575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610f26575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea26469706673582212201f094da03902249988808a4705813a66e0018a05bc8ef5d641b8b90834e4e24464736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
    },
    "ExhibitVault": {
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
              "name": "_registry",
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
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "batchExhibit1155",
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
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "batchExhibit721",
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
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "batchExtendExhibition1155",
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
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "batchExtendExhibition721",
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
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "extendExhibition1155",
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
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "extendExhibition721",
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
              "name": "nftContract",
              "type": "address"
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
          "name": "moveBatch1155",
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
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "moveBatch1155WithDuration",
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
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
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
            }
          ],
          "name": "withdrawBatch1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "withdrawERC20",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawETH",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x6080346100af57601f61360238819003918201601f19168301916001600160401b038311848410176100b35780849260409485528339810103126100af5761007f610055602061004e846100c7565b93016100c7565b9160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556100db565b50600180546001600160a01b0319166001600160a01b039290921691909117905560405161347d90816101658239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100af57565b6001600160a01b0381165f9081525f5160206135e25f395f51905f52602052604090205460ff1661015f576001600160a01b03165f8181525f5160206135e25f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c90816301ffc9a71461208f57508063025f75ac14611f975780630412619614611f53578063150b7a0214611dc9578063248a9ca314611d9757806325fdf58914611d655780632f2ff15d14611d285780632f3ef60214611a535780632ff1d0f914611a33578063358d48d91461198457806335f81b871461171057806336568abe146116cb578063380ff9991461168257806338c88528146116625780634242b746146114c55780635daa63c7146112a65780636f39becd1461125a5780637b103999146112315780637b606fdc1461114357806381bd34d2146110fa5780638430dd3a1461108c57806391d1485414611043578063a217fddf14611027578063bc197c8114610de4578063c10e515314610d2d578063c2fe518514610b05578063c555abb4146107b1578063cee0826d14610686578063d395a21214610613578063d547741f146105cc578063d6bd07ee14610591578063d742385814610571578063e086e5ec146104e0578063f07a380e1461049e578063f23a6e61146102b65763f4f3b2000361000f57346102b35760203660031901126102b3576101c9612142565b6101d1612cbb565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156102a8578391610272575b506040519063a9059cbb60e01b84523360045260245260208360448180865af1906001845114821615610252575b5015610240575080f35b635274afe760e01b8252600452602490fd5b600182151661026a5750813b15153d1516165f610236565b3d84823e3d90fd5b90506020813d6020116102a0575b8161028d60209383612184565b8101031261029c57515f610208565b5f80fd5b3d9150610280565b6040513d85823e3d90fd5b80fd5b50346102b35760a03660031901126102b3576102d0612142565b6102d8612158565b6044359160643591608435906001600160401b03821161049a5760249261030661030c9336906004016121d4565b91612912565b3386526003602052604086208587526020526040862060018060a01b0383165f5260205260405f2061033f8582546123b1565b905580156104935761035190426123b1565b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20548111610464575b506001546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561045957604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35948891610437575b5001519533815260056020528181208682526020522060018060a01b0382165f5260205260405f20549061042260405192839260018060a01b031697339684612620565b0390a460405163f23a6e6160e01b8152602090f35b61045391503d808a833e61044b8183612184565b810190612425565b5f6103de565b6040513d87823e3d90fd5b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f610381565b5084610351565b8580fd5b50346102b35760403660031901126102b3576104cc6104bb612142565b6104c361266e565b60243590612f3b565b60015f5160206134085f395f51905f525580f35b50346102b357806003193601126102b3576104f9612cbb565b8080808047335af13d1561056c573d610511816121b9565b9061051f6040519283612184565b81528260203d92013e5b156105315780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b610529565b50346102b3576104cc61058336612244565b9161058c61266e565b61325c565b50346102b35760803660031901126102b3576104cc6105ae612142565b6105b661212c565b906105bf61266e565b60443590602435906126f2565b50346102b35760403660031901126102b35761060f6004356105ec612158565b9061060a610605825f525f602052600160405f20015490565b612d0a565b61304b565b5080f35b50346102b3576106223661227e565b9261062b61266e565b610636828214612339565b855b818110610654578660015f5160206134085f395f51905f525580f35b806106808661066e610669600195878c612379565b61239d565b61067984888a612379565b35906130cb565b01610638565b50346102b357806106963661227e565b6106a495939294919561266e565b6106af868414612339565b80156107925760408051336020820152908101919091526106dd81606081015b03601f198101835282612184565b915b835b8181106106fd578460015f5160206134085f395f51905f525580f35b6001600160a01b03610713610669838587612379565b1661071f828989612379565b3590803b1561078e5785879161074e9383604051809681958294635c46a7ef60e11b845230336004860161263d565b03925af190811561078357869161076a575b50506001016106e1565b8161077491612184565b61077f57845f610760565b8480fd5b6040513d88823e3d90fd5b8680fd5b50604051336020820152602081526107ab604082612184565b916106df565b50346102b35760a03660031901126102b3576107cb612142565b906024356001600160401b038111610b01576107eb9036906004016120fc565b90926044356001600160401b038111610afd5761080c9036906004016120fc565b94909261081761212c565b9060843561082361266e565b61082e888314612339565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015610af2578990610ab3575b61087991509491946126a6565b6001600160a01b039093169233885b84811061098e575050509686978015155f1461096f5760408051336020820152908101919091526108bc81606081016106cf565b945b833b1561096b5761092788966109156109039989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a48901916125e8565b868103600319016064880152916125e8565b838103600319016084850152906124d0565b03925af180156109605761094b575b5060015f5160206134085f395f51905f525580f35b8161095591612184565b6102b357805f610936565b6040513d84823e3d90fd5b8780fd5b5060405133602082015260208152610988604082612184565b946108be565b808b6109a9826109a16001958a8d612379565b35928d612379565b3590888d5260036020528c8160408220915260205260408d20855f526020526109d88260405f2054101561254c565b888d5260056020528c8160408220915260205260408d20855f52602052610a0560405f205442101561258f565b888d5260036020528c8160408220915260205260408d20855f5260205260405f20610a318382546125db565b9055888d5260036020528c8160408220915260205260408d20855f5260205260405f205415610a8b575b604080519283526001600160a01b038716602084015233928a915f5160206134285f395f51905f5291a401610888565b888d5260056020528c8160408220915260205260408d20855f526020528c60405f2055610a5b565b506020813d602011610aea575b81610acd60209383612184565b81010312610ae657610ae1610879916123d2565b61086c565b8880fd5b3d9150610ac0565b6040513d8b823e3d90fd5b8380fd5b5080fd5b50346102b35760803660031901126102b357610b1f612142565b602435610b2a61216e565b8360643593610b3761266e565b60018060a01b031691828252600260205260408220848352602052610b6960018060a01b036040842054163314612b1a565b60015460405163b9209e3360e01b81526001600160a01b0383811660048301819052979260209183916024918391165afa8015610d22578490610ce7575b610bb191506126a6565b838352600460205260408320858452602052610bd3604084205442101561258f565b838352600260209081526040808520878652825280852080546001600160a01b03191690558585526004825280852087865290915283208390558015610cc8576040805133602082015290810191909152610c3181606081016106cf565b905b833b15610cc457848391610c5c6040519485938493635c46a7ef60e11b8552306004860161263d565b038183875af1801561096057610caf575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f5160206134085f395f51905f525580f35b81610cb991612184565b610afd57835f610c6d565b8280fd5b5060405133602082015260208152610ce1604082612184565b90610c33565b506020813d602011610d1a575b81610d0160209383612184565b81010312610afd57610d15610bb1916123d2565b610ba7565b3d9150610cf4565b6040513d86823e3d90fd5b50346102b35760603660031901126102b3576004356001600160401b038111610b0157610d5e9036906004016120fc565b6024356001600160401b038111610afd57610d7d9036906004016120fc565b610d8561216e565b92610d8e61266e565b610d99828214612339565b855b818110610db7578660015f5160206134085f395f51905f525580f35b80610dde86610dcc610669600195878c612379565b610dd784888a612379565b359061325c565b01610d9b565b50346102b35760a03660031901126102b357610dfe612142565b610e06612158565b916044356001600160401b038111610b0157610e269036906004016122d2565b926064356001600160401b038111610cc457610e469036906004016122d2565b926084356001600160401b038111610afd5790610e6b610e7e939236906004016121d4565b91610e798751875114612339565b612912565b909290801561102057610e9190426123b1565b6001546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa908115610d2257906040918591611006575b50015192805b8651811015610ff45780610eea6001928961260c565b51610ef5828761260c565b519033855260036020526040852081865260205260408520848060a01b038a165f5260205260405f20610f298382546123b1565b905533855260056020526040852081865260205260408520848060a01b038a165f5260205260405f20548611610fc6575b33855260056020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3560405180610fbd8d898060a01b0316968d339684612620565b0390a401610ed4565b33855260056020526040852081865260205260408520848060a01b038a165f526020528560405f2055610f5a565b60405163bc197c8160e01b8152602090f35b61101a91503d8087833e61044b8183612184565b5f610ece565b5081610e91565b50346102b357806003193601126102b357602090604051908152f35b50346102b35760403660031901126102b357604061105f612158565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102b35761109b3661227e565b926110a461266e565b6110af828214612339565b855b8181106110cd578660015f5160206134085f395f51905f525580f35b806110f4866110e2610669600195878c612379565b6110ed84888a612379565b3590612b99565b016110b1565b50346102b357604061110b36612244565b939160018060a01b031682526003602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102b35760603660031901126102b3576004356001600160401b038111610b01576111749036906004016120fc565b6024356001600160401b038111610afd576111939036906004016120fc565b6044929192356001600160401b03811161049a576111b59036906004016120fc565b9190926111c061266e565b81811480611228575b6111d290612339565b865b8181106111f0578760015f5160206134085f395f51905f525580f35b80611222611204610669600194868c612379565b61120f83878b612379565b3561121b84898b612379565b3591612dca565b016111d4565b508183146111c9565b50346102b357806003193601126102b3576001546040516001600160a01b039091168152602090f35b50346102b35760403660031901126102b3576020906001600160a01b0361127f612142565b168152600282526040812060243582528252604060018060a01b0391205416604051908152f35b50346102b35760603660031901126102b3576112c0612142565b906024356001600160401b038111610b01576112e09036906004016120fc565b6044356001600160401b038111610afd576112ff9036906004016120fc565b92909161130a61266e565b611315848214612339565b33956001600160a01b031690855b8181106113a35750859650813b1561049a57856020611370829661090398604051998a988997631759616b60e11b89523060048a01523360248a015260a060448a015260a48901916125e8565b8284820391600319830160848701525201925af180156109605761094b575060015f5160206134085f395f51905f525580f35b806113b16001928487612379565b356113bd828989612379565b3590858a52600360205260408a20818b5260205260408a208b5f526020526113eb8260405f2054101561254c565b858a52600560205260408a20818b5260205260408a208b5f5260205261141760405f205442101561258f565b858a52600360205260408a20818b5260205260408a208b5f5260205260405f206114428382546125db565b9055858a52600360205260408a20818b5260205260408a208b5f5260205260405f20541561149e575b604051918252857fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a401611323565b858a52600560205260408a20818b5260205260408a208b5f526020528960405f205561146b565b50346102b35760803660031901126102b3576004356001600160401b038111610b01576114f69036906004016120fc565b826024356001600160401b038111610b01576115169036906004016120fc565b92906044356001600160401b038111610afd576115379036906004016120fc565b92909460643561154561266e565b81831480611659575b61155790612339565b801561163a57604080513360208201529081019190915261157b81606081016106cf565b935b855b83811061159b578660015f5160206134085f395f51905f525580f35b6001600160a01b036115b161066983878d612379565b166115bd828588612379565b356115c983858c612379565b3590823b15611636576115fa928a92838b9360405196879586948593637921219560e11b8552303360048701612510565b03925af190811561162b578891611616575b505060010161157f565b8161162091612184565b61078e57865f61160c565b6040513d8a823e3d90fd5b8980fd5b5060405133602082015260208152611653604082612184565b9361157d565b5081851461154e565b50346102b3576104cc6116743661221a565b9161167d61266e565b6130cb565b50346102b357604061169336612244565b939160018060a01b031682526005602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102b35760403660031901126102b3576116e5612158565b336001600160a01b038216036117015761060f9060043561304b565b63334bd91960e11b8252600482fd5b50346102b35760a03660031901126102b35761172a612142565b6024356044359161173961212c565b846084359261174661266e565b6001600160a01b03168082526003602090815260408084208785528252808420335f908152925290205490939061177f9087111561254c565b60015460405163b9209e3360e01b81526001600160a01b038581166004830152909160209183916024918391165afa80156102a8578390611949575b6117c591506126a6565b8382526005602090815260408084208785528252808420335f90815292529020546117f29042101561258f565b8382526003602052604082208583526020526040822060018060a01b0333165f5260205260405f206118258782546125db565b90558382526003602090815260408084208785528252808420335f908152925290205415611921575b801561190357604080513360208201529081019190915261187281606081016106cf565b833b15610b01578161189c9160405180938192637921219560e11b83528a8a893060048701612510565b038183885af18015610960576118ee575b5050604080519485526001600160a01b0391909116602085015233935f5160206134285f395f51905f529190a460015f5160206134085f395f51905f525580f35b816118f891612184565b61077f57845f6118ad565b506040513360208201526020815261191c604082612184565b611872565b8382526005602090815260408084208785528252808420335f9081529252902082905561184e565b506020813d60201161197c575b8161196360209383612184565b81010312610cc4576119776117c5916123d2565b6117bb565b3d9150611956565b50346102b35760403660031901126102b3576004356001600160401b038111610b01576119b59036906004016120fc565b6024356001600160401b038111610afd576119d49036906004016120fc565b90916119de61266e565b6119e9828214612339565b845b818110611a07578560015f5160206134085f395f51905f525580f35b80611a2d611a1b610669600194868a612379565b611a26838789612379565b3590612f3b565b016119eb565b50346102b3576104cc611a453661221a565b91611a4e61266e565b612dca565b503461029c57608036600319011261029c57611a6d612142565b6024356001600160401b03811161029c57611a8c9036906004016120fc565b91906044356001600160401b03811161029c57611aad9036906004016120fc565b9093611ab761212c565b91611ac061266e565b611acb818314612339565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015611bc3575f90611ced575b611b1691509491946126a6565b6001600160a01b0390931692335f5b848110611bce575050506040519433602087015260208652611b48604087612184565b833b1561029c57611b8d5f966109156109039989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a48901916125e8565b03925af18015611bc357611bb0575060015f5160206134085f395f51905f525580f35b611bbc91505f90612184565b5f5f610936565b6040513d5f823e3d90fd5b80611bdc600192878a612379565b35611be882878d612379565b3590885f52600360205260405f20815f5260205260405f20855f52602052611c168260405f2054101561254c565b885f52600560205260405f20815f5260205260405f20855f52602052611c4260405f205442101561258f565b885f52600360205260405f20815f5260205260405f20855f5260205260405f20611c6d8382546125db565b9055885f52600360205260405f20815f5260205260405f20855f5260205260405f205415611cc6575b604080519283526001600160a01b038716602084015233928a915f5160206134285f395f51905f5291a401611b25565b885f52600560205260405f20815f5260205260405f20855f526020525f6040812055611c96565b506020813d602011611d20575b81611d0760209383612184565b8101031261029c57611d1b611b16916123d2565b611b09565b3d9150611cfa565b3461029c57604036600319011261029c5761001a600435611d47612158565b90611d60610605825f525f602052600160405f20015490565b612d42565b3461029c57611d84611d763661221a565b91611d7f61266e565b612b99565b60015f5160206134085f395f51905f5255005b3461029c57602036600319011261029c576020611dc16004355f525f602052600160405f20015490565b604051908152f35b3461029c57608036600319011261029c57611de2612142565b611dea612158565b9060443591606435916001600160401b03831161029c57610306611e129336906004016121d4565b335f908152600260209081526040808320868452909152902080546001600160a01b0319166001600160a01b0390931692831790559091908015611f4c57611e5a90426123b1565b335f52600460205260405f20825f5260205260405f20548111611f2f575b506001546040516390229af760e01b8152306004820152905f90829060249082906001600160a01b03165afa8015611bc3576040915f91611f15575b500151335f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad3611f0060405f20546040519182913395836124f4565b0390a4604051630a85bd0160e11b8152602090f35b611f2991503d805f833e61044b8183612184565b84611eb4565b335f52600460205260405f20825f5260205260405f205582611e78565b505f611e5a565b3461029c57604036600319011261029c576001600160a01b03611f74612142565b165f52600460205260405f206024355f52602052602060405f2054604051908152f35b3461029c57608036600319011261029c576004356001600160401b03811161029c57611fc79036906004016120fc565b906024356001600160401b03811161029c57611fe79036906004016120fc565b9190926044356001600160401b03811161029c576120099036906004016120fc565b949061201361212c565b9261201c61266e565b85811480612086575b61202e90612339565b5f5b81811061204a5760015f5160206134085f395f51905f5255005b8061208086898b612079856120718161206a8f60019b8d61066992612379565b958d612379565b35928a612379565b35916126f2565b01612030565b50858714612025565b3461029c57602036600319011261029c576004359063ffffffff60e01b821680920361029c57602091637965db0b60e01b81149081156120d1575b5015158152f35b630271189760e51b8114915081156120eb575b50836120ca565b6301ffc9a760e01b149050836120e4565b9181601f8401121561029c578235916001600160401b03831161029c576020808501948460051b01011161029c57565b606435906001600160a01b038216820361029c57565b600435906001600160a01b038216820361029c57565b602435906001600160a01b038216820361029c57565b604435906001600160a01b038216820361029c57565b90601f801991011681019081106001600160401b038211176121a557604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b0381116121a557601f01601f191660200190565b81601f8201121561029c578035906121eb826121b9565b926121f96040519485612184565b8284526020838301011161029c57815f926020809301838601378301015290565b606090600319011261029c576004356001600160a01b038116810361029c57906024359060443590565b606090600319011261029c576004356001600160a01b038116810361029c5790602435906044356001600160a01b038116810361029c5790565b606060031982011261029c576004356001600160401b03811161029c57816122a8916004016120fc565b92909291602435906001600160401b03821161029c576122ca916004016120fc565b909160443590565b9080601f8301121561029c578135916001600160401b0383116121a5578260051b90604051936123056020840186612184565b845260208085019282010192831161029c57602001905b8282106123295750505090565b813581526020918201910161231c565b1561234057565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156123895760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b038116810361029c5790565b919082018092116123be57565b634e487b7160e01b5f52601160045260245ffd5b5190811515820361029c57565b81601f8201121561029c578051906123f6826121b9565b926124046040519485612184565b8284526020838301011161029c57815f9260208093018386015e8301015290565b60208183031261029c578051906001600160401b03821161029c570160808183031261029c5760405191608083018381106001600160401b038211176121a557604052612471826123d2565b8352602082015160ff8116810361029c57602084015260408201516001600160401b03811161029c57816124a69184016123df565b604084015260608201516001600160401b03811161029c576124c892016123df565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b92919061250b6020916040865260408601906124d0565b930152565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a060808201819052612549929101906124d0565b90565b1561255357565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561259657565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b919082039182116123be57565b81835290916001600160fb1b03831161029c5760209260051b809284830137010190565b80518210156123895760209160051b010190565b93929161250b9060409286526060602087015260608601906124d0565b6001600160a01b039182168152911660208201526040810191909152608060608201819052612549929101906124d0565b60025f5160206134085f395f51905f5254146126975760025f5160206134085f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b156126ad57565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b6001600160a01b03165f81815260036020908152604080832085845282528083203384529091529020549293919290919061272f9085111561254c565b60015460405163b9209e3360e01b81526001600160a01b038381166004830152909160209183916024918391165afa8015611bc3575f906128c3575b61277591506126a6565b5f82815260056020908152604080832086845282528083203384529091529020546127a29042101561258f565b815f52600360205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f206127d58582546125db565b90555f82815260036020908152604080832086845282528083203384529091529020541561289d575b6040519033602083015260208252612817604083612184565b823b1561029c575f6128419260405180948192637921219560e11b83528989873060048701612510565b038183875af1908115611bc3575f5160206134285f395f51905f52926128889261288d575b50604080519687526001600160a01b0390911660208701523395918291820190565b0390a4565b5f61289791612184565b5f612866565b5f82815260056020908152604080832086845282528083203384529091528120556127fe565b506020813d6020116128f6575b816128dd60209383612184565b8101031261029c576128f1612775916123d2565b61276b565b3d91506128d0565b51906001600160a01b038216820361029c57565b6001600160a01b03811680159392918415612b155750815b60015460405163b9209e3360e01b81526001600160a01b0394851660048201525f9692949092911690602083602481855afa928315611bc3575f93612ad9575b50159283612a68575b50508351602081036129d7575081156129cf575b50156129b4575060208180518101031261029c576001600160a01b03906129b0906020016128fe565b1691565b9291506020815191818082019384920101031261029c575190565b90505f612987565b929593926040146129e757505050565b919350809294509115612a60575b5015612a275760408180518101031261029c576040612a16602083016128fe565b9101516001600160a01b0390911691565b60405162461bcd60e51b8152602060048201526011602482015270556e617574686f72697a6564206461746160781b6044820152606490fd5b90505f6129f5565b60209192935060246040518094819363b9209e3360e01b835260048301525afa908115611bc3575f91612a9f575b50905f80612973565b90506020813d602011612ad1575b81612aba60209383612184565b8101031261029c57612acb906123d2565b5f612a96565b3d9150612aad565b9092506020813d602011612b0d575b81612af560209383612184565b8101031261029c57612b06906123d2565b915f61296a565b3d9150612ae8565b61292a565b15612b2157565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b15612b5d57565b60405162461bcd60e51b815260206004820152601460248201527304475726174696f6e206d757374206265203e20360641b6044820152606490fd5b612bff9060018060a01b031692835f52600260205260405f20835f52602052612bcf60018060a01b0360405f2054163314612b1a565b612bda811515612b56565b835f52600460205260405f20835f5260205260405f20544281115f14612cb4576123b1565b825f52600460205260405f20825f5260205260405f205560245f60018060a01b0360015416604051928380926390229af760e01b82523060048301525afa8015611bc3576040915f91612c9a575b50015191805f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad361288860405f20546040519182913397836124f4565b612cae91503d805f833e61044b8183612184565b5f612c4d565b50426123b1565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615612cf357565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615612d2c5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16612dc4575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b03165f8181526003602090815260408083208584528252808320338452909152902054612e009084111561254c565b5f8181526005602090815260408083208584528252808320338452909152902054612e2d9042101561258f565b805f52600360205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f20612e608482546125db565b90555f818152600360209081526040808320858452825280832033845290915290205415612f15575b803b1561029c57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af18015611bc357612f05575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f612f0f91612184565b5f612ed6565b5f8181526005602090815260408083208584528252808320338452909152812055612e89565b6001600160a01b039081165f818152600260209081526040808320868452909152812054909392612f6e91163314612b1a565b805f52600460205260405f20825f52602052612f9060405f205442101561258f565b805f52600260205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055805f52600460205260405f20825f526020525f6040812055803b1561029c57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af18015611bc357613036575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b6130439193505f90612184565b5f915f61300e565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615612dc4575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b6001600160a01b03165f81815260036020908152604080832085845282528083203384529091529020549092901561322a578061310c61313a921515612b56565b5f848152600560209081526040808320868452825280832033845290915290205442811115612cb4576123b1565b5f83815260056020908152604080832085845282528083203384529091528082209290925560015491516390229af760e01b815230600482015291829060249082906001600160a01b03165afa8015611bc3576040915f91613210575b5001515f83815260036020908152604080832085845282528083203380855290835281842054878552600584528285208786528452828520828652909352928190205490519295937f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa359392839261288892909184612620565b61322491503d805f833e61044b8183612184565b5f613197565b60405162461bcd60e51b815260206004820152600a6024820152694e6f2062616c616e636560b01b6044820152606490fd5b60018060a01b0316805f52600260205260405f20825f5260205261328d60018060a01b0360405f2054163314612b1a565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052959260209183916024918391165afa8015611bc3575f906133cc575b6132d591506126a6565b815f52600460205260405f20835f526020526132f760405f205442101561258f565b815f52600260205260405f20835f5260205260405f206bffffffffffffffffffffffff60a01b8154169055815f52600460205260405f20835f526020525f60408120556040519033602083015260208252613353604083612184565b823b1561029c57835f9161337c6040519485938493635c46a7ef60e11b8552306004860161263d565b038183865af18015611bc3576133bc575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f6133c691612184565b5f61338d565b506020813d6020116133ff575b816133e660209383612184565b8101031261029c576133fa6132d5916123d2565b6132cb565b3d91506133d956fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00d582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1a26469706673582212209fafc74a8b456612a5269b653f2202e476ab1d7de06febd1abcfb3e051ffe51d64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
    },
    "MaliciousBuyer": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address payable",
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
      "bytecode": "0x608034609157601f6104dc38819003918201601f19168301916001600160401b03831184841017609557808492604094855283398101031260915780516001600160a01b0381169190829003609157602001516001600160a01b038116919082900360915760018060a01b03195f5416175f5560018060a01b0319600154161760015560405161043290816100aa8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea264697066735822122063f6bff3af1880dd4d892c53d6670bdc6ee0bafa54eb9c24804d0735b487a65464736f6c634300081c0033"
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "updatedAt",
              "type": "uint256"
            }
          ],
          "name": "setUpdatedAt",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608034605157601f6101d238819003918201601f19168301916001600160401b03831184841017605557808492602094604052833981010312605157515f5542600255604051610168908161006a8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f3560e01c80631ecc7d88146101195780638fb5f171146100e9578063f7a30806146100d15763feaf968c14610046575f80fd5b346100cd575f3660031901126100cd5760ff600154166100965760a05f5460025480155f146100915750425b604051915f835260208301525f604083015260608201525f6080820152f35b610072565b62461bcd60e51b815260206004820152601260248201527150726963652066656564206661696c75726560701b6044820152606490fd5b5f80fd5b346100cd5760203660031901126100cd576004355f55005b346100cd5760203660031901126100cd576004358015158091036100cd5760ff8019600154169116176001555f80f35b346100cd5760203660031901126100cd5760043560025500fea2646970667358221220bb655a828030560b90691d3e177a66d6bd1e7e6b368f7ff201da790908fc938e64736f6c634300081c0033"
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
          "name": "EnforcedPause",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ExpectedPause",
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
          "name": "ListingBought",
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
            }
          ],
          "name": "ListingCanceled",
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
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "privateBuyer",
              "type": "address"
            }
          ],
          "name": "ListingCreated",
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
              "name": "newPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "privateBuyer",
              "type": "address"
            }
          ],
          "name": "ListingUpdated",
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
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiry",
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
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newExpiry",
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
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
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
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
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
              "internalType": "address[]",
              "name": "buyers",
              "type": "address[]"
            }
          ],
          "name": "batchAcceptOffers",
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
              "internalType": "address[]",
              "name": "sellers",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "expectedPrices",
              "type": "uint256[]"
            }
          ],
          "name": "batchBuyFromListings",
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
          "name": "batchCancelListings",
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
            },
            {
              "internalType": "uint256[]",
              "name": "prices",
              "type": "uint256[]"
            }
          ],
          "name": "batchCreateListings",
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
            },
            {
              "internalType": "uint256[]",
              "name": "prices",
              "type": "uint256[]"
            }
          ],
          "name": "batchCreateOffers",
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
            },
            {
              "internalType": "uint256[]",
              "name": "prices",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "expiries",
              "type": "uint256[]"
            }
          ],
          "name": "batchCreateOffersWithExpiries",
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
            },
            {
              "internalType": "uint256[]",
              "name": "prices",
              "type": "uint256[]"
            },
            {
              "internalType": "address[]",
              "name": "privateBuyers",
              "type": "address[]"
            }
          ],
          "name": "batchCreatePrivateListings",
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
              "internalType": "address[]",
              "name": "buyers",
              "type": "address[]"
            }
          ],
          "name": "batchRejectOffers",
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
              "name": "newAmounts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "newPrices",
              "type": "uint256[]"
            }
          ],
          "name": "batchUpdateListings",
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
            },
            {
              "internalType": "uint256[]",
              "name": "prices",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "expiries",
              "type": "uint256[]"
            }
          ],
          "name": "batchUpdateOffers",
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
              "name": "seller",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "expectedPrice",
              "type": "uint256"
            }
          ],
          "name": "buyFromListing",
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
          "name": "cancelListing",
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
          "name": "createListing",
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
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "createOffer",
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
            },
            {
              "internalType": "address",
              "name": "privateBuyer",
              "type": "address"
            }
          ],
          "name": "createPrivateListing",
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
          "name": "listings",
          "outputs": [
            {
              "internalType": "address",
              "name": "seller",
              "type": "address"
            },
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
              "internalType": "address",
              "name": "privateBuyer",
              "type": "address"
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
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "pause",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "paused",
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
          "inputs": [],
          "name": "unpause",
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
              "name": "newAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "newPrivateBuyer",
              "type": "address"
            }
          ],
          "name": "updateListing",
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
              "name": "newAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newPrice",
              "type": "uint256"
            }
          ],
          "name": "updateListing",
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
            },
            {
              "internalType": "uint256",
              "name": "newExpiry",
              "type": "uint256"
            }
          ],
          "name": "updateOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "withdrawERC20",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawETH",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60a03461010357601f6141b438819003918201601f19168301916001600160401b038311848410176101075780849260409485528339810103126101035780610056602061004f6100a49461011b565b920161011b565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600580546001600160a01b03191691831691909117905561012f565b50604051613fdb90816101b9823960805181818161083f015281816108de01528181611458015281816117c90152818161237d01528181612601015281816133ff015281816136dd01528181613e4701528181613e710152613eaf0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820361010357565b6001600160a01b0381165f9081525f5160206141945f395f51905f52602052604090205460ff166101b3576001600160a01b03165f8181525f5160206141945f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a714611c4a57508063058a56ac14611b085780630ad794ea14611a565780631205fd001461199a578063161878e9146119705780631b8e414614611869578063248a9ca3146118365780632f2ff15d146117f85780633013ce29146117b4578063326d0da01461169557806335659fb81461167857806336568abe14611634578063373ce23b1461155d5780633bbb2806146115365780633f4ba83a146114d257806346904840146114aa57806355363724146113525780635c975abb1461133157806361360aae146111665780636bd3a64b146110f557806370cdec3d14611093578063787dce3d146110005780637889ab5014610f6e5780637c3ae2be14610f515780638456cb5914610efa57806391d1485414610eb15780639ac9b2a514610dfb5780639fc80c7214610d0e578063a217fddf14610cf4578063a7c546b314610c7e578063b2ddee0614610bcd578063b3b8d36114610a5d578063c7fff71914610774578063cddc1bc11461074d578063d3f494cc146106e2578063d547741f1461069f578063d55a818514610675578063d898aaf21461064b578063d996475714610552578063e086e5ec146104a0578063e74b981b14610401578063ef71f541146103b5578063f3b5926f14610354578063f4f3b200146102b25763f81b9d5914610217575f61000f565b346102ae5761022536611f25565b929194610230612126565b6102386121df565b858514806102a5575b61024a90612011565b5f5b8581106102665760015f516020613f865f395f51905f5255005b8061029f61027f61027a6001948a87612051565b612075565b61028a838b89612051565b3561029961027a858b8a612051565b916135ae565b0161024c565b50858414610241565b5f80fd5b346102ae5760203660031901126102ae576102cb611c9d565b6102d3612d7b565b6040516370a0823160e01b8152306004820152906001600160a01b0316602082602481845afa908115610349575f91610313575b61001a9250339061215e565b90506020823d602011610341575b8161032e60209383611ff0565b810103126102ae5761001a915190610307565b3d9150610321565b6040513d5f823e3d90fd5b346102ae5760803660031901126102ae5761036d611c9d565b604435906001600160a01b03821682036102ae576103a29161038d612126565b6103956121df565b60643591602435906132b9565b60015f516020613f865f395f51905f5255005b346102ae5760203660031901126102ae577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a335060206004356103f4612d7b565b80600655604051908152a1005b346102ae5760203660031901126102ae5761041a611c9d565b610422612d7b565b6001600160a01b0316801561046957600580546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc25f80a2005b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346102ae575f3660031901126102ae576104b8612d7b565b5f80808047335af13d1561054d573d6001600160401b03811161053957604051906104ed601f8201601f191660200183611ff0565b81525f60203d92013e5b156104fe57005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b634e487b7160e01b5f52604160045260245ffd5b6104f7565b346102ae577f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd61058136611ef7565b939061058e9392936121df565b6001600160a01b0383165f818152600360209081526040808320888452825280832033845290915290819020905191946106219161060a906105cf85611fd5565b80546001600160a01b039081168652600182015460208701819052600283015460408801526003909201541660609095019485521515612089565b82516001600160a01b031690889085908990612ae8565b516040805196875260208701929092526001600160a01b031690850152339380606081015b0390a4005b346102ae576103a261065c36611ef7565b92610668929192612126565b6106706121df565b6122e6565b346102ae576103a261068636611e3f565b93610692939193612126565b61069a6121df565b612f35565b346102ae5760403660031901126102ae5761001a6004356106be611cb3565b906106dd6106d8825f526001602052600160405f20015490565b612dca565b612e90565b346102ae576106f036611ebd565b9160018060a01b03165f52600260205260405f20905f5260205260405f209060018060a01b03165f52602052608060405f208054906001810154906003600282015491015491604051938452602084015260408301526060820152f35b346102ae576103a261075e36611ebd565b91610767612126565b61076f6121df565b6135ae565b346102ae5761078236611ef7565b9261078b612126565b6107936121df565b6001600160a01b03165f818152600260209081526040808320868452825280832033845290915290208054919291908115610a215760065486106109dc578515610998578215610949576107e76001612245565b6040516301ffc9a760e01b81526380ac58cd60e01b600482015290602082602481885afa928315610349575f93600393859161091a575b50610909575b8781811185146108be576108639161083b91612f14565b30337f000000000000000000000000000000000000000000000000000000000000000061386e565b868155836001820155426002820155015560405193845260208401525f60408401527f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be2260603394a460015f516020613f865f395f51905f5255005b908082106108ce575b5050610863565b610902916108db91612f14565b337f000000000000000000000000000000000000000000000000000000000000000061215e565b86886108c7565b6109156001861461229a565b610824565b61093c915060203d602011610942575b6109348183611ff0565b810190612282565b8961081e565b503d61092a565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601760248201527f4e65772070726963652062656c6f77206d696e696d756d0000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b346102ae57610a6b36611d8d565b9597909394919692610a7b6121df565b88821480610bc4575b80610bbb575b80610bb2575b610a9990612011565b5f5b828110610aa457005b6001600160a01b03610ab7828a89612051565b610ac090612075565b161515610acc906120ce565b610ad781848d612051565b610ae090612075565b610aeb828c88612051565b35610af7838a88612051565b35610b03848d87612051565b3590610b10858d8c612051565b610b1990612075565b92610b2394612ae8565b610b2e81848d612051565b610b3790612075565b610b42828c88612051565b35610b4e838c86612051565b35610b5a848b89612051565b3590610b67858d8c612051565b610b7090612075565b6040805192835260208301939093526001600160a01b03908116928201929092523393909116905f516020613f665f395f51905f5290606090a4600101610a9b565b50878714610a90565b50878614610a8a565b50858914610a84565b346102ae5760403660031901126102ae57610be6611c9d565b6001600160a01b03165f81815260036020908152604080832060243580855290835281842033855290925290912060010154610c23901515612089565b5f828152600360208181526040808420858552825280842033855290915282208281556001810183905560028101839055015533917fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4005b346102ae575f516020613f665f395f51905f52610c9a36611f93565b9092939491610ca76121df565b610cbb6001600160a01b03831615156120ce565b610cc8828583888a612ae8565b6040805194855260208501919091526001600160a01b0391821690840152339416918060608101610646565b346102ae575f3660031901126102ae5760206040515f8152f35b346102ae577f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd610d3d36611f93565b909491610d4b9493946121df565b610dd18287838860018060a01b03891698895f52600360205260405f20825f5260205260405f2060018060a01b0333165f52602052610dcc60405f20604051610d9381611fd5565b81546001600160a01b03908116825260018301546020830181905260028401546040840152600390930154166060909101521515612089565b612ae8565b6040805196875260208701919091526001600160a01b039091169085015233938060608101610646565b346102ae57610e0936611cf9565b959493909291610e17612126565b610e1f6121df565b81861480610ea8575b80610e9f575b610e3790612011565b5f5b868110610e535760015f516020613f865f395f51905f5255005b80610e99878a87610e92858f61027a8f998b610e84828f610e7e60019f8361027a91610e8b9a612051565b9b612051565b3596612051565b938c612051565b35926132b9565b01610e39565b50808714610e2e565b50808214610e28565b346102ae5760403660031901126102ae57610eca611cb3565b6004355f52600160205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346102ae575f3660031901126102ae57610f12612d7b565b610f1a6121df565b600160ff195f5416175f557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b346102ae575f3660031901126102ae576020600654604051908152f35b346102ae57610f7c36611f25565b929194610f87612126565b610f8f6121df565b85851480610ff7575b610fa190612011565b5f5b858110610fbd5760015f516020613f865f395f51905f5255005b80610ff1610fd161027a6001948a87612051565b610fdc838b89612051565b35610feb61027a858b8a612051565b916130dc565b01610fa3565b50858414610f98565b346102ae5760203660031901126102ae5760043561101c612d7b565b6103e88111611056576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600455604051908152a1005b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b346102ae575f516020613f665f395f51905f526106466110b236611ef7565b92949193906110bf6121df565b6110cb8482878961278b565b6040805194855260208501919091525f9084015233946001600160a01b0316929081906060820190565b346102ae5761110336611ebd565b6001600160a01b039283165f90815260036020818152604080842095845294815284832093861683529283529083902080546001820154600283015492909301548551918716825293810192909252928101929092529091166060820152608090f35b346102ae5761117436611cf9565b9496906111859694969392936121df565b86851480611328575b8061131f575b61119d90612011565b335f5b8681106111a957005b6001600160a01b036111bc828987612051565b6111c590612075565b165f52600360205260405f206111dc828b8d612051565b355f5260205260405f20825f526020528860405f20604051906111fe82611fd5565b80546001600160a01b0390811683526001820154602084018190526002830154604085015260039092015416606090920191825261123d901515612089565b818c8461124b818d8b612051565b61125490612075565b9261125e92612051565b35848c61126c828d8d612051565b3591611278918a612051565b3590600160a01b600190038551169261129094612ae8565b8b8361129d818c8a612051565b6112a690612075565b936112b092612051565b35906112bd848c88612051565b356112c9858b8b612051565b915160408051928352923560208301526001600160a01b03908116928201929092523393909116907f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd90606090a46001016111a0565b50838614611194565b5083871461118e565b346102ae575f3660031901126102ae57602060ff5f54166040519015158152f35b346102ae5761136036611e71565b929061136a612126565b611375848414612011565b33915f5b8481106113935760015f516020613f865f395f51905f5255005b806113a461027a6001938886612051565b6113af828987612051565b3590838060a01b031690815f52600260205260405f20815f5260205260405f20875f5260205260405f20604051906113e682611fd5565b60038154918284528781015460208501526002810154604085015201546060830152611416575b50505001611379565b61147c90835f52600260205260405f20835f5260205260405f20895f5260205261145460405f2060035f918281558260018201558260028201550155565b51337f000000000000000000000000000000000000000000000000000000000000000061215e565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a487808061140d565b346102ae575f3660031901126102ae576005546040516001600160a01b039091168152602090f35b346102ae575f3660031901126102ae576114ea612d7b565b5f5460ff8116156115275760ff19165f557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b638dfc202b60e01b5f5260045ffd5b346102ae576103a261154736611ebd565b91611550612126565b6115586121df565b6130dc565b346102ae5761156b36611d8d565b61157c989297969195939498612126565b6115846121df565b8183148061162b575b80611622575b80611619575b6115a290612011565b5f5b8381106115be5760015f516020613f865f395f51905f5255005b806116138989898f8f8f9789611605828f959b8f8f61160c9760019f8580936115f161027a836115fe986115f796612051565b9f612051565b3599612051565b3597612051565b3595612051565b3593612f35565b016115a4565b50878114611599565b50878914611593565b5088821461158d565b346102ae5760403660031901126102ae5761164d611cb3565b336001600160a01b038216036116695761001a90600435612e90565b63334bd91960e11b5f5260045ffd5b346102ae575f3660031901126102ae576020600454604051908152f35b346102ae576116a336611e71565b6116b08184959414612011565b335f5b8581106116bc57005b6001906001600160a01b036116d561027a838a8a612051565b165f52600360205260405f206116ec828688612051565b355f5260205260405f20835f526020528160405f20015461170e575b016116b3565b818060a01b0361172261027a838a8a612051565b165f52600360205260405f20611739828688612051565b355f5260205260405f20835f5260205261176760405f2060035f918281558260018201558260028201550155565b61177561027a828989612051565b3390611782838789612051565b3590848060a01b03167fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4611708565b346102ae575f3660031901126102ae576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346102ae5760403660031901126102ae5761001a600435611817611cb3565b906118316106d8825f526001602052600160405f20015490565b612e04565b346102ae5760203660031901126102ae5760206118616004355f526001602052600160405f20015490565b604051908152f35b346102ae5761187736611cf9565b611886979692979491946121df565b81831480611967575b8061195e575b61189e90612011565b5f5b8381106118a957005b8087878b5f516020613f665f395f51905f5261195561192c868f818b8f8f9c8f61191760019f838f918f998f61027a946119249c61191d9a61190b878e61190482611912988f82610e8491610e7e8f8f61027a918591612051565b3594612051565b359261278b565b612051565b9c612051565b3598612051565b35948d612051565b3560405191829133978a8060a01b031695836040905f9294936060820195825260208201520152565b0390a4016118a0565b50878114611895565b5087821461188f565b346102ae576103a261198136611e3f565b9361198d939193612126565b6119956121df565b61253e565b346102ae576119a836611d8d565b6119b9989297969195939498612126565b6119c16121df565b81831480611a4d575b80611a44575b80611a3b575b6119df90612011565b5f5b8381106119fb5760015f516020613f865f395f51905f5255005b80611a358989898f8f8f9789611605828f959b8f8f611a2e9760019f8580936115f161027a836115fe986115f796612051565b359361253e565b016119e1565b508781146119d6565b508789146119d0565b508882146119ca565b346102ae57611a6436611cf9565b9596611a7595949593929193612126565b611a7d6121df565b85881480611aff575b80611af6575b611a9590612011565b5f5b888110611ab15760015f516020613f865f395f51905f5255005b80611af0611ac561027a6001948d87612051565b8a611ad1848c8c612051565b35611ae985611ae1818b8d612051565b35938c612051565b35926122e6565b01611a97565b50818714611a8c565b50818614611a86565b346102ae5760403660031901126102ae57611b21611c9d565b60243590611b2d612126565b6001600160a01b03165f818152600260209081526040808320858452825280832033845290915290819020905191929190611b6782611fd5565b600381549182845260018101546020850152600281015460408501520154606083015215611c05575f838152600260208181526040808420868552825280842033855290915282208281556001810183905590810182905560030155611bcc90611454565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020613f865f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b346102ae5760203660031901126102ae576004359063ffffffff60e01b82168092036102ae57602091637965db0b60e01b8114908115611c8c575b5015158152f35b6301ffc9a760e01b14905083611c85565b600435906001600160a01b03821682036102ae57565b602435906001600160a01b03821682036102ae57565b9181601f840112156102ae578235916001600160401b0383116102ae576020808501948460051b0101116102ae57565b60806003198201126102ae576004356001600160401b0381116102ae5781611d2391600401611cc9565b929092916024356001600160401b0381116102ae5781611d4591600401611cc9565b929092916044356001600160401b0381116102ae5781611d6791600401611cc9565b92909291606435906001600160401b0382116102ae57611d8991600401611cc9565b9091565b60a06003198201126102ae576004356001600160401b0381116102ae5781611db791600401611cc9565b929092916024356001600160401b0381116102ae5781611dd991600401611cc9565b929092916044356001600160401b0381116102ae5781611dfb91600401611cc9565b929092916064356001600160401b0381116102ae5781611e1d91600401611cc9565b92909291608435906001600160401b0382116102ae57611d8991600401611cc9565b60a09060031901126102ae576004356001600160a01b03811681036102ae579060243590604435906064359060843590565b60406003198201126102ae576004356001600160401b0381116102ae5781611e9b91600401611cc9565b92909291602435906001600160401b0382116102ae57611d8991600401611cc9565b60609060031901126102ae576004356001600160a01b03811681036102ae5790602435906044356001600160a01b03811681036102ae5790565b60809060031901126102ae576004356001600160a01b03811681036102ae5790602435906044359060643590565b60606003198201126102ae576004356001600160401b0381116102ae5781611f4f91600401611cc9565b929092916024356001600160401b0381116102ae5781611f7191600401611cc9565b92909291604435906001600160401b0382116102ae57611d8991600401611cc9565b60a09060031901126102ae576004356001600160a01b03811681036102ae57906024359060443590606435906084356001600160a01b03811681036102ae5790565b608081019081106001600160401b0382111761053957604052565b90601f801991011681019081106001600160401b0382111761053957604052565b1561201857565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156120615760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102ae5790565b1561209057565b60405162461bcd60e51b8152602060048201526016602482015275131a5cdd1a5b99c8191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b156120d557565b60405162461bcd60e51b8152602060048201526024808201527f507269766174652062757965722063616e6e6f74206265207a65726f206164646044820152637265737360e01b6064820152608490fd5b60025f516020613f865f395f51905f52541461214f5760025f516020613f865f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f51148216156121be575b6040521561219e5750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b9060018115166121d657823b15153d15161690612193565b503d5f823e3d90fd5b60ff5f54166121ea57565b63d93c066560e01b5f5260045ffd5b1561220057565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b1561224c57565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642065787069727960901b6044820152606490fd5b908160209103126102ae575180151581036102ae5790565b156122a157565b60405162461bcd60e51b815260206004820152601d60248201527f455243373231206f6666657220616d6f756e74206d75737420626520310000006044820152606490fd5b91909160065484106124f95783156124a9576123038215156121f9565b61230d6001612245565b6001600160a01b03165f818152600260209081526040808320868452825280832033845290915290205490919061246d576040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481865afa908115610349575f9161244e575b5061243d575b6123a18430337f000000000000000000000000000000000000000000000000000000000000000061386e565b6040516123ad81611fd5565b8481526003602082018381526040830142815260608401915f8352865f52600260205260405f20885f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015560405193845260208401525f60408401527f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab60603394a4565b6124496001821461229a565b612375565b612467915060203d602011610942576109348183611ff0565b5f61236f565b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4f666665722070726963652062656c6f77206d696e696d756d000000000000006044820152606490fd5b939190929360065485106124f95784156124a95761255d8215156121f9565b821580156126df575b61256f90612245565b6001600160a01b03165f818152600260209081526040808320878452825280832033845290915290205490929061246d576040516301ffc9a760e01b81526380ac58cd60e01b600482015291602083602481875afa8015610349577f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab935f916126c0575b506126af575b6126258630337f000000000000000000000000000000000000000000000000000000000000000061386e565b60405161263181611fd5565b868152600360208201838152604083014281526060840191868352885f52600260205260405f208a5f5260205260405f2060018060a01b0333165f5260205260405f2094518555516001850155516002840155519101556126aa6040519283923398846040919493926060820195825260208201520152565b0390a4565b6126bb6001821461229a565b6125f9565b6126d9915060203d602011610942576109348183611ff0565b5f6125f3565b50428311612566565b156126ef57565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b51906001600160a01b03821682036102ae57565b1561274657565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b929190928215612aa3576127a08215156121f9565b6001600160a01b03165f81815260036020908152604080832087845282528083203384529091529020600101549091901561285e575b600392604051946127e686611fd5565b33808752602080880193845260408089019586525f60608a018181529781528883528181209481529382528084209284529190529020945185546001600160a01b039182166001600160a01b031991821617875591516001870155915160028601559151939092018054939092169216919091179055565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481865afa908115610349575f91612a84575b50156129775760018103612928576040516331a9108f60e11b81526004810185905292602084602481865afa938415610349575f946128e8575b506003936128e1906001600160a01b0316331461273f565b92506127d6565b93506020843d602011612920575b8161290360209383611ff0565b810103126102ae576128e161291960039561272b565b94506128c9565b3d91506128f6565b60405162461bcd60e51b815260206004820152602160248201527f455243373231206c697374696e67206d757374206861766520616d6f756e74206044820152603160f81b6064820152608490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481865afa908115610349575f91612a65575b5015612a2957604051627eeac760e11b81523360048201526024810185905292602084604481865afa938415610349575f946129f3575b506129ee8260039510156126e8565b6128e1565b93506020843d602011612a21575b81612a0e60209383611ff0565b810103126102ae579251926129ee6129df565b3d9150612a01565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b612a7e915060203d602011610942576109348183611ff0565b5f6129a8565b612a9d915060203d602011610942576109348183611ff0565b5f61288f565b60405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e2030000000006044820152606490fd5b93919092938415612aa357612afe8215156121f9565b6001600160a01b03165f818152600360209081526040808320878452825280832033845290915290206001015490949015612bc1575b60039360405195612b4487611fd5565b3380885260208089019485526040808a019687526001600160a01b0397881660608b019081525f9485528983528185209585529482528084209284529190529020955186546001600160a01b0319908116918616919091178755915160018701559151600286015590519390920180549092169216919091179055565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481895afa908115610349575f91612d5c575b5015612c8b5760018203612928576040516331a9108f60e11b81526004810185905293602085602481895afa948515610349575f95612c4b575b50600394612c44906001600160a01b0316331461273f565b9350612b34565b94506020853d602011612c83575b81612c6660209383611ff0565b810103126102ae57612c44612c7c60039661272b565b9550612c2c565b3d9150612c59565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481895afa908115610349575f91612d3d575b5015612a2957604051627eeac760e11b81523360048201526024810185905293602085604481895afa948515610349575f95612d07575b50612d028360039610156126e8565b612c44565b94506020853d602011612d35575b81612d2260209383611ff0565b810103126102ae57935193612d02612cf3565b3d9150612d15565b612d56915060203d602011610942576109348183611ff0565b5f612cbc565b612d75915060203d602011610942576109348183611ff0565b5f612bf2565b335f9081527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49602052604090205460ff1615612db357565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260016020908152604080832033845290915290205460ff1615612dee5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f8181526001602090815260408083206001600160a01b038616845290915290205460ff16612e8a575f8181526001602081815260408084206001600160a01b0396909616808552959091528220805460ff19169091179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526001602090815260408083206001600160a01b038616845290915290205460ff1615612e8a575f8181526001602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b91908203918211612f2157565b634e487b7160e01b5f52601160045260245ffd5b6001600160a01b03165f818152600260209081526040808320858452825280832033845290915290208054949592949193919291908315610a215760065487106109dc578615610998578115610949578215801561308f575b612f9790612245565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481895afa918215610349577f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be229585936003935f91613070575b5061305f575b898181111561303b5761300b9161083b91612f14565b888155600181018490554260028201550155604080519687526020870191909152850152339380606081016126aa565b9080821061304b575b505061300b565b613058916108db91612f14565b885f613044565b61306b6001861461229a565b612ff5565b613089915060203d602011610942576109348183611ff0565b5f612fef565b50428311612f8e565b1561309f57565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b6001600160a01b038181165f8181526002602090815260408083208784528252808320948816835293905282902091519194909261311983611fd5565b855480845261314b600360018901549860208701998a5260028101546040880152015491606086019283521515613098565b5180159081156132ae575b5015613279576131d96131e492855f52600260205260405f20875f5260205260405f2060018060a01b0382165f526020526131a560405f2060035f918281558260018201558260028201550155565b5f8681526003602090815260408083208a8452825280832033845290915290206001015461321a575b875190338885613931565b825190853391613da9565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a4565b5f8681526003602081815260408084208b855282528084203385529091528220828155600181018390556002810183905501553387877fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a46131ce565b60405162461bcd60e51b815260206004820152600d60248201526c13d999995c88195e1c1a5c9959609a1b6044820152606490fd5b90504211155f613156565b9290919260018060a01b03811691825f52600360205260405f20845f5260205260405f2060018060a01b0386165f5260205260405f20916040516132fc81611fd5565b83546001600160a01b0390811682526001850154602083018181526002870154604085019081526003909701549092166060909301928352909390613342901515612089565b83510361355757516001600160a01b0316801590811561354d575b50156134e9575f84815260036020818152604080842089855282528084206001600160a01b038b168552825280842084815560018101859055600280820186905593018490558784529181528183208884528152818320338452905290819020905161343b92916133cd82611fd5565b600381549182845260018101546020850152600281015460408501520154606083015261347f575b50613423835130337f000000000000000000000000000000000000000000000000000000000000000061386e565b613431845133898985613931565b8686845192613da9565b519051906040519460018060a01b03168552602085015260408401527f110d72c9f92ff669bf5211e868578c38dff8ce680bdf8b69ad34a1c5c106829860603394a4565b5f8681526002602081815260408084208b85528252808420338552909152822082815560018101839055908101829055600301556134bc90611454565b3386867f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a45f6133f5565b60405162461bcd60e51b815260206004820152603660248201527f50726976617465206c697374696e673a206f6e6c7920746865207370656369666044820152756965642062757965722063616e20707572636861736560501b6064820152608490fd5b905033145f61335d565b60405162461bcd60e51b815260206004820152602960248201527f5072696365206d69736d617463683a206c697374696e672070726963652068616044820152681cc818da185b99d95960ba1b6064820152608490fd5b60018060a01b0316805f52600260205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f20604051906135eb82611fd5565b61361a815480845260036001840154936020860194855260028101546040870152015460608501521515613098565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa908115610349575f9161384f575b501561377c57506040516331a9108f60e11b81526004810184905290602082602481865afa918215610349575f9261373b575b5061370191613697906001600160a01b0316331461273f565b825f52600260205260405f20845f5260205260405f2060018060a01b0386165f526020526136d960405f2060035f918281558260018201558260028201550155565b51847f000000000000000000000000000000000000000000000000000000000000000061215e565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a4565b91506020823d602011613774575b8161375660209383611ff0565b810103126102ae5761369761376d6137019361272b565b925061367e565b3d9150613749565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa908115610349575f91613830575b5015612a2957604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610349575f916137fc575b506137f790613701935111156126e8565b613697565b90506020813d602011613828575b8161381760209383611ff0565b810103126102ae57516137016137e6565b3d915061380a565b613849915060203d602011610942576109348183611ff0565b5f6137b0565b613868915060203d602011610942576109348183611ff0565b5f61364b565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f51148216156138bf575b6040525f6060521561219e5750565b9060018115166121d657823b15153d151616906138b0565b156138de57565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201525f95929493926001600160a01b039092169190602081602481865afa908115610349575f91613d8a575b5015613be557600103613ba1576040516331a9108f60e11b81526004810185905291602083602481855afa928315613af6578693613b65575b506001600160a01b038181169316839003613b205760405163e985e9c560e01b81526001600160a01b03919091166004820152306024820152602081604481855afa908115613af6578691613b01575b508015613a7a575b613a0f906138d7565b803b15613a7657849291836064926040519687958694632142170760e11b8652600486015260018060a01b0316602485015260448401525af18015613a6b57613a56575050565b613a61828092611ff0565b613a685750565b80fd5b6040513d84823e3d90fd5b8480fd5b5060405163020604bf60e21b815260048101859052602081602481855afa8015613af6578690613ab7575b6001600160a01b031630149050613a06565b506020813d602011613aee575b81613ad160209383611ff0565b81010312613aea57613ae5613a0f9161272b565b613aa5565b8580fd5b3d9150613ac4565b6040513d88823e3d90fd5b613b1a915060203d602011610942576109348183611ff0565b5f6139fe565b60405162461bcd60e51b815260206004820152601d60248201527f46726f6d206164647265737320646f6573206e6f74206f776e204e46540000006044820152606490fd5b9092506020813d602011613b99575b81613b8160209383611ff0565b81010312613aea57613b929061272b565b915f6139ae565b3d9150613b74565b606460405162461bcd60e51b815260206004820152602060248201527f455243373231207472616e7366657220616d6f756e74206d75737420626520316044820152fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b600482015294955093909190602081602481865afa908115610349575f91613d6b575b5015612a2957604051627eeac760e11b81526001600160a01b038216600482015260248101869052602081604481865afa80156103495785905f90613d35575b613c69925010156126e8565b60405163e985e9c560e01b81526001600160a01b0382166004820152306024820152602081604481865afa801561034957613cab915f91613d16575b506138d7565b813b156102ae575f60c49281956040519788968795637921219560e11b875260018060a01b0316600487015260018060a01b031660248601526044850152606484015260a060848401528160a48401525af1801561034957613d0a5750565b5f613d1491611ff0565b565b613d2f915060203d602011610942576109348183611ff0565b5f613ca5565b50506020813d602011613d63575b81613d5060209383611ff0565b810103126102ae5784613c699151613c5d565b3d9150613d43565b613d84915060203d602011610942576109348183611ff0565b5f613c1d565b613da3915060203d602011610942576109348183611ff0565b5f613975565b9190600454808502908582041485151715612f21576127109004925f9060405f93604482518094819363152a902d60e11b835260048301528a602483015260018060a01b03165afa805f925f92613f23575b50613f09575b5050808401808511612f215785613d1496869211613eed575b613e28613e2d928492612f14565b612f14565b9380151580613ed9575b613e9c575b5080613e6b575b50507f000000000000000000000000000000000000000000000000000000000000000061215e565b613e95917f000000000000000000000000000000000000000000000000000000000000000061215e565b5f80613e43565b600554613ed391906001600160a01b03167f000000000000000000000000000000000000000000000000000000000000000061215e565b5f613e3c565b506005546001600160a01b03161515613e37565b819250613e28613f00613e2d9383612f14565b93925050613e1a565b6001600160a01b03821615613e0157915091505f80613e01565b925090506040823d604011613f5d575b81613f4060409383611ff0565b810103126102ae576020613f538361272b565b920151905f613dfb565b3d9150613f3356fe1da60d1ebc86294425cc61f1c7dc4439f6cb8a970869c2764900c57f5828a2e19b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212206a3dbabb489178f3369117d198f056c27909a227fa1e3c6fbaec41af33df135464736f6c634300081c0033a6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220c871d25b53f15cdec17aeefec03b9ea6b45f72a69db93a0b3e2e2c37c546003b64736f6c634300081c0033"
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
              "components": [
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
                }
              ],
              "indexed": false,
              "internalType": "struct Treasury.Call[]",
              "name": "calls",
              "type": "tuple[]"
            }
          ],
          "name": "Proposed",
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
          "name": "executeBatch",
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
            }
          ],
          "name": "getProposalCalls",
          "outputs": [
            {
              "components": [
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
                }
              ],
              "internalType": "struct Treasury.Call[]",
              "name": "",
              "type": "tuple[]"
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
              "components": [
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
                }
              ],
              "internalType": "struct Treasury.Call[]",
              "name": "calls",
              "type": "tuple[]"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "proposeBatch",
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
      "bytecode": "0x60a0604052346102ac5761269680380380610019816102c4565b92833981016060828203126102ac5781516001600160401b0381116102ac5782019080601f830112156102ac578151916001600160401b0383116102b0578260051b9060208061006a8185016102c4565b8096815201928201019283116102ac57602001905b8282106102945750505061009a6040602084015193016102e9565b81511561025a578215158061024f575b15610216576001600160a01b03169182156101dc575f5b825181101561016757600581901b8301602001516001600160a01b031690811561013257816100f1600193610386565b6100fd575b50016100c1565b8061012b917f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a26102fd565b505f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600355608052604051908152a160405161228390816103f38239608051818181610271015281816105cd015281816108ff01528181610bdc01528181610d4501528181610efb0152611c950152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b602080916102a1846102e9565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b038111838210176102b057604052565b51906001600160a01b03821682036102ac57565b6001600160a01b0381165f9081525f5160206126765f395f51905f52602052604090205460ff16610381576001600160a01b03165f8181525f5160206126765f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b805f52600260205260405f2054155f1461038157600154680100000000000000008110156102b05760018101806001558110156103de57819060015f5260205f200155600154905f52600260205260405f2055600190565b634e487b7160e01b5f52603260045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa895146113c2578063013cf08b1461136557806301ffc9a7146112f55780630d61b5191461119a5780631133b21014611098578063150b7a02146110435780631626ba7e14610ff2578063173825d914610f7557806319822f7c14610ebf5780632358d5a814610e73578063248a9ca314610e495780632f2ff15d14610e0c5780632f54bf6e14610dca57806336568abe14610d865780633e1b081214610cfc57806342cde4e814610cdf57806348e2c1b914610bca5780635d35a3d914610ace578063694e80c314610a6a5780637065cb48146109d657806374420f4c146108c457806391d148541461087c5780639330a2221461074f5780639f690535146106a2578063a0e67e2b14610616578063a217fddf146105fc578063b0d691fe146105b8578063bc197c8114610523578063c7f758a8146102f1578063d087d28814610240578063d547741f146101fe578063da35c664146101e15763f23a6e610361000e57346101dd5760a03660031901126101dd576101a16114f0565b506101aa611506565b506084356001600160401b0381116101dd576101ca90369060040161156d565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b346101dd575f3660031901126101dd576020600654604051908152f35b346101dd5760403660031901126101dd5761001860043561021d611506565b9061023b610236825f525f602052600160405f20015490565b611eb2565b611f72565b346101dd575f3660031901126101dd57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b3575b604051908152602090f35b506020813d6020116102de575b816102cd602093836114b8565b810103126101dd57602090516102a8565b3d91506102c0565b6040513d5f823e3d90fd5b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f208054610325816114d9565b9061033360405192836114b8565b808252601f19610342826114d9565b01366020840137610352816114d9565b61035f60405191826114b8565b81815261036b826114d9565b602082019490601f1901368637610381836114d9565b9261038f60405194856114b8565b808452601f1961039e826114d9565b015f5b8181106105035750505f5b818110610496575050600260018201549101549160206103d76040519660e0885260e0880190611703565b918683038288015251918281520195905f5b818110610480575050508385036040850152825180865260208601906020808260051b8901019501915f905b8282106104555760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b90919295602080610472600193601f198d82030186528a5161165e565b980192019201909291610415565b82518852602097880197909201916001016103e9565b806104a36001928561179c565b50828060a01b039054166104b78289611b07565b52816104c3828661179c565b5001546104d08287611b07565b526104e760026104e0838761179c565b5001611bf2565b6104f18288611b07565b526104fc8187611b07565b50016103ac565b8060606020809389010152016103a1565b63635e873760e01b5f5260045ffd5b346101dd5760a03660031901126101dd5761053c6114f0565b50610545611506565b506044356001600160401b0381116101dd5761056590369060040161173f565b506064356001600160401b0381116101dd5761058590369060040161173f565b506084356001600160401b0381116101dd576105a590369060040161156d565b5060405163bc197c8160e01b8152602090f35b346101dd575f3660031901126101dd576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346101dd575f3660031901126101dd5760206040515f8152f35b346101dd575f3660031901126101dd5760405180602060015491828152019060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f5b81811061068c5761068885610674818703826114b8565b604051918291602083526020830190611703565b0390f35b825484526020909301926001928301920161065d565b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f2080546106d6816114d9565b916106e460405193846114b8565b81835260208301905f5260205f205f915b83831061070a57604051806106888782611682565b6003602060019260405161071d81611489565b848060a01b038654168152848601548382015261073c60028701611bf2565b60408201528152019201920191906106f5565b346101dd5761075d366115e8565b9493959261077261076d87611c92565b611ce1565b80851480610873575b61078490611b73565b61078d856114d9565b9461079b60405196876114b8565b808652601f196107aa826114d9565b015f5b8181106108495750505f5b8181106107d35760206107cb8989611830565b604051908152f35b80896108286107f883876107f26107ed6001988a8f611bb3565b611bc3565b94611bb3565b3561080484898b611bd7565b90916040519461081386611489565b878060a01b0316855260208501523691611537565b6040820152610837828a611b07565b526108428189611b07565b50016107b8565b60209060405161085881611489565b5f81525f838201526060604082015282828b010152016107ad565b5080821461077b565b346101dd5760403660031901126101dd57610895611506565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760803660031901126101dd576108dd6114f0565b6044356001600160401b0381116101dd576108fc90369060040161158b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316149290919083156109a95760016003540361099a575f9283925b81604051928392833781018481520391602435905af161095f611801565b501561098b5761096b57005b6064355f90815260046020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b903033036109bc575b905f928392610941565b906109c633611ce1565b60016003540361099a57906109b2565b346101dd5760203660031901126101dd576109ef6114f0565b303303610a57576001600160a01b03168015610a4857610a0e81612116565b15610a39577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b346101dd5760203660031901126101dd57600435303303610a575780158015610ac3575b61099a576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600355604051908152a1005b506001548111610a8e565b346101dd57610af3610adf36611473565b610aee61076d82949394611c92565b611c92565b60065482101561051457815f52600560205260405f20600181015460ff8116610bbb5760081c60ff16610bac57600381019060018060a01b0383165f528160205260ff60405f205416610b9d5760029160018060a01b0384165f5260205260405f20600160ff1982541617905501610b6b8154611ae5565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b346101dd57610bd8366115e8565b95337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161495909493908615610cb55760016003540361099a575b81811480610cac575b610c2d90611b73565b5f5b818110610c5b578888610c3e57005b5f90815260046020526040902080546001600160a01b0319169055005b5f80610c6b6107ed84868c611bb3565b610c7684878b611bb3565b35610c8285898b611bd7565b9190826040519384928337810185815203925af1610c9e611801565b501561098b57600101610c2f565b50818314610c24565b333014610c1b57610cc533611ce1565b60016003540315610c1b5763aabd5a0960e01b5f5260045ffd5b346101dd575f3660031901126101dd576020600354604051908152f35b346101dd5760203660031901126101dd576004356001600160c01b038116908190036101dd57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b357604051908152602090f35b346101dd5760403660031901126101dd57610d9f611506565b336001600160a01b03821603610dbb5761001890600435611f72565b63334bd91960e11b5f5260045ffd5b346101dd5760203660031901126101dd576020610e026001600160a01b03610df06114f0565b165f52600260205260405f2054151590565b6040519015158152f35b346101dd5760403660031901126101dd57610018600435610e2b611506565b90610e44610236825f525f602052600160405f20015490565b611eea565b346101dd5760203660031901126101dd5760206107cb6004355f525f602052600160405f20015490565b346101dd5760403660031901126101dd57610e8c611506565b6004355f526005602052600360405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760603660031901126101dd576004356001600160401b0381116101dd57806004019061012060031982360301126101dd57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610a5757602092610f3d610104610f47930182611b41565b9160243590611d92565b9080610f57575b50604051908152f35b5f8080809381604051610f6a89826114b8565b52335af15082610f4e565b346101dd5760203660031901126101dd57610f8e6114f0565b303303610a57576001600160a01b0316610fa781612007565b15610fe357600154600354811061099a571561099a577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b346101dd5760403660031901126101dd576024356001600160401b0381116101dd57611030611027602092369060040161158b565b90600435611b1b565b6040516001600160e01b03199091168152f35b346101dd5760803660031901126101dd5761105c6114f0565b50611065611506565b506064356001600160401b0381116101dd5761108590369060040161156d565b50604051630a85bd0160e11b8152602090f35b346101dd5760403660031901126101dd576004356001600160401b0381116101dd57366023820112156101dd5780600401356110d3816114d9565b916110e160405193846114b8565b8183526024602084019260051b820101903682116101dd5760248101925b8284106111145760206107cb60243587611830565b83356001600160401b0381116101dd578201606060231982360301126101dd576040519161114183611489565b60248201356001600160a01b03811681036101dd578352604482013560208401526064820135926001600160401b0384116101dd5761118a60209493602486953692010161156d565b60408201528152019301926110ff565b60203660031901126101dd5760043560065481101561051457805f52600560205260405f2060018101805460ff8116610bbb5760ff8160081c16610bac576002830154600354116112e65760ff191660011790555f5b81548110156112bf57611203818361179c565b50546001600160a01b0316600161121a838561179c565b5001546002611229848661179c565b500190604051915f9080549061123e826117c9565b91600181169081156112a85750600114611276575b5050915f939181859403925af1611268611801565b501561098b576001016111f0565b9091505f5260205f205f905b82821061129457505082018183611253565b600181602092548488015201910190611282565b60ff19168652505080151502830190508183611253565b827fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b346101dd5760203660031901126101dd5760043563ffffffff60e01b81168091036101dd57602090637965db0b60e01b811490811561133a575b506040519015158152f35b630271189760e51b811491508115611354575b508261132f565b6301ffc9a760e01b1490508261134d565b346101dd5760203660031901126101dd576004355f526005602052608060405f20600260018201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b346101dd576113db6113d336611473565b919091611c92565b60065482101561051457815f526005602052600160405f20019081549060ff8216610bbb5760ff8260081c16610bac57601082901c6001600160a01b039081169116141580611469575b61145a5761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415611425565b60409060031901126101dd576004359060243590565b606081019081106001600160401b038211176114a457604052565b634e487b7160e01b5f52604160045260245ffd5b90601f801991011681019081106001600160401b038211176114a457604052565b6001600160401b0381116114a45760051b60200190565b600435906001600160a01b03821682036101dd57565b602435906001600160a01b03821682036101dd57565b6001600160401b0381116114a457601f01601f191660200190565b9291926115438261151c565b9161155160405193846114b8565b8294818452818301116101dd578281602093845f960137010152565b9080601f830112156101dd5781602061158893359101611537565b90565b9181601f840112156101dd578235916001600160401b0383116101dd57602083818601950101116101dd57565b9181601f840112156101dd578235916001600160401b0383116101dd576020808501948460051b0101116101dd57565b60806003198201126101dd576004356001600160401b0381116101dd5781611612916004016115b8565b929092916024356001600160401b0381116101dd5781611634916004016115b8565b92909291604435906001600160401b0382116101dd57611656916004016115b8565b909160643590565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b8383106116b457505050505090565b90919293946020806116f4600193603f19868203018752606060408b51878060a01b0381511684528581015186850152015191816040820152019061165e565b970193019301919392906116a5565b90602080835192838152019201905f5b8181106117205750505090565b82516001600160a01b0316845260209384019390920191600101611713565b9080601f830112156101dd578135611756816114d9565b9261176460405194856114b8565b81845260208085019260051b8201019283116101dd57602001905b82821061178c5750505090565b813581526020918201910161177f565b80548210156117b5575f52600360205f20910201905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c921680156117f7575b60208310146117e357565b634e487b7160e01b5f52602260045260245ffd5b91607f16916117d8565b3d1561182b573d906118128261151c565b9161182060405193846114b8565b82523d5f602084013e565b606090565b9061183d61076d82611c92565b815115611aaf5761184d90611c92565b906006549261185b84611ae5565b600655835f52600560205260405f20935f5b83518110156119f9576118808185611b07565b518654600160401b8110156114a45780600161189f920189558861179c565b6119e657815181546001600160a01b0319166001600160a01b03909116178155602082015160018201556040909101518051600290920191906001600160401b0382116114a4576118f083546117c9565b601f81116119a1575b50602090601f831160011461193a576001949392915f918361192f575b50505f19600383901b1c191690841b1790555b0161186d565b015190505f80611916565b90601f19831691845f52815f20925f5b818110611989575091600196959492918388959310611971575b505050811b019055611929565b01515f1960f88460031b161c191690555f8080611964565b9293602060018192878601518155019501930161194a565b835f5260205f20601f840160051c810191602085106119dc575b601f0160051c01905b8181106119d157506118f9565b5f81556001016119c4565b90915081906119bb565b634e487b7160e01b5f525f60045260245ffd5b506001858101805462010000600160b01b031916601087901b62010000600160b01b0316179055604051929591946001600160a01b031693909260029291859187917f2e54f43789a6ca510a425f049aff6a8d4c444efb21fce5c23e86cfed6c59369d91908190611a6a9082611682565b0390a3835f526003810160205260405f208360ff198254161790550155817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a390565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b5f198114611af35760010190565b634e487b7160e01b5f52601160045260245ffd5b80518210156117b55760209160051b010190565b90611b269291611cff565b611b36576001600160e01b031990565b630b135d3f60e11b90565b903590601e19813603018212156101dd57018035906001600160401b0382116101dd576020019181360383136101dd57565b15611b7a57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156117b55760051b0190565b356001600160a01b03811681036101dd5790565b908210156117b557611bee9160051b810190611b41565b9091565b9060405191825f825492611c05846117c9565b8084529360018116908115611c705750600114611c2c575b50611c2a925003836114b8565b565b90505f9291925260205f20905f915b818310611c54575050906020611c2a928201015f611c1d565b6020919350806001915483858901015201910190918492611c3b565b905060209250611c2a94915060ff191682840152151560051b8201015f611c1d565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614611cc757503390565b5f908152600460205260409020546001600160a01b031690565b6001600160a01b03165f9081526002602052604090205415610fe357565b90611d3f611d23611d1a611d14368786611537565b856120dc565b9092919261216b565b6001600160a01b03165f90815260026020526040902054151590565b611d8a5761158892611d84611d1a92611d23947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611537565b906120dc565b505050600190565b91929092611da4611d14368484611537565b50949080956004811015611e7f571590811591611e93575b50611df7575b505050602001355f52600460205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611e3493945090611d84917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611537565b50919080926004811015611e7f571590811591611e60575b50611e59575f8080611dc2565b5050600190565b6001600160a01b03165f90815260026020526040812054159150611e4c565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260026020526040812054159150611dbc565b5f8181526020818152604080832033845290915290205460ff1615611ed45750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611f6c575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611f6c575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b80548210156117b5575f5260205f2001905f90565b5f818152600260205260409020548015611f6c575f198101818111611af3576001545f19810191908211611af35781810361208e575b505050600154801561207a575f1901612057816001611ff2565b8154905f199060031b1b191690556001555f5260026020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b6120c661209f6120b0936001611ff2565b90549060031b1c9283926001611ff2565b819391549060031b91821b915f19901b19161790565b90555f52600260205260405f20555f808061203d565b815191906041830361210c576121059250602082015190606060408401519301515f1a906121cb565b9192909190565b50505f9160029190565b805f52600260205260405f2054155f1461216657600154600160401b8110156114a45761214f6120b08260018594016001556001611ff2565b9055600154905f52600260205260405f2055600190565b505f90565b6004811015611e7f578061217d575050565b600181036121945763f645eedf60e01b5f5260045ffd5b600281036121af575063fce698f760e01b5f5260045260245ffd5b6003146121b95750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411612242579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa156102e6575f516001600160a01b0381161561223857905f905f90565b505f906001905f90565b5050505f916003919056fea264697066735822122062ced14a06cb99d0494e07adef1627a1edcf532ca8930a7e9b0ff47bae10898d64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608080604052346015576129c1908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b90604093929351906126968083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b93909192866126969161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a0604052346102ac5761269680380380610019816102c4565b92833981016060828203126102ac5781516001600160401b0381116102ac5782019080601f830112156102ac578151916001600160401b0383116102b0578260051b9060208061006a8185016102c4565b8096815201928201019283116102ac57602001905b8282106102945750505061009a6040602084015193016102e9565b81511561025a578215158061024f575b15610216576001600160a01b03169182156101dc575f5b825181101561016757600581901b8301602001516001600160a01b031690811561013257816100f1600193610386565b6100fd575b50016100c1565b8061012b917f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a26102fd565b505f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600355608052604051908152a160405161228390816103f38239608051818181610271015281816105cd015281816108ff01528181610bdc01528181610d4501528181610efb0152611c950152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b602080916102a1846102e9565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b038111838210176102b057604052565b51906001600160a01b03821682036102ac57565b6001600160a01b0381165f9081525f5160206126765f395f51905f52602052604090205460ff16610381576001600160a01b03165f8181525f5160206126765f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b805f52600260205260405f2054155f1461038157600154680100000000000000008110156102b05760018101806001558110156103de57819060015f5260205f200155600154905f52600260205260405f2055600190565b634e487b7160e01b5f52603260045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa895146113c2578063013cf08b1461136557806301ffc9a7146112f55780630d61b5191461119a5780631133b21014611098578063150b7a02146110435780631626ba7e14610ff2578063173825d914610f7557806319822f7c14610ebf5780632358d5a814610e73578063248a9ca314610e495780632f2ff15d14610e0c5780632f54bf6e14610dca57806336568abe14610d865780633e1b081214610cfc57806342cde4e814610cdf57806348e2c1b914610bca5780635d35a3d914610ace578063694e80c314610a6a5780637065cb48146109d657806374420f4c146108c457806391d148541461087c5780639330a2221461074f5780639f690535146106a2578063a0e67e2b14610616578063a217fddf146105fc578063b0d691fe146105b8578063bc197c8114610523578063c7f758a8146102f1578063d087d28814610240578063d547741f146101fe578063da35c664146101e15763f23a6e610361000e57346101dd5760a03660031901126101dd576101a16114f0565b506101aa611506565b506084356001600160401b0381116101dd576101ca90369060040161156d565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b346101dd575f3660031901126101dd576020600654604051908152f35b346101dd5760403660031901126101dd5761001860043561021d611506565b9061023b610236825f525f602052600160405f20015490565b611eb2565b611f72565b346101dd575f3660031901126101dd57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b3575b604051908152602090f35b506020813d6020116102de575b816102cd602093836114b8565b810103126101dd57602090516102a8565b3d91506102c0565b6040513d5f823e3d90fd5b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f208054610325816114d9565b9061033360405192836114b8565b808252601f19610342826114d9565b01366020840137610352816114d9565b61035f60405191826114b8565b81815261036b826114d9565b602082019490601f1901368637610381836114d9565b9261038f60405194856114b8565b808452601f1961039e826114d9565b015f5b8181106105035750505f5b818110610496575050600260018201549101549160206103d76040519660e0885260e0880190611703565b918683038288015251918281520195905f5b818110610480575050508385036040850152825180865260208601906020808260051b8901019501915f905b8282106104555760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b90919295602080610472600193601f198d82030186528a5161165e565b980192019201909291610415565b82518852602097880197909201916001016103e9565b806104a36001928561179c565b50828060a01b039054166104b78289611b07565b52816104c3828661179c565b5001546104d08287611b07565b526104e760026104e0838761179c565b5001611bf2565b6104f18288611b07565b526104fc8187611b07565b50016103ac565b8060606020809389010152016103a1565b63635e873760e01b5f5260045ffd5b346101dd5760a03660031901126101dd5761053c6114f0565b50610545611506565b506044356001600160401b0381116101dd5761056590369060040161173f565b506064356001600160401b0381116101dd5761058590369060040161173f565b506084356001600160401b0381116101dd576105a590369060040161156d565b5060405163bc197c8160e01b8152602090f35b346101dd575f3660031901126101dd576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346101dd575f3660031901126101dd5760206040515f8152f35b346101dd575f3660031901126101dd5760405180602060015491828152019060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f5b81811061068c5761068885610674818703826114b8565b604051918291602083526020830190611703565b0390f35b825484526020909301926001928301920161065d565b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f2080546106d6816114d9565b916106e460405193846114b8565b81835260208301905f5260205f205f915b83831061070a57604051806106888782611682565b6003602060019260405161071d81611489565b848060a01b038654168152848601548382015261073c60028701611bf2565b60408201528152019201920191906106f5565b346101dd5761075d366115e8565b9493959261077261076d87611c92565b611ce1565b80851480610873575b61078490611b73565b61078d856114d9565b9461079b60405196876114b8565b808652601f196107aa826114d9565b015f5b8181106108495750505f5b8181106107d35760206107cb8989611830565b604051908152f35b80896108286107f883876107f26107ed6001988a8f611bb3565b611bc3565b94611bb3565b3561080484898b611bd7565b90916040519461081386611489565b878060a01b0316855260208501523691611537565b6040820152610837828a611b07565b526108428189611b07565b50016107b8565b60209060405161085881611489565b5f81525f838201526060604082015282828b010152016107ad565b5080821461077b565b346101dd5760403660031901126101dd57610895611506565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760803660031901126101dd576108dd6114f0565b6044356001600160401b0381116101dd576108fc90369060040161158b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316149290919083156109a95760016003540361099a575f9283925b81604051928392833781018481520391602435905af161095f611801565b501561098b5761096b57005b6064355f90815260046020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b903033036109bc575b905f928392610941565b906109c633611ce1565b60016003540361099a57906109b2565b346101dd5760203660031901126101dd576109ef6114f0565b303303610a57576001600160a01b03168015610a4857610a0e81612116565b15610a39577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b346101dd5760203660031901126101dd57600435303303610a575780158015610ac3575b61099a576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600355604051908152a1005b506001548111610a8e565b346101dd57610af3610adf36611473565b610aee61076d82949394611c92565b611c92565b60065482101561051457815f52600560205260405f20600181015460ff8116610bbb5760081c60ff16610bac57600381019060018060a01b0383165f528160205260ff60405f205416610b9d5760029160018060a01b0384165f5260205260405f20600160ff1982541617905501610b6b8154611ae5565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b346101dd57610bd8366115e8565b95337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161495909493908615610cb55760016003540361099a575b81811480610cac575b610c2d90611b73565b5f5b818110610c5b578888610c3e57005b5f90815260046020526040902080546001600160a01b0319169055005b5f80610c6b6107ed84868c611bb3565b610c7684878b611bb3565b35610c8285898b611bd7565b9190826040519384928337810185815203925af1610c9e611801565b501561098b57600101610c2f565b50818314610c24565b333014610c1b57610cc533611ce1565b60016003540315610c1b5763aabd5a0960e01b5f5260045ffd5b346101dd575f3660031901126101dd576020600354604051908152f35b346101dd5760203660031901126101dd576004356001600160c01b038116908190036101dd57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b357604051908152602090f35b346101dd5760403660031901126101dd57610d9f611506565b336001600160a01b03821603610dbb5761001890600435611f72565b63334bd91960e11b5f5260045ffd5b346101dd5760203660031901126101dd576020610e026001600160a01b03610df06114f0565b165f52600260205260405f2054151590565b6040519015158152f35b346101dd5760403660031901126101dd57610018600435610e2b611506565b90610e44610236825f525f602052600160405f20015490565b611eea565b346101dd5760203660031901126101dd5760206107cb6004355f525f602052600160405f20015490565b346101dd5760403660031901126101dd57610e8c611506565b6004355f526005602052600360405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760603660031901126101dd576004356001600160401b0381116101dd57806004019061012060031982360301126101dd57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610a5757602092610f3d610104610f47930182611b41565b9160243590611d92565b9080610f57575b50604051908152f35b5f8080809381604051610f6a89826114b8565b52335af15082610f4e565b346101dd5760203660031901126101dd57610f8e6114f0565b303303610a57576001600160a01b0316610fa781612007565b15610fe357600154600354811061099a571561099a577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b346101dd5760403660031901126101dd576024356001600160401b0381116101dd57611030611027602092369060040161158b565b90600435611b1b565b6040516001600160e01b03199091168152f35b346101dd5760803660031901126101dd5761105c6114f0565b50611065611506565b506064356001600160401b0381116101dd5761108590369060040161156d565b50604051630a85bd0160e11b8152602090f35b346101dd5760403660031901126101dd576004356001600160401b0381116101dd57366023820112156101dd5780600401356110d3816114d9565b916110e160405193846114b8565b8183526024602084019260051b820101903682116101dd5760248101925b8284106111145760206107cb60243587611830565b83356001600160401b0381116101dd578201606060231982360301126101dd576040519161114183611489565b60248201356001600160a01b03811681036101dd578352604482013560208401526064820135926001600160401b0384116101dd5761118a60209493602486953692010161156d565b60408201528152019301926110ff565b60203660031901126101dd5760043560065481101561051457805f52600560205260405f2060018101805460ff8116610bbb5760ff8160081c16610bac576002830154600354116112e65760ff191660011790555f5b81548110156112bf57611203818361179c565b50546001600160a01b0316600161121a838561179c565b5001546002611229848661179c565b500190604051915f9080549061123e826117c9565b91600181169081156112a85750600114611276575b5050915f939181859403925af1611268611801565b501561098b576001016111f0565b9091505f5260205f205f905b82821061129457505082018183611253565b600181602092548488015201910190611282565b60ff19168652505080151502830190508183611253565b827fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b346101dd5760203660031901126101dd5760043563ffffffff60e01b81168091036101dd57602090637965db0b60e01b811490811561133a575b506040519015158152f35b630271189760e51b811491508115611354575b508261132f565b6301ffc9a760e01b1490508261134d565b346101dd5760203660031901126101dd576004355f526005602052608060405f20600260018201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b346101dd576113db6113d336611473565b919091611c92565b60065482101561051457815f526005602052600160405f20019081549060ff8216610bbb5760ff8260081c16610bac57601082901c6001600160a01b039081169116141580611469575b61145a5761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415611425565b60409060031901126101dd576004359060243590565b606081019081106001600160401b038211176114a457604052565b634e487b7160e01b5f52604160045260245ffd5b90601f801991011681019081106001600160401b038211176114a457604052565b6001600160401b0381116114a45760051b60200190565b600435906001600160a01b03821682036101dd57565b602435906001600160a01b03821682036101dd57565b6001600160401b0381116114a457601f01601f191660200190565b9291926115438261151c565b9161155160405193846114b8565b8294818452818301116101dd578281602093845f960137010152565b9080601f830112156101dd5781602061158893359101611537565b90565b9181601f840112156101dd578235916001600160401b0383116101dd57602083818601950101116101dd57565b9181601f840112156101dd578235916001600160401b0383116101dd576020808501948460051b0101116101dd57565b60806003198201126101dd576004356001600160401b0381116101dd5781611612916004016115b8565b929092916024356001600160401b0381116101dd5781611634916004016115b8565b92909291604435906001600160401b0382116101dd57611656916004016115b8565b909160643590565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b8383106116b457505050505090565b90919293946020806116f4600193603f19868203018752606060408b51878060a01b0381511684528581015186850152015191816040820152019061165e565b970193019301919392906116a5565b90602080835192838152019201905f5b8181106117205750505090565b82516001600160a01b0316845260209384019390920191600101611713565b9080601f830112156101dd578135611756816114d9565b9261176460405194856114b8565b81845260208085019260051b8201019283116101dd57602001905b82821061178c5750505090565b813581526020918201910161177f565b80548210156117b5575f52600360205f20910201905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c921680156117f7575b60208310146117e357565b634e487b7160e01b5f52602260045260245ffd5b91607f16916117d8565b3d1561182b573d906118128261151c565b9161182060405193846114b8565b82523d5f602084013e565b606090565b9061183d61076d82611c92565b815115611aaf5761184d90611c92565b906006549261185b84611ae5565b600655835f52600560205260405f20935f5b83518110156119f9576118808185611b07565b518654600160401b8110156114a45780600161189f920189558861179c565b6119e657815181546001600160a01b0319166001600160a01b03909116178155602082015160018201556040909101518051600290920191906001600160401b0382116114a4576118f083546117c9565b601f81116119a1575b50602090601f831160011461193a576001949392915f918361192f575b50505f19600383901b1c191690841b1790555b0161186d565b015190505f80611916565b90601f19831691845f52815f20925f5b818110611989575091600196959492918388959310611971575b505050811b019055611929565b01515f1960f88460031b161c191690555f8080611964565b9293602060018192878601518155019501930161194a565b835f5260205f20601f840160051c810191602085106119dc575b601f0160051c01905b8181106119d157506118f9565b5f81556001016119c4565b90915081906119bb565b634e487b7160e01b5f525f60045260245ffd5b506001858101805462010000600160b01b031916601087901b62010000600160b01b0316179055604051929591946001600160a01b031693909260029291859187917f2e54f43789a6ca510a425f049aff6a8d4c444efb21fce5c23e86cfed6c59369d91908190611a6a9082611682565b0390a3835f526003810160205260405f208360ff198254161790550155817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a390565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b5f198114611af35760010190565b634e487b7160e01b5f52601160045260245ffd5b80518210156117b55760209160051b010190565b90611b269291611cff565b611b36576001600160e01b031990565b630b135d3f60e11b90565b903590601e19813603018212156101dd57018035906001600160401b0382116101dd576020019181360383136101dd57565b15611b7a57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156117b55760051b0190565b356001600160a01b03811681036101dd5790565b908210156117b557611bee9160051b810190611b41565b9091565b9060405191825f825492611c05846117c9565b8084529360018116908115611c705750600114611c2c575b50611c2a925003836114b8565b565b90505f9291925260205f20905f915b818310611c54575050906020611c2a928201015f611c1d565b6020919350806001915483858901015201910190918492611c3b565b905060209250611c2a94915060ff191682840152151560051b8201015f611c1d565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614611cc757503390565b5f908152600460205260409020546001600160a01b031690565b6001600160a01b03165f9081526002602052604090205415610fe357565b90611d3f611d23611d1a611d14368786611537565b856120dc565b9092919261216b565b6001600160a01b03165f90815260026020526040902054151590565b611d8a5761158892611d84611d1a92611d23947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611537565b906120dc565b505050600190565b91929092611da4611d14368484611537565b50949080956004811015611e7f571590811591611e93575b50611df7575b505050602001355f52600460205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611e3493945090611d84917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611537565b50919080926004811015611e7f571590811591611e60575b50611e59575f8080611dc2565b5050600190565b6001600160a01b03165f90815260026020526040812054159150611e4c565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260026020526040812054159150611dbc565b5f8181526020818152604080832033845290915290205460ff1615611ed45750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611f6c575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611f6c575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b80548210156117b5575f5260205f2001905f90565b5f818152600260205260409020548015611f6c575f198101818111611af3576001545f19810191908211611af35781810361208e575b505050600154801561207a575f1901612057816001611ff2565b8154905f199060031b1b191690556001555f5260026020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b6120c661209f6120b0936001611ff2565b90549060031b1c9283926001611ff2565b819391549060031b91821b915f19901b19161790565b90555f52600260205260405f20555f808061203d565b815191906041830361210c576121059250602082015190606060408401519301515f1a906121cb565b9192909190565b50505f9160029190565b805f52600260205260405f2054155f1461216657600154600160401b8110156114a45761214f6120b08260018594016001556001611ff2565b9055600154905f52600260205260405f2055600190565b505f90565b6004811015611e7f578061217d575050565b600181036121945763f645eedf60e01b5f5260045ffd5b600281036121af575063fce698f760e01b5f5260045260245ffd5b6003146121b95750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411612242579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa156102e6575f516001600160a01b0381161561223857905f905f90565b505f906001905f90565b5050505f916003919056fea264697066735822122062ced14a06cb99d0494e07adef1627a1edcf532ca8930a7e9b0ff47bae10898d64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5a2646970667358221220e66fb4fdfbb32087a6b813f649403c48c885339357e57f7da723153fefb5371364736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xLOCAL_NEXUS_ADDRESS",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "MockPriceFeed": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    },
    "11155111": {
      "BragToken": "0x1111111111111111111111111111111111111111",
      "NFTMarketplace": "0x2222222222222222222222222222222222222222",
      "BragNFT": "0x3333333333333333333333333333333333333333",
      "ExhibitRegistry": "0x4444444444444444444444444444444444444444",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x6666666666666666666666666666666666666666"
    },
    "chain-31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xLOCAL_NEXUS_ADDRESS",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "MockPriceFeed": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    },
    "chain-11155111": {
      "BragToken": "0x1111111111111111111111111111111111111111",
      "NFTMarketplace": "0x2222222222222222222222222222222222222222",
      "BragNFT": "0x3333333333333333333333333333333333333333",
      "ExhibitRegistry": "0x4444444444444444444444444444444444444444",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x6666666666666666666666666666666666666666"
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