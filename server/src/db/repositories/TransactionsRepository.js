import {Injectable} from "@nestjs/common";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin', host: 'localhost', database: 'spp', password: 'password', port: 5432,
})

@Injectable()
export class TransactionsRepository {
    async addTransaction(transaction) {
        const amount_from = Number(transaction.tr_amount_from)
        const amount_to = Number(transaction.tr_amount_to)
        const account_from = Number(transaction.fk_account_from)
        const account_to = Number(transaction.fk_account_to)
        console.log("Transaction:")
        console.log(amount_from)
        console.log(amount_to)
        console.log(account_from)
        console.log(account_to)
        const text = 'INSERT INTO "Transaction" (tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to) VALUES ($1, $2, $3, $4, $5)'
        const values = [amount_from, amount_to, transaction.tr_datetime, account_from, account_to];
        const res = await pool.query(text, values)
        return res
    }
}