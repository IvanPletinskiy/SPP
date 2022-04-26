import {Bind, Controller, Dependencies, Post, Req, Res} from '@nestjs/common';
import {TopupsRepository} from "../../db/repositories/TopupsRepository";

@Controller('/topups')
@Dependencies(TopupsRepository)
export class TopupsController {
    constructor(topupsRepository) {
        this.topupsRepository = topupsRepository
    }

    @Post() @Bind(Req(), Res())
    async postBuy(request, response) {
        const topup = request.body
        await this.topupsRepository.addTopup(topup)
        return response.status(200).json()
    }
}