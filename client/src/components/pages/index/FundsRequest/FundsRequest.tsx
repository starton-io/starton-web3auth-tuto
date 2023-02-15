/*
| Developed by Starton
| Filename : FundsRequest
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'
import { SafeEventEmitterProvider } from '@web3auth/base'
import { StartonButton } from '@starton/ui-nextjs'
import { Box, Typography } from '@mui/material'
import RPC from 'services/ethersRPC'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FundsRequestProps {
	provider: SafeEventEmitterProvider
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const FundsRequest: React.FC<FundsRequestProps> = (props) => {
	const { provider } = props
	const [isLoading, setIsLoading] = React.useState(false)
	const [requestTx, setRequestTx] = React.useState('')

	// Methods
	//--------------------------------------------------------------------------
	const requestFunds = async () => {
		setIsLoading(true)
		try {
			const rpc = new RPC(provider)
			const userAddress = await rpc.getAccount()

			const response = await axios.post(`${process.env.NEXT_PUBLIC_API as string}request-funds`, {
				userAddress,
			})
			setRequestTx(response.data.transactionHash)
			enqueueSnackbar('Request sent !', { variant: 'success' })
		} catch (error) {
			console.log(error)
			enqueueSnackbar('Request failed...', { variant: 'error' })
		}
		setIsLoading(false)
	}

	// Render
	//--------------------------------------------------------------------------
	return (
		<Box display="flex" flexDirection="column" gap={2}>
			<Typography variant="h5">1. Request Starton Tokens </Typography>
			{requestTx ? <Typography>Transaction hash: {requestTx}</Typography> : null}
			<StartonButton variant="contained" onClick={requestFunds} disabled={isLoading}>
				Request funds
			</StartonButton>
		</Box>
	)
}
