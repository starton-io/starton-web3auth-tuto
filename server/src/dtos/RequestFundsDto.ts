/*
| Developed by Starton
| Filename : RequestFundsDto.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/

import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

/*
|--------------------------------------------------------------------------
| Dto
|--------------------------------------------------------------------------
*/
export class RequestFundsDto {
  @IsNotEmpty()
  @IsEthereumAddress()
  userAddress: string;
}
