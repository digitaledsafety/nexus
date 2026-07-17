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
              "name": "medias",
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
      "bytecode": "0x60806040523461042157615cd96080813803918261001c81610425565b938492833981010312610421576100328161044a565b9061003f6020820161044a565b9161005160606040840151930161044a565b9261005c6040610425565b6007815266109c9859d3919560ca1b602082015261007a6040610425565b600781526610949051d3919560ca1b6020820152815190916001600160401b038211610328575f5490600182811c92168015610417575b602083101461030a5781601f8493116103aa575b50602090601f8311600114610347575f9261033c575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116103285760015490600182811c9216801561031e575b602083101461030a5781601f84931161029c575b50602090601f8311600114610236575f9261022b575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005562015f906011556001600160a01b03169081156101e6576101959061045e565b508060018060a01b0319600c541617600c5560018060a01b0319600d541617600d55600e5560018060a01b031660018060a01b031960105416176010556064600a556040516157d190816104e88239f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b015190505f8061013c565b60015f9081528281209350601f198516905b818110610284575090846001959493921061026c575b505050811b01600155610151565b01515f1960f88460031b161c191690555f808061025e565b92936020600181928786015181550195019301610248565b60015f529091507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c81019160208510610300575b90601f859493920160051c01905b8181106102f25750610126565b5f81558493506001016102e5565b90915081906102d7565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610112565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100db565b5f8080528281209350601f198516905b818110610392575090846001959493921061037a575b505050811b015f556100ef565b01515f1960f88460031b161c191690555f808061036d565b92936020600181928786015181550195019301610357565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c8101916020851061040d575b90601f859493920160051c01905b8181106103ff57506100c5565b5f81558493506001016103f2565b90915081906103e4565b91607f16916100b1565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761032857604052565b51906001600160a01b038216820361042157565b6001600160a01b0381165f9081525f516020615cb95f395f51905f52602052604090205460ff166104e2576001600160a01b03165f8181525f516020615cb95f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe60a0806040526004361015610082575b50361561001a575f80fd5b61002261308b565b61002a6130c3565b61006f60405161003b604082612ba7565b600f81526e2234b932b1ba103237b730ba34b7b760891b602082015260405190610066602083612ba7565b5f8252336130ec565b60015f51602061575c5f395f51905f5255005b5f905f3560e01c90816301ffc9a7146129a75750806302d95a521461297f57806306fdde03146128b8578063081812fc1461287c578063095ea7b3146127925780630f133e66146127715780630fd973ce146123185780631653441c146122b057806318160ddd1461171e57806323b872dd14612298578063248a9ca3146122645780632a55205a146122045780632eb9313e146121c45780632f2ff15d1461218557806336568abe146121405780633f4ba83a146120d857806341e42f301461204257806342842e0e1461201257806349c657db14611ff55780634c00de8214611fcc57806350017f3e14611ddf5780635b137f7b14611be65780635c975abb14611bc357806361d027b314611b9a5780636352211e14611b6957806364cb7e9c14611b3e57806366a83bcd146119455780636d12c7f41461181b5780636f8b44b0146117f857806370a08231146117a5578063724e78da14611765578063741bef1a1461173c57806375794a3c1461171e57806383943dc8146116f55780638456cb591461169a578063916221aa1461165057806391a6262f1461162157806391d14854146115d757806395d89b41146114f45780639604d478146112e557806396d8f4f3146112c7578063a217fddf146112ab578063a22cb465146111f3578063a6719b3a14611173578063ab2a6f70146110d2578063b88d4fde1461105f578063bfe71a3f14611035578063c631724714611012578063c87b56dd146106d3578063d3933c1c1461062f578063d547741f146105e7578063d5abeb01146105c9578063e086e5ec1461055c578063e2d321361461053e578063e985e9c5146104e6578063f0f442601461045a578063f12ba13e14610437578063f4f3b200146103335763f5cf513b0361000f57346103305780600319360112610330576020600b54604051908152f35b80fd5b50346103305760203660031901126103305761034d612a9c565b610355613002565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa90811561042c5783916103f6575b506040519063a9059cbb60e01b84523360045260245260208360448180865af19060018451148216156103d6575b50156103c4575080f35b635274afe760e01b8252600452602490fd5b60018215166103ee5750813b15153d1516165f6103ba565b3d84823e3d90fd5b90506020813d602011610424575b8161041160209383612ba7565b8101031261042057515f61038c565b8280fd5b3d9150610404565b6040513d85823e3d90fd5b503461033057602036600319011261033057610451613002565b60043560115580f35b503461033057602036600319011261033057610474612a9c565b61047c613002565b6001600160a01b031680156104a1576001600160601b0360a01b600c541617600c5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b5034610330576040366003190112610330576040610502612a9c565b9161050b612ab2565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346103305780600319360112610330576020601154604051908152f35b5034610330578060031936011261033057610575613002565b8080808047335af1610585612ebe565b501561058e5780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b50346103305780600319360112610330576020600a54604051908152f35b50346103305760403660031901126103305761062b600435610607612ab2565b90610626610621825f526007602052600160405f20015490565b613051565b6138a7565b5080f35b506060366003190112610330576004356001600160401b0381116106cf5761065b903690600401612ade565b602435916001600160401b0383116106cb576106b06106a8916106856106b7953690600401612ade565b939091610690612b45565b9561069961308b565b6106a16130c3565b3691612cb3565b923691612cb3565b90336133d1565b60015f51602061575c5f395f51905f525580f35b8380fd5b5080fd5b5034610330576020366003190112610330576106f0600435612fce565b506004358152601260205260408120906040519161070d83612b8c565b60018060a01b038154168352600181015460208401908152600282015493604081019485526003830154606082015260ff6004840154169260808201936004811015610ffe57845261076190600501612bc8565b9160a08201928352610774600435612ce9565b9160606004358752601460205261078d60408820612bc8565b90815115610feb575b815115610fbd576107a682614396565b15610fb557509284518651906004821015610fa157603a6107d76107d260209461082294600435613e85565b6155ed565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018b838201520301601f198101835282612ba7565b925b602098896040516108358282612ba7565b8a8152968051610f44575b505061084c8751614df5565b93516001600160a01b03169182610863602a612c98565b936108716040519586612ba7565b602a855261087f602a612c98565b601f190136868f0137845115610f305760308d860153845160011015610f30576078602186015360295b60018111610eda5750610ec35750918a929161096460018594518d86806109266305f5e10082620f424082880604600a81105f14610eb35760216108ef61091e926150db565b604051600360fc1b858201528151909485928291018484015e810189838201520301601f198101835282612ba7565b955b046150db565b9360405199858b9651918291018488015e850190601760f91b83830152805192839101602183015e010190838201520301601f198101855284612ba7565b5198610981655af3107a4000670de0b6b3a76400008c06046150db565b8b6004825110156109c857604051600360fc1b81880152825190926109c392602192859281908b018486015e820190838201520301601f198101835282612ba7565b610981565b506001610a259186809e9d6109e7670de0b6b3a76400008392046150db565b9260405199848b9551918291018487015e840190601760f91b83830152805192839101602183015e01018d838201520301601f198101865285612ba7565b516004811015610e9f5760128b99600d8b809b60368f9a610e4b9d603385603d9f8f610dff9f90839f6107d29f60029f60029187610d0997602c82809e602f82809c602e82610cac9d8f82849d60279f92610a81604494615026565b9a15610e7b575081604051610a97604082612ba7565b600381526259657360e81b828201529d5b6040516080527f7b2274726169745f74797065223a20224d657373616765222c202276616c756582608051015263111d101160e11b6040608051015280519182910185608051015e608051019062089f4b60ea1b848301527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478301526a10113b30b63ab2911d101160a91b6067830152805192839101607283015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022446f6e6174696f6e2056616c7565222c60318301526b08089d985b1d59488e88088960a21b6051830152805192839101605d83015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022446f6e6174696f6e20455448222c20226032830152683b30b63ab2911d101160b91b6052830152805192839101605b83015e0101906608115512089f4b60ca1b848301527f7b2274726169745f74797065223a202254617820537461747573222c202276618f83015266363ab2911d101160c91b6053830152805192839101605a83015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565603183015263111d101160e11b6051830152805192839101605583015e010161227d60f01b82820152608051900301601d1981016080515201608051612ba7565b610cb76004356150db565b8c5151909c9015610e6357610d0391610cd260229251614df5565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f198101835282612ba7565b93614df5565b926040519d8e9a727b226e616d65223a2022427261674e4654202360681b828d0152805191829101858d015e8a01907f222c20226465736372697074696f6e223a2022427261672e436861726974792084830152754475616c2d537461746520436f6c6c65637469626c6560501b6053830152805192839101606983015e0101906c1116101134b6b0b3b2911d101160991b84830152805192839101604383015e0101908382018b8152815193849201905e010171222c202261747472696275746573223a205b60701b81526080515190818c608051018583015e01615d7d60f01b838201520301601d19810184520182612ba7565b906040519586927f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000828501528051918291018585015e820190838201520301601f198101845283612ba7565b610e5f604051928284938452830190612a78565b0390f35b506040519150610e738483612ba7565b815293614df5565b5081604051610e8b604082612ba7565b60028152614e6f60f01b828201529d610aa8565b634e487b7160e01b8a52602160045260248afd5b610ebd91506150db565b95610920565b63e22e27eb60e01b8b52600452601460245260448afd5b90600f81166010811015610f1c57610f1791906f181899199a1a9b1b9c1cb0b131b232b360811b901a610f0d8489614385565b5360041c91615243565b6108a9565b634e487b7160e01b8e52603260045260248efd5b634e487b7160e01b8c52603260045260248cfd5b610f9991929750610f56603591614df5565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018c838201520301601f198101835282612ba7565b94895f610840565b634e487b7160e01b89526021600452602489fd5b939092610824565b93905084518651906004821015610fa157603a6107d76107d2602094610fe594600435613e85565b92610824565b9050610ff8600435613dd2565b90610796565b634e487b7160e01b86526021600452602486fd5b50346103305760203660031901126103305761102c613002565b600435600e5580f35b50346103305760203660031901126103305760406020916004358152601383522054604051908152f35b503461033057608036600319011261033057611079612a9c565b611081612ab2565b90604435606435926001600160401b0384116110ce57366023850112156110ce576110b96110cb943690602481600401359101612cb3565b926110c5838383612d16565b33613cf5565b80f35b8480fd5b50346103305760203660031901126103305760043581526012602052604081209060018060a01b03825416916001810154916002820154600383015490611123600560ff6004870154169501612bc8565b94604051968752602087015260408601526060850152600482101561115f57508291610e5f91608084015260c060a084015260c0830190612a78565b634e487b7160e01b81526021600452602490fd5b50608036600319011261033057611188612a9c565b6024356001600160401b038111610420576111a7903690600401612ade565b916044356001600160401b0381116110ce576111c7903690600401612ade565b90926064359384151585036111ef576106a86111e9926106b79761069961308b565b916133d1565b8680fd5b50346103305760403660031901126103305761120d612a9c565b60243590811515809203610420573315611297576001600160a01b031690811561128357338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b5034610330578060031936011261033057602090604051908152f35b50346103305780600319360112610330576020600e54604051908152f35b50346103305760203660031901126103305760043561130261308b565b61130a6130c3565b61131381612fce565b50600f546001600160a01b031680156114ba57600c546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269d3c21bcecceda10000006044820152906020908290606490829087905af190811561042c57839161147f575b5015611443578082526013602052604082205442111561140d5762278d0042018042116113f957818352601360205260408320555b6040519069d3c21bcecceda100000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f51602061575c5f395f51905f525580f35b634e487b7160e01b83526011600452602483fd5b80825260136020526040822080549062278d00820180921161142f57556113ae565b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d6020116114b2575b8161149a60209383612ba7565b8101031261042057518015158103610420575f611379565b3d915061148d565b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b503461033057806003193601126103305760405190806001549061151782612b54565b80855291600181169081156115b05750600114611553575b610e5f8461153f81860382612ba7565b604051918291602083526020830190612a78565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b8082106115965750909150810160200161153f8261152f565b91926001816020925483858801015201910190929161157d565b60ff191660208087019190915292151560051b8501909201925061153f915083905061152f565b50346103305760403660031901126103305760406115f3612ab2565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346103305760603660031901126103305761163b612ab2565b50611644612ac8565b50602060405160018152f35b5034610330576040366003190112610330576004356024356004811015610420576110cb9161167d613002565b61168681612fce565b508352601260205260046040842001612fb6565b50346103305780600319360112610330576116b3613002565b6116bb6130c3565b600160ff1960085416176008557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b5034610330578060031936011261033057600f546040516001600160a01b039091168152602090f35b50346103305780600319360112610330576020600954604051908152f35b50346103305780600319360112610330576010546040516001600160a01b039091168152602090f35b50346103305760203660031901126103305761177f612a9c565b611787613002565b60018060a01b03166001600160601b0360a01b601054161760105580f35b5034610330576020366003190112610330576001600160a01b036117c7612a9c565b1680156117e4578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b503461033057602036600319011261033057611812613002565b600435600a5580f35b503461033057604036600319011261033057600435906024356001600160401b0381116106cf57611850903690600401612ade565b909261185a613002565b61186381612fce565b508252601460205260408220906001600160401b038111611931576118928161188c8454612b54565b84612f4f565b82601f82116001146118d157819084956118c19495926118c6575b50508160011b915f199060031b1c19161790565b905580f35b013590505f806118ad565b601f198216948385526020852091855b878110611919575083600195969710611900575b505050811b01905580f35b01355f19600384901b60f8161c191690555f80806118f5565b909260206001819286860135815501940191016118e1565b634e487b7160e01b83526041600452602483fd5b5034610330576040366003190112610330576004356001600160401b0381116106cf57611976903690600401612c68565b6024356001600160401b0381116106cb57611995903690600401612c68565b6119a0939193613002565b808303611b05579236819003601e190190855b8481106119be578680f35b6119d26119cc828787612f92565b35612fce565b5085811015611af1578060051b82013583811215611aed57820180356001600160401b038111611ae9578036036020830113611ae957611a13838888612f92565b35895260146020526040892091611a3482611a2e8554612b54565b85612f4f565b8990601f8311600114611a7d579180611a669260019695948d92611a6f5750508160011b915f199060031b1c19161790565b90555b016119b3565b602092500101355f806118ad565b838b5260208b2091601f1984168c5b818110611acf575091600196959492918388959310611ab3575b505050811b019055611a69565b01602001355f19600384901b60f8161c191690555f8080611aa6565b919360206001819282888801013581550195019201611a8c565b8880fd5b8780fd5b634e487b7160e01b87526032600452602487fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b50346103305760203660031901126103305761153f6040610e5f926004358152601460205220612bc8565b5034610330576020366003190112610330576020611b88600435612fce565b6040516001600160a01b039091168152f35b5034610330578060031936011261033057600c546040516001600160a01b039091168152602090f35b5034610330578060031936011261033057602060ff600854166040519015158152f35b503461033057606036600319011261033057600435906024356001600160401b0381116106cf57611c1b903690600401612ade565b611c26939193612b45565b611c2e61308b565b611c366130c3565b611c3f83612fce565b50611c4983612fce565b336001600160a01b0390911603611daa5715611d4e57818352601460205260408320906001600160401b038111611d3a57611c888161188c8454612b54565b83601f8211600114611cd3579080611cb99286976106b797926118c65750508160011b915f199060031b1c19161790565b90555b60405190611ccb602083612ba7565b838252613ad2565b8285526020852090601f198316865b818110611d225750968392916001946106b7989910611d09575b505050811b019055611cbc565b01355f19600384901b60f8161c191690555f8080611cfc565b9192602060018192868c013581550194019201611ce2565b634e487b7160e01b84526041600452602484fd5b8293611d809183611d86955260146020528560408120611d6e8154612b54565b601f8111611d8b575b50553691612cb3565b90613ad2565b6106b7565b81835260208320611da491601f0160051c810190612f39565b5f611d77565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b50602036600319011261033057600435611df761308b565b611dff6130c3565b611e0881612fce565b50611e1234613942565b6305f5e1008110611f875781835260136020526040832054421115611f515762278d00420180421161142f57828452601360205260408420555b600f546001600160a01b031680151580611f48575b611ecc575b5050611e8b828080803460018060a01b03600c54165af1611e85612ebe565b50612eed565b604051903482527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f51602061575c5f395f51905f525580f35b662386f26fc10000820291808304662386f26fc10000149015171561142f57908184923b15610420576040516340c10f1960e01b8152336004820152602481019290925282908290604490829084905af18015611f3d5715611e665781611f3291612ba7565b6106cf57815f611e66565b6040513d84823e3d90fd5b50811515611e61565b81835260136020526040832080549062278d008201809211611f735755611e4c565b634e487b7160e01b85526011600452602485fd5b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b5034610330578060031936011261033057600d546040516001600160a01b039091168152602090f35b503461033057806003193601126103305760206040516103208152f35b5034610330576110cb61202436612b0b565b9060405192612034602085612ba7565b8584526110c5838383612d16565b50346103305760203660031901126103305761205c612a9c565b612064613002565b6001600160a01b03168015612089576001600160601b0360a01b600d541617600d5580f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b50346103305780600319360112610330576120f1613002565b60085460ff8116156121315760ff19166008557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b638dfc202b60e01b8252600482fd5b50346103305760403660031901126103305761215a612ab2565b336001600160a01b038216036121765761062b906004356138a7565b63334bd91960e11b8252600482fd5b50346103305760403660031901126103305761062b6004356121a5612ab2565b906121bf610621825f526007602052600160405f20015490565b61381b565b5034610330576020366003190112610330576121de612a9c565b6121e6613002565b60018060a01b03166001600160601b0360a01b600f541617600f5580f35b50346103305760403660031901126103305760243590610320820291808304610320149015171561225057600d54604080516001600160a01b0390921682526127108404602083015290f35b634e487b7160e01b81526011600452602490fd5b50346103305760203660031901126103305760206122906004355f526007602052600160405f20015490565b604051908152f35b5034610330576110cb6122aa36612b0b565b91612d16565b506040366003190112610330576004356001600160401b0381116106cf576122dc903690600401612ade565b906024356001600160401b0381116106cb576106b7926106a8612306612311933690600401612ade565b94909261069961308b565b90336130ec565b50606036600319011261260c5761232d612a9c565b6024356001600160401b03811161260c5761234c903690600401612ade565b604492919235906001600160401b03821161260c57612380612375612388933690600401612ade565b95909261069961308b565b933691612cb3565b90600e5434106127335760095490600a548210156126f9576123a9826130de565b6009556123b534613942565b926040516123c281612b8c565b338152602080820186815234604080850191825242606086019081525f6080870181815260a088018d81528b83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156126e55761244560059260048301612fb6565b0190518051906001600160401b0382116126d15761246782611a2e8554612b54565b602090601f831160011461266e5761249592915f91836126635750508160011b915f199060031b1c19161790565b90555b62278d00420180421161261057835f52601360205260405f20558051612653575b506040516124c8602082612ba7565b5f81526001600160a01b03821615612640576001600160a01b036124ec848461375c565b1661262d57826124fc9233613be7565b600f546001600160a01b031680151580612624575b612583575b50905f51602061577c5f395f51905f5291612544858080803460018060a01b03600c54165af1611e85612ebe565b6040519134835260208301526040820152608060608201528061256c33946080830190612a78565b0390a260015f51602061575c5f395f51905f525580f35b662386f26fc10000830290838204662386f26fc10000148415171561261057803b1561260c576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af180156126015715612516575f51602061577c5f395f51905f52929194505f6125f891612ba7565b5f939091612516565b6040513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52601160045260245ffd5b50821515612511565b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b61265d9083613ad2565b5f6124b9565b015190505f806118ad565b90601f19831691845f52815f20925f5b8181106126b957509084600195949392106126a1575b505050811b019055612498565b01515f1960f88460031b161c191690555f8080612694565b9293602060018192878601518155019501930161267e565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b3461260c57602036600319011261260c5761278a613002565b600435600b55005b3461260c57604036600319011261260c576127ab612a9c565b6024356127b781612fce565b33151580612869575b8061283c575b6128295781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff16156127c6565b506001600160a01b0381163314156127c0565b3461260c57602036600319011261260c5760043561289981612fce565b505f526004602052602060018060a01b0360405f205416604051908152f35b3461260c575f36600319011261260c576040515f5f546128d781612b54565b808452906001811690811561295b57506001146128ff575b610e5f8361153f81850382612ba7565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106129415750909150810160200161153f6128ef565b919260018160209254838588010152019101909291612929565b60ff191660208086019190915291151560051b8401909101915061153f90506128ef565b3461260c57602036600319011261260c57602061299d600435612ce9565b6040519015158152f35b3461260c57602036600319011261260c576004359063ffffffff60e01b821680920361260c5760209163152a902d60e11b8114908115612a67575b81156129f0575b5015158152f35b637965db0b60e01b811491508115612a0a575b50836129e9565b632483248360e11b811491508115612a24575b5083612a03565b6380ac58cd60e01b811491508115612a56575b8115612a45575b5083612a1d565b6301ffc9a760e01b14905083612a3e565b635b5e139f60e01b81149150612a37565b6391a6262f60e01b811491506129e2565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361260c57565b602435906001600160a01b038216820361260c57565b604435906001600160a01b038216820361260c57565b9181601f8401121561260c578235916001600160401b03831161260c576020838186019501011161260c57565b606090600319011261260c576004356001600160a01b038116810361260c57906024356001600160a01b038116810361260c579060443590565b60443590811515820361260c57565b90600182811c92168015612b82575b6020831014612b6e57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612b63565b60c081019081106001600160401b038211176126d157604052565b90601f801991011681019081106001600160401b038211176126d157604052565b9060405191825f825492612bdb84612b54565b8084529360018116908115612c465750600114612c02575b50612c0092500383612ba7565b565b90505f9291925260205f20905f915b818310612c2a575050906020612c00928201015f612bf3565b6020919350806001915483858901015201910190918492612c11565b905060209250612c0094915060ff191682840152151560051b8201015f612bf3565b9181601f8401121561260c578235916001600160401b03831161260c576020808501948460051b01011161260c57565b6001600160401b0381116126d157601f01601f191660200190565b929192612cbf82612c98565b91612ccd6040519384612ba7565b82948184528183011161260c578281602093845f960137010152565b805f52601360205260405f205415159081612d02575090565b90505f52601360205260405f205442111590565b6001600160a01b0390911691908215612640575f828152600260205260409020546001600160a01b031692829033151580612e09575b5084612dd6575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303612dbe57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612d53565b90915080612e4d575b15612e1f5782905f612d4c565b8284612e3757637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015612e7c575b80612e1257505f838152600460205260409020546001600160a01b03163314612e12565b505f84815260056020908152604080832033845290915290205460ff16612e58565b8181029291811591840414171561261057565b9190820180921161261057565b3d15612ee8573d90612ecf82612c98565b91612edd6040519384612ba7565b82523d5f602084013e565b606090565b15612ef457565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b818110612f44575050565b5f8155600101612f39565b9190601f8111612f5e57505050565b612c00925f5260205f20906020601f840160051c83019310612f88575b601f0160051c0190612f39565b9091508190612f7b565b9190811015612fa25760051b0190565b634e487b7160e01b5f52603260045260245ffd5b9060048110156126e55760ff80198354169116179055565b5f818152600260205260409020546001600160a01b0316908115612ff0575090565b637e27328960e01b5f5260045260245ffd5b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561303a57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156130755750565b63e2517d3f60e01b5f523360045260245260445ffd5b60025f51602061575c5f395f51905f5254146130b45760025f51602061575c5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b60ff600854166130cf57565b63d93c066560e01b5f5260045ffd5b5f1981146126105760010190565b9091600e5434106127335760095491600a548310156126f95761310e836130de565b60095561311a34613942565b9160405161312781612b8c565b338152602080820185815234604080850191825242606086019081525f6080870181815260a088018d81528c83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156126e5576131aa60059260048301612fb6565b0190518051906001600160401b0382116126d1576131cc82611a2e8554612b54565b602090601f831160011461336e576131fa92915f91836126635750508160011b915f199060031b1c19161790565b90555b62278d00420180421161261057845f52601360205260405f2055805161335e575b5060405161322d602082612ba7565b5f81526001600160a01b03821615612640576001600160a01b03613251858461375c565b1661262d57836132619233613be7565b600f546001600160a01b03169182151580613355575b6132d6575b5f51602061577c5f395f51905f5292506132a95f8080803460018060a01b03600c54165af1611e85612ebe565b604051913483526020830152604082015260806060820152806132d133946080830190612a78565b0390a2565b662386f26fc10000820292828404662386f26fc10000148315171561261057803b1561260c576040516340c10f1960e01b815233600482015260248101949094525f908490604490829084905af1928315612601575f51602061577c5f395f51905f5293613345575b5061327c565b5f61334f91612ba7565b5f61333f565b50811515613277565b6133689084613ad2565b5f61321e565b90601f19831691845f52815f20925f5b8181106133b957509084600195949392106133a1575b505050811b0190556131fd565b01515f1960f88460031b161c191690555f8080613394565b9293602060018192878601518155019501930161337e565b91929092600e54925f9334106127335760095491600a548310156126f9576133f8836130de565b60095561340434613942565b9360405161341181612b8c565b338152602080820187815234604080850191825242606086019081525f6080870181815260a088018f81528c83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156126e55761349460059260048301612fb6565b0190518051906001600160401b0382116126d1576134b682611a2e8554612b54565b602090601f83116001146136f9576134e492915f91836126635750508160011b915f199060031b1c19161790565b90555b62278d00420180421161261057845f52601360205260405f20555f146136dc57825f52601460205260405f20908051906001600160401b0382116126d15761353382611a2e8554612b54565b602090601f83116001146136795761356192915f91836126635750508160011b915f199060031b1c19161790565b90555b604051613572602082612ba7565b5f81526001600160a01b03821615612640576001600160a01b03613596848461375c565b1661262d57826135a69233613be7565b600f546001600160a01b031680151580613670575b6135ec575b506132a98380805f51602061577c5f395f51905f52963460018060a01b03600c54165af1611e85612ebe565b662386f26fc10000830290838204662386f26fc10000148415171561261057803b1561260c576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1938415612601575f51602061577c5f395f51905f529461365c575b93506135c0565b505f61366791612ba7565b6132a95f613655565b508215156135bb565b90601f19831691845f52815f20925f5b8181106136c457509084600195949392106136ac575b505050811b019055613564565b01515f1960f88460031b161c191690555f808061369f565b92936020600181928786015181550195019301613689565b80516136e9575b50613564565b6136f39083613ad2565b5f6136e3565b90601f19831691845f52815f20925f5b818110613744575090846001959493921061372c575b505050811b0190556134e7565b01515f1960f88460031b161c191690555f808061371f565b92936020600181928786015181550195019301613709565b5f828152600260205260409020546001600160a01b03169190826137e8575b6001600160a01b0316806137d0575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f206001815401905561378a565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f19815401905561377b565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff166138a1575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16156138a1575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b519069ffffffffffffffffffff8216820361260c57565b6010545f919082906001600160a01b03168061398f575b501580613984575b613969575090565b670de0b6b3a7640000915061398090600b54612e9e565b0490565b50600b541515613961565b9192905f925f600460a05f9360405192838092633fabe5a360e21b82525afa90815f915f93613a7c575b50613a6e57505081907f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a15b81613a64575b81613a4d575b5015613a1a57505050613a0f82670de0b6b3a764000092612e9e565b049060015b5f613959565b909193925015613a14577f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a1613a14565b613a5b915060115490612eb1565b4211155f6139f3565b5f861391506139ed565b9550600192508291506139e7565b9150915060a0813d60a011613aca575b81613a9960a09383612ba7565b8101031261260c57613aaa8161392b565b506020810151613ac160806060840151930161392b565b5090915f6139b9565b3d9150613a8c565b919091805f52600660205260405f2083516001600160401b0381116126d157613aff8161188c8454612b54565b6020601f8211600114613b5f57816020949392613b53927ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce797985f926126635750508160011b915f199060031b1c19161790565b90555b604051908152a1565b601f19821695835f52815f20965f5b818110613bcf575096600192849260209796957ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7999a10613bb7575b505050811b019055613b56565b01515f1960f88460031b161c191690555f8080613baa565b83830151895560019098019760209384019301613b6e565b9291813b613bf6575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f60248201526044810191909152608060648201529216919060209082908190613c41906084830190612a78565b03815f865af15f9181613cb0575b50613c7d5750613c5d612ebe565b80519081613c785782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b01613c9e57505f808080613bf0565b633250574960e11b5f5260045260245ffd5b9091506020813d602011613ced575b81613ccc60209383612ba7565b8101031261260c57516001600160e01b03198116810361260c57905f613c4f565b3d9150613cbf565b823b613d03575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190613d4f906084830190612a78565b03815f865af15f9181613d8d575b50613d6b5750613c5d612ebe565b6001600160e01b03191663757a42ff60e11b01613c9e57505f80808080613cfc565b9091506020813d602011613dca575b81613da960209383612ba7565b8101031261260c57516001600160e01b03198116810361260c57905f613d5d565b3d9150613d9c565b613ddb81612fce565b50602090604051613dec8382612ba7565b5f8152815f5260068352613e0260405f20612bc8565b815115613e7e5780849151613e4057505050613e1d90612fce565b505f604051613e2c8382612ba7565b52613e3a6040519182612ba7565b5f815290565b613e7b935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612ba7565b90565b9250505090565b919091613e9a613e9482612ce9565b9361524f565b80511561433757613eab91506152f9565b915b602092604051613ebd8582612ba7565b5f81529260405190613ed0608083612ba7565b60498252858201937f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7385527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040840152806868743a20626f6c643b60b81b606085015261422e575b1561420b57604051613f4c604082612ba7565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000087820152905b60408051613f858282612ba7565b60078152662336333636663160c81b898201529360048310156126e557889687958694600181036141aa5750508251613fbe8482612ba7565b60078152662332326335356560c81b85820152915b83517f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32308c8201527f30302f73766722207072657365727665417370656374526174696f3d22784d69818601527f6e594d696e206d656574222076696577426f783d223020302033353020333530606082015261111f60f11b60808201528a51909b8c9b82910160828d015e8a0190608282016e01e39ba3cb6329f173130b9b2903d9608d1b9052518092609183015e0160820191600f830169103e9e17b9ba3cb6329f60b11b9052601983017f3c726563742077696474683d223130302522206865696768743d223130302522905266103334b6361e9160c91b60398401528151938492019083015e01600f0190631110179f60e11b6031830152805192839101603583015e0160310190600482017f3c7465787420783d223530252220793d223530252220636c6173733d226261739052602482017f652220646f6d696e616e742d626173656c696e653d226d6964646c65222074659052723c3a16b0b731b437b91e9136b4b2323632911f60691b6044830152805192839101605783015e0160040160538101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b905203605301600e1981018252601101613e7b9082612ba7565b600281036141d957505082516141c08482612ba7565b6007815266046cac2c46660760cb1b8582015291613fd3565b90929060021901613fd357915082516141f28482612ba7565b600781526608d9598d0d0d0d60ca1b8582015291613fd3565b604051614219604082612ba7565b60038152621e339f60e91b8782015290613f77565b94506101006142406040519182612ba7565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522878201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e082015294613f39565b5061437f60296143486020936150db565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612ba7565b91613ead565b908151811015612fa2570160200190565b805190600482106138a157600b821015614971575b600319820182811161261057601760f91b6001600160f81b03196143cf8385614385565b5116146145f5575b6005831015806145c6575b6143ee575b5050505f90565b61440d906001600160f81b0319906144069084614385565b511661571c565b90600219830183811161261057614432906001600160f81b0319906144069084614385565b92600119810181811161261057614457906001600160f81b0319906144069085614385565b915f198201918211612610576144066144759260ff60f81b92614385565b916001600160f81b031916607760f81b811480806145af575b80614598575b80614581575b6145775780614560575b80614549575b80614532575b61452957606760f81b149283614511575b50826144f9575b50816144e1575b506144dc575f80806143e7565b600190565b6001600160f81b031916603360f91b1490505f6144cf565b6001600160f81b031916601d60fa1b1491505f6144c8565b6001600160f81b031916601b60fa1b1492505f6144c1565b50505050600190565b506001600160f81b03198316600760fc1b146144b0565b506001600160f81b03198216603160f91b146144aa565b506001600160f81b03198416606560f81b146144a4565b5050505050600190565b506001600160f81b03198416606d60f81b1461449a565b506001600160f81b03198316603160f91b14614494565b506001600160f81b03198516606560f81b1461448e565b50600419830183811161261057601760f91b906001600160f81b0319906145ed9085614385565b5116146143e2565b600219830183811161261057614619906001600160f81b0319906144069085614385565b60011984018481116126105761463d906001600160f81b0319906144069086614385565b905f19850185811161261057614661906001600160f81b0319906144069087614385565b906001600160f81b031916606d60f81b8114808061495a575b80614943575b6147e857607760f81b82148061492c575b80614915575b6147e857606f60f81b821480806148fe575b806148e7575b6148225781806148d0575b806148b9575b61482257606160f81b8314806148a2575b8061488b575b614822578180614874575b8061485d575b614822578180614846575b8061482f575b614822578061480b575b806147f4575b6147e857806147d1575b806147ba575b61478157606760f81b149182806147a3575b8061478c575b6147815782614769575b5081614751575b50156143d7575b505050600190565b6001600160f81b031916603160f91b1490505f614742565b6001600160f81b031916601b60fa1b1491505f61473b565b505050505050600190565b506001600160f81b03198216603360f91b14614731565b506001600160f81b03198116606960f81b1461472b565b506001600160f81b03198216603b60f91b14614719565b506001600160f81b03198316600d60fa1b14614713565b50505050505050600190565b506001600160f81b03198316603b60f91b14614709565b506001600160f81b03198416606760f81b14614703565b5050505050505050600190565b506001600160f81b03198416603b60f91b146146f9565b506001600160f81b03198516606f60f81b146146f3565b506001600160f81b03198416600d60fa1b146146e8565b506001600160f81b03198516600760fc1b146146e2565b506001600160f81b03198416606360f81b146146d7565b506001600160f81b03198516606160f81b146146d1565b506001600160f81b03198416606160f81b146146c0565b506001600160f81b03198516600d60fa1b146146ba565b506001600160f81b03198416606760f81b146146af565b506001600160f81b03198516606760f81b146146a9565b506001600160f81b03198316603b60f91b14614697565b506001600160f81b03198416606160f81b14614691565b506001600160f81b03198316603360f81b14614680565b506001600160f81b03198416600760fc1b1461467a565b8115612fa25760208101516001600160f81b031916601960fa1b1480614d9e575b80614d79575b80614d54575b80614d2f575b156143ab57805160051015612fa2576025810180516001600160f81b031916606160f81b1480614d0a575b80614ce5575b80614cc0575b80614c9b575b80614c76575b61474957815160051015612fa25780516001600160f81b031916603b60f91b1480614c51575b80614c2c575b80614c07575b80614be2575b80614bbd575b61474957600e8310159081614b9a575b5080614b75575b80614b50575b80614b2b575b80614b06575b80614ae1575b80614abc575b80614a97575b80614a72575b156143ab575050600190565b508051600d1015612fa257602d8101516001600160f81b031916603360f91b14614a66565b508051600c1015612fa257602c8101516001600160f81b031916606960f81b14614a60565b508051600b1015612fa257602b8101516001600160f81b031916606760f81b14614a5a565b508051600a1015612fa257602a8101516001600160f81b031916602f60f81b14614a54565b50805160091015612fa25760298101516001600160f81b031916606560f81b14614a4e565b50805160081015612fa25760288101516001600160f81b031916606760f81b14614a48565b50805160071015612fa25760278101516001600160f81b031916606160f81b14614a42565b50805160061015612fa25760268101516001600160f81b031916606d60f81b14614a3c565b9050815160051015612fa257516001600160f81b031916606960f81b145f614a35565b508151600a1015612fa257602a8201516001600160f81b031916602f60f81b14614a25565b50815160091015612fa25760298201516001600160f81b031916606f60f81b14614a1f565b50815160081015612fa25760288201516001600160f81b031916606560f81b14614a19565b50815160071015612fa25760278201516001600160f81b031916601960fa1b14614a13565b50815160061015612fa25760268201516001600160f81b031916606960f81b14614a0d565b508151600a1015612fa257602a8201516001600160f81b031916602f60f81b146149e7565b50815160091015612fa25760298201516001600160f81b031916606f60f81b146149e1565b50815160081015612fa25760288201516001600160f81b031916606960f81b146149db565b50815160071015612fa25760278201516001600160f81b031916601960fa1b146149d5565b50815160061015612fa25760268201516001600160f81b031916607560f81b146149cf565b50805160041015612fa25760248101516001600160f81b031916601d60f91b146149a4565b50805160031015612fa25760238101516001600160f81b031916606160f81b1461499e565b50805160021015612fa25760228101516001600160f81b031916601d60fa1b14614998565b50805160011015612fa25760218101516001600160f81b031916606160f81b14614992565b90614dcd82612c98565b614dda6040519182612ba7565b8281528092614deb601f1991612c98565b0190602036910137565b80515f5f5b828110614f9957508015614f9457614e15614e1a9183612eb1565b614dc3565b915f9060405191614e2c604084612ba7565b601083526f181899199a1a9b1b9c1cb0b131b232b360811b60208401525f915b848310614e5b57505050505090565b614e658382614385565b51928360f81c602281148015614f8a575b15614ec0575082605c614e95614e8e600195966130de565b928a614385565b53614eb6614ea2826130de565b956001600160f81b0319165f1a9189614385565b535b019190614e4c565b6020811015614f78578394605c614ee3614edc600196976130de565b978b614385565b536075614ef2614edc886130de565b536030614f01614edc886130de565b536030614f10614edc886130de565b536001600160f81b031990614f289060fc1c88614385565b511694614f41614f37826130de565b965f1a918a614385565b536001600160f81b031990614f5990600f1687614385565b511693614f72614f68826130de565b955f1a9189614385565b53614eb8565b5082614f72614ea260019495926130de565b50605c8114614e76565b505090565b90601160f91b6001600160f81b0319614fb28487614385565b5116148015615005575b15614fd457614fcc6001916130de565b915b01614dfa565b906020614fe18286614385565b5160f81c10614ff3575b600190614fce565b90600581018091116126105790614feb565b50601760fa1b6001600160f81b031961501e8487614385565b511614614fbc565b60048110156126e55780156150b5576001811461508e5760021461506957604051615052604082612ba7565b6007815266119b1859d9d95960ca1b602082015290565b604051615077604082612ba7565b600781526610db185a5b595960ca1b602082015290565b5060405161509d604082612ba7565b600881526715995c9a599a595960c21b602082015290565b506040516150c4604082612ba7565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b821015615220575b806d04ee2d6d415b85acef8100000000600a921015615205575b662386f26fc100008110156151f1575b6305f5e1008110156151e0575b6127108110156151d1575b60648110156151c3575b10156151b8575b600a6021600184019361516285612c98565b946151706040519687612ba7565b80865261517f601f1991612c98565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a8353048015614f9457600a909161518a565b600190910190615150565b606460029104930192615149565b6127106004910493019261513f565b6305f5e10060089104930192615134565b662386f26fc1000060109104930192615127565b6d04ee2d6d415b85acef810000000060209104930192615117565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b81046150fd565b8015612610575f190190565b90602082511115612c005760208251811015612fa257608060c082808601015160f81c16146152be575b61528281614dc3565b905f5b818110615293575090925050565b6001906001600160f81b03196152a98288614385565b51165f1a6152b78286614385565b5301615285565b801515806152df575b156152da576152d590615243565b6152be565b615279565b50608060c06152ee8386614385565b5160f81c16146152c7565b80515f5f5b8281106154e357508015614f9457614e156153199183612eb1565b915f905f5b83811061532c575050505090565b6001600160f81b031961533f8284614385565b5116601360f91b81036153a95750600190602661536561535e866130de565b9588614385565b53606161537461535e866130de565b53606d61538361535e866130de565b53607061539261535e866130de565b53603b6153a161535e866130de565b535b0161531e565b600f60fa1b81036153f9575060019060266153c661535e866130de565b53606c6153d561535e866130de565b5360746153e461535e866130de565b53603b6153f361535e866130de565b536153a3565b601f60f91b81036154255750600190602661541661535e866130de565b5360676153d561535e866130de565b601160f91b810361546f5750600190602661544261535e866130de565b53607161545161535e866130de565b53607561546061535e866130de565b53606f6153d561535e866130de565b602760f81b81036154c85750600190602661548c61535e866130de565b53606161549b61535e866130de565b5360706154aa61535e866130de565b53606f6154b961535e866130de565b5360736153e461535e866130de565b92600191906153f36154d9826130de565b955f1a9188614385565b90601360f91b6001600160f81b03196154fc8487614385565b511603615519576004810180911161261057600190915b016152fe565b600f60fa1b6001600160f81b03196155318487614385565b51160361554c57600381018091116126105760019091615513565b601f60f91b6001600160f81b03196155648487614385565b51160361557f57600381018091116126105760019091615513565b601160f91b6001600160f81b03196155978487614385565b5116036155b257600581018091116126105760019091615513565b90602760f81b6001600160f81b03196155cb8387614385565b5116146155db575b600190615513565b906005810180911161261057906155d3565b9081511561570c578151600281018091116126105760039004600281901b91906001600160fe1b0381160361261057604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b8089106156d057506020959697509060039291525106806001146156bb576002146156ae575b50808452830101604052565b603d905f1901535f6156a2565b50603d90815f1982015360011901535f6156a2565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c1651600284015316516003820153019361567c565b9050604051613e3a602082612ba7565b8060f81c604181101580615750575b615733575090565b602091500160ff81116126105760f81b6001600160f81b03191690565b50605a81111561572b56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377a26469706673582212203d771dbeb3bc105f59110a169c46a70b9456746fb8ecc36878df1dc16a2e477964736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
      "bytecode": "0x6080346100af57601f61388138819003918201601f19168301916001600160401b038311848410176100b35780849260409485528339810103126100af5761007f610055602061004e846100c7565b93016100c7565b9160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556100db565b50600180546001600160a01b0319166001600160a01b03929092169190911790556040516136fc90816101658239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100af57565b6001600160a01b0381165f9081525f5160206138615f395f51905f52602052604090205460ff1661015f576001600160a01b03165f8181525f5160206138615f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c90816301ffc9a71461256857508063025f75ac14612470578063041261961461242c578063150b7a02146122a2578063248a9ca31461227057806325fdf589146121275780632f2ff15d146120ea5780632f3ef60214611e155780632ff1d0f914611df5578063358d48d914611d4657806335f81b8714611ae057806336568abe14611a9b578063380ff99914611a5257806338c88528146118c65780634242b746146117295780635daa63c71461150a5780636f39becd146114be5780637b103999146114955780637b606fdc146113a757806381bd34d21461135e5780638430dd3a146111ce57806391d1485414611185578063a217fddf14611169578063bc197c8114610f39578063c10e515314610e82578063c2fe518514610c5a578063c555abb414610906578063cee0826d146107db578063d395a21214610600578063d547741f146105b9578063d6bd07ee1461057e578063d74238581461055e578063e086e5ec146104cd578063f07a380e1461048b578063f23a6e61146102b65763f4f3b2000361000f57346102b35760203660031901126102b3576101c961261b565b6101d16130ab565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156102a8578391610272575b506040519063a9059cbb60e01b84523360045260245260208360448180865af1906001845114821615610252575b5015610240575080f35b635274afe760e01b8252600452602490fd5b600182151661026a5750813b15153d1516165f610236565b3d84823e3d90fd5b90506020813d6020116102a0575b8161028d6020938361265d565b8101031261029c57515f610208565b5f80fd5b3d9150610280565b6040513d85823e3d90fd5b80fd5b50346102b35760a03660031901126102b3576102d061261b565b6102d8612631565b6044359160643591608435906001600160401b0382116104875760249261030661030c9336906004016126ad565b91612ea3565b3386526003602052604086208587526020526040862060018060a01b0383165f5260205260405f2061033f85825461288a565b9055801561048057610351904261288a565b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20548111610451575b506001546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561044657604080915f5160206136675f395f51905f52948891610424575b5001519533815260056020528181208682526020522060018060a01b0382165f5260205260405f20549061040f60405192839260018060a01b031697339684612aa1565b0390a460405163f23a6e6160e01b8152602090f35b61044091503d808a833e610438818361265d565b8101906128fe565b5f6103cb565b6040513d87823e3d90fd5b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f610381565b5084610351565b8580fd5b50346102b35760403660031901126102b3576104b96104a861261b565b6104b0612bff565b6024359061332b565b60015f5160206136875f395f51905f525580f35b50346102b357806003193601126102b3576104e66130ab565b8080808047335af13d15610559573d6104fe81612692565b9061050c604051928361265d565b81528260203d92013e5b1561051e5780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b610516565b50346102b3576104b96105703661271d565b91610579612bff565b6134bb565b50346102b35760803660031901126102b3576104b961059b61261b565b6105a3612605565b906105ac612bff565b6044359060243590612c83565b50346102b35760403660031901126102b3576105fc6004356105d9612631565b906105f76105f2825f525f602052600160405f20015490565b6130fa565b61343b565b5080f35b50346102b35761060f36612757565b91929361061a612bff565b610625828614612812565b610630831515612a25565b6001546040516390229af760e01b8152306004820152908790829060249082906001600160a01b03165afa80156107d05760409188916107b6575b500151909490913391875b818110610692578860015f5160206136875f395f51905f525580f35b806106a86106a3600193858c612852565b612876565b6106b382868b612852565b3590838060a01b031690818c52600360205260408c20818d5260205260408c20875f526020526106e860405f20541515612a68565b818c52600560205260408c20818d5260205260408c20875f5260205260405f2054894282115f146107ab5761071c9161288a565b828d5260056020528c8260408220915260205260408d20885f5260205260405f2055818c52600360205260408c20818d5260205260408c20875f5260205260405f205491808d5260056020528c8260408220915260205260408d20885f526020525f5160206136675f395f51905f526107a260405f20546040519182918d339884612aa1565b0390a401610676565b61071c91504261288a565b6107ca91503d808a833e610438818361265d565b5f61066b565b6040513d89823e3d90fd5b50346102b357806107eb36612757565b6107f9959392949195612bff565b610804868414612812565b80156108e757604080513360208201529081019190915261083281606081015b03601f19810183528261265d565b915b835b818110610852578460015f5160206136875f395f51905f525580f35b6001600160a01b036108686106a3838587612852565b16610874828989612852565b3590803b156108e3578587916108a39383604051809681958294635c46a7ef60e11b8452303360048601612bce565b03925af19081156108d85786916108bf575b5050600101610836565b816108c99161265d565b6108d457845f6108b5565b8480fd5b6040513d88823e3d90fd5b8680fd5b506040513360208201526020815261090060408261265d565b91610834565b50346102b35760a03660031901126102b35761092061261b565b906024356001600160401b038111610c56576109409036906004016125d5565b90926044356001600160401b038111610c52576109619036906004016125d5565b94909261096c612605565b90608435610978612bff565b610983888314612812565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015610c47578990610c08575b6109ce9150949194612c37565b6001600160a01b039093169233885b848110610ae3575050509686978015155f14610ac4576040805133602082015290810191909152610a118160608101610824565b945b833b15610ac057610a7c8896610a6a610a589989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612b96565b86810360031901606488015291612b96565b838103600319016084850152906129a9565b03925af18015610ab557610aa0575b5060015f5160206136875f395f51905f525580f35b81610aaa9161265d565b6102b357805f610a8b565b6040513d84823e3d90fd5b8780fd5b5060405133602082015260208152610add60408261265d565b94610a13565b808b610afe82610af66001958a8d612852565b35928d612852565b3590888d5260036020528c8160408220915260205260408d20855f52602052610b2d8260405f20541015612afa565b888d5260056020528c8160408220915260205260408d20855f52602052610b5a60405f2054421015612b3d565b888d5260036020528c8160408220915260205260408d20855f5260205260405f20610b86838254612b89565b9055888d5260036020528c8160408220915260205260408d20855f5260205260405f205415610be0575b604080519283526001600160a01b038716602084015233928a915f5160206136a75f395f51905f5291a4016109dd565b888d5260056020528c8160408220915260205260408d20855f526020528c60405f2055610bb0565b506020813d602011610c3f575b81610c226020938361265d565b81010312610c3b57610c366109ce916128ab565b6109c1565b8880fd5b3d9150610c15565b6040513d8b823e3d90fd5b8380fd5b5080fd5b50346102b35760803660031901126102b357610c7461261b565b602435610c7f612647565b8360643593610c8c612bff565b60018060a01b031691828252600260205260408220848352602052610cbe60018060a01b0360408420541633146129e9565b60015460405163b9209e3360e01b81526001600160a01b0383811660048301819052979260209183916024918391165afa8015610e77578490610e3c575b610d069150612c37565b838352600460205260408320858452602052610d286040842054421015612b3d565b838352600260209081526040808520878652825280852080546001600160a01b03191690558585526004825280852087865290915283208390558015610e1d576040805133602082015290810191909152610d868160608101610824565b905b833b15610e1957848391610db16040519485938493635c46a7ef60e11b85523060048601612bce565b038183875af18015610ab557610e04575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f5160206136875f395f51905f525580f35b81610e0e9161265d565b610c5257835f610dc2565b8280fd5b5060405133602082015260208152610e3660408261265d565b90610d88565b506020813d602011610e6f575b81610e566020938361265d565b81010312610c5257610e6a610d06916128ab565b610cfc565b3d9150610e49565b6040513d86823e3d90fd5b50346102b35760603660031901126102b3576004356001600160401b038111610c5657610eb39036906004016125d5565b6024356001600160401b038111610c5257610ed29036906004016125d5565b610eda612647565b92610ee3612bff565b610eee828214612812565b855b818110610f0c578660015f5160206136875f395f51905f525580f35b80610f3386610f216106a3600195878c612852565b610f2c84888a612852565b35906134bb565b01610ef0565b50346102b35760a03660031901126102b357610f5361261b565b610f5b612631565b916044356001600160401b038111610c5657610f7b9036906004016127ab565b926064356001600160401b038111610e1957610f9b9036906004016127ab565b926084356001600160401b038111610c525790610fc0610fd3939236906004016126ad565b91610fce8751875114612812565b612ea3565b909290801561116257610fe6904261288a565b6001546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa908115610e7757906040918591611148575b50015192805b8651811015611136578061103f60019289612bba565b5161104a8287612bba565b519033855260036020526040852081865260205260408520848060a01b038a165f5260205260405f2061107e83825461288a565b905533855260056020526040852081865260205260408520848060a01b038a165f5260205260405f20548611611108575b33855260056020526040852081865260205260408520848060a01b038a165f5260205260405f2054915f5160206136675f395f51905f52604051806110ff8d898060a01b0316968d339684612aa1565b0390a401611029565b33855260056020526040852081865260205260408520848060a01b038a165f526020528560405f20556110af565b60405163bc197c8160e01b8152602090f35b61115c91503d8087833e610438818361265d565b5f611023565b5081610fe6565b50346102b357806003193601126102b357602090604051908152f35b50346102b35760403660031901126102b35760406111a1612631565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102b3576111dd36612757565b906111e6612bff565b6111f1818514612812565b6111fc821515612a25565b6001546040516390229af760e01b8152306004820152908790829060249082906001600160a01b03165afa80156107d0576040918891611344575b5001519386805b82811061125a575060015f5160206136875f395f51905f525580f35b86866001937f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad361132e60406112a0878f61129a6106a3838f938f90612852565b97612852565b3594888060a01b03169384815260026020528181208682526020526112d0338a8060a01b038484205416146129e9565b8481526004602052818120868252602052818120548c4282115f14611339576112f89161288a565b858252600460205282822087835260205282822055848152600460205281812086825260205220546040519182913397836129cd565b0390a401879061123e565b6112f891504261288a565b61135891503d808a833e610438818361265d565b5f611237565b50346102b357604061136f3661271d565b939160018060a01b031682526003602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102b35760603660031901126102b3576004356001600160401b038111610c56576113d89036906004016125d5565b6024356001600160401b038111610c52576113f79036906004016125d5565b6044929192356001600160401b038111610487576114199036906004016125d5565b919092611424612bff565b8181148061148c575b61143690612812565b865b818110611454578760015f5160206136875f395f51905f525580f35b806114866114686106a3600194868c612852565b61147383878b612852565b3561147f84898b612852565b35916131ba565b01611438565b5081831461142d565b50346102b357806003193601126102b3576001546040516001600160a01b039091168152602090f35b50346102b35760403660031901126102b3576020906001600160a01b036114e361261b565b168152600282526040812060243582528252604060018060a01b0391205416604051908152f35b50346102b35760603660031901126102b35761152461261b565b906024356001600160401b038111610c56576115449036906004016125d5565b6044356001600160401b038111610c52576115639036906004016125d5565b92909161156e612bff565b611579848214612812565b33956001600160a01b031690855b8181106116075750859650813b15610487578560206115d48296610a5898604051998a988997631759616b60e11b89523060048a01523360248a015260a060448a015260a4890191612b96565b8284820391600319830160848701525201925af18015610ab557610aa0575060015f5160206136875f395f51905f525580f35b806116156001928487612852565b35611621828989612852565b3590858a52600360205260408a20818b5260205260408a208b5f5260205261164f8260405f20541015612afa565b858a52600560205260408a20818b5260205260408a208b5f5260205261167b60405f2054421015612b3d565b858a52600360205260408a20818b5260205260408a208b5f5260205260405f206116a6838254612b89565b9055858a52600360205260408a20818b5260205260408a208b5f5260205260405f205415611702575b604051918252857fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a401611587565b858a52600560205260408a20818b5260205260408a208b5f526020528960405f20556116cf565b50346102b35760803660031901126102b3576004356001600160401b038111610c565761175a9036906004016125d5565b826024356001600160401b038111610c565761177a9036906004016125d5565b92906044356001600160401b038111610c525761179b9036906004016125d5565b9290946064356117a9612bff565b818314806118bd575b6117bb90612812565b801561189e5760408051336020820152908101919091526117df8160608101610824565b935b855b8381106117ff578660015f5160206136875f395f51905f525580f35b6001600160a01b036118156106a383878d612852565b16611821828588612852565b3561182d83858c612852565b3590823b1561189a5761185e928a92838b9360405196879586948593637921219560e11b8552303360048701612abe565b03925af190811561188f57889161187a575b50506001016117e3565b816118849161265d565b6108e357865f611870565b6040513d8a823e3d90fd5b8980fd5b50604051336020820152602081526118b760408261265d565b936117e1565b508185146117b2565b50346102b3576119546118d8366126f3565b9290916118e3612bff565b6001600160a01b03168085526003602090815260408087208588528252808720335f908152925290205490939061191b901515612a68565b611926811515612a25565b8385526005602090815260408087208588528252808720335f908152925290205442811115611a4b5761288a565b8284526005602052604084208285526020526040842060018060a01b0333165f5260205260405f205560248360018060a01b0360015416604051928380926390229af760e01b82523060048301525afa8015610e77576040918591611a31575b5001518284526003602090815260408086208487528252808620335f8181529184528282205487895260058552838920878a528552838920828452909452908290205491519095935f5160206136675f395f51905f529391928392611a1a929084612aa1565b0390a460015f5160206136875f395f51905f525580f35b611a4591503d8087833e610438818361265d565b5f6119b4565b504261288a565b50346102b3576040611a633661271d565b939160018060a01b031682526005602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102b35760403660031901126102b357611ab5612631565b336001600160a01b03821603611ad1576105fc9060043561343b565b63334bd91960e11b8252600482fd5b50346102b35760a03660031901126102b357611afa61261b565b60243560443591611b09612605565b8460843592611b16612bff565b6001600160a01b03168082526003602090815260408084208785528252808420335f9081529252902054909390611b4f90871115612afa565b60015460405163b9209e3360e01b81526001600160a01b038581166004830152909160209183916024918391165afa80156102a8578390611d0b575b611b959150612c37565b8382526005602090815260408084208785528252808420335f9081529252902054611bc290421015612b3d565b8382526003602052604082208583526020526040822060018060a01b0333165f5260205260405f20611bf5878254612b89565b90558382526003602090815260408084208785528252808420335f908152925290205415611ce3575b8015611cc5576040805133602082015290810191909152611c428160608101610824565b833b15610c565781611c6c9160405180938192637921219560e11b83528a8a893060048701612abe565b038183885af18015610ab557611cb0575b5050604080519485526001600160a01b03909116602085015233935f5160206136a75f395f51905f529181908101611a1a565b81611cba9161265d565b6108d457845f611c7d565b5060405133602082015260208152611cde60408261265d565b611c42565b8382526005602090815260408084208785528252808420335f90815292529020829055611c1e565b506020813d602011611d3e575b81611d256020938361265d565b81010312610e1957611d39611b95916128ab565b611b8b565b3d9150611d18565b50346102b35760403660031901126102b3576004356001600160401b038111610c5657611d779036906004016125d5565b6024356001600160401b038111610c5257611d969036906004016125d5565b9091611da0612bff565b611dab828214612812565b845b818110611dc9578560015f5160206136875f395f51905f525580f35b80611def611ddd6106a3600194868a612852565b611de8838789612852565b359061332b565b01611dad565b50346102b3576104b9611e07366126f3565b91611e10612bff565b6131ba565b503461029c57608036600319011261029c57611e2f61261b565b6024356001600160401b03811161029c57611e4e9036906004016125d5565b91906044356001600160401b03811161029c57611e6f9036906004016125d5565b9093611e79612605565b91611e82612bff565b611e8d818314612812565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015611f85575f906120af575b611ed89150949194612c37565b6001600160a01b0390931692335f5b848110611f90575050506040519433602087015260208652611f0a60408761265d565b833b1561029c57611f4f5f96610a6a610a589989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612b96565b03925af18015611f8557611f72575060015f5160206136875f395f51905f525580f35b611f7e91505f9061265d565b5f5f610a8b565b6040513d5f823e3d90fd5b80611f9e600192878a612852565b35611faa82878d612852565b3590885f52600360205260405f20815f5260205260405f20855f52602052611fd88260405f20541015612afa565b885f52600560205260405f20815f5260205260405f20855f5260205261200460405f2054421015612b3d565b885f52600360205260405f20815f5260205260405f20855f5260205260405f2061202f838254612b89565b9055885f52600360205260405f20815f5260205260405f20855f5260205260405f205415612088575b604080519283526001600160a01b038716602084015233928a915f5160206136a75f395f51905f5291a401611ee7565b885f52600560205260405f20815f5260205260405f20855f526020525f6040812055612058565b506020813d6020116120e2575b816120c96020938361265d565b8101031261029c576120dd611ed8916128ab565b611ecb565b3d91506120bc565b3461029c57604036600319011261029c5761001a600435612109612631565b906121226105f2825f525f602052600160405f20015490565b613132565b3461029c576121a5612138366126f3565b929091612143612bff565b60018060a01b031692835f52600260205260405f20835f5260205261217560018060a01b0360405f20541633146129e9565b612180811515612a25565b835f52600460205260405f20835f5260205260405f20544281115f14611a4b5761288a565b825f52600460205260405f20825f5260205260405f205560245f60018060a01b0360015416604051928380926390229af760e01b82523060048301525afa8015611f85576040915f91612256575b50015191805f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad361224060405f20546040519182913397836129cd565b0390a460015f5160206136875f395f51905f5255005b61226a91503d805f833e610438818361265d565b846121f3565b3461029c57602036600319011261029c57602061229a6004355f525f602052600160405f20015490565b604051908152f35b3461029c57608036600319011261029c576122bb61261b565b6122c3612631565b9060443591606435916001600160401b03831161029c576103066122eb9336906004016126ad565b335f908152600260209081526040808320868452909152902080546001600160a01b0319166001600160a01b039093169283179055909190801561242557612333904261288a565b335f52600460205260405f20825f5260205260405f20548111612408575b506001546040516390229af760e01b8152306004820152905f90829060249082906001600160a01b03165afa8015611f85576040915f916123ee575b500151335f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad36123d960405f20546040519182913395836129cd565b0390a4604051630a85bd0160e11b8152602090f35b61240291503d805f833e610438818361265d565b8461238d565b335f52600460205260405f20825f5260205260405f205582612351565b505f612333565b3461029c57604036600319011261029c576001600160a01b0361244d61261b565b165f52600460205260405f206024355f52602052602060405f2054604051908152f35b3461029c57608036600319011261029c576004356001600160401b03811161029c576124a09036906004016125d5565b906024356001600160401b03811161029c576124c09036906004016125d5565b9190926044356001600160401b03811161029c576124e29036906004016125d5565b94906124ec612605565b926124f5612bff565b8581148061255f575b61250790612812565b5f5b8181106125235760015f5160206136875f395f51905f5255005b8061255986898b6125528561254a816125438f60019b8d6106a392612852565b958d612852565b35928a612852565b3591612c83565b01612509565b508587146124fe565b3461029c57602036600319011261029c576004359063ffffffff60e01b821680920361029c57602091637965db0b60e01b81149081156125aa575b5015158152f35b630271189760e51b8114915081156125c4575b50836125a3565b6301ffc9a760e01b149050836125bd565b9181601f8401121561029c578235916001600160401b03831161029c576020808501948460051b01011161029c57565b606435906001600160a01b038216820361029c57565b600435906001600160a01b038216820361029c57565b602435906001600160a01b038216820361029c57565b604435906001600160a01b038216820361029c57565b90601f801991011681019081106001600160401b0382111761267e57604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b03811161267e57601f01601f191660200190565b81601f8201121561029c578035906126c482612692565b926126d2604051948561265d565b8284526020838301011161029c57815f926020809301838601378301015290565b606090600319011261029c576004356001600160a01b038116810361029c57906024359060443590565b606090600319011261029c576004356001600160a01b038116810361029c5790602435906044356001600160a01b038116810361029c5790565b606060031982011261029c576004356001600160401b03811161029c5781612781916004016125d5565b92909291602435906001600160401b03821161029c576127a3916004016125d5565b909160443590565b9080601f8301121561029c578135916001600160401b03831161267e578260051b90604051936127de602084018661265d565b845260208085019282010192831161029c57602001905b8282106128025750505090565b81358152602091820191016127f5565b1561281957565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156128625760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b038116810361029c5790565b9190820180921161289757565b634e487b7160e01b5f52601160045260245ffd5b5190811515820361029c57565b81601f8201121561029c578051906128cf82612692565b926128dd604051948561265d565b8284526020838301011161029c57815f9260208093018386015e8301015290565b60208183031261029c578051906001600160401b03821161029c570160808183031261029c5760405191608083018381106001600160401b0382111761267e5760405261294a826128ab565b8352602082015160ff8116810361029c57602084015260408201516001600160401b03811161029c578161297f9184016128b8565b604084015260608201516001600160401b03811161029c576129a192016128b8565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9291906129e46020916040865260408601906129a9565b930152565b156129f057565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b15612a2c57565b60405162461bcd60e51b815260206004820152601460248201527304475726174696f6e206d757374206265203e20360641b6044820152606490fd5b15612a6f57565b60405162461bcd60e51b815260206004820152600a6024820152694e6f2062616c616e636560b01b6044820152606490fd5b9392916129e49060409286526060602087015260608601906129a9565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a060808201819052612af7929101906129a9565b90565b15612b0157565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b15612b4457565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b9190820391821161289757565b81835290916001600160fb1b03831161029c5760209260051b809284830137010190565b80518210156128625760209160051b010190565b6001600160a01b039182168152911660208201526040810191909152608060608201819052612af7929101906129a9565b60025f5160206136875f395f51905f525414612c285760025f5160206136875f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b15612c3e57565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b6001600160a01b03165f818152600360209081526040808320858452825280832033845290915290205492939192909190612cc090851115612afa565b60015460405163b9209e3360e01b81526001600160a01b038381166004830152909160209183916024918391165afa8015611f85575f90612e54575b612d069150612c37565b5f8281526005602090815260408083208684528252808320338452909152902054612d3390421015612b3d565b815f52600360205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f20612d66858254612b89565b90555f828152600360209081526040808320868452825280832033845290915290205415612e2e575b6040519033602083015260208252612da860408361265d565b823b1561029c575f612dd29260405180948192637921219560e11b83528989873060048701612abe565b038183875af1908115611f85575f5160206136a75f395f51905f5292612e1992612e1e575b50604080519687526001600160a01b0390911660208701523395918291820190565b0390a4565b5f612e289161265d565b5f612df7565b5f8281526005602090815260408083208684528252808320338452909152812055612d8f565b506020813d602011612e87575b81612e6e6020938361265d565b8101031261029c57612e82612d06916128ab565b612cfc565b3d9150612e61565b51906001600160a01b038216820361029c57565b6001600160a01b038116801593929184156130a65750815b60015460405163b9209e3360e01b81526001600160a01b0394851660048201525f9692949092911690602083602481855afa928315611f85575f9361306a575b50159283612ff9575b5050835160208103612f6857508115612f60575b5015612f45575060208180518101031261029c576001600160a01b0390612f4190602001612e8f565b1691565b9291506020815191818082019384920101031261029c575190565b90505f612f18565b92959392604014612f7857505050565b919350809294509115612ff1575b5015612fb85760408180518101031261029c576040612fa760208301612e8f565b9101516001600160a01b0390911691565b60405162461bcd60e51b8152602060048201526011602482015270556e617574686f72697a6564206461746160781b6044820152606490fd5b90505f612f86565b60209192935060246040518094819363b9209e3360e01b835260048301525afa908115611f85575f91613030575b50905f80612f04565b90506020813d602011613062575b8161304b6020938361265d565b8101031261029c5761305c906128ab565b5f613027565b3d915061303e565b9092506020813d60201161309e575b816130866020938361265d565b8101031261029c57613097906128ab565b915f612efb565b3d9150613079565b612ebb565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16156130e357565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff161561311c5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff166131b4575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b03165f81815260036020908152604080832085845282528083203384529091529020546131f090841115612afa565b5f818152600560209081526040808320858452825280832033845290915290205461321d90421015612b3d565b805f52600360205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f20613250848254612b89565b90555f818152600360209081526040808320858452825280832033845290915290205415613305575b803b1561029c57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af18015611f85576132f5575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f6132ff9161265d565b5f6132c6565b5f8181526005602090815260408083208584528252808320338452909152812055613279565b6001600160a01b039081165f81815260026020908152604080832086845290915281205490939261335e911633146129e9565b805f52600460205260405f20825f5260205261338060405f2054421015612b3d565b805f52600260205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055805f52600460205260405f20825f526020525f6040812055803b1561029c57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af18015611f8557613426575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b6134339193505f9061265d565b5f915f6133fe565b5f818152602081815260408083206001600160a01b038616845290915290205460ff16156131b4575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b60018060a01b0316805f52600260205260405f20825f526020526134ec60018060a01b0360405f20541633146129e9565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052959260209183916024918391165afa8015611f85575f9061362b575b6135349150612c37565b815f52600460205260405f20835f5260205261355660405f2054421015612b3d565b815f52600260205260405f20835f5260205260405f206bffffffffffffffffffffffff60a01b8154169055815f52600460205260405f20835f526020525f604081205560405190336020830152602082526135b260408361265d565b823b1561029c57835f916135db6040519485938493635c46a7ef60e11b85523060048601612bce565b038183865af18015611f855761361b575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f6136259161265d565b5f6135ec565b506020813d60201161365e575b816136456020938361265d565b8101031261029c57613659613534916128ab565b61352a565b3d915061363856fe2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa359b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00d582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1a26469706673582212207fefef0330e4d4dd79952492b2d49e2d286a2eadebcdc691a2321573dfe7f01964736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034609157601f6104dc38819003918201601f19168301916001600160401b03831184841017609557808492604094855283398101031260915780516001600160a01b0381169190829003609157602001516001600160a01b038116919082900360915760018060a01b03195f5416175f5560018060a01b0319600154161760015560405161043290816100aa8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea2646970667358221220f286188b4730b00fdb0e6e8d36c29f6a7aeb6f0777b0ce4b15243f938d5b69fa64736f6c634300081c0033"
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
      "bytecode": "0x60a03461010357601f613cd438819003918201601f19168301916001600160401b038311848410176101075780849260409485528339810103126101035780610056602061004f6100a49461011b565b920161011b565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600580546001600160a01b03191691831691909117905561012f565b50604051613afb90816101b982396080518181816107f00152818161088f0152818161112c0152818161149d01528181611f740152818161219101528181612f1f015281816131fd015281816139670152818161399101526139cf0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820361010357565b6001600160a01b0381165f9081525f516020613cb45f395f51905f52602052604090205460ff166101b3576001600160a01b03165f8181525f516020613cb45f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a71461191e57508063058a56ac146117dc5780630ad794ea1461172a5780631205fd001461166e578063161878e9146116445780631b8e41461461153d578063248a9ca31461150a5780632f2ff15d146114cc5780633013ce2914611488578063326d0da01461136957806335659fb81461134c57806336568abe14611308578063373ce23b146112315780633bbb28061461120a5780633f4ba83a146111a6578063469048401461117e57806355363724146110265780635c975abb146110055780636bd3a64b14610f9457806370cdec3d14610f32578063787dce3d14610e9f5780637889ab5014610e0d5780637c3ae2be14610df05780638456cb5914610d9957806391d1485414610d505780639ac9b2a514610c9a578063a217fddf14610c80578063a7c546b314610bef578063b2ddee0614610b3e578063b3b8d361146109ce578063c7fff7191461075e578063cddc1bc114610737578063d3f494cc146106cc578063d547741f14610689578063d55a81851461065f578063d898aaf214610635578063d99647571461053c578063e086e5ec1461048a578063e74b981b146103eb578063ef71f5411461039f578063f3b5926f1461033e578063f4f3b2001461029c5763f81b9d5914610201575f61000f565b346102985761020f36611bf9565b92919461021a611db8565b610222611e71565b8585148061028f575b61023490611ca3565b5f5b8581106102505760015f516020613aa65f395f51905f5255005b806102896102696102646001948a87611ce3565b611d07565b610274838b89611ce3565b35610283610264858b8a611ce3565b916130ce565b01610236565b5085841461022b565b5f80fd5b34610298576020366003190112610298576102b5611971565b6102bd612903565b6040516370a0823160e01b8152306004820152906001600160a01b0316602082602481845afa908115610333575f916102fd575b61001a92503390611df0565b90506020823d60201161032b575b8161031860209383611c82565b810103126102985761001a9151906102f1565b3d915061030b565b6040513d5f823e3d90fd5b3461029857608036600319011261029857610357611971565b604435906001600160a01b03821682036102985761038c91610377611db8565b61037f611e71565b6064359160243590612dd9565b60015f516020613aa65f395f51905f5255005b34610298576020366003190112610298577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a335060206004356103de612903565b80600655604051908152a1005b3461029857602036600319011261029857610404611971565b61040c612903565b6001600160a01b0316801561045357600580546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc25f80a2005b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b34610298575f366003190112610298576104a2612903565b5f80808047335af13d15610537573d6001600160401b03811161052357604051906104d7601f8201601f191660200183611c82565b81525f60203d92013e5b156104e857005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b634e487b7160e01b5f52604160045260245ffd5b6104e1565b34610298577f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd61056b36611bcb565b9390610578939293611e71565b6001600160a01b0383165f8181526003602090815260408083208884528252808320338452909152908190209051919461060b916105f4906105b985611c67565b80546001600160a01b039081168652600182015460208701819052600283015460408801526003909201541660609095019485521515611d73565b82516001600160a01b031690889085908990612670565b516040805196875260208701929092526001600160a01b031690850152339380606081015b0390a4005b346102985761038c61064636611bcb565b92610652929192611db8565b61065a611e71565b611f14565b346102985761038c61067036611b13565b9361067c939193611db8565b610684611e71565b612abd565b346102985760403660031901126102985761001a6004356106a8611987565b906106c76106c2825f526001602052600160405f20015490565b612952565b612a18565b34610298576106da36611b91565b9160018060a01b03165f52600260205260405f20905f5260205260405f209060018060a01b03165f52602052608060405f208054906001810154906003600282015491015491604051938452602084015260408301526060820152f35b346102985761038c61074836611b91565b91610751611db8565b610759611e71565b6130ce565b346102985761076c36611bcb565b92610775611db8565b61077d611e71565b6001600160a01b03165f818152600260209081526040808320868452825280832033845290915290208054919291801561099257600654861061094d5785156109095782156108ba575f916003916107d56001611ed7565b87818111851461086f57610814916107ec91612a9c565b30337f000000000000000000000000000000000000000000000000000000000000000061338e565b868155836001820155426002820155015560405193845260208401525f60408401527f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be2260603394a460015f516020613aa65f395f51905f5255005b9080821061087f575b5050610814565b6108b39161088c91612a9c565b337f0000000000000000000000000000000000000000000000000000000000000000611df0565b8688610878565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601760248201527f4e65772070726963652062656c6f77206d696e696d756d0000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b34610298576109dc36611a61565b95979093949196926109ec611e71565b88821480610b35575b80610b2c575b80610b23575b610a0a90611ca3565b5f5b828110610a1557005b6001600160a01b03610a28828a89611ce3565b610a3190611d07565b161515610a3d90611d1b565b610a4881848d611ce3565b610a5190611d07565b610a5c828c88611ce3565b35610a68838a88611ce3565b35610a74848d87611ce3565b3590610a81858d8c611ce3565b610a8a90611d07565b92610a9494612670565b610a9f81848d611ce3565b610aa890611d07565b610ab3828c88611ce3565b35610abf838c86611ce3565b35610acb848b89611ce3565b3590610ad8858d8c611ce3565b610ae190611d07565b6040805192835260208301939093526001600160a01b03908116928201929092523393909116905f516020613a865f395f51905f5290606090a4600101610a0c565b50878714610a01565b508786146109fb565b508589146109f5565b3461029857604036600319011261029857610b57611971565b6001600160a01b03165f81815260036020908152604080832060243580855290835281842033855290925290912060010154610b94901515611d73565b5f828152600360208181526040808420858552825280842033855290915282208281556001810183905560028101839055015533917fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4005b346102985760a036600319011261029857610c08611971565b6024356064356084356001600160a01b0381169060443582820361029857610c475f516020613a865f395f51905f5293610c40611e71565b1515611d1b565b610c54828583888a612670565b6040805194855260208501919091526001600160a01b0391821690840152339416918060608101610630565b34610298575f3660031901126102985760206040515f8152f35b3461029857610ca8366119cd565b959493909291610cb6611db8565b610cbe611e71565b81861480610d47575b80610d3e575b610cd690611ca3565b5f5b868110610cf25760015f516020613aa65f395f51905f5255005b80610d38878a87610d31858f6102648f998b610d23828f610d1d60019f8361026491610d2a9a611ce3565b9b611ce3565b3596611ce3565b938c611ce3565b3592612dd9565b01610cd8565b50808714610ccd565b50808214610cc7565b3461029857604036600319011261029857610d69611987565b6004355f52600160205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610298575f36600319011261029857610db1612903565b610db9611e71565b600160ff195f5416175f557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b34610298575f366003190112610298576020600654604051908152f35b3461029857610e1b36611bf9565b929194610e26611db8565b610e2e611e71565b85851480610e96575b610e4090611ca3565b5f5b858110610e5c5760015f516020613aa65f395f51905f5255005b80610e90610e706102646001948a87611ce3565b610e7b838b89611ce3565b35610e8a610264858b8a611ce3565b91612bfc565b01610e42565b50858414610e37565b3461029857602036600319011261029857600435610ebb612903565b6103e88111610ef5576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600455604051908152a1005b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b34610298575f516020613a865f395f51905f52610630610f5136611bcb565b9294919390610f5e611e71565b610f6a84828789612303565b6040805194855260208501919091525f9084015233946001600160a01b0316929081906060820190565b3461029857610fa236611b91565b6001600160a01b039283165f90815260036020818152604080842095845294815284832093861683529283529083902080546001820154600283015492909301548551918716825293810192909252928101929092529091166060820152608090f35b34610298575f36600319011261029857602060ff5f54166040519015158152f35b346102985761103436611b45565b929061103e611db8565b611049848414611ca3565b33915f5b8481106110675760015f516020613aa65f395f51905f5255005b806110786102646001938886611ce3565b611083828987611ce3565b3590838060a01b031690815f52600260205260405f20815f5260205260405f20875f5260205260405f20604051906110ba82611c67565b600381549182845287810154602085015260028101546040850152015460608301526110ea575b5050500161104d565b61115090835f52600260205260405f20835f5260205260405f20895f5260205261112860405f2060035f918281558260018201558260028201550155565b51337f0000000000000000000000000000000000000000000000000000000000000000611df0565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a48780806110e1565b34610298575f366003190112610298576005546040516001600160a01b039091168152602090f35b34610298575f366003190112610298576111be612903565b5f5460ff8116156111fb5760ff19165f557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b638dfc202b60e01b5f5260045ffd5b346102985761038c61121b36611b91565b91611224611db8565b61122c611e71565b612bfc565b346102985761123f36611a61565b611250989297969195939498611db8565b611258611e71565b818314806112ff575b806112f6575b806112ed575b61127690611ca3565b5f5b8381106112925760015f516020613aa65f395f51905f5255005b806112e78989898f8f8f97896112d9828f959b8f8f6112e09760019f8580936112c5610264836112d2986112cb96611ce3565b9f611ce3565b3599611ce3565b3597611ce3565b3595611ce3565b3593612abd565b01611278565b5087811461126d565b50878914611267565b50888214611261565b3461029857604036600319011261029857611321611987565b336001600160a01b0382160361133d5761001a90600435612a18565b63334bd91960e11b5f5260045ffd5b34610298575f366003190112610298576020600454604051908152f35b346102985761137736611b45565b6113848184959414611ca3565b335f5b85811061139057005b6001906001600160a01b036113a9610264838a8a611ce3565b165f52600360205260405f206113c0828688611ce3565b355f5260205260405f20835f526020528160405f2001546113e2575b01611387565b818060a01b036113f6610264838a8a611ce3565b165f52600360205260405f2061140d828688611ce3565b355f5260205260405f20835f5260205261143b60405f2060035f918281558260018201558260028201550155565b611449610264828989611ce3565b3390611456838789611ce3565b3590848060a01b03167fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a46113dc565b34610298575f366003190112610298576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346102985760403660031901126102985761001a6004356114eb611987565b906115056106c2825f526001602052600160405f20015490565b61298c565b346102985760203660031901126102985760206115356004355f526001602052600160405f20015490565b604051908152f35b346102985761154b366119cd565b61155a97969297949194611e71565b8183148061163b575b80611632575b61157290611ca3565b5f5b83811061157d57005b8087878b5f516020613a865f395f51905f52611629611600868f818b8f8f9c8f6115eb60019f838f918f998f610264946115f89c6115f19a6115df878e6115d8826115e6988f82610d2391610d1d8f8f610264918591611ce3565b3594611ce3565b3592612303565b611ce3565b9c611ce3565b3598611ce3565b35948d611ce3565b3560405191829133978a8060a01b031695836040905f9294936060820195825260208201520152565b0390a401611574565b50878114611569565b50878214611563565b346102985761038c61165536611b13565b93611661939193611db8565b611669611e71565b612105565b346102985761167c36611a61565b61168d989297969195939498611db8565b611695611e71565b81831480611721575b80611718575b8061170f575b6116b390611ca3565b5f5b8381106116cf5760015f516020613aa65f395f51905f5255005b806117098989898f8f8f97896112d9828f959b8f8f6117029760019f8580936112c5610264836112d2986112cb96611ce3565b3593612105565b016116b5565b508781146116aa565b508789146116a4565b5088821461169e565b3461029857611738366119cd565b959661174995949593929193611db8565b611751611e71565b858814806117d3575b806117ca575b61176990611ca3565b5f5b8881106117855760015f516020613aa65f395f51905f5255005b806117c46117996102646001948d87611ce3565b8a6117a5848c8c611ce3565b356117bd856117b5818b8d611ce3565b35938c611ce3565b3592611f14565b0161176b565b50818714611760565b5081861461175a565b34610298576040366003190112610298576117f5611971565b60243590611801611db8565b6001600160a01b03165f81815260026020908152604080832085845282528083203384529091529081902090519192919061183b82611c67565b6003815491828452600181015460208501526002810154604085015201546060830152156118d9575f8381526002602081815260408084208685528252808420338552909152822082815560018101839055908101829055600301556118a090611128565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020613aa65f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b34610298576020366003190112610298576004359063ffffffff60e01b821680920361029857602091637965db0b60e01b8114908115611960575b5015158152f35b6301ffc9a760e01b14905083611959565b600435906001600160a01b038216820361029857565b602435906001600160a01b038216820361029857565b9181601f84011215610298578235916001600160401b038311610298576020808501948460051b01011161029857565b6080600319820112610298576004356001600160401b03811161029857816119f79160040161199d565b929092916024356001600160401b0381116102985781611a199160040161199d565b929092916044356001600160401b0381116102985781611a3b9160040161199d565b92909291606435906001600160401b03821161029857611a5d9160040161199d565b9091565b60a0600319820112610298576004356001600160401b0381116102985781611a8b9160040161199d565b929092916024356001600160401b0381116102985781611aad9160040161199d565b929092916044356001600160401b0381116102985781611acf9160040161199d565b929092916064356001600160401b0381116102985781611af19160040161199d565b92909291608435906001600160401b03821161029857611a5d9160040161199d565b60a0906003190112610298576004356001600160a01b0381168103610298579060243590604435906064359060843590565b6040600319820112610298576004356001600160401b0381116102985781611b6f9160040161199d565b92909291602435906001600160401b03821161029857611a5d9160040161199d565b6060906003190112610298576004356001600160a01b03811681036102985790602435906044356001600160a01b03811681036102985790565b6080906003190112610298576004356001600160a01b03811681036102985790602435906044359060643590565b6060600319820112610298576004356001600160401b0381116102985781611c239160040161199d565b929092916024356001600160401b0381116102985781611c459160040161199d565b92909291604435906001600160401b03821161029857611a5d9160040161199d565b608081019081106001600160401b0382111761052357604052565b90601f801991011681019081106001600160401b0382111761052357604052565b15611caa57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b9190811015611cf35760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102985790565b15611d2257565b60405162461bcd60e51b8152602060048201526024808201527f507269766174652062757965722063616e6e6f74206265207a65726f206164646044820152637265737360e01b6064820152608490fd5b15611d7a57565b60405162461bcd60e51b8152602060048201526016602482015275131a5cdd1a5b99c8191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b60025f516020613aa65f395f51905f525414611de15760025f516020613aa65f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615611e50575b60405215611e305750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b906001811516611e6857823b15153d15161690611e25565b503d5f823e3d90fd5b60ff5f5416611e7c57565b63d93c066560e01b5f5260045ffd5b15611e9257565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b15611ede57565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642065787069727960901b6044820152606490fd5b91909160065484106120c057831561207057611f31821515611e8b565b611f3b6001611ed7565b6001600160a01b03165f818152600260209081526040808320868452825280832033845290915290205490919061203457611f988430337f000000000000000000000000000000000000000000000000000000000000000061338e565b604051611fa481611c67565b8481526003602082018381526040830142815260608401915f8352865f52600260205260405f20885f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015560405193845260208401525f60408401527f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab60603394a4565b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4f666665722070726963652062656c6f77206d696e696d756d000000000000006044820152606490fd5b939190929360065485106120c057841561207057612124821515611e8b565b8215801561223f575b61213690611ed7565b6001600160a01b03165f8181526002602090815260408083208784528252808320338452909152902054909290612034577f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab916121b58630337f000000000000000000000000000000000000000000000000000000000000000061338e565b6040516121c181611c67565b868152600360208201838152604083014281526060840191868352885f52600260205260405f208a5f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015561223a6040519283923398846040919493926060820195825260208201520152565b0390a4565b5042831161212d565b90816020910312610298575180151581036102985790565b1561226757565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b51906001600160a01b038216820361029857565b156122be57565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b92919092821561262b57612318821515611e8b565b6001600160a01b03165f8181526003602090815260408083208784528252808320338452909152902060010154909190156123d6575b6003926040519461235e86611c67565b33808752602080880193845260408089019586525f60608a018181529781528883528181209481529382528084209284529190529020945185546001600160a01b039182166001600160a01b031991821617875591516001870155915160028601559151939092018054939092169216919091179055565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481865afa908115610333575f9161260c575b50156124ef57600181036124a0576040516331a9108f60e11b81526004810185905292602084602481865afa938415610333575f94612460575b50600393612459906001600160a01b031633146122b7565b925061234e565b93506020843d602011612498575b8161247b60209383611c82565b81010312610298576124596124916003956122a3565b9450612441565b3d915061246e565b60405162461bcd60e51b815260206004820152602160248201527f455243373231206c697374696e67206d757374206861766520616d6f756e74206044820152603160f81b6064820152608490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481865afa908115610333575f916125dd575b50156125a157604051627eeac760e11b81523360048201526024810185905292602084604481865afa938415610333575f9461256b575b50612566826003951015612260565b612459565b93506020843d602011612599575b8161258660209383611c82565b8101031261029857925192612566612557565b3d9150612579565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b6125ff915060203d602011612605575b6125f78183611c82565b810190612248565b5f612520565b503d6125ed565b612625915060203d602011612605576125f78183611c82565b5f612407565b60405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e2030000000006044820152606490fd5b9391909293841561262b57612686821515611e8b565b6001600160a01b03165f818152600360209081526040808320878452825280832033845290915290206001015490949015612749575b600393604051956126cc87611c67565b3380885260208089019485526040808a019687526001600160a01b0397881660608b019081525f9485528983528185209585529482528084209284529190529020955186546001600160a01b0319908116918616919091178755915160018701559151600286015590519390920180549092169216919091179055565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481895afa908115610333575f916128e4575b501561281357600182036124a0576040516331a9108f60e11b81526004810185905293602085602481895afa948515610333575f956127d3575b506003946127cc906001600160a01b031633146122b7565b93506126bc565b94506020853d60201161280b575b816127ee60209383611c82565b81010312610298576127cc6128046003966122a3565b95506127b4565b3d91506127e1565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481895afa908115610333575f916128c5575b50156125a157604051627eeac760e11b81523360048201526024810185905293602085604481895afa948515610333575f9561288f575b5061288a836003961015612260565b6127cc565b94506020853d6020116128bd575b816128aa60209383611c82565b810103126102985793519361288a61287b565b3d915061289d565b6128de915060203d602011612605576125f78183611c82565b5f612844565b6128fd915060203d602011612605576125f78183611c82565b5f61277a565b335f9081527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49602052604090205460ff161561293b57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260016020908152604080832033845290915290205460ff16156129765750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f8181526001602090815260408083206001600160a01b038616845290915290205460ff16612a12575f8181526001602081815260408084206001600160a01b0396909616808552959091528220805460ff19169091179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526001602090815260408083206001600160a01b038616845290915290205460ff1615612a12575f8181526001602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b91908203918211612aa957565b634e487b7160e01b5f52601160045260245ffd5b6001600160a01b03165f81815260026020908152604080832085845282528083203384529091529020805494959294919391929190831561099257600654871061094d5786156109095781156108ba57600383917f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be229583158015612baf575b612b4590611ed7565b8981811115612b8b57612b5b916107ec91612a9c565b8881556001810184905542600282015501556040805196875260208701919091528501523393806060810161223a565b90808210612b9b575b5050612b5b565b612ba89161088c91612a9c565b885f612b94565b50428411612b3c565b15612bbf57565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b6001600160a01b038181165f81815260026020908152604080832087845282528083209488168352939052829020915191949092612c3983611c67565b8554808452612c6b600360018901549860208701998a5260028101546040880152015491606086019283521515612bb8565b518015908115612dce575b5015612d9957612cf9612d0492855f52600260205260405f20875f5260205260405f2060018060a01b0382165f52602052612cc560405f2060035f918281558260018201558260028201550155565b5f8681526003602090815260408083208a84528252808320338452909152902060010154612d3a575b875190338885613451565b8251908533916138c9565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a4565b5f8681526003602081815260408084208b855282528084203385529091528220828155600181018390556002810183905501553387877fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4612cee565b60405162461bcd60e51b815260206004820152600d60248201526c13d999995c88195e1c1a5c9959609a1b6044820152606490fd5b90504211155f612c76565b9290919260018060a01b03811691825f52600360205260405f20845f5260205260405f2060018060a01b0386165f5260205260405f2091604051612e1c81611c67565b83546001600160a01b0390811682526001850154602083018181526002870154604085019081526003909701549092166060909301928352909390612e62901515611d73565b83510361307757516001600160a01b0316801590811561306d575b5015613009575f84815260036020818152604080842089855282528084206001600160a01b038b1685528252808420848155600181018590556002808201869055930184905587845291815281832088845281528183203384529052908190209051612f5b9291612eed82611c67565b6003815491828452600181015460208501526002810154604085015201546060830152612f9f575b50612f43835130337f000000000000000000000000000000000000000000000000000000000000000061338e565b612f51845133898985613451565b86868451926138c9565b519051906040519460018060a01b03168552602085015260408401527f110d72c9f92ff669bf5211e868578c38dff8ce680bdf8b69ad34a1c5c106829860603394a4565b5f8681526002602081815260408084208b8552825280842033855290915282208281556001810183905590810182905560030155612fdc90611128565b3386867f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a45f612f15565b60405162461bcd60e51b815260206004820152603660248201527f50726976617465206c697374696e673a206f6e6c7920746865207370656369666044820152756965642062757965722063616e20707572636861736560501b6064820152608490fd5b905033145f612e7d565b60405162461bcd60e51b815260206004820152602960248201527f5072696365206d69736d617463683a206c697374696e672070726963652068616044820152681cc818da185b99d95960ba1b6064820152608490fd5b60018060a01b0316805f52600260205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f206040519061310b82611c67565b61313a815480845260036001840154936020860194855260028101546040870152015460608501521515612bb8565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa908115610333575f9161336f575b501561329c57506040516331a9108f60e11b81526004810184905290602082602481865afa918215610333575f9261325b575b50613221916131b7906001600160a01b031633146122b7565b825f52600260205260405f20845f5260205260405f2060018060a01b0386165f526020526131f960405f2060035f918281558260018201558260028201550155565b51847f0000000000000000000000000000000000000000000000000000000000000000611df0565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a4565b91506020823d602011613294575b8161327660209383611c82565b81010312610298576131b761328d613221936122a3565b925061319e565b3d9150613269565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa908115610333575f91613350575b50156125a157604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610333575f9161331c575b506133179061322193511115612260565b6131b7565b90506020813d602011613348575b8161333760209383611c82565b810103126102985751613221613306565b3d915061332a565b613369915060203d602011612605576125f78183611c82565b5f6132d0565b613388915060203d602011612605576125f78183611c82565b5f61316b565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f51148216156133df575b6040525f60605215611e305750565b906001811516611e6857823b15153d151616906133d0565b156133fe57565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201525f95929493926001600160a01b039092169190602081602481865afa908115610333575f916138aa575b5015613705576001036136c1576040516331a9108f60e11b81526004810185905291602083602481855afa928315613616578693613685575b506001600160a01b0381811693168390036136405760405163e985e9c560e01b81526001600160a01b03919091166004820152306024820152602081604481855afa908115613616578691613621575b50801561359a575b61352f906133f7565b803b1561359657849291836064926040519687958694632142170760e11b8652600486015260018060a01b0316602485015260448401525af1801561358b57613576575050565b613581828092611c82565b6135885750565b80fd5b6040513d84823e3d90fd5b8480fd5b5060405163020604bf60e21b815260048101859052602081602481855afa80156136165786906135d7575b6001600160a01b031630149050613526565b506020813d60201161360e575b816135f160209383611c82565b8101031261360a5761360561352f916122a3565b6135c5565b8580fd5b3d91506135e4565b6040513d88823e3d90fd5b61363a915060203d602011612605576125f78183611c82565b5f61351e565b60405162461bcd60e51b815260206004820152601d60248201527f46726f6d206164647265737320646f6573206e6f74206f776e204e46540000006044820152606490fd5b9092506020813d6020116136b9575b816136a160209383611c82565b8101031261360a576136b2906122a3565b915f6134ce565b3d9150613694565b606460405162461bcd60e51b815260206004820152602060248201527f455243373231207472616e7366657220616d6f756e74206d75737420626520316044820152fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b600482015294955093909190602081602481865afa908115610333575f9161388b575b50156125a157604051627eeac760e11b81526001600160a01b038216600482015260248101869052602081604481865afa80156103335785905f90613855575b61378992501015612260565b60405163e985e9c560e01b81526001600160a01b0382166004820152306024820152602081604481865afa8015610333576137cb915f91613836575b506133f7565b813b15610298575f60c49281956040519788968795637921219560e11b875260018060a01b0316600487015260018060a01b031660248601526044850152606484015260a060848401528160a48401525af180156103335761382a5750565b5f61383491611c82565b565b61384f915060203d602011612605576125f78183611c82565b5f6137c5565b50506020813d602011613883575b8161387060209383611c82565b810103126102985784613789915161377d565b3d9150613863565b6138a4915060203d602011612605576125f78183611c82565b5f61373d565b6138c3915060203d602011612605576125f78183611c82565b5f613495565b9190600454808502908582041485151715612aa9576127109004925f9060405f93604482518094819363152a902d60e11b835260048301528a602483015260018060a01b03165afa805f925f92613a43575b50613a29575b5050808401808511612aa9578561383496869211613a0d575b61394861394d928492612a9c565b612a9c565b93801515806139f9575b6139bc575b508061398b575b50507f0000000000000000000000000000000000000000000000000000000000000000611df0565b6139b5917f0000000000000000000000000000000000000000000000000000000000000000611df0565b5f80613963565b6005546139f391906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000611df0565b5f61395c565b506005546001600160a01b03161515613957565b819250613948613a2061394d9383612a9c565b9392505061393a565b6001600160a01b0382161561392157915091505f80613921565b925090506040823d604011613a7d575b81613a6060409383611c82565b81010312610298576020613a73836122a3565b920151905f61391b565b3d9150613a5356fe1da60d1ebc86294425cc61f1c7dc4439f6cb8a970869c2764900c57f5828a2e19b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220556bbf840b81ce5f84b49e17e4faa2da49ee9380d991b0ec01f7d96ce2aa504464736f6c634300081c0033a6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220649e45ac956353186d63d1576be6ce20a6f3a893687fa2f37378daaed0db67b464736f6c634300081c0033"
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
      "bytecode": "0x60a0604052346102ac5761267080380380610019816102c4565b92833981016060828203126102ac5781516001600160401b0381116102ac5782019080601f830112156102ac578151916001600160401b0383116102b0578260051b9060208061006a8185016102c4565b8096815201928201019283116102ac57602001905b8282106102945750505061009a6040602084015193016102e9565b81511561025a578215158061024f575b15610216576001600160a01b03169182156101dc575f5b825181101561016757600581901b8301602001516001600160a01b031690811561013257816100f1600193610386565b6100fd575b50016100c1565b8061012b917f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a26102fd565b505f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600355608052604051908152a160405161225d90816103f38239608051818181610271015281816105cd015281816108e401528181610bc101528181610d5f01528181610f150152611c6f0152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b602080916102a1846102e9565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b038111838210176102b057604052565b51906001600160a01b03821682036102ac57565b6001600160a01b0381165f9081525f5160206126505f395f51905f52602052604090205460ff16610381576001600160a01b03165f8181525f5160206126505f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b805f52600260205260405f2054155f1461038157600154680100000000000000008110156102b05760018101806001558110156103de57819060015f5260205f200155600154905f52600260205260405f2055600190565b634e487b7160e01b5f52603260045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa895146113dc578063013cf08b1461137f57806301ffc9a71461130f5780630d61b519146111b45780631133b210146110b2578063150b7a021461105d5780631626ba7e1461100c578063173825d914610f8f57806319822f7c14610ed95780632358d5a814610e8d578063248a9ca314610e635780632f2ff15d14610e265780632f54bf6e14610de457806336568abe14610da05780633e1b081214610d1657806342cde4e814610cf957806348e2c1b914610baf5780635d35a3d914610ab3578063694e80c314610a4f5780637065cb48146109bb57806374420f4c146108a957806391d14854146108615780639330a2221461074f5780639f690535146106a2578063a0e67e2b14610616578063a217fddf146105fc578063b0d691fe146105b8578063bc197c8114610523578063c7f758a8146102f1578063d087d28814610240578063d547741f146101fe578063da35c664146101e15763f23a6e610361000e57346101dd5760a03660031901126101dd576101a161150a565b506101aa611520565b506084356001600160401b0381116101dd576101ca903690600401611587565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b346101dd575f3660031901126101dd576020600654604051908152f35b346101dd5760403660031901126101dd5761001860043561021d611520565b9061023b610236825f525f602052600160405f20015490565b611e8c565b611f4c565b346101dd575f3660031901126101dd57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b3575b604051908152602090f35b506020813d6020116102de575b816102cd602093836114d2565b810103126101dd57602090516102a8565b3d91506102c0565b6040513d5f823e3d90fd5b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f208054610325816114f3565b9061033360405192836114d2565b808252601f19610342826114f3565b01366020840137610352816114f3565b61035f60405191826114d2565b81815261036b826114f3565b602082019490601f1901368637610381836114f3565b9261038f60405194856114d2565b808452601f1961039e826114f3565b015f5b8181106105035750505f5b818110610496575050600260018201549101549160206103d76040519660e0885260e088019061171d565b918683038288015251918281520195905f5b818110610480575050508385036040850152825180865260208601906020808260051b8901019501915f905b8282106104555760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b90919295602080610472600193601f198d82030186528a51611678565b980192019201909291610415565b82518852602097880197909201916001016103e9565b806104a3600192856117b6565b50828060a01b039054166104b78289611b21565b52816104c382866117b6565b5001546104d08287611b21565b526104e760026104e083876117b6565b5001611bcc565b6104f18288611b21565b526104fc8187611b21565b50016103ac565b8060606020809389010152016103a1565b63635e873760e01b5f5260045ffd5b346101dd5760a03660031901126101dd5761053c61150a565b50610545611520565b506044356001600160401b0381116101dd57610565903690600401611759565b506064356001600160401b0381116101dd57610585903690600401611759565b506084356001600160401b0381116101dd576105a5903690600401611587565b5060405163bc197c8160e01b8152602090f35b346101dd575f3660031901126101dd576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346101dd575f3660031901126101dd5760206040515f8152f35b346101dd575f3660031901126101dd5760405180602060015491828152019060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f5b81811061068c5761068885610674818703826114d2565b60405191829160208352602083019061171d565b0390f35b825484526020909301926001928301920161065d565b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f2080546106d6816114f3565b916106e460405193846114d2565b81835260208301905f5260205f205f915b83831061070a5760405180610688878261169c565b6003602060019260405161071d816114a3565b848060a01b038654168152848601548382015261073c60028701611bcc565b60408201528152019201920191906106f5565b346101dd5761075d36611602565b9493959261077261076d87611c6c565b611cbb565b61077b856114f3565b9461078960405196876114d2565b808652601f19610798826114f3565b015f5b8181106108375750505f5b8181106107c15760206107b9898961184a565b604051908152f35b80896108166107e683876107e06107db6001988a8f611b8d565b611b9d565b94611b8d565b356107f284898b611bb1565b909160405194610801866114a3565b878060a01b0316855260208501523691611551565b6040820152610825828a611b21565b526108308189611b21565b50016107a6565b602090604051610846816114a3565b5f81525f838201526060604082015282828b0101520161079b565b346101dd5760403660031901126101dd5761087a611520565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760803660031901126101dd576108c261150a565b6044356001600160401b0381116101dd576108e19036906004016115a5565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161492909190831561098e5760016003540361097f575f9283925b81604051928392833781018481520391602435905af161094461181b565b50156109705761095057005b6064355f90815260046020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b903033036109a1575b905f928392610926565b906109ab33611cbb565b60016003540361097f5790610997565b346101dd5760203660031901126101dd576109d461150a565b303303610a3c576001600160a01b03168015610a2d576109f3816120f0565b15610a1e577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b346101dd5760203660031901126101dd57600435303303610a3c5780158015610aa8575b61097f576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600355604051908152a1005b506001548111610a73565b346101dd57610ad8610ac43661148d565b610ad361076d82949394611c6c565b611c6c565b60065482101561051457815f52600560205260405f20600181015460ff8116610ba05760081c60ff16610b9157600381019060018060a01b0383165f528160205260ff60405f205416610b825760029160018060a01b0384165f5260205260405f20600160ff1982541617905501610b508154611aff565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b346101dd57610bbd36611602565b95337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161495909493908615610ccf5760016003540361097f575b81811480610cc6575b15610c8d575f5b818110610c3c578888610c1f57005b5f90815260046020526040902080546001600160a01b0319169055005b5f80610c4c6107db84868c611b8d565b610c5784878b611b8d565b35610c6385898b611bb1565b9190826040519384928337810185815203925af1610c7f61181b565b501561097057600101610c10565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b50828214610c09565b333014610c0057610cdf33611cbb565b60016003540315610c005763aabd5a0960e01b5f5260045ffd5b346101dd575f3660031901126101dd576020600354604051908152f35b346101dd5760203660031901126101dd576004356001600160c01b038116908190036101dd57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b357604051908152602090f35b346101dd5760403660031901126101dd57610db9611520565b336001600160a01b03821603610dd55761001890600435611f4c565b63334bd91960e11b5f5260045ffd5b346101dd5760203660031901126101dd576020610e1c6001600160a01b03610e0a61150a565b165f52600260205260405f2054151590565b6040519015158152f35b346101dd5760403660031901126101dd57610018600435610e45611520565b90610e5e610236825f525f602052600160405f20015490565b611ec4565b346101dd5760203660031901126101dd5760206107b96004355f525f602052600160405f20015490565b346101dd5760403660031901126101dd57610ea6611520565b6004355f526005602052600360405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760603660031901126101dd576004356001600160401b0381116101dd57806004019061012060031982360301126101dd57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610a3c57602092610f57610104610f61930182611b5b565b9160243590611d6c565b9080610f71575b50604051908152f35b5f8080809381604051610f8489826114d2565b52335af15082610f68565b346101dd5760203660031901126101dd57610fa861150a565b303303610a3c576001600160a01b0316610fc181611fe1565b15610ffd57600154600354811061097f571561097f577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b346101dd5760403660031901126101dd576024356001600160401b0381116101dd5761104a61104160209236906004016115a5565b90600435611b35565b6040516001600160e01b03199091168152f35b346101dd5760803660031901126101dd5761107661150a565b5061107f611520565b506064356001600160401b0381116101dd5761109f903690600401611587565b50604051630a85bd0160e11b8152602090f35b346101dd5760403660031901126101dd576004356001600160401b0381116101dd57366023820112156101dd5780600401356110ed816114f3565b916110fb60405193846114d2565b8183526024602084019260051b820101903682116101dd5760248101925b82841061112e5760206107b96024358761184a565b83356001600160401b0381116101dd578201606060231982360301126101dd576040519161115b836114a3565b60248201356001600160a01b03811681036101dd578352604482013560208401526064820135926001600160401b0384116101dd576111a4602094936024869536920101611587565b6040820152815201930192611119565b60203660031901126101dd5760043560065481101561051457805f52600560205260405f2060018101805460ff8116610ba05760ff8160081c16610b91576002830154600354116113005760ff191660011790555f5b81548110156112d95761121d81836117b6565b50546001600160a01b0316600161123483856117b6565b500154600261124384866117b6565b500190604051915f90805490611258826117e3565b91600181169081156112c25750600114611290575b5050915f939181859403925af161128261181b565b50156109705760010161120a565b9091505f5260205f205f905b8282106112ae5750508201818361126d565b60018160209254848801520191019061129c565b60ff1916865250508015150283019050818361126d565b827fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b346101dd5760203660031901126101dd5760043563ffffffff60e01b81168091036101dd57602090637965db0b60e01b8114908115611354575b506040519015158152f35b630271189760e51b81149150811561136e575b5082611349565b6301ffc9a760e01b14905082611367565b346101dd5760203660031901126101dd576004355f526005602052608060405f20600260018201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b346101dd576113f56113ed3661148d565b919091611c6c565b60065482101561051457815f526005602052600160405f20019081549060ff8216610ba05760ff8260081c16610b9157601082901c6001600160a01b039081169116141580611483575b6114745761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b503033141561143f565b60409060031901126101dd576004359060243590565b606081019081106001600160401b038211176114be57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f801991011681019081106001600160401b038211176114be57604052565b6001600160401b0381116114be5760051b60200190565b600435906001600160a01b03821682036101dd57565b602435906001600160a01b03821682036101dd57565b6001600160401b0381116114be57601f01601f191660200190565b92919261155d82611536565b9161156b60405193846114d2565b8294818452818301116101dd578281602093845f960137010152565b9080601f830112156101dd578160206115a293359101611551565b90565b9181601f840112156101dd578235916001600160401b0383116101dd57602083818601950101116101dd57565b9181601f840112156101dd578235916001600160401b0383116101dd576020808501948460051b0101116101dd57565b60806003198201126101dd576004356001600160401b0381116101dd578161162c916004016115d2565b929092916024356001600160401b0381116101dd578161164e916004016115d2565b92909291604435906001600160401b0382116101dd57611670916004016115d2565b909160643590565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b8383106116ce57505050505090565b909192939460208061170e600193603f19868203018752606060408b51878060a01b03815116845285810151868501520151918160408201520190611678565b970193019301919392906116bf565b90602080835192838152019201905f5b81811061173a5750505090565b82516001600160a01b031684526020938401939092019160010161172d565b9080601f830112156101dd578135611770816114f3565b9261177e60405194856114d2565b81845260208085019260051b8201019283116101dd57602001905b8282106117a65750505090565b8135815260209182019101611799565b80548210156117cf575f52600360205f20910201905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c92168015611811575b60208310146117fd57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916117f2565b3d15611845573d9061182c82611536565b9161183a60405193846114d2565b82523d5f602084013e565b606090565b9061185761076d82611c6c565b815115611ac95761186790611c6c565b906006549261187584611aff565b600655835f52600560205260405f20935f5b8351811015611a135761189a8185611b21565b518654600160401b8110156114be578060016118b992018955886117b6565b611a0057815181546001600160a01b0319166001600160a01b03909116178155602082015160018201556040909101518051600290920191906001600160401b0382116114be5761190a83546117e3565b601f81116119bb575b50602090601f8311600114611954576001949392915f9183611949575b50505f19600383901b1c191690841b1790555b01611887565b015190505f80611930565b90601f19831691845f52815f20925f5b8181106119a357509160019695949291838895931061198b575b505050811b019055611943565b01515f1960f88460031b161c191690555f808061197e565b92936020600181928786015181550195019301611964565b835f5260205f20601f840160051c810191602085106119f6575b601f0160051c01905b8181106119eb5750611913565b5f81556001016119de565b90915081906119d5565b634e487b7160e01b5f525f60045260245ffd5b506001858101805462010000600160b01b031916601087901b62010000600160b01b0316179055604051929591946001600160a01b031693909260029291859187917f2e54f43789a6ca510a425f049aff6a8d4c444efb21fce5c23e86cfed6c59369d91908190611a84908261169c565b0390a3835f526003810160205260405f208360ff198254161790550155817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a390565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b5f198114611b0d5760010190565b634e487b7160e01b5f52601160045260245ffd5b80518210156117cf5760209160051b010190565b90611b409291611cd9565b611b50576001600160e01b031990565b630b135d3f60e11b90565b903590601e19813603018212156101dd57018035906001600160401b0382116101dd576020019181360383136101dd57565b91908110156117cf5760051b0190565b356001600160a01b03811681036101dd5790565b908210156117cf57611bc89160051b810190611b5b565b9091565b9060405191825f825492611bdf846117e3565b8084529360018116908115611c4a5750600114611c06575b50611c04925003836114d2565b565b90505f9291925260205f20905f915b818310611c2e575050906020611c04928201015f611bf7565b6020919350806001915483858901015201910190918492611c15565b905060209250611c0494915060ff191682840152151560051b8201015f611bf7565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614611ca157503390565b5f908152600460205260409020546001600160a01b031690565b6001600160a01b03165f9081526002602052604090205415610ffd57565b90611d19611cfd611cf4611cee368786611551565b856120b6565b90929192612145565b6001600160a01b03165f90815260026020526040902054151590565b611d64576115a292611d5e611cf492611cfd947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611551565b906120b6565b505050600190565b91929092611d7e611cee368484611551565b50949080956004811015611e59571590811591611e6d575b50611dd1575b505050602001355f52600460205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611e0e93945090611d5e917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611551565b50919080926004811015611e59571590811591611e3a575b50611e33575f8080611d9c565b5050600190565b6001600160a01b03165f90815260026020526040812054159150611e26565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260026020526040812054159150611d96565b5f8181526020818152604080832033845290915290205460ff1615611eae5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611f46575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611f46575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b80548210156117cf575f5260205f2001905f90565b5f818152600260205260409020548015611f46575f198101818111611b0d576001545f19810191908211611b0d57818103612068575b5050506001548015612054575f1901612031816001611fcc565b8154905f199060031b1b191690556001555f5260026020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b6120a061207961208a936001611fcc565b90549060031b1c9283926001611fcc565b819391549060031b91821b915f19901b19161790565b90555f52600260205260405f20555f8080612017565b81519190604183036120e6576120df9250602082015190606060408401519301515f1a906121a5565b9192909190565b50505f9160029190565b805f52600260205260405f2054155f1461214057600154600160401b8110156114be5761212961208a8260018594016001556001611fcc565b9055600154905f52600260205260405f2055600190565b505f90565b6004811015611e595780612157575050565b6001810361216e5763f645eedf60e01b5f5260045ffd5b60028103612189575063fce698f760e01b5f5260045260245ffd5b6003146121935750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161221c579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa156102e6575f516001600160a01b0381161561221257905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220a1c0289001f31634bf092ab8f2d0665e87e3478f25727dc2a4b5c9a281ded8a764736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x6080806040523460155761299b908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b90604093929351906126708083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b93909192866126709161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a0604052346102ac5761267080380380610019816102c4565b92833981016060828203126102ac5781516001600160401b0381116102ac5782019080601f830112156102ac578151916001600160401b0383116102b0578260051b9060208061006a8185016102c4565b8096815201928201019283116102ac57602001905b8282106102945750505061009a6040602084015193016102e9565b81511561025a578215158061024f575b15610216576001600160a01b03169182156101dc575f5b825181101561016757600581901b8301602001516001600160a01b031690811561013257816100f1600193610386565b6100fd575b50016100c1565b8061012b917f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a26102fd565b505f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600355608052604051908152a160405161225d90816103f38239608051818181610271015281816105cd015281816108e401528181610bc101528181610d5f01528181610f150152611c6f0152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b602080916102a1846102e9565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b038111838210176102b057604052565b51906001600160a01b03821682036102ac57565b6001600160a01b0381165f9081525f5160206126505f395f51905f52602052604090205460ff16610381576001600160a01b03165f8181525f5160206126505f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b805f52600260205260405f2054155f1461038157600154680100000000000000008110156102b05760018101806001558110156103de57819060015f5260205f200155600154905f52600260205260405f2055600190565b634e487b7160e01b5f52603260045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa895146113dc578063013cf08b1461137f57806301ffc9a71461130f5780630d61b519146111b45780631133b210146110b2578063150b7a021461105d5780631626ba7e1461100c578063173825d914610f8f57806319822f7c14610ed95780632358d5a814610e8d578063248a9ca314610e635780632f2ff15d14610e265780632f54bf6e14610de457806336568abe14610da05780633e1b081214610d1657806342cde4e814610cf957806348e2c1b914610baf5780635d35a3d914610ab3578063694e80c314610a4f5780637065cb48146109bb57806374420f4c146108a957806391d14854146108615780639330a2221461074f5780639f690535146106a2578063a0e67e2b14610616578063a217fddf146105fc578063b0d691fe146105b8578063bc197c8114610523578063c7f758a8146102f1578063d087d28814610240578063d547741f146101fe578063da35c664146101e15763f23a6e610361000e57346101dd5760a03660031901126101dd576101a161150a565b506101aa611520565b506084356001600160401b0381116101dd576101ca903690600401611587565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b346101dd575f3660031901126101dd576020600654604051908152f35b346101dd5760403660031901126101dd5761001860043561021d611520565b9061023b610236825f525f602052600160405f20015490565b611e8c565b611f4c565b346101dd575f3660031901126101dd57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b3575b604051908152602090f35b506020813d6020116102de575b816102cd602093836114d2565b810103126101dd57602090516102a8565b3d91506102c0565b6040513d5f823e3d90fd5b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f208054610325816114f3565b9061033360405192836114d2565b808252601f19610342826114f3565b01366020840137610352816114f3565b61035f60405191826114d2565b81815261036b826114f3565b602082019490601f1901368637610381836114f3565b9261038f60405194856114d2565b808452601f1961039e826114f3565b015f5b8181106105035750505f5b818110610496575050600260018201549101549160206103d76040519660e0885260e088019061171d565b918683038288015251918281520195905f5b818110610480575050508385036040850152825180865260208601906020808260051b8901019501915f905b8282106104555760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b90919295602080610472600193601f198d82030186528a51611678565b980192019201909291610415565b82518852602097880197909201916001016103e9565b806104a3600192856117b6565b50828060a01b039054166104b78289611b21565b52816104c382866117b6565b5001546104d08287611b21565b526104e760026104e083876117b6565b5001611bcc565b6104f18288611b21565b526104fc8187611b21565b50016103ac565b8060606020809389010152016103a1565b63635e873760e01b5f5260045ffd5b346101dd5760a03660031901126101dd5761053c61150a565b50610545611520565b506044356001600160401b0381116101dd57610565903690600401611759565b506064356001600160401b0381116101dd57610585903690600401611759565b506084356001600160401b0381116101dd576105a5903690600401611587565b5060405163bc197c8160e01b8152602090f35b346101dd575f3660031901126101dd576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346101dd575f3660031901126101dd5760206040515f8152f35b346101dd575f3660031901126101dd5760405180602060015491828152019060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f5b81811061068c5761068885610674818703826114d2565b60405191829160208352602083019061171d565b0390f35b825484526020909301926001928301920161065d565b346101dd5760203660031901126101dd57600435600654811015610514575f52600560205260405f2080546106d6816114f3565b916106e460405193846114d2565b81835260208301905f5260205f205f915b83831061070a5760405180610688878261169c565b6003602060019260405161071d816114a3565b848060a01b038654168152848601548382015261073c60028701611bcc565b60408201528152019201920191906106f5565b346101dd5761075d36611602565b9493959261077261076d87611c6c565b611cbb565b61077b856114f3565b9461078960405196876114d2565b808652601f19610798826114f3565b015f5b8181106108375750505f5b8181106107c15760206107b9898961184a565b604051908152f35b80896108166107e683876107e06107db6001988a8f611b8d565b611b9d565b94611b8d565b356107f284898b611bb1565b909160405194610801866114a3565b878060a01b0316855260208501523691611551565b6040820152610825828a611b21565b526108308189611b21565b50016107a6565b602090604051610846816114a3565b5f81525f838201526060604082015282828b0101520161079b565b346101dd5760403660031901126101dd5761087a611520565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760803660031901126101dd576108c261150a565b6044356001600160401b0381116101dd576108e19036906004016115a5565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161492909190831561098e5760016003540361097f575f9283925b81604051928392833781018481520391602435905af161094461181b565b50156109705761095057005b6064355f90815260046020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b903033036109a1575b905f928392610926565b906109ab33611cbb565b60016003540361097f5790610997565b346101dd5760203660031901126101dd576109d461150a565b303303610a3c576001600160a01b03168015610a2d576109f3816120f0565b15610a1e577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b346101dd5760203660031901126101dd57600435303303610a3c5780158015610aa8575b61097f576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600355604051908152a1005b506001548111610a73565b346101dd57610ad8610ac43661148d565b610ad361076d82949394611c6c565b611c6c565b60065482101561051457815f52600560205260405f20600181015460ff8116610ba05760081c60ff16610b9157600381019060018060a01b0383165f528160205260ff60405f205416610b825760029160018060a01b0384165f5260205260405f20600160ff1982541617905501610b508154611aff565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b346101dd57610bbd36611602565b95337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161495909493908615610ccf5760016003540361097f575b81811480610cc6575b15610c8d575f5b818110610c3c578888610c1f57005b5f90815260046020526040902080546001600160a01b0319169055005b5f80610c4c6107db84868c611b8d565b610c5784878b611b8d565b35610c6385898b611bb1565b9190826040519384928337810185815203925af1610c7f61181b565b501561097057600101610c10565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b50828214610c09565b333014610c0057610cdf33611cbb565b60016003540315610c005763aabd5a0960e01b5f5260045ffd5b346101dd575f3660031901126101dd576020600354604051908152f35b346101dd5760203660031901126101dd576004356001600160c01b038116908190036101dd57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156102e6575f906102b357604051908152602090f35b346101dd5760403660031901126101dd57610db9611520565b336001600160a01b03821603610dd55761001890600435611f4c565b63334bd91960e11b5f5260045ffd5b346101dd5760203660031901126101dd576020610e1c6001600160a01b03610e0a61150a565b165f52600260205260405f2054151590565b6040519015158152f35b346101dd5760403660031901126101dd57610018600435610e45611520565b90610e5e610236825f525f602052600160405f20015490565b611ec4565b346101dd5760203660031901126101dd5760206107b96004355f525f602052600160405f20015490565b346101dd5760403660031901126101dd57610ea6611520565b6004355f526005602052600360405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101dd5760603660031901126101dd576004356001600160401b0381116101dd57806004019061012060031982360301126101dd57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610a3c57602092610f57610104610f61930182611b5b565b9160243590611d6c565b9080610f71575b50604051908152f35b5f8080809381604051610f8489826114d2565b52335af15082610f68565b346101dd5760203660031901126101dd57610fa861150a565b303303610a3c576001600160a01b0316610fc181611fe1565b15610ffd57600154600354811061097f571561097f577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b346101dd5760403660031901126101dd576024356001600160401b0381116101dd5761104a61104160209236906004016115a5565b90600435611b35565b6040516001600160e01b03199091168152f35b346101dd5760803660031901126101dd5761107661150a565b5061107f611520565b506064356001600160401b0381116101dd5761109f903690600401611587565b50604051630a85bd0160e11b8152602090f35b346101dd5760403660031901126101dd576004356001600160401b0381116101dd57366023820112156101dd5780600401356110ed816114f3565b916110fb60405193846114d2565b8183526024602084019260051b820101903682116101dd5760248101925b82841061112e5760206107b96024358761184a565b83356001600160401b0381116101dd578201606060231982360301126101dd576040519161115b836114a3565b60248201356001600160a01b03811681036101dd578352604482013560208401526064820135926001600160401b0384116101dd576111a4602094936024869536920101611587565b6040820152815201930192611119565b60203660031901126101dd5760043560065481101561051457805f52600560205260405f2060018101805460ff8116610ba05760ff8160081c16610b91576002830154600354116113005760ff191660011790555f5b81548110156112d95761121d81836117b6565b50546001600160a01b0316600161123483856117b6565b500154600261124384866117b6565b500190604051915f90805490611258826117e3565b91600181169081156112c25750600114611290575b5050915f939181859403925af161128261181b565b50156109705760010161120a565b9091505f5260205f205f905b8282106112ae5750508201818361126d565b60018160209254848801520191019061129c565b60ff1916865250508015150283019050818361126d565b827fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b346101dd5760203660031901126101dd5760043563ffffffff60e01b81168091036101dd57602090637965db0b60e01b8114908115611354575b506040519015158152f35b630271189760e51b81149150811561136e575b5082611349565b6301ffc9a760e01b14905082611367565b346101dd5760203660031901126101dd576004355f526005602052608060405f20600260018201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b346101dd576113f56113ed3661148d565b919091611c6c565b60065482101561051457815f526005602052600160405f20019081549060ff8216610ba05760ff8260081c16610b9157601082901c6001600160a01b039081169116141580611483575b6114745761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b503033141561143f565b60409060031901126101dd576004359060243590565b606081019081106001600160401b038211176114be57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f801991011681019081106001600160401b038211176114be57604052565b6001600160401b0381116114be5760051b60200190565b600435906001600160a01b03821682036101dd57565b602435906001600160a01b03821682036101dd57565b6001600160401b0381116114be57601f01601f191660200190565b92919261155d82611536565b9161156b60405193846114d2565b8294818452818301116101dd578281602093845f960137010152565b9080601f830112156101dd578160206115a293359101611551565b90565b9181601f840112156101dd578235916001600160401b0383116101dd57602083818601950101116101dd57565b9181601f840112156101dd578235916001600160401b0383116101dd576020808501948460051b0101116101dd57565b60806003198201126101dd576004356001600160401b0381116101dd578161162c916004016115d2565b929092916024356001600160401b0381116101dd578161164e916004016115d2565b92909291604435906001600160401b0382116101dd57611670916004016115d2565b909160643590565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b8383106116ce57505050505090565b909192939460208061170e600193603f19868203018752606060408b51878060a01b03815116845285810151868501520151918160408201520190611678565b970193019301919392906116bf565b90602080835192838152019201905f5b81811061173a5750505090565b82516001600160a01b031684526020938401939092019160010161172d565b9080601f830112156101dd578135611770816114f3565b9261177e60405194856114d2565b81845260208085019260051b8201019283116101dd57602001905b8282106117a65750505090565b8135815260209182019101611799565b80548210156117cf575f52600360205f20910201905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c92168015611811575b60208310146117fd57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916117f2565b3d15611845573d9061182c82611536565b9161183a60405193846114d2565b82523d5f602084013e565b606090565b9061185761076d82611c6c565b815115611ac95761186790611c6c565b906006549261187584611aff565b600655835f52600560205260405f20935f5b8351811015611a135761189a8185611b21565b518654600160401b8110156114be578060016118b992018955886117b6565b611a0057815181546001600160a01b0319166001600160a01b03909116178155602082015160018201556040909101518051600290920191906001600160401b0382116114be5761190a83546117e3565b601f81116119bb575b50602090601f8311600114611954576001949392915f9183611949575b50505f19600383901b1c191690841b1790555b01611887565b015190505f80611930565b90601f19831691845f52815f20925f5b8181106119a357509160019695949291838895931061198b575b505050811b019055611943565b01515f1960f88460031b161c191690555f808061197e565b92936020600181928786015181550195019301611964565b835f5260205f20601f840160051c810191602085106119f6575b601f0160051c01905b8181106119eb5750611913565b5f81556001016119de565b90915081906119d5565b634e487b7160e01b5f525f60045260245ffd5b506001858101805462010000600160b01b031916601087901b62010000600160b01b0316179055604051929591946001600160a01b031693909260029291859187917f2e54f43789a6ca510a425f049aff6a8d4c444efb21fce5c23e86cfed6c59369d91908190611a84908261169c565b0390a3835f526003810160205260405f208360ff198254161790550155817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a390565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b5f198114611b0d5760010190565b634e487b7160e01b5f52601160045260245ffd5b80518210156117cf5760209160051b010190565b90611b409291611cd9565b611b50576001600160e01b031990565b630b135d3f60e11b90565b903590601e19813603018212156101dd57018035906001600160401b0382116101dd576020019181360383136101dd57565b91908110156117cf5760051b0190565b356001600160a01b03811681036101dd5790565b908210156117cf57611bc89160051b810190611b5b565b9091565b9060405191825f825492611bdf846117e3565b8084529360018116908115611c4a5750600114611c06575b50611c04925003836114d2565b565b90505f9291925260205f20905f915b818310611c2e575050906020611c04928201015f611bf7565b6020919350806001915483858901015201910190918492611c15565b905060209250611c0494915060ff191682840152151560051b8201015f611bf7565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614611ca157503390565b5f908152600460205260409020546001600160a01b031690565b6001600160a01b03165f9081526002602052604090205415610ffd57565b90611d19611cfd611cf4611cee368786611551565b856120b6565b90929192612145565b6001600160a01b03165f90815260026020526040902054151590565b611d64576115a292611d5e611cf492611cfd947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611551565b906120b6565b505050600190565b91929092611d7e611cee368484611551565b50949080956004811015611e59571590811591611e6d575b50611dd1575b505050602001355f52600460205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611e0e93945090611d5e917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611551565b50919080926004811015611e59571590811591611e3a575b50611e33575f8080611d9c565b5050600190565b6001600160a01b03165f90815260026020526040812054159150611e26565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260026020526040812054159150611d96565b5f8181526020818152604080832033845290915290205460ff1615611eae5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611f46575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611f46575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b80548210156117cf575f5260205f2001905f90565b5f818152600260205260409020548015611f46575f198101818111611b0d576001545f19810191908211611b0d57818103612068575b5050506001548015612054575f1901612031816001611fcc565b8154905f199060031b1b191690556001555f5260026020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b6120a061207961208a936001611fcc565b90549060031b1c9283926001611fcc565b819391549060031b91821b915f19901b19161790565b90555f52600260205260405f20555f8080612017565b81519190604183036120e6576120df9250602082015190606060408401519301515f1a906121a5565b9192909190565b50505f9160029190565b805f52600260205260405f2054155f1461214057600154600160401b8110156114be5761212961208a8260018594016001556001611fcc565b9055600154905f52600260205260405f2055600190565b505f90565b6004811015611e595780612157575050565b6001810361216e5763f645eedf60e01b5f5260045ffd5b60028103612189575063fce698f760e01b5f5260045260245ffd5b6003146121935750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161221c579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa156102e6575f516001600160a01b0381161561221257905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220a1c0289001f31634bf092ab8f2d0665e87e3478f25727dc2a4b5c9a281ded8a764736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5a2646970667358221220c4bbdfc53db13a7b75bd9e52f268f278f3f6953afb53c32443afb3c54363188864736f6c634300081c0033"
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