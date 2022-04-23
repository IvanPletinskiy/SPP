const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})

const getAllWithdrawals = (request, response) => {
    pool.query('SELECT * FROM "Withdrawal" ORDER BY wi_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAllWithdrawals,
}