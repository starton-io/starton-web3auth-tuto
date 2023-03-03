/*
| Developed by Starton
| Filename : index.tsx
*/

import type { NextPage } from 'next'
import React from 'react'
import { Web3Auth } from '@web3auth/modal'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { StartonButton } from '@starton/ui-nextjs'
import { Box, Container, Typography } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
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
	}, [])

	const login = async () => {
		if (!web3auth) {
			enqueueSnackbar('Error: web3auth not initialised yet', { variant: 'error' })
			return
		}
		const web3authProvider = await web3auth.connect()
		setProvider(web3authProvider)
	}

	return (
		<Container maxWidth="md">
			<Box
				display="flex"
				flexDirection="column"
				width="100%"
				minHeight="100vh"
				justifyContent="center"
				alignItems="center"
				gap={4}
			>
				<Typography variant="h4" textAlign="center">
					Starton Meta Transaction
				</Typography>
				{!provider ? (
					<StartonButton variant="outlined" onClick={login}>
						Connect
					</StartonButton>
				) : (
					<Home provider={provider} web3auth={web3auth} setProvider={setProvider} />
				)}
			</Box>
		</Container>
	)
}

export default HomePage
