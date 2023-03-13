import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { ExecuteMetaTransactionDto } from './dtos/ExecuteMetaTransactionDto';
import { RequestFundsDto } from './dtos/RequestFundsDto';
import { ethers } from 'ethers';
import { StartonConfig } from './config/starton.config';
import { StartonAxios } from './utils/axios.utils';

@Injectable()
export class AppService {
  async executeMetaTransaction(data: ExecuteMetaTransactionDto) {
    const { userAddress, functionSignature, sigR, sigS, sigV } = data;

    try {
      const response = await StartonAxios.post(
        StartonConfig.smartContractCallUrl,
        {
          functionName:
            'executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)',
          params: [userAddress, functionSignature, sigR, sigS, sigV],
          signerWallet: StartonConfig.signerWallet,
          speed: StartonConfig.transactionSpeed,
        },
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new HttpException(
          error.response.data.message,
          error.response.data.statusCode,
        );
      }
    }
  }

  async requestFunds(data: RequestFundsDto) {
    const { userAddress } = data;

    try {
      const response = await StartonAxios.post(
        StartonConfig.smartContractCallUrl,
        {
          functionName: 'transfer(address,uint256)',
          params: [
            userAddress,
            ethers.utils.parseEther(StartonConfig.requestFundsAmount),
          ],
          signerWallet: StartonConfig.signerWallet,
          speed: StartonConfig.transactionSpeed,
        },
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new HttpException(
          error.response.data.message,
          error.response.data.statusCode,
        );
      }
    }
  }
}
