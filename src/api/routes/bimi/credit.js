
const request = require('request');

function init(app, path) {
    app.post(path, app.verifyToken, async function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Max-Age", "86400");
        const bimi = app.config.bimi

        try {
            const account_key = req.body.account
            const value = req.body.value
            const text = req.body.text

            if (account_key === undefined || value === undefined || text === undefined) {
                return res.status(400).send("Missing parameters")
            }

            const call = `${bimi.api.base_url}${bimi.api.routes.credit}?email=${bimi.account}&apikey=${bimi.api.key}&account=${bimi.accounts[account_key]}&amount=${value}&text=${text}`
            request(call)
        } catch (e) {
            console.error(e)
            return res.status(500).send(e)
        }

        res.send("OK")
    })
}


module.exports = {
    init
}
