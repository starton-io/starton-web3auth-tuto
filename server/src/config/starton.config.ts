/*
| Developed by Starton
| Filename : starton.config.ts
| Author : Calixte De Tourris (calixte@starton.com)
*/

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/
export const StartonBaseURL = 'https://api.starton.com/v3';

export const StartonConfig = {
  // Starton endpoint to call a Smart Contract function
  smartContractCallUrl: `/smart-contract/avalanche-fuji/0xcEB17Bf0E3d198ec985370f456332f10f373CdB3/call`,

  // Starton signer wallet (make sure it has some faucet)
  signerWallet: '0x5894f171C886B817Fe9415635022583785ac0960',

  // Speed for transactions, managed by Starton
  transactionSpeed: 'low',

  // Token amount to send to user when the route /request-funds is called
  requestFundsAmount: '10', // In ether
};
