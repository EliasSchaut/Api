
const crypto = require("crypto")

const __all__ = [
    "/bday/member",
    "/bday/members",
    "/bday/members/public",
    "/bday/members/count",
    "/bday/members/html",
    "/bday/members/sums"
]

function init(app) {
    app.get('/', function (req, res) {
        res.send("GET received")
    })

    app.post('/', function (req, res) {
        res.send("POST received")
    })

    app.verifyToken = function (req, res, next) {
        if (!req.headers.hasOwnProperty("apitoken")) return res.sendStatus(403)

        const token = req.headers['apitoken']
        if (crypto.createHash("sha256").update(token).digest("hex") === app.sha256) {
            next()
        } else {
            res.sendStatus(403)
        }
    }

    for (const path of __all__) {
        require(`./routes${path}.js`).init(app, path)
    }
}


module.exports = {
    init: init
}
