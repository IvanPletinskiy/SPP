import {Bind, Controller, Dependencies, Post, Req, Res} from '@nestjs/common';
import {WithdrawalsRepository} from "../../db/repositories/WithdrawalsRepository";

@Controller('/withdrawals')
@Dependencies(WithdrawalsRepository)
export class WithdrawalsController {
    constructor(withdrawalsRepository) {
        this.withdrawalsRepository = withdrawalsRepository
    }

    @Post() @Bind(Req(), Res())
    async postBuy(request, response) {
        const withdrawal = request.body
        await this.withdrawalsRepository.addWithdrawal(withdrawal)
        return response.status(200).json()
    }
}