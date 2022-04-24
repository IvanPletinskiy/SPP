import {Module} from '@nestjs/common'
import {SubAppController} from './controller'
import {SubAppService} from './service'
import {AccountsController} from "./accounts/AccountsController";
import {AccountsRepository} from "../db/repositories/AccountsRepository";
import {CurrenciesRepository} from "../db/repositories/CurrenciesRepository";
import {BuyController} from "./buy/BuyController";
import {TransactionsRepository} from "../db/repositories/TransactionsRepository";

@Module({
    imports: [],
    controllers: [SubAppController, AccountsController, BuyController],
    providers: [SubAppService, AccountsRepository, CurrenciesRepository, TransactionsRepository]
})
export class SubAppModule {
}
