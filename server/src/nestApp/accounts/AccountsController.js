import {Bind, Controller, Dependencies, Get, Post, Put, Req, Res} from '@nestjs/common'
import {AccountsRepository} from "../../db/repositories/AccountsRepository";

@Controller('/accounts')
@Dependencies(AccountsRepository)
export class AccountsController {
    constructor(accountsRepository) {
        this.accountsRepository = accountsRepository
    }

    @Get()
    @Bind(Res())
    async getHello(response) {
        const accounts = await this.accountsRepository.getAllAccounts()

        return response.status(200).json(accounts)
    }

    @Post() @Bind(Req(), Res())
    async createAccount(request, response) {
        const account = request.body
        console.log("Controller create account: " + account)
        await this.accountsRepository.createNewAccount(account)
        return response.status(200).json()
    }
}