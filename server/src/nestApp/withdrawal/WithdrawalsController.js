import {Bind, Controller, Dependencies, Post, Req, Res} from '@nestjs/common';
import {WithdrawalsRepository} from "../../db/repositories/WithdrawalsRepository";
import {AccountsRepository} from "../../db/repositories/AccountsRepository";

@Controller('/withdrawals')
@Dependencies(WithdrawalsRepository, AccountsRepository)
export class WithdrawalsController {
    constructor(withdrawalsRepository, accountsRepository) {
        this.withdrawalsRepository = withdrawalsRepository
        this.accountsRepository = accountsRepository
    }

    @Post() @Bind(Req(), Res())
    async postWithdrawal(request, response) {
        const withdrawal = request.body

        if (withdrawal.wi_fiat_amount < 0) {
            return response.status(400).send({error: 'Something failed!'});
        }

        let account = await this.accountsRepository.getAccountById(withdrawal.fk_ca_id)
        let newBalance = Number(account.ca_amount.replace(/[^0-9.-]+/g, "")) - Number(withdrawal.wi_fiat_amount)
        if (newBalance < 0) {
            return response.status(400).send({error: 'Something failed!'});
        }

        await this.withdrawalsRepository.addWithdrawal(withdrawal)

        await this.accountsRepository.updateAccountBalance(account.ca_id, newBalance)

        return response.status(200).json()
    }
}