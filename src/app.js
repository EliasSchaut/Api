
const express = require('express')
const bodyParser = require('body-parser')
const config = require("../config.json")
const app = express()
const port = config.port
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.DB = require('./db/db_init').DB
require('./api/api_init').init(app)


// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------
