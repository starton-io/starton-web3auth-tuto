/*
| Developed by Starton
| Filename : index.tsx
*/

import type { NextPage } from 'next'
import React from 'react'
import { Web3Auth } from '@web3auth/modal'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { StartonButton } from '@starton/ui-nextjs'
import { Home } from '../components/pages/index/Home'

const clientId = 'YOUR_WEB3AUTH_CLIENT_ID' // get from https://dashboard.web3auth.io

const HomePage: NextPage = () => {
	const [web3auth, setWeb3auth] = React.useState<Web3Auth | null>(null)
	const [provider, setProvider] = React.useState<SafeEventEmitterProvider | null>(null)

	React.useEffect(() => {
		const init = async () => {
			try {
				const web3auth = new Web3Auth({
					clientId,
					web3AuthNetwork: 'testnet', // mainnet, aqua, celeste, cyan or testnet
					chainConfig: {
						chainNamespace: CHAIN_NAMESPACES.EIP155,
						chainId: '0x' + Number(43113).toString(16), // Avalanche Fuji
						rpcTarget: 'https://api.avax-test.network/ext/bc/C/rpc', // This is the public RPC we have added, please pass on your own endpoint while creating an app
					},
				})

				setWeb3auth(web3auth)

				await web3auth.initModal()
				setProvider(web3auth.provider)
			} catch (error) {
				console.error(error)
			}
		}

		void init()
	}, [])

	const login = async () => {
		if (!web3auth) {
			console.log('web3auth not initialized yet')
			return
		}
		const web3authProvider = await web3auth.connect()
		setProvider(web3authProvider)
	}

	return (
		<React.Fragment>
			{!provider ? (
				<StartonButton onClick={login}>Login</StartonButton>
			) : (
				<Home provider={provider} web3auth={web3auth} setProvider={setProvider} />
			)}
		</React.Fragment>
	)
}

export default HomePage
