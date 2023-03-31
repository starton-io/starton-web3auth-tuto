/*
| Developed by Starton
| Filename : starton.config.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/

export const SMART_CONTRACT_NETWORK = 'binance-testnet';
export const SMART_CONTRACT_ADDRESS =
  '0xdaC51f053f100D85b89162ba8F1cCfaFA3a2b9F9';
export const SIGNER_WALLET = '0x3dbf7Ad2876309688E53caEa7553F4bf9Cc504C2';

export const StartonConfig = {
  // Starton endpoint to call a Smart Contract function
  smartContractCallUrl: `/smart-contract/${SMART_CONTRACT_NETWORK}/${SMART_CONTRACT_ADDRESS}/call`,

  // Starton signer wallet (make sure it has some faucet)
  signerWallet: `${SIGNER_WALLET}`,

  // Speed for transactions, managed by Starton
  transactionSpeed: 'low',

  // Token amount to send to user when the route /request-funds is called
  requestFundsAmount: '10', // In ether
};
