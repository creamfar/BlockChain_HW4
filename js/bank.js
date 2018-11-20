let bankBytecode =
  "608060405260008054600160a060020a033316600160a060020a03199091161790556106aa806100306000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632e1a7d4d811461009257806341c0e1b5146100ac5780634f6b826c146100c157806356a34a59146100c95780637b83b50b146100d4578063a9059cbb146100fb578063d0e30db01461011f578063ed711c1a14610127575b600080fd5b34801561009e57600080fd5b506100aa600435610132565b005b3480156100b857600080fd5b506100aa61025d565b6100aa6102e8565b6100aa6004356103c8565b3480156100e057600080fd5b506100e961048c565b60408051918252519081900360200190f35b34801561010757600080fd5b506100aa600160a060020a03600435166024356104a8565b6100aa6105ad565b6100aa60043561060e565b600160a060020a033316600090815260016020526040902054670de0b6b3a76400008202908111156101c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051600160a060020a0333169082156108fc029083906000818181858888f193505050501580156101fb573d6000803e3d6000fd5b50600160a060020a033316600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005433600160a060020a039081169116146102da57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b600054600160a060020a0316ff5b33600160a060020a03166000818152600260209081526040808320546003909252808320549051919392606491850291909104840180156108fc02929091818181858888f19350505050158015610343573d6000803e3d6000fd5b50600160a060020a0333166000818152600360205260409020547f1b8202061440b9e8e867e2420a0909d3179f2ae944d009872087a9298f57d3459060649084026040805192909104850182524260208301528051918290030190a250600160a060020a03331660009081526002602090815260408083208390556003909152812055565b600160a060020a033316600081815260026020526040902054906108fc60648484020483019081150290604051600060405180830381858888f19350505050158015610418573d6000803e3d6000fd5b506040805160648484020483018152426020820152815133600160a060020a0316927f77beb8b8eb5f90a163964473351ad2d0ec6dfdc8031a9cfc1834d5c4ec1bcca6928290030190a25050600160a060020a03331660009081526002602090815260408083208390556003909152812055565b600160a060020a03331660009081526001602052604090205490565b600160a060020a033316600090815260016020526040902054670de0b6b3a764000082029081111561053b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b600160a060020a033381166000818152600160209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd692918290030190a3505050565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b600160a060020a0333166000818152600260209081526040808320805434908101909155600383529281902080548601905580519283529082018490524282820152517f30f7bc224d3156893eff001ae73614acfef5b1437e399b84d4c439f13b6f7f6a9181900360600190a2505600a165627a7a72305820da707d8b1f09a8f43f72024f54ca847ed484947c42bf6933095539516c8443c70029";
  
  
  let bankAbi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "CDcomplete",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "releasetime",
				"type": "uint256"
			}
		],
		"name": "CDcancel",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBankBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "CDbuy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "DepositEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "WithdrawEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "TransferEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "times",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "CDEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "CDcompleteEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "CDcancelEvent",
		"type": "event"
	}
];
