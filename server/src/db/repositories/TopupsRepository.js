import {Injectable} from "@nestjs/common";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin', host: 'localhost', database: 'spp', password: 'password', port: 5432,
})

@Injectable()
export class TopupsRepository {
    async addTopup(topup) {
        const to_fiat_amount = Number(topup.to_fiat_amount)
        const to_datetime = Number(topup.to_datetime)
        const fk_ca_id = Number(topup.fk_ca_id)
        console.log("Topup:")
        console.log(to_fiat_amount)
        console.log(to_datetime)
        console.log(fk_ca_id)
        const text = 'INSERT INTO "Topup" (to_fiat_amount, to_datetime, fk_ca_id) VALUES ($1, $2, $3)'
        const values = [to_fiat_amount, to_datetime, fk_ca_id];
        const res = await pool.query(text, values)
        return res
    }
}