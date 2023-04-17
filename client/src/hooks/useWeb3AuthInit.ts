/*
| Developed by Starton
| Filename : useWeb3AuthInit.ts
| Author : Calixte De Tourris (calixte@starton.com)
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
						chainId: '0x' + Number(43113).toString(16), // Avalanche Fuji
						rpcTarget: 'https://api.avax-test.network/ext/bc/C/rpc',
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
