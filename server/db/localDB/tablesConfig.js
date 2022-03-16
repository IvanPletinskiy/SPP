const fs = require('fs');
const path = require("path");

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'spp',
    password: 'password',
    port: 5432,
})



function configureDatabase() {
    const tablesSql = fs.readFileSync(path.resolve(__dirname, "tables.sql")).toString();
    pool.query(tablesSql)
}

const addTestData =  (request, response) =>  {
    const testDataSql = fs.readFileSync(path.resolve(__dirname, "testData.sql")).toString();
    pool.query(testDataSql,  (error, result) => {
        if (error) {
            throw error
        }
        console.log(result)
        response.status(201).send(`Rows added ${result.length}`)
    })

}

module.exports = {
    configureDatabase,
    addTestData
}
