/*
| Developed by Starton
| Filename : smartContractABI.config.ts
| Author : Calixte De Tourris (calixte@starton.com)
*/

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/
export const SmartContractABI = [
	{
		type: 'constructor',
		inputs: [
			{
				name: 'definitiveName',
				type: 'string',
				internalType: 'string',
			},
			{
				name: 'definitiveSymbol',
				type: 'string',
				internalType: 'string',
			},
			{
				name: 'definitiveSupply',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: 'initialOwnerOrMultiSigContract',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		name: 'Approval',
		type: 'event',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'spender',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'value',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
	{
		name: 'Initialized',
		type: 'event',
		inputs: [
			{
				name: 'version',
				type: 'uint8',
				indexed: false,
				internalType: 'uint8',
			},
		],
		anonymous: false,
	},
	{
		name: 'MetaTransactionExecuted',
		type: 'event',
		inputs: [
			{
				name: 'userAddress',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
			{
				name: 'relayerAddress',
				type: 'address',
				indexed: false,
				internalType: 'address payable',
			},
			{
				name: 'functionSignature',
				type: 'bytes',
				indexed: false,
				internalType: 'bytes',
			},
		],
		anonymous: false,
	},
	{
		name: 'Paused',
		type: 'event',
		inputs: [
			{
				name: 'account',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		name: 'RoleAdminChanged',
		type: 'event',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				name: 'previousAdminRole',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				name: 'newAdminRole',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32',
			},
		],
		anonymous: false,
	},
	{
		name: 'RoleGranted',
		type: 'event',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				name: 'account',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		name: 'RoleRevoked',
		type: 'event',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32',
			},
			{
				name: 'account',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'sender',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		name: 'Transfer',
		type: 'event',
		inputs: [
			{
				name: 'from',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'to',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'value',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
		],
		anonymous: false,
	},
	{
		name: 'Unpaused',
		type: 'event',
		inputs: [
			{
				name: 'account',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		name: 'DEFAULT_ADMIN_ROLE',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'ERC712_VERSION',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'PAUSER_ROLE',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'allowance',
		type: 'function',
		inputs: [
			{
				name: 'owner',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'spender',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'approve',
		type: 'function',
		inputs: [
			{
				name: 'spender',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		name: 'balanceOf',
		type: 'function',
		inputs: [
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'burn',
		type: 'function',
		inputs: [
			{
				name: 'amount',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'burnFrom',
		type: 'function',
		inputs: [
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'decimals',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint8',
				internalType: 'uint8',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'decreaseAllowance',
		type: 'function',
		inputs: [
			{
				name: 'spender',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'subtractedValue',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		name: 'executeMetaTransaction',
		type: 'function',
		inputs: [
			{
				name: 'userAddress',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'functionSignature',
				type: 'bytes',
				internalType: 'bytes',
			},
			{
				name: 'sigR',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: 'sigS',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: 'sigV',
				type: 'uint8',
				internalType: 'uint8',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bytes',
				internalType: 'bytes',
			},
		],
		stateMutability: 'payable',
	},
	{
		name: 'getChainId',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'getDomainSeparator',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'getNonce',
		type: 'function',
		inputs: [
			{
				name: 'user',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [
			{
				name: 'nonce',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'getRoleAdmin',
		type: 'function',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'grantRole',
		type: 'function',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'hasRole',
		type: 'function',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'increaseAllowance',
		type: 'function',
		inputs: [
			{
				name: 'spender',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'addedValue',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		name: 'name',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'pause',
		type: 'function',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'paused',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'renounceRole',
		type: 'function',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'revokeRole',
		type: 'function',
		inputs: [
			{
				name: 'role',
				type: 'bytes32',
				internalType: 'bytes32',
			},
			{
				name: 'account',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'supportsInterface',
		type: 'function',
		inputs: [
			{
				name: 'interfaceId',
				type: 'bytes4',
				internalType: 'bytes4',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'symbol',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'totalSupply',
		type: 'function',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		name: 'transfer',
		type: 'function',
		inputs: [
			{
				name: 'to',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		name: 'transferFrom',
		type: 'function',
		inputs: [
			{
				name: 'from',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'to',
				type: 'address',
				internalType: 'address',
			},
			{
				name: 'amount',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		name: 'transferOwnership',
		type: 'function',
		inputs: [
			{
				name: 'newAdmin',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		name: 'unpause',
		type: 'function',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
]
