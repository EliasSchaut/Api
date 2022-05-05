
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const config = require("../config/config.json")
const app = express()
const port = config.port
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: ['http://localhost', 'https://bday-api.kobert.dev/']
}));

const db_init = require('./db/db_init')
app.DB = db_init.DB
db_init.sequelize.sync()
require('./api/api_init').init(app)


// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------
