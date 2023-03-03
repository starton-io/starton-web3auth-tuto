/*
| Developed by Starton
| Filename : ethersRPC.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/

import type { SafeEventEmitterProvider } from '@web3auth/base'
import { BigNumber, ethers } from 'ethers'
import { enqueueSnackbar } from 'notistack'
import { SmartContractConfig } from '../config/smart-contract/smartContract.config'
import { SmartContractABI } from '../config/smart-contract/smartContractABI.config'
import { StartonConfig } from '../config/starton/starton.config'

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/
export default class EthereumRpc {
	private readonly provider: SafeEventEmitterProvider

	constructor(provider: SafeEventEmitterProvider) {
		this.provider = provider
	}

	async getChainId(): Promise<any> {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			// Get the connected Chain's ID
			const networkDetails = await ethersProvider.getNetwork()

			return networkDetails.chainId
		} catch (error) {
			return error
		}
	}

	async getAccount(): Promise<any> {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			const signer = ethersProvider.getSigner()

			// Get user's Ethereum public address
			return await signer.getAddress()
		} catch (error) {
			return error
		}
	}

	async getBalance(): Promise<string> {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			const signer = ethersProvider.getSigner()

			// Get user's Ethereum public address
			const address = await signer.getAddress()

			// Get user's balance in ether
			const balance = ethers.utils.formatEther(
				await ethersProvider.getBalance(address), // Balance is in wei
			)

			return balance
		} catch (error) {
			return error as string
		}
	}

	async sendTransaction(): Promise<any> {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			const signer = ethersProvider.getSigner()

			const destination = '0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56'

			// Convert 1 ether to wei
			const amount = ethers.utils.parseEther('0.001')

			// Submit transaction to the blockchain
			const tx = await signer.sendTransaction({
				to: destination,
				value: amount,
				maxPriorityFeePerGas: '5000000000', // Max priority fee per gas
				maxFeePerGas: '6000000000000', // Max fee per gas
			})

			// Wait for transaction to be mined
			const receipt = await tx.wait()

			return receipt
		} catch (error) {
			return error as string
		}
	}

	async signMessage() {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			const signer = ethersProvider.getSigner()

			const originalMessage = 'YOUR_MESSAGE'

			// Sign the message
			const signedMessage = await signer.signMessage(originalMessage)

			return signedMessage
		} catch (error) {
			return error as string
		}
	}

	async getPrivateKey(): Promise<any> {
		try {
			const privateKey = await this.provider.request({
				method: 'eth_private_key',
			})

			return privateKey
		} catch (error) {
			return error as string
		}
	}

	async getStartonTokenBalance() {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			const signer = ethersProvider.getSigner()
			const address = await signer.getAddress()
			const contract = new ethers.Contract(SmartContractConfig.address, SmartContractABI, signer)
			const balance: BigNumber = await contract.balanceOf(address)
			return ethers.utils.formatEther(balance).toString()
		} catch (error) {
			console.error(error)
			return 0
		}
	}

	async signMetaTransaction(to: string) {
		try {
			const ethersProvider = new ethers.providers.Web3Provider(this.provider)
			const signer = ethersProvider.getSigner()
			const address = await signer.getAddress()
			const contract = new ethers.Contract(SmartContractConfig.address, SmartContractABI, signer)

			const addressNonce: BigNumber = await contract.getNonce(address) // Blockchain call
			const functionSignature = contract.interface.encodeFunctionData('transfer', [
				to,
				ethers.utils.parseEther(StartonConfig.metaTransactionValue),
			])

			const domain: ethers.TypedDataDomain = {
				name: SmartContractConfig.name, // Be attentive
				version: SmartContractConfig.version,
				verifyingContract: SmartContractConfig.address as `0x${string}`,
				salt: `0x${parseInt(SmartContractConfig.chainId).toString(16).padStart(64, '0')}`,
			}

			const types: Record<string, ethers.TypedDataField[]> = {
				MetaTransaction: [
					{
						name: 'nonce',
						type: 'uint256',
					},
					{
						name: 'from',
						type: 'address',
					},
					{
						name: 'functionSignature',
						type: 'bytes',
					},
				],
			}

			const value = {
				nonce: addressNonce.toNumber(),
				from: address,
				functionSignature,
			}

			const signature = await signer._signTypedData(domain, types, value)
			const signatureKeys = ethers.utils.splitSignature(signature)
			enqueueSnackbar('Meta transaction signed successfully', { variant: 'success' })
			return {
				functionSignature,
				signatureKeys,
			}
		} catch (error) {
			enqueueSnackbar('Error: meta transaction signing (check console for more info)', { variant: 'error' })
			console.log(error)
		}
	}
}
