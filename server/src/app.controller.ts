import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ExecuteMetaTransactionDto } from './dtos/ExecuteMetaTransactionDto';
import { RequestFundsDto } from './dtos/RequestFundsDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('execute-meta-transaction')
  executeMetaTransaction(@Body() data: ExecuteMetaTransactionDto) {
    return this.appService.executeMetaTransaction(data);
  }

  @Post('request-funds')
  requestFunds(@Body() data: RequestFundsDto) {
    return this.appService.requestFunds(data);
  }
}
