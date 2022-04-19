import {Injectable} from "@nestjs/common";
import {Account} from "./Account";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})

@Injectable()
export class AccountsRepository {
    async getAllAccounts() {
        const results = await pool.query('SELECT * FROM "CryptoAccount" ORDER BY ca_id ASC')
        const accounts = results.rows.map((row) => {
            return new Account(row.ca_id, row.ca_number, row.ca_amount, row.fk_user_id, row.fk_cc_id)
        });

        return accounts
    }
}