import {Bind, Controller, Dependencies, Get, Post, Query, Req, Res} from '@nestjs/common'
import {CurrenciesRepository} from "../../db/repositories/CurrenciesRepository";
import {getUsdPrice} from "../../utils/CryptoUtils";
import {AccountsRepository} from "../../db/repositories/AccountsRepository";
import {TransactionsRepository} from "../../db/repositories/TransactionsRepository";

@Controller('/buy') @Dependencies(AccountsRepository, CurrenciesRepository, TransactionsRepository)
export class BuyController {
    constructor(accountsRepository, currenciesRepository, transactionsRepository) {
        this.accountsRepository = accountsRepository
        this.currenciesRepository = currenciesRepository
        this.transactionsRepository = transactionsRepository
    }

    @Get() @Bind(Res(), Query("user_id"))
    async getAccounts(response, userId) {
        const userAccounts = await this.accountsRepository.getAccountsByUserId(userId)
        const currencies = await this.currenciesRepository.getAllCurrencies()

        userAccounts.map((account) => {
            account.usd_price = getUsdPrice(account.fk_cc_id)
            account.cc_code = currencies.find((it) => it.cc_id === account.fk_cc_id).cc_code
            account.cc_name = currencies.find((it) => it.cc_id === account.fk_cc_id).cc_name
        })

        return response.status(200).json(userAccounts)
    }

    @Post() @Bind(Req(), Res())
    async postBuy(request, response) {
        const transaction = request.body
        await this.transactionsRepository.addTransaction(transaction)
        return response.status(200).json()
    }
}