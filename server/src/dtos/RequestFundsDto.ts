/*
| Developed by Starton
| Filename : RequestFundsDto.ts
| Author : Calixte De Tourris (calixte@starton.com)
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
