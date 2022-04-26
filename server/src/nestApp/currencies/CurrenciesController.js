import {Bind, Controller, Dependencies, Get, Post, Put, Req, Res} from '@nestjs/common'
import {CurrenciesRepository} from "../../db/repositories/CurrenciesRepository";

@Controller('/currencies')
@Dependencies(CurrenciesRepository)
export class CurrenciesController {
    constructor(currenciesRepository) {
        this.currenciesRepository = currenciesRepository
    }

    @Get()
    @Bind(Res())
    async getCurrencies(response) {
        const currencies = await this.currenciesRepository.getAllCurrencies()
        return response.status(200).json(currencies)
    }

}