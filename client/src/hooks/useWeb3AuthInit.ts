/*
| Developed by Starton
| Filename : useWeb3AuthInit.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/

/*
|--------------------------------------------------------------------------
| Hook
|--------------------------------------------------------------------------
*/
import React from 'react'
import { Web3Auth } from '@web3auth/modal'
import { CHAIN_NAMESPACES } from '@web3auth/base'
import { enqueueSnackbar } from 'notistack'
import { RPC_TARGET, SMART_CONTRACT_CHAIN_ID } from 'config/smart-contract/smartContract.config'

export const useWeb3AuthInit = (clientId: string): Web3Auth | null => {
	const [web3auth, setWeb3auth] = React.useState<Web3Auth | null>(null)

	React.useEffect(() => {
		const init = async () => {
			try {
				const web3auth = new Web3Auth({
					clientId,
					web3AuthNetwork: 'testnet',
					chainConfig: {
						chainNamespace: CHAIN_NAMESPACES.EIP155,
						chainId: '0x' + Number(SMART_CONTRACT_CHAIN_ID).toString(16), // Avalanche Fuji
						rpcTarget: RPC_TARGET,
					},
				})
				await web3auth.initModal()
				setWeb3auth(web3auth)
			} catch (error) {
				enqueueSnackbar('Error: web3auth initialisation', { variant: 'error' })
				console.error(error)
			}
		}

		void init()
	}, [clientId])

	return web3auth
}
