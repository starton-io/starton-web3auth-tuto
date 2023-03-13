/*
| Developed by Starton
| Filename : index.tsx
*/

import type { NextPage } from 'next'
import React from 'react'
import { SafeEventEmitterProvider } from '@web3auth/base'
import { StartonButton } from '@starton/ui-nextjs'
import { Box, Container, Typography } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { Home } from '../components/pages/index/Home'
import { useWeb3AuthInit } from '../hooks/useWeb3AuthInit'

const clientId = 'YOUR_WEB3AUTH_CLIENT_ID' // get from https://dashboard.web3auth.io

const HomePage: NextPage = () => {
	const web3auth = useWeb3AuthInit(clientId)
	const [provider, setProvider] = React.useState<SafeEventEmitterProvider | null>(null)

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
