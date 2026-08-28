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
      "bytecode": "0x60806040523461042157615db66080813803918261001c81610425565b938492833981010312610421576100328161044a565b9061003f6020820161044a565b9161005160606040840151930161044a565b9261005c6040610425565b6007815266109c9859d3919560ca1b602082015261007a6040610425565b600781526610949051d3919560ca1b6020820152815190916001600160401b038211610328575f5490600182811c92168015610417575b602083101461030a5781601f8493116103aa575b50602090601f8311600114610347575f9261033c575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116103285760015490600182811c9216801561031e575b602083101461030a5781601f84931161029c575b50602090601f8311600114610236575f9261022b575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005562015f906011556001600160a01b03169081156101e6576101959061045e565b508060018060a01b0319600c541617600c5560018060a01b0319600d541617600d55600e5560018060a01b031660018060a01b031960105416176010556064600a556040516158ae90816104e88239f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b015190505f8061013c565b60015f9081528281209350601f198516905b818110610284575090846001959493921061026c575b505050811b01600155610151565b01515f1960f88460031b161c191690555f808061025e565b92936020600181928786015181550195019301610248565b60015f529091507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c81019160208510610300575b90601f859493920160051c01905b8181106102f25750610126565b5f81558493506001016102e5565b90915081906102d7565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610112565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100db565b5f8080528281209350601f198516905b818110610392575090846001959493921061037a575b505050811b015f556100ef565b01515f1960f88460031b161c191690555f808061036d565b92936020600181928786015181550195019301610357565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c8101916020851061040d575b90601f859493920160051c01905b8181106103ff57506100c5565b5f81558493506001016103f2565b90915081906103e4565b91607f16916100b1565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761032857604052565b51906001600160a01b038216820361042157565b6001600160a01b0381165f9081525f516020615d965f395f51905f52602052604090205460ff166104e2576001600160a01b03165f8181525f516020615d965f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe60a0806040526004361015610477575b50361561001a575f80fd5b61002261309a565b61002a6130d2565b5f604080519061003a8183612bb6565b600f82526e2234b932b1ba103237b730ba34b7b760891b60208301526020908051906100668383612bb6565b5f8252600e54341061043b5760095491600a5483101561040257610089836130ed565b60095561009534613a1f565b9082516100a181612b9b565b3381528581018381523485830190815242606084019081525f6080850181815260a086018c81528a835260128c5291899020955186546001600160a01b0319166001600160a01b039190911617865593516001860155915160028501555160038401559051909160048210156103ee5761012060059260048301612fc5565b0190518051906001600160401b0382116103da57610148826101428554612b63565b85612f5e565b8790601f83116001146103775761017692915f918361036c575b50508160011b915f199060031b1c19161790565b90555b62278d0082029082159183810462278d0014831715610310576305f5e100900462278d008110610362575b6101ae9042612ec0565b855f5260138752845f20558051610352575b5082516101cd8682612bb6565b5f8152331561033f576001600160a01b036101e88633613839565b1661032c576101f990853333613cc4565b600f546001600160a01b031680151580610324575b610280575b50506102478680805f5160206158595f395f51905f5298993460018060a01b03600c54165af1610241612ecd565b50612efc565b815193348552840152820152608060608201528061026a33946080830190612a87565b0390a260015f5160206158395f395f51905f5255005b662386f26fc10000830291838304662386f26fc1000014171561031057803b1561030c5783516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1968715610302575f5160206158595f395f51905f5296976102ee575b9695610213565b505f6102f991612bb6565b6102475f6102e7565b83513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52601160045260245ffd5b50811561020e565b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b61035c9085613baf565b5f6101c0565b5062278d006101a4565b015190505f80610162565b90601f19831691845f52895f20925f5b8b8282106103c45750509084600195949392106103ac575b505050811b019055610179565b01515f1960f88460031b161c191690555f808061039f565b6001859682939686015181550195019301610387565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b815162461bcd60e51b815260048101859052601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b5162461bcd60e51b8152600481018390526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5f905f3560e01c90816301ffc9a7146129b65750806302d95a521461298e57806306fdde03146128c7578063081812fc1461288b578063095ea7b3146127a15780630f133e66146127805780630fd973ce1461271c5780631653441c146126a257806318160ddd1461268557806323b872dd1461266e578063248a9ca31461263b5780632a55205a146125f15780632eb9313e146125ae5780632f2ff15d1461257057806336568abe1461252c5780633f4ba83a146124c657806341e42f301461243057806342842e0e146123ff57806349c657db146123e35780634c00de82146123bb57806350017f3e146121cd5780635b137f7b14611fd45780635c975abb14611fb157806361d027b314611f885780636352211e14611f5757806364cb7e9c14611f2c57806366a83bcd14611d395780636d12c7f414611c105780636f8b44b014611bed57806370a0823114611b9a578063724e78da14611b5a578063741bef1a14611b3157806375794a3c14611b1357806383943dc814611aea5780638456cb5914611a8f578063916221aa14611a4557806391a6262f14611a1657806391d14854146119cc57806395d89b41146118e95780639604d478146116da57806396d8f4f3146116bc578063a217fddf146116a0578063a22cb465146115e8578063a6719b3a14611568578063ab2a6f70146114c7578063b88d4fde14611454578063bfe71a3f1461142a578063c631724714611407578063c87b56dd14610ac8578063d3933c1c14610a24578063d547741f146109dc578063d5abeb01146109be578063e086e5ec14610951578063e2d3213614610933578063e985e9c5146108db578063f0f442601461084f578063f12ba13e1461082c578063f4f3b200146107285763f5cf513b0361000f57346107255780600319360112610725576020600b54604051908152f35b80fd5b503461072557602036600319011261072557610742612aab565b61074a613011565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156108215783916107eb575b506040519063a9059cbb60e01b84523360045260245260208360448180865af19060018451148216156107cb575b50156107b9575080f35b635274afe760e01b8252600452602490fd5b60018215166107e35750813b15153d1516165f6107af565b3d84823e3d90fd5b90506020813d602011610819575b8161080660209383612bb6565b8101031261081557515f610781565b8280fd5b3d91506107f9565b6040513d85823e3d90fd5b503461072557602036600319011261072557610846613011565b60043560115580f35b503461072557602036600319011261072557610869612aab565b610871613011565b6001600160a01b03168015610896576001600160601b0360a01b600c541617600c5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b50346107255760403660031901126107255760406108f7612aab565b91610900612ac1565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346107255780600319360112610725576020601154604051908152f35b503461072557806003193601126107255761096a613011565b8080808047335af161097a612ecd565b50156109835780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b50346107255780600319360112610725576020600a54604051908152f35b503461072557604036600319011261072557610a206004356109fc612ac1565b90610a1b610a16825f526007602052600160405f20015490565b613060565b613984565b5080f35b506060366003190112610725576004356001600160401b038111610ac457610a50903690600401612aed565b602435916001600160401b038311610ac057610aa5610a9d91610a7a610aac953690600401612aed565b939091610a85612b54565b95610a8e61309a565b610a966130d2565b3691612cc2565b923691612cc2565b9033613481565b60015f5160206158395f395f51905f525580f35b8380fd5b5080fd5b503461072557602036600319011261072557610ae5600435612fdd565b5060043581526012602052604081209060405191610b0283612b9b565b60018060a01b038154168352600181015460208401908152600282015493604081019485526003830154606082015260ff60048401541692608082019360048110156113f3578452610b5690600501612bd7565b9160a08201928352610b69600435612cf8565b91606060043587526014602052610b8260408820612bd7565b908151156113e0575b8151156113b257610b9b82614473565b156113aa5750928451865190600482101561139657603a610bcc610bc7602094610c1794600435613f62565b6156ca565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018b838201520301601f198101835282612bb6565b925b60209889604051610c2a8282612bb6565b8a8152968051611339575b5050610c418751614ed2565b93516001600160a01b03169182610c58602a612ca7565b93610c666040519586612bb6565b602a8552610c74602a612ca7565b601f190136868f01378451156113255760308d860153845160011015611325576078602186015360295b600181116112cf57506112b85750918a9291610d5960018594518d8680610d1b6305f5e10082620f424082880604600a81105f146112a8576021610ce4610d13926151b8565b604051600360fc1b858201528151909485928291018484015e810189838201520301601f198101835282612bb6565b955b046151b8565b9360405199858b9651918291018488015e850190601760f91b83830152805192839101602183015e010190838201520301601f198101855284612bb6565b5198610d76655af3107a4000670de0b6b3a76400008c06046151b8565b8b600482511015610dbd57604051600360fc1b8188015282519092610db892602192859281908b018486015e820190838201520301601f198101835282612bb6565b610d76565b506001610e1a9186809e9d610ddc670de0b6b3a76400008392046151b8565b9260405199848b9551918291018487015e840190601760f91b83830152805192839101602183015e01018d838201520301601f198101865285612bb6565b5160048110156112945760128b99600d8b809b60368f9a6112409d603385603d9f8f6111f49f90839f610bc79f60029f600291876110fe97602c82809e602f82809c602e826110a19d8f82849d60279f92610e76604494615103565b9a15611270575081604051610e8c604082612bb6565b600381526259657360e81b828201529d5b6040516080527f7b2274726169745f74797065223a20224d657373616765222c202276616c756582608051015263111d101160e11b6040608051015280519182910185608051015e608051019062089f4b60ea1b848301527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478301526a10113b30b63ab2911d101160a91b6067830152805192839101607283015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022446f6e6174696f6e2056616c7565222c60318301526b08089d985b1d59488e88088960a21b6051830152805192839101605d83015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022446f6e6174696f6e20455448222c20226032830152683b30b63ab2911d101160b91b6052830152805192839101605b83015e0101906608115512089f4b60ca1b848301527f7b2274726169745f74797065223a202254617820537461747573222c202276618f83015266363ab2911d101160c91b6053830152805192839101605a83015e01019062089f4b60ea1b848301527f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565603183015263111d101160e11b6051830152805192839101605583015e010161227d60f01b82820152608051900301601d1981016080515201608051612bb6565b6110ac6004356151b8565b8c5151909c9015611258576110f8916110c760229251614ed2565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f198101835282612bb6565b93614ed2565b926040519d8e9a727b226e616d65223a2022427261674e4654202360681b828d0152805191829101858d015e8a01907f222c20226465736372697074696f6e223a2022427261672e436861726974792084830152754475616c2d537461746520436f6c6c65637469626c6560501b6053830152805192839101606983015e0101906c1116101134b6b0b3b2911d101160991b84830152805192839101604383015e0101908382018b8152815193849201905e010171222c202261747472696275746573223a205b60701b81526080515190818c608051018583015e01615d7d60f01b838201520301601d19810184520182612bb6565b906040519586927f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000828501528051918291018585015e820190838201520301601f198101845283612bb6565b611254604051928284938452830190612a87565b0390f35b5060405191506112688483612bb6565b815293614ed2565b5081604051611280604082612bb6565b60028152614e6f60f01b828201529d610e9d565b634e487b7160e01b8a52602160045260248afd5b6112b291506151b8565b95610d15565b63e22e27eb60e01b8b52600452601460245260448afd5b90600f811660108110156113115761130c91906f181899199a1a9b1b9c1cb0b131b232b360811b901a6113028489614462565b5360041c91615320565b610c9e565b634e487b7160e01b8e52603260045260248efd5b634e487b7160e01b8c52603260045260248cfd5b61138e9192975061134b603591614ed2565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018c838201520301601f198101835282612bb6565b94895f610c35565b634e487b7160e01b89526021600452602489fd5b939092610c19565b9390508451865190600482101561139657603a610bcc610bc76020946113da94600435613f62565b92610c19565b90506113ed600435613eaf565b90610b8b565b634e487b7160e01b86526021600452602486fd5b503461072557602036600319011261072557611421613011565b600435600e5580f35b50346107255760203660031901126107255760406020916004358152601383522054604051908152f35b50346107255760803660031901126107255761146e612aab565b611476612ac1565b90604435606435926001600160401b0384116114c357366023850112156114c3576114ae6114c0943690602481600401359101612cc2565b926114ba838383612d25565b33613dd2565b80f35b8480fd5b50346107255760203660031901126107255760043581526012602052604081209060018060a01b03825416916001810154916002820154600383015490611518600560ff6004870154169501612bd7565b9460405196875260208701526040860152606085015260048210156115545750829161125491608084015260c060a084015260c0830190612a87565b634e487b7160e01b81526021600452602490fd5b5060803660031901126107255761157d612aab565b6024356001600160401b0381116108155761159c903690600401612aed565b916044356001600160401b0381116114c3576115bc903690600401612aed565b90926064359384151585036115e457610a9d6115de92610aac97610a8e61309a565b91613481565b8680fd5b503461072557604036600319011261072557611602612aab565b6024359081151580920361081557331561168c576001600160a01b031690811561167857338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b5034610725578060031936011261072557602090604051908152f35b50346107255780600319360112610725576020600e54604051908152f35b5034610725576020366003190112610725576004356116f761309a565b6116ff6130d2565b61170881612fdd565b50600f546001600160a01b031680156118af57600c546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269d3c21bcecceda10000006044820152906020908290606490829087905af1908115610821578391611874575b501561183857808252601360205260408220544211156118025762278d0042018042116117ee57818352601360205260408320555b6040519069d3c21bcecceda100000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f5160206158395f395f51905f525580f35b634e487b7160e01b83526011600452602483fd5b80825260136020526040822080549062278d00820180921161182457556117a3565b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d6020116118a7575b8161188f60209383612bb6565b8101031261081557518015158103610815575f61176e565b3d9150611882565b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b503461072557806003193601126107255760405190806001549061190c82612b63565b80855291600181169081156119a55750600114611948575b6112548461193481860382612bb6565b604051918291602083526020830190612a87565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b80821061198b5750909150810160200161193482611924565b919260018160209254838588010152019101909291611972565b60ff191660208087019190915292151560051b850190920192506119349150839050611924565b50346107255760403660031901126107255760406119e8612ac1565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b503461072557606036600319011261072557611a30612ac1565b50611a39612ad7565b50602060405160018152f35b5034610725576040366003190112610725576004356024356004811015610815576114c091611a72613011565b611a7b81612fdd565b508352601260205260046040842001612fc5565b5034610725578060031936011261072557611aa8613011565b611ab06130d2565b600160ff1960085416176008557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b5034610725578060031936011261072557600f546040516001600160a01b039091168152602090f35b50346107255780600319360112610725576020600954604051908152f35b50346107255780600319360112610725576010546040516001600160a01b039091168152602090f35b503461072557602036600319011261072557611b74612aab565b611b7c613011565b60018060a01b03166001600160601b0360a01b601054161760105580f35b5034610725576020366003190112610725576001600160a01b03611bbc612aab565b168015611bd9578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b503461072557602036600319011261072557611c07613011565b600435600a5580f35b503461072557604036600319011261072557600435906024356001600160401b038111610ac457611c45903690600401612aed565b9092611c4f613011565b611c5881612fdd565b508252601460205260408220906001600160401b038111611d2557611c8781611c818454612b63565b84612f5e565b82601f8211600114611cc55781908495611cb5949592611cba5750508160011b915f199060031b1c19161790565b905580f35b013590505f80610162565b601f198216948385526020852091855b878110611d0d575083600195969710611cf4575b505050811b01905580f35b01355f19600384901b60f8161c191690555f8080611ce9565b90926020600181928686013581550194019101611cd5565b634e487b7160e01b83526041600452602483fd5b5034610725576040366003190112610725576004356001600160401b038111610ac457611d6a903690600401612c77565b6024356001600160401b038111610ac057611d89903690600401612c77565b611d94939193613011565b808303611ef3579236819003601e190190855b848110611db2578680f35b611dc6611dc0828787612fa1565b35612fdd565b5085811015611edf578060051b82013583811215611edb57820180356001600160401b038111611ed7578036036020830113611ed757611e07838888612fa1565b35895260146020526040892091611e22826101428554612b63565b8990601f8311600114611e6b579180611e549260019695948d92611e5d5750508160011b915f199060031b1c19161790565b90555b01611da7565b602092500101355f80610162565b838b5260208b2091601f1984168c5b818110611ebd575091600196959492918388959310611ea1575b505050811b019055611e57565b01602001355f19600384901b60f8161c191690555f8080611e94565b919360206001819282888801013581550195019201611e7a565b8880fd5b8780fd5b634e487b7160e01b87526032600452602487fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b5034610725576020366003190112610725576119346040611254926004358152601460205220612bd7565b5034610725576020366003190112610725576020611f76600435612fdd565b6040516001600160a01b039091168152f35b5034610725578060031936011261072557600c546040516001600160a01b039091168152602090f35b5034610725578060031936011261072557602060ff600854166040519015158152f35b503461072557606036600319011261072557600435906024356001600160401b038111610ac457612009903690600401612aed565b612014939193612b54565b61201c61309a565b6120246130d2565b61202d83612fdd565b5061203783612fdd565b336001600160a01b0390911603612198571561213c57818352601460205260408320906001600160401b0381116121285761207681611c818454612b63565b83601f82116001146120c15790806120a7928697610aac9792611cba5750508160011b915f199060031b1c19161790565b90555b604051906120b9602083612bb6565b838252613baf565b8285526020852090601f198316865b818110612110575096839291600194610aac9899106120f7575b505050811b0190556120aa565b01355f19600384901b60f8161c191690555f80806120ea565b9192602060018192868c0135815501940192016120d0565b634e487b7160e01b84526041600452602484fd5b829361216e918361217495526014602052856040812061215c8154612b63565b601f8111612179575b50553691612cc2565b90613baf565b610aac565b8183526020832061219291601f0160051c810190612f48565b5f612165565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b50602036600319011261030c576004356121e561309a565b6121ed6130d2565b6121f681612fdd565b5061220034613a1f565b6305f5e10081106123765762278d00810281159082810462278d0014821715610310576305f5e1009004835f52601360205260405f205442115f14612358576122499042612ec0565b835f52601360205260405f20555b600f546001600160a01b03169081151580612350575b6122d3575b505050612292828080803460018060a01b03600c54165af1610241612ecd565b604051903482527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f5160206158395f395f51905f525580f35b662386f26fc100008302928304662386f26fc1000014171561031057803b1561030c576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1801561234557612330575b8080612272565b61233d9192505f90612bb6565b5f905f612329565b6040513d5f823e3d90fd5b50801561226d565b835f52601360205261236f60405f20918254612ec0565b9055612257565b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b3461030c575f36600319011261030c57600d546040516001600160a01b039091168152602090f35b3461030c575f36600319011261030c5760206040516103208152f35b3461030c5761242e61241036612b1a565b9060405192612420602085612bb6565b5f84526114ba838383612d25565b005b3461030c57602036600319011261030c57612449612aab565b612451613011565b6001600160a01b03168015612477576001600160601b0360a01b600d541617600d555f80f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b3461030c575f36600319011261030c576124de613011565b60085460ff81161561251d5760ff19166008557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b638dfc202b60e01b5f5260045ffd5b3461030c57604036600319011261030c57612545612ac1565b336001600160a01b038216036125615761242e90600435613984565b63334bd91960e11b5f5260045ffd5b3461030c57604036600319011261030c5761242e60043561258f612ac1565b906125a9610a16825f526007602052600160405f20015490565b6138f8565b3461030c57602036600319011261030c576125c7612aab565b6125cf613011565b600f80546001600160a01b0319166001600160a01b0392909216919091179055005b3461030c57604036600319011261030c57602435610320810290808204610320149015171561031057600d54604080516001600160a01b0390921682526127109092046020820152f35b3461030c57602036600319011261030c5760206126666004355f526007602052600160405f20015490565b604051908152f35b3461030c5761242e61267f36612b1a565b91612d25565b3461030c575f36600319011261030c576020600954604051908152f35b604036600319011261030c576004356001600160401b03811161030c576126cd903690600401612aed565b906024356001600160401b03811161030c5761270992610a9d6126f7612702933690600401612aed565b949092610a8e61309a565b90336130fb565b60015f5160206158395f395f51905f5255005b606036600319011261030c57612730612aab565b6024356001600160401b03811161030c5761274f903690600401612aed565b91906044356001600160401b03811161030c5761270993610a9d6126f761277a933690600401612aed565b916130fb565b3461030c57602036600319011261030c57612799613011565b600435600b55005b3461030c57604036600319011261030c576127ba612aab565b6024356127c681612fdd565b33151580612878575b8061284b575b6128385781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff16156127d5565b506001600160a01b0381163314156127cf565b3461030c57602036600319011261030c576004356128a881612fdd565b505f526004602052602060018060a01b0360405f205416604051908152f35b3461030c575f36600319011261030c576040515f5f546128e681612b63565b808452906001811690811561296a575060011461290e575b6112548361193481850382612bb6565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210612950575090915081016020016119346128fe565b919260018160209254838588010152019101909291612938565b60ff191660208086019190915291151560051b8401909101915061193490506128fe565b3461030c57602036600319011261030c5760206129ac600435612cf8565b6040519015158152f35b3461030c57602036600319011261030c576004359063ffffffff60e01b821680920361030c5760209163152a902d60e11b8114908115612a76575b81156129ff575b5015158152f35b637965db0b60e01b811491508115612a19575b50836129f8565b632483248360e11b811491508115612a33575b5083612a12565b6380ac58cd60e01b811491508115612a65575b8115612a54575b5083612a2c565b6301ffc9a760e01b14905083612a4d565b635b5e139f60e01b81149150612a46565b6391a6262f60e01b811491506129f1565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361030c57565b602435906001600160a01b038216820361030c57565b604435906001600160a01b038216820361030c57565b9181601f8401121561030c578235916001600160401b03831161030c576020838186019501011161030c57565b606090600319011261030c576004356001600160a01b038116810361030c57906024356001600160a01b038116810361030c579060443590565b60443590811515820361030c57565b90600182811c92168015612b91575b6020831014612b7d57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612b72565b60c081019081106001600160401b038211176103da57604052565b90601f801991011681019081106001600160401b038211176103da57604052565b9060405191825f825492612bea84612b63565b8084529360018116908115612c555750600114612c11575b50612c0f92500383612bb6565b565b90505f9291925260205f20905f915b818310612c39575050906020612c0f928201015f612c02565b6020919350806001915483858901015201910190918492612c20565b905060209250612c0f94915060ff191682840152151560051b8201015f612c02565b9181601f8401121561030c578235916001600160401b03831161030c576020808501948460051b01011161030c57565b6001600160401b0381116103da57601f01601f191660200190565b929192612cce82612ca7565b91612cdc6040519384612bb6565b82948184528183011161030c578281602093845f960137010152565b805f52601360205260405f205415159081612d11575090565b90505f52601360205260405f205442111590565b6001600160a01b039091169190821561033f575f828152600260205260409020546001600160a01b031692829033151580612e18575b5084612de5575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303612dcd57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612d62565b90915080612e5c575b15612e2e5782905f612d5b565b8284612e4657637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015612e8b575b80612e2157505f838152600460205260409020546001600160a01b03163314612e21565b505f84815260056020908152604080832033845290915290205460ff16612e67565b8181029291811591840414171561031057565b9190820180921161031057565b3d15612ef7573d90612ede82612ca7565b91612eec6040519384612bb6565b82523d5f602084013e565b606090565b15612f0357565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b818110612f53575050565b5f8155600101612f48565b9190601f8111612f6d57505050565b612c0f925f5260205f20906020601f840160051c83019310612f97575b601f0160051c0190612f48565b9091508190612f8a565b9190811015612fb15760051b0190565b634e487b7160e01b5f52603260045260245ffd5b9060048110156103ee5760ff80198354169116179055565b5f818152600260205260409020546001600160a01b0316908115612fff575090565b637e27328960e01b5f5260045260245ffd5b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561304957565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156130845750565b63e2517d3f60e01b5f523360045260245260445ffd5b60025f5160206158395f395f51905f5254146130c35760025f5160206158395f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b60ff600854166130de57565b63d93c066560e01b5f5260045ffd5b5f1981146103105760010190565b919091600e54341061344357600954600a548110156134095761311d816130ed565b60095561312934613a1f565b9160405161313681612b9b565b338152602080820185815234604080850191825242606086019081525f6080870181815260a088018d81528a83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156103ee576131b960059260048301612fc5565b0190518051906001600160401b0382116103da576131db826101428554612b63565b602090601f83116001146133a65761320992915f918361036c5750508160011b915f199060031b1c19161790565b90555b62278d0083029383159484810462278d0014861715610310576305f5e100900462278d00811061339c575b6132419042612ec0565b835f52601360205260405f2055805161338c575b50604051613264602082612bb6565b5f81526001600160a01b0382161561033f576001600160a01b036132888484613839565b1661032c57826132989233613cc4565b600f546001600160a01b031680151580613384575b61330d575b505f5160206158595f395f51905f5292506132e05f8080803460018060a01b03600c54165af1610241612ecd565b6040519134835260208301526040820152608060608201528061330833946080830190612a87565b0390a2565b662386f26fc10000830293838504662386f26fc1000014171561031057803b1561030c576040516340c10f1960e01b815233600482015260248101949094525f908490604490829084905af1928315612345575f5160206158595f395f51905f5293156132b2575f61337e91612bb6565b5f6132b2565b5083156132ad565b6133969083613baf565b5f613255565b5062278d00613237565b90601f19831691845f52815f20925f5b8181106133f157509084600195949392106133d9575b505050811b01905561320c565b01515f1960f88460031b161c191690555f80806133cc565b929360206001819287860151815501950193016133b6565b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b600e5491935f939234106134435760095491600a54831015613409576134a6836130ed565b6009556134b234613a1f565b936040516134bf81612b9b565b338152602080820187815234604080850191825242606086019081525f6080870181815260a088018f81528c83526012909752929020955186546001600160a01b0319166001600160a01b039190911617865592516001860155905160028501559051600384015551909160048210156103ee5761354260059260048301612fc5565b0190518051906001600160401b0382116103da57613564826101428554612b63565b602090601f83116001146137d65761359292915f918361036c5750508160011b915f199060031b1c19161790565b90555b62278d0085029285159386810462278d0014851715610310576305f5e100900462278d0081106137cc575b6135ca9042612ec0565b855f52601360205260405f20555f146137af57835f52601460205260405f20908051906001600160401b0382116103da57613609826101428554612b63565b602090601f831160011461374c5761363792915f918361036c5750508160011b915f199060031b1c19161790565b90555b604051613648602082612bb6565b5f81526001600160a01b0382161561033f576001600160a01b0361366c8584613839565b1661032c578361367c9233613cc4565b600f546001600160a01b031680151580613744575b6136c3575b50506132e08380805f5160206158595f395f51905f52963460018060a01b03600c54165af1610241612ecd565b662386f26fc10000840291848304662386f26fc1000014171561031057803b1561030c576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1938415612345575f5160206158595f395f51905f5294613730575b93613696565b505f61373b91612bb6565b6132e05f61372a565b508115613691565b90601f19831691845f52815f20925f5b818110613797575090846001959493921061377f575b505050811b01905561363a565b01515f1960f88460031b161c191690555f8080613772565b9293602060018192878601518155019501930161375c565b80516137bc575b5061363a565b6137c69084613baf565b5f6137b6565b5062278d006135c0565b90601f19831691845f52815f20925f5b8181106138215750908460019594939210613809575b505050811b019055613595565b01515f1960f88460031b161c191690555f80806137fc565b929360206001819287860151815501950193016137e6565b5f828152600260205260409020546001600160a01b03169190826138c5575b6001600160a01b0316806138ad575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f2060018154019055613867565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055613858565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff1661397e575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff161561397e575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b519069ffffffffffffffffffff8216820361030c57565b6010545f919082906001600160a01b031680613a6c575b501580613a61575b613a46575090565b670de0b6b3a76400009150613a5d90600b54612ead565b0490565b50600b541515613a3e565b9192905f925f600460a05f9360405192838092633fabe5a360e21b82525afa90815f915f93613b59575b50613b4b57505081907f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a15b81613b41575b81613b2a575b5015613af757505050613aec82670de0b6b3a764000092612ead565b049060015b5f613a36565b909193925015613af1577f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a1613af1565b613b38915060115490612ec0565b4211155f613ad0565b5f86139150613aca565b955060019250829150613ac4565b9150915060a0813d60a011613ba7575b81613b7660a09383612bb6565b8101031261030c57613b8781613a08565b506020810151613b9e608060608401519301613a08565b5090915f613a96565b3d9150613b69565b919091805f52600660205260405f2083516001600160401b0381116103da57613bdc81611c818454612b63565b6020601f8211600114613c3c57816020949392613c30927ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce797985f9261036c5750508160011b915f199060031b1c19161790565b90555b604051908152a1565b601f19821695835f52815f20965f5b818110613cac575096600192849260209796957ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7999a10613c94575b505050811b019055613c33565b01515f1960f88460031b161c191690555f8080613c87565b83830151895560019098019760209384019301613c4b565b9291813b613cd3575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f60248201526044810191909152608060648201529216919060209082908190613d1e906084830190612a87565b03815f865af15f9181613d8d575b50613d5a5750613d3a612ecd565b80519081613d555782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b01613d7b57505f808080613ccd565b633250574960e11b5f5260045260245ffd5b9091506020813d602011613dca575b81613da960209383612bb6565b8101031261030c57516001600160e01b03198116810361030c57905f613d2c565b3d9150613d9c565b823b613de0575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190613e2c906084830190612a87565b03815f865af15f9181613e6a575b50613e485750613d3a612ecd565b6001600160e01b03191663757a42ff60e11b01613d7b57505f80808080613dd9565b9091506020813d602011613ea7575b81613e8660209383612bb6565b8101031261030c57516001600160e01b03198116810361030c57905f613e3a565b3d9150613e79565b613eb881612fdd565b50602090604051613ec98382612bb6565b5f8152815f5260068352613edf60405f20612bd7565b815115613f5b5780849151613f1d57505050613efa90612fdd565b505f604051613f098382612bb6565b52613f176040519182612bb6565b5f815290565b613f58935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612bb6565b90565b9250505090565b919091613f77613f7182612cf8565b9361532c565b80511561441457613f8891506153d6565b915b602092604051613f9a8582612bb6565b5f81529260405190613fad608083612bb6565b60498252858201937f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7385527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040840152806868743a20626f6c643b60b81b606085015261430b575b156142e857604051614029604082612bb6565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000087820152905b604080516140628282612bb6565b60078152662336333636663160c81b898201529360048310156103ee5788968795869460018103614287575050825161409b8482612bb6565b60078152662332326335356560c81b85820152915b83517f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32308c8201527f30302f73766722207072657365727665417370656374526174696f3d22784d69818601527f6e594d696e206d656574222076696577426f783d223020302033353020333530606082015261111f60f11b60808201528a51909b8c9b82910160828d015e8a0190608282016e01e39ba3cb6329f173130b9b2903d9608d1b9052518092609183015e0160820191600f830169103e9e17b9ba3cb6329f60b11b9052601983017f3c726563742077696474683d223130302522206865696768743d223130302522905266103334b6361e9160c91b60398401528151938492019083015e01600f0190631110179f60e11b6031830152805192839101603583015e0160310190600482017f3c7465787420783d223530252220793d223530252220636c6173733d226261739052602482017f652220646f6d696e616e742d626173656c696e653d226d6964646c65222074659052723c3a16b0b731b437b91e9136b4b2323632911f60691b6044830152805192839101605783015e0160040160538101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b905203605301600e1981018252601101613f589082612bb6565b600281036142b6575050825161429d8482612bb6565b6007815266046cac2c46660760cb1b85820152916140b0565b909290600219016140b057915082516142cf8482612bb6565b600781526608d9598d0d0d0d60ca1b85820152916140b0565b6040516142f6604082612bb6565b60038152621e339f60e91b8782015290614054565b945061010061431d6040519182612bb6565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522878201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e082015294614016565b5061445c60296144256020936151b8565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612bb6565b91613f8a565b908151811015612fb1570160200190565b8051906004821061397e57600b821015614a4e575b600319820182811161031057601760f91b6001600160f81b03196144ac8385614462565b5116146146d2575b6005831015806146a3575b6144cb575b5050505f90565b6144ea906001600160f81b0319906144e39084614462565b51166157f9565b9060021983018381116103105761450f906001600160f81b0319906144e39084614462565b92600119810181811161031057614534906001600160f81b0319906144e39085614462565b915f198201918211610310576144e36145529260ff60f81b92614462565b916001600160f81b031916607760f81b8114808061468c575b80614675575b8061465e575b614654578061463d575b80614626575b8061460f575b61460657606760f81b1492836145ee575b50826145d6575b50816145be575b506145b9575f80806144c4565b600190565b6001600160f81b031916603360f91b1490505f6145ac565b6001600160f81b031916601d60fa1b1491505f6145a5565b6001600160f81b031916601b60fa1b1492505f61459e565b50505050600190565b506001600160f81b03198316600760fc1b1461458d565b506001600160f81b03198216603160f91b14614587565b506001600160f81b03198416606560f81b14614581565b5050505050600190565b506001600160f81b03198416606d60f81b14614577565b506001600160f81b03198316603160f91b14614571565b506001600160f81b03198516606560f81b1461456b565b50600419830183811161031057601760f91b906001600160f81b0319906146ca9085614462565b5116146144bf565b6002198301838111610310576146f6906001600160f81b0319906144e39085614462565b60011984018481116103105761471a906001600160f81b0319906144e39086614462565b905f1985018581116103105761473e906001600160f81b0319906144e39087614462565b906001600160f81b031916606d60f81b81148080614a37575b80614a20575b6148c557607760f81b821480614a09575b806149f2575b6148c557606f60f81b821480806149db575b806149c4575b6148ff5781806149ad575b80614996575b6148ff57606160f81b83148061497f575b80614968575b6148ff578180614951575b8061493a575b6148ff578180614923575b8061490c575b6148ff57806148e8575b806148d1575b6148c557806148ae575b80614897575b61485e57606760f81b14918280614880575b80614869575b61485e5782614846575b508161482e575b50156144b4575b505050600190565b6001600160f81b031916603160f91b1490505f61481f565b6001600160f81b031916601b60fa1b1491505f614818565b505050505050600190565b506001600160f81b03198216603360f91b1461480e565b506001600160f81b03198116606960f81b14614808565b506001600160f81b03198216603b60f91b146147f6565b506001600160f81b03198316600d60fa1b146147f0565b50505050505050600190565b506001600160f81b03198316603b60f91b146147e6565b506001600160f81b03198416606760f81b146147e0565b5050505050505050600190565b506001600160f81b03198416603b60f91b146147d6565b506001600160f81b03198516606f60f81b146147d0565b506001600160f81b03198416600d60fa1b146147c5565b506001600160f81b03198516600760fc1b146147bf565b506001600160f81b03198416606360f81b146147b4565b506001600160f81b03198516606160f81b146147ae565b506001600160f81b03198416606160f81b1461479d565b506001600160f81b03198516600d60fa1b14614797565b506001600160f81b03198416606760f81b1461478c565b506001600160f81b03198516606760f81b14614786565b506001600160f81b03198316603b60f91b14614774565b506001600160f81b03198416606160f81b1461476e565b506001600160f81b03198316603360f81b1461475d565b506001600160f81b03198416600760fc1b14614757565b8115612fb15760208101516001600160f81b031916601960fa1b1480614e7b575b80614e56575b80614e31575b80614e0c575b1561448857805160051015612fb1576025810180516001600160f81b031916606160f81b1480614de7575b80614dc2575b80614d9d575b80614d78575b80614d53575b61482657815160051015612fb15780516001600160f81b031916603b60f91b1480614d2e575b80614d09575b80614ce4575b80614cbf575b80614c9a575b61482657600e8310159081614c77575b5080614c52575b80614c2d575b80614c08575b80614be3575b80614bbe575b80614b99575b80614b74575b80614b4f575b15614488575050600190565b508051600d1015612fb157602d8101516001600160f81b031916603360f91b14614b43565b508051600c1015612fb157602c8101516001600160f81b031916606960f81b14614b3d565b508051600b1015612fb157602b8101516001600160f81b031916606760f81b14614b37565b508051600a1015612fb157602a8101516001600160f81b031916602f60f81b14614b31565b50805160091015612fb15760298101516001600160f81b031916606560f81b14614b2b565b50805160081015612fb15760288101516001600160f81b031916606760f81b14614b25565b50805160071015612fb15760278101516001600160f81b031916606160f81b14614b1f565b50805160061015612fb15760268101516001600160f81b031916606d60f81b14614b19565b9050815160051015612fb157516001600160f81b031916606960f81b145f614b12565b508151600a1015612fb157602a8201516001600160f81b031916602f60f81b14614b02565b50815160091015612fb15760298201516001600160f81b031916606f60f81b14614afc565b50815160081015612fb15760288201516001600160f81b031916606560f81b14614af6565b50815160071015612fb15760278201516001600160f81b031916601960fa1b14614af0565b50815160061015612fb15760268201516001600160f81b031916606960f81b14614aea565b508151600a1015612fb157602a8201516001600160f81b031916602f60f81b14614ac4565b50815160091015612fb15760298201516001600160f81b031916606f60f81b14614abe565b50815160081015612fb15760288201516001600160f81b031916606960f81b14614ab8565b50815160071015612fb15760278201516001600160f81b031916601960fa1b14614ab2565b50815160061015612fb15760268201516001600160f81b031916607560f81b14614aac565b50805160041015612fb15760248101516001600160f81b031916601d60f91b14614a81565b50805160031015612fb15760238101516001600160f81b031916606160f81b14614a7b565b50805160021015612fb15760228101516001600160f81b031916601d60fa1b14614a75565b50805160011015612fb15760218101516001600160f81b031916606160f81b14614a6f565b90614eaa82612ca7565b614eb76040519182612bb6565b8281528092614ec8601f1991612ca7565b0190602036910137565b80515f5f5b8281106150765750801561507157614ef2614ef79183612ec0565b614ea0565b915f9060405191614f09604084612bb6565b601083526f181899199a1a9b1b9c1cb0b131b232b360811b60208401525f915b848310614f3857505050505090565b614f428382614462565b51928360f81c602281148015615067575b15614f9d575082605c614f72614f6b600195966130ed565b928a614462565b53614f93614f7f826130ed565b956001600160f81b0319165f1a9189614462565b535b019190614f29565b6020811015615055578394605c614fc0614fb9600196976130ed565b978b614462565b536075614fcf614fb9886130ed565b536030614fde614fb9886130ed565b536030614fed614fb9886130ed565b536001600160f81b0319906150059060fc1c88614462565b51169461501e615014826130ed565b965f1a918a614462565b536001600160f81b03199061503690600f1687614462565b51169361504f615045826130ed565b955f1a9189614462565b53614f95565b508261504f614f7f60019495926130ed565b50605c8114614f53565b505090565b90601160f91b6001600160f81b031961508f8487614462565b51161480156150e2575b156150b1576150a96001916130ed565b915b01614ed7565b9060206150be8286614462565b5160f81c106150d0575b6001906150ab565b906005810180911161031057906150c8565b50601760fa1b6001600160f81b03196150fb8487614462565b511614615099565b60048110156103ee578015615192576001811461516b576002146151465760405161512f604082612bb6565b6007815266119b1859d9d95960ca1b602082015290565b604051615154604082612bb6565b600781526610db185a5b595960ca1b602082015290565b5060405161517a604082612bb6565b600881526715995c9a599a595960c21b602082015290565b506040516151a1604082612bb6565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8210156152fd575b806d04ee2d6d415b85acef8100000000600a9210156152e2575b662386f26fc100008110156152ce575b6305f5e1008110156152bd575b6127108110156152ae575b60648110156152a0575b1015615295575b600a6021600184019361523f85612ca7565b9461524d6040519687612bb6565b80865261525c601f1991612ca7565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304801561507157600a9091615267565b60019091019061522d565b606460029104930192615226565b6127106004910493019261521c565b6305f5e10060089104930192615211565b662386f26fc1000060109104930192615204565b6d04ee2d6d415b85acef8100000000602091049301926151f4565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b81046151da565b8015610310575f190190565b90602082511115612c0f5760208251811015612fb157608060c082808601015160f81c161461539b575b61535f81614ea0565b905f5b818110615370575090925050565b6001906001600160f81b03196153868288614462565b51165f1a6153948286614462565b5301615362565b801515806153bc575b156153b7576153b290615320565b61539b565b615356565b50608060c06153cb8386614462565b5160f81c16146153a4565b80515f5f5b8281106155c05750801561507157614ef26153f69183612ec0565b915f905f5b838110615409575050505090565b6001600160f81b031961541c8284614462565b5116601360f91b81036154865750600190602661544261543b866130ed565b9588614462565b53606161545161543b866130ed565b53606d61546061543b866130ed565b53607061546f61543b866130ed565b53603b61547e61543b866130ed565b535b016153fb565b600f60fa1b81036154d6575060019060266154a361543b866130ed565b53606c6154b261543b866130ed565b5360746154c161543b866130ed565b53603b6154d061543b866130ed565b53615480565b601f60f91b8103615502575060019060266154f361543b866130ed565b5360676154b261543b866130ed565b601160f91b810361554c5750600190602661551f61543b866130ed565b53607161552e61543b866130ed565b53607561553d61543b866130ed565b53606f6154b261543b866130ed565b602760f81b81036155a55750600190602661556961543b866130ed565b53606161557861543b866130ed565b53607061558761543b866130ed565b53606f61559661543b866130ed565b5360736154c161543b866130ed565b92600191906154d06155b6826130ed565b955f1a9188614462565b90601360f91b6001600160f81b03196155d98487614462565b5116036155f6576004810180911161031057600190915b016153db565b600f60fa1b6001600160f81b031961560e8487614462565b511603615629576003810180911161031057600190916155f0565b601f60f91b6001600160f81b03196156418487614462565b51160361565c576003810180911161031057600190916155f0565b601160f91b6001600160f81b03196156748487614462565b51160361568f576005810180911161031057600190916155f0565b90602760f81b6001600160f81b03196156a88387614462565b5116146156b8575b6001906155f0565b906005810180911161031057906156b0565b908151156157e9578151600281018091116103105760039004600281901b91906001600160fe1b0381160361031057604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b8089106157ad57506020959697509060039291525106806001146157985760021461578b575b50808452830101604052565b603d905f1901535f61577f565b50603d90815f1982015360011901535f61577f565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c16516002840153165160038201530193615759565b9050604051613f17602082612bb6565b8060f81c60418110158061582d575b615810575090565b602091500160ff81116103105760f81b6001600160f81b03191690565b50605a81111561580856fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377a2646970667358221220578942a2346feb91779f38837c59a4e62c91a0b2a2d9e8af587ed20a5ae76aae64736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
      "bytecode": "0x610180604052346100845761001b6100156100d5565b916101c7565b60405161241b9081610e718239608051816116f7015260a051816117b4015260c051816116c1015260e051816117460152610100518161176c01526101205181610a5901526101405181610a820152610160518181816106830152818161087301526110a50152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b601f909101601f19168101906001600160401b038211908210176100bf57604052565b610088565b604051906100d360408361009c565b565b61332c90606082380392836040519485926100f0828561009c565b833981010312610084578151906001600160a01b0382168203610084576040602084015193015191929190565b6040519061012c60408361009c565b60048252565b6040519061014160408361009c565b60018252565b6040519061015660408361009c565b600a825269213930b3902a37b5b2b760b11b6020830152565b1561017657565b60405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b6064820152608490fd5b916101d0610147565b6101d8610147565b906101e161011d565b90634252414760e01b60208301526101f7610132565b603160f81b60208201908152845190949193916001600160401b0382116100bf5761022c8261022760035461036e565b6103a6565b602090601f83116001146102e75791806102609261026895945f926102dc575b50508160011b915f199060031b1c19161790565b600355610445565b610271816106db565b6101205261027e826107d0565b610140526020815191012060e052519020610100524660a05261029f6108c2565b6080523060c0526102b28282101561016f565b610160526102bf8261051e565b506102c982610594565b50806102d3575050565b6100d39161062f565b015190505f8061024c565b60035f52601f19831691907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b925f5b81811061035657509160019391856102689796941061033e575b505050811b01600355610445565b01515f1960f88460031b161c191690555f8080610330565b92936020600181928786015181550195019301610316565b90600182811c9216801561039c575b602083101461038857565b634e487b7160e01b5f52602260045260245ffd5b91607f169161037d565b601f81116103b2575050565b60035f5260205f20906020601f840160051c830193106103ec575b601f0160051c01905b8181106103e1575050565b5f81556001016103d6565b90915081906103cd565b601f821161040357505050565b5f5260205f20906020601f840160051c8301931061043b575b601f0160051c01905b818110610430575050565b5f8155600101610425565b909150819061041c565b80519091906001600160401b0381116100bf5761046e8161046760045461036e565b60046103f6565b602092601f82116001146104a25761049d929382915f926102dc5750508160011b915f199060031b1c19161790565b600455565b60045f52601f198216937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b915f5b86811061050657508360019596106104ee575b505050811b01600455565b01515f1960f88460031b161c191690555f80806104e3565b919260206001819286850151815501940192016104d0565b6001600160a01b0381165f9081525f5160206132cc5f395f51905f52602052604090205460ff1661058f576001600160a01b03165f8181525f5160206132cc5f395f51905f5260205260408120805460ff191660011790553391905f51602061328c5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206132ec5f395f51905f52602052604090205460ff1661058f576001600160a01b0381165f9081525f5160206132ec5f395f51905f5260205260409020805460ff1916600117905533906001600160a01b03167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a65f51602061328c5f395f51905f525f80a4600190565b91906001600160a01b03831680156106c8576002548281018091116106c3576002555f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b038085116106ac57506100d392935061099f565b630e58ae9360e11b5f52600485905260245260445ffd5b61098b565b63ec442f0560e01b5f525f60045260245ffd5b908151602081105f146106f65750906106f390610920565b90565b6001600160401b0381116100bf5761071a8161071360055461036e565b60056103f6565b602092601f821160011461075157610749929382915f926102dc5750508160011b915f199060031b1c19161790565b60055560ff90565b60055f52601f198216937f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0915f5b8681106107b857508360019596106107a0575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f8080610792565b9192602060018192868501518155019401920161077f565b908151602081105f146107e85750906106f390610920565b6001600160401b0381116100bf5761080c8161080560065461036e565b60066103f6565b602092601f82116001146108435761083b929382915f926102dc5750508160011b915f199060031b1c19161790565b60065560ff90565b60065f52601f198216937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f915f5b8681106108aa5750836001959610610892575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f8080610884565b91926020600181928685015181550194019201610871565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261091a60c08261009c565b51902090565b601f81511161094b57602081519101516020821061093c571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b634e487b7160e01b5f52601160045260245ffd5b906109a981610a9e565b9165ffffffffffff4311610a8657600a5480610a5057506109e36109d36100d3945f5b6001610e14565b65ffffffffffff4316600a610d3e565b50506001600160a01b03168015610a38575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116610bcd565b610a49610a4483610a9e565b610acf565b50506109f5565b92835f198101116106c357600a5f525f5160206132ac5f395f51905f52909301546100d3936109e3916109d3919060301c6109cc565b6306dfcc6560e41b5f5260306004524360245260445ffd5b6001600160d01b038111610ab8576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b65ffffffffffff4311610a8657600a5480610af957506109d3610af5915f5b6002610e14565b9091565b805f198101116106c357600a5f525f5160206132ac5f395f51905f520154610af5916109d39160301c610aee565b65ffffffffffff4311610a8657805480610b5b5750610b4b610af5925f6002610e14565b9065ffffffffffff431690610d3e565b805f198101116106c3575f82815260209020015f190154610af592610b4b9160301c610aee565b65ffffffffffff4311610a8657805480610ba65750610b4b610af5925f6001610e14565b805f198101116106c3575f82815260209020015f190154610af592610b4b9160301c6109cc565b6001600160a01b03808316939291908116908185141580610cc0575b610bf5575b5050505050565b81610c66575b505082610c0a575b8080610bee565b6001600160a01b03165f9081526009602052604090205f51602061330c5f395f51905f5291610c4391610c3d9091610a9e565b90610b82565b604080516001600160d01b039384168152919092166020820152a25f8080610c03565b6001600160a01b03165f9081526009602052604090205f51602061330c5f395f51905f5290610c9e90610c9886610a9e565b90610b27565b604080516001600160d01b039384168152919092166020820152a25f80610bfb565b50831515610be9565b5f198101919082116106c357565b908154680100000000000000008110156100bf5760018101808455811015610d2a575f9283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b634e487b7160e01b5f52603260045260245ffd5b80549293928015610dea57610d55610d6091610cc9565b825f5260205f200190565b8054603081901c9365ffffffffffff91821692918116808411610ddb57879303610da75750610da392509065ffffffffffff82549181199060301b169116179055565b9190565b915050610da391610dc7610db96100c4565b65ffffffffffff9093168352565b6001600160d01b0386166020830152610cd7565b632520601d60e01b5f5260045ffd5b5090610e0f91610dfb610db96100c4565b6001600160d01b0385166020830152610cd7565b5f9190565b91909180600114610e5657600214610e3a57634e487b7160e01b5f52605160045260245ffd5b6001600160d01b03908116918116919091039081116106c35790565b506001600160d01b03918216908216019081116106c3579056fe60806040526004361015610011575f80fd5b5f3560e01c806301ffc9a71461025457806306fdde031461024f578063095ea7b31461024a57806318160ddd1461024557806323b872dd14610240578063248a9ca31461023b5780632f2ff15d14610236578063313ce567146102315780633644e5151461022c57806336568abe146102275780633a46b1a81461022257806340c10f191461021d57806342966c68146102185780634bf5d7e914610213578063587cde1e1461020e5780635c19a95c1461020957806368573107146102045780636fcfff45146101ff57806370a08231146101fa57806379cc6790146101f55780637ecebe00146101f057806384b0196e146101eb5780638e539e8c146101e657806391d14854146101e157806391ddadf4146101dc57806395d89b41146101d75780639ab24eb0146101d2578063a217fddf146101cd578063a9059cbb146101c8578063c3cda520146101c3578063d505accf146101be578063d5391393146101b9578063d547741f146101b4578063d5abeb01146101af578063dd62ed3e146101aa5763f1127ed8146101a5575f80fd5b611127565b6110c8565b61108e565b61104d565b611013565b610ee7565b610dd4565b610d8a565b610d70565b610d1f565b610c7a565b610c4f565b610bfd565b610b3e565b610a41565b610a06565b6109d2565b610996565b61092e565b6107f5565b61079e565b61075b565b6106cb565b6106ae565b610644565b61055b565b610513565b6104f9565b6104de565b610496565b610463565b610423565b610406565b6103d1565b6102e6565b346102aa5760203660031901126102aa5760043563ffffffff60e01b81168091036102aa57602090637965db0b60e01b8114908115610299575b506040519015158152f35b6301ffc9a760e01b1490505f61028e565b5f80fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102e39281815201906102ae565b90565b346102aa575f3660031901126102aa576040515f600354610306816111f1565b808452906001811690811561039c575060011461033e575b61033a8361032e818503826112df565b604051918291826102d2565b0390f35b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106103825750909150810160200161032e61031e565b91926001816020925483858801015201910190929161036a565b60ff191660208086019190915291151560051b8401909101915061032e905061031e565b6001600160a01b038116036102aa57565b346102aa5760403660031901126102aa576103fb6004356103f1816103c0565b6024359033611b50565b602060405160018152f35b346102aa575f3660031901126102aa576020600254604051908152f35b346102aa5760603660031901126102aa576103fb600435610443816103c0565b60243561044f816103c0565b6044359161045e8333836113b8565b611486565b346102aa5760203660031901126102aa57602061048e6004355f52600b602052600160405f20015490565b604051908152f35b346102aa5760403660031901126102aa576104dc6024356004356104b9826103c0565b6104d76104d2825f52600b602052600160405f20015490565b6115f4565b61162e565b005b346102aa575f3660031901126102aa57602060405160128152f35b346102aa575f3660031901126102aa57602061048e6116be565b346102aa5760403660031901126102aa57600435602435610533816103c0565b336001600160a01b0382160361054c576104dc916117da565b63334bd91960e11b5f5260045ffd5b346102aa5760403660031901126102aa57600435610578816103c0565b6001600160a01b03165f908152600960205260409020610599602435611862565b8154905f8291600584116105ec575b6105b3935084611d70565b90816105d157505060205f5b6040516001600160d01b039091168152f35b6105dc60209261189b565b905f52815f20015460301c6105bf565b91926105f781611c12565b810390811161063f576105b393855f5265ffffffffffff8260205f2001541665ffffffffffff8516105f1461062d5750916105a8565b92915061063990611301565b906105a8565b6111dd565b346102aa5760403660031901126102aa57600435610661816103c0565b60243561066c611585565b6002549181830180931161063f576106a96104dc937f0000000000000000000000000000000000000000000000000000000000000000101561131c565b6118a9565b346102aa5760203660031901126102aa576104dc60043533611948565b346102aa575f3660031901126102aa576106e443611bc5565b65ffffffffffff806106f543611bc5565b1691160361074c5761033a60405161070e6040826112df565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c7400000060208201526040519182916020835260208301906102ae565b6301bfc1c560e61b5f5260045ffd5b346102aa5760203660031901126102aa57600435610778816103c0565b60018060a01b03165f526008602052602060018060a01b0360405f205416604051908152f35b346102aa5760203660031901126102aa576104dc6004356107be816103c0565b33611a70565b9181601f840112156102aa5782359167ffffffffffffffff83116102aa576020808501948460051b0101116102aa57565b346102aa5760403660031901126102aa5760043567ffffffffffffffff81116102aa576108269036906004016107c4565b9060243567ffffffffffffffff81116102aa576108479036906004016107c4565b90610850611585565b8184036108f5575f5f5b8381106108d557506108716108999160025461130f565b7f0000000000000000000000000000000000000000000000000000000000000000101561131c565b5f5b8481106108a457005b806108cf6108bd6108b86001948989611381565b611396565b6108c8838787611381565b35906118a9565b0161089b565b906108ee6001916108e7848787611381565b359061130f565b910161085a565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b346102aa5760203660031901126102aa5760043561094b816103c0565b6001600160a01b03165f9081526009602052604090205463ffffffff811161097f5760405163ffffffff9091168152602090f35b6306dfcc6560e41b5f52602060045260245260445ffd5b346102aa5760203660031901126102aa57602061048e6004356109b8816103c0565b6001600160a01b03165f9081526020819052604090205490565b346102aa5760403660031901126102aa576104dc6004356109f2816103c0565b60243590610a018233836113b8565b611948565b346102aa5760203660031901126102aa57600435610a23816103c0565b60018060a01b03165f526007602052602060405f2054604051908152f35b346102aa575f3660031901126102aa57610ae5610a7d7f0000000000000000000000000000000000000000000000000000000000000000611eeb565b610aa67f0000000000000000000000000000000000000000000000000000000000000000611f4b565b6020604051610ab582826112df565b5f815281610af381830194601f198301368737604051978897600f60f81b895260e0858a015260e08901906102ae565b9087820360408901526102ae565b914660608701523060808701525f60a087015285830360c087015251918281520192915f5b828110610b2757505050500390f35b835185528695509381019392810192600101610b18565b346102aa5760203660031901126102aa57610b5a600435611862565b600a54905f829160058411610ba9575b610b769350600a611d70565b80610b8757506040515f8152602090f35b610ba4610b9560209261189b565b600a5f52825f20015460301c90565b6105bf565b9192610bb481611c12565b810390811161063f57610b7693600a5f5265ffffffffffff8260205f2001541665ffffffffffff8516105f14610beb575091610b6a565b929150610bf790611301565b90610b6a565b346102aa5760403660031901126102aa57602060ff610c43602435600435610c24826103c0565b5f52600b845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b346102aa575f3660031901126102aa576020610c6a43611bc5565b65ffffffffffff60405191168152f35b346102aa575f3660031901126102aa576040515f600454610c9a816111f1565b808452906001811690811561039c5750600114610cc15761033a8361032e818503826112df565b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610d055750909150810160200161032e61031e565b919260018160209254838588010152019101909291610ced565b346102aa5760203660031901126102aa57600435610d3c816103c0565b6001600160a01b03165f9081526009602090815260409091206001600160d01b0390610d6790611af1565b16604051908152f35b346102aa575f3660031901126102aa5760206040515f8152f35b346102aa5760403660031901126102aa576103fb600435610daa816103c0565b6024359033611486565b6064359060ff821682036102aa57565b6084359060ff821682036102aa57565b346102aa5760c03660031901126102aa57600435610df1816103c0565b60243590604435610e00610db4565b6084359060a43592804211610ed55791610e859391610e77610e7c9460405160208101917fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf835260018060a01b038a1660408301528a6060830152608082015260808152610e6f60a0826112df565b519020611b1b565b611f82565b9092919261202d565b6001600160a01b0381165f908152600760205260409020805460018101909155809303610eb6576104dc9250611a70565b90506301d4b62360e61b5f5260018060a01b031660045260245260445ffd5b632341d78760e11b5f5260045260245ffd5b346102aa5760e03660031901126102aa57600435610f04816103c0565b602435610f10816103c0565b6044359060643592610f20610dc4565b60a43560c43590864211611000576001600160a01b0384165f908152600760205260409020805460018101909155610fc59390610fc0909860405160208101917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9835260018060a01b0389169b8c604084015260018060a01b038b1660608401528b608084015260a083015260c082015260c08152610e6f60e0826112df565b611b41565b936001600160a01b03851603610fdf576104dc9350611b50565b6325c0072360e11b5f526001600160a01b038085166004521660245260445ffd5b8663313c898160e11b5f5260045260245ffd5b346102aa575f3660031901126102aa5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b346102aa5760403660031901126102aa576104dc602435600435611070826103c0565b6110896104d2825f52600b602052600160405f20015490565b6117da565b346102aa575f3660031901126102aa5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346102aa5760403660031901126102aa57602061111e6004356110ea816103c0565b602435906110f7826103c0565b60018060a01b03165f526001835260405f209060018060a01b03165f5260205260405f2090565b54604051908152f35b346102aa5760403660031901126102aa57600435611144816103c0565b6024359063ffffffff821682036102aa5761033a91611193916111656113a0565b5061116e6113a0565b506001600160a01b03165f90815260096020526040902061118d6113a0565b506120a9565b50604051906111a1826112be565b5465ffffffffffff811680835260309190911c60209283019081526040805192835290516001600160d01b031692820192909252918291820190565b634e487b7160e01b5f52601160045260245ffd5b90600182811c9216801561121f575b602083101461120b57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611200565b5f9291815491611238836111f1565b808352926001811690811561128d575060011461125457505050565b5f9081526020812093945091925b838310611273575060209250010190565b600181602092949394548385870101520191019190611262565b915050602093945060ff929192191683830152151560051b010190565b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176112da57604052565b6112aa565b90601f8019910116810190811067ffffffffffffffff8211176112da57604052565b906001820180921161063f57565b9190820180921161063f57565b1561132357565b60405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b6044820152606490fd5b6040519061136b6040836112df565b565b634e487b7160e01b5f52603260045260245ffd5b91908110156113915760051b0190565b61136d565b356102e3816103c0565b604051906113ad826112be565b5f6020838281520152565b6001600160a01b039081165f81815260016020908152604080832094861683529390529190912091929091545f1981106113f3575b50505050565b818110611465578215611452576001600160a01b0384161561143f57611435925f526001602052039160405f209060018060a01b03165f5260205260405f2090565b555f8080806113ed565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b83637dc7a0d960e11b5f5260018060a01b031660045260245260445260645ffd5b6001600160a01b038116939291908415611572576001600160a01b038216801561155f576001600160a01b0382165f9081526020819052604090205495848710611539578461136b9697036114ea8460018060a01b03165f525f60205260405f2090565b556001600160a01b0384165f9081526020819052604090208054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a361223e565b63391434e360e21b5f526001600160a01b0383166004526024879052604485905260645ffd5b63ec442f0560e01b5f525f60045260245ffd5b634b637e8f60e11b5f525f60045260245ffd5b335f9081527ff70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8602052604090205460ff16156115bd57565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b5f818152600b6020908152604080832033845290915290205460ff16156116185750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff166116b8575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806117b1575b15611719577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a081526117ab60c0826112df565b51902090565b507f000000000000000000000000000000000000000000000000000000000000000046146116f0565b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff16156116b8575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b65ffffffffffff61187243611bc5565b168082101561188557506102e390611bc5565b90637669fc0f60e11b5f5260045260245260445ffd5b5f1981019190821161063f57565b91906001600160a01b038316801561155f5760025482810180911161063f576002556001600160a01b0384165f90815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a36002546001600160d01b039390848111611931575061136b9293506121c5565b8490630e58ae9360e11b5f5260045260245260445ffd5b6001600160a01b038116908115611572576001600160a01b0381165f90815260208190526040902054838110611a4b579061199a8461136b959493039160018060a01b03165f525f60205260405f2090565b5581600254036002555f817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180602081018782520390a38015611a33575b6119ec6119e7836120be565b612190565b50505f908152600860205260408120549080527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b039081169116611dc9565b611a44611a3f836120be565b61215b565b50506119db565b63391434e360e21b5f526001600160a01b03909116600452602452604482905260645ffd5b6001600160a01b038181165f81815260086020526040812080548685166001600160a01b03198216811790925561136b96941694611aeb9390928691907f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a46001600160a01b03165f9081526020819052604090205490565b91611dc9565b80549081611aff5750505f90565b815f1981011161063f575f525f199060205f2001015460301c90565b604290611b266116be565b906040519161190160f01b8352600283015260228201522090565b916102e39391610e7c93611f82565b6001600160a01b0316908115611452576001600160a01b03811692831561143f5780611bb87f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593855f52600160205260405f209060018060a01b03165f5260205260405f2090565b55604051908152602090a3565b65ffffffffffff8111611bdd5765ffffffffffff1690565b6306dfcc6560e41b5f52603060045260245260445ffd5b8115611bfe570490565b634e487b7160e01b5f52601260045260245ffd5b60018111156102e357806001600160801b821015611d33575b611cd9611ccf611cc5611cbb611cb1611ca7611c96611ce09760048a600160401b611ce59c1015611d26575b640100000000811015611d19575b62010000811015611d0c575b610100811015611cff575b6010811015611cf2575b1015611cea575b60030260011c90565b611ca0818b611bf4565b0160011c90565b611ca0818a611bf4565b611ca08189611bf4565b611ca08188611bf4565b611ca08187611bf4565b611ca08186611bf4565b8093611bf4565b821190565b900390565b60011b611c8d565b60041c9160021b91611c86565b60081c9160041b91611c7c565b60101c9160081b91611c71565b60201c9160101b91611c65565b60401c9160201b91611c57565b5050611ce5611ce0611cd9611ccf611cc5611cbb611cb1611ca7611c96611d5a8a60801c90565b9850600160401b9750611c2b9650505050505050565b905b838310611d7f5750505090565b90919280841860011c8185160190835f5265ffffffffffff8260205f2001541665ffffffffffff8416105f14611db95750925b9190611d72565b9350611dc490611301565b611db2565b6001600160a01b03808316939291908116908185141580611ee2575b611df1575b5050505050565b81611e75575b505082611e06575b8080611dea565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72491611e5291611e4c90916120be565b90612127565b604080516001600160d01b039384168152919092166020820152a25f8080611dff565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72490611ec090611eba866120be565b906120ef565b604080516001600160d01b039384168152919092166020820152a25f80611df7565b50831515611de5565b60ff8114611f315760ff811690601f8211611f225760405191611f0f6040846112df565b6020808452838101919036833783525290565b632cd44ac360e21b5f5260045ffd5b506040516102e381611f44816005611229565b03826112df565b60ff8114611f6f5760ff811690601f8211611f225760405191611f0f6040846112df565b506040516102e381611f44816006611229565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411612004579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15611ff9575f516001600160a01b03811615611fef57905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b6004111561201957565b634e487b7160e01b5f52602160045260245ffd5b6120368161200f565b8061203f575050565b6120488161200f565b6001810361205f5763f645eedf60e01b5f5260045ffd5b6120688161200f565b60028103612083575063fce698f760e01b5f5260045260245ffd5b8061208f60039261200f565b146120975750565b6335e2f38360e21b5f5260045260245ffd5b8054821015611391575f5260205f2001905f90565b6001600160d01b0381116120d8576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b906120f943611bc5565b9061210383611af1565b6001600160d01b03918216908216039190821161063f576121239261230f565b9091565b9061213143611bc5565b9061213b83611af1565b6001600160d01b03918216908216019190821161063f576121239261230f565b61216443611bc5565b9061216f600a611af1565b6001600160d01b039182169082160190811161063f5761212391600a61230f565b61219943611bc5565b906121a4600a611af1565b6001600160d01b039182169082160390811161063f5761212391600a61230f565b9061136b916121d6611a3f836120be565b50506001600160a01b0316801561222b575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116611dc9565b6122376119e7836120be565b50506121e8565b61136b92916001600160a01b039091169081156122a1575b6001600160a01b031690811561228e575b5f90815260086020526040808220549282529020546001600160a01b039081169116611dc9565b61229a6119e7846120be565b5050612267565b6122ad611a3f846120be565b5050612256565b8054600160401b8110156112da576122d1916001820181556120a9565b6122fc57815160209092015160301b65ffffffffffff191665ffffffffffff92909216919091179055565b634e487b7160e01b5f525f60045260245ffd5b805492939280156123bb576123266123319161189b565b825f5260205f200190565b8054603081901c9365ffffffffffff918216929181168084116123ac57879303612378575061237492509065ffffffffffff82549181199060301b169116179055565b9190565b9150506123749161239861238a61135c565b65ffffffffffff9093168352565b6001600160d01b03861660208301526122b4565b632520601d60e01b5f5260045ffd5b50906123e0916123cc61238a61135c565b6001600160d01b03851660208301526122b4565b5f919056fea26469706673582212207c79893644c7dbadfed5aa4c1bdd0c907cd6c3603bffdcb14a7ce3805a22f2fe64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a7df7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76f70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
          "name": "batchMove1155WithDuration",
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
          "name": "batchMove721WithDuration",
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
      "bytecode": "0x6080346100af57601f6139c738819003918201601f19168301916001600160401b038311848410176100b35780849260409485528339810103126100af5761007f610055602061004e846100c7565b93016100c7565b9160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556100db565b50600180546001600160a01b0319166001600160a01b039290921691909117905560405161384290816101658239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100af57565b6001600160a01b0381165f9081525f5160206139a75f395f51905f52602052604090205460ff1661015f576001600160a01b03165f8181525f5160206139a75f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c90816301ffc9a71461235e57508063025f75ac146122665780630412619614612222578063150b7a0214612098578063248a9ca31461206657806325fdf58914611f1d5780632f2ff15d14611ee05780632f3ef60214611bf85780632ff1d0f914611bd8578063358d48d914611b2957806335f81b8714611aeb57806336568abe14611aa6578063380ff99914611a5d57806338c88528146118d15780634242b7461461173457806350b86c32146116355780635daa63c7146114165780636f39becd146113ca5780637b103999146113a15780637b606fdc146112b357806381bd34d21461126a5780638430dd3a146110da57806391d1485414611091578063a217fddf14611075578063bc197c8114610e3a578063c10e515314610d83578063c2fe518514610d49578063c555abb4146109e6578063cee0826d146108bb578063d395a212146106e5578063d547741f1461069e578063d5df79af146105cf578063d6bd07ee14610594578063d742385814610574578063e086e5ec146104e3578063f07a380e146104a1578063f23a6e61146102cc5763f4f3b2000361000f57346102c95760203660031901126102c9576101df612411565b6101e7613091565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156102be578391610288575b506040519063a9059cbb60e01b84523360045260245260208360448180865af1906001845114821615610268575b5015610256575080f35b635274afe760e01b8252600452602490fd5b60018215166102805750813b15153d1516165f61024c565b3d84823e3d90fd5b90506020813d6020116102b6575b816102a360209383612453565b810103126102b257515f61021e565b5f80fd5b3d9150610296565b6040513d85823e3d90fd5b80fd5b50346102c95760a03660031901126102c9576102e6612411565b6102ee612427565b6044359160643591608435906001600160401b03821161049d5760249261031c6103229336906004016124a3565b91612e89565b3386526003602052604086208587526020526040862060018060a01b0383165f5260205260405f20610355858254612680565b90558015610496576103679042612680565b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20548111610467575b506001546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561045c57604080915f5160206137cd5f395f51905f5294889161043a575b5001519533815260056020528181208682526020522060018060a01b0382165f5260205260405f20549061042560405192839260018060a01b031697339684612897565b0390a460405163f23a6e6160e01b8152602090f35b61045691503d808a833e61044e8183612453565b8101906126f4565b5f6103e1565b6040513d87823e3d90fd5b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f610397565b5084610367565b8580fd5b50346102c95760403660031901126102c9576104cf6104be612411565b6104c66129f5565b60243590613311565b60015f5160206137ed5f395f51905f525580f35b50346102c957806003193601126102c9576104fc613091565b8080808047335af13d1561056f573d61051481612488565b906105226040519283612453565b81528260203d92013e5b156105345780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b61052c565b50346102c9576104cf61058636612513565b9161058f6129f5565b6134a1565b50346102c95760803660031901126102c9576104cf6105b1612411565b6105b96123fb565b906105c26129f5565b6044359060243590612a79565b50346102c95760803660031901126102c9576004356001600160401b03811161069a576106009036906004016123cb565b91906024356001600160401b038111610696576106219036906004016123cb565b939061062b61243d565b90606435926106386129f5565b610643878214612608565b855b818110610661578660015f5160206137ed5f395f51905f525580f35b8061069086868b6106898561068261067d6001998f8c90612648565b61266c565b928a612648565b359061364c565b01610645565b8280fd5b5080fd5b50346102c95760403660031901126102c9576106e16004356106be612427565b906106dc6106d7825f525f602052600160405f20015490565b6130e0565b613421565b5080f35b50346102c9576106f43661254d565b9192936106ff6129f5565b61070a828614612608565b61071583151561281b565b6001546040516390229af760e01b8152306004820152908790829060249082906001600160a01b03165afa80156108b0576040918891610896575b500151909490913391875b818110610777578860015f5160206137ed5f395f51905f525580f35b8061078861067d600193858c612648565b61079382868b612648565b3590838060a01b031690818c52600360205260408c20818d5260205260408c20875f526020526107c860405f2054151561285e565b818c52600560205260408c20818d5260205260408c20875f5260205260405f2054894282115f1461088b576107fc91612680565b828d5260056020528c8260408220915260205260408d20885f5260205260405f2055818c52600360205260408c20818d5260205260408c20875f5260205260405f205491808d5260056020528c8260408220915260205260408d20885f526020525f5160206137cd5f395f51905f5261088260405f20546040519182918d339884612897565b0390a40161075b565b6107fc915042612680565b6108aa91503d808a833e61044e8183612453565b5f610750565b6040513d89823e3d90fd5b50346102c957806108cb3661254d565b6108d99593929491956129f5565b6108e4868414612608565b80156109c757604080513360208201529081019190915261091281606081015b03601f198101835282612453565b915b835b818110610932578460015f5160206137ed5f395f51905f525580f35b6001600160a01b0361094861067d838587612648565b16610954828989612648565b3590803b156109c3578587916109839383604051809681958294635c46a7ef60e11b84523033600486016129c4565b03925af19081156109b857869161099f575b5050600101610916565b816109a991612453565b6109b457845f610995565b8480fd5b6040513d88823e3d90fd5b8680fd5b50604051336020820152602081526109e0604082612453565b91610914565b50346102c95760a03660031901126102c957610a00612411565b906024356001600160401b03811161069a57610a209036906004016123cb565b90926044356001600160401b038111610d4557610a419036906004016123cb565b949092610a4c6123fb565b90608435610a586129f5565b610a63888314612608565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015610d3a578990610cfb575b610aae9150949194612a2d565b6001600160a01b039093169233885b848110610bc3575050509686978015155f14610ba4576040805133602082015290810191909152610af18160608101610904565b945b833b15610ba057610b5c8896610b4a610b389989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a489019161298c565b8681036003190160648801529161298c565b8381036003190160848501529061279f565b03925af18015610b9557610b80575b5060015f5160206137ed5f395f51905f525580f35b81610b8a91612453565b6102c957805f610b6b565b6040513d84823e3d90fd5b8780fd5b5060405133602082015260208152610bbd604082612453565b94610af3565b808b610bde82610bd66001958a8d612648565b35928d612648565b3590888d5260036020528c8160408220915260205260408d20855f52602052610c0d8260405f205410156128f0565b888d5260056020528c8160408220915260205260408d20855f52602052610c3a60405f2054421015612933565b888d5260036020528c8160408220915260205260408d20855f5260205260405f20610c6683825461297f565b9055888d5260036020528c8160408220915260205260408d20855f5260205260405f205415610cd3575b604080519283526001600160a01b038716602084015233928a917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd191a401610abd565b888d5260056020528c8160408220915260205260408d20855f526020528c60405f2055610c90565b506020813d602011610d32575b81610d1560209383612453565b81010312610d2e57610d29610aae916126a1565b610aa1565b8880fd5b3d9150610d08565b6040513d8b823e3d90fd5b8380fd5b50346102c95760803660031901126102c9576104cf610d66612411565b610d6e61243d565b610d766129f5565b606435916024359061364c565b50346102c95760603660031901126102c9576004356001600160401b03811161069a57610db49036906004016123cb565b6024356001600160401b038111610d4557610dd39036906004016123cb565b610ddb61243d565b92610de46129f5565b610def828214612608565b855b818110610e0d578660015f5160206137ed5f395f51905f525580f35b80610e3486610e2261067d600195878c612648565b610e2d84888a612648565b35906134a1565b01610df1565b50346102c95760a03660031901126102c957610e54612411565b610e5c612427565b916044356001600160401b03811161069a57610e7c9036906004016125a1565b926064356001600160401b03811161069657610e9c9036906004016125a1565b926084356001600160401b038111610d455790610ec1610ed4939236906004016124a3565b91610ecf8751875114612608565b612e89565b909290801561106e57610ee79042612680565b6001546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa90811561106357906040918591611049575b50015192805b86518110156110375780610f40600192896129b0565b51610f4b82876129b0565b519033855260036020526040852081865260205260408520848060a01b038a165f5260205260405f20610f7f838254612680565b905533855260056020526040852081865260205260408520848060a01b038a165f5260205260405f20548611611009575b33855260056020526040852081865260205260408520848060a01b038a165f5260205260405f2054915f5160206137cd5f395f51905f52604051806110008d898060a01b0316968d339684612897565b0390a401610f2a565b33855260056020526040852081865260205260408520848060a01b038a165f526020528560405f2055610fb0565b60405163bc197c8160e01b8152602090f35b61105d91503d8087833e61044e8183612453565b5f610f24565b6040513d86823e3d90fd5b5081610ee7565b50346102c957806003193601126102c957602090604051908152f35b50346102c95760403660031901126102c95760406110ad612427565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102c9576110e93661254d565b906110f26129f5565b6110fd818514612608565b61110882151561281b565b6001546040516390229af760e01b8152306004820152908790829060249082906001600160a01b03165afa80156108b0576040918891611250575b5001519386805b828110611166575060015f5160206137ed5f395f51905f525580f35b86866001937f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad361123a60406111ac878f6111a661067d838f938f90612648565b97612648565b3594888060a01b03169384815260026020528181208682526020526111dc338a8060a01b038484205416146127df565b8481526004602052818120868252602052818120548c4282115f146112455761120491612680565b858252600460205282822087835260205282822055848152600460205281812086825260205220546040519182913397836127c3565b0390a401879061114a565b611204915042612680565b61126491503d808a833e61044e8183612453565b5f611143565b50346102c957604061127b36612513565b939160018060a01b031682526003602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102c95760603660031901126102c9576004356001600160401b03811161069a576112e49036906004016123cb565b6024356001600160401b038111610d45576113039036906004016123cb565b6044929192356001600160401b03811161049d576113259036906004016123cb565b9190926113306129f5565b81811480611398575b61134290612608565b865b818110611360578760015f5160206137ed5f395f51905f525580f35b8061139261137461067d600194868c612648565b61137f83878b612648565b3561138b84898b612648565b35916131a0565b01611344565b50818314611339565b50346102c957806003193601126102c9576001546040516001600160a01b039091168152602090f35b50346102c95760403660031901126102c9576020906001600160a01b036113ef612411565b168152600282526040812060243582528252604060018060a01b0391205416604051908152f35b50346102c95760603660031901126102c957611430612411565b906024356001600160401b03811161069a576114509036906004016123cb565b6044356001600160401b038111610d455761146f9036906004016123cb565b92909161147a6129f5565b611485848214612608565b33956001600160a01b031690855b8181106115135750859650813b1561049d578560206114e08296610b3898604051998a988997631759616b60e11b89523060048a01523360248a015260a060448a015260a489019161298c565b8284820391600319830160848701525201925af18015610b9557610b80575060015f5160206137ed5f395f51905f525580f35b806115216001928487612648565b3561152d828989612648565b3590858a52600360205260408a20818b5260205260408a208b5f5260205261155b8260405f205410156128f0565b858a52600560205260408a20818b5260205260408a208b5f5260205261158760405f2054421015612933565b858a52600360205260408a20818b5260205260408a208b5f5260205260405f206115b283825461297f565b9055858a52600360205260408a20818b5260205260408a208b5f5260205260405f20541561160e575b604051918252857fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a401611493565b858a52600560205260408a20818b5260205260408a208b5f526020528960405f20556115db565b50346102c95760a03660031901126102c9576004356001600160401b03811161069a576116669036906004016123cb565b91906024356001600160401b038111610696576116879036906004016123cb565b93906044356001600160401b0381116109b4576116a89036906004016123cb565b91906116b26123fb565b92608435946116bf6129f5565b8881148061172b575b6116d190612608565b875b8181106116ef578860015f5160206137ed5f395f51905f525580f35b8061172588888d6117128561170b8f6001998b61067d92612648565b928c612648565b3561171e868a8c612648565b3591612c98565b016116d3565b508882146116c8565b50346102c95760803660031901126102c9576004356001600160401b03811161069a576117659036906004016123cb565b826024356001600160401b03811161069a576117859036906004016123cb565b92906044356001600160401b038111610d45576117a69036906004016123cb565b9290946064356117b46129f5565b818314806118c8575b6117c690612608565b80156118a95760408051336020820152908101919091526117ea8160608101610904565b935b855b83811061180a578660015f5160206137ed5f395f51905f525580f35b6001600160a01b0361182061067d83878d612648565b1661182c828588612648565b3561183883858c612648565b3590823b156118a557611869928a92838b9360405196879586948593637921219560e11b85523033600487016128b4565b03925af190811561189a578891611885575b50506001016117ee565b8161188f91612453565b6109c357865f61187b565b6040513d8a823e3d90fd5b8980fd5b50604051336020820152602081526118c2604082612453565b936117ec565b508185146117bd565b50346102c95761195f6118e3366124e9565b9290916118ee6129f5565b6001600160a01b03168085526003602090815260408087208588528252808720335f908152925290205490939061192690151561285e565b61193181151561281b565b8385526005602090815260408087208588528252808720335f908152925290205442811115611a5657612680565b8284526005602052604084208285526020526040842060018060a01b0333165f5260205260405f205560248360018060a01b0360015416604051928380926390229af760e01b82523060048301525afa8015611063576040918591611a3c575b5001518284526003602090815260408086208487528252808620335f8181529184528282205487895260058552838920878a528552838920828452909452908290205491519095935f5160206137cd5f395f51905f529391928392611a25929084612897565b0390a460015f5160206137ed5f395f51905f525580f35b611a5091503d8087833e61044e8183612453565b5f6119bf565b5042612680565b50346102c9576040611a6e36612513565b939160018060a01b031682526005602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102c95760403660031901126102c957611ac0612427565b336001600160a01b03821603611adc576106e190600435613421565b63334bd91960e11b8252600482fd5b50346102c95760a03660031901126102c9576104cf611b08612411565b611b106123fb565b611b186129f5565b608435916044359060243590612c98565b50346102c95760403660031901126102c9576004356001600160401b03811161069a57611b5a9036906004016123cb565b6024356001600160401b038111610d4557611b799036906004016123cb565b9091611b836129f5565b611b8e828214612608565b845b818110611bac578560015f5160206137ed5f395f51905f525580f35b80611bd2611bc061067d600194868a612648565b611bcb838789612648565b3590613311565b01611b90565b50346102c9576104cf611bea366124e9565b91611bf36129f5565b6131a0565b50346102b25760803660031901126102b257611c12612411565b6024356001600160401b0381116102b257611c319036906004016123cb565b91906044356001600160401b0381116102b257611c529036906004016123cb565b9093611c5c6123fb565b91611c656129f5565b611c70818314612608565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015611d68575f90611ea5575b611cbb9150949194612a2d565b6001600160a01b0390931692335f5b848110611d73575050506040519433602087015260208652611ced604087612453565b833b156102b257611d325f96610b4a610b389989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a489019161298c565b03925af18015611d6857611d55575060015f5160206137ed5f395f51905f525580f35b611d6191505f90612453565b5f5f610b6b565b6040513d5f823e3d90fd5b80611d81600192878a612648565b35611d8d82878d612648565b3590885f52600360205260405f20815f5260205260405f20855f52602052611dbb8260405f205410156128f0565b885f52600560205260405f20815f5260205260405f20855f52602052611de760405f2054421015612933565b885f52600360205260405f20815f5260205260405f20855f5260205260405f20611e1283825461297f565b9055885f52600360205260405f20815f5260205260405f20855f5260205260405f205415611e7e575b604080519283526001600160a01b038716602084015233928a917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd191a401611cca565b885f52600560205260405f20815f5260205260405f20855f526020525f6040812055611e3b565b506020813d602011611ed8575b81611ebf60209383612453565b810103126102b257611ed3611cbb916126a1565b611cae565b3d9150611eb2565b346102b25760403660031901126102b25761001a600435611eff612427565b90611f186106d7825f525f602052600160405f20015490565b613118565b346102b257611f9b611f2e366124e9565b929091611f396129f5565b60018060a01b031692835f52600260205260405f20835f52602052611f6b60018060a01b0360405f20541633146127df565b611f7681151561281b565b835f52600460205260405f20835f5260205260405f20544281115f14611a5657612680565b825f52600460205260405f20825f5260205260405f205560245f60018060a01b0360015416604051928380926390229af760e01b82523060048301525afa8015611d68576040915f9161204c575b50015191805f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad361203660405f20546040519182913397836127c3565b0390a460015f5160206137ed5f395f51905f5255005b61206091503d805f833e61044e8183612453565b84611fe9565b346102b25760203660031901126102b25760206120906004355f525f602052600160405f20015490565b604051908152f35b346102b25760803660031901126102b2576120b1612411565b6120b9612427565b9060443591606435916001600160401b0383116102b25761031c6120e19336906004016124a3565b335f908152600260209081526040808320868452909152902080546001600160a01b0319166001600160a01b039093169283179055909190801561221b576121299042612680565b335f52600460205260405f20825f5260205260405f205481116121fe575b506001546040516390229af760e01b8152306004820152905f90829060249082906001600160a01b03165afa8015611d68576040915f916121e4575b500151335f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad36121cf60405f20546040519182913395836127c3565b0390a4604051630a85bd0160e11b8152602090f35b6121f891503d805f833e61044e8183612453565b84612183565b335f52600460205260405f20825f5260205260405f205582612147565b505f612129565b346102b25760403660031901126102b2576001600160a01b03612243612411565b165f52600460205260405f206024355f52602052602060405f2054604051908152f35b346102b25760803660031901126102b2576004356001600160401b0381116102b2576122969036906004016123cb565b906024356001600160401b0381116102b2576122b69036906004016123cb565b9190926044356001600160401b0381116102b2576122d89036906004016123cb565b94906122e26123fb565b926122eb6129f5565b85811480612355575b6122fd90612608565b5f5b8181106123195760015f5160206137ed5f395f51905f5255005b8061234f86898b61234885612340816123398f60019b8d61067d92612648565b958d612648565b35928a612648565b3591612a79565b016122ff565b508587146122f4565b346102b25760203660031901126102b2576004359063ffffffff60e01b82168092036102b257602091637965db0b60e01b81149081156123a0575b5015158152f35b630271189760e51b8114915081156123ba575b5083612399565b6301ffc9a760e01b149050836123b3565b9181601f840112156102b2578235916001600160401b0383116102b2576020808501948460051b0101116102b257565b606435906001600160a01b03821682036102b257565b600435906001600160a01b03821682036102b257565b602435906001600160a01b03821682036102b257565b604435906001600160a01b03821682036102b257565b90601f801991011681019081106001600160401b0382111761247457604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b03811161247457601f01601f191660200190565b81601f820112156102b2578035906124ba82612488565b926124c86040519485612453565b828452602083830101116102b257815f926020809301838601378301015290565b60609060031901126102b2576004356001600160a01b03811681036102b257906024359060443590565b60609060031901126102b2576004356001600160a01b03811681036102b25790602435906044356001600160a01b03811681036102b25790565b60606003198201126102b2576004356001600160401b0381116102b25781612577916004016123cb565b92909291602435906001600160401b0382116102b257612599916004016123cb565b909160443590565b9080601f830112156102b2578135916001600160401b038311612474578260051b90604051936125d46020840186612453565b84526020808501928201019283116102b257602001905b8282106125f85750505090565b81358152602091820191016125eb565b1561260f57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156126585760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102b25790565b9190820180921161268d57565b634e487b7160e01b5f52601160045260245ffd5b519081151582036102b257565b81601f820112156102b2578051906126c582612488565b926126d36040519485612453565b828452602083830101116102b257815f9260208093018386015e8301015290565b6020818303126102b2578051906001600160401b0382116102b257016080818303126102b25760405191608083018381106001600160401b0382111761247457604052612740826126a1565b8352602082015160ff811681036102b257602084015260408201516001600160401b0381116102b257816127759184016126ae565b604084015260608201516001600160401b0381116102b25761279792016126ae565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9291906127da60209160408652604086019061279f565b930152565b156127e657565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b1561282257565b60405162461bcd60e51b815260206004820152601460248201527304475726174696f6e206d757374206265203e20360641b6044820152606490fd5b1561286557565b60405162461bcd60e51b815260206004820152600a6024820152694e6f2062616c616e636560b01b6044820152606490fd5b9392916127da90604092865260606020870152606086019061279f565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a0608082018190526128ed9291019061279f565b90565b156128f757565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561293a57565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b9190820391821161268d57565b81835290916001600160fb1b0383116102b25760209260051b809284830137010190565b80518210156126585760209160051b010190565b6001600160a01b0391821681529116602082015260408101919091526080606082018190526128ed9291019061279f565b60025f5160206137ed5f395f51905f525414612a1e5760025f5160206137ed5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b15612a3457565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b6001600160a01b03165f818152600360209081526040808320858452825280832033845290915290205492939192909190612ab6908511156128f0565b60015460405163b9209e3360e01b81526001600160a01b038381166004830152909160209183916024918391165afa8015611d68575f90612c5d575b612afc9150612a2d565b5f8281526005602090815260408083208684528252808320338452909152902054612b2990421015612933565b815f52600360205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f20612b5c85825461297f565b90555f828152600360209081526040808320868452825280832033845290915290205415612c37575b6040519033602083015260208252612b9e604083612453565b823b156102b2575f612bc89260405180948192637921219560e11b835289898730600487016128b4565b038183875af1908115611d68577fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd192612c2292612c27575b50604080519687526001600160a01b0390911660208701523395918291820190565b0390a4565b5f612c3191612453565b5f612c00565b5f8281526005602090815260408083208684528252808320338452909152812055612b85565b506020813d602011612c90575b81612c7760209383612453565b810103126102b257612c8b612afc916126a1565b612af2565b3d9150612c6a565b6001600160a01b03165f8181526003602090815260408083208584528252808320338452909152902054929491939092909190612cd7908611156128f0565b60015460405163b9209e3360e01b81526001600160a01b038481166004830152909160209183916024918391165afa8015611d68575f90612e3a575b612d1d9150612a2d565b5f8381526005602090815260408083208784528252808320338452909152902054612d4a90421015612933565b825f52600360205260405f20845f5260205260405f2060018060a01b0333165f5260205260405f20612d7d86825461297f565b90555f838152600360209081526040808320878452825280832033845290915290205415612e14575b8015612df5576040805133602082015290810191909152612dca8160608101610904565b90823b156102b2575f612bc89260405180948192637921219560e11b835289898730600487016128b4565b5060405133602082015260208152612e0e604082612453565b90612b9e565b5f8381526005602090815260408083208784528252808320338452909152812055612da6565b506020813d602011612e6d575b81612e5460209383612453565b810103126102b257612e68612d1d916126a1565b612d13565b3d9150612e47565b51906001600160a01b03821682036102b257565b6001600160a01b0381168015939291841561308c5750815b60015460405163b9209e3360e01b81526001600160a01b0394851660048201525f9692949092911690602083602481855afa928315611d68575f93613050575b50159283612fdf575b5050835160208103612f4e57508115612f46575b5015612f2b57506020818051810103126102b2576001600160a01b0390612f2790602001612e75565b1691565b929150602081519181808201938492010103126102b2575190565b90505f612efe565b92959392604014612f5e57505050565b919350809294509115612fd7575b5015612f9e576040818051810103126102b2576040612f8d60208301612e75565b9101516001600160a01b0390911691565b60405162461bcd60e51b8152602060048201526011602482015270556e617574686f72697a6564206461746160781b6044820152606490fd5b90505f612f6c565b60209192935060246040518094819363b9209e3360e01b835260048301525afa908115611d68575f91613016575b50905f80612eea565b90506020813d602011613048575b8161303160209383612453565b810103126102b257613042906126a1565b5f61300d565b3d9150613024565b9092506020813d602011613084575b8161306c60209383612453565b810103126102b25761307d906126a1565b915f612ee1565b3d915061305f565b612ea1565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16156130c957565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156131025750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff1661319a575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b03165f81815260036020908152604080832085845282528083203384529091529020546131d6908411156128f0565b5f818152600560209081526040808320858452825280832033845290915290205461320390421015612933565b805f52600360205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f2061323684825461297f565b90555f8181526003602090815260408083208584528252808320338452909152902054156132eb575b803b156102b257604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af18015611d68576132db575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f6132e591612453565b5f6132ac565b5f818152600560209081526040808320858452825280832033845290915281205561325f565b6001600160a01b039081165f818152600260209081526040808320868452909152812054909392613344911633146127df565b805f52600460205260405f20825f5260205261336660405f2054421015612933565b805f52600260205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055805f52600460205260405f20825f526020525f6040812055803b156102b257604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af18015611d685761340c575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b6134199193505f90612453565b5f915f6133e4565b5f818152602081815260408083206001600160a01b038616845290915290205460ff161561319a575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b60018060a01b0316805f52600260205260405f20825f526020526134d260018060a01b0360405f20541633146127df565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052959260209183916024918391165afa8015611d68575f90613611575b61351a9150612a2d565b815f52600460205260405f20835f5260205261353c60405f2054421015612933565b815f52600260205260405f20835f5260205260405f206bffffffffffffffffffffffff60a01b8154169055815f52600460205260405f20835f526020525f60408120556040519033602083015260208252613598604083612453565b823b156102b257835f916135c16040519485938493635c46a7ef60e11b855230600486016129c4565b038183865af18015611d6857613601575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f61360b91612453565b5f6135d2565b506020813d602011613644575b8161362b60209383612453565b810103126102b25761363f61351a916126a1565b613510565b3d915061361e565b91909160018060a01b031690815f52600260205260405f20835f5260205261368160018060a01b0360405f20541633146127df565b60015460405163b9209e3360e01b81526001600160a01b0383811660048301819052969260209183916024918391165afa8015611d68575f90613791575b6136c99150612a2d565b825f52600460205260405f20845f526020526136eb60405f2054421015612933565b5f838152600260209081526040808320878452825280832080546001600160a01b03191690558583526004825280832087845290915281205580156137725760408051336020820152908101919091526137488160608101610904565b90823b156102b257835f916135c16040519485938493635c46a7ef60e11b855230600486016129c4565b506040513360208201526020815261378b604082612453565b90613598565b506020813d6020116137c4575b816137ab60209383612453565b810103126102b2576137bf6136c9916126a1565b6136bf565b3d915061379e56fe2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa359b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220e939aef3d6d2a566dee88049701eba50dcb5377a10a6899fd3b3a5e7145d73d264736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034609157601f6104dc38819003918201601f19168301916001600160401b03831184841017609557808492604094855283398101031260915780516001600160a01b0381169190829003609157602001516001600160a01b038116919082900360915760018060a01b03195f5416175f5560018060a01b0319600154161760015560405161043290816100aa8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea2646970667358221220482bb391ceefc654dc35c693a411ecea536b67fe5fd87980445f4880eceb907764736f6c634300081c0033"
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
              "name": "privateBuyer",
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
      "bytecode": "0x60a03461010357601f61411738819003918201601f19168301916001600160401b038311848410176101075780849260409485528339810103126101035780610056602061004f6100a49461011b565b920161011b565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600580546001600160a01b03191691831691909117905561012f565b50604051613f3e90816101b9823960805181818161083f015281816108de0152818161141b0152818161178c01528181612342015281816125c8015281816133620152818161364001528181613daa01528181613dd40152613e120152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820361010357565b6001600160a01b0381165f9081525f5160206140f75f395f51905f52602052604090205460ff166101b3576001600160a01b03165f8181525f5160206140f75f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a714611c0d57508063058a56ac14611acb5780630ad794ea14611a195780631205fd001461195d578063161878e9146119335780631b8e41461461182c578063248a9ca3146117f95780632f2ff15d146117bb5780633013ce2914611777578063326d0da01461165857806335659fb81461163b57806336568abe146115f7578063373ce23b146115205780633bbb2806146114f95780633f4ba83a14611495578063469048401461146d57806355363724146113155780635c975abb146112f457806361360aae146111665780636bd3a64b146110f557806370cdec3d14611093578063787dce3d146110005780637889ab5014610f6e5780637c3ae2be14610f515780638456cb5914610efa57806391d1485414610eb15780639ac9b2a514610dfb5780639fc80c7214610d0e578063a217fddf14610cf4578063a7c546b314610c7e578063b2ddee0614610bcd578063b3b8d36114610a5d578063c7fff71914610774578063cddc1bc11461074d578063d3f494cc146106e2578063d547741f1461069f578063d55a818514610675578063d898aaf21461064b578063d996475714610552578063e086e5ec146104a0578063e74b981b14610401578063ef71f541146103b5578063f3b5926f14610354578063f4f3b200146102b25763f81b9d5914610217575f61000f565b346102ae5761022536611ee8565b9291946102306120e9565b6102386121a2565b858514806102a5575b61024a90611fd4565b5f5b8581106102665760015f516020613ee95f395f51905f5255005b8061029f61027f61027a6001948a87612014565b612038565b61028a838b89612014565b3561029961027a858b8a612014565b91613511565b0161024c565b50858414610241565b5f80fd5b346102ae5760203660031901126102ae576102cb611c60565b6102d3612cde565b6040516370a0823160e01b8152306004820152906001600160a01b0316602082602481845afa908115610349575f91610313575b61001a92503390612121565b90506020823d602011610341575b8161032e60209383611fb3565b810103126102ae5761001a915190610307565b3d9150610321565b6040513d5f823e3d90fd5b346102ae5760803660031901126102ae5761036d611c60565b604435906001600160a01b03821682036102ae576103a29161038d6120e9565b6103956121a2565b606435916024359061321c565b60015f516020613ee95f395f51905f5255005b346102ae5760203660031901126102ae577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a335060206004356103f4612cde565b80600655604051908152a1005b346102ae5760203660031901126102ae5761041a611c60565b610422612cde565b6001600160a01b0316801561046957600580546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc25f80a2005b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346102ae575f3660031901126102ae576104b8612cde565b5f80808047335af13d1561054d573d6001600160401b03811161053957604051906104ed601f8201601f191660200183611fb3565b81525f60203d92013e5b156104fe57005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b634e487b7160e01b5f52604160045260245ffd5b6104f7565b346102ae577f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd61058136611eba565b939061058e9392936121a2565b6001600160a01b0383165f818152600360209081526040808320888452825280832033845290915290819020905191946106219161060a906105cf85611f98565b80546001600160a01b03908116865260018201546020870181905260028301546040880152600390920154166060909501948552151561204c565b82516001600160a01b031690889085908990612a7d565b516040805196875260208701929092526001600160a01b031690850152339380606081015b0390a4005b346102ae576103a261065c36611eba565b926106689291926120e9565b6106706121a2565b6122a9565b346102ae576103a261068636611e02565b936106929391936120e9565b61069a6121a2565b612e98565b346102ae5760403660031901126102ae5761001a6004356106be611c76565b906106dd6106d8825f526001602052600160405f20015490565b612d2d565b612df3565b346102ae576106f036611e80565b9160018060a01b03165f52600260205260405f20905f5260205260405f209060018060a01b03165f52602052608060405f208054906001810154906003600282015491015491604051938452602084015260408301526060820152f35b346102ae576103a261075e36611e80565b916107676120e9565b61076f6121a2565b613511565b346102ae5761078236611eba565b9261078b6120e9565b6107936121a2565b6001600160a01b03165f818152600260209081526040808320868452825280832033845290915290208054919291908115610a215760065486106109dc578515610998578215610949576040516301ffc9a760e01b81526380ac58cd60e01b600482015290602082602481885afa928315610349575f93600393859161091a575b50610909575b610824600161226c565b8781811185146108be576108639161083b91612e77565b30337f00000000000000000000000000000000000000000000000000000000000000006137d1565b868155836001820155426002820155015560405193845260208401525f60408401527f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be2260603394a460015f516020613ee95f395f51905f5255005b908082106108ce575b5050610863565b610902916108db91612e77565b337f0000000000000000000000000000000000000000000000000000000000000000612121565b86886108c7565b61091560018614612220565b61081a565b61093c915060203d602011610942575b6109348183611fb3565b810190612208565b89610814565b503d61092a565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601760248201527f4e65772070726963652062656c6f77206d696e696d756d0000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b346102ae57610a6b36611d50565b9597909394919692610a7b6121a2565b88821480610bc4575b80610bbb575b80610bb2575b610a9990611fd4565b5f5b828110610aa457005b6001600160a01b03610ab7828a89612014565b610ac090612038565b161515610acc90612091565b610ad781848d612014565b610ae090612038565b610aeb828c88612014565b35610af7838a88612014565b35610b03848d87612014565b3590610b10858d8c612014565b610b1990612038565b92610b2394612a7d565b610b2e81848d612014565b610b3790612038565b610b42828c88612014565b35610b4e838c86612014565b35610b5a848b89612014565b3590610b67858d8c612014565b610b7090612038565b6040805192835260208301939093526001600160a01b03908116928201929092523393909116905f516020613ec95f395f51905f5290606090a4600101610a9b565b50878714610a90565b50878614610a8a565b50858914610a84565b346102ae5760403660031901126102ae57610be6611c60565b6001600160a01b03165f81815260036020908152604080832060243580855290835281842033855290925290912060010154610c2390151561204c565b5f828152600360208181526040808420858552825280842033855290915282208281556001810183905560028101839055015533917fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4005b346102ae575f516020613ec95f395f51905f52610c9a36611f56565b9092939491610ca76121a2565b610cbb6001600160a01b0383161515612091565b610cc8828583888a612a7d565b6040805194855260208501919091526001600160a01b0391821690840152339416918060608101610646565b346102ae575f3660031901126102ae5760206040515f8152f35b346102ae577f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd610d3d36611f56565b909491610d4b9493946121a2565b610dd18287838860018060a01b03891698895f52600360205260405f20825f5260205260405f2060018060a01b0333165f52602052610dcc60405f20604051610d9381611f98565b81546001600160a01b0390811682526001830154602083018190526002840154604084015260039093015416606090910152151561204c565b612a7d565b6040805196875260208701919091526001600160a01b039091169085015233938060608101610646565b346102ae57610e0936611cbc565b959493909291610e176120e9565b610e1f6121a2565b81861480610ea8575b80610e9f575b610e3790611fd4565b5f5b868110610e535760015f516020613ee95f395f51905f5255005b80610e99878a87610e92858f61027a8f998b610e84828f610e7e60019f8361027a91610e8b9a612014565b9b612014565b3596612014565b938c612014565b359261321c565b01610e39565b50808714610e2e565b50808214610e28565b346102ae5760403660031901126102ae57610eca611c76565b6004355f52600160205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346102ae575f3660031901126102ae57610f12612cde565b610f1a6121a2565b600160ff195f5416175f557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b346102ae575f3660031901126102ae576020600654604051908152f35b346102ae57610f7c36611ee8565b929194610f876120e9565b610f8f6121a2565b85851480610ff7575b610fa190611fd4565b5f5b858110610fbd5760015f516020613ee95f395f51905f5255005b80610ff1610fd161027a6001948a87612014565b610fdc838b89612014565b35610feb61027a858b8a612014565b9161303f565b01610fa3565b50858414610f98565b346102ae5760203660031901126102ae5760043561101c612cde565b6103e88111611056576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600455604051908152a1005b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b346102ae575f516020613ec95f395f51905f526106466110b236611eba565b92949193906110bf6121a2565b6110cb84828789612752565b6040805194855260208501919091525f9084015233946001600160a01b0316929081906060820190565b346102ae5761110336611e80565b6001600160a01b039283165f90815260036020818152604080842095845294815284832093861683529283529083902080546001820154600283015492909301548551918716825293810192909252928101929092529091166060820152608090f35b346102ae5761117436611cbc565b94939596906111849392936121a2565b868814806112eb575b806112e2575b61119f90989598611fd4565b33945f5b8181106111ac57005b85898b836111bb81878a612014565b6111c490612038565b926111ce92612014565b3590600160a01b60019003811690815f52600360205260405f20835f5260205260405f208b5f5260205282858d8b8260405f20986040519961120f8b611f98565b80546001600160a01b039081168c52600182015460208d01819052600283015460408e0152600390920154166060909b019a8b5261124e90151561204c565b61125792612014565b3591611263918b612014565b3590600160a01b600190038751169261127b94612a7d565b611286848c88612014565b35611292858b8b612014565b935160408051928352943560208301526001600160a01b03169381019390935233927f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd90606090a46001016111a3565b50838614611193565b5083871461118d565b346102ae575f3660031901126102ae57602060ff5f54166040519015158152f35b346102ae5761132336611e34565b929061132d6120e9565b611338848414611fd4565b33915f5b8481106113565760015f516020613ee95f395f51905f5255005b8061136761027a6001938886612014565b611372828987612014565b3590838060a01b031690815f52600260205260405f20815f5260205260405f20875f5260205260405f20604051906113a982611f98565b600381549182845287810154602085015260028101546040850152015460608301526113d9575b5050500161133c565b61143f90835f52600260205260405f20835f5260205260405f20895f5260205261141760405f2060035f918281558260018201558260028201550155565b51337f0000000000000000000000000000000000000000000000000000000000000000612121565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a48780806113d0565b346102ae575f3660031901126102ae576005546040516001600160a01b039091168152602090f35b346102ae575f3660031901126102ae576114ad612cde565b5f5460ff8116156114ea5760ff19165f557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b638dfc202b60e01b5f5260045ffd5b346102ae576103a261150a36611e80565b916115136120e9565b61151b6121a2565b61303f565b346102ae5761152e36611d50565b61153f9892979691959394986120e9565b6115476121a2565b818314806115ee575b806115e5575b806115dc575b61156590611fd4565b5f5b8381106115815760015f516020613ee95f395f51905f5255005b806115d68989898f8f8f97896115c8828f959b8f8f6115cf9760019f8580936115b461027a836115c1986115ba96612014565b9f612014565b3599612014565b3597612014565b3595612014565b3593612e98565b01611567565b5087811461155c565b50878914611556565b50888214611550565b346102ae5760403660031901126102ae57611610611c76565b336001600160a01b0382160361162c5761001a90600435612df3565b63334bd91960e11b5f5260045ffd5b346102ae575f3660031901126102ae576020600454604051908152f35b346102ae5761166636611e34565b6116738184959414611fd4565b335f5b85811061167f57005b6001906001600160a01b0361169861027a838a8a612014565b165f52600360205260405f206116af828688612014565b355f5260205260405f20835f526020528160405f2001546116d1575b01611676565b818060a01b036116e561027a838a8a612014565b165f52600360205260405f206116fc828688612014565b355f5260205260405f20835f5260205261172a60405f2060035f918281558260018201558260028201550155565b61173861027a828989612014565b3390611745838789612014565b3590848060a01b03167fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a46116cb565b346102ae575f3660031901126102ae576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346102ae5760403660031901126102ae5761001a6004356117da611c76565b906117f46106d8825f526001602052600160405f20015490565b612d67565b346102ae5760203660031901126102ae5760206118246004355f526001602052600160405f20015490565b604051908152f35b346102ae5761183a36611cbc565b611849979692979491946121a2565b8183148061192a575b80611921575b61186190611fd4565b5f5b83811061186c57005b8087878b5f516020613ec95f395f51905f526119186118ef868f818b8f8f9c8f6118da60019f838f918f998f61027a946118e79c6118e09a6118ce878e6118c7826118d5988f82610e8491610e7e8f8f61027a918591612014565b3594612014565b3592612752565b612014565b9c612014565b3598612014565b35948d612014565b3560405191829133978a8060a01b031695836040905f9294936060820195825260208201520152565b0390a401611863565b50878114611858565b50878214611852565b346102ae576103a261194436611e02565b936119509391936120e9565b6119586121a2565b612503565b346102ae5761196b36611d50565b61197c9892979691959394986120e9565b6119846121a2565b81831480611a10575b80611a07575b806119fe575b6119a290611fd4565b5f5b8381106119be5760015f516020613ee95f395f51905f5255005b806119f88989898f8f8f97896115c8828f959b8f8f6119f19760019f8580936115b461027a836115c1986115ba96612014565b3593612503565b016119a4565b50878114611999565b50878914611993565b5088821461198d565b346102ae57611a2736611cbc565b9596611a38959495939291936120e9565b611a406121a2565b85881480611ac2575b80611ab9575b611a5890611fd4565b5f5b888110611a745760015f516020613ee95f395f51905f5255005b80611ab3611a8861027a6001948d87612014565b8a611a94848c8c612014565b35611aac85611aa4818b8d612014565b35938c612014565b35926122a9565b01611a5a565b50818714611a4f565b50818614611a49565b346102ae5760403660031901126102ae57611ae4611c60565b60243590611af06120e9565b6001600160a01b03165f818152600260209081526040808320858452825280832033845290915290819020905191929190611b2a82611f98565b600381549182845260018101546020850152600281015460408501520154606083015215611bc8575f838152600260208181526040808420868552825280842033855290915282208281556001810183905590810182905560030155611b8f90611417565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020613ee95f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b346102ae5760203660031901126102ae576004359063ffffffff60e01b82168092036102ae57602091637965db0b60e01b8114908115611c4f575b5015158152f35b6301ffc9a760e01b14905083611c48565b600435906001600160a01b03821682036102ae57565b602435906001600160a01b03821682036102ae57565b9181601f840112156102ae578235916001600160401b0383116102ae576020808501948460051b0101116102ae57565b60806003198201126102ae576004356001600160401b0381116102ae5781611ce691600401611c8c565b929092916024356001600160401b0381116102ae5781611d0891600401611c8c565b929092916044356001600160401b0381116102ae5781611d2a91600401611c8c565b92909291606435906001600160401b0382116102ae57611d4c91600401611c8c565b9091565b60a06003198201126102ae576004356001600160401b0381116102ae5781611d7a91600401611c8c565b929092916024356001600160401b0381116102ae5781611d9c91600401611c8c565b929092916044356001600160401b0381116102ae5781611dbe91600401611c8c565b929092916064356001600160401b0381116102ae5781611de091600401611c8c565b92909291608435906001600160401b0382116102ae57611d4c91600401611c8c565b60a09060031901126102ae576004356001600160a01b03811681036102ae579060243590604435906064359060843590565b60406003198201126102ae576004356001600160401b0381116102ae5781611e5e91600401611c8c565b92909291602435906001600160401b0382116102ae57611d4c91600401611c8c565b60609060031901126102ae576004356001600160a01b03811681036102ae5790602435906044356001600160a01b03811681036102ae5790565b60809060031901126102ae576004356001600160a01b03811681036102ae5790602435906044359060643590565b60606003198201126102ae576004356001600160401b0381116102ae5781611f1291600401611c8c565b929092916024356001600160401b0381116102ae5781611f3491600401611c8c565b92909291604435906001600160401b0382116102ae57611d4c91600401611c8c565b60a09060031901126102ae576004356001600160a01b03811681036102ae57906024359060443590606435906084356001600160a01b03811681036102ae5790565b608081019081106001600160401b0382111761053957604052565b90601f801991011681019081106001600160401b0382111761053957604052565b15611fdb57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156120245760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102ae5790565b1561205357565b60405162461bcd60e51b8152602060048201526016602482015275131a5cdd1a5b99c8191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b1561209857565b60405162461bcd60e51b8152602060048201526024808201527f507269766174652062757965722063616e6e6f74206265207a65726f206164646044820152637265737360e01b6064820152608490fd5b60025f516020613ee95f395f51905f5254146121125760025f516020613ee95f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615612181575b604052156121615750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661219957823b15153d15161690612156565b503d5f823e3d90fd5b60ff5f54166121ad57565b63d93c066560e01b5f5260045ffd5b156121c357565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b908160209103126102ae575180151581036102ae5790565b1561222757565b60405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606490fd5b1561227357565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642065787069727960901b6044820152606490fd5b91909160065484106124be57831561246e576122c68215156121bc565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169190602081602481865afa908115610349575f9161244f575b5061243e575b612315600161226c565b5f8281526002602090815260408083208684528252808320338452909152902054612402576123668430337f00000000000000000000000000000000000000000000000000000000000000006137d1565b60405161237281611f98565b8481526003602082018381526040830142815260608401915f8352865f52600260205260405f20885f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015560405193845260208401525f60408401527f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab60603394a4565b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b61244a60018214612220565b61230b565b612468915060203d602011610942576109348183611fb3565b5f612305565b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4f666665722070726963652062656c6f77206d696e696d756d000000000000006044820152606490fd5b939190929360065485106124be57841561246e576125228215156121bc565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169290602081602481875afa908115610349575f91612690575b5061267f575b80158015612676575b6125799061226c565b5f8381526002602090815260408083208784528252808320338452909152902054612402577f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab916125ec8630337f00000000000000000000000000000000000000000000000000000000000000006137d1565b6040516125f881611f98565b868152600360208201838152604083014281526060840191868352885f52600260205260405f208a5f5260205260405f2060018060a01b0333165f5260205260405f2094518555516001850155516002840155519101556126716040519283923398846040919493926060820195825260208201520152565b0390a4565b50428111612570565b61268b60018314612220565b612567565b6126a9915060203d602011610942576109348183611fb3565b5f612561565b156126b657565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b51906001600160a01b03821682036102ae57565b1561270d57565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b929190928215612a38576127678215156121bc565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169190602081602481865afa908115610349575f91612a19575b501561290c57600181036128bd576040516331a9108f60e11b81526004810185905292602084602481865afa938415610349575f9461287d575b506003936127f8906001600160a01b03163314612706565b6040519461280586611f98565b33808752602080880193845260408089019586525f60608a018181529781528883528181209481529382528084209284529190529020945185546001600160a01b039182166001600160a01b031991821617875591516001870155915160028601559151939092018054939092169216919091179055565b93506020843d6020116128b5575b8161289860209383611fb3565b810103126102ae576127f86128ae6003956126f2565b94506127e0565b3d915061288b565b60405162461bcd60e51b815260206004820152602160248201527f455243373231206c697374696e67206d757374206861766520616d6f756e74206044820152603160f81b6064820152608490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481865afa908115610349575f916129fa575b50156129be57604051627eeac760e11b81523360048201526024810185905292602084604481865afa938415610349575f94612988575b506129838260039510156126af565b6127f8565b93506020843d6020116129b6575b816129a360209383611fb3565b810103126102ae57925192612983612974565b3d9150612996565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b612a13915060203d602011610942576109348183611fb3565b5f61293d565b612a32915060203d602011610942576109348183611fb3565b5f6127a6565b60405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e2030000000006044820152606490fd5b93919092938415612a3857612a938215156121bc565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169490602081602481895afa908115610349575f91612cbf575b5015612bee57600182036128bd576040516331a9108f60e11b81526004810185905293602085602481895afa948515610349575f95612bae575b50600394612b24906001600160a01b03163314612706565b60405195612b3187611f98565b3380885260208089019485526040808a019687526001600160a01b0397881660608b019081525f9485528983528185209585529482528084209284529190529020955186546001600160a01b0319908116918616919091178755915160018701559151600286015590519390920180549092169216919091179055565b94506020853d602011612be6575b81612bc960209383611fb3565b810103126102ae57612b24612bdf6003966126f2565b9550612b0c565b3d9150612bbc565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481895afa908115610349575f91612ca0575b50156129be57604051627eeac760e11b81523360048201526024810185905293602085604481895afa948515610349575f95612c6a575b50612c658360039610156126af565b612b24565b94506020853d602011612c98575b81612c8560209383611fb3565b810103126102ae57935193612c65612c56565b3d9150612c78565b612cb9915060203d602011610942576109348183611fb3565b5f612c1f565b612cd8915060203d602011610942576109348183611fb3565b5f612ad2565b335f9081527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49602052604090205460ff1615612d1657565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260016020908152604080832033845290915290205460ff1615612d515750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f8181526001602090815260408083206001600160a01b038616845290915290205460ff16612ded575f8181526001602081815260408084206001600160a01b0396909616808552959091528220805460ff19169091179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526001602090815260408083206001600160a01b038616845290915290205460ff1615612ded575f8181526001602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b91908203918211612e8457565b634e487b7160e01b5f52601160045260245ffd5b6001600160a01b03165f818152600260209081526040808320858452825280832033845290915290208054949592949193919291908315610a215760065487106109dc578615610998578115610949576040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481895afa918215610349577f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be229585936003935f91612fdc575b50612fcb575b83158015612fc2575b612f589061226c565b8981811115612f9e57612f6e9161083b91612e77565b88815560018101849055426002820155015560408051968752602087019190915285015233938060608101612671565b90808210612fae575b5050612f6e565b612fbb916108db91612e77565b885f612fa7565b50428411612f4f565b612fd760018614612220565b612f46565b612ff5915060203d602011610942576109348183611fb3565b5f612f40565b1561300257565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b6001600160a01b038181165f8181526002602090815260408083208784528252808320948816835293905282902091519194909261307c83611f98565b85548084526130ae600360018901549860208701998a5260028101546040880152015491606086019283521515612ffb565b518015908115613211575b50156131dc5761313c61314792855f52600260205260405f20875f5260205260405f2060018060a01b0382165f5260205261310860405f2060035f918281558260018201558260028201550155565b5f8681526003602090815260408083208a8452825280832033845290915290206001015461317d575b875190338885613894565b825190853391613d0c565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a4565b5f8681526003602081815260408084208b855282528084203385529091528220828155600181018390556002810183905501553387877fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4613131565b60405162461bcd60e51b815260206004820152600d60248201526c13d999995c88195e1c1a5c9959609a1b6044820152606490fd5b90504211155f6130b9565b9290919260018060a01b03811691825f52600360205260405f20845f5260205260405f2060018060a01b0386165f5260205260405f209160405161325f81611f98565b83546001600160a01b03908116825260018501546020830181815260028701546040850190815260039097015490921660609093019283529093906132a590151561204c565b8351036134ba57516001600160a01b031680159081156134b0575b501561344c575f84815260036020818152604080842089855282528084206001600160a01b038b168552825280842084815560018101859055600280820186905593018490558784529181528183208884528152818320338452905290819020905161339e929161333082611f98565b60038154918284526001810154602085015260028101546040850152015460608301526133e2575b50613386835130337f00000000000000000000000000000000000000000000000000000000000000006137d1565b613394845133898985613894565b8686845192613d0c565b519051906040519460018060a01b03168552602085015260408401527f110d72c9f92ff669bf5211e868578c38dff8ce680bdf8b69ad34a1c5c106829860603394a4565b5f8681526002602081815260408084208b855282528084203385529091528220828155600181018390559081018290556003015561341f90611417565b3386867f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a45f613358565b60405162461bcd60e51b815260206004820152603660248201527f50726976617465206c697374696e673a206f6e6c7920746865207370656369666044820152756965642062757965722063616e20707572636861736560501b6064820152608490fd5b905033145f6132c0565b60405162461bcd60e51b815260206004820152602960248201527f5072696365206d69736d617463683a206c697374696e672070726963652068616044820152681cc818da185b99d95960ba1b6064820152608490fd5b60018060a01b0316805f52600260205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f206040519061354e82611f98565b61357d815480845260036001840154936020860194855260028101546040870152015460608501521515612ffb565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa908115610349575f916137b2575b50156136df57506040516331a9108f60e11b81526004810184905290602082602481865afa918215610349575f9261369e575b50613664916135fa906001600160a01b03163314612706565b825f52600260205260405f20845f5260205260405f2060018060a01b0386165f5260205261363c60405f2060035f918281558260018201558260028201550155565b51847f0000000000000000000000000000000000000000000000000000000000000000612121565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a4565b91506020823d6020116136d7575b816136b960209383611fb3565b810103126102ae576135fa6136d0613664936126f2565b92506135e1565b3d91506136ac565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa908115610349575f91613793575b50156129be57604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610349575f9161375f575b5061375a90613664935111156126af565b6135fa565b90506020813d60201161378b575b8161377a60209383611fb3565b810103126102ae5751613664613749565b3d915061376d565b6137ac915060203d602011610942576109348183611fb3565b5f613713565b6137cb915060203d602011610942576109348183611fb3565b5f6135ae565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f5114821615613822575b6040525f606052156121615750565b90600181151661219957823b15153d15161690613813565b1561384157565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201525f95929493926001600160a01b039092169190602081602481865afa908115610349575f91613ced575b5015613b4857600103613b04576040516331a9108f60e11b81526004810185905291602083602481855afa928315613a59578693613ac8575b506001600160a01b038181169316839003613a835760405163e985e9c560e01b81526001600160a01b03919091166004820152306024820152602081604481855afa908115613a59578691613a64575b5080156139dd575b6139729061383a565b803b156139d957849291836064926040519687958694632142170760e11b8652600486015260018060a01b0316602485015260448401525af180156139ce576139b9575050565b6139c4828092611fb3565b6139cb5750565b80fd5b6040513d84823e3d90fd5b8480fd5b5060405163020604bf60e21b815260048101859052602081602481855afa8015613a59578690613a1a575b6001600160a01b031630149050613969565b506020813d602011613a51575b81613a3460209383611fb3565b81010312613a4d57613a48613972916126f2565b613a08565b8580fd5b3d9150613a27565b6040513d88823e3d90fd5b613a7d915060203d602011610942576109348183611fb3565b5f613961565b60405162461bcd60e51b815260206004820152601d60248201527f46726f6d206164647265737320646f6573206e6f74206f776e204e46540000006044820152606490fd5b9092506020813d602011613afc575b81613ae460209383611fb3565b81010312613a4d57613af5906126f2565b915f613911565b3d9150613ad7565b606460405162461bcd60e51b815260206004820152602060248201527f455243373231207472616e7366657220616d6f756e74206d75737420626520316044820152fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b600482015294955093909190602081602481865afa908115610349575f91613cce575b50156129be57604051627eeac760e11b81526001600160a01b038216600482015260248101869052602081604481865afa80156103495785905f90613c98575b613bcc925010156126af565b60405163e985e9c560e01b81526001600160a01b0382166004820152306024820152602081604481865afa801561034957613c0e915f91613c79575b5061383a565b813b156102ae575f60c49281956040519788968795637921219560e11b875260018060a01b0316600487015260018060a01b031660248601526044850152606484015260a060848401528160a48401525af1801561034957613c6d5750565b5f613c7791611fb3565b565b613c92915060203d602011610942576109348183611fb3565b5f613c08565b50506020813d602011613cc6575b81613cb360209383611fb3565b810103126102ae5784613bcc9151613bc0565b3d9150613ca6565b613ce7915060203d602011610942576109348183611fb3565b5f613b80565b613d06915060203d602011610942576109348183611fb3565b5f6138d8565b9190600454808502908582041485151715612e84576127109004925f9060405f93604482518094819363152a902d60e11b835260048301528a602483015260018060a01b03165afa805f925f92613e86575b50613e6c575b5050808401808511612e845785613c7796869211613e50575b613d8b613d90928492612e77565b612e77565b9380151580613e3c575b613dff575b5080613dce575b50507f0000000000000000000000000000000000000000000000000000000000000000612121565b613df8917f0000000000000000000000000000000000000000000000000000000000000000612121565b5f80613da6565b600554613e3691906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000612121565b5f613d9f565b506005546001600160a01b03161515613d9a565b819250613d8b613e63613d909383612e77565b93925050613d7d565b6001600160a01b03821615613d6457915091505f80613d64565b925090506040823d604011613ec0575b81613ea360409383611fb3565b810103126102ae576020613eb6836126f2565b920151905f613d5e565b3d9150613e9656fe1da60d1ebc86294425cc61f1c7dc4439f6cb8a970869c2764900c57f5828a2e19b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212204d5d3b0ca7c4780dd6f029a8104f4f2098a8b67beef298f377ff353aaf5807f964736f6c634300081c0033a6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220d919863a3addfc8fea0fbda54411c694315869e996167bdff8bd0d9902dedc6364736f6c634300081c0033"
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