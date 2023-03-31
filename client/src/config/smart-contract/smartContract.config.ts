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
export const SMART_CONTRACT_CHAIN_ID = 97 // Binance Smart Chain Testnet
export const SMART_CONTRACT_ADDRESS = '0xdaC51f053f100D85b89162ba8F1cCfaFA3a2b9F9'

export const RPC_TARGET = 'https://rpc.ankr.com/bsc_testnet_chapel'

export const SmartContractConfig = {
	version: '1',
	name: 'ERC20MetaTxTest',
	chainId: SMART_CONTRACT_CHAIN_ID,
	address: SMART_CONTRACT_ADDRESS,
	abi: SmartContractABI,
}
