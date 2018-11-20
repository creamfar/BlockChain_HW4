let bankBytecode =
  "6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e48806100536000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1a7d4d1461009357806341c0e1b5146100c05780634f6b826c146100d757806356a34a59146100e15780637b83b50b14610101578063a9059cbb1461012c578063d0e30db014610179578063ed711c1a14610183575b600080fd5b34801561009f57600080fd5b506100be600480360381019080803590602001909291905050506101a3565b005b3480156100cc57600080fd5b506100d5610357565b005b6100df610455565b005b6100ff60048036038101908080359060200190929190505050610667565b005b34801561010d57600080fd5b5061011661095f565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b50610177600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109a6565b005b610181610b78565b005b6101a160048036038101908080359060200190929190505050610c1d565b005b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102af573d6000803e3d6000fd5b5080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab8342604051808381526020018281526020019250505060405180910390a25050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561041b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f796f7520617265206e6f74206f776e657200000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490503373ffffffffffffffffffffffffffffffffffffffff166108fc60646001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485020281151561050357fe5b0483019081150290604051600060405180830381858888f19350505050158015610531573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f1b8202061440b9e8e867e2420a0909d3179f2ae944d009872087a9298f57d34560646001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548502028115156105ba57fe5b04830142604051808381526020018281526020019250505060405180910390a26000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610788576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807fe69c9fe695b8e8b685e9818ee8b3bce8b2b7e5ae9ae5ad98e4b98be69c9fe69581526020017fb80000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600c821115801561079a575060008210155b151561080e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807fe69c9fe695b8e69c80e5a49a3132e69c9fefbc8ce69c80e5b09130e69c9f210081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc606460018585020281151561083957fe5b0483019081150290604051600060405180830381858888f19350505050158015610867573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f77beb8b8eb5f90a163964473351ad2d0ec6dfdc8031a9cfc1834d5c4ec1bcca660646001858502028115156108b157fe5b04830142604051808381526020018281526020019250505060405180910390a26000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd68442604051808381526020018281526020019250505060405180910390a3505050565b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26603442604051808381526020018281526020019250505060405180910390a2565b34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600c600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411158015610d4757506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b1515610dbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807fe69c9fe695b8e69c80e5a49a3132e69c9fefbc8ce69c80e5b09130e69c9f210081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f30f7bc224d3156893eff001ae73614acfef5b1437e399b84d4c439f13b6f7f6a34834260405180848152602001838152602001828152602001935050505060405180910390a2505600a165627a7a72305820b7d6a607f0ee2e645d1a6720b30bb7f9b034918091712504b38be8c28f5489950029";
    
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
