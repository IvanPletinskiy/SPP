import {Bind, Controller, Dependencies, Post, Req, Res} from '@nestjs/common';
import {TopupsRepository} from "../../db/repositories/TopupsRepository";
import {AccountsRepository} from "../../db/repositories/AccountsRepository";

@Controller('/topups') @Dependencies(TopupsRepository, AccountsRepository)
export class TopupsController {
    constructor(topupsRepository, accountsRepository) {
        this.topupsRepository = topupsRepository
        this.accountsRepository = accountsRepository
    }

    @Post() @Bind(Req(), Res())
    async postTopup(request, response) {
        const topup = request.body
        await this.topupsRepository.addTopup(topup)

        if (topup.to_fiat_amount < 0) {
            return response.status(400).send({ error: 'Something failed!' });
        }

        let account = await this.accountsRepository.getAccountById(topup.fk_ca_id)
        // Convert ca_amount from $10,000.00 to 10000
        let newBalance = Number(account.ca_amount.replace(/[^0-9.-]+/g, "")) + Number(topup.to_fiat_amount)
        await this.accountsRepository.updateAccountBalance(topup.fk_ca_id, newBalance)

        return response.status(200).json()
    }
}