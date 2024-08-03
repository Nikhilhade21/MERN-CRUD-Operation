const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Modules/Users')

const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3001

//db connection
mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post('/createUser', (req, res) => {
    UserModel.create(req, body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
})