import {Module} from '@nestjs/common'
import {SubAppController} from './controller'
import {SubAppService} from './service'
import {AccountsController} from "./accounts/AccountsController";
import {TopupsController} from "./topup/TopupsController";
import {AccountsRepository} from "../db/repositories/AccountsRepository";
import {CurrenciesRepository} from "../db/repositories/CurrenciesRepository";
import {BuyController} from "./buy/BuyController";
import {TransactionsRepository} from "../db/repositories/TransactionsRepository";
import {TopupsRepository} from '../db/repositories/TopupsRepository';

@Module({
    imports: [],
    controllers: [SubAppController, AccountsController, BuyController, TopupsController],
    providers: [SubAppService, AccountsRepository, CurrenciesRepository, TransactionsRepository, TopupsRepository]
})
export class SubAppModule {
}
