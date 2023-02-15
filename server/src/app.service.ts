import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExecuteMetaTransactionDto } from './dtos/ExecuteMetaTransactionDto';

@Injectable()
export class AppService {
  async executeMetaTransaction(data: ExecuteMetaTransactionDto) {
    const { userAddress, functionSignature, sigR, sigS, sigV } = data;

    try {
      const response = await axios.post(
        'https://api.starton.io/v3/smart-contract/avalanche-fuji/0xcEB17Bf0E3d198ec985370f456332f10f373CdB3/call',
        {
          functionName:
            'executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)',
          params: [userAddress, functionSignature, sigR, sigS, sigV],
          signerWallet: '0x5894f171C886B817Fe9415635022583785ac0960',
          speed: 'low',
        },
        {
          headers: {
            'x-api-key': process.env.STARTON_API_KEY,
          },
        },
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
    return 'Hello World!';
  }
}
