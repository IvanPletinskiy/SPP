import {Injectable} from "@nestjs/common";
import {Account} from "../entities/Account";
import {Currency} from "../entities/Currency";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})

@Injectable()
export class CurrenciesRepository {
    async getAllCurrencies() {
        const results = await pool.query('SELECT * FROM "Cryptocurrency" ORDER BY cc_id')
        const currencies = results.rows.map((row) => {
                return new Currency(row.cc_id, row.cc_code, row.cc_name, row.cc_description, row.cc_usd_price)
            }
        )
        return currencies
    }

    async getCurrencyById(id) {
        const results = await pool.query('SELECT * FROM "Cryptocurrency" WHERE cc_id = $1 ORDER BY cc_id LIMIT 1', [id])
        const currencies = results.rows.map((row) => {
                return new Currency(row.cc_id, row.cc_code, row.cc_name, row.cc_description, row.cc_usd_price)
            }
        )
        return currencies
    }
}