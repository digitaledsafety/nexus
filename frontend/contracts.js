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
      "bytecode": "0x60803461006857601f610b5638819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006857516001600160a01b03811681036100685761005890610080565b50604051610a2c908161010a8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610b365f395f51905f52602052604090205460ff16610104576001600160a01b03165f8181525f516020610b365f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a7146105505750806315270ace14610465578063227a755814610417578063248a9ca3146103e55780632f2ff15d146103a857806336568abe146103645780637402c05a1461030857806391d14854146102c0578063a217fddf146102a6578063d547741f14610264578063e086e5ec14610239578063f4f3b2001461018f5763f8b7fabf146100b7575f61000f565b6100c03661063b565b906100ce828495941461069f565b5f5f5b85811061016f5750340361012a575f5b8481106100ea57005b806101245f8080806101076101026001988d8d6106df565b610724565b610112878b8b6106df565b35905af161011e61076e565b506107ad565b016100e1565b60405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e74000000000000006044820152606490fd5b906101886001916101818487876106df565b3590610703565b91016100d1565b34610222576020366003190112610222576004356001600160a01b03811690819003610222576101bd610867565b6040516370a0823160e01b815230600482015290602082602481845afa90811561022e575f916101f4575b61001a925033906107ef565b90506020823d602011610226575b8161020f60209383610738565b810103126102225761001a9151906101e8565b5f80fd5b3d9150610202565b6040513d5f823e3d90fd5b34610222575f36600319011261022257610251610867565b61001a5f80808047335af161011e61076e565b346102225760403660031901126102225761001a600435610283610689565b906102a161029c825f525f602052600160405f20015490565b6108b6565b610976565b34610222575f3660031901126102225760206040515f8152f35b34610222576040366003190112610222576102d9610689565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461022257610316366105d4565b919390610321610867565b61032c83861461069f565b5f5b85811061033757005b8061035e61034b6101026001948a8a6106df565b6103568388876106df565b3590866107ef565b0161032e565b346102225760403660031901126102225761037d610689565b336001600160a01b038216036103995761001a90600435610976565b63334bd91960e11b5f5260045ffd5b346102225760403660031901126102225761001a6004356103c7610689565b906103e061029c825f525f602052600160405f20015490565b6108ee565b3461022257602036600319011261022257602061040f6004355f525f602052600160405f20015490565b604051908152f35b34610222576104253661063b565b90610431939293610867565b61043c82851461069f565b5f5b84811061044757005b8061045f5f8080806101076101026001988d8d6106df565b0161043e565b3461022257610473366105d4565b91939061048183861461069f565b5f5f5b84811061053757508061049357005b604051906323b872dd60e01b5f52336004523060245260445260205f60648180875af19060015f5114821615610516575b6040525f606052156104f5575f5b8581106104db57005b806104ef61034b6101026001948a8a6106df565b016104d2565b50635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661052e57833b15153d151616906104c4565b503d5f823e3d90fd5b906105496001916101818488876106df565b9101610484565b34610222576020366003190112610222576004359063ffffffff60e01b821680920361022257602091637965db0b60e01b8114908115610592575b5015158152f35b6301ffc9a760e01b1490508361058b565b9181601f840112156102225782359167ffffffffffffffff8311610222576020808501948460051b01011161022257565b906060600319830112610222576004356001600160a01b0381168103610222579160243567ffffffffffffffff81116102225781610614916004016105a3565b929092916044359067ffffffffffffffff821161022257610637916004016105a3565b9091565b60406003198201126102225760043567ffffffffffffffff81116102225781610666916004016105a3565b929092916024359067ffffffffffffffff821161022257610637916004016105a3565b602435906001600160a01b038216820361022257565b156106a657565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156106ef5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b9190820180921161071057565b634e487b7160e01b5f52601160045260245ffd5b356001600160a01b03811681036102225790565b90601f8019910116810190811067ffffffffffffffff82111761075a57604052565b634e487b7160e01b5f52604160045260245ffd5b3d156107a8573d9067ffffffffffffffff821161075a576040519161079d601f8201601f191660200184610738565b82523d5f602084013e565b606090565b156107b457565b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f511482161561084f575b6040521561082f5750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661052e57823b15153d15161690610824565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561089f57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156108d85750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610970575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610970575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea2646970667358221220d0d234649d79924fab8c86e027b8dc2947e53dc73031e8dec429d5521f179c5364736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
              "name": "media",
              "type": "string[]"
            },
            {
              "internalType": "bool[]",
              "name": "onChain",
              "type": "bool[]"
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
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "string[]",
              "name": "messages",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "media",
              "type": "string[]"
            },
            {
              "internalType": "bool[]",
              "name": "onChain",
              "type": "bool[]"
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
      "bytecode": "0x6080604052346103c25761500e6080813803918261001c816103c6565b9384928339810103126103c257610032816103eb565b9061003f602082016103eb565b6100506060604084015193016103eb565b9261005b60406103c6565b6007815266109c9859d3919560ca1b602082015261007960406103c6565b600781526610949051d3919560ca1b6020820152815190916001600160401b0382116102c9575f5490600182811c921680156103b8575b60208310146102ab5781601f84931161034b575b50602090601f83116001146102e8575f926102dd575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116102c957600154600181811c911680156102bf575b60208210146102ab57601f8111610248575b50602090601f83116001146101df5761017d9392915f91836101d4575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556103ff565b50600b80546001600160a01b03199081166001600160a01b03938416908117909255600c80548216909217909155600d92909255600f805490921692169190911790556064600955604051614b6590816104898239f35b015190505f8061013f565b90601f1983169160015f52815f20925f5b818110610230575091600193918561017d97969410610218575b505050811b01600155610154565b01515f1960f88460031b161c191690555f808061020a565b929360206001819287860151815501950193016101f0565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c810191602085106102a1575b601f0160051c01905b8181106102965750610122565b5f8155600101610289565b9091508190610280565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610110565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100da565b5f8080528281209350601f198516905b818110610333575090846001959493921061031b575b505050811b015f556100ee565b01515f1960f88460031b161c191690555f808061030e565b929360206001819287860151815501950193016102f8565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c810191602085106103ae575b90601f859493920160051c01905b8181106103a057506100c4565b5f8155849350600101610393565b9091508190610385565b91607f16916100b0565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102c957604052565b51906001600160a01b03821682036103c257565b6001600160a01b0381165f9081525f516020614fee5f395f51905f52602052604090205460ff16610483576001600160a01b03165f8181525f516020614fee5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561007a575b50361561001a575f80fd5b6100226126e3565b610067604051610033604082612119565b600f81526e2234b932b1ba103237b730ba34b7b760891b60208201526040519061005e602083612119565b5f82523361271b565b60015f516020614b105f395f51905f5255005b5f3560e01c90816301ffc9a714611f285750806302d95a5214611f0057806306fdde0314611e5e578063081812fc14611e22578063095ea7b314611d385780630f133e6614611d175780630fd973ce14611cb35780631653441c14611c4c57806318160ddd146116e557806323b872dd14611c35578063248a9ca314611c025780632a55205a14611bb85780632eb9313e14611b755780632f2ff15d14611b3757806336568abe14611af357806341e42f3014611a5d57806342842e0e14611a2e57806349c657db14611a125780634c00de82146119ea57806350017f3e1461198557806361d027b31461195d5780636352211e1461192d57806364cb7e9c146119035780636d12c7f4146117df5780636f8b44b0146117be57806370a082311461176d578063724e78da1461172a578063741bef1a1461170257806375794a3c146116e55780638097a658146115fd57806383943dc8146115d55780638cde417314611497578063916221aa1461144e57806391a6262f1461142057806391d14854146113d757806395d89b41146112f95780639604d4781461110757806396d8f4f3146110ea578063a217fddf146110d0578063a22cb4651461101c578063a6719b3a14610fa1578063ab2a6f7014610f22578063b426aeed14610d80578063b88d4fde14610d15578063bfe71a3f14610ceb578063c631724714610cca578063c87b56dd14610634578063d3933c1c146105b1578063d547741f1461056c578063d5abeb011461054f578063e086e5ec146104e4578063e985e9c51461048d578063f0f4426014610401578063f4f3b200146103045763f5cf513b146102e3575f61000f565b34610300575f366003190112610300576020600a54604051908152f35b5f80fd5b346103005760203660031901126103005761031d61201d565b61032561265a565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa9081156103f6575f916103c4575b506040519063a9059cbb60e01b5f523360045260245260205f60448180865af19060015f51148216156103a4575b501561039257005b635274afe760e01b5f5260045260245ffd5b60018215166103bc5750813b15153d1516168261038a565b3d5f823e3d90fd5b90506020813d6020116103ee575b816103df60209383612119565b8101031261030057518261035c565b3d91506103d2565b6040513d5f823e3d90fd5b346103005760203660031901126103005761041a61201d565b61042261265a565b6001600160a01b03168015610448576001600160601b0360a01b600b541617600b555f80f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b34610300576040366003190112610300576104a661201d565b6104ae612033565b9060018060a01b03165f52600560205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610300575f366003190112610300576104fc61265a565b5f80808047335af161050c612454565b501561051457005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b34610300575f366003190112610300576020600954604051908152f35b34610300576040366003190112610300576105af60043561058b612033565b906105aa6105a5825f526007602052600160405f20015490565b6126a9565b61280a565b005b6060366003190112610300576004356001600160401b038111610300576105dc90369060040161205f565b906024356001600160401b038111610300576105fc90369060040161205f565b90916044359283151584036103005761062561062d926100679661061e6126e3565b3691612225565b923691612225565b9033612769565b346103005760203660031901126103005760043561065181612626565b50805f52601060205260405f20906040519061066c826120fe565b82546001600160a01b031682526001830154602083015260028301546040830152600383015460608301939060ff166004811015610bb95784526106b29060040161213a565b608083019081526106c28261225b565b926060835f5260126020526106d960405f2061213a565b90815115610cb9575b815115610c9b576106f28261374a565b15610c95575094602061075e603a61071361070e8751896132ff565b6149a1565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81015f838201520301601f198101835282612119565b905b602096876040516107718282612119565b5f8152918051610c3a575b505061078885516141a9565b93516001600160a01b03169283926107a0602a61220a565b936107ae6040519586612119565b602a85526107bc602a61220a565b858c019690601f1901368837855115610c265760308753855160011015610c26576078602187015360295b60018111610be45750610bcd575051906004821015610bb957898099988199978280999781809a99819a61081b839a6143da565b9115610b975760405161082f604082612119565b600381526259657360e81b84820152935b6040519d8e978189017f7b2274726169745f74797065223a20224d657373616765222c202276616c7565905263111d101160e11b60408a015280519182910160448a015e62089f4b60ea1b6044918901918201527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478201526a10113b30b63ab2911d101160a91b60678201529051918290607283015e016044019062089f4b60ea1b602e830152603182017f7b2274726169745f74797065223a202254617820537461747573222c20227661905266363ab2911d101160c91b6051830152805192839101605883015e01602e019062089f4b60ea1b602a830152602d82017f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565905263111d101160e11b604d830152805192839101605183015e01602a0161227d60f01b602782015203602701601d19810188526002016109a29088612119565b6109ab9061448f565b88515190989015610b7d57816109f960226109c96109ff94516141a9565b6040519384916101d160f51b828401528051918291018484015e81015f838201520301601f198101835282612119565b926141a9565b91604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e4368617269747920905260538201754475616c2d537461746520436f6c6c65637469626c6560501b9052805192839101606983015e01603301906c1116101134b6b0b3b2911d101160991b6036830152805192839101604383015e0160360190600d82015f8152815193849201905e01600d019071222c202261747472696275746573223a205b60701b8252805192839101601283015e0160128101615d7d60f01b905203601201601d1981018252600201610b089082612119565b610b11906149a1565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000084820152815190938492829101603d84015e8101603d81015f905203603d01601f1981018352610b659083612119565b6040519181839283528201610b7991611ff9565b0390f35b506109ff604051610b8e8382612119565b5f8152926141a9565b604051610ba5604082612119565b60028152614e6f60f01b8482015293610840565b634e487b7160e01b5f52602160045260245ffd5b63e22e27eb60e01b5f52600452601460245260445ffd5b90600f8116906010821015610c2657610c21916f181899199a1a9b1b9c1cb0b131b232b360811b901a610c17848a613739565b5360041c916145f7565b6107e7565b634e487b7160e01b5f52603260045260245ffd5b610c8e919250610c4b6035916141a9565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81015f838201520301601f198101835282612119565b878961077c565b95610760565b9590506020610cb3603a61071361070e8751896132ff565b90610760565b9050610cc48461324c565b906106e2565b3461030057602036600319011261030057610ce361265a565b600435600d55005b34610300576020366003190112610300576004355f526011602052602060405f2054604051908152f35b3461030057608036600319011261030057610d2e61201d565b610d36612033565b90604435606435926001600160401b038411610300573660238501121561030057610d6e6105af943690602481600401359101612225565b92610d7a838383612288565b3361314f565b6080366003190112610300576004356001600160401b03811161030057610dab9036906004016121da565b906024356001600160401b03811161030057610dcb9036906004016121da565b926044356001600160401b03811161030057610deb9036906004016121da565b6064939193356001600160401b03811161030057610e0d9036906004016121da565b610e156126e3565b84151580610f19575b80610f10575b80610f07575b610e339061252e565b610e3d8534612436565b93610e4c600d5486101561256e565b670de0b6b3a7640000610e6686610e616128a5565b612423565b04955f5b818110610e94576100675f8080803460018060a01b03600b54165af1610e8e612454565b50612483565b610e9f81838c61251e565b35906001600160a01b038216820361030057610f018989898f95898f8c610625610efb92610ef3610eee8f610ee660019f8f92838092610ede926125b3565b9c90966125b3565b98909661251e565b6125f4565b963691612225565b91612b09565b01610e6a565b50848114610e2a565b50828514610e24565b50878514610e1e565b34610300576020366003190112610300576004355f52601060205260405f2060018060a01b03815416906001810154906002810154610f6b600460ff600385015416930161213a565b92604051948552602085015260408401526004811015610bb9578291610b7991606084015260a0608084015260a0830190611ff9565b608036600319011261030057610fb561201d565b6024356001600160401b03811161030057610fd490369060040161205f565b916044356001600160401b03811161030057610ff490369060040161205f565b909260643593841515850361030057610625611016926100679761061e6126e3565b91612769565b346103005760403660031901126103005761103561201d565b602435908115158092036103005733156110bd576001600160a01b03169081156110aa57335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b63a9fbf51f60e01b5f525f60045260245ffd5b34610300575f3660031901126103005760206040515f8152f35b34610300575f366003190112610300576020600d54604051908152f35b34610300576020366003190112610300576004356111236126e3565b61112c81612626565b50600e546001600160a01b031680156112bf57600b546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269d3c21bcecceda1000000604482015290602090829060649082905f905af19081156103f6575f91611284575b501561124857805f52601160205260405f205442115f146112265762278d00420180421161121257815f52601160205260405f20555b6040519069d3c21bcecceda100000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f516020614b105f395f51905f5255005b634e487b7160e01b5f52601160045260245ffd5b805f52601160205260405f2080549062278d00820180921161121257556111c8565b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d6020116112b7575b8161129f60209383612119565b81010312610300575180151581036103005782611192565b3d9150611292565b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b34610300575f366003190112610300576040515f600154611319816120c6565b80845290600181169081156113b35750600114611355575b610b798361134181850382612119565b604051918291602083526020830190611ff9565b60015f9081527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b80821061139957509091508101602001611341611331565b919260018160209254838588010152019101909291611381565b60ff191660208086019190915291151560051b840190910191506113419050611331565b34610300576040366003190112610300576113f0612033565b6004355f52600760205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461030057606036600319011261030057611439612033565b50611442612049565b50602060405160018152f35b34610300576040366003190112610300576004356024356004811015610300576105af9161147a61265a565b61148381612626565b505f526010602052600360405f2001612601565b6060366003190112610300576004356001600160401b038111610300576114c29036906004016121da565b906024356001600160401b038111610300576114e29036906004016121da565b916044356001600160401b038111610300576115029036906004016121da565b909361150c6126e3565b851515806115cc575b806115c3575b6115249061252e565b61152e8634612436565b9161153d600d5484101561256e565b670de0b6b3a764000061155284610e616128a5565b04935f5b88811061157a576100675f8080803460018060a01b03600b54165af1610e8e612454565b806115bd878787876115b68f8f908f6115ae610eee8b610ee68f9e60019f81610625986115a6926125b3565b9b90966125b3565b953691612225565b9033612b09565b01611556565b5085821461151b565b50808614611515565b34610300575f36600319011261030057600e546040516001600160a01b039091168152602090f35b6020366003190112610300576004356001600160401b038111610300576116289036906004016121da565b906116316126e3565b81156116b2576116418234612436565b90670de0b6b3a764000061165783610e616128a5565b045f5b84811061167e576100675f8080803460018060a01b03600b54165af1610e8e612454565b8061169561168f600193888761251e565b35612626565b506116ac83866116a6848a8961251e565b35612995565b0161165a565b60405162461bcd60e51b815260206004820152600b60248201526a456d70747920617272617960a81b6044820152606490fd5b34610300575f366003190112610300576020600854604051908152f35b34610300575f36600319011261030057600f546040516001600160a01b039091168152602090f35b346103005760203660031901126103005761174361201d565b61174b61265a565b600f80546001600160a01b0319166001600160a01b0392909216919091179055005b34610300576020366003190112610300576001600160a01b0361178e61201d565b1680156117ab575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b34610300576020366003190112610300576117d761265a565b600435600955005b34610300576040366003190112610300576004356024356001600160401b0381116103005761181290369060040161205f565b909161181c61265a565b61182581612626565b505f52601260205260405f20906001600160401b0381116118ef576118548161184e84546120c6565b846124cf565b5f601f821160011461189157819061188293945f92611886575b50508160011b915f199060031b1c19161790565b9055005b01359050848061186e565b601f19821693835f5260205f20915f5b8681106118d757508360019596106118be575b505050811b019055005b01355f19600384901b60f8161c191690558380806118b4565b909260206001819286860135815501940191016118a1565b634e487b7160e01b5f52604160045260245ffd5b34610300576020366003190112610300576004355f526012602052610b7961134160405f2061213a565b3461030057602036600319011261030057602061194b600435612626565b6040516001600160a01b039091168152f35b34610300575f36600319011261030057600b546040516001600160a01b039091168152602090f35b6020366003190112610300576119cd60043561199f6126e3565b6119a881612626565b50670de0b6b3a76400006119c46119bd6128a5565b3490612423565b04903490612995565b6100675f8080803460018060a01b03600b54165af1610e8e612454565b34610300575f36600319011261030057600c546040516001600160a01b039091168152602090f35b34610300575f3660031901126103005760206040516103208152f35b34610300576105af611a3f3661208c565b9060405192611a4f602085612119565b5f8452610d7a838383612288565b3461030057602036600319011261030057611a7661201d565b611a7e61265a565b6001600160a01b03168015611aa4576001600160601b0360a01b600c541617600c555f80f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b3461030057604036600319011261030057611b0c612033565b336001600160a01b03821603611b28576105af9060043561280a565b63334bd91960e11b5f5260045ffd5b34610300576040366003190112610300576105af600435611b56612033565b90611b706105a5825f526007602052600160405f20015490565b61277e565b3461030057602036600319011261030057611b8e61201d565b611b9661265a565b600e80546001600160a01b0319166001600160a01b0392909216919091179055005b3461030057604036600319011261030057602435610320810290808204610320149015171561121257600c54604080516001600160a01b0390921682526127109092046020820152f35b34610300576020366003190112610300576020611c2d6004355f526007602052600160405f20015490565b604051908152f35b34610300576105af611c463661208c565b91612288565b6040366003190112610300576004356001600160401b03811161030057611c7790369060040161205f565b906024356001600160401b0381116103005761006792610625611ca1611cac93369060040161205f565b94909261061e6126e3565b903361271b565b606036600319011261030057611cc761201d565b6024356001600160401b03811161030057611ce690369060040161205f565b91906044356001600160401b0381116103005761006793610625611ca1611d1193369060040161205f565b9161271b565b3461030057602036600319011261030057611d3061265a565b600435600a55005b3461030057604036600319011261030057611d5161201d565b602435611d5d81612626565b33151580611e0f575b80611de2575b611dcf5781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615611d6c565b506001600160a01b038116331415611d66565b3461030057602036600319011261030057600435611e3f81612626565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610300575f366003190112610300576040515f5f54611e7d816120c6565b80845290600181169081156113b35750600114611ea457610b798361134181850382612119565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210611ee657509091508101602001611341611331565b919260018160209254838588010152019101909291611ece565b34610300576020366003190112610300576020611f1e60043561225b565b6040519015158152f35b34610300576020366003190112610300576004359063ffffffff60e01b82168092036103005760209163152a902d60e11b8114908115611fe8575b8115611f71575b5015158152f35b637965db0b60e01b811491508115611f8b575b5083611f6a565b632483248360e11b811491508115611fa5575b5083611f84565b6380ac58cd60e01b811491508115611fd7575b8115611fc6575b5083611f9e565b6301ffc9a760e01b14905083611fbf565b635b5e139f60e01b81149150611fb8565b6391a6262f60e01b81149150611f63565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361030057565b602435906001600160a01b038216820361030057565b604435906001600160a01b038216820361030057565b9181601f84011215610300578235916001600160401b038311610300576020838186019501011161030057565b6060906003190112610300576004356001600160a01b038116810361030057906024356001600160a01b0381168103610300579060443590565b90600182811c921680156120f4575b60208310146120e057565b634e487b7160e01b5f52602260045260245ffd5b91607f16916120d5565b60a081019081106001600160401b038211176118ef57604052565b90601f801991011681019081106001600160401b038211176118ef57604052565b9060405191825f82549261214d846120c6565b80845293600181169081156121b85750600114612174575b5061217292500383612119565b565b90505f9291925260205f20905f915b81831061219c575050906020612172928201015f612165565b6020919350806001915483858901015201910190918492612183565b90506020925061217294915060ff191682840152151560051b8201015f612165565b9181601f84011215610300578235916001600160401b038311610300576020808501948460051b01011161030057565b6001600160401b0381116118ef57601f01601f191660200190565b9291926122318261220a565b9161223f6040519384612119565b829481845281830111610300578281602093845f960137010152565b805f52601160205260405f205415159081612274575090565b90505f52601160205260405f205442111590565b6001600160a01b0390911691908215612410575f828152600260205260409020546001600160a01b03169282903315158061237b575b5084612348575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b031680830361233057505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f1981540190556122c5565b909150806123bf575b156123915782905f6122be565b82846123a957637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b5033841480156123ee575b8061238457505f838152600460205260409020546001600160a01b03163314612384565b505f84815260056020908152604080832033845290915290205460ff166123ca565b633250574960e11b5f525f60045260245ffd5b8181029291811591840414171561121257565b8115612440570490565b634e487b7160e01b5f52601260045260245ffd5b3d1561247e573d906124658261220a565b916124736040519384612119565b82523d5f602084013e565b606090565b1561248a57565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b601f82116124dc57505050565b5f5260205f20906020601f840160051c83019310612514575b601f0160051c01905b818110612509575050565b5f81556001016124fe565b90915081906124f5565b9190811015610c265760051b0190565b1561253557565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b1561257557565b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b9190811015610c265760051b81013590601e19813603018212156103005701908135916001600160401b038311610300576020018236038113610300579190565b3580151581036103005790565b906004811015610bb95760ff80198354169116179055565b9190820180921161121257565b5f818152600260205260409020546001600160a01b0316908115612648575090565b637e27328960e01b5f5260045260245ffd5b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561269257565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156126cd5750565b63e2517d3f60e01b5f523360045260245260445ffd5b60025f516020614b105f395f51905f52541461270c5760025f516020614b105f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b5f61274c9361272e600d5434101561256e565b670de0b6b3a764000061274334610e616128a5565b04933493612b09565b6121725f8080803460018060a01b03600b54165af1610e8e612454565b90919261274c9361272e600d5434101561256e565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16612804575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff1615612804575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b519069ffffffffffffffffffff8216820361030057565b600f545f9081906001600160a01b0316806128dc575b5015806128d1575b6128ca5790565b50600a5490565b50600a5415156128c3565b60a060049160405192838092633fabe5a360e21b82525afa5f9181612946575b5061292d57507f808dffbdfc20bc9a45051898006383ae0b676df25eea03ddf4cc222b690ce71b5f80a15b5f6128bb565b5f811361293b575b50612927565b91505060015f612935565b90915060a0813d60a01161298d575b8161296260a09383612119565b81010312610300576129738161288e565b5061298560806020830151920161288e565b50905f6128fc565b3d9150612955565b90916305f5e1008110612ab657815f52601160205260405f205442115f14612a945762278d00420180421161121257825f52601160205260405f20555b600e546001600160a01b031680151580612a8b575b612a1c575b50506040519182527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a3565b662386f26fc10000820291808304662386f26fc10000149015171561121257803b15610300576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af180156103f657612a7b575b806129ec565b5f612a8591612119565b5f612a75565b508115156129e7565b815f52601160205260405f2080549062278d00820180921161121257556129d2565b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b5f1981146112125760010190565b9392919490946008549260095484101561311557612b2684612afb565b600855604051612b35816120fe565b33815260208082018581524260408085019182525f60608601818152608087018e81528b83526010909652919020945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190916004821015610bb957612ba860049260038301612601565b0190518051906001600160401b0382116118ef57612bd082612bca85546120c6565b856124cf565b602090601f83116001146130b257612bfe92915f9183612f475750508160011b915f199060031b1c19161790565b90555b15612fb557825f52601260205260405f20908051906001600160401b0382116118ef57612c3282612bca85546120c6565b602090601f8311600114612f5257612c6092915f9183612f475750508160011b915f199060031b1c19161790565b90555b602093604051612c738682612119565b5f81526001600160a01b038216918215612410575f8581526002885260409020546001600160a01b03168015159081612f16575b845f526003895260405f2060018154019055865f526002895260405f20856001600160601b0360a01b8254161790558685827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a450612f03573b612e0d575b5050600e546001600160a01b03169384151580612e04575b612d72575b7feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377945060405193845283015260408201526080606082015280612d6d33946080830190611ff9565b0390a2565b662386f26fc10000820294828604662386f26fc10000148315171561121257803b15610300576040516340c10f1960e01b815233600482015260248101969096525f908690604490829084905af19485156103f6577feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f37795612df4575b50612d25565b5f612dfe91612119565b5f612dee565b50811515612d20565b85612e4e91604099979896959493995180938192630a85bd0160e11b83523360048401525f6024840152876044840152608060648401526084830190611ff9565b03815f8c5af15f9181612ec3575b50612e8a578787612e6b612454565b8051919082612e875783633250574960e11b5f5260045260245ffd5b01fd5b630a85bd0160e198929394959796981b9063ffffffff60e01b1603612eb157505f80612d08565b633250574960e11b5f5260045260245ffd5b9091508781813d8311612efc575b612edb8183612119565b8101031261030057516001600160e01b03198116810361030057905f612e5c565b503d612ed1565b6339e3563760e11b5f525f60045260245ffd5b5f8781526004602052604080822080546001600160a01b031916905582825260038b52902080545f19019055612ca7565b015190505f8061186e565b90601f19831691845f52815f20925f5b818110612f9d5750908460019594939210612f85575b505050811b019055612c63565b01515f1960f88460031b161c191690555f8080612f78565b92936020600181928786015181550195019301612f62565b8051612fc2575b50612c63565b825f52600660205260405f20908051906001600160401b0382116118ef57612fee82612bca85546120c6565b602090601f831160011461304f5761301c92915f9183612f475750508160011b915f199060031b1c19161790565b90555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051848152a15f612fbc565b90601f19831691845f52815f20925f5b81811061309a5750908460019594939210613082575b505050811b01905561301f565b01515f1960f88460031b161c191690555f8080613075565b9293602060018192878601518155019501930161305f565b90601f19831691845f52815f20925f5b8181106130fd57509084600195949392106130e5575b505050811b019055612c01565b01515f1960f88460031b161c191690555f80806130d8565b929360206001819287860151815501950193016130c2565b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b823b61315d575b5050505050565b604051630a85bd0160e11b81526001600160a01b0391821660048201529181166024830152604482019390935260806064820152911691602090829081906131a9906084830190611ff9565b03815f865af15f9181613207575b506131e557506131c5612454565b805190816131e05782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b01612eb157505f80808080613156565b9091506020813d602011613244575b8161322360209383612119565b8101031261030057516001600160e01b03198116810361030057905f6131b7565b3d9150613216565b61325581612626565b506020906040516132668382612119565b5f8152815f526006835261327c60405f2061213a565b8151156132f857808491516132ba5750505061329790612626565b505f6040516132a68382612119565b526132b46040519182612119565b5f815290565b6132f5935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612119565b90565b9250505090565b601160536132f5926133196133138261225b565b95614603565b8051156136eb5761332a91506146ad565b935b6020948560405161333d8282612119565b5f81529160405161334f608082612119565b604981528281017f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7381527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040830152856868743a20626f6c643b60b81b60608401526135d3575b600f9160828592603c97985f146135b0576040516133d6604082612119565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000085820152925b6040519d8e9a7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230828d01527f30302f73766722207072657365727665417370656374526174696f3d22784d6960408d01527f6e594d696e206d656574222076696577426f783d22302030203335302033353060608d015261111f60f11b60808d0152805191829101858d015e8a01906e01e39ba3cb6329f173130b9b2903d9608d1b84830152518092609183015e01019069103e9e17b9ba3cb6329f60b11b848301527f3c726563742077696474683d223130302522206865696768743d223130302522601983015271103334b6361e91119b199b1b33189110179f60711b6039830152805192839101604b83015e0101907f3c7465787420783d223530252220793d223530252220636c6173733d22626173848301527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465605c830152723c3a16b0b731b437b91e9136b4b2323632911f60691b607c830152805192839101608f83015e0101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b838201520301600e19810184520182612119565b6040516135be604082612119565b60038152621e339f60e91b8582015292613401565b603c9450600f91608285926101006135ee6040519182612119565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522858201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e0820152975092505091506133b7565b5061373360296136fc60209361448f565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612119565b9361332c565b908151811015610c26570160200190565b8051906004821061280457600b821015613d25575b600319820182811161121257601760f91b6001600160f81b03196137838385613739565b5116146139a9575b60058310158061397a575b6137a2575b5050505f90565b6137c1906001600160f81b0319906137ba9084613739565b5116614ad0565b906002198301838111611212576137e6906001600160f81b0319906137ba9084613739565b9260011981018181116112125761380b906001600160f81b0319906137ba9085613739565b915f198201918211611212576137ba6138299260ff60f81b92613739565b916001600160f81b031916607760f81b81148080613963575b8061394c575b80613935575b61392b5780613914575b806138fd575b806138e6575b6138dd57606760f81b1492836138c5575b50826138ad575b5081613895575b50613890575f808061379b565b600190565b6001600160f81b031916603360f91b1490505f613883565b6001600160f81b031916601d60fa1b1491505f61387c565b6001600160f81b031916601b60fa1b1492505f613875565b50505050600190565b506001600160f81b03198316600760fc1b14613864565b506001600160f81b03198216603160f91b1461385e565b506001600160f81b03198416606560f81b14613858565b5050505050600190565b506001600160f81b03198416606d60f81b1461384e565b506001600160f81b03198316603160f91b14613848565b506001600160f81b03198516606560f81b14613842565b50600419830183811161121257601760f91b906001600160f81b0319906139a19085613739565b511614613796565b6002198301838111611212576139cd906001600160f81b0319906137ba9085613739565b6001198401848111611212576139f1906001600160f81b0319906137ba9086613739565b905f19850185811161121257613a15906001600160f81b0319906137ba9087613739565b906001600160f81b031916606d60f81b81148080613d0e575b80613cf7575b613b9c57607760f81b821480613ce0575b80613cc9575b613b9c57606f60f81b82148080613cb2575b80613c9b575b613bd6578180613c84575b80613c6d575b613bd657606160f81b831480613c56575b80613c3f575b613bd6578180613c28575b80613c11575b613bd6578180613bfa575b80613be3575b613bd65780613bbf575b80613ba8575b613b9c5780613b85575b80613b6e575b613b3557606760f81b14918280613b57575b80613b40575b613b355782613b1d575b5081613b05575b501561378b575b505050600190565b6001600160f81b031916603160f91b1490505f613af6565b6001600160f81b031916601b60fa1b1491505f613aef565b505050505050600190565b506001600160f81b03198216603360f91b14613ae5565b506001600160f81b03198116606960f81b14613adf565b506001600160f81b03198216603b60f91b14613acd565b506001600160f81b03198316600d60fa1b14613ac7565b50505050505050600190565b506001600160f81b03198316603b60f91b14613abd565b506001600160f81b03198416606760f81b14613ab7565b5050505050505050600190565b506001600160f81b03198416603b60f91b14613aad565b506001600160f81b03198516606f60f81b14613aa7565b506001600160f81b03198416600d60fa1b14613a9c565b506001600160f81b03198516600760fc1b14613a96565b506001600160f81b03198416606360f81b14613a8b565b506001600160f81b03198516606160f81b14613a85565b506001600160f81b03198416606160f81b14613a74565b506001600160f81b03198516600d60fa1b14613a6e565b506001600160f81b03198416606760f81b14613a63565b506001600160f81b03198516606760f81b14613a5d565b506001600160f81b03198316603b60f91b14613a4b565b506001600160f81b03198416606160f81b14613a45565b506001600160f81b03198316603360f81b14613a34565b506001600160f81b03198416600760fc1b14613a2e565b8115610c265760208101516001600160f81b031916601960fa1b1480614152575b8061412d575b80614108575b806140e3575b1561375f57805160051015610c26576025810180516001600160f81b031916606160f81b14806140be575b80614099575b80614074575b8061404f575b8061402a575b613afd57815160051015610c265780516001600160f81b031916603b60f91b1480614005575b80613fe0575b80613fbb575b80613f96575b80613f71575b613afd57600e8310159081613f4e575b5080613f29575b80613f04575b80613edf575b80613eba575b80613e95575b80613e70575b80613e4b575b80613e26575b1561375f575050600190565b508051600d1015610c2657602d8101516001600160f81b031916603360f91b14613e1a565b508051600c1015610c2657602c8101516001600160f81b031916606960f81b14613e14565b508051600b1015610c2657602b8101516001600160f81b031916606760f81b14613e0e565b508051600a1015610c2657602a8101516001600160f81b031916602f60f81b14613e08565b50805160091015610c265760298101516001600160f81b031916606560f81b14613e02565b50805160081015610c265760288101516001600160f81b031916606760f81b14613dfc565b50805160071015610c265760278101516001600160f81b031916606160f81b14613df6565b50805160061015610c265760268101516001600160f81b031916606d60f81b14613df0565b9050815160051015610c2657516001600160f81b031916606960f81b145f613de9565b508151600a1015610c2657602a8201516001600160f81b031916602f60f81b14613dd9565b50815160091015610c265760298201516001600160f81b031916606f60f81b14613dd3565b50815160081015610c265760288201516001600160f81b031916606560f81b14613dcd565b50815160071015610c265760278201516001600160f81b031916601960fa1b14613dc7565b50815160061015610c265760268201516001600160f81b031916606960f81b14613dc1565b508151600a1015610c2657602a8201516001600160f81b031916602f60f81b14613d9b565b50815160091015610c265760298201516001600160f81b031916606f60f81b14613d95565b50815160081015610c265760288201516001600160f81b031916606960f81b14613d8f565b50815160071015610c265760278201516001600160f81b031916601960fa1b14613d89565b50815160061015610c265760268201516001600160f81b031916607560f81b14613d83565b50805160041015610c265760248101516001600160f81b031916601d60f91b14613d58565b50805160031015610c265760238101516001600160f81b031916606160f81b14613d52565b50805160021015610c265760228101516001600160f81b031916601d60fa1b14613d4c565b50805160011015610c265760218101516001600160f81b031916606160f81b14613d46565b906141818261220a565b61418e6040519182612119565b828152809261419f601f199161220a565b0190602036910137565b80515f5f5b82811061434d57508015614348576141c96141ce9183612619565b614177565b915f90604051916141e0604084612119565b601083526f181899199a1a9b1b9c1cb0b131b232b360811b60208401525f915b84831061420f57505050505090565b6142198382613739565b51928360f81c60228114801561433e575b15614274575082605c61424961424260019596612afb565b928a613739565b5361426a61425682612afb565b956001600160f81b0319165f1a9189613739565b535b019190614200565b602081101561432c578394605c61429761429060019697612afb565b978b613739565b5360756142a661429088612afb565b5360306142b561429088612afb565b5360306142c461429088612afb565b536001600160f81b0319906142dc9060fc1c88613739565b5116946142f56142eb82612afb565b965f1a918a613739565b536001600160f81b03199061430d90600f1687613739565b51169361432661431c82612afb565b955f1a9189613739565b5361426c565b50826143266142566001949592612afb565b50605c811461422a565b505090565b90601160f91b6001600160f81b03196143668487613739565b51161480156143b9575b1561438857614380600191612afb565b915b016141ae565b9060206143958286613739565b5160f81c106143a7575b600190614382565b9060058101809111611212579061439f565b50601760fa1b6001600160f81b03196143d28487613739565b511614614370565b6004811015610bb957801561446957600181146144425760021461441d57604051614406604082612119565b6007815266119b1859d9d95960ca1b602082015290565b60405161442b604082612119565b600781526610db185a5b595960ca1b602082015290565b50604051614451604082612119565b600881526715995c9a599a595960c21b602082015290565b50604051614478604082612119565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8210156145d4575b806d04ee2d6d415b85acef8100000000600a9210156145b9575b662386f26fc100008110156145a5575b6305f5e100811015614594575b612710811015614585575b6064811015614577575b101561456c575b600a602160018401936145168561220a565b946145246040519687612119565b808652614533601f199161220a565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304801561434857600a909161453e565b600190910190614504565b6064600291049301926144fd565b612710600491049301926144f3565b6305f5e100600891049301926144e8565b662386f26fc10000601091049301926144db565b6d04ee2d6d415b85acef8100000000602091049301926144cb565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b81046144b1565b8015611212575f190190565b906020825111156121725760208251811015610c2657608060c082808601015160f81c1614614672575b61463681614177565b905f5b818110614647575090925050565b6001906001600160f81b031961465d8288613739565b51165f1a61466b8286613739565b5301614639565b80151580614693575b1561468e57614689906145f7565b614672565b61462d565b50608060c06146a28386613739565b5160f81c161461467b565b80515f5f5b82811061489757508015614348576141c96146cd9183612619565b915f905f5b8381106146e0575050505090565b6001600160f81b03196146f38284613739565b5116601360f91b810361475d5750600190602661471961471286612afb565b9588613739565b53606161472861471286612afb565b53606d61473761471286612afb565b53607061474661471286612afb565b53603b61475561471286612afb565b535b016146d2565b600f60fa1b81036147ad5750600190602661477a61471286612afb565b53606c61478961471286612afb565b53607461479861471286612afb565b53603b6147a761471286612afb565b53614757565b601f60f91b81036147d9575060019060266147ca61471286612afb565b53606761478961471286612afb565b601160f91b8103614823575060019060266147f661471286612afb565b53607161480561471286612afb565b53607561481461471286612afb565b53606f61478961471286612afb565b602760f81b810361487c5750600190602661484061471286612afb565b53606161484f61471286612afb565b53607061485e61471286612afb565b53606f61486d61471286612afb565b53607361479861471286612afb565b92600191906147a761488d82612afb565b955f1a9188613739565b90601360f91b6001600160f81b03196148b08487613739565b5116036148cd576004810180911161121257600190915b016146b2565b600f60fa1b6001600160f81b03196148e58487613739565b511603614900576003810180911161121257600190916148c7565b601f60f91b6001600160f81b03196149188487613739565b511603614933576003810180911161121257600190916148c7565b601160f91b6001600160f81b031961494b8487613739565b511603614966576005810180911161121257600190916148c7565b90602760f81b6001600160f81b031961497f8387613739565b51161461498f575b6001906148c7565b90600581018091116112125790614987565b90815115614ac0578151600281018091116112125760039004600281901b91906001600160fe1b0381160361121257604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b808910614a845750602095969750906003929152510680600114614a6f57600214614a62575b50808452830101604052565b603d905f1901535f614a56565b50603d90815f1982015360011901535f614a56565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c16516002840153165160038201530193614a30565b90506040516132b4602082612119565b8060f81c604181101580614b04575b614ae7575090565b602091500160ff81116112125760f81b6001600160f81b03191690565b50605a811115614adf56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220bdae3e5d879a831bc8868968b9e54b8fec0e3a05df8c748aa20471f36e532a0064736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
              "name": "ids",
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
      "bytecode": "0x6080346100af57601f61317638819003918201601f19168301916001600160401b038311848410176100b35780849260409485528339810103126100af5761007f610055602061004e846100c7565b93016100c7565b9160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556100db565b50600180546001600160a01b0319166001600160a01b0392909216919091179055604051612ff190816101658239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100af57565b6001600160a01b0381165f9081525f5160206131565f395f51905f52602052604090205460ff1661015f576001600160a01b03165f8181525f5160206131565f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c90816301ffc9a714611fa557508063025f75ac14611ead5780630412619614611e69578063150b7a0214611cc0578063248a9ca314611c8e5780632f2ff15d14611c515780632f3ef6021461197c5780632ff1d0f91461194a578063358d48d91461189b57806335f81b871461162757806336568abe146115e2578063380ff999146115995780634242b746146114095780635daa63c7146111ea5780636f39becd1461119e5780637b103999146111755780637b606fdc1461108757806381bd34d21461103e57806391d1485414610ff5578063a217fddf14610fd9578063bc197c8114610d98578063c10e515314610ce1578063c2fe518514610ab9578063c555abb41461075f578063cee0826d14610600578063d547741f146105b9578063d6bd07ee1461057e578063d74238581461055e578063e086e5ec146104cd578063f07a380e1461048b578063f23a6e611461028a5763f4f3b2000361000f57346102875760203660031901126102875761019d612058565b6101a5612984565b6040516370a0823160e01b81523060048201526001600160a01b039190911690602081602481855afa90811561027c578391610246575b506040519063a9059cbb60e01b84523360045260245260208360448180865af1906001845114821615610226575b5015610214575080f35b635274afe760e01b8252600452602490fd5b600182151661023e5750813b15153d1516165f61020a565b3d84823e3d90fd5b90506020813d602011610274575b816102616020938361209a565b8101031261027057515f6101dc565b5f80fd5b3d9150610254565b6040513d85823e3d90fd5b80fd5b50346102875760a0366003190112610287576102a4612058565b6102ac61206e565b6044359160643591608435906001600160401b038211610487576024926102da6102e89336906004016120ea565b916102e36124ef565b612793565b3386526003602052604086208587526020526040862060018060a01b0383165f5260205260405f2061031b858254612249565b905580156104805761032d9042612249565b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20548111610451575b506001546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561044657604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35948891610424575b5001519533815260056020528181208682526020522060018060a01b0382165f5260205260405f2054906103fe60405192839260018060a01b03169733968461249c565b0390a460015f516020612f7c5f395f51905f525560405163f23a6e6160e01b8152602090f35b61044091503d808a833e610438818361209a565b8101906122bd565b5f6103ba565b6040513d87823e3d90fd5b3386526005602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f61035d565b508461032d565b8580fd5b5034610287576040366003190112610287576104b96104a8612058565b6104b06124ef565b60243590612c40565b60015f516020612f7c5f395f51905f525580f35b50346102875780600319360112610287576104e6612984565b8080808047335af13d15610559573d6104fe816120cf565b9061050c604051928361209a565b81528260203d92013e5b1561051e5780f35b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b610516565b5034610287576104b961057036612130565b916105796124ef565b612dd0565b5034610287576080366003190112610287576104b961059b612058565b6105a3612042565b906105ac6124ef565b6044359060243590612573565b5034610287576040366003190112610287576105fc6004356105d961206e565b906105f76105f2825f525f602052600160405f20015490565b6129d3565b612d50565b5080f35b5034610287576060366003190112610287576004356001600160401b03811161075b57610631903690600401612012565b90826024356001600160401b03811161075b57610652903690600401612012565b9390926044356106606124ef565b61066b8684146121d1565b8015610743576040519060208201526020815261068960408261209a565b915b835b8181106106a9578460015f516020612f7c5f395f51905f525580f35b6001600160a01b036106c46106bf838587612211565b612235565b166106d0828989612211565b3590803b1561073f578587916106ff9383604051809681958294635c46a7ef60e11b84523033600486016124be565b03925af190811561073457869161071b575b505060010161068d565b816107259161209a565b61073057845f610711565b8480fd5b6040513d88823e3d90fd5b8680fd5b5060405161075260208261209a565b8381529161068b565b5080fd5b50346102875760a036600319011261028757610779612058565b906024356001600160401b03811161075b57610799903690600401612012565b90926044356001600160401b038111610ab5576107ba903690600401612012565b9490926107c5612042565b906084356107d16124ef565b6107dc8883146121d1565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015610aaa578990610a6b575b6108279150949194612527565b6001600160a01b039093169233885b848110610946575050509686978015155f1461092757604080513360208201529081019190915261087481606081015b03601f19810183528261209a565b945b833b15610923576108df88966108cd6108bb9989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612464565b86810360031901606488015291612464565b83810360031901608485015290612368565b03925af1801561091857610903575b5060015f516020612f7c5f395f51905f525580f35b8161090d9161209a565b61028757805f6108ee565b6040513d84823e3d90fd5b8780fd5b506040513360208201526020815261094060408261209a565b94610876565b808b610961826109596001958a8d612211565b35928d612211565b3590888d5260036020528c8160408220915260205260408d20855f526020526109908260405f205410156123c8565b888d5260056020528c8160408220915260205260408d20855f526020526109bd60405f205442101561240b565b888d5260036020528c8160408220915260205260408d20855f5260205260405f206109e9838254612457565b9055888d5260036020528c8160408220915260205260408d20855f5260205260405f205415610a43575b604080519283526001600160a01b038716602084015233928a915f516020612f9c5f395f51905f5291a401610836565b888d5260056020528c8160408220915260205260408d20855f526020528c60405f2055610a13565b506020813d602011610aa2575b81610a856020938361209a565b81010312610a9e57610a996108279161226a565b61081a565b8880fd5b3d9150610a78565b6040513d8b823e3d90fd5b8380fd5b503461028757608036600319011261028757610ad3612058565b602435610ade612084565b8360643593610aeb6124ef565b60018060a01b031691828252600260205260408220848352602052610b1d60018060a01b036040842054163314612c04565b60015460405163b9209e3360e01b81526001600160a01b0383811660048301819052979260209183916024918391165afa8015610cd6578490610c9b575b610b659150612527565b838352600460205260408320858452602052610b87604084205442101561240b565b838352600260209081526040808520878652825280852080546001600160a01b03191690558585526004825280852087865290915283208390558015610c7c576040805133602082015290810191909152610be58160608101610866565b905b833b15610c7857848391610c106040519485938493635c46a7ef60e11b855230600486016124be565b038183875af1801561091857610c63575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f516020612f7c5f395f51905f525580f35b81610c6d9161209a565b610ab557835f610c21565b8280fd5b5060405133602082015260208152610c9560408261209a565b90610be7565b506020813d602011610cce575b81610cb56020938361209a565b81010312610ab557610cc9610b659161226a565b610b5b565b3d9150610ca8565b6040513d86823e3d90fd5b5034610287576060366003190112610287576004356001600160401b03811161075b57610d12903690600401612012565b6024356001600160401b038111610ab557610d31903690600401612012565b610d39612084565b92610d426124ef565b610d4d8282146121d1565b855b818110610d6b578660015f516020612f7c5f395f51905f525580f35b80610d9286610d806106bf600195878c612211565b610d8b84888a612211565b3590612dd0565b01610d4f565b50346102875760a036600319011261028757610db2612058565b610dba61206e565b916044356001600160401b03811161075b57610dda90369060040161216a565b926064356001600160401b038111610c7857610dfa90369060040161216a565b926084356001600160401b038111610ab557906102da610e1f939236906004016120ea565b9092908015610fd257610e329042612249565b6001546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa908115610cd657906040918591610fb8575b50015192805b8651811015610f955780610e8b60019289612488565b51610e968287612488565b519033855260036020526040852081865260205260408520848060a01b038a165f5260205260405f20610eca838254612249565b905533855260056020526040852081865260205260408520848060a01b038a165f5260205260405f20548611610f67575b33855260056020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3560405180610f5e8d898060a01b0316968d33968461249c565b0390a401610e75565b33855260056020526040852081865260205260408520848060a01b038a165f526020528560405f2055610efb565b60015f516020612f7c5f395f51905f525560405163bc197c8160e01b8152602090f35b610fcc91503d8087833e610438818361209a565b5f610e6f565b5081610e32565b5034610287578060031936011261028757602090604051908152f35b503461028757604036600319011261028757604061101161206e565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b503461028757604061104f36612130565b939160018060a01b031682526003602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b5034610287576060366003190112610287576004356001600160401b03811161075b576110b8903690600401612012565b6024356001600160401b038111610ab5576110d7903690600401612012565b6044929192356001600160401b038111610487576110f9903690600401612012565b9190926111046124ef565b8181148061116c575b611116906121d1565b865b818110611134578760015f516020612f7c5f395f51905f525580f35b806111666111486106bf600194868c612211565b61115383878b612211565b3561115f84898b612211565b3591612a93565b01611118565b5081831461110d565b50346102875780600319360112610287576001546040516001600160a01b039091168152602090f35b5034610287576040366003190112610287576020906001600160a01b036111c3612058565b168152600282526040812060243582528252604060018060a01b0391205416604051908152f35b503461028757606036600319011261028757611204612058565b906024356001600160401b03811161075b57611224903690600401612012565b6044356001600160401b038111610ab557611243903690600401612012565b92909161124e6124ef565b6112598482146121d1565b33956001600160a01b031690855b8181106112e75750859650813b15610487578560206112b482966108bb98604051998a988997631759616b60e11b89523060048a01523360248a015260a060448a015260a4890191612464565b8284820391600319830160848701525201925af1801561091857610903575060015f516020612f7c5f395f51905f525580f35b806112f56001928487612211565b35611301828989612211565b3590858a52600360205260408a20818b5260205260408a208b5f5260205261132f8260405f205410156123c8565b858a52600560205260408a20818b5260205260408a208b5f5260205261135b60405f205442101561240b565b858a52600360205260408a20818b5260205260408a208b5f5260205260405f20611386838254612457565b9055858a52600360205260408a20818b5260205260408a208b5f5260205260405f2054156113e2575b604051918252857fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a401611267565b858a52600560205260408a20818b5260205260408a208b5f526020528960405f20556113af565b5034610287576080366003190112610287576004356001600160401b03811161075b5761143a903690600401612012565b826024356001600160401b03811161075b5761145a903690600401612012565b92906044356001600160401b038111610ab55761147b903690600401612012565b9290946064356114896124ef565b81831480611590575b61149b906121d1565b801561157857604051906020820152602081526114b960408261209a565b935b855b8381106114d9578660015f516020612f7c5f395f51905f525580f35b6001600160a01b036114ef6106bf83878d612211565b166114fb828588612211565b3561150783858c612211565b3590823b1561157457611538928a92838b9360405196879586948593637921219560e11b855230336004870161238c565b03925af1908115611569578891611554575b50506001016114bd565b8161155e9161209a565b61073f57865f61154a565b6040513d8a823e3d90fd5b8980fd5b5060405161158760208261209a565b858152936114bb565b50818514611492565b50346102875760406115aa36612130565b939160018060a01b031682526005602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b5034610287576040366003190112610287576115fc61206e565b336001600160a01b03821603611618576105fc90600435612d50565b63334bd91960e11b8252600482fd5b50346102875760a036600319011261028757611641612058565b60243560443591611650612042565b846084359261165d6124ef565b6001600160a01b03168082526003602090815260408084208785528252808420335f9081529252902054909390611696908711156123c8565b60015460405163b9209e3360e01b81526001600160a01b038581166004830152909160209183916024918391165afa801561027c578390611860575b6116dc9150612527565b8382526005602090815260408084208785528252808420335f90815292529020546117099042101561240b565b8382526003602052604082208583526020526040822060018060a01b0333165f5260205260405f2061173c878254612457565b90558382526003602090815260408084208785528252808420335f908152925290205415611838575b801561181a5760408051336020820152908101919091526117898160608101610866565b833b1561075b57816117b39160405180938192637921219560e11b83528a8a89306004870161238c565b038183885af1801561091857611805575b5050604080519485526001600160a01b0391909116602085015233935f516020612f9c5f395f51905f529190a460015f516020612f7c5f395f51905f525580f35b8161180f9161209a565b61073057845f6117c4565b506040513360208201526020815261183360408261209a565b611789565b8382526005602090815260408084208785528252808420335f90815292529020829055611765565b506020813d602011611893575b8161187a6020938361209a565b81010312610c785761188e6116dc9161226a565b6116d2565b3d915061186d565b5034610287576040366003190112610287576004356001600160401b03811161075b576118cc903690600401612012565b6024356001600160401b038111610ab5576118eb903690600401612012565b90916118f56124ef565b6119008282146121d1565b845b81811061191e578560015f516020612f7c5f395f51905f525580f35b806119446119326106bf600194868a612211565b61193d838789612211565b3590612c40565b01611902565b5034610287576060366003190112610287576104b9611967612058565b61196f6124ef565b6044359060243590612a93565b503461027057608036600319011261027057611996612058565b6024356001600160401b038111610270576119b5903690600401612012565b91906044356001600160401b038111610270576119d6903690600401612012565b90936119e0612042565b916119e96124ef565b6119f48183146121d1565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa8015611aec575f90611c16575b611a3f9150949194612527565b6001600160a01b0390931692335f5b848110611af7575050506040519433602087015260208652611a7160408761209a565b833b1561027057611ab65f966108cd6108bb9989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612464565b03925af18015611aec57611ad9575060015f516020612f7c5f395f51905f525580f35b611ae591505f9061209a565b5f5f6108ee565b6040513d5f823e3d90fd5b80611b05600192878a612211565b35611b1182878d612211565b3590885f52600360205260405f20815f5260205260405f20855f52602052611b3f8260405f205410156123c8565b885f52600560205260405f20815f5260205260405f20855f52602052611b6b60405f205442101561240b565b885f52600360205260405f20815f5260205260405f20855f5260205260405f20611b96838254612457565b9055885f52600360205260405f20815f5260205260405f20855f5260205260405f205415611bef575b604080519283526001600160a01b038716602084015233928a915f516020612f9c5f395f51905f5291a401611a4e565b885f52600560205260405f20815f5260205260405f20855f526020525f6040812055611bbf565b506020813d602011611c49575b81611c306020938361209a565b8101031261027057611c44611a3f9161226a565b611a32565b3d9150611c23565b346102705760403660031901126102705761001a600435611c7061206e565b90611c896105f2825f525f602052600160405f20015490565b612a0b565b34610270576020366003190112610270576020611cb86004355f525f602052600160405f20015490565b604051908152f35b3461027057608036600319011261027057611cd9612058565b611ce161206e565b9060443591606435916001600160401b038311610270576102da611d099336906004016120ea565b335f908152600260209081526040808320868452909152902080546001600160a01b0319166001600160a01b0390931692831790559091908015611e6257611d519042612249565b335f52600460205260405f20825f5260205260405f20548111611e45575b506001546040516390229af760e01b8152306004820152905f90829060249082906001600160a01b03165afa8015611aec576040915f91611e2b575b500151335f52600460205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad360405f205491611dfc60405191604083526040830190612368565b9260208201528033930390a460015f516020612f7c5f395f51905f5255604051630a85bd0160e11b8152602090f35b611e3f91503d805f833e610438818361209a565b84611dab565b335f52600460205260405f20825f5260205260405f205582611d6f565b505f611d51565b34610270576040366003190112610270576001600160a01b03611e8a612058565b165f52600460205260405f206024355f52602052602060405f2054604051908152f35b34610270576080366003190112610270576004356001600160401b03811161027057611edd903690600401612012565b906024356001600160401b03811161027057611efd903690600401612012565b9190926044356001600160401b03811161027057611f1f903690600401612012565b9490611f29612042565b92611f326124ef565b85811480611f9c575b611f44906121d1565b5f5b818110611f605760015f516020612f7c5f395f51905f5255005b80611f9686898b611f8f85611f8781611f808f60019b8d6106bf92612211565b958d612211565b35928a612211565b3591612573565b01611f46565b50858714611f3b565b34610270576020366003190112610270576004359063ffffffff60e01b821680920361027057602091637965db0b60e01b8114908115611fe7575b5015158152f35b630271189760e51b811491508115612001575b5083611fe0565b6301ffc9a760e01b14905083611ffa565b9181601f84011215610270578235916001600160401b038311610270576020808501948460051b01011161027057565b606435906001600160a01b038216820361027057565b600435906001600160a01b038216820361027057565b602435906001600160a01b038216820361027057565b604435906001600160a01b038216820361027057565b90601f801991011681019081106001600160401b038211176120bb57604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b0381116120bb57601f01601f191660200190565b81601f8201121561027057803590612101826120cf565b9261210f604051948561209a565b8284526020838301011161027057815f926020809301838601378301015290565b6060906003190112610270576004356001600160a01b03811681036102705790602435906044356001600160a01b03811681036102705790565b9080601f83011215610270578135916001600160401b0383116120bb578260051b906040519361219d602084018661209a565b845260208085019282010192831161027057602001905b8282106121c15750505090565b81358152602091820191016121b4565b156121d857565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156122215760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102705790565b9190820180921161225657565b634e487b7160e01b5f52601160045260245ffd5b5190811515820361027057565b81601f820112156102705780519061228e826120cf565b9261229c604051948561209a565b8284526020838301011161027057815f9260208093018386015e8301015290565b602081830312610270578051906001600160401b03821161027057016080818303126102705760405191608083018381106001600160401b038211176120bb576040526123098261226a565b8352602082015160ff8116810361027057602084015260408201516001600160401b038111610270578161233e918401612277565b604084015260608201516001600160401b038111610270576123609201612277565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a0608082018190526123c592910190612368565b90565b156123cf57565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561241257565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b9190820391821161225657565b81835290916001600160fb1b0383116102705760209260051b809284830137010190565b80518210156122215760209160051b010190565b9392916124b9906040928652606060208701526060860190612368565b930152565b6001600160a01b0391821681529116602082015260408101919091526080606082018190526123c592910190612368565b60025f516020612f7c5f395f51905f5254146125185760025f516020612f7c5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b1561252e57565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b6001600160a01b03165f8181526003602090815260408083208584528252808320338452909152902054929391929091906125b0908511156123c8565b60015460405163b9209e3360e01b81526001600160a01b038381166004830152909160209183916024918391165afa8015611aec575f90612744575b6125f69150612527565b5f82815260056020908152604080832086845282528083203384529091529020546126239042101561240b565b815f52600360205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f20612656858254612457565b90555f82815260036020908152604080832086845282528083203384529091529020541561271e575b604051903360208301526020825261269860408361209a565b823b15610270575f6126c29260405180948192637921219560e11b8352898987306004870161238c565b038183875af1908115611aec575f516020612f9c5f395f51905f52926127099261270e575b50604080519687526001600160a01b0390911660208701523395918291820190565b0390a4565b5f6127189161209a565b5f6126e7565b5f828152600560209081526040808320868452825280832033845290915281205561267f565b506020813d602011612777575b8161275e6020938361209a565b81010312610270576127726125f69161226a565b6125ec565b3d9150612751565b51906001600160a01b038216820361027057565b6001600160a01b0381168015939291841561297f5750815b60015460405163b9209e3360e01b81526001600160a01b0394851660048201525f96909492939290911690602085602481855afa948515611aec575f95612943575b501591826128d4575b50508351926020840361285757811561284f575b501561283657508160209181010312610270576001600160a01b03906128329060200161277f565b1691565b9392506020808301929182019190910312610270575190565b90505f61280a565b604084939795941461286a575b50505050565b9395929450909281156128cc575b50156128b2575081604091810103126102705760406128996020830161277f565b9101516001600160a01b03909116915b5f808080612864565b9291602080820192820191909103126102705751906128a9565b90505f612878565b602091925060246040518094819363b9209e3360e01b835260048301525afa908115611aec575f91612909575b505f806127f6565b90506020813d60201161293b575b816129246020938361209a565b81010312610270576129359061226a565b5f612901565b3d9150612917565b9094506020813d602011612977575b8161295f6020938361209a565b81010312610270576129709061226a565b935f6127ed565b3d9150612952565b6127ab565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16156129bc57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156129f55750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16612a8d575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b03165f8181526003602090815260408083208584528252808320338452909152902054612ac9908411156123c8565b5f8181526005602090815260408083208584528252808320338452909152902054612af69042101561240b565b805f52600360205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f20612b29848254612457565b90555f818152600360209081526040808320858452825280832033845290915290205415612bde575b803b1561027057604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af18015611aec57612bce575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f612bd89161209a565b5f612b9f565b5f8181526005602090815260408083208584528252808320338452909152812055612b52565b15612c0b57565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b6001600160a01b039081165f818152600260209081526040808320868452909152812054909392612c7391163314612c04565b805f52600460205260405f20825f52602052612c9560405f205442101561240b565b805f52600260205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055805f52600460205260405f20825f526020525f6040812055803b1561027057604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af18015611aec57612d3b575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b612d489193505f9061209a565b5f915f612d13565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615612a8d575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b60018060a01b0316805f52600260205260405f20825f52602052612e0160018060a01b0360405f2054163314612c04565b60015460405163b9209e3360e01b81526001600160a01b0385811660048301819052959260209183916024918391165afa8015611aec575f90612f40575b612e499150612527565b815f52600460205260405f20835f52602052612e6b60405f205442101561240b565b815f52600260205260405f20835f5260205260405f206bffffffffffffffffffffffff60a01b8154169055815f52600460205260405f20835f526020525f60408120556040519033602083015260208252612ec760408361209a565b823b1561027057835f91612ef06040519485938493635c46a7ef60e11b855230600486016124be565b038183865af18015611aec57612f30575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f612f3a9161209a565b5f612f01565b506020813d602011612f73575b81612f5a6020938361209a565b8101031261027057612f6e612e499161226a565b612e3f565b3d9150612f4d56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00d582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1a2646970667358221220499c191ba0ae8a6049b20dc6e9ef2b7f319f72b6842539b8dfa0da5d3c36552f64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034609157601f6104dc38819003918201601f19168301916001600160401b03831184841017609557808492604094855283398101031260915780516001600160a01b0381169190829003609157602001516001600160a01b038116919082900360915760018060a01b03195f5416175f5560018060a01b0319600154161760015560405161043290816100aa8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea264697066735822122043c986ab97815f0f0a1bfde7ac0c5c0279690ade989cc82682d6372146e2fb9d64736f6c634300081c0033"
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
              "name": "newAmounts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "newPrices",
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
      "bytecode": "0x60a03461010357601f613ad238819003918201601f19168301916001600160401b038311848410176101075780849260409485528339810103126101035780610056602061004f6100a49461011b565b920161011b565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600480546001600160a01b03191691831691909117905561012f565b506040516138f990816101b9823960805181818161069101528181610712015281816110dc0152818161130a01528181611e58015281816120f20152818161230f01528181612ffb015281816137650152818161378f01526137cd0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820361010357565b6001600160a01b0381165f9081525f516020613ab25f395f51905f52602052604090205460ff166101b3576001600160a01b03165f8181525f516020613ab25f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c806301340bc7146118a757806301ffc9a714611851578063058a56ac1461170f5780630ad794ea1461166d5780631205fd001461159e578063161878e91461157c5780631b8e414614611471578063248a9ca31461143f5780632df4dfe6146113955780632e74ee72146113765780632f2ff15d146113395780633013ce29146112f5578063326d0da0146111d657806335659fb8146111b957806336568abe146111755780633bbb280614611156578063469048401461112e5780635536372414610fd857806361360aae14610e525780636bd3a64b14610de157806370cdec3d14610d87578063787dce3d14610cf45780637889ab5014610c6a5780637c3ae2be14610c4d57806391d1485414610c05578063a217fddf14610beb578063a7c546b314610b62578063b2ddee0614610ab0578063b3b8d36114610948578063c7fff71914610926578063cddc1bc114610907578063d3f494cc1461089c578063d547741f1461085a578063d55a8185146105db578063d898aaf2146105a6578063d9964757146104b3578063e086e5ec14610401578063e74b981b14610362578063ef71f54114610316578063f4f3b200146102745763f81b9d590361000e5734610270576101ef36611961565b9291946101fa611d78565b85851480610267575b61020c90611c27565b5f5b8581106102285760015f5160206138a45f395f51905f5255005b8061026161024161023c6001948a87611c67565b611c8b565b61024c838b89611c67565b3561025b61023c858b8a611c67565b91612ecc565b0161020e565b50858414610203565b5f80fd5b346102705760203660031901126102705761028d6119d3565b610295612b1b565b6040516370a0823160e01b8152306004820152906001600160a01b0316602082602481845afa90811561030b575f916102d5575b61001892503390611f88565b90506020823d602011610303575b816102f060209383611cba565b81010312610270576100189151906102c9565b3d91506102e3565b6040513d5f823e3d90fd5b34610270576020366003190112610270577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a33506020600435610355612b1b565b80600555604051908152a1005b346102705760203660031901126102705761037b6119d3565b610383612b1b565b6001600160a01b031680156103ca57600480546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc25f80a2005b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b34610270575f36600319011261027057610419612b1b565b5f80808047335af13d156104ae573d6001600160401b03811161049a576040519061044e601f8201601f191660200183611cba565b81525f60203d92013e5b1561045f57005b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b634e487b7160e01b5f52604160045260245ffd5b610458565b34610270577f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd6104e236611bf9565b6001600160a01b0384165f818152600260209081526040808320878452825280832033845290915290819020905192969495919493929161057c916105659061052a85611c9f565b80546001600160a01b039081168652600182015460208701819052600283015460408801526003909201541660609095019485521515611cdb565b82516001600160a01b0316908890859089906127bb565b516040805196875260208701929092526001600160a01b031690850152339380606081015b0390a4005b34610270576105c86105b736611bf9565b926105c3929192611d78565b612092565b60015f5160206138a45f395f51905f5255005b34610270576105e936611b41565b9190936105f4611d78565b6001600160a01b03165f8181526001602090815260408083208784528252808320338452909152902080549193919290831561081e5760055487106107d957861561079557811561074657600383917f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be22958315801561073d575b61067790612055565b89818111156106f2576106b59161068d91612a1c565b30337f000000000000000000000000000000000000000000000000000000000000000061318c565b8881556001810184905542600282015501556040805196875260208701919091528501523393606090a460015f5160206138a45f395f51905f5255005b90808210610702575b50506106b5565b6107369161070f91612a1c565b337f0000000000000000000000000000000000000000000000000000000000000000611f88565b888a6106fb565b5042841161066e565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601760248201527f4e65772070726963652062656c6f77206d696e696d756d0000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b34610270576040366003190112610270576100186004356108796119e9565b90610897610892825f525f602052600160405f20015490565b612b6a565b612c2a565b34610270576108aa36611b73565b9160018060a01b03165f52600160205260405f20905f5260205260405f209060018060a01b03165f52602052608060405f208054906001810154906003600282015491015491604051938452602084015260408301526060820152f35b34610270576105c861091836611b73565b91610921611d78565b612ecc565b34610270576105c861093736611bf9565b92610943929192611d78565b612a3d565b346102705761095636611a8f565b959790939491969288821480610aa7575b80610a9e575b80610a95575b61097c90611c27565b5f5b82811061098757005b6001600160a01b0361099a828a89611c67565b6109a390611c8b565b1615156109af90611d20565b6109ba81848d611c67565b6109c390611c8b565b6109ce828c88611c67565b356109da838a88611c67565b356109e6848d87611c67565b35906109f3858d8c611c67565b6109fc90611c8b565b92610a06946127bb565b610a1181848d611c67565b610a1a90611c8b565b610a25828c88611c67565b35610a31838c86611c67565b35610a3d848b89611c67565b3590610a4a858d8c611c67565b610a5390611c8b565b6040805192835260208301939093526001600160a01b03908116928201929092523393909116905f5160206138845f395f51905f5290606090a460010161097e565b50878714610973565b5087861461096d565b50858914610967565b3461027057604036600319011261027057610ac96119d3565b6001600160a01b03165f81815260026020908152604080832060243580855290835281842033855290925290912060010154610b06901515611cdb565b5f82815260026020818152604080842085855282528084203385529091528220828155600181018390559081018290556003015533917fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4005b346102705760a036600319011261027057610b7b6119d3565b6024356064356084356001600160a01b0381169060443582820361027057610bb25f5160206138845f395f51905f52931515611d20565b610bbf828583888a6127bb565b6040805194855260208501919091526001600160a01b03918216908401523394169180606081016105a1565b34610270575f3660031901126102705760206040515f8152f35b3461027057604036600319011261027057610c1e6119e9565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610270575f366003190112610270576020600554604051908152f35b3461027057610c7836611961565b929194610c83611d78565b85851480610ceb575b610c9590611c27565b5f5b858110610cb15760015f5160206138a45f395f51905f5255005b80610ce5610cc561023c6001948a87611c67565b610cd0838b89611c67565b35610cdf61023c858b8a611c67565b91612cee565b01610c97565b50858414610c8c565b3461027057602036600319011261027057600435610d10612b1b565b6103e88111610d4a576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600355604051908152a1005b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b34610270575f5160206138845f395f51905f526105a1610da636611bf9565b9294919390610db784828789612481565b6040805194855260208501919091525f9084015233946001600160a01b0316929081906060820190565b3461027057610def36611b73565b6001600160a01b039283165f90815260026020818152604080842095845294815284832093861683529283529083902080546001820154928201546003909201548551918716825293810192909252928101929092529091166060820152608090f35b3461027057610e60366119ff565b949395969086889493941480610fcf575b80610fc6575b610e8390989598611c27565b33945f5b818110610e9057005b85898b83610e9f81878a611c67565b610ea890611c8b565b92610eb292611c67565b3590600160a01b60019003811690815f52600260205260405f20835f5260205260405f208b5f5260205282858d8b8260405f209860405199610ef38b611c9f565b80546001600160a01b039081168c52600182015460208d01819052600283015460408e0152600390920154166060909b019a8b52610f32901515611cdb565b610f3b92611c67565b3591610f47918b611c67565b3590600160a01b6001900387511692610f5f946127bb565b610f6a848c88611c67565b35610f76858b8b611c67565b935160408051928352943560208301526001600160a01b03169381019390935233927f922427dd7dd059afa2877400bf8f56edb1c57e43e3c5ffa288fdb920c0a5a4fd90606090a4600101610e87565b50838614610e77565b50838714610e71565b3461027057610fe636611bad565b9290610ff0611d78565b610ffb848414611c27565b33915f5b8481106110195760015f5160206138a45f395f51905f5255005b8061102a61023c6001938886611c67565b611035828987611c67565b3590838060a01b031690815f528360205260405f20815f5260205260405f20875f5260205260405f206040519061106b82611c9f565b6003815491828452878101546020850152600281015460408501520154606083015261109b575b50505001610fff565b61110090835f528560205260405f20835f5260205260405f20895f526020526110d860405f2060035f918281558260018201558260028201550155565b51337f0000000000000000000000000000000000000000000000000000000000000000611f88565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a4878080611092565b34610270575f366003190112610270576004546040516001600160a01b039091168152602090f35b34610270576105c861116736611b73565b91611170611d78565b612cee565b346102705760403660031901126102705761118e6119e9565b336001600160a01b038216036111aa5761001890600435612c2a565b63334bd91960e11b5f5260045ffd5b34610270575f366003190112610270576020600354604051908152f35b34610270576111e436611bad565b6111f18184959414611c27565b335f5b8581106111fd57005b6001906001600160a01b0361121661023c838a8a611c67565b165f52600260205260405f2061122d828688611c67565b355f5260205260405f20835f526020528160405f20015461124f575b016111f4565b818060a01b0361126361023c838a8a611c67565b165f52600260205260405f2061127a828688611c67565b355f5260205260405f20835f526020526112a860405f2060035f918281558260018201558260028201550155565b6112b661023c828989611c67565b33906112c3838789611c67565b3590848060a01b03167fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4611249565b34610270575f366003190112610270576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610270576040366003190112610270576100186004356113586119e9565b90611371610892825f525f602052600160405f20015490565b612ba2565b34610270576105c861138736611b73565b91611390611d78565b611db0565b34610270576113a3366119ff565b95966113b495949593929193611d78565b85881480611436575b8061142d575b6113cc90611c27565b5f5b8881106113e85760015f5160206138a45f395f51905f5255005b806114276113fc61023c6001948d87611c67565b8a611408848c8c611c67565b3561142085611418818b8d611c67565b35938c611c67565b3592612a3d565b016113ce565b508187146113c3565b508186146113bd565b346102705760203660031901126102705760206114696004355f525f602052600160405f20015490565b604051908152f35b346102705761147f366119ff565b84879398979592951480611573575b8061156a575b61149d90611c27565b5f5b8381106114a857005b8087878b5f5160206138845f395f51905f52611561611538868f818b8f8f9c8f61152360019f838f918f998f61023c946115309c6115299a611517878e6115108261151e988f82611509916115038f8f61023c918591611c67565b9b611c67565b3596611c67565b3594611c67565b3592612481565b611c67565b9c611c67565b3598611c67565b35948d611c67565b3560405191829133978a8060a01b031695836040905f9294936060820195825260208201520152565b0390a40161149f565b50878114611494565b5087821461148e565b34610270576105c861158d36611b41565b93611599939193611d78565b612283565b34610270576115ac36611a8f565b6115bd989297969195939498611d78565b81831480611664575b8061165b575b80611652575b6115db90611c27565b5f5b8381106115f75760015f5160206138a45f395f51905f5255005b8061164c8989898f8f8f978961163e828f959b8f8f6116459760019f85809361162a61023c836116379861163096611c67565b9f611c67565b3599611c67565b3597611c67565b3595611c67565b3593612283565b016115dd565b508781146115d2565b508789146115cc565b508882146115c6565b346102705761167b366119ff565b959661168c95949593929193611d78565b85881480611706575b806116fd575b6116a490611c27565b5f5b8881106116c05760015f5160206138a45f395f51905f5255005b806116f76116d461023c6001948d87611c67565b8a6116e0848c8c611c67565b356116f085611418818b8d611c67565b3592612092565b016116a6565b5081871461169b565b50818614611695565b34610270576040366003190112610270576117286119d3565b60243590611734611d78565b6001600160a01b03165f81815260016020908152604080832085845282528083203384529091529081902090519192919061176e82611c9f565b60038154918284526001810154602085015260028101546040850152015460608301521561180c575f8381526001602081815260408084208685528252808420338552909152822082815590810182905560028101829055600301556117d3906110d8565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f5160206138a45f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b346102705760203660031901126102705760043563ffffffff60e01b811680910361027057602090637965db0b60e01b8114908115611896575b506040519015158152f35b6301ffc9a760e01b1490508261188b565b34610270576118b536611961565b9291946118c0611d78565b85851480611928575b6118d290611c27565b5f5b8581106118ee5760015f5160206138a45f395f51905f5255005b8061192261190261023c6001948a87611c67565b61190d838b89611c67565b3561191c61023c858b8a611c67565b91611db0565b016118d4565b508584146118c9565b9181601f84011215610270578235916001600160401b038311610270576020808501948460051b01011161027057565b6060600319820112610270576004356001600160401b038111610270578161198b91600401611931565b929092916024356001600160401b03811161027057816119ad91600401611931565b92909291604435906001600160401b038211610270576119cf91600401611931565b9091565b600435906001600160a01b038216820361027057565b602435906001600160a01b038216820361027057565b6080600319820112610270576004356001600160401b0381116102705781611a2991600401611931565b929092916024356001600160401b0381116102705781611a4b91600401611931565b929092916044356001600160401b0381116102705781611a6d91600401611931565b92909291606435906001600160401b038211610270576119cf91600401611931565b60a0600319820112610270576004356001600160401b0381116102705781611ab991600401611931565b929092916024356001600160401b0381116102705781611adb91600401611931565b929092916044356001600160401b0381116102705781611afd91600401611931565b929092916064356001600160401b0381116102705781611b1f91600401611931565b92909291608435906001600160401b038211610270576119cf91600401611931565b60a0906003190112610270576004356001600160a01b0381168103610270579060243590604435906064359060843590565b6060906003190112610270576004356001600160a01b03811681036102705790602435906044356001600160a01b03811681036102705790565b6040600319820112610270576004356001600160401b0381116102705781611bd791600401611931565b92909291602435906001600160401b038211610270576119cf91600401611931565b6080906003190112610270576004356001600160a01b03811681036102705790602435906044359060643590565b15611c2e57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b9190811015611c775760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036102705790565b608081019081106001600160401b0382111761049a57604052565b90601f801991011681019081106001600160401b0382111761049a57604052565b15611ce257565b60405162461bcd60e51b8152602060048201526016602482015275131a5cdd1a5b99c8191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b15611d2757565b60405162461bcd60e51b8152602060048201526024808201527f507269766174652062757965722063616e6e6f74206265207a65726f206164646044820152637265737360e01b6064820152608490fd5b60025f5160206138a45f395f51905f525414611da15760025f5160206138a45f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b6001600160a01b038181165f8181526002602090815260408083208784528252808320948816835293905282902091519092611deb82611c9f565b82546001600160a01b0390811683526001840154602084018181526002860154604086019081526003909601549092166060909401938452909290611e31901515611cdb565b516001600160a01b03168015908115611f7e575b5015611f1a57611ed690611e7c835130337f000000000000000000000000000000000000000000000000000000000000000061318c565b611e8a84513389898561324f565b845f52600260205260405f20865f5260205260405f2060018060a01b0388165f52602052611ecc60405f2060035f918281558260018201558260028201550155565b86868451926136c7565b519051906040519460018060a01b03168552602085015260408401527f110d72c9f92ff669bf5211e868578c38dff8ce680bdf8b69ad34a1c5c106829860603394a4565b60405162461bcd60e51b815260206004820152603660248201527f50726976617465206c697374696e673a206f6e6c7920746865207370656369666044820152756965642062757965722063616e20707572636861736560501b6064820152608490fd5b905033145f611e45565b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615611fe8575b60405215611fc85750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661200057823b15153d15161690611fbd565b503d5f823e3d90fd5b1561201057565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b1561205c57565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642065787069727960901b6044820152606490fd5b919091600554841061223e5783156121ee576120af821515612009565b6120b96001612055565b6001600160a01b03165f81815260016020908152604080832086845282528083203384529091529020549091906121b2576121168430337f000000000000000000000000000000000000000000000000000000000000000061318c565b60405161212281611c9f565b8481526003602082018381526040830142815260608401915f8352865f52600160205260405f20885f5260205260405f2060018060a01b0333165f5260205260405f20945185555160018501555160028401555191015560405193845260208401525f60408401527f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab60603394a4565b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4f666665722070726963652062656c6f77206d696e696d756d000000000000006044820152606490fd5b9391909293600554851061223e5784156121ee576122a2821515612009565b821580156123bd575b6122b490612055565b6001600160a01b03165f81815260016020908152604080832087845282528083203384529091529020549092906121b2577f90360ccdc7c51a131a260e3256c8f3e24b2eb3487a4beffe8ad841251090c3ab916123338630337f000000000000000000000000000000000000000000000000000000000000000061318c565b60405161233f81611c9f565b868152600360208201838152604083014281526060840191868352885f52600160205260405f208a5f5260205260405f2060018060a01b0333165f5260205260405f2094518555516001850155516002840155519101556123b86040519283923398846040919493926060820195825260208201520152565b0390a4565b504283116122ab565b90816020910312610270575180151581036102705790565b156123e557565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b51906001600160a01b038216820361027057565b1561243c57565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b92919092821561277657612496821515612009565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169190602081602481865afa90811561030b575f91612757575b501561263a57600181036125eb576040516331a9108f60e11b81526004810185905292602084602481865afa93841561030b575f946125ab575b50600393612527906001600160a01b03163314612435565b6040519461253486611c9f565b33808752602080880193845260408089019586525f60608a018181529781526002808452828220958252948352818120938152929091529020955186546001600160a01b039182166001600160a01b0319918216178855925160018801559251908601559151929093018054929093169116179055565b93506020843d6020116125e3575b816125c660209383611cba565b81010312610270576125276125dc600395612421565b945061250f565b3d91506125b9565b60405162461bcd60e51b815260206004820152602160248201527f455243373231206c697374696e67206d757374206861766520616d6f756e74206044820152603160f81b6064820152608490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481865afa90811561030b575f91612728575b50156126ec57604051627eeac760e11b81523360048201526024810185905292602084604481865afa93841561030b575f946126b6575b506126b18260039510156123de565b612527565b93506020843d6020116126e4575b816126d160209383611cba565b81010312610270579251926126b16126a2565b3d91506126c4565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b61274a915060203d602011612750575b6127428183611cba565b8101906123c6565b5f61266b565b503d612738565b612770915060203d602011612750576127428183611cba565b5f6124d5565b60405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e2030000000006044820152606490fd5b93919092938415612776576127d1821515612009565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b03919091169490602081602481895afa90811561030b575f916129fd575b501561292c57600182036125eb576040516331a9108f60e11b81526004810185905293602085602481895afa94851561030b575f956128ec575b50600394612862906001600160a01b03163314612435565b6040519561286f87611c9f565b3380885260208089019485526040808a019687526001600160a01b0397881660608b019081525f948552600280845282862096865295835281852093855292909152909120965187546001600160a01b03199081169187169190911788559251600188015592519086015590519290930180549093169116179055565b94506020853d602011612924575b8161290760209383611cba565b810103126102705761286261291d600396612421565b955061284a565b3d91506128fa565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481895afa90811561030b575f916129de575b50156126ec57604051627eeac760e11b81523360048201526024810185905293602085604481895afa94851561030b575f956129a8575b506129a38360039610156123de565b612862565b94506020853d6020116129d6575b816129c360209383611cba565b81010312610270579351936129a3612994565b3d91506129b6565b6129f7915060203d602011612750576127428183611cba565b5f61295d565b612a16915060203d602011612750576127428183611cba565b5f612810565b91908203918211612a2957565b634e487b7160e01b5f52601160045260245ffd5b6001600160a01b03165f81815260016020908152604080832085845282528083203384529091529020805492939192801561081e5760055486106107d9578515610795578215610746575f91600391612a966001612055565b878181118514612af757612aad9161068d91612a1c565b868155836001820155426002820155015560405193845260208401525f60408401527f2abc42f3ff4625e861bb8cbd9bda3841653f0d2e1835b7242db9c1391e65be2260603394a4565b90808210612b07575b5050612aad565b612b149161070f91612a1c565b865f612b00565b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615612b5357565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615612b8c5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16612c24575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615612c24575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b15612cb157565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b6001600160a01b038181165f81815260016020908152604080832087845282528083209488168352939052829020915191949092612d2b83611c9f565b8554808452612d5d600360018901549860208701998a5260028101546040880152015491606086019283521515612caa565b518015908115612ec1575b5015612e8c57612df691612d8087518233898661324f565b845f52600160205260405f20865f5260205260405f209060018060a01b03165f52602052612dc260405f2060035f918281558260018201558260028201550155565b5f8481526002602090815260408083208884528252808320338452909152902060010154612e2c575b8251908533916136c7565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a4565b5f8481526002602081815260408084208985528252808420338552909152822082815560018101839055908101829055600301553385857fcf45896873f759e6a8c2348e49ff9892b89458850ab6c70339e1c430227ce91d5f80a4612deb565b60405162461bcd60e51b815260206004820152600d60248201526c13d999995c88195e1c1a5c9959609a1b6044820152606490fd5b90504211155f612d68565b60018060a01b0316805f52600160205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f2060405190612f0982611c9f565b612f38815480845260036001840154936020860194855260028101546040870152015460608501521515612caa565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa90811561030b575f9161316d575b501561309a57506040516331a9108f60e11b81526004810184905290602082602481865afa91821561030b575f92613059575b5061301f91612fb5906001600160a01b03163314612435565b825f52600160205260405f20845f5260205260405f2060018060a01b0386165f52602052612ff760405f2060035f918281558260018201558260028201550155565b51847f0000000000000000000000000000000000000000000000000000000000000000611f88565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a4565b91506020823d602011613092575b8161307460209383611cba565b8101031261027057612fb561308b61301f93612421565b9250612f9c565b3d9150613067565b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa90811561030b575f9161314e575b50156126ec57604051627eeac760e11b815233600482015260248101859052602081604481875afa90811561030b575f9161311a575b506131159061301f935111156123de565b612fb5565b90506020813d602011613146575b8161313560209383611cba565b81010312610270575161301f613104565b3d9150613128565b613167915060203d602011612750576127428183611cba565b5f6130ce565b613186915060203d602011612750576127428183611cba565b5f612f69565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f51148216156131dd575b6040525f60605215611fc85750565b90600181151661200057823b15153d151616906131ce565b156131fc57565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201525f95929493926001600160a01b039092169190602081602481865afa90811561030b575f916136a8575b5015613503576001036134bf576040516331a9108f60e11b81526004810185905291602083602481855afa928315613414578693613483575b506001600160a01b03818116931683900361343e5760405163e985e9c560e01b81526001600160a01b03919091166004820152306024820152602081604481855afa90811561341457869161341f575b508015613398575b61332d906131f5565b803b1561339457849291836064926040519687958694632142170760e11b8652600486015260018060a01b0316602485015260448401525af1801561338957613374575050565b61337f828092611cba565b6133865750565b80fd5b6040513d84823e3d90fd5b8480fd5b5060405163020604bf60e21b815260048101859052602081602481855afa80156134145786906133d5575b6001600160a01b031630149050613324565b506020813d60201161340c575b816133ef60209383611cba565b810103126134085761340361332d91612421565b6133c3565b8580fd5b3d91506133e2565b6040513d88823e3d90fd5b613438915060203d602011612750576127428183611cba565b5f61331c565b60405162461bcd60e51b815260206004820152601d60248201527f46726f6d206164647265737320646f6573206e6f74206f776e204e46540000006044820152606490fd5b9092506020813d6020116134b7575b8161349f60209383611cba565b81010312613408576134b090612421565b915f6132cc565b3d9150613492565b606460405162461bcd60e51b815260206004820152602060248201527f455243373231207472616e7366657220616d6f756e74206d75737420626520316044820152fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b600482015294955093909190602081602481865afa90811561030b575f91613689575b50156126ec57604051627eeac760e11b81526001600160a01b038216600482015260248101869052602081604481865afa801561030b5785905f90613653575b613587925010156123de565b60405163e985e9c560e01b81526001600160a01b0382166004820152306024820152602081604481865afa801561030b576135c9915f91613634575b506131f5565b813b15610270575f60c49281956040519788968795637921219560e11b875260018060a01b0316600487015260018060a01b031660248601526044850152606484015260a060848401528160a48401525af1801561030b576136285750565b5f61363291611cba565b565b61364d915060203d602011612750576127428183611cba565b5f6135c3565b50506020813d602011613681575b8161366e60209383611cba565b810103126102705784613587915161357b565b3d9150613661565b6136a2915060203d602011612750576127428183611cba565b5f61353b565b6136c1915060203d602011612750576127428183611cba565b5f613293565b9190600354808502908582041485151715612a29576127109004925f9060405f93604482518094819363152a902d60e11b835260048301528a602483015260018060a01b03165afa805f925f92613841575b50613827575b5050808401808511612a2957856136329686921161380b575b61374661374b928492612a1c565b612a1c565b93801515806137f7575b6137ba575b5080613789575b50507f0000000000000000000000000000000000000000000000000000000000000000611f88565b6137b3917f0000000000000000000000000000000000000000000000000000000000000000611f88565b5f80613761565b6004546137f191906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000611f88565b5f61375a565b506004546001600160a01b03161515613755565b81925061374661381e61374b9383612a1c565b93925050613738565b6001600160a01b0382161561371f57915091505f8061371f565b925090506040823d60401161387b575b8161385e60409383611cba565b8101031261027057602061387183612421565b920151905f613719565b3d915061385156fe1da60d1ebc86294425cc61f1c7dc4439f6cb8a970869c2764900c57f5828a2e19b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220156b96e7bf6b211cbe9671bde8b69d2600f59ca1d419a75e8b54a566978e49bf64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220fb5ca2b4431a038dc5a61f6302abbb5d7e6de94e65ed1988fffeb73bdeacbdc964736f6c634300081c0033"
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