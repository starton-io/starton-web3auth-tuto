/*
| Developed by Starton
| Filename : smartContract.config.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/

import { SmartContractABI } from './smartContractABI.config'

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/
export const SmartContractConfig = {
	version: '1',
	name: 'Starton Meta Transaction',
	chainId: '43113',
	address: '0xcEB17Bf0E3d198ec985370f456332f10f373CdB3',
	abi: SmartContractABI,
}

export const MetaTransactionType = {
	MetaTransaction: [
		{
			name: 'nonce',
			type: 'uint256',
		},
		{
			name: 'from',
			type: 'address',
		},
		{
			name: 'functionSignature',
			type: 'bytes',
		},
	],
}

export const DomainType = {
	name: SmartContractConfig.name,
	version: SmartContractConfig.version,
	verifyingContract: SmartContractConfig.address,
	salt: `0x${parseInt(SmartContractConfig.chainId).toString(16).padStart(64, '0')}`,
} as const
