import { Module } from '@nestjs/common'
import { SubAppController } from './controller'
import { SubAppService } from './service'
import {AccountsController} from "./accounts/AccountsController";
import {AccountsRepository} from "./accounts/AccountsRepository";

@Module({
  imports: [],
  controllers: [SubAppController, AccountsController],
  providers: [SubAppService, AccountsRepository]
})
export class SubAppModule {}
