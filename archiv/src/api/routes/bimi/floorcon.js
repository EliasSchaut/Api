
const request = require('request');

function init(app, path) {
    app.post(path, app.verifyToken, async function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Max-Age", "86400");
        const bimi = app.config.bimi

        for (const account_key of Object.keys(bimi.accounts)) {
            const call = `${bimi.api.base_url}${bimi.api.routes.credit}?email=${bimi.account}&apikey=${bimi.api.key}&account=${bimi.accounts[account_key]}&amount=${bimi.floor_contribution}&text=Flurbeitrag`
            try {
                request(call)
            } catch (e) {
                console.error(e)
                return res.status(500).send(e)
            }
        }

        return res.send("OK")
    })
}



module.exports = {
    init
}
