/*
| Developed by Starton
| Filename : ExecuteMetaTransactionDto.ts
| Author : Calixte De Tourris (calixte@starton.com)
*/

import { IsEthereumAddress, IsNotEmpty, IsString } from 'class-validator';

/*
|--------------------------------------------------------------------------
| Dto
|--------------------------------------------------------------------------
*/
export class ExecuteMetaTransactionDto {
  @IsNotEmpty()
  @IsEthereumAddress()
  userAddress: string;

  @IsNotEmpty()
  @IsString()
  functionSignature: string;

  @IsNotEmpty()
  @IsString()
  sigR: string;

  @IsNotEmpty()
  @IsString()
  sigS: string;

  @IsNotEmpty()
  @IsString()
  sigV: string;
}
