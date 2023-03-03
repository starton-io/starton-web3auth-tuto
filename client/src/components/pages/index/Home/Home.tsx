/*
| Developed by Starton
| Filename : Home
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { StartonButton } from '@starton/ui-nextjs'
import { Box, Typography } from '@mui/material'
import { SafeEventEmitterProvider } from '@web3auth/base'
import { Refresh } from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'
import { FundsRequest } from '../FundsRequest'
import { MetaTransaction } from '../MetaTransaction'
import RPC from 'services/ethersRPC'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeProps {
	provider: SafeEventEmitterProvider
	setProvider: React.Dispatch<React.SetStateAction<SafeEventEmitterProvider | null>>
	web3auth: any
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Home: React.FC<HomeProps> = (props) => {
	const { provider, web3auth, setProvider } = props
	const [balance, setBalance] = React.useState(0)
	const [address, setAddress] = React.useState(0)

	const logout = async () => {
		if (!web3auth) {
			enqueueSnackbar('Error: web3auth not initialised yet', { variant: 'error' })
			return
		}
		await web3auth.logout()
		setProvider(null)
	}

	const refreshBalance = async () => {
		try {
			const rpc = new RPC(provider)
			const _balance = await rpc.getStartonTokenBalance()
			setBalance(Math.floor(Number(_balance)))
		} catch (error) {
			enqueueSnackbar('Error: balance refresh (check console for more info)', { variant: 'error' })
			console.error(error)
		}
	}

	React.useEffect(() => {
		const getAddress = async () => {
			try {
				const rpc = new RPC(provider)
				const _address = await rpc.getAccount()
				setAddress(_address)
			} catch (error) {
				enqueueSnackbar('Error: address fetch (check console for more info)', { variant: 'error' })
				console.error(error)
			}
		}
		void refreshBalance()
		void getAddress()
	}, [provider, refreshBalance])

	return (
		<Box display="flex" flexDirection="column" gap={4} width="100%">
			<FundsRequest provider={provider} />
			<MetaTransaction provider={provider} />
			<Box display="flex" flexDirection="column" gap={1}>
				<Typography>
					<Box component="strong">Address</Box>: {address}
				</Typography>
				<Box display="flex" gap={1} alignItems="center">
					<Typography>
						<Box component="strong">Balance</Box>: {balance}
					</Typography>
					<StartonButton onClick={refreshBalance} startIcon={<Refresh />} variant="outlined" />
				</Box>
				<StartonButton variant="outlined" onClick={logout}>
					Logout
				</StartonButton>
			</Box>
		</Box>
	)
}
