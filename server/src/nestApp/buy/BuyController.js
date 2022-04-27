import {Bind, Controller, Dependencies, Get, Post, Query, Req, Res} from '@nestjs/common'
import {CurrenciesRepository} from "../../db/repositories/CurrenciesRepository";
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
            account.usd_price = currencies.find((it) => it.cc_id === account.fk_cc_id).cc_usd_price.replace(/[^0-9.-]+/g, "")
            account.cc_code = currencies.find((it) => it.cc_id === account.fk_cc_id).cc_code
            account.cc_name = currencies.find((it) => it.cc_id === account.fk_cc_id).cc_name
        })

        return response.status(200).json(userAccounts)
    }

    @Post() @Bind(Req(), Res())
    async postBuy(request, response) {
        const transaction = request.body

        if (Number(transaction.tr_amount_from < 0) || Number(transaction.tr_amount_to < 0)) {
            console.log("tr_amount_from or tr_amount_to is less than zero")
            return response.status(400).send({error: 'Something failed!'});
        }

        let srcAccount = await this.accountsRepository.getAccountById(transaction.fk_account_from)
        let targetAccount = await this.accountsRepository.getAccountById(transaction.fk_account_to)

        // Check if account has enough
        if (Number(transaction.tr_amount_from) > Number(srcAccount.ca_amount.replace(/[^0-9.-]+/g, ""))) {
            console.log("Not enough src account balance")
            return response.status(400).send({error: 'Something failed!'});
        }

        await this.transactionsRepository.addTransaction(transaction)

        let newSrcBalance = Number(srcAccount.ca_amount.replace(/[^0-9.-]+/g, "")) - Number(transaction.tr_amount_from)
        console.log("targetAccount.ca_amount: " + Number(targetAccount.ca_amount.replace(/[^0-9.-]+/g, "")))
        console.log("transaction.tr_amount_to" + Number(transaction.tr_amount_to))
        let newTargetBalance = Number(targetAccount.ca_amount.replace(/[^0-9.-]+/g, "")) + Number(transaction.tr_amount_to)

        await this.accountsRepository.updateAccountBalance(srcAccount.ca_id, newSrcBalance)
        await this.accountsRepository.updateAccountBalance(targetAccount.ca_id, newTargetBalance)

        return response.status(200).json()
    }
}