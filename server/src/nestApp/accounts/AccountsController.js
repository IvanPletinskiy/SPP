import {Bind, Controller, Dependencies, Get, Req, Res} from '@nestjs/common'
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
}