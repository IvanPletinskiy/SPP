// server/index.js
const express = require("express");
// const bodyParser = require('body-parser')

const cryptoAccountDao = require('./db/dao/cryptoAccountDao')
const cryptocurrencyDao = require('./db/dao/cryptocurrencyDao')
const topupDao = require('./db/dao/topupDao')
const transactionDao = require('./db/dao/transactionDao')
const usersDao = require('./db/dao/userDao')
const verificationDao = require('./db/dao/verificationDao')
const withdrawalDao = require('./db/dao/withdrawalDao')




const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/users', usersDao.getUsers)
app.get('/users/:id', usersDao.getUserById)
app.post('/users', usersDao.createUser)
app.put('/users/:id', usersDao.updateUser)
app.delete('/users/:id', usersDao.deleteUser)

app.get('/accounts', cryptoAccountDao.getAllCryptoAccounts)
app.get('/cryptocurrencies', cryptocurrencyDao.getAllCryptocurrencies)
app.get('/topups', topupDao.getAllTopups)
app.get('/transactions', transactionDao.getAllTransactions)
app.get('/verifications', verificationDao.getAllVerifications)
app.get('/withdrawals', withdrawalDao.getAllWithdrawals)



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    // database configuration if needed
    // require('./db/localDB/tablesConfig').configurateDatabase
    console.log(`Server listening on ${PORT}`);
});
