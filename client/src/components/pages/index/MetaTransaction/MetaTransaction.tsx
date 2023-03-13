/*
| Developed by Starton
| Filename : MetaTransaction
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { StartonButton, StartonFormikTextField } from '@starton/ui-nextjs'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { SafeEventEmitterProvider } from '@web3auth/base'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import { Box, Typography } from '@mui/material'
import RPC from 'services/ethersRPC'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MetaTransactionProps {
	provider: SafeEventEmitterProvider
}

interface FormikInitialValues {
	address: string
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MetaTransaction: React.FC<MetaTransactionProps> = (props) => {
	const { provider } = props
	const [transactionHash, setTransactionHash] = React.useState('')
	const initialValues: FormikInitialValues = { address: '' }
	const validationSchema: Yup.Schema<FormikInitialValues> = Yup.object().shape({
		address: Yup.string().required(),
	})

	// Methods
	//--------------------------------------------------------------------------
	const handleSubmit = async (values: FormikInitialValues) => {
		try {
			const rpc = new RPC(provider)
			const signedMeta = await rpc.signMetaTransaction(values.address)
			const userAddress = await rpc.getAccount()
			if (!signedMeta || !userAddress) return

			const response = await axios.post(`${process.env.NEXT_PUBLIC_API as string}/execute-meta-transaction`, {
				userAddress,
				functionSignature: signedMeta.functionSignature,
				sigR: signedMeta.signatureKeys.r,
				sigS: signedMeta.signatureKeys.s,
				sigV: signedMeta.signatureKeys.v.toString(),
			})
			setTransactionHash(response.data.transactionHash)
			enqueueSnackbar('Meta transaction sent by Starton !', { variant: 'success' })
		} catch (error) {
			enqueueSnackbar('Meta transaction failed (check console for more infos)', { variant: 'error' })
			console.error(error)
		}
	}

	// Render
	//--------------------------------------------------------------------------
	return (
		<Box display="flex" flexDirection="column" gap={2}>
			<Typography variant="h5">2. Send Starton Tokens with meta transaction (no gas fee)</Typography>
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
				{(formikProps) => (
					<Form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<Field name="address" component={StartonFormikTextField} />
						{transactionHash ? <Typography>Transaction hash: {transactionHash}</Typography> : null}
						<StartonButton variant="contained" type="submit" disabled={formikProps.isSubmitting}>
							Send without fees
						</StartonButton>
					</Form>
				)}
			</Formik>
		</Box>
	)
}
