/*
| Developed by Starton
| Filename : Home
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { StartonButton } from '@starton/ui-nextjs'
import axios from 'axios'
import { Typography } from '@mui/material'
import RPC from 'services/ethersRPC'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeProps {
	provider: any
	setProvider: React.Dispatch<React.SetStateAction<any>>
	web3auth: any
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Home: React.FC<HomeProps> = (props) => {
	const { provider, web3auth, setProvider } = props
	const [address, setAddress] = React.useState('')

	const logout = async () => {
		if (!web3auth) {
			console.log('web3auth not initialized yet')
			return
		}
		await web3auth.logout()
		setProvider(null)
	}

	const signMetaTransaction = async () => {
		try {
			if (!provider) {
				console.log('provider not initialized yet')
				return
			}
			const rpc = new RPC(provider)
			const signedMeta = await rpc.signMetaTransaction()
			const userAddress = await rpc.getAccount()
			if (!signedMeta || !userAddress) return // TODO

			setAddress(userAddress)
			await axios.post(`${process.env.NEXT_PUBLIC_API as string}execute-meta-transaction`, {
				userAddress,
				functionSignature: signedMeta.functionSignature,
				sigR: signedMeta.signatureKeys.r,
				sigS: signedMeta.signatureKeys.s,
				sigV: signedMeta.signatureKeys.v.toString(),
			})
			console.log(signedMeta?.functionSignature, signedMeta?.signatureKeys)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<React.Fragment>
			<Typography>{address}</Typography>
			<StartonButton onClick={signMetaTransaction}>Meta transaction</StartonButton>
			<StartonButton onClick={logout}>Logout</StartonButton>
		</React.Fragment>
	)
}
