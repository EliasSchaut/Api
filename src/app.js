
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require("../config/config.json")
const app = express()

app.config = config
const port = config.port
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: ['http://localhost', 'https://bday-api.kobert.dev/']
}))

require('./api/api_init').init(app)
app.sha256 = config.sha256


// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------
