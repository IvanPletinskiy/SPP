// server/index.js
const express = require("express");
const bodyParser = require('body-parser')

//
const cryptoAccountDao = require('./db/dao/cryptoAccountDao')
const cryptocurrencyDao = require('./db/dao/cryptocurrencyDao')
const topupDao = require('./db/dao/topupDao')
const transactionDao = require('./db/dao/transactionDao')
const usersDao = require('./db/dao/userDao')
const verificationDao = require('./db/dao/verificationDao')
const withdrawalDao = require('./db/dao/withdrawalDao')

const app = express();

app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/users', usersDao.getUsers)
app.get('/users/:id', usersDao.getUserById)
app.put('/users', usersDao.createUser)
app.post('/users/:id', usersDao.updateUser)
app.delete('/users/:id', usersDao.deleteUser)

app.get('/accounts', cryptoAccountDao.getAllCryptoAccounts)
app.get('/cryptocurrencies', cryptocurrencyDao.getAllCryptocurrencies)
app.put('/cryptocurrency', cryptocurrencyDao.createCryptocurrency)
app.get('/topups', topupDao.getAllTopups)
app.get('/transactions', transactionDao.getAllTransactions)
app.get('/verifications', verificationDao.getAllVerifications)
app.get('/withdrawals', withdrawalDao.getAllWithdrawals)

app.put('/fillData', require('./db/localDB/tablesConfig').addTestData)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    // database configuration if needed
    require('./db/localDB/tablesConfig').configureDatabase()
    console.log(`Server listening on ${PORT}`);
});
