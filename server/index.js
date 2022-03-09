// server/index.js
const express = require("express");
// const bodyParser = require('body-parser')
const usersDao = require('./db/usersDao')

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// )

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/users', usersDao.getUsers)
app.get('/users/:id', usersDao.getUserById)
app.post('/users', usersDao.createUser)
app.put('/users/:id', usersDao.updateUser)
app.delete('/users/:id', usersDao.deleteUser)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});