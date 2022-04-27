import {Injectable} from "@nestjs/common";
import {Account} from "../entities/Account";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})

var crypto = require("crypto");

@Injectable()
export class AccountsRepository {
    async getAllAccounts() {
        const results = await pool.query('SELECT * FROM "CryptoAccount" ORDER BY ca_id ASC')
        const accounts = results.rows.map((row) => {
            return new Account(row.ca_id, row.ca_number, row.ca_amount, row.fk_user_id, row.fk_cc_id)
        });

        return accounts
    }

    async getAccountsByUserId(userId) {
        const results = await pool.query('SELECT * FROM "CryptoAccount" WHERE fk_user_id = $1 ORDER BY ca_id ASC', [userId])
        const accounts = results.rows.map((row) => {
            return new Account(row.ca_id, row.ca_number, row.ca_amount, row.fk_user_id, row.fk_cc_id)
        });

        return accounts
    }

    async createNewAccount(account) {
        let number = crypto.randomBytes(20).toString('hex').substring(0, 20)
        const ca_number = String(number)
        const ca_amount = Number(0)
        const fk_user_id = Number(account.user)
        const fk_cc_id = Number(account.currency)
        const values = [ca_number, ca_amount, fk_user_id, fk_cc_id];
        console.log("Repo create Account:")
        console.log(values)

        const query = 'INSERT INTO "CryptoAccount"(ca_number, ca_amount, fk_user_id, fk_cc_id) VALUES ($1, $2, $3, $4)';
        const newAccount = await pool.query(query, values)

        return newAccount
    }

    async updateAccountBalance(accountId, newBalance) {
        console.log("accountId:" + accountId + " newBalance: " + newBalance)
        const results = await pool.query('UPDATE "CryptoAccount" SET ca_amount = $1 WHERE ca_id = $2', [newBalance, accountId])

        console.log(await this.getAllAccounts())

        return results
    }

    async getAccountById(accountId) {
        const results = await pool.query('SELECT * FROM "CryptoAccount" WHERE ca_id = $1 LIMIT 1', [accountId])
        let row = results.rows[0]
        return new Account(row.ca_id, row.ca_number, row.ca_amount, row.fk_user_id, row.fk_cc_id)
    }
}