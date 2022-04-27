import {Injectable} from "@nestjs/common";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin', host: 'localhost', database: 'spp', password: 'password', port: 5432,
})

@Injectable()
export class WithdrawalsRepository {
    async addWithdrawal(withdrawal) {
        const wi_fiat_amount = Number(withdrawal.wi_fiat_amount)
        const fk_ca_id = Number(withdrawal.fk_ca_id)
        console.log("Withdrawal:")
        console.log(wi_fiat_amount)
        console.log(fk_ca_id)
        const text = 'INSERT INTO "Withdrawal" (wi_fiat_amount, wi_datetime, fk_ca_id) VALUES ($1, $2, $3)'
        const values = [wi_fiat_amount, withdrawal.to_datetime, fk_ca_id];
        const res = await pool.query(text, values)
        return res
    }
}