import {Bind, Controller, Dependencies, Get, Req, Res} from '@nestjs/common'
import {AccountsRepository} from "./AccountsRepository";

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
        console.log(accounts)

        return response.status(200).json(accounts)
    }
}