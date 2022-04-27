import {Module} from '@nestjs/common'
import {SubAppController} from './controller'
import {SubAppService} from './service'
import {AccountsController} from "./accounts/AccountsController";
import {TopupsController} from "./topup/TopupsController";
import {WithdrawalsController} from './withdrawal/WithdrawalsController';
import {AccountsRepository} from "../db/repositories/AccountsRepository";
import {CurrenciesRepository} from "../db/repositories/CurrenciesRepository";
import {BuyController} from "./buy/BuyController";
import {TransactionsRepository} from "../db/repositories/TransactionsRepository";
import {CurrenciesController} from "./currencies/CurrenciesController";
import {TopupsRepository} from '../db/repositories/TopupsRepository';
import {WithdrawalsRepository} from '../db/repositories/WithdrawalsRepository';

@Module({
    imports: [],
    controllers: [SubAppController, AccountsController, CurrenciesController, BuyController, TopupsController, WithdrawalsController],
    providers: [SubAppService, AccountsRepository, CurrenciesRepository, TransactionsRepository, TopupsRepository, WithdrawalsRepository]
})
export class SubAppModule {
}
