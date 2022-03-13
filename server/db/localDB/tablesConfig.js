const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})

const fs = require('fs');
const path = require("path");
const tablesSql = fs.readFileSync(path.resolve(__dirname, "tables.sql")).toString();

const configurateDatabase = pool.query(tablesSql)

const testDataSql = fs.readFileSync(path.resolve(__dirname, "testData.sql")).toString();

const fillDatabaseWithData = pool.query(testDataSql)

module.exports = {
    configurateDatabase,
    fillDatabaseWithData
}
