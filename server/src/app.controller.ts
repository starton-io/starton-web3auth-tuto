import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ExecuteMetaTransactionDto } from './dtos/ExecuteMetaTransactionDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('execute-meta-transaction')
  executeMetaTransaction(@Body() data: ExecuteMetaTransactionDto) {
    return this.appService.executeMetaTransaction(data);
  }
}
