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
          "inputs": [
            {
              "internalType": "string[]",
              "name": "messages",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "medias",
              "type": "string[]"
            },
            {
              "internalType": "bool[]",
              "name": "onChains",
              "type": "bool[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "batchDonate",
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
              "internalType": "string[]",
              "name": "messages",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "medias",
              "type": "string[]"
            },
            {
              "internalType": "bool[]",
              "name": "onChains",
              "type": "bool[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "batchDonateTo",
          "outputs": [],
          "stateMutability": "payable",
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
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "batchTopUp",
          "outputs": [],
          "stateMutability": "payable",
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
      "bytecode": "0x6080604052346103c257615c9c6080813803918261001c816103c6565b9384928339810103126103c257610032816103eb565b9061003f602082016103eb565b6100506060604084015193016103eb565b9261005b60406103c6565b6007815266109c9859d3919560ca1b602082015261007960406103c6565b600781526610949051d3919560ca1b6020820152815190916001600160401b0382116102c9575f5490600182811c921680156103b8575b60208310146102ab5781601f84931161034b575b50602090601f83116001146102e8575f926102dd575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116102c957600154600181811c911680156102bf575b60208210146102ab57601f8111610248575b50602090601f83116001146101df5761017d9392915f91836101d4575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556103ff565b50600b80546001600160a01b03199081166001600160a01b03938416908117909255600c80548216909217909155600d92909255600f8054909216921691909117905560646009556040516157f390816104898239f35b015190505f8061013f565b90601f1983169160015f52815f20925f5b818110610230575091600193918561017d97969410610218575b505050811b01600155610154565b01515f1960f88460031b161c191690555f808061020a565b929360206001819287860151815501950193016101f0565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c810191602085106102a1575b601f0160051c01905b8181106102965750610122565b5f8155600101610289565b9091508190610280565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610110565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100da565b5f8080528281209350601f198516905b818110610333575090846001959493921061031b575b505050811b015f556100ee565b01515f1960f88460031b161c191690555f808061030e565b929360206001819287860151815501950193016102f8565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c810191602085106103ae575b90601f859493920160051c01905b8181106103a057506100c4565b5f8155849350600101610393565b9091508190610385565b91607f16916100b0565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102c957604052565b51906001600160a01b03821682036103c257565b6001600160a01b0381165f9081525f516020615c7c5f395f51905f52602052604090205460ff16610483576001600160a01b03165f8181525f516020615c7c5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe60808060405260043610156104e2575b50361561001a575f80fd5b610022613328565b5f60408051906100328183612df0565b600f82526e2234b932b1ba103237b730ba34b7b760891b602083015260209080519061005e8383612df0565b5f8252600d5434106104a6576008549160095483101561046d5761008183613713565b60085561008d34615128565b90825161009981612dd5565b338152858101838152428583019081525f60608401818152608085018b815289835260108b5291889020945185546001600160a01b0319166001600160a01b039190911617855592516001850155905160028401559051909160048210156104595761010a60049260038301613224565b0190518051906001600160401b0382116103e2576101328261012c8554612d9d565b856131d5565b8790601f83116001146103f65761016092915f9183610374575b50508160011b915f199060031b1c19161790565b90555b80516102ff575b5081516101778582612df0565b5f815233156102ec576001600160a01b036101928533613360565b166102d9576101a390843333613b7b565b600e546001600160a01b0316801515806102d0575b610229575b506101f08680805f51602061577e5f395f51905f5298993460018060a01b03600b54165af16101ea61323c565b5061352f565b815193348552840152820152608060608201528061021333946080830190612ca0565b0390a260015f51602061575e5f395f51905f5255005b662386f26fc10000820290828204662386f26fc1000014831517156102bc57803b156102b85783516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af19687156102ae575f51602061577e5f395f51905f52969761029a575b9695506101bd565b505f6102a591612df0565b6101f05f610292565b83513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52601160045260245ffd5b508115156101b8565b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b835f5260068552825f20908051906001600160401b0382116103e2576103298261012c8554612d9d565b8690601f831160011461037f5761035692915f91836103745750508160011b915f199060031b1c19161790565b90555b5f51602061579e5f395f51905f52848351858152a15f61016a565b015190505f8061014c565b90601f19831691845f52885f20925f5b8a8282106103cc5750509084600195949392106103b4575b505050811b019055610359565b01515f1960f88460031b161c191690555f80806103a7565b600185968293968601518155019501930161038f565b634e487b7160e01b5f52604160045260245ffd5b90601f19831691845f52895f20925f5b8b82821061044357505090846001959493921061042b575b505050811b019055610163565b01515f1960f88460031b161c191690555f808061041e565b6001859682939686015181550195019301610406565b634e487b7160e01b5f52602160045260245ffd5b815162461bcd60e51b815260048101859052601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b5162461bcd60e51b8152600481018390526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5f905f3560e01c90816301ffc9a714612bcf5750806302d95a5214612ba757806306fdde0314612ae0578063081812fc14612aa4578063095ea7b3146129ba5780630f133e66146129995780630fd973ce146125cd5780631653441c146120ef57806318160ddd146118fc57806323b872dd146120d7578063248a9ca3146120a35780632a55205a146120435780632eb9313e146120035780632f2ff15d14611fc457806336568abe14611f7f57806341e42f3014611ee957806342842e0e14611eb957806349c657db14611e9c5780634c00de8214611e7357806350017f3e14611e52578063599511fa14611d1c57806361d027b314611cf357806362ae4b8714611b7e5780636352211e14611b4d57806364cb7e9c14611b225780636d12c7f4146119f95780636f8b44b0146119d657806370a0823114611983578063724e78da14611943578063741bef1a1461191a57806375794a3c146118fc57806383943dc8146118d3578063916221aa1461188957806391a6262f1461185a57806391d148541461181057806395d89b411461172d5780639604d4781461152657806396d8f4f314611508578063a217fddf146114ec578063a22cb46514611434578063a6719b3a146113a9578063ab2a6f7014611313578063b88d4fde146112a0578063bfe71a3f14611276578063c631724714611253578063c87b56dd14610b89578063d3933c1c14610b01578063d547741f14610ab9578063d5abeb0114610a9b578063e086e5ec14610a2e578063e985e9c5146109d6578063ebe8b083146108f7578063f0f442601461086b578063f4f3b200146107675763f5cf513b0361000f57346107645780600319360112610764576020600a54604051908152f35b80fd5b503461076457602036600319011261076457610781612cc4565b61078961329f565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa90811561086057839161082a575b506040519063a9059cbb60e01b84523360045260245260208360448180865af190600184511482161561080a575b50156107f8575080f35b635274afe760e01b8252600452602490fd5b60018215166108225750813b15153d1516165f6107ee565b3d84823e3d90fd5b90506020813d602011610858575b8161084560209383612df0565b8101031261085457515f6107c0565b8280fd5b3d9150610838565b6040513d85823e3d90fd5b503461076457602036600319011261076457610885612cc4565b61088d61329f565b6001600160a01b031680156108b2576001600160601b0360a01b600b541617600b5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b506040366003190112610764576004356001600160401b0381116109d257610923903690600401612d6d565b906024356001600160401b0381116109ce57610943903690600401612d6d565b61094e929192613328565b6109598185146130ca565b849285945b8086106109855786610971863414613189565b60015f51602061575e5f395f51905f525580f35b909192936109c26001916109b061099d89868a61315f565b356109a98a898961315f565b359061357b565b6109bb88878761315f565b359061317c565b9501949392919061095e565b8380fd5b5080fd5b50346107645760403660031901126107645760406109f2612cc4565b916109fb612cda565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b5034610764578060031936011261076457610a4761329f565b8080808047335af1610a5761323c565b5015610a605780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b50346107645780600319360112610764576020600954604051908152f35b503461076457604036600319011261076457610afd600435610ad9612cda565b90610af8610af3825f526007602052600160405f20015490565b6132ee565b6134ab565b5080f35b506060366003190112610764576004356001600160401b0381116109d257610b2d903690600401612d06565b906024356001600160401b0381116109ce57610b4d903690600401612d06565b91604435918215158303610b8557610b75610b7d9261097196610b6e613328565b3691612ecc565b933691612ecc565b349233613721565b8580fd5b50346107645760203660031901126107645760043590610ba88261326b565b50818152601060205260408120604051610bc181612dd5565b81546001600160a01b031681526001820154602082015260028201546040820152600382015460608201929060ff16600481101561123f578352610c0790600401612e11565b9160808201928352610c1885612f02565b9460608186526012602052610c2f60408720612e11565b9081511561122e575b81511561121057610c4882614264565b156112085750926020610cb4603a610c69610c64895187613e19565b6155ef565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018a838201520301601f198101835282612df0565b925b60209788604051610cc78282612df0565b8981529680516111ab575b5050610cde8751614cc3565b92516001600160a01b03169182610cf5602a612eb1565b93610d036040519586612df0565b602a8552610d11602a612eb1565b601f190136868e01378451156111975760308c860153845160011015611197576078602186015360295b60018111611141575061112a575051600481101561111657898088818099818e819b8f999b83809c81859f610d70829e614ef4565b90156110f35781604051610d85604082612df0565b600381526259657360e81b82820152935b6040519e8f978189017f7b2274726169745f74797065223a20224d657373616765222c202276616c7565905263111d101160e11b60408a015280519182910160448a015e62089f4b60ea1b6044918901918201527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478201526a10113b30b63ab2911d101160a91b60678201528151929091839101607283015e016044019062089f4b60ea1b602e830152603182017f7b2274726169745f74797065223a202254617820537461747573222c20227661905266363ab2911d101160c91b6051830152805192839101605883015e01602e019062089f4b60ea1b602a830152602d82017f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565905263111d101160e11b604d830152805192839101605183015e01602a0161227d60f01b602782015203602701601d1981018952600201610efb9089612df0565b610f0490614fa9565b895151909990156110d857610f546022610f5a93610f23869451614cc3565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f198101835282612df0565b92614cc3565b91604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e4368617269747920905260538201754475616c2d537461746520436f6c6c65637469626c6560501b9052805192839101606983015e01603301906c1116101134b6b0b3b2911d101160991b6036830152805192839101604383015e0160360190600d8201888152815193849201905e01600d019071222c202261747472696275746573223a205b60701b8252805192839101601283015e0160128101615d7d60f01b905203601201601d19810182526002016110639082612df0565b61106c906155ef565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008582015281519094859392829101603d85015e820190603d82015203603d01601f19810183526110c09083612df0565b60405191818392835282016110d491612ca0565b0390f35b5050610f5a6040516110ea8382612df0565b8b815292614cc3565b81604051611102604082612df0565b60028152614e6f60f01b8282015293610d96565b634e487b7160e01b89526021600452602489fd5b63e22e27eb60e01b8a526004526014602452604489fd5b90600f811660108110156111835761117e91906f181899199a1a9b1b9c1cb0b131b232b360811b901a6111748489614253565b5360041c91615245565b610d3b565b634e487b7160e01b8d52603260045260248dfd5b634e487b7160e01b8b52603260045260248bfd5b611200919297506111bd603591614cc3565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018b838201520301601f198101835282612df0565b94885f610cd2565b939092610cb6565b9390506020611228603a610c69610c64895187613e19565b92610cb6565b905061123982613d66565b90610c38565b634e487b7160e01b85526021600452602485fd5b50346107645760203660031901126107645761126d61329f565b600435600d5580f35b50346107645760203660031901126107645760406020916004358152601183522054604051908152f35b5034610764576080366003190112610764576112ba612cc4565b6112c2612cda565b90604435606435926001600160401b03841161130f573660238501121561130f576112fa61130c943690602481600401359101612ecc565b92611306838383612f2f565b33613c89565b80f35b8480fd5b50346107645760203660031901126107645760043581526010602052604081209060018060a01b0382541691600181015491600282015461135e600460ff6003860154169401612e11565b93604051958652602086015260408501526004821015611395575082916110d491606084015260a0608084015260a0830190612ca0565b634e487b7160e01b81526021600452602490fd5b506080366003190112610764576113be612cc4565b6024356001600160401b038111610854576113dd903690600401612d06565b91906044356001600160401b03811161130f576113fe903690600401612d06565b9091606435928315158403611430576114206114289261097197610b6e613328565b923691612ecc565b903493613721565b8680fd5b50346107645760403660031901126107645761144e612cc4565b602435908115158092036108545733156114d8576001600160a01b03169081156114c457338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b5034610764578060031936011261076457602090604051908152f35b50346107645780600319360112610764576020600d54604051908152f35b503461076457602036600319011261076457600435611543613328565b61154c8161326b565b50600e546001600160a01b031680156116f357600b546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269d3c21bcecceda10000006044820152906020908290606490829087905af19081156108605783916116b8575b501561167c57808252601160205260408220544211156116465762278d00420180421161163257818352601160205260408320555b6040519069d3c21bcecceda100000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f51602061575e5f395f51905f525580f35b634e487b7160e01b83526011600452602483fd5b80825260116020526040822080549062278d00820180921161166857556115e7565b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d6020116116eb575b816116d360209383612df0565b8101031261085457518015158103610854575f6115b2565b3d91506116c6565b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b503461076457806003193601126107645760405190806001549061175082612d9d565b80855291600181169081156117e9575060011461178c575b6110d48461177881860382612df0565b604051918291602083526020830190612ca0565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b8082106117cf5750909150810160200161177882611768565b9192600181602092548385880101520191019092916117b6565b60ff191660208087019190915292151560051b850190920192506117789150839050611768565b503461076457604036600319011261076457604061182c612cda565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b503461076457606036600319011261076457611874612cda565b5061187d612cf0565b50602060405160018152f35b50346107645760403660031901126107645760043560243560048110156108545761130c916118b661329f565b6118bf8161326b565b508352601060205260036040842001613224565b5034610764578060031936011261076457600e546040516001600160a01b039091168152602090f35b50346107645780600319360112610764576020600854604051908152f35b5034610764578060031936011261076457600f546040516001600160a01b039091168152602090f35b50346107645760203660031901126107645761195d612cc4565b61196561329f565b60018060a01b03166001600160601b0360a01b600f541617600f5580f35b5034610764576020366003190112610764576001600160a01b036119a5612cc4565b1680156119c2578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b5034610764576020366003190112610764576119f061329f565b60043560095580f35b503461076457604036600319011261076457600435906024356001600160401b0381116109d257611a2e903690600401612d06565b9092611a3861329f565b611a418161326b565b508252601260205260408220906001600160401b038111611b0e57611a7081611a6a8454612d9d565b846131d5565b82601f8211600114611aae5781908495611a9e949592611aa35750508160011b915f199060031b1c19161790565b905580f35b013590505f8061014c565b601f198216948385526020852091855b878110611af6575083600195969710611add575b505050811b01905580f35b01355f19600384901b60f8161c191690555f8080611ad2565b90926020600181928686013581550194019101611abe565b634e487b7160e01b83526041600452602483fd5b50346107645760203660031901126107645761177860406110d4926004358152601260205220612e11565b5034610764576020366003190112610764576020611b6c60043561326b565b6040516001600160a01b039091168152f35b5060a036600319011261076457611b93612cc4565b906024356001600160401b0381116109d257611bb3903690600401612d6d565b906044356001600160401b0381116109ce57611bd3903690600401612d6d565b94906064356001600160401b038111610b8557611bf4903690600401612d6d565b9690916084356001600160401b038111611cef57611c16903690600401612d6d565b949093611c21613328565b83881480611ce6575b80611cdd575b611c42909897969594939291986130ca565b889789975b808910611c5a578a6109718b3414613189565b909192939495969798611cce600191611cc3888f8b908f8f8f8d611cb384611420938f958f83611ca081611c98611cbc9c611ca895611cad9761310a565b9f909961310a565b9b909961315f565b61316f565b9861315f565b35963691612ecc565b908a613721565b6109bb8c8b8b61315f565b99019796959493929190611c47565b50898614611c30565b50898414611c2a565b8780fd5b5034610764578060031936011261076457600b546040516001600160a01b039091168152602090f35b506080366003190112610764576004356001600160401b0381116109d257611d48903690600401612d6d565b906024356001600160401b0381116109ce57611d68903690600401612d6d565b906044356001600160401b038111610b8557611d88903690600401612d6d565b9290916064356001600160401b038111611cef57611daa903690600401612d6d565b949093611db5613328565b83881480611e49575b80611e40575b611dd59097969594939291976130ca565b889689985b808a10611ded578a6109718a3414613189565b9091929394959697611e30600191611cc3888a888f8f8f8d611cb384611420938f958f83611ca081611c98611e299c611ca895611cad9761310a565b9033613721565b9901989796959493929190611dda565b50818614611dc4565b50818414611dbe565b50602036600319011261076457611e67613328565b6109713460043561357b565b5034610764578060031936011261076457600c546040516001600160a01b039091168152602090f35b503461076457806003193601126107645760206040516103208152f35b50346107645761130c611ecb36612d33565b9060405192611edb602085612df0565b858452611306838383612f2f565b503461076457602036600319011261076457611f03612cc4565b611f0b61329f565b6001600160a01b03168015611f30576001600160601b0360a01b600c541617600c5580f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b503461076457604036600319011261076457611f99612cda565b336001600160a01b03821603611fb557610afd906004356134ab565b63334bd91960e11b8252600482fd5b503461076457604036600319011261076457610afd600435611fe4612cda565b90611ffe610af3825f526007602052600160405f20015490565b61341f565b50346107645760203660031901126107645761201d612cc4565b61202561329f565b60018060a01b03166001600160601b0360a01b600e541617600e5580f35b50346107645760403660031901126107645760243590610320820291808304610320149015171561208f57600c54604080516001600160a01b0390921682526127108404602083015290f35b634e487b7160e01b81526011600452602490fd5b50346107645760203660031901126107645760206120cf6004355f526007602052600160405f20015490565b604051908152f35b50346107645761130c6120e936612d33565b91612f2f565b506040366003190112610764576004356001600160401b0381116109d25761211b903690600401612d06565b602435906001600160401b0382116109ce5761142061214161214c933690600401612d06565b949092610b6e613328565b600d54341061258f57600854906009548210156125555761216c82613713565b60085561217834615128565b9060405161218581612dd5565b3381526020808201848152426040808501918252606085018a8152608086018a8152898c526010909552908a20945185546001600160a01b0319166001600160a01b03919091161785559151600185015551600284015551909190600481101561254157906121f960049260038301613224565b0190518051906001600160401b03821161252d5761221b8261012c8554612d9d565b602090601f83116001146124cb5761224992918991836103745750508160011b915f199060031b1c19161790565b90555b80516123db575b50604051612262602082612df0565b84815233156123c7576001600160a01b0361227d8433613360565b166123b35761228e90833333613b7b565b600e546001600160a01b0316801515806123aa575b612314575b505f51602061577e5f395f51905f52916122d5858080803460018060a01b03600b54165af16101ea61323c565b604051913483526020830152604082015260806060820152806122fd33946080830190612ca0565b0390a260015f51602061575e5f395f51905f525580f35b662386f26fc10000820290828204662386f26fc10000148315171561239657908186923b15610854576040516340c10f1960e01b8152336004820152602481019290925282908290604490829084905af1801561238b57612376575b506122a8565b8161238091612df0565b6109ce57835f612370565b6040513d84823e3d90fd5b634e487b7160e01b86526011600452602486fd5b508115156122a3565b6339e3563760e11b85526004859052602485fd5b633250574960e11b85526004859052602485fd5b828552600660205260408520908051906001600160401b0382116124b7576124078261012c8554612d9d565b602090601f83116001146124555761243592918891836103745750508160011b915f199060031b1c19161790565b90555b5f51602061579e5f395f51905f526020604051848152a15f612253565b8388528188209190601f198416895b81811061249f5750908460019594939210612487575b505050811b019055612438565b01515f1960f88460031b161c191690555f808061247a565b92936020600181928786015181550195019301612464565b634e487b7160e01b87526041600452602487fd5b8389528189209190601f1984168a5b81811061251557509084600195949392106124fd575b505050811b01905561224c565b01515f1960f88460031b161c191690555f80806124f0565b929360206001819287860151815501950193016124da565b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b88526021600452602488fd5b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5060603660031901126102b8576125e2612cc4565b6024356001600160401b0381116102b857612601903690600401612d06565b604492919235906001600160401b0382116102b857610b7561262a612635933690600401612d06565b959092610b6e613328565b90600d54341061258f57600854906009548210156125555761265682613713565b60085561266234615128565b9260405161266f81612dd5565b33815260208082018681524260408085019182525f60608601818152608087018c81528a83526010909652919020945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190916004821015610459576126e260049260038301613224565b0190518051906001600160401b0382116103e2576127048261012c8554612d9d565b602090601f83116001146129365761273292915f91836103745750508160011b915f199060031b1c19161790565b90555b8051612859575b5060405161274b602082612df0565b5f81526001600160a01b038216156102ec576001600160a01b0361276f8484613360565b166102d9578261277f9233613b7b565b600e546001600160a01b031680151580612850575b6127c7575b50905f51602061577e5f395f51905f52916122d5858080803460018060a01b03600b54165af16101ea61323c565b662386f26fc10000830290838204662386f26fc1000014841517156102bc57803b156102b8576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af180156128455715612799575f51602061577e5f395f51905f52929194505f61283c91612df0565b5f939091612799565b6040513d5f823e3d90fd5b50821515612794565b825f52600660205260405f20908051906001600160401b0382116103e2576128858261012c8554612d9d565b602090601f83116001146128d3576128b392915f91836103745750508160011b915f199060031b1c19161790565b90555b5f51602061579e5f395f51905f526020604051848152a15f61273c565b90601f19831691845f52815f20925f5b81811061291e5750908460019594939210612906575b505050811b0190556128b6565b01515f1960f88460031b161c191690555f80806128f9565b929360206001819287860151815501950193016128e3565b90601f19831691845f52815f20925f5b8181106129815750908460019594939210612969575b505050811b019055612735565b01515f1960f88460031b161c191690555f808061295c565b92936020600181928786015181550195019301612946565b346102b85760203660031901126102b8576129b261329f565b600435600a55005b346102b85760403660031901126102b8576129d3612cc4565b6024356129df8161326b565b33151580612a91575b80612a64575b612a515781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff16156129ee565b506001600160a01b0381163314156129e8565b346102b85760203660031901126102b857600435612ac18161326b565b505f526004602052602060018060a01b0360405f205416604051908152f35b346102b8575f3660031901126102b8576040515f5f54612aff81612d9d565b8084529060018116908115612b835750600114612b27575b6110d48361177881850382612df0565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210612b6957509091508101602001611778612b17565b919260018160209254838588010152019101909291612b51565b60ff191660208086019190915291151560051b840190910191506117789050612b17565b346102b85760203660031901126102b8576020612bc5600435612f02565b6040519015158152f35b346102b85760203660031901126102b8576004359063ffffffff60e01b82168092036102b85760209163152a902d60e11b8114908115612c8f575b8115612c18575b5015158152f35b637965db0b60e01b811491508115612c32575b5083612c11565b632483248360e11b811491508115612c4c575b5083612c2b565b6380ac58cd60e01b811491508115612c7e575b8115612c6d575b5083612c45565b6301ffc9a760e01b14905083612c66565b635b5e139f60e01b81149150612c5f565b6391a6262f60e01b81149150612c0a565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036102b857565b602435906001600160a01b03821682036102b857565b604435906001600160a01b03821682036102b857565b9181601f840112156102b8578235916001600160401b0383116102b857602083818601950101116102b857565b60609060031901126102b8576004356001600160a01b03811681036102b857906024356001600160a01b03811681036102b8579060443590565b9181601f840112156102b8578235916001600160401b0383116102b8576020808501948460051b0101116102b857565b90600182811c92168015612dcb575b6020831014612db757565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612dac565b60a081019081106001600160401b038211176103e257604052565b90601f801991011681019081106001600160401b038211176103e257604052565b9060405191825f825492612e2484612d9d565b8084529360018116908115612e8f5750600114612e4b575b50612e4992500383612df0565b565b90505f9291925260205f20905f915b818310612e73575050906020612e49928201015f612e3c565b6020919350806001915483858901015201910190918492612e5a565b905060209250612e4994915060ff191682840152151560051b8201015f612e3c565b6001600160401b0381116103e257601f01601f191660200190565b929192612ed882612eb1565b91612ee66040519384612df0565b8294818452818301116102b8578281602093845f960137010152565b805f52601160205260405f205415159081612f1b575090565b90505f52601160205260405f205442111590565b6001600160a01b03909116919082156102ec575f828152600260205260409020546001600160a01b031692829033151580613022575b5084612fef575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303612fd757505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612f6c565b90915080613066575b156130385782905f612f65565b828461305057637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015613095575b8061302b57505f838152600460205260409020546001600160a01b0316331461302b565b505f84815260056020908152604080832033845290915290205460ff16613071565b818102929181159184041417156102bc57565b156130d157565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b919081101561314b5760051b81013590601e19813603018212156102b85701908135916001600160401b0383116102b85760200182360381136102b8579190565b634e487b7160e01b5f52603260045260245ffd5b919081101561314b5760051b0190565b3580151581036102b85790565b919082018092116102bc57565b1561319057565b60405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e74000000000000006044820152606490fd5b601f82116131e257505050565b5f5260205f20906020601f840160051c8301931061321a575b601f0160051c01905b81811061320f575050565b5f8155600101613204565b90915081906131fb565b9060048110156104595760ff80198354169116179055565b3d15613266573d9061324d82612eb1565b9161325b6040519384612df0565b82523d5f602084013e565b606090565b5f818152600260205260409020546001600160a01b031690811561328d575090565b637e27328960e01b5f5260045260245ffd5b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff16156132d757565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156133125750565b63e2517d3f60e01b5f523360045260245260445ffd5b60025f51602061575e5f395f51905f5254146133515760025f51602061575e5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b5f828152600260205260409020546001600160a01b03169190826133ec575b6001600160a01b0316806133d4575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f206001815401905561338e565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f19815401905561337f565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff166134a5575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16156134a5575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b1561353657565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b6135848161326b565b5061358e82615128565b6305f5e10081106136ce575f828152601160205260408120544211156136ac5762278d0042018042116102bc57835f52601160205260405f20555b600e546001600160a01b0316801515806136a3575b613630575b5061360291508080808660018060a01b03600b54165af16101ea61323c565b6040519182527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a3565b662386f26fc10000830292808404662386f26fc1000014901517156102bc57803b156102b8576040516340c10f1960e01b815233600482015260248101939093525f908390604490829084905af180156128455761368f575b816135e3565b505f61369a91612df0565b6136025f613689565b508215156135de565b825f52601160205260405f2080549062278d0082018092116102bc57556135c9565b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b5f1981146102bc5760010190565b9293919093600d54935f94841061258f57600854926009548410156125555761374984613713565b60085561375585615128565b9260405161376281612dd5565b33815260208082018681524260408085019182525f60608601818152608087018f81528c83526010909652919020945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190916004821015610459576137d560049260038301613224565b0190518051906001600160401b0382116103e2576137f78261012c8554612d9d565b602090601f8311600114613b185761382592915f91836103745750508160011b915f199060031b1c19161790565b90555b15613a2e57835f52601260205260405f20908051906001600160401b0382116103e2576138598261012c8554612d9d565b602090601f83116001146139cb5761388792915f91836103745750508160011b915f199060031b1c19161790565b90555b604051613898602082612df0565b5f81526001600160a01b038216156102ec576001600160a01b036138bc8584613360565b166102d957836138cc9233613b7b565b600e546001600160a01b0316801515806139c2575b61393e575b506139128480805f51602061577e5f395f51905f52978760018060a01b03600b54165af16101ea61323c565b60405192835260208301526040820152608060608201528061393933946080830190612ca0565b0390a2565b662386f26fc10000820290828204662386f26fc1000014831517156102bc57803b156102b8576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1948515612845575f51602061577e5f395f51905f52956139ae575b94506138e6565b505f6139b991612df0565b6139125f6139a7565b508115156138e1565b90601f19831691845f52815f20925f5b818110613a1657509084600195949392106139fe575b505050811b01905561388a565b01515f1960f88460031b161c191690555f80806139f1565b929360206001819287860151815501950193016139db565b8051613a3b575b5061388a565b835f52600660205260405f20908051906001600160401b0382116103e257613a678261012c8554612d9d565b602090601f8311600114613ab557613a9592915f91836103745750508160011b915f199060031b1c19161790565b90555b5f51602061579e5f395f51905f526020604051858152a15f613a35565b90601f19831691845f52815f20925f5b818110613b005750908460019594939210613ae8575b505050811b019055613a98565b01515f1960f88460031b161c191690555f8080613adb565b92936020600181928786015181550195019301613ac5565b90601f19831691845f52815f20925f5b818110613b635750908460019594939210613b4b575b505050811b019055613828565b01515f1960f88460031b161c191690555f8080613b3e565b92936020600181928786015181550195019301613b28565b9291813b613b8a575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f60248201526044810191909152608060648201529216919060209082908190613bd5906084830190612ca0565b03815f865af15f9181613c44575b50613c115750613bf161323c565b80519081613c0c5782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b01613c3257505f808080613b84565b633250574960e11b5f5260045260245ffd5b9091506020813d602011613c81575b81613c6060209383612df0565b810103126102b857516001600160e01b0319811681036102b857905f613be3565b3d9150613c53565b823b613c97575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190613ce3906084830190612ca0565b03815f865af15f9181613d21575b50613cff5750613bf161323c565b6001600160e01b03191663757a42ff60e11b01613c3257505f80808080613c90565b9091506020813d602011613d5e575b81613d3d60209383612df0565b810103126102b857516001600160e01b0319811681036102b857905f613cf1565b3d9150613d30565b613d6f8161326b565b50602090604051613d808382612df0565b5f8152815f5260068352613d9660405f20612e11565b815115613e125780849151613dd457505050613db19061326b565b505f604051613dc08382612df0565b52613dce6040519182612df0565b5f815290565b613e0f935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612df0565b90565b9250505090565b60116053613e0f92613e33613e2d82612f02565b95615251565b80511561420557613e4491506152fb565b935b60209485604051613e578282612df0565b5f815291604051613e69608082612df0565b604981528281017f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7381527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040830152856868743a20626f6c643b60b81b60608401526140ed575b600f9160828592603c97985f146140ca57604051613ef0604082612df0565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000085820152925b6040519d8e9a7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230828d01527f30302f73766722207072657365727665417370656374526174696f3d22784d6960408d01527f6e594d696e206d656574222076696577426f783d22302030203335302033353060608d015261111f60f11b60808d0152805191829101858d015e8a01906e01e39ba3cb6329f173130b9b2903d9608d1b84830152518092609183015e01019069103e9e17b9ba3cb6329f60b11b848301527f3c726563742077696474683d223130302522206865696768743d223130302522601983015271103334b6361e91119b199b1b33189110179f60711b6039830152805192839101604b83015e0101907f3c7465787420783d223530252220793d223530252220636c6173733d22626173848301527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465605c830152723c3a16b0b731b437b91e9136b4b2323632911f60691b607c830152805192839101608f83015e0101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b838201520301600e19810184520182612df0565b6040516140d8604082612df0565b60038152621e339f60e91b8582015292613f1b565b603c9450600f91608285926101006141086040519182612df0565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522858201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e082015297509250509150613ed1565b5061424d6029614216602093614fa9565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612df0565b93613e46565b90815181101561314b570160200190565b805190600482106134a557600b82101561483f575b60031982018281116102bc57601760f91b6001600160f81b031961429d8385614253565b5116146144c3575b600583101580614494575b6142bc575b5050505f90565b6142db906001600160f81b0319906142d49084614253565b511661571e565b9060021983018381116102bc57614300906001600160f81b0319906142d49084614253565b9260011981018181116102bc57614325906001600160f81b0319906142d49085614253565b915f1982019182116102bc576142d46143439260ff60f81b92614253565b916001600160f81b031916607760f81b8114808061447d575b80614466575b8061444f575b614445578061442e575b80614417575b80614400575b6143f757606760f81b1492836143df575b50826143c7575b50816143af575b506143aa575f80806142b5565b600190565b6001600160f81b031916603360f91b1490505f61439d565b6001600160f81b031916601d60fa1b1491505f614396565b6001600160f81b031916601b60fa1b1492505f61438f565b50505050600190565b506001600160f81b03198316600760fc1b1461437e565b506001600160f81b03198216603160f91b14614378565b506001600160f81b03198416606560f81b14614372565b5050505050600190565b506001600160f81b03198416606d60f81b14614368565b506001600160f81b03198316603160f91b14614362565b506001600160f81b03198516606560f81b1461435c565b5060041983018381116102bc57601760f91b906001600160f81b0319906144bb9085614253565b5116146142b0565b60021983018381116102bc576144e7906001600160f81b0319906142d49085614253565b60011984018481116102bc5761450b906001600160f81b0319906142d49086614253565b905f1985018581116102bc5761452f906001600160f81b0319906142d49087614253565b906001600160f81b031916606d60f81b81148080614828575b80614811575b6146b657607760f81b8214806147fa575b806147e3575b6146b657606f60f81b821480806147cc575b806147b5575b6146f057818061479e575b80614787575b6146f057606160f81b831480614770575b80614759575b6146f0578180614742575b8061472b575b6146f0578180614714575b806146fd575b6146f057806146d9575b806146c2575b6146b6578061469f575b80614688575b61464f57606760f81b14918280614671575b8061465a575b61464f5782614637575b508161461f575b50156142a5575b505050600190565b6001600160f81b031916603160f91b1490505f614610565b6001600160f81b031916601b60fa1b1491505f614609565b505050505050600190565b506001600160f81b03198216603360f91b146145ff565b506001600160f81b03198116606960f81b146145f9565b506001600160f81b03198216603b60f91b146145e7565b506001600160f81b03198316600d60fa1b146145e1565b50505050505050600190565b506001600160f81b03198316603b60f91b146145d7565b506001600160f81b03198416606760f81b146145d1565b5050505050505050600190565b506001600160f81b03198416603b60f91b146145c7565b506001600160f81b03198516606f60f81b146145c1565b506001600160f81b03198416600d60fa1b146145b6565b506001600160f81b03198516600760fc1b146145b0565b506001600160f81b03198416606360f81b146145a5565b506001600160f81b03198516606160f81b1461459f565b506001600160f81b03198416606160f81b1461458e565b506001600160f81b03198516600d60fa1b14614588565b506001600160f81b03198416606760f81b1461457d565b506001600160f81b03198516606760f81b14614577565b506001600160f81b03198316603b60f91b14614565565b506001600160f81b03198416606160f81b1461455f565b506001600160f81b03198316603360f81b1461454e565b506001600160f81b03198416600760fc1b14614548565b811561314b5760208101516001600160f81b031916601960fa1b1480614c6c575b80614c47575b80614c22575b80614bfd575b156142795780516005101561314b576025810180516001600160f81b031916606160f81b1480614bd8575b80614bb3575b80614b8e575b80614b69575b80614b44575b6146175781516005101561314b5780516001600160f81b031916603b60f91b1480614b1f575b80614afa575b80614ad5575b80614ab0575b80614a8b575b61461757600e8310159081614a68575b5080614a43575b80614a1e575b806149f9575b806149d4575b806149af575b8061498a575b80614965575b80614940575b15614279575050600190565b508051600d101561314b57602d8101516001600160f81b031916603360f91b14614934565b508051600c101561314b57602c8101516001600160f81b031916606960f81b1461492e565b508051600b101561314b57602b8101516001600160f81b031916606760f81b14614928565b508051600a101561314b57602a8101516001600160f81b031916602f60f81b14614922565b5080516009101561314b5760298101516001600160f81b031916606560f81b1461491c565b5080516008101561314b5760288101516001600160f81b031916606760f81b14614916565b5080516007101561314b5760278101516001600160f81b031916606160f81b14614910565b5080516006101561314b5760268101516001600160f81b031916606d60f81b1461490a565b905081516005101561314b57516001600160f81b031916606960f81b145f614903565b508151600a101561314b57602a8201516001600160f81b031916602f60f81b146148f3565b5081516009101561314b5760298201516001600160f81b031916606f60f81b146148ed565b5081516008101561314b5760288201516001600160f81b031916606560f81b146148e7565b5081516007101561314b5760278201516001600160f81b031916601960fa1b146148e1565b5081516006101561314b5760268201516001600160f81b031916606960f81b146148db565b508151600a101561314b57602a8201516001600160f81b031916602f60f81b146148b5565b5081516009101561314b5760298201516001600160f81b031916606f60f81b146148af565b5081516008101561314b5760288201516001600160f81b031916606960f81b146148a9565b5081516007101561314b5760278201516001600160f81b031916601960fa1b146148a3565b5081516006101561314b5760268201516001600160f81b031916607560f81b1461489d565b5080516004101561314b5760248101516001600160f81b031916601d60f91b14614872565b5080516003101561314b5760238101516001600160f81b031916606160f81b1461486c565b5080516002101561314b5760228101516001600160f81b031916601d60fa1b14614866565b5080516001101561314b5760218101516001600160f81b031916606160f81b14614860565b90614c9b82612eb1565b614ca86040519182612df0565b8281528092614cb9601f1991612eb1565b0190602036910137565b80515f5f5b828110614e6757508015614e6257614ce3614ce8918361317c565b614c91565b915f9060405191614cfa604084612df0565b601083526f181899199a1a9b1b9c1cb0b131b232b360811b60208401525f915b848310614d2957505050505090565b614d338382614253565b51928360f81c602281148015614e58575b15614d8e575082605c614d63614d5c60019596613713565b928a614253565b53614d84614d7082613713565b956001600160f81b0319165f1a9189614253565b535b019190614d1a565b6020811015614e46578394605c614db1614daa60019697613713565b978b614253565b536075614dc0614daa88613713565b536030614dcf614daa88613713565b536030614dde614daa88613713565b536001600160f81b031990614df69060fc1c88614253565b511694614e0f614e0582613713565b965f1a918a614253565b536001600160f81b031990614e2790600f1687614253565b511693614e40614e3682613713565b955f1a9189614253565b53614d86565b5082614e40614d706001949592613713565b50605c8114614d44565b505090565b90601160f91b6001600160f81b0319614e808487614253565b5116148015614ed3575b15614ea257614e9a600191613713565b915b01614cc8565b906020614eaf8286614253565b5160f81c10614ec1575b600190614e9c565b90600581018091116102bc5790614eb9565b50601760fa1b6001600160f81b0319614eec8487614253565b511614614e8a565b6004811015610459578015614f835760018114614f5c57600214614f3757604051614f20604082612df0565b6007815266119b1859d9d95960ca1b602082015290565b604051614f45604082612df0565b600781526610db185a5b595960ca1b602082015290565b50604051614f6b604082612df0565b600881526715995c9a599a595960c21b602082015290565b50604051614f92604082612df0565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8210156150ee575b806d04ee2d6d415b85acef8100000000600a9210156150d3575b662386f26fc100008110156150bf575b6305f5e1008110156150ae575b61271081101561509f575b6064811015615091575b1015615086575b600a6021600184019361503085612eb1565b9461503e6040519687612df0565b80865261504d601f1991612eb1565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a8353048015614e6257600a9091615058565b60019091019061501e565b606460029104930192615017565b6127106004910493019261500d565b6305f5e10060089104930192615002565b662386f26fc1000060109104930192614ff5565b6d04ee2d6d415b85acef810000000060209104930192614fe5565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8104614fcb565b519069ffffffffffffffffffff821682036102b857565b600f545f919082906001600160a01b031680615175575b50158061516a575b61514f575090565b670de0b6b3a7640000915061516690600a546130b7565b0490565b50600a541515615147565b60a060049160405192838092633fabe5a360e21b82525afa5f91816151f6575b506151c657507f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a15b5f61513f565b5f81136151d4575b506151c0565b8293506151ec915091670de0b6b3a7640000926130b7565b049060015f6151ce565b90915060a0813d60a01161523d575b8161521260a09383612df0565b810103126102b85761522381615111565b50615235608060208301519201615111565b50905f615195565b3d9150615205565b80156102bc575f190190565b90602082511115612e49576020825181101561314b57608060c082808601015160f81c16146152c0575b61528481614c91565b905f5b818110615295575090925050565b6001906001600160f81b03196152ab8288614253565b51165f1a6152b98286614253565b5301615287565b801515806152e1575b156152dc576152d790615245565b6152c0565b61527b565b50608060c06152f08386614253565b5160f81c16146152c9565b80515f5f5b8281106154e557508015614e6257614ce361531b918361317c565b915f905f5b83811061532e575050505090565b6001600160f81b03196153418284614253565b5116601360f91b81036153ab5750600190602661536761536086613713565b9588614253565b53606161537661536086613713565b53606d61538561536086613713565b53607061539461536086613713565b53603b6153a361536086613713565b535b01615320565b600f60fa1b81036153fb575060019060266153c861536086613713565b53606c6153d761536086613713565b5360746153e661536086613713565b53603b6153f561536086613713565b536153a5565b601f60f91b81036154275750600190602661541861536086613713565b5360676153d761536086613713565b601160f91b81036154715750600190602661544461536086613713565b53607161545361536086613713565b53607561546261536086613713565b53606f6153d761536086613713565b602760f81b81036154ca5750600190602661548e61536086613713565b53606161549d61536086613713565b5360706154ac61536086613713565b53606f6154bb61536086613713565b5360736153e661536086613713565b92600191906153f56154db82613713565b955f1a9188614253565b90601360f91b6001600160f81b03196154fe8487614253565b51160361551b57600481018091116102bc57600190915b01615300565b600f60fa1b6001600160f81b03196155338487614253565b51160361554e57600381018091116102bc5760019091615515565b601f60f91b6001600160f81b03196155668487614253565b51160361558157600381018091116102bc5760019091615515565b601160f91b6001600160f81b03196155998487614253565b5116036155b457600581018091116102bc5760019091615515565b90602760f81b6001600160f81b03196155cd8387614253565b5116146155dd575b600190615515565b90600581018091116102bc57906155d5565b9081511561570e578151600281018091116102bc5760039004600281901b91906001600160fe1b038116036102bc57604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b8089106156d257506020959697509060039291525106806001146156bd576002146156b0575b50808452830101604052565b603d905f1901535f6156a4565b50603d90815f1982015360011901535f6156a4565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c1651600284015316516003820153019361567e565b9050604051613dce602082612df0565b8060f81c604181101580615752575b615735575090565b602091500160ff81116102bc5760f81b6001600160f81b03191690565b50605a81111561572d56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377f8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7a264697066735822122033a0e07e054c4e901ed8ee908a3452661e242e2fd1e7ab0c88dfbf8552deb15964736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
      "bytecode": "0x6101806040523461007d5761001b6100156100ce565b916101c0565b60405161245c9081610e6a823960805181611752015260a0518161180f015260c0518161171c015260e051816117a1015261010051816117c7015261012051816109c5015261014051816109ee01526101605181818161068e0152610ff10152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b601f909101601f19168101906001600160401b038211908210176100b857604052565b610081565b604051906100cc604083610095565b565b61336690606082380392836040519485926100e98285610095565b83398101031261007d578151906001600160a01b038216820361007d576040602084015193015191929190565b60405190610125604083610095565b60048252565b6040519061013a604083610095565b60018252565b6040519061014f604083610095565b600a825269213930b3902a37b5b2b760b11b6020830152565b1561016f57565b60405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b6064820152608490fd5b916101c9610140565b6101d1610140565b906101da610116565b90634252414760e01b60208301526101f061012b565b603160f81b60208201908152845190949193916001600160401b0382116100b85761022582610220600354610367565b61039f565b602090601f83116001146102e05791806102599261026195945f926102d5575b50508160011b915f199060031b1c19161790565b60035561043e565b61026a816106d4565b61012052610277826107c9565b610140526020815191012060e052519020610100524660a0526102986108bb565b6080523060c0526102ab82821015610168565b610160526102b882610517565b506102c28261058d565b50806102cc575050565b6100cc91610628565b015190505f80610245565b60035f52601f19831691907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b925f5b81811061034f575091600193918561026197969410610337575b505050811b0160035561043e565b01515f1960f88460031b161c191690555f8080610329565b9293602060018192878601518155019501930161030f565b90600182811c92168015610395575b602083101461038157565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610376565b601f81116103ab575050565b60035f5260205f20906020601f840160051c830193106103e5575b601f0160051c01905b8181106103da575050565b5f81556001016103cf565b90915081906103c6565b601f82116103fc57505050565b5f5260205f20906020601f840160051c83019310610434575b601f0160051c01905b818110610429575050565b5f815560010161041e565b9091508190610415565b80519091906001600160401b0381116100b85761046781610460600454610367565b60046103ef565b602092601f821160011461049b57610496929382915f926102d55750508160011b915f199060031b1c19161790565b600455565b60045f52601f198216937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b915f5b8681106104ff57508360019596106104e7575b505050811b01600455565b01515f1960f88460031b161c191690555f80806104dc565b919260206001819286850151815501940192016104c9565b6001600160a01b0381165f9081525f5160206133065f395f51905f52602052604090205460ff16610588576001600160a01b03165f8181525f5160206133065f395f51905f5260205260408120805460ff191660011790553391905f5160206132c65f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206133265f395f51905f52602052604090205460ff16610588576001600160a01b0381165f9081525f5160206133265f395f51905f5260205260409020805460ff1916600117905533906001600160a01b03167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a65f5160206132c65f395f51905f525f80a4600190565b91906001600160a01b03831680156106c1576002548281018091116106bc576002555f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b038085116106a557506100cc929350610998565b630e58ae9360e11b5f52600485905260245260445ffd5b610984565b63ec442f0560e01b5f525f60045260245ffd5b908151602081105f146106ef5750906106ec90610919565b90565b6001600160401b0381116100b8576107138161070c600554610367565b60056103ef565b602092601f821160011461074a57610742929382915f926102d55750508160011b915f199060031b1c19161790565b60055560ff90565b60055f52601f198216937f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0915f5b8681106107b15750836001959610610799575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f808061078b565b91926020600181928685015181550194019201610778565b908151602081105f146107e15750906106ec90610919565b6001600160401b0381116100b857610805816107fe600654610367565b60066103ef565b602092601f821160011461083c57610834929382915f926102d55750508160011b915f199060031b1c19161790565b60065560ff90565b60065f52601f198216937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f915f5b8681106108a3575083600195961061088b575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f808061087d565b9192602060018192868501518155019401920161086a565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261091360c082610095565b51902090565b601f815111610944576020815191015160208210610935571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b634e487b7160e01b5f52601160045260245ffd5b906109a281610a97565b9165ffffffffffff4311610a7f57600a5480610a4957506109dc6109cc6100cc945f5b6001610e0d565b65ffffffffffff4316600a610d37565b50506001600160a01b03168015610a31575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116610bc6565b610a42610a3d83610a97565b610ac8565b50506109ee565b92835f198101116106bc57600a5f525f5160206132e65f395f51905f52909301546100cc936109dc916109cc919060301c6109c5565b6306dfcc6560e41b5f5260306004524360245260445ffd5b6001600160d01b038111610ab1576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b65ffffffffffff4311610a7f57600a5480610af257506109cc610aee915f5b6002610e0d565b9091565b805f198101116106bc57600a5f525f5160206132e65f395f51905f520154610aee916109cc9160301c610ae7565b65ffffffffffff4311610a7f57805480610b545750610b44610aee925f6002610e0d565b9065ffffffffffff431690610d37565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c610ae7565b65ffffffffffff4311610a7f57805480610b9f5750610b44610aee925f6001610e0d565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c6109c5565b6001600160a01b03808316939291908116908185141580610cb9575b610bee575b5050505050565b81610c5f575b505082610c03575b8080610be7565b6001600160a01b03165f9081526009602052604090205f5160206133465f395f51905f5291610c3c91610c369091610a97565b90610b7b565b604080516001600160d01b039384168152919092166020820152a25f8080610bfc565b6001600160a01b03165f9081526009602052604090205f5160206133465f395f51905f5290610c9790610c9186610a97565b90610b20565b604080516001600160d01b039384168152919092166020820152a25f80610bf4565b50831515610be2565b5f198101919082116106bc57565b908154680100000000000000008110156100b85760018101808455811015610d23575f9283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b634e487b7160e01b5f52603260045260245ffd5b80549293928015610de357610d4e610d5991610cc2565b825f5260205f200190565b8054603081901c9365ffffffffffff91821692918116808411610dd457879303610da05750610d9c92509065ffffffffffff82549181199060301b169116179055565b9190565b915050610d9c91610dc0610db26100bd565b65ffffffffffff9093168352565b6001600160d01b0386166020830152610cd0565b632520601d60e01b5f5260045ffd5b5090610e0891610df4610db26100bd565b6001600160d01b0385166020830152610cd0565b5f9190565b91909180600114610e4f57600214610e3357634e487b7160e01b5f52605160045260245ffd5b6001600160d01b03908116918116919091039081116106bc5790565b506001600160d01b03918216908216019081116106bc579056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c806301ffc9a71461026957806306fdde0314610264578063095ea7b31461025f57806318160ddd1461025a57806323b872dd14610255578063248a9ca3146102505780632f2ff15d1461024b578063313ce567146102465780633644e5151461024157806336568abe1461023c5780633a46b1a81461023757806340c10f191461023257806342966c681461022d5780634bf5d7e914610228578063587cde1e146102235780635c19a95c1461021e5780636fcfff451461021957806370a082311461021457806379cc67901461020f5780637ecebe001461020a57806384b0196e146102055780638e539e8c1461020057806391d14854146101fb57806391ddadf4146101f657806395d89b41146101f15780639ab24eb0146101ec578063a217fddf146101e7578063a9059cbb146101e2578063c3cda520146101dd578063d505accf146101d8578063d5391393146101d3578063d547741f146101ce578063d5abeb01146101c9578063dd62ed3e146101c4578063e086e5ec146101bf578063f1127ed8146101ba5763f4f3b2000361000e576111ac565b6110fa565b61106b565b611014565b610fda565b610f9c565b610f62565b610e3e565b610d2f565b610ce9565b610ccf565b610c88565b610be3565b610bb8565b610b69565b610aaa565b6109ad565b610975565b610945565b61090d565b6108ab565b610889565b610849565b6107b9565b61079c565b61065b565b610576565b610532565b610518565b6104fd565b6104ba565b610487565b61044f565b610432565b610401565b6102fb565b346102bf5760203660031901126102bf5760043563ffffffff60e01b81168091036102bf57602090637965db0b60e01b81149081156102ae575b506040519015158152f35b6301ffc9a760e01b1490505f6102a3565b5f80fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102f89281815201906102c3565b90565b346102bf575f3660031901126102bf576040515f60035461031b8161125c565b80845290600181169081156103b15750600114610353575b61034f836103438185038261134a565b604051918291826102e7565b0390f35b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b80821061039757509091508101602001610343610333565b91926001816020925483858801015201910190929161037f565b60ff191660208086019190915291151560051b840190910191506103439050610333565b600435906001600160a01b03821682036102bf57565b602435906001600160a01b03821682036102bf57565b346102bf5760403660031901126102bf5761042761041d6103d5565b6024359033611b88565b602060405160018152f35b346102bf575f3660031901126102bf576020600254604051908152f35b346102bf5760603660031901126102bf5761042761046b6103d5565b6104736103eb565b604435916104828333836113d7565b6114a5565b346102bf5760203660031901126102bf5760206104b26004355f52600b602052600160405f20015490565b604051908152f35b346102bf5760403660031901126102bf576100186004356104d96103eb565b906104f86104f3825f52600b602052600160405f20015490565b61164f565b611689565b346102bf575f3660031901126102bf57602060405160128152f35b346102bf575f3660031901126102bf5760206104b2611719565b346102bf5760403660031901126102bf5760043561054e6103eb565b336001600160a01b038216036105675761001891611835565b63334bd91960e11b5f5260045ffd5b346102bf5760403660031901126102bf5761058f6103d5565b6001600160a01b03165f9081526009602052604090206105b06024356118bd565b8154905f829160058411610603575b6105ca935084611da8565b90816105e857505060205f5b6040516001600160d01b039091168152f35b6105f36020926118f6565b905f52815f20015460301c6105d6565b919261060e81611c4a565b8103908111610656576105ca93855f5265ffffffffffff8260205f2001541665ffffffffffff8516105f146106445750916105bf565b9291506106509061136c565b906105bf565b611248565b346102bf5760403660031901126102bf576106746103d5565b60243561067f611591565b600254818101809111610656577f000000000000000000000000000000000000000000000000000000000000000010610763576001600160a01b0382168015610750576106d66106d18360025461137a565b600255565b6001600160a01b0383165f90815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254916001600160d01b03808411610739576100188383612206565b630e58ae9360e11b5f52600484905260245260445ffd5b63ec442f0560e01b5f525f60045260245ffd5b60405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b6044820152606490fd5b346102bf5760203660031901126102bf5761001860043533611904565b346102bf575f3660031901126102bf576107d243611bfd565b65ffffffffffff806107e343611bfd565b1691160361083a5761034f6040516107fc60408261134a565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c7400000060208201526040519182916020835260208301906102c3565b6301bfc1c560e61b5f5260045ffd5b346102bf5760203660031901126102bf576001600160a01b0361086a6103d5565b165f526008602052602060018060a01b0360405f205416604051908152f35b346102bf5760203660031901126102bf576100186108a56103d5565b33611a2c565b346102bf5760203660031901126102bf576001600160a01b036108cc6103d5565b165f52600960205260405f205463ffffffff81116108f65760405163ffffffff9091168152602090f35b6306dfcc6560e41b5f52602060045260245260445ffd5b346102bf5760203660031901126102bf5760206104b261092b6103d5565b6001600160a01b03165f9081526020819052604090205490565b346102bf5760403660031901126102bf576100186109616103d5565b602435906109708233836113d7565b611904565b346102bf5760203660031901126102bf576001600160a01b036109966103d5565b165f526007602052602060405f2054604051908152f35b346102bf575f3660031901126102bf57610a516109e97f0000000000000000000000000000000000000000000000000000000000000000611f23565b610a127f0000000000000000000000000000000000000000000000000000000000000000611f83565b6020604051610a21828261134a565b5f815281610a5f81830194601f198301368737604051978897600f60f81b895260e0858a015260e08901906102c3565b9087820360408901526102c3565b914660608701523060808701525f60a087015285830360c087015251918281520192915f5b828110610a9357505050500390f35b835185528695509381019392810192600101610a84565b346102bf5760203660031901126102bf57610ac66004356118bd565b600a54905f829160058411610b15575b610ae29350600a611da8565b80610af357506040515f8152602090f35b610b10610b016020926118f6565b600a5f52825f20015460301c90565b6105d6565b9192610b2081611c4a565b810390811161065657610ae293600a5f5265ffffffffffff8260205f2001541665ffffffffffff8516105f14610b57575091610ad6565b929150610b639061136c565b90610ad6565b346102bf5760403660031901126102bf57602060ff610bac600435610b8c6103eb565b905f52600b845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b346102bf575f3660031901126102bf576020610bd343611bfd565b65ffffffffffff60405191168152f35b346102bf575f3660031901126102bf576040515f600454610c038161125c565b80845290600181169081156103b15750600114610c2a5761034f836103438185038261134a565b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610c6e57509091508101602001610343610333565b919260018160209254838588010152019101909291610c56565b346102bf5760203660031901126102bf576001600160a01b03610ca96103d5565b165f526009602052602060018060d01b03610cc660405f20611aad565b16604051908152f35b346102bf575f3660031901126102bf5760206040515f8152f35b346102bf5760403660031901126102bf57610427610d056103d5565b60243590336114a5565b6064359060ff821682036102bf57565b6084359060ff821682036102bf57565b346102bf5760c03660031901126102bf57610d486103d5565b60243590604435610d57610d0f565b6084359060a43592804211610e2c5791610ddc9391610dce610dd39460405160208101917fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf835260018060a01b038a1660408301528a6060830152608082015260808152610dc660a08261134a565b519020611ad7565b611fba565b9092919261205a565b6001600160a01b0381165f908152600760205260409020805460018101909155809303610e0d576100189250611a2c565b90506301d4b62360e61b5f5260018060a01b031660045260245260445ffd5b632341d78760e11b5f5260045260245ffd5b346102bf5760e03660031901126102bf57610e576103d5565b610e5f6103eb565b6044359060643592610e6f610d1f565b60a43560c43590864211610f4f576001600160a01b0384165f908152600760205260409020805460018101909155610f149390610f0f909860405160208101917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9835260018060a01b0389169b8c604084015260018060a01b038b1660608401528b608084015260a083015260c082015260c08152610dc660e08261134a565b611afd565b936001600160a01b03851603610f2e576100189350611b88565b6325c0072360e11b5f526001600160a01b038085166004521660245260445ffd5b8663313c898160e11b5f5260045260245ffd5b346102bf575f3660031901126102bf5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b346102bf5760403660031901126102bf57610018600435610fbb6103eb565b90610fd56104f3825f52600b602052600160405f20015490565b611835565b346102bf575f3660031901126102bf5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346102bf5760403660031901126102bf5760206110626110326103d5565b61103a6103eb565b6001600160a01b039182165f9081526001855260408082209290931681526020919091522090565b54604051908152f35b346102bf575f3660031901126102bf57611083611600565b5f80808047335af13d156110f5573d61109b81611398565b906110a9604051928361134a565b81525f60203d92013e5b156110ba57005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b6110b3565b346102bf5760403660031901126102bf576111136103d5565b6024359063ffffffff821682036102bf5761034f91611162916111346113b4565b5061113d6113b4565b506001600160a01b03165f90815260096020526040902061115c6113b4565b506120d6565b506040519061117082611329565b5465ffffffffffff811680835260309190911c60209283019081526040805192835290516001600160d01b031692820192909252918291820190565b346102bf5760203660031901126102bf576111c56103d5565b6111cd611600565b6040516370a0823160e01b8152306004820152906001600160a01b0316602082602481845afa908115611243575f9161120d575b61001892503390611b0c565b90506020823d60201161123b575b816112286020938361134a565b810103126102bf57610018915190611201565b3d915061121b565b6113cc565b634e487b7160e01b5f52601160045260245ffd5b90600182811c9216801561128a575b602083101461127657565b634e487b7160e01b5f52602260045260245ffd5b91607f169161126b565b5f92918154916112a38361125c565b80835292600181169081156112f857506001146112bf57505050565b5f9081526020812093945091925b8383106112de575060209250010190565b6001816020929493945483858701015201910191906112cd565b915050602093945060ff929192191683830152151560051b010190565b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff82111761134557604052565b611315565b90601f8019910116810190811067ffffffffffffffff82111761134557604052565b906001820180921161065657565b9190820180921161065657565b6040519061139660408361134a565b565b67ffffffffffffffff811161134557601f01601f191660200190565b604051906113c182611329565b5f6020838281520152565b6040513d5f823e3d90fd5b6001600160a01b039081165f81815260016020908152604080832094861683529390529190912091929091545f198110611412575b50505050565b818110611484578215611471576001600160a01b0384161561145e57611454925f526001602052039160405f209060018060a01b03165f5260205260405f2090565b555f80808061140c565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b83637dc7a0d960e11b5f5260018060a01b031660045260245260445260645ffd5b6001600160a01b03811693929190841561157e576001600160a01b0382168015610750576001600160a01b0382165f908152602081905260409020549584871061155857846113969697036115098460018060a01b03165f525f60205260405f2090565b556001600160a01b0384165f9081526020819052604090208054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a361227f565b63391434e360e21b5f526001600160a01b0383166004526024879052604485905260645ffd5b634b637e8f60e11b5f525f60045260245ffd5b335f9081527ff70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8602052604090205460ff16156115c957565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b335f9081527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76602052604090205460ff161561163857565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f818152600b6020908152604080832033845290915290205460ff16156116735750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff16611713575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316148061180c575b15611774577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261180660c08261134a565b51902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461174b565b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff1615611713575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b65ffffffffffff6118cd43611bfd565b16808210156118e057506102f890611bfd565b90637669fc0f60e11b5f5260045260245260445ffd5b5f1981019190821161065657565b6001600160a01b03811690811561157e576001600160a01b0381165f90815260208190526040902054838110611a07579061195684611396959493039160018060a01b03165f525f60205260405f2090565b5581600254036002555f817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180602081018782520390a380156119ef575b6119a86119a3836120ff565b6121d1565b50505f908152600860205260408120549080527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b039081169116611e01565b611a006119fb836120ff565b61219c565b5050611997565b63391434e360e21b5f526001600160a01b03909116600452602452604482905260645ffd5b6001600160a01b038181165f81815260086020526040812080548685166001600160a01b03198216811790925561139696941694611aa79390928691907f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a46001600160a01b03165f9081526020819052604090205490565b91611e01565b80549081611abb5750505f90565b815f19810111610656575f525f199060205f2001015460301c90565b604290611ae2611719565b906040519161190160f01b8352600283015260228201522090565b916102f89391610dd393611fba565b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af160015f5114811615611b69575b60409190915215611b4e5750565b635274afe760e01b5f526001600160a01b031660045260245ffd5b6001811516611b7f573d15833b15151616611b40565b503d5f823e3d90fd5b6001600160a01b0316908115611471576001600160a01b03811692831561145e5780611bf07f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593855f52600160205260405f209060018060a01b03165f5260205260405f2090565b55604051908152602090a3565b65ffffffffffff8111611c155765ffffffffffff1690565b6306dfcc6560e41b5f52603060045260245260445ffd5b8115611c36570490565b634e487b7160e01b5f52601260045260245ffd5b60018111156102f857806001600160801b821015611d6b575b611d11611d07611cfd611cf3611ce9611cdf611cce611d189760048a600160401b611d1d9c1015611d5e575b640100000000811015611d51575b62010000811015611d44575b610100811015611d37575b6010811015611d2a575b1015611d22575b60030260011c90565b611cd8818b611c2c565b0160011c90565b611cd8818a611c2c565b611cd88189611c2c565b611cd88188611c2c565b611cd88187611c2c565b611cd88186611c2c565b8093611c2c565b821190565b900390565b60011b611cc5565b60041c9160021b91611cbe565b60081c9160041b91611cb4565b60101c9160081b91611ca9565b60201c9160101b91611c9d565b60401c9160201b91611c8f565b5050611d1d611d18611d11611d07611cfd611cf3611ce9611cdf611cce611d928a60801c90565b9850600160401b9750611c639650505050505050565b905b838310611db75750505090565b90919280841860011c8185160190835f5265ffffffffffff8260205f2001541665ffffffffffff8416105f14611df15750925b9190611daa565b9350611dfc9061136c565b611dea565b6001600160a01b03808316939291908116908185141580611f1a575b611e29575b5050505050565b81611ead575b505082611e3e575b8080611e22565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72491611e8a91611e8490916120ff565b90612168565b604080516001600160d01b039384168152919092166020820152a25f8080611e37565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72490611ef890611ef2866120ff565b90612130565b604080516001600160d01b039384168152919092166020820152a25f80611e2f565b50831515611e1d565b60ff8114611f695760ff811690601f8211611f5a5760405191611f4760408461134a565b6020808452838101919036833783525290565b632cd44ac360e21b5f5260045ffd5b506040516102f881611f7c816005611294565b038261134a565b60ff8114611fa75760ff811690601f8211611f5a5760405191611f4760408461134a565b506040516102f881611f7c816006611294565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411612031579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15611243575f516001600160a01b0381161561202757905f905f90565b505f906001905f90565b5050505f9160039190565b6004111561204657565b634e487b7160e01b5f52602160045260245ffd5b6120638161203c565b8061206c575050565b6120758161203c565b6001810361208c5763f645eedf60e01b5f5260045ffd5b6120958161203c565b600281036120b0575063fce698f760e01b5f5260045260245ffd5b806120bc60039261203c565b146120c45750565b6335e2f38360e21b5f5260045260245ffd5b80548210156120eb575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b6001600160d01b038111612119576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b9061213a43611bfd565b9061214483611aad565b6001600160d01b0391821690821603919082116106565761216492612350565b9091565b9061217243611bfd565b9061217c83611aad565b6001600160d01b0391821690821601919082116106565761216492612350565b6121a543611bfd565b906121b0600a611aad565b6001600160d01b03918216908216019081116106565761216491600a612350565b6121da43611bfd565b906121e5600a611aad565b6001600160d01b03918216908216039081116106565761216491600a612350565b90611396916122176119fb836120ff565b50506001600160a01b0316801561226c575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116611e01565b6122786119a3836120ff565b5050612229565b61139692916001600160a01b039091169081156122e2575b6001600160a01b03169081156122cf575b5f90815260086020526040808220549282529020546001600160a01b039081169116611e01565b6122db6119a3846120ff565b50506122a8565b6122ee6119fb846120ff565b5050612297565b8054600160401b81101561134557612312916001820181556120d6565b61233d57815160209092015160301b65ffffffffffff191665ffffffffffff92909216919091179055565b634e487b7160e01b5f525f60045260245ffd5b805492939280156123fc57612367612372916118f6565b825f5260205f200190565b8054603081901c9365ffffffffffff918216929181168084116123ed578793036123b957506123b592509065ffffffffffff82549181199060301b169116179055565b9190565b9150506123b5916123d96123cb611387565b65ffffffffffff9093168352565b6001600160d01b03861660208301526122f5565b632520601d60e01b5f5260045ffd5b50906124219161240d6123cb611387565b6001600160d01b03851660208301526122f5565b5f919056fea264697066735822122030ff7dfa2280130fe2a428ff9793cea8c728e3e59076bc809a4cf8c2a913725d64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a7df7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76f70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
      "bytecode": "0x6080346100af57601f612e7f38819003918201601f19168301916001600160401b038311848410176100b35780849260409485528339810103126100af5761007f610055602061004e846100c7565b93016100c7565b9160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556100db565b50600180546001600160a01b0319166001600160a01b0392909216919091179055604051612cfa90816101658239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100af57565b6001600160a01b0381165f9081525f516020612e5f5f395f51905f52602052604090205460ff1661015f576001600160a01b03165f8181525f516020612e5f5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c90816301ffc9a714611ce557508063025f75ac14611bed5780630412619614611ba9578063150b7a0214611a00578063248a9ca3146119ce5780632f2ff15d146119915780632f3ef602146116bc5780632ff1d0f91461168a578063358d48d9146115db57806335f81b871461134157806336568abe146112fc578063380ff999146112b35780635daa63c7146110945780636f39becd146110485780637b1039991461101f5780637b606fdc14610f3157806381bd34d214610ee857806391d1485414610e9f578063a217fddf14610e83578063bc197c8114610c37578063c10e515314610b7b578063c2fe518514610948578063c555abb4146105ea578063d547741f146105a3578063d6bd07ee14610568578063d742385814610548578063e086e5ec146104b7578063f07a380e14610475578063f23a6e61146102745763f4f3b2000361000f573461027157602036600319011261027157610187611d98565b61018f612676565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa908115610266578391610230575b506040519063a9059cbb60e01b84523360045260245260208360448180865af1906001845114821615610210575b50156101fe575080f35b635274afe760e01b8252600452602490fd5b60018215166102285750813b15153d1516165f6101f4565b3d84823e3d90fd5b90506020813d60201161025e575b8161024b60209383611dda565b8101031261025a57515f6101c6565b5f80fd5b3d915061023e565b6040513d85823e3d90fd5b80fd5b50346102715760a03660031901126102715761028e611d98565b610296611dae565b6044359160643591608435906001600160401b038211610471576024926102c46102d2933690600401611e2a565b916102cd6121c2565b612485565b3386526003602052604086208587526020526040862060018060a01b0383165f5260205260405f20610305858254611f89565b9055801561046a576103179042611f89565b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f2054811161043b575b506001546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561043057604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3594889161040e575b5001519533815260056020528181208682526020522060018060a01b0382165f5260205260405f2054906103e860405192839260018060a01b0316973396846121a0565b0390a460015f516020612c855f395f51905f525560405163f23a6e6160e01b8152602090f35b61042a91503d808a833e6104228183611dda565b810190611ffd565b5f6103a4565b6040513d87823e3d90fd5b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f610347565b5084610317565b8580fd5b5034610271576040366003190112610271576104a3610492611d98565b61049a6121c2565b60243590612932565b60015f516020612c855f395f51905f525580f35b50346102715780600319360112610271576104d0612676565b8080808047335af13d15610543573d6104e881611e0f565b906104f66040519283611dda565b81528260203d92013e5b156105085780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b610500565b5034610271576104a361055a36611e70565b916105636121c2565b612ac2565b5034610271576080366003190112610271576104a3610585611d98565b61058d611d82565b906105966121c2565b6044359060243590612246565b5034610271576040366003190112610271576105e66004356105c3611dae565b906105e16105dc825f525f602052600160405f20015490565b6126c5565b612a42565b5080f35b50346102715760a036600319011261027157610604611d98565b906024356001600160401b03811161094457610624903690600401611d52565b90926044356001600160401b03811161094057610645903690600401611d52565b949092610650611d82565b9060843561065c6121c2565b610667888314611f11565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa80156109355789906108f6575b6106b291509491946121fa565b6001600160a01b039093169233885b8481106107d1575050509686978015155f146107b25760408051336020820152908101919091526106ff81606081015b03601f198101835282611dda565b945b833b156107ae5761076a88966107586107469989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612168565b86810360031901606488015291612168565b838103600319016084850152906120a8565b03925af180156107a35761078e575b5060015f516020612c855f395f51905f525580f35b8161079891611dda565b61027157805f610779565b6040513d84823e3d90fd5b8780fd5b50604051336020820152602081526107cb604082611dda565b94610701565b808b6107ec826107e46001958a8d611f51565b35928d611f51565b3590888d5260036020528c8160408220915260205260408d20855f5260205261081b8260405f205410156120cc565b888d5260056020528c8160408220915260205260408d20855f5260205261084860405f205442101561210f565b888d5260036020528c8160408220915260205260408d20855f5260205260405f2061087483825461215b565b9055888d5260036020528c8160408220915260205260408d20855f5260205260405f2054156108ce575b604080519283526001600160a01b038716602084015233928a915f516020612ca55f395f51905f5291a4016106c1565b888d5260056020528c8160408220915260205260408d20855f526020528c60405f205561089e565b506020813d60201161092d575b8161091060209383611dda565b81010312610929576109246106b291611faa565b6106a5565b8880fd5b3d9150610903565b6040513d8b823e3d90fd5b8380fd5b5080fd5b503461027157608036600319011261027157610962611d98565b60243561096d611dc4565b91836064359161097b6121c2565b60018060a01b0316918282526002602052604082208483526020526109ad60018060a01b0360408420541633146128f6565b60015460405163b9209e3360e01b81526001600160a01b039687166004820181905296909160209183916024918391165afa8015610266578390610b3c575b6109f691506121fa565b828252600460205260408220848352602052610a18604083205442101561210f565b828252600260209081526040808420868552825280842080546001600160a01b03191690558484526004825280842086855290915282208290558015610b1e576040805133602082015290810191909152610a7681606081016106f1565b823b156109445781610ab69160405180938192635c46a7ef60e11b83523060048401528960248401528860448401526080606484015260848301906120a8565b038183875af180156107a357610b09575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f516020612c855f395f51905f525580f35b81610b1391611dda565b61094057835f610ac7565b5060405133602082015260208152610b37604082611dda565b610a76565b506020813d602011610b73575b81610b5660209383611dda565b81010312610b6f57610b6a6109f691611faa565b6109ec565b8280fd5b3d9150610b49565b5034610271576060366003190112610271576004356001600160401b03811161094457610bac903690600401611d52565b6024356001600160401b03811161094057610bcb903690600401611d52565b610bd3611dc4565b92610bdc6121c2565b610be7828214611f11565b855b818110610c05578660015f516020612c855f395f51905f525580f35b80610c3186610c1f610c1a600195878c611f51565b611f75565b610c2a84888a611f51565b3590612ac2565b01610be9565b50346102715760a036600319011261027157610c51611d98565b610c59611dae565b916044356001600160401b03811161094457610c79903690600401611eaa565b926064356001600160401b038111610b6f57610c99903690600401611eaa565b926084356001600160401b03811161094057906102c4610cbe93923690600401611e2a565b9092908015610e7c57610cd19042611f89565b6001546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa908115610e7157906040918591610e57575b50015192805b8651811015610e345780610d2a6001928961218c565b51610d35828761218c565b519033855260036020526040852081865260205260408520848060a01b038a165f5260205260405f20610d69838254611f89565b905533855260056020526040852081865260205260408520848060a01b038a165f5260205260405f20548611610e06575b33855260056020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3560405180610dfd8d898060a01b0316968d3396846121a0565b0390a401610d14565b33855260056020526040852081865260205260408520848060a01b038a165f526020528560405f2055610d9a565b60015f516020612c855f395f51905f525560405163bc197c8160e01b8152602090f35b610e6b91503d8087833e6104228183611dda565b5f610d0e565b6040513d86823e3d90fd5b5081610cd1565b5034610271578060031936011261027157602090604051908152f35b5034610271576040366003190112610271576040610ebb611dae565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b5034610271576040610ef936611e70565b939160018060a01b031682526003602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b5034610271576060366003190112610271576004356001600160401b03811161094457610f62903690600401611d52565b6024356001600160401b03811161094057610f81903690600401611d52565b6044929192356001600160401b03811161047157610fa3903690600401611d52565b919092610fae6121c2565b81811480611016575b610fc090611f11565b865b818110610fde578760015f516020612c855f395f51905f525580f35b80611010610ff2610c1a600194868c611f51565b610ffd83878b611f51565b3561100984898b611f51565b3591612785565b01610fc2565b50818314610fb7565b50346102715780600319360112610271576001546040516001600160a01b039091168152602090f35b5034610271576040366003190112610271576020906001600160a01b0361106d611d98565b168152600282526040812060243582528252604060018060a01b0391205416604051908152f35b5034610271576060366003190112610271576110ae611d98565b906024356001600160401b038111610944576110ce903690600401611d52565b6044356001600160401b038111610940576110ed903690600401611d52565b9290916110f86121c2565b611103848214611f11565b33956001600160a01b031690855b8181106111915750859650813b156104715785602061115e829661074698604051998a988997631759616b60e11b89523060048a01523360248a015260a060448a015260a4890191612168565b8284820391600319830160848701525201925af180156107a35761078e575060015f516020612c855f395f51905f525580f35b8061119f6001928487611f51565b356111ab828989611f51565b3590858a52600360205260408a20818b5260205260408a208b5f526020526111d98260405f205410156120cc565b858a52600560205260408a20818b5260205260408a208b5f5260205261120560405f205442101561210f565b858a52600360205260408a20818b5260205260408a208b5f5260205260405f2061123083825461215b565b9055858a52600360205260408a20818b5260205260408a208b5f5260205260405f20541561128c575b604051918252857fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a401611111565b858a52600560205260408a20818b5260205260408a208b5f526020528960405f2055611259565b50346102715760406112c436611e70565b939160018060a01b031682526005602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b503461027157604036600319011261027157611316611dae565b336001600160a01b03821603611332576105e690600435612a42565b63334bd91960e11b8252600482fd5b50346102715760a03660031901126102715761135b611d98565b6024356044359161136a611d82565b84608435926113776121c2565b6001600160a01b03168082526003602090815260408084208785528252808420335f90815292529020549093906113b0908711156120cc565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052939260209183916024918391165afa8015610e715784906115a0575b6113f891506121fa565b8483526005602090815260408085208886528252808520335f90815292529020546114259042101561210f565b8483526003602052604083208684526020526040832060018060a01b0333165f5260205260405f2061145888825461215b565b90558483526003602090815260408085208886528252808520335f908152925290205415611578575b80156115595760408051336020820152908101919091526114a581606081016106f1565b905b843b15610b6f576114ee9183916040519384928392637921219560e11b845230600485015260248401528960448401528a606484015260a0608484015260a48301906120a8565b038183885af180156107a357611540575b5050604080519485526001600160a01b0391909116602085015233935f516020612ca55f395f51905f529190a460015f516020612c855f395f51905f525580f35b8161154a91611dda565b61155557845f6114ff565b8480fd5b5060405133602082015260208152611572604082611dda565b906114a7565b8483526005602090815260408085208886528252808520335f90815292529020839055611481565b506020813d6020116115d3575b816115ba60209383611dda565b81010312610940576115ce6113f891611faa565b6113ee565b3d91506115ad565b5034610271576040366003190112610271576004356001600160401b0381116109445761160c903690600401611d52565b6024356001600160401b0381116109405761162b903690600401611d52565b90916116356121c2565b611640828214611f11565b845b81811061165e578560015f516020612c855f395f51905f525580f35b80611684611672610c1a600194868a611f51565b61167d838789611f51565b3590612932565b01611642565b5034610271576060366003190112610271576104a36116a7611d98565b6116af6121c2565b6044359060243590612785565b503461025a57608036600319011261025a576116d6611d98565b6024356001600160401b03811161025a576116f5903690600401611d52565b91906044356001600160401b03811161025a57611716903690600401611d52565b9093611720611d82565b916117296121c2565b611734818314611f11565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa801561182c575f90611956575b61177f91509491946121fa565b6001600160a01b0390931692335f5b8481106118375750505060405194336020870152602086526117b1604087611dda565b833b1561025a576117f65f966107586107469989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612168565b03925af1801561182c57611819575060015f516020612c855f395f51905f525580f35b61182591505f90611dda565b5f5f610779565b6040513d5f823e3d90fd5b80611845600192878a611f51565b3561185182878d611f51565b3590885f52600360205260405f20815f5260205260405f20855f5260205261187f8260405f205410156120cc565b885f52600560205260405f20815f5260205260405f20855f526020526118ab60405f205442101561210f565b885f52600360205260405f20815f5260205260405f20855f5260205260405f206118d683825461215b565b9055885f52600360205260405f20815f5260205260405f20855f5260205260405f20541561192f575b604080519283526001600160a01b038716602084015233928a915f516020612ca55f395f51905f5291a40161178e565b885f52600560205260405f20815f5260205260405f20855f526020525f60408120556118ff565b506020813d602011611989575b8161197060209383611dda565b8101031261025a5761198461177f91611faa565b611772565b3d9150611963565b3461025a57604036600319011261025a5761001a6004356119b0611dae565b906119c96105dc825f525f602052600160405f20015490565b6126fd565b3461025a57602036600319011261025a5760206119f86004355f525f602052600160405f20015490565b604051908152f35b3461025a57608036600319011261025a57611a19611d98565b611a21611dae565b9060443591606435916001600160401b03831161025a576102c4611a49933690600401611e2a565b335f908152600260209081526040808320868452909152902080546001600160a01b0319166001600160a01b0390931692831790559091908015611ba257611a919042611f89565b335f52600460205260405f20825f5260205260405f20548111611b85575b506001546040516390229af760e01b8152306004820152905f90829060249082906001600160a01b03165afa801561182c576040915f91611b6b575b500151335f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad360405f205491611b3c604051916040835260408301906120a8565b9260208201528033930390a460015f516020612c855f395f51905f5255604051630a85bd0160e11b8152602090f35b611b7f91503d805f833e6104228183611dda565b84611aeb565b335f52600460205260405f20825f5260205260405f205582611aaf565b505f611a91565b3461025a57604036600319011261025a576001600160a01b03611bca611d98565b165f52600460205260405f206024355f52602052602060405f2054604051908152f35b3461025a57608036600319011261025a576004356001600160401b03811161025a57611c1d903690600401611d52565b906024356001600160401b03811161025a57611c3d903690600401611d52565b9190926044356001600160401b03811161025a57611c5f903690600401611d52565b9490611c69611d82565b92611c726121c2565b85811480611cdc575b611c8490611f11565b5f5b818110611ca05760015f516020612c855f395f51905f5255005b80611cd686898b611ccf85611cc781611cc08f60019b8d610c1a92611f51565b958d611f51565b35928a611f51565b3591612246565b01611c86565b50858714611c7b565b3461025a57602036600319011261025a576004359063ffffffff60e01b821680920361025a57602091637965db0b60e01b8114908115611d27575b5015158152f35b630271189760e51b811491508115611d41575b5083611d20565b6301ffc9a760e01b14905083611d3a565b9181601f8401121561025a578235916001600160401b03831161025a576020808501948460051b01011161025a57565b606435906001600160a01b038216820361025a57565b600435906001600160a01b038216820361025a57565b602435906001600160a01b038216820361025a57565b604435906001600160a01b038216820361025a57565b90601f801991011681019081106001600160401b03821117611dfb57604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b038111611dfb57601f01601f191660200190565b81601f8201121561025a57803590611e4182611e0f565b92611e4f6040519485611dda565b8284526020838301011161025a57815f926020809301838601378301015290565b606090600319011261025a576004356001600160a01b038116810361025a5790602435906044356001600160a01b038116810361025a5790565b9080601f8301121561025a578135916001600160401b038311611dfb578260051b9060405193611edd6020840186611dda565b845260208085019282010192831161025a57602001905b828210611f015750505090565b8135815260209182019101611ef4565b15611f1857565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b9190811015611f615760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b038116810361025a5790565b91908201809211611f9657565b634e487b7160e01b5f52601160045260245ffd5b5190811515820361025a57565b81601f8201121561025a57805190611fce82611e0f565b92611fdc6040519485611dda565b8284526020838301011161025a57815f9260208093018386015e8301015290565b60208183031261025a578051906001600160401b03821161025a570160808183031261025a5760405191608083018381106001600160401b03821117611dfb5760405261204982611faa565b8352602082015160ff8116810361025a57602084015260408201516001600160401b03811161025a578161207e918401611fb7565b604084015260608201516001600160401b03811161025a576120a09201611fb7565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b156120d357565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561211657565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b91908203918211611f9657565b81835290916001600160fb1b03831161025a5760209260051b809284830137010190565b8051821015611f615760209160051b010190565b9392916121bd9060409286526060602087015260608601906120a8565b930152565b60025f516020612c855f395f51905f5254146121eb5760025f516020612c855f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b1561220157565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b6001600160a01b03165f818152600360209081526040808320858452825280832033845290915290205492939192909190612283908511156120cc565b60015460405163b9209e3360e01b81526001600160a01b0383811660048301819052939260209183916024918391165afa801561182c575f90612436575b6122cb91506121fa565b5f83815260056020908152604080832087845282528083203384529091529020546122f89042101561210f565b825f52600360205260405f20845f5260205260405f2060018060a01b0333165f5260205260405f2061232b86825461215b565b90555f838152600360209081526040808320878452825280832033845290915290205415612410575b604051913360208401526020835261236d604084611dda565b833b1561025a576123b4925f916040519485928392637921219560e11b8452306004850152602484015288604484015289606484015260a0608484015260a48301906120a8565b038183875af190811561182c575f516020612ca55f395f51905f52926123fb92612400575b50604080519687526001600160a01b0390911660208701523395918291820190565b0390a4565b5f61240a91611dda565b5f6123d9565b5f8381526005602090815260408083208784528252808320338452909152812055612354565b506020813d602011612469575b8161245060209383611dda565b8101031261025a576124646122cb91611faa565b6122c1565b3d9150612443565b51906001600160a01b038216820361025a57565b6001600160a01b038116801593929184156126715750815b60015460405163b9209e3360e01b81526001600160a01b0394851660048201525f96909492939290911690602085602481855afa94851561182c575f95612635575b501591826125c6575b505083519260208403612549578115612541575b50156125285750816020918101031261025a576001600160a01b039061252490602001612471565b1691565b939250602080830192918201919091031261025a575190565b90505f6124fc565b604084939795941461255c575b50505050565b9395929450909281156125be575b50156125a45750816040918101031261025a57604061258b60208301612471565b9101516001600160a01b03909116915b5f808080612556565b92916020808201928201919091031261025a57519061259b565b90505f61256a565b602091925060246040518094819363b9209e3360e01b835260048301525afa90811561182c575f916125fb575b505f806124e8565b90506020813d60201161262d575b8161261660209383611dda565b8101031261025a5761262790611faa565b5f6125f3565b3d9150612609565b9094506020813d602011612669575b8161265160209383611dda565b8101031261025a5761266290611faa565b935f6124df565b3d9150612644565b61249d565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16156126ae57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156126e75750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff1661277f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b03165f81815260036020908152604080832085845282528083203384529091529020546127bb908411156120cc565b5f81815260056020908152604080832085845282528083203384529091529020546127e89042101561210f565b805f52600360205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f2061281b84825461215b565b90555f8181526003602090815260408083208584528252808320338452909152902054156128d0575b803b1561025a57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af1801561182c576128c0575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f6128ca91611dda565b5f612891565b5f8181526005602090815260408083208584528252808320338452909152812055612844565b156128fd57565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b6001600160a01b039081165f818152600260209081526040808320868452909152812054909392612965911633146128f6565b805f52600460205260405f20825f5260205261298760405f205442101561210f565b805f52600260205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055805f52600460205260405f20825f526020525f6040812055803b1561025a57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af1801561182c57612a2d575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b612a3a9193505f90611dda565b5f915f612a05565b5f818152602081815260408083206001600160a01b038616845290915290205460ff161561277f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b60018060a01b0316805f52600260205260405f20825f52602052612af360018060a01b0360405f20541633146128f6565b60015460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa801561182c575f90612c49575b612b3c91506121fa565b805f52600460205260405f20825f52602052612b5e60405f205442101561210f565b805f52600260205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055805f52600460205260405f20825f526020525f604081205560405133602082015260208152612bb9604082611dda565b813b1561025a575f612bf99160405180938192635c46a7ef60e11b83523060048401528860248401528760448401526080606484015260848301906120a8565b038183865af1801561182c57612c39575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f612c4391611dda565b5f612c0a565b506020813d602011612c7c575b81612c6360209383611dda565b8101031261025a57612c77612b3c91611faa565b612b32565b3d9150612c5656fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00d582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1a2646970667358221220db530c48a93254e5b403654fcff083968f682ed8e4eef5df4afa0fca5b9a7ba164736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034609157601f6104dc38819003918201601f19168301916001600160401b03831184841017609557808492604094855283398101031260915780516001600160a01b0381169190829003609157602001516001600160a01b038116919082900360915760018060a01b03195f5416175f5560018060a01b0319600154161760015560405161043290816100aa8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea2646970667358221220f369f199121f649040ffb89086e2d9178a30c7ff98ba1da895859adf279a774464736f6c634300081c0033"
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
              "name": "newAmounts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "newPrices",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "newExpiries",
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
      "bytecode": "0x60a03461010357601f61396c38819003918201601f19168301916001600160401b038311848410176101075780849260409485528339810103126101035780610056602061004f6100a49461011b565b920161011b565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600480546001600160a01b03191691831691909117905561012f565b5060405161379390816101b9823960805181818161067d015281816109060152818161099401528181611178015281816114750152818161203f01528181612297015281816124b4015281816135ff0152818161362901526136670152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820361010357565b6001600160a01b0381165f9081525f51602061394c5f395f51905f52602052604090205460ff166101b3576001600160a01b03165f8181525f51602061394c5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c806301340bc71461194d57806301ffc9a7146118f7578063058a56ac146117b55780630ad794ea146117135780631205fd001461165f578063161878e91461163d5780631b8e414614611532578063248a9ca3146115005780632e74ee72146114e15780632f2ff15d146114a45780633013ce2914611460578063326d0da01461134157806335659fb81461132457806336568abe146112e0578063373ce23b146112115780633bbb2806146111f257806346904840146111ca578063553637241461107457806361360aae14610fe35780636bd3a64b14610f7257806370cdec3d14610f18578063787dce3d14610e855780637889ab5014610df65780637c3ae2be14610dd957806391d1485414610d91578063a217fddf14610d77578063a7c546b314610ced578063b2ddee0614610c3b578063b3b8d36114610ad3578063c7fff7191461086b578063cddc1bc114610537578063d3f494cc146104cc578063d547741f1461048a578063d55a818514610468578063d898aaf214610433578063d996475714610419578063e086e5ec14610367578063e74b981b146102c8578063ef71f5411461027c5763f4f3b2000361000e5734610265576020366003190112610265576101ef611a79565b6101f7612aba565b6040516370a0823160e01b8152306004820152906001600160a01b0316602082602481845afa908115610271575f91610237575b6100189250339061212d565b90506020823d602011610269575b8161025260209383611d60565b810103126102655761001891519061022b565b5f80fd5b3d9150610245565b6040513d5f823e3d90fd5b34610265576020366003190112610265577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a335060206004356102bb612aba565b80600555604051908152a1005b34610265576020366003190112610265576102e1611a79565b6102e9612aba565b6001600160a01b0316801561033057600480546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc25f80a2005b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b34610265575f3660031901126102655761037f612aba565b5f80808047335af13d15610414573d6001600160401b03811161040057604051906103b4601f8201601f191660200183611d60565b81525f60203d92013e5b156103c557005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b634e487b7160e01b5f52604160045260245ffd5b6103be565b346102655761001861042a36611c9f565b92919091612f41565b346102655761045561044436611c9f565b92610450929192611f1d565b612237565b60015f51602061373e5f395f51905f5255005b346102655761045561047936611be7565b93610485939193611f1d565b612c6a565b34610265576040366003190112610265576100186004356104a9611a8f565b906104c76104c2825f525f602052600160405f20015490565b612b09565b612bc9565b34610265576104da36611c19565b9160018060a01b03165f52600160205260405f20905f5260205260405f209060018060a01b03165f52602052608060405f208054906001810154906003600282015491015491604051938452602084015260408301526060820152f35b346102655761054536611c19565b9161054e611f1d565b60018060a01b0316805f52600160205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f206040519061058b82611d45565b6105ba815480845260036001840154936020860194855260028101546040870152015460608501521515611e1e565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa908115610271575f9161084c575b501561072d57506040516331a9108f60e11b81526004810184905290602082602481865afa918215610271575f926106ec575b506106a191610637906001600160a01b03163314611ed1565b825f52600160205260405f20845f5260205260405f2060018060a01b0386165f5260205261067960405f2060035f918281558260018201558260028201550155565b51847f000000000000000000000000000000000000000000000000000000000000000061212d565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a460015f51602061373e5f395f51905f5255005b91506020823d602011610725575b8161070760209383611d60565b810103126102655761063761071e6106a193611ebd565b925061061e565b3d91506106fa565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa908115610271575f9161081d575b50156107e157604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610271575f916107ad575b506107a8906106a193511115611e7a565b610637565b90506020813d6020116107d9575b816107c860209383611d60565b8101031261026557516106a1610797565b3d91506107bb565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b61083f915060203d602011610845575b6108378183611d60565b810190611e62565b86610761565b503d61082d565b610865915060203d602011610845576108378183611d60565b866105eb565b346102655761087936611c9f565b92610882611f1d565b6001600160a01b03165f818152600160209081526040808320868452825280832033845290915290208054919291908115610a97576005548610610a52578515610a0e5782156109bf5760035f916108da60016121fa565b8781558460018201554260028201550155848181115f146109745761092a9161090291612c49565b30337f0000000000000000000000000000000000000000000000000000000000000000613026565b60405193845260208401525f60408401527f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be2260603394a460015f51602061373e5f395f51905f5255005b90808210610984575b505061092a565b6109b89161099191612c49565b337f000000000000000000000000000000000000000000000000000000000000000061212d565b838561097d565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601760248201527f4e65772070726963652062656c6f77206d696e696d756d0000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b3461026557610ae136611b35565b959790939491969288821480610c32575b80610c29575b80610c20575b610b0790611ccd565b5f5b828110610b1257005b6001600160a01b03610b25828a89611d0d565b610b2e90611d31565b161515610b3a90611d81565b610b4581848d611d0d565b610b4e90611d31565b610b59828c88611d0d565b35610b65838a88611d0d565b35610b71848d87611d0d565b3590610b7e858d8c611d0d565b610b8790611d31565b92610b9194612859565b610b9c81848d611d0d565b610ba590611d31565b610bb0828c88611d0d565b35610bbc838c86611d0d565b35610bc8848b89611d0d565b3590610bd5858d8c611d0d565b610bde90611d31565b6040805192835260208301939093526001600160a01b03908116928201929092523393909116905f51602061371e5f395f51905f5290606090a4600101610b09565b50878714610afe565b50878614610af8565b50858914610af2565b3461026557604036600319011261026557610c54611a79565b6001600160a01b03165f81815260026020908152604080832060243580855290835281842033855290925290912060010154610c91901515611dd9565b5f82815260026020818152604080842085855282528084203385529091528220828155600181018390559081018290556003015533917fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4005b346102655760a036600319011261026557610d06611a79565b6024356064356084356001600160a01b0381169060443582820361026557610d3d5f51602061371e5f395f51905f52931515611d81565b610d4a828583888a612859565b6040805194855260208501919091526001600160a01b03918216908401523394169180606081015b0390a4005b34610265575f3660031901126102655760206040515f8152f35b3461026557604036600319011261026557610daa611a8f565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610265575f366003190112610265576020600554604051908152f35b3461026557610e0436611a07565b929194610e0f611f1d565b85851480610e7c575b610e2190611ccd565b5f5b858110610e3d5760015f51602061373e5f395f51905f5255005b80610e76610e56610e516001948a87611d0d565b611d31565b610e61838b89611d0d565b35610e70610e51858b8a611d0d565b91612d63565b01610e23565b50858414610e18565b3461026557602036600319011261026557600435610ea1612aba565b6103e88111610edb576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600355604051908152a1005b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b34610265575f51602061371e5f395f51905f52610d72610f3736611c9f565b9294919390610f488482878961256b565b6040805194855260208501919091525f9084015233946001600160a01b0316929081906060820190565b3461026557610f8036611c19565b6001600160a01b039283165f90815260026020818152604080842095845294815284832093861683529283529083902080546001820154928201546003909201548551918716825293810192909252928101929092529091166060820152608090f35b3461026557610ff136611aa5565b9596848896959694939294148061106b575b80611062575b61101290611ccd565b5f5b88811061101d57005b8061105c611031610e516001948d87611d0d565b8a61103d848c8c611d0d565b356110558561104d818b8d611d0d565b35938c611d0d565b3592612f41565b01611014565b50818714611009565b50818614611003565b346102655761108236611c53565b929061108c611f1d565b611097848414611ccd565b33915f5b8481106110b55760015f51602061373e5f395f51905f5255005b806110c6610e516001938886611d0d565b6110d1828987611d0d565b3590838060a01b031690815f528360205260405f20815f5260205260405f20875f5260205260405f206040519061110782611d45565b60038154918284528781015460208501526002810154604085015201546060830152611137575b5050500161109b565b61119c90835f528560205260405f20835f5260205260405f20895f5260205261117460405f2060035f918281558260018201558260028201550155565b51337f000000000000000000000000000000000000000000000000000000000000000061212d565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a487808061112e565b34610265575f366003190112610265576004546040516001600160a01b039091168152602090f35b346102655761045561120336611c19565b9161120c611f1d565b612d63565b346102655761121f36611b35565b611230989297969195939498611f1d565b818314806112d7575b806112ce575b806112c5575b61124e90611ccd565b5f5b83811061126a5760015f51602061373e5f395f51905f5255005b806112bf8989898f8f8f97896112b1828f959b8f8f6112b89760019f85809361129d610e51836112aa986112a396611d0d565b9f611d0d565b3599611d0d565b3597611d0d565b3595611d0d565b3593612c6a565b01611250565b50878114611245565b5087891461123f565b50888214611239565b34610265576040366003190112610265576112f9611a8f565b336001600160a01b038216036113155761001890600435612bc9565b63334bd91960e11b5f5260045ffd5b34610265575f366003190112610265576020600354604051908152f35b346102655761134f36611c53565b61135c8184959414611ccd565b335f5b85811061136857005b6001906001600160a01b03611381610e51838a8a611d0d565b165f52600260205260405f20611398828688611d0d565b355f5260205260405f20835f526020528160405f2001546113ba575b0161135f565b818060a01b036113ce610e51838a8a611d0d565b165f52600260205260405f206113e5828688611d0d565b355f5260205260405f20835f5260205261141360405f2060035f918281558260018201558260028201550155565b611421610e51828989611d0d565b339061142e838789611d0d565b3590848060a01b03167fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a46113b4565b34610265575f366003190112610265576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610265576040366003190112610265576100186004356114c3611a8f565b906114dc6104c2825f525f602052600160405f20015490565b612b41565b34610265576104556114f236611c19565b916114fb611f1d565b611f55565b3461026557602036600319011261026557602061152a6004355f525f602052600160405f20015490565b604051908152f35b346102655761154036611aa5565b84879398979592951480611634575b8061162b575b61155e90611ccd565b5f5b83811061156957005b8087878b5f51602061371e5f395f51905f526116226115f9868f818b8f8f9c8f6115e460019f838f918f998f610e51946115f19c6115ea9a6115d8878e6115d1826115df988f826115ca916115c48f8f610e51918591611d0d565b9b611d0d565b3596611d0d565b3594611d0d565b359261256b565b611d0d565b9c611d0d565b3598611d0d565b35948d611d0d565b3560405191829133978a8060a01b031695836040905f9294936060820195825260208201520152565b0390a401611560565b50878114611555565b5087821461154f565b346102655761045561164e36611be7565b9361165a939193611f1d565b612428565b346102655761166d36611b35565b61167e989297969195939498611f1d565b8183148061170a575b80611701575b806116f8575b61169c90611ccd565b5f5b8381106116b85760015f51602061373e5f395f51905f5255005b806116f28989898f8f8f97896112b1828f959b8f8f6116eb9760019f85809361129d610e51836112aa986112a396611d0d565b3593612428565b0161169e565b50878114611693565b5087891461168d565b50888214611687565b346102655761172136611aa5565b959661173295949593929193611f1d565b858814806117ac575b806117a3575b61174a90611ccd565b5f5b8881106117665760015f51602061373e5f395f51905f5255005b8061179d61177a610e516001948d87611d0d565b8a611786848c8c611d0d565b356117968561104d818b8d611d0d565b3592612237565b0161174c565b50818714611741565b5081861461173b565b34610265576040366003190112610265576117ce611a79565b602435906117da611f1d565b6001600160a01b03165f81815260016020908152604080832085845282528083203384529091529081902090519192919061181482611d45565b6003815491828452600181015460208501526002810154604085015201546060830152156118b2575f83815260016020818152604080842086855282528084203385529091528220828155908101829055600281018290556003015561187990611174565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f51602061373e5f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b346102655760203660031901126102655760043563ffffffff60e01b811680910361026557602090637965db0b60e01b811490811561193c575b506040519015158152f35b6301ffc9a760e01b14905082611931565b346102655761195b36611a07565b929194611966611f1d565b858514806119ce575b61197890611ccd565b5f5b8581106119945760015f51602061373e5f395f51905f5255005b806119c86119a8610e516001948a87611d0d565b6119b3838b89611d0d565b356119c2610e51858b8a611d0d565b91611f55565b0161197a565b5085841461196f565b9181601f84011215610265578235916001600160401b038311610265576020808501948460051b01011161026557565b6060600319820112610265576004356001600160401b0381116102655781611a31916004016119d7565b929092916024356001600160401b0381116102655781611a53916004016119d7565b92909291604435906001600160401b03821161026557611a75916004016119d7565b9091565b600435906001600160a01b038216820361026557565b602435906001600160a01b038216820361026557565b6080600319820112610265576004356001600160401b0381116102655781611acf916004016119d7565b929092916024356001600160401b0381116102655781611af1916004016119d7565b929092916044356001600160401b0381116102655781611b13916004016119d7565b92909291606435906001600160401b03821161026557611a75916004016119d7565b60a0600319820112610265576004356001600160401b0381116102655781611b5f916004016119d7565b929092916024356001600160401b0381116102655781611b81916004016119d7565b929092916044356001600160401b0381116102655781611ba3916004016119d7565b929092916064356001600160401b0381116102655781611bc5916004016119d7565b92909291608435906001600160401b03821161026557611a75916004016119d7565b60a0906003190112610265576004356001600160a01b0381168103610265579060243590604435906064359060843590565b6060906003190112610265576004356001600160a01b03811681036102655790602435906044356001600160a01b03811681036102655790565b6040600319820112610265576004356001600160401b0381116102655781611c7d916004016119d7565b92909291602435906001600160401b03821161026557611a75916004016119d7565b6080906003190112610265576004356001600160a01b03811681036102655790602435906044359060643590565b15611cd457565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b9190811015611d1d5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102655790565b608081019081106001600160401b0382111761040057604052565b90601f801991011681019081106001600160401b0382111761040057604052565b15611d8857565b60405162461bcd60e51b8152602060048201526024808201527f507269766174652062757965722063616e6e6f74206265207a65726f206164646044820152637265737360e01b6064820152608490fd5b15611de057565b60405162461bcd60e51b8152602060048201526016602482015275131a5cdd1a5b99c8191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b15611e2557565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b90816020910312610265575180151581036102655790565b15611e8157565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b51906001600160a01b038216820361026557565b15611ed857565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b60025f51602061373e5f395f51905f525414611f465760025f51602061373e5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b6001600160a01b038181165f8181526002602090815260408083208784528252808320948816835293905282902091519092611f9082611d45565b82546001600160a01b0390811683526001840154602084018181526002860154604086019081526003909601549092166060909401938452909290611fd6901515611dd9565b516001600160a01b03168015908115612123575b50156120bf5761207b90845f52600260205260405f20865f5260205260405f2060018060a01b0388165f5260205261203660405f2060035f918281558260018201558260028201550155565b612063835130337f0000000000000000000000000000000000000000000000000000000000000000613026565b6120718451338989856130e9565b8686845192613561565b519051906040519460018060a01b03168552602085015260408401527f110d72c9f92ff669bf5211e868578c38dff8ce680bdf8b69ad34a1c5c106829860603394a4565b60405162461bcd60e51b815260206004820152603660248201527f50726976617465206c697374696e673a206f6e6c7920746865207370656369666044820152756965642062757965722063616e20707572636861736560501b6064820152608490fd5b905033145f611fea565b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f511482161561218d575b6040521561216d5750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b9060018115166121a557823b15153d15161690612162565b503d5f823e3d90fd5b156121b557565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b1561220157565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642065787069727960901b6044820152606490fd5b91909160055484106123e3578315612393576122548215156121ae565b61225e60016121fa565b6001600160a01b03165f8181526001602090815260408083208684528252808320338452909152902054909190612357576122bb8430337f0000000000000000000000000000000000000000000000000000000000000000613026565b6040516122c781611d45565b8481526003602082018381526040830142815260608401915f8352865f52600160205260405f20885f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015560405193845260208401525f60408401527f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab60603394a4565b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4f666665722070726963652062656c6f77206d696e696d756d000000000000006044820152606490fd5b939190929360055485106123e3578415612393576124478215156121ae565b82158015612562575b612459906121fa565b6001600160a01b03165f8181526001602090815260408083208784528252808320338452909152902054909290612357577f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab916124d88630337f0000000000000000000000000000000000000000000000000000000000000000613026565b6040516124e481611d45565b868152600360208201838152604083014281526060840191868352885f52600160205260405f208a5f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015561255d6040519283923398846040919493926060820195825260208201520152565b0390a4565b50428311612450565b929190928215612814576125808215156121ae565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169190602081602481865afa908115610271575f916127f5575b501561272457600181036126d5576040516331a9108f60e11b81526004810185905292602084602481865afa938415610271575f94612695575b50600393612611906001600160a01b03163314611ed1565b6040519461261e86611d45565b33808752602080880193845260408089019586525f60608a018181529781526002808452828220958252948352818120938152929091529020955186546001600160a01b039182166001600160a01b0319918216178855925160018801559251908601559151929093018054929093169116179055565b93506020843d6020116126cd575b816126b060209383611d60565b81010312610265576126116126c6600395611ebd565b94506125f9565b3d91506126a3565b60405162461bcd60e51b815260206004820152602160248201527f455243373231206c697374696e67206d757374206861766520616d6f756e74206044820152603160f81b6064820152608490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481865afa908115610271575f916127d6575b50156107e157604051627eeac760e11b81523360048201526024810185905292602084604481865afa938415610271575f946127a0575b5061279b826003951015611e7a565b612611565b93506020843d6020116127ce575b816127bb60209383611d60565b810103126102655792519261279b61278c565b3d91506127ae565b6127ef915060203d602011610845576108378183611d60565b5f612755565b61280e915060203d602011610845576108378183611d60565b5f6125bf565b60405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e2030000000006044820152606490fd5b939190929384156128145761286f8215156121ae565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169490602081602481895afa908115610271575f91612a9b575b50156129ca57600182036126d5576040516331a9108f60e11b81526004810185905293602085602481895afa948515610271575f9561298a575b50600394612900906001600160a01b03163314611ed1565b6040519561290d87611d45565b3380885260208089019485526040808a019687526001600160a01b0397881660608b019081525f948552600280845282862096865295835281852093855292909152909120965187546001600160a01b03199081169187169190911788559251600188015592519086015590519290930180549093169116179055565b94506020853d6020116129c2575b816129a560209383611d60565b81010312610265576129006129bb600396611ebd565b95506128e8565b3d9150612998565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481895afa908115610271575f91612a7c575b50156107e157604051627eeac760e11b81523360048201526024810185905293602085604481895afa948515610271575f95612a46575b50612a41836003961015611e7a565b612900565b94506020853d602011612a74575b81612a6160209383611d60565b8101031261026557935193612a41612a32565b3d9150612a54565b612a95915060203d602011610845576108378183611d60565b5f6129fb565b612ab4915060203d602011610845576108378183611d60565b5f6128ae565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615612af257565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615612b2b5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16612bc3575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615612bc3575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b91908203918211612c5657565b634e487b7160e01b5f52601160045260245ffd5b6001600160a01b03165f8181526001602090815260408083208584528252808320338452909152902080549495929491939092918015610a97576005548710610a52578615610a0e5781156109bf578260037f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be229582158015612d5a575b612cf0906121fa565b8981558460018201554260028201550155868181115f14612d3657612d189161090291612c49565b6040805196875260208701919091528501523393806060810161255d565b90808210612d46575b5050612d18565b612d539161099191612c49565b855f612d3f565b50428311612ce7565b6001600160a01b038181165f81815260016020908152604080832087845282528083209488168352939052829020915191949092612da083611d45565b8554808452612dd2600360018901549860208701998a5260028101546040880152015491606086019283521515611e1e565b518015908115612f36575b5015612f0157612e37612e6b92855f52600160205260405f20875f5260205260405f2060018060a01b0382165f52602052612e2c60405f2060035f918281558260018201558260028201550155565b8751903388856130e9565b5f8481526002602090815260408083208884528252808320338452909152902060010154612ea1575b825190853391613561565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a4565b5f8481526002602081815260408084208985528252808420338552909152822082815560018101839055908101829055600301553385857fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4612e60565b60405162461bcd60e51b815260206004820152600d60248201526c13d999995c88195e1c1a5c9959609a1b6044820152606490fd5b90504211155f612ddd565b90917f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd9060018060a01b03831692835f52600260205260405f20855f5260205260405f2060018060a01b0333165f52602052612ffd60405f2091612fe660405193612fab85611d45565b80546001600160a01b039081168652600182015460208701819052600283015460408801526003909201541660609095019485521515611dd9565b82516001600160a01b031690889085908990612859565b516040805196875260208701929092526001600160a01b0316908501523393806060810161255d565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f5114821615613077575b6040525f6060521561216d5750565b9060018115166121a557823b15153d15161690613068565b1561309657565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201525f95929493926001600160a01b039092169190602081602481865afa908115610271575f91613542575b501561339d57600103613359576040516331a9108f60e11b81526004810185905291602083602481855afa9283156132ae57869361331d575b506001600160a01b0381811693168390036132d85760405163e985e9c560e01b81526001600160a01b03919091166004820152306024820152602081604481855afa9081156132ae5786916132b9575b508015613232575b6131c79061308f565b803b1561322e57849291836064926040519687958694632142170760e11b8652600486015260018060a01b0316602485015260448401525af180156132235761320e575050565b613219828092611d60565b6132205750565b80fd5b6040513d84823e3d90fd5b8480fd5b5060405163020604bf60e21b815260048101859052602081602481855afa80156132ae57869061326f575b6001600160a01b0316301490506131be565b506020813d6020116132a6575b8161328960209383611d60565b810103126132a25761329d6131c791611ebd565b61325d565b8580fd5b3d915061327c565b6040513d88823e3d90fd5b6132d2915060203d602011610845576108378183611d60565b5f6131b6565b60405162461bcd60e51b815260206004820152601d60248201527f46726f6d206164647265737320646f6573206e6f74206f776e204e46540000006044820152606490fd5b9092506020813d602011613351575b8161333960209383611d60565b810103126132a25761334a90611ebd565b915f613166565b3d915061332c565b606460405162461bcd60e51b815260206004820152602060248201527f455243373231207472616e7366657220616d6f756e74206d75737420626520316044820152fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b600482015294955093909190602081602481865afa908115610271575f91613523575b50156107e157604051627eeac760e11b81526001600160a01b038216600482015260248101869052602081604481865afa80156102715785905f906134ed575b61342192501015611e7a565b60405163e985e9c560e01b81526001600160a01b0382166004820152306024820152602081604481865afa801561027157613463915f916134ce575b5061308f565b813b15610265575f60c49281956040519788968795637921219560e11b875260018060a01b0316600487015260018060a01b031660248601526044850152606484015260a060848401528160a48401525af18015610271576134c25750565b5f6134cc91611d60565b565b6134e7915060203d602011610845576108378183611d60565b5f61345d565b50506020813d60201161351b575b8161350860209383611d60565b8101031261026557846134219151613415565b3d91506134fb565b61353c915060203d602011610845576108378183611d60565b5f6133d5565b61355b915060203d602011610845576108378183611d60565b5f61312d565b9190600354808502908582041485151715612c56576127109004925f9060405f93604482518094819363152a902d60e11b835260048301528a602483015260018060a01b03165afa805f925f926136db575b506136c1575b5050808401808511612c5657856134cc968692116136a5575b6135e06135e5928492612c49565b612c49565b9380151580613691575b613654575b5080613623575b50507f000000000000000000000000000000000000000000000000000000000000000061212d565b61364d917f000000000000000000000000000000000000000000000000000000000000000061212d565b5f806135fb565b60045461368b91906001600160a01b03167f000000000000000000000000000000000000000000000000000000000000000061212d565b5f6135f4565b506004546001600160a01b031615156135ef565b8192506135e06136b86135e59383612c49565b939250506135d2565b6001600160a01b038216156135b957915091505f806135b9565b925090506040823d604011613715575b816136f860409383611d60565b8101031261026557602061370b83611ebd565b920151905f6135b3565b3d91506136eb56fe1da60d1ebc86294425cc61f1c7dc4439f6cb8a970869c2764900c57f5828a2e19b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212203bb8990e910ac81164fcf2f0d16fb8f1c49867a46b2cc11d8726abdd8ecad5cb64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220b7b3ca9af7a1fabc04948436bfb16bb927ae16c40bbe79de2a106b45cd6adff164736f6c634300081c0033"
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
      "bytecode": "0x60a0604052346102ac5761283280380380610019816102c4565b92833981016060828203126102ac5781516001600160401b0381116102ac5782019080601f830112156102ac578151916001600160401b0383116102b0578260051b9060208061006a8185016102c4565b8096815201928201019283116102ac57602001905b8282106102945750505061009a6040602084015193016102e9565b81511561025a578215158061024f575b15610216576001600160a01b03169182156101dc575f5b825181101561016757600581901b8301602001516001600160a01b031690811561013257816100f1600193610386565b6100fd575b50016100c1565b8061012b917f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a26102fd565b505f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600355608052604051908152a160405161241f90816103f382396080518181816103ef0152818161074001528181610a5701528181610d3401528181610ed2015281816110880152611de20152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b602080916102a1846102e9565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b038111838210176102b057604052565b51906001600160a01b03821682036102ac57565b6001600160a01b0381165f9081525f5160206128125f395f51905f52602052604090205460ff16610381576001600160a01b03165f8181525f5160206128125f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b805f52600260205260405f2054155f1461038157600154680100000000000000008110156102b05760018101806001558110156103de57819060015f5260205f200155600154905f52600260205260405f2055600190565b634e487b7160e01b5f52603260045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa8951461154f578063013cf08b146114f257806301ffc9a7146114825780630d61b519146113275780631133b21014611225578063150b7a02146111d05780631626ba7e1461117f578063173825d91461110257806319822f7c1461104c5780632358d5a814611000578063248a9ca314610fd65780632f2ff15d14610f995780632f54bf6e14610f5757806336568abe14610f135780633e1b081214610e8957806342cde4e814610e6c57806348e2c1b914610d225780635d35a3d914610c26578063694e80c314610bc25780637065cb4814610b2e57806374420f4c14610a1c57806391d14854146109d45780639330a222146108c25780639f69053514610815578063a0e67e2b14610789578063a217fddf1461076f578063b0d691fe1461072b578063bc197c8114610696578063c7f758a814610464578063d087d288146103be578063d547741f1461037c578063da35c6641461035f578063e086e5ec146102f4578063f23a6e611461029f5763f4f3b2000361000e5734610288576020366003190112610288576101b761167d565b6101bf611fff565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa908115610294575f9161025e575b506040519063a9059cbb60e01b5f523360045260245260205f60448180865af19060015f511482161561023e575b501561022c57005b635274afe760e01b5f5260045260245ffd5b60018215166102565750813b15153d1516165f610224565b3d5f823e3d90fd5b90506020813d60201161028c575b8161027960209383611645565b8101031261028857515f6101f6565b5f80fd5b3d915061026c565b6040513d5f823e3d90fd5b346102885760a0366003190112610288576102b861167d565b506102c1611693565b506084356001600160401b038111610288576102e19036906004016116fa565b5060405163f23a6e6160e01b8152602090f35b34610288575f3660031901126102885761030c611fff565b5f80808047335af161031c61198e565b501561032457005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b34610288575f366003190112610288576020600654604051908152f35b346102885760403660031901126102885761001860043561039b611693565b906103b96103b4825f525f602052600160405f20015490565b61204e565b61210e565b34610288575f36600319011261028857604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610294575f90610431575b604051908152602090f35b506020813d60201161045c575b8161044b60209383611645565b810103126102885760209051610426565b3d915061043e565b3461028857602036600319011261028857600435600654811015610687575f52600560205260405f20805461049881611666565b906104a66040519283611645565b808252601f196104b582611666565b013660208401376104c581611666565b6104d26040519182611645565b8181526104de82611666565b602082019490601f19013686376104f483611666565b926105026040519485611645565b808452601f1961051182611666565b015f5b8181106106765750505f5b8181106106095750506002600182015491015491602061054a6040519660e0885260e0880190611890565b918683038288015251918281520195905f5b8181106105f3575050508385036040850152825180865260208601906020808260051b8901019501915f905b8282106105c85760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b909192956020806105e5600193601f198d82030186528a516117eb565b980192019201909291610588565b825188526020978801979092019160010161055c565b8061061660019285611929565b50828060a01b0390541661062a8289611c94565b52816106368286611929565b5001546106438287611c94565b5261065a60026106538387611929565b5001611d3f565b6106648288611c94565b5261066f8187611c94565b500161051f565b806060602080938901015201610514565b63635e873760e01b5f5260045ffd5b346102885760a0366003190112610288576106af61167d565b506106b8611693565b506044356001600160401b038111610288576106d89036906004016118cc565b506064356001600160401b038111610288576106f89036906004016118cc565b506084356001600160401b038111610288576107189036906004016116fa565b5060405163bc197c8160e01b8152602090f35b34610288575f366003190112610288576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610288575f3660031901126102885760206040515f8152f35b34610288575f3660031901126102885760405180602060015491828152019060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f5b8181106107ff576107fb856107e781870382611645565b604051918291602083526020830190611890565b0390f35b82548452602090930192600192830192016107d0565b3461028857602036600319011261028857600435600654811015610687575f52600560205260405f20805461084981611666565b916108576040519384611645565b81835260208301905f5260205f205f915b83831061087d57604051806107fb878261180f565b6003602060019260405161089081611616565b848060a01b03865416815284860154838201526108af60028701611d3f565b6040820152815201920192019190610868565b34610288576108d036611775565b949395926108e56108e087611ddf565b611e2e565b6108ee85611666565b946108fc6040519687611645565b808652601f1961090b82611666565b015f5b8181106109aa5750505f5b81811061093457602061092c89896119bd565b604051908152f35b8089610989610959838761095361094e6001988a8f611d00565b611d10565b94611d00565b3561096584898b611d24565b90916040519461097486611616565b878060a01b03168552602085015236916116c4565b6040820152610998828a611c94565b526109a38189611c94565b5001610919565b6020906040516109b981611616565b5f81525f838201526060604082015282828b0101520161090e565b34610288576040366003190112610288576109ed611693565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461028857608036600319011261028857610a3561167d565b6044356001600160401b03811161028857610a54903690600401611718565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614929091908315610b0157600160035403610af2575f9283925b81604051928392833781018481520391602435905af1610ab761198e565b5015610ae357610ac357005b6064355f90815260046020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90303303610b14575b905f928392610a99565b90610b1e33611e2e565b600160035403610af25790610b0a565b3461028857602036600319011261028857610b4761167d565b303303610baf576001600160a01b03168015610ba057610b66816122b2565b15610b91577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461028857602036600319011261028857600435303303610baf5780158015610c1b575b610af2576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600355604051908152a1005b506001548111610be6565b3461028857610c4b610c3736611600565b610c466108e082949394611ddf565b611ddf565b60065482101561068757815f52600560205260405f20600181015460ff8116610d135760081c60ff16610d0457600381019060018060a01b0383165f528160205260ff60405f205416610cf55760029160018060a01b0384165f5260205260405f20600160ff1982541617905501610cc38154611c72565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b3461028857610d3036611775565b95337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161495909493908615610e4257600160035403610af2575b81811480610e39575b15610e00575f5b818110610daf578888610d9257005b5f90815260046020526040902080546001600160a01b0319169055005b5f80610dbf61094e84868c611d00565b610dca84878b611d00565b35610dd685898b611d24565b9190826040519384928337810185815203925af1610df261198e565b5015610ae357600101610d83565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b50828214610d7c565b333014610d7357610e5233611e2e565b60016003540315610d735763aabd5a0960e01b5f5260045ffd5b34610288575f366003190112610288576020600354604051908152f35b34610288576020366003190112610288576004356001600160c01b0381169081900361028857604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610294575f9061043157604051908152602090f35b3461028857604036600319011261028857610f2c611693565b336001600160a01b03821603610f48576100189060043561210e565b63334bd91960e11b5f5260045ffd5b34610288576020366003190112610288576020610f8f6001600160a01b03610f7d61167d565b165f52600260205260405f2054151590565b6040519015158152f35b3461028857604036600319011261028857610018600435610fb8611693565b90610fd16103b4825f525f602052600160405f20015490565b612086565b3461028857602036600319011261028857602061092c6004355f525f602052600160405f20015490565b3461028857604036600319011261028857611019611693565b6004355f526005602052600360405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610288576060366003190112610288576004356001600160401b038111610288578060040190610120600319823603011261028857604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610baf576020926110ca6101046110d4930182611cce565b9160243590611edf565b90806110e4575b50604051908152f35b5f80808093816040516110f78982611645565b52335af150826110db565b346102885760203660031901126102885761111b61167d565b303303610baf576001600160a01b0316611134816121a3565b15611170576001546003548110610af25715610af2577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b34610288576040366003190112610288576024356001600160401b038111610288576111bd6111b46020923690600401611718565b90600435611ca8565b6040516001600160e01b03199091168152f35b34610288576080366003190112610288576111e961167d565b506111f2611693565b506064356001600160401b038111610288576112129036906004016116fa565b50604051630a85bd0160e11b8152602090f35b34610288576040366003190112610288576004356001600160401b038111610288573660238201121561028857806004013561126081611666565b9161126e6040519384611645565b8183526024602084019260051b820101903682116102885760248101925b8284106112a157602061092c602435876119bd565b83356001600160401b0381116102885782016060602319823603011261028857604051916112ce83611616565b60248201356001600160a01b0381168103610288578352604482013560208401526064820135926001600160401b038411610288576113176020949360248695369201016116fa565b604082015281520193019261128c565b60203660031901126102885760043560065481101561068757805f52600560205260405f2060018101805460ff8116610d135760ff8160081c16610d04576002830154600354116114735760ff191660011790555f5b815481101561144c576113908183611929565b50546001600160a01b031660016113a78385611929565b50015460026113b68486611929565b500190604051915f908054906113cb82611956565b91600181169081156114355750600114611403575b5050915f939181859403925af16113f561198e565b5015610ae35760010161137d565b9091505f5260205f205f905b828210611421575050820181836113e0565b60018160209254848801520191019061140f565b60ff191686525050801515028301905081836113e0565b827fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b346102885760203660031901126102885760043563ffffffff60e01b811680910361028857602090637965db0b60e01b81149081156114c7575b506040519015158152f35b630271189760e51b8114915081156114e1575b50826114bc565b6301ffc9a760e01b149050826114da565b34610288576020366003190112610288576004355f526005602052608060405f20600260018201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b346102885761156861156036611600565b919091611ddf565b60065482101561068757815f526005602052600160405f20019081549060ff8216610d135760ff8260081c16610d0457601082901c6001600160a01b0390811691161415806115f6575b6115e75761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b50303314156115b2565b6040906003190112610288576004359060243590565b606081019081106001600160401b0382111761163157604052565b634e487b7160e01b5f52604160045260245ffd5b90601f801991011681019081106001600160401b0382111761163157604052565b6001600160401b0381116116315760051b60200190565b600435906001600160a01b038216820361028857565b602435906001600160a01b038216820361028857565b6001600160401b03811161163157601f01601f191660200190565b9291926116d0826116a9565b916116de6040519384611645565b829481845281830111610288578281602093845f960137010152565b9080601f8301121561028857816020611715933591016116c4565b90565b9181601f84011215610288578235916001600160401b038311610288576020838186019501011161028857565b9181601f84011215610288578235916001600160401b038311610288576020808501948460051b01011161028857565b6080600319820112610288576004356001600160401b038111610288578161179f91600401611745565b929092916024356001600160401b03811161028857816117c191600401611745565b92909291604435906001600160401b038211610288576117e391600401611745565b909160643590565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b83831061184157505050505090565b9091929394602080611881600193603f19868203018752606060408b51878060a01b038151168452858101518685015201519181604082015201906117eb565b97019301930191939290611832565b90602080835192838152019201905f5b8181106118ad5750505090565b82516001600160a01b03168452602093840193909201916001016118a0565b9080601f830112156102885781356118e381611666565b926118f16040519485611645565b81845260208085019260051b82010192831161028857602001905b8282106119195750505090565b813581526020918201910161190c565b8054821015611942575f52600360205f20910201905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c92168015611984575b602083101461197057565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611965565b3d156119b8573d9061199f826116a9565b916119ad6040519384611645565b82523d5f602084013e565b606090565b906119ca6108e082611ddf565b815115611c3c576119da90611ddf565b90600654926119e884611c72565b600655835f52600560205260405f20935f5b8351811015611b8657611a0d8185611c94565b518654600160401b81101561163157806001611a2c9201895588611929565b611b7357815181546001600160a01b0319166001600160a01b03909116178155602082015160018201556040909101518051600290920191906001600160401b03821161163157611a7d8354611956565b601f8111611b2e575b50602090601f8311600114611ac7576001949392915f9183611abc575b50505f19600383901b1c191690841b1790555b016119fa565b015190505f80611aa3565b90601f19831691845f52815f20925f5b818110611b16575091600196959492918388959310611afe575b505050811b019055611ab6565b01515f1960f88460031b161c191690555f8080611af1565b92936020600181928786015181550195019301611ad7565b835f5260205f20601f840160051c81019160208510611b69575b601f0160051c01905b818110611b5e5750611a86565b5f8155600101611b51565b9091508190611b48565b634e487b7160e01b5f525f60045260245ffd5b506001858101805462010000600160b01b031916601087901b62010000600160b01b0316179055604051929591946001600160a01b031693909260029291859187917f2e54f43789a6ca510a425f049aff6a8d4c444efb21fce5c23e86cfed6c59369d91908190611bf7908261180f565b0390a3835f526003810160205260405f208360ff198254161790550155817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a390565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b5f198114611c805760010190565b634e487b7160e01b5f52601160045260245ffd5b80518210156119425760209160051b010190565b90611cb39291611e4c565b611cc3576001600160e01b031990565b630b135d3f60e11b90565b903590601e198136030182121561028857018035906001600160401b0382116102885760200191813603831361028857565b91908110156119425760051b0190565b356001600160a01b03811681036102885790565b9082101561194257611d3b9160051b810190611cce565b9091565b9060405191825f825492611d5284611956565b8084529360018116908115611dbd5750600114611d79575b50611d7792500383611645565b565b90505f9291925260205f20905f915b818310611da1575050906020611d77928201015f611d6a565b6020919350806001915483858901015201910190918492611d88565b905060209250611d7794915060ff191682840152151560051b8201015f611d6a565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614611e1457503390565b5f908152600460205260409020546001600160a01b031690565b6001600160a01b03165f908152600260205260409020541561117057565b90611e8c611e70611e67611e613687866116c4565b85612278565b90929192612307565b6001600160a01b03165f90815260026020526040902054151590565b611ed75761171592611ed1611e6792611e70947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916116c4565b90612278565b505050600190565b91929092611ef1611e613684846116c4565b50949080956004811015611fcc571590811591611fe0575b50611f44575b505050602001355f52600460205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611f8193945090611ed1917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916116c4565b50919080926004811015611fcc571590811591611fad575b50611fa6575f8080611f0f565b5050600190565b6001600160a01b03165f90815260026020526040812054159150611f99565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260026020526040812054159150611f09565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561203757565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156120705750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16612108575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615612108575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b8054821015611942575f5260205f2001905f90565b5f818152600260205260409020548015612108575f198101818111611c80576001545f19810191908211611c805781810361222a575b5050506001548015612216575f19016121f381600161218e565b8154905f199060031b1b191690556001555f5260026020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b61226261223b61224c93600161218e565b90549060031b1c928392600161218e565b819391549060031b91821b915f19901b19161790565b90555f52600260205260405f20555f80806121d9565b81519190604183036122a8576122a19250602082015190606060408401519301515f1a90612367565b9192909190565b50505f9160029190565b805f52600260205260405f2054155f1461230257600154600160401b811015611631576122eb61224c826001859401600155600161218e565b9055600154905f52600260205260405f2055600190565b505f90565b6004811015611fcc5780612319575050565b600181036123305763f645eedf60e01b5f5260045ffd5b6002810361234b575063fce698f760e01b5f5260045260245ffd5b6003146123555750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116123de579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610294575f516001600160a01b038116156123d457905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220be340acfae688360e742a7ec227555e090dd08567460964c0348faeb7bec89b564736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x60808060405234601557612b5d908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b90604093929351906128328083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b93909192866128329161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a0604052346102ac5761283280380380610019816102c4565b92833981016060828203126102ac5781516001600160401b0381116102ac5782019080601f830112156102ac578151916001600160401b0383116102b0578260051b9060208061006a8185016102c4565b8096815201928201019283116102ac57602001905b8282106102945750505061009a6040602084015193016102e9565b81511561025a578215158061024f575b15610216576001600160a01b03169182156101dc575f5b825181101561016757600581901b8301602001516001600160a01b031690811561013257816100f1600193610386565b6100fd575b50016100c1565b8061012b917f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a26102fd565b505f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600355608052604051908152a160405161241f90816103f382396080518181816103ef0152818161074001528181610a5701528181610d3401528181610ed2015281816110880152611de20152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b602080916102a1846102e9565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b038111838210176102b057604052565b51906001600160a01b03821682036102ac57565b6001600160a01b0381165f9081525f5160206128125f395f51905f52602052604090205460ff16610381576001600160a01b03165f8181525f5160206128125f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b805f52600260205260405f2054155f1461038157600154680100000000000000008110156102b05760018101806001558110156103de57819060015f5260205f200155600154905f52600260205260405f2055600190565b634e487b7160e01b5f52603260045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa8951461154f578063013cf08b146114f257806301ffc9a7146114825780630d61b519146113275780631133b21014611225578063150b7a02146111d05780631626ba7e1461117f578063173825d91461110257806319822f7c1461104c5780632358d5a814611000578063248a9ca314610fd65780632f2ff15d14610f995780632f54bf6e14610f5757806336568abe14610f135780633e1b081214610e8957806342cde4e814610e6c57806348e2c1b914610d225780635d35a3d914610c26578063694e80c314610bc25780637065cb4814610b2e57806374420f4c14610a1c57806391d14854146109d45780639330a222146108c25780639f69053514610815578063a0e67e2b14610789578063a217fddf1461076f578063b0d691fe1461072b578063bc197c8114610696578063c7f758a814610464578063d087d288146103be578063d547741f1461037c578063da35c6641461035f578063e086e5ec146102f4578063f23a6e611461029f5763f4f3b2000361000e5734610288576020366003190112610288576101b761167d565b6101bf611fff565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa908115610294575f9161025e575b506040519063a9059cbb60e01b5f523360045260245260205f60448180865af19060015f511482161561023e575b501561022c57005b635274afe760e01b5f5260045260245ffd5b60018215166102565750813b15153d1516165f610224565b3d5f823e3d90fd5b90506020813d60201161028c575b8161027960209383611645565b8101031261028857515f6101f6565b5f80fd5b3d915061026c565b6040513d5f823e3d90fd5b346102885760a0366003190112610288576102b861167d565b506102c1611693565b506084356001600160401b038111610288576102e19036906004016116fa565b5060405163f23a6e6160e01b8152602090f35b34610288575f3660031901126102885761030c611fff565b5f80808047335af161031c61198e565b501561032457005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b34610288575f366003190112610288576020600654604051908152f35b346102885760403660031901126102885761001860043561039b611693565b906103b96103b4825f525f602052600160405f20015490565b61204e565b61210e565b34610288575f36600319011261028857604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610294575f90610431575b604051908152602090f35b506020813d60201161045c575b8161044b60209383611645565b810103126102885760209051610426565b3d915061043e565b3461028857602036600319011261028857600435600654811015610687575f52600560205260405f20805461049881611666565b906104a66040519283611645565b808252601f196104b582611666565b013660208401376104c581611666565b6104d26040519182611645565b8181526104de82611666565b602082019490601f19013686376104f483611666565b926105026040519485611645565b808452601f1961051182611666565b015f5b8181106106765750505f5b8181106106095750506002600182015491015491602061054a6040519660e0885260e0880190611890565b918683038288015251918281520195905f5b8181106105f3575050508385036040850152825180865260208601906020808260051b8901019501915f905b8282106105c85760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b909192956020806105e5600193601f198d82030186528a516117eb565b980192019201909291610588565b825188526020978801979092019160010161055c565b8061061660019285611929565b50828060a01b0390541661062a8289611c94565b52816106368286611929565b5001546106438287611c94565b5261065a60026106538387611929565b5001611d3f565b6106648288611c94565b5261066f8187611c94565b500161051f565b806060602080938901015201610514565b63635e873760e01b5f5260045ffd5b346102885760a0366003190112610288576106af61167d565b506106b8611693565b506044356001600160401b038111610288576106d89036906004016118cc565b506064356001600160401b038111610288576106f89036906004016118cc565b506084356001600160401b038111610288576107189036906004016116fa565b5060405163bc197c8160e01b8152602090f35b34610288575f366003190112610288576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610288575f3660031901126102885760206040515f8152f35b34610288575f3660031901126102885760405180602060015491828152019060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6905f5b8181106107ff576107fb856107e781870382611645565b604051918291602083526020830190611890565b0390f35b82548452602090930192600192830192016107d0565b3461028857602036600319011261028857600435600654811015610687575f52600560205260405f20805461084981611666565b916108576040519384611645565b81835260208301905f5260205f205f915b83831061087d57604051806107fb878261180f565b6003602060019260405161089081611616565b848060a01b03865416815284860154838201526108af60028701611d3f565b6040820152815201920192019190610868565b34610288576108d036611775565b949395926108e56108e087611ddf565b611e2e565b6108ee85611666565b946108fc6040519687611645565b808652601f1961090b82611666565b015f5b8181106109aa5750505f5b81811061093457602061092c89896119bd565b604051908152f35b8089610989610959838761095361094e6001988a8f611d00565b611d10565b94611d00565b3561096584898b611d24565b90916040519461097486611616565b878060a01b03168552602085015236916116c4565b6040820152610998828a611c94565b526109a38189611c94565b5001610919565b6020906040516109b981611616565b5f81525f838201526060604082015282828b0101520161090e565b34610288576040366003190112610288576109ed611693565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461028857608036600319011261028857610a3561167d565b6044356001600160401b03811161028857610a54903690600401611718565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614929091908315610b0157600160035403610af2575f9283925b81604051928392833781018481520391602435905af1610ab761198e565b5015610ae357610ac357005b6064355f90815260046020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90303303610b14575b905f928392610a99565b90610b1e33611e2e565b600160035403610af25790610b0a565b3461028857602036600319011261028857610b4761167d565b303303610baf576001600160a01b03168015610ba057610b66816122b2565b15610b91577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461028857602036600319011261028857600435303303610baf5780158015610c1b575b610af2576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600355604051908152a1005b506001548111610be6565b3461028857610c4b610c3736611600565b610c466108e082949394611ddf565b611ddf565b60065482101561068757815f52600560205260405f20600181015460ff8116610d135760081c60ff16610d0457600381019060018060a01b0383165f528160205260ff60405f205416610cf55760029160018060a01b0384165f5260205260405f20600160ff1982541617905501610cc38154611c72565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b3461028857610d3036611775565b95337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161495909493908615610e4257600160035403610af2575b81811480610e39575b15610e00575f5b818110610daf578888610d9257005b5f90815260046020526040902080546001600160a01b0319169055005b5f80610dbf61094e84868c611d00565b610dca84878b611d00565b35610dd685898b611d24565b9190826040519384928337810185815203925af1610df261198e565b5015610ae357600101610d83565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b50828214610d7c565b333014610d7357610e5233611e2e565b60016003540315610d735763aabd5a0960e01b5f5260045ffd5b34610288575f366003190112610288576020600354604051908152f35b34610288576020366003190112610288576004356001600160c01b0381169081900361028857604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610294575f9061043157604051908152602090f35b3461028857604036600319011261028857610f2c611693565b336001600160a01b03821603610f48576100189060043561210e565b63334bd91960e11b5f5260045ffd5b34610288576020366003190112610288576020610f8f6001600160a01b03610f7d61167d565b165f52600260205260405f2054151590565b6040519015158152f35b3461028857604036600319011261028857610018600435610fb8611693565b90610fd16103b4825f525f602052600160405f20015490565b612086565b3461028857602036600319011261028857602061092c6004355f525f602052600160405f20015490565b3461028857604036600319011261028857611019611693565b6004355f526005602052600360405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610288576060366003190112610288576004356001600160401b038111610288578060040190610120600319823603011261028857604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610baf576020926110ca6101046110d4930182611cce565b9160243590611edf565b90806110e4575b50604051908152f35b5f80808093816040516110f78982611645565b52335af150826110db565b346102885760203660031901126102885761111b61167d565b303303610baf576001600160a01b0316611134816121a3565b15611170576001546003548110610af25715610af2577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b34610288576040366003190112610288576024356001600160401b038111610288576111bd6111b46020923690600401611718565b90600435611ca8565b6040516001600160e01b03199091168152f35b34610288576080366003190112610288576111e961167d565b506111f2611693565b506064356001600160401b038111610288576112129036906004016116fa565b50604051630a85bd0160e11b8152602090f35b34610288576040366003190112610288576004356001600160401b038111610288573660238201121561028857806004013561126081611666565b9161126e6040519384611645565b8183526024602084019260051b820101903682116102885760248101925b8284106112a157602061092c602435876119bd565b83356001600160401b0381116102885782016060602319823603011261028857604051916112ce83611616565b60248201356001600160a01b0381168103610288578352604482013560208401526064820135926001600160401b038411610288576113176020949360248695369201016116fa565b604082015281520193019261128c565b60203660031901126102885760043560065481101561068757805f52600560205260405f2060018101805460ff8116610d135760ff8160081c16610d04576002830154600354116114735760ff191660011790555f5b815481101561144c576113908183611929565b50546001600160a01b031660016113a78385611929565b50015460026113b68486611929565b500190604051915f908054906113cb82611956565b91600181169081156114355750600114611403575b5050915f939181859403925af16113f561198e565b5015610ae35760010161137d565b9091505f5260205f205f905b828210611421575050820181836113e0565b60018160209254848801520191019061140f565b60ff191686525050801515028301905081836113e0565b827fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b346102885760203660031901126102885760043563ffffffff60e01b811680910361028857602090637965db0b60e01b81149081156114c7575b506040519015158152f35b630271189760e51b8114915081156114e1575b50826114bc565b6301ffc9a760e01b149050826114da565b34610288576020366003190112610288576004355f526005602052608060405f20600260018201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b346102885761156861156036611600565b919091611ddf565b60065482101561068757815f526005602052600160405f20019081549060ff8216610d135760ff8260081c16610d0457601082901c6001600160a01b0390811691161415806115f6575b6115e75761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b50303314156115b2565b6040906003190112610288576004359060243590565b606081019081106001600160401b0382111761163157604052565b634e487b7160e01b5f52604160045260245ffd5b90601f801991011681019081106001600160401b0382111761163157604052565b6001600160401b0381116116315760051b60200190565b600435906001600160a01b038216820361028857565b602435906001600160a01b038216820361028857565b6001600160401b03811161163157601f01601f191660200190565b9291926116d0826116a9565b916116de6040519384611645565b829481845281830111610288578281602093845f960137010152565b9080601f8301121561028857816020611715933591016116c4565b90565b9181601f84011215610288578235916001600160401b038311610288576020838186019501011161028857565b9181601f84011215610288578235916001600160401b038311610288576020808501948460051b01011161028857565b6080600319820112610288576004356001600160401b038111610288578161179f91600401611745565b929092916024356001600160401b03811161028857816117c191600401611745565b92909291604435906001600160401b038211610288576117e391600401611745565b909160643590565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b602081016020825282518091526040820191602060408360051b8301019401925f915b83831061184157505050505090565b9091929394602080611881600193603f19868203018752606060408b51878060a01b038151168452858101518685015201519181604082015201906117eb565b97019301930191939290611832565b90602080835192838152019201905f5b8181106118ad5750505090565b82516001600160a01b03168452602093840193909201916001016118a0565b9080601f830112156102885781356118e381611666565b926118f16040519485611645565b81845260208085019260051b82010192831161028857602001905b8282106119195750505090565b813581526020918201910161190c565b8054821015611942575f52600360205f20910201905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c92168015611984575b602083101461197057565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611965565b3d156119b8573d9061199f826116a9565b916119ad6040519384611645565b82523d5f602084013e565b606090565b906119ca6108e082611ddf565b815115611c3c576119da90611ddf565b90600654926119e884611c72565b600655835f52600560205260405f20935f5b8351811015611b8657611a0d8185611c94565b518654600160401b81101561163157806001611a2c9201895588611929565b611b7357815181546001600160a01b0319166001600160a01b03909116178155602082015160018201556040909101518051600290920191906001600160401b03821161163157611a7d8354611956565b601f8111611b2e575b50602090601f8311600114611ac7576001949392915f9183611abc575b50505f19600383901b1c191690841b1790555b016119fa565b015190505f80611aa3565b90601f19831691845f52815f20925f5b818110611b16575091600196959492918388959310611afe575b505050811b019055611ab6565b01515f1960f88460031b161c191690555f8080611af1565b92936020600181928786015181550195019301611ad7565b835f5260205f20601f840160051c81019160208510611b69575b601f0160051c01905b818110611b5e5750611a86565b5f8155600101611b51565b9091508190611b48565b634e487b7160e01b5f525f60045260245ffd5b506001858101805462010000600160b01b031916601087901b62010000600160b01b0316179055604051929591946001600160a01b031693909260029291859187917f2e54f43789a6ca510a425f049aff6a8d4c444efb21fce5c23e86cfed6c59369d91908190611bf7908261180f565b0390a3835f526003810160205260405f208360ff198254161790550155817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a390565b60405162461bcd60e51b815260206004820152600e60248201526d115b5c1d1e481c1c9bdc1bdcd85b60921b6044820152606490fd5b5f198114611c805760010190565b634e487b7160e01b5f52601160045260245ffd5b80518210156119425760209160051b010190565b90611cb39291611e4c565b611cc3576001600160e01b031990565b630b135d3f60e11b90565b903590601e198136030182121561028857018035906001600160401b0382116102885760200191813603831361028857565b91908110156119425760051b0190565b356001600160a01b03811681036102885790565b9082101561194257611d3b9160051b810190611cce565b9091565b9060405191825f825492611d5284611956565b8084529360018116908115611dbd5750600114611d79575b50611d7792500383611645565b565b90505f9291925260205f20905f915b818310611da1575050906020611d77928201015f611d6a565b6020919350806001915483858901015201910190918492611d88565b905060209250611d7794915060ff191682840152151560051b8201015f611d6a565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614611e1457503390565b5f908152600460205260409020546001600160a01b031690565b6001600160a01b03165f908152600260205260409020541561117057565b90611e8c611e70611e67611e613687866116c4565b85612278565b90929192612307565b6001600160a01b03165f90815260026020526040902054151590565b611ed75761171592611ed1611e6792611e70947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916116c4565b90612278565b505050600190565b91929092611ef1611e613684846116c4565b50949080956004811015611fcc571590811591611fe0575b50611f44575b505050602001355f52600460205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611f8193945090611ed1917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916116c4565b50919080926004811015611fcc571590811591611fad575b50611fa6575f8080611f0f565b5050600190565b6001600160a01b03165f90815260026020526040812054159150611f99565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260026020526040812054159150611f09565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561203757565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156120705750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16612108575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615612108575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b8054821015611942575f5260205f2001905f90565b5f818152600260205260409020548015612108575f198101818111611c80576001545f19810191908211611c805781810361222a575b5050506001548015612216575f19016121f381600161218e565b8154905f199060031b1b191690556001555f5260026020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b61226261223b61224c93600161218e565b90549060031b1c928392600161218e565b819391549060031b91821b915f19901b19161790565b90555f52600260205260405f20555f80806121d9565b81519190604183036122a8576122a19250602082015190606060408401519301515f1a90612367565b9192909190565b50505f9160029190565b805f52600260205260405f2054155f1461230257600154600160401b811015611631576122eb61224c826001859401600155600161218e565b9055600154905f52600260205260405f2055600190565b505f90565b6004811015611fcc5780612319575050565b600181036123305763f645eedf60e01b5f5260045ffd5b6002810361234b575063fce698f760e01b5f5260045260245ffd5b6003146123555750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116123de579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610294575f516001600160a01b038116156123d457905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220be340acfae688360e742a7ec227555e090dd08567460964c0348faeb7bec89b564736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5a26469706673582212208f78252f2feb770093a9933a3b88a6387470395bddaf629d7f32bc2bd78a53d264736f6c634300081c0033"
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