const fs = require("fs");
const path = require("path");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})

const getAllCryptocurrencies = (request, response) => {
    console.log('qwe')
    pool.query('SELECT * FROM "Cryptocurrency" ORDER BY cc_id', (error, results) => {
        console.log(results)
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCryptocurrency = (request, response) => {
    pool.query('INSERT INTO "Cryptocurrency" (cc_code, cc_name, cc_description) VALUES (\'BTC\',\'BITOC\',\'AHAD\')',
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Cryptocurrency added`)
        })
}

module.exports = {
    getAllCryptocurrencies,
    createCryptocurrency
}