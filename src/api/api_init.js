
const __all__ = [
    "/bday/member",
    "/bday/members",
    "/bday/members/count"
]

function init(app) {
    app.get('/', function (req, res) {
        res.send("GET received")
    })

    app.post('/', function (req, res) {
        res.send("POST received")
    })

    for (const path of __all__) {
        require(`./routes${path}.js`).init(app, path)
    }
}


module.exports = {
    init: init
}
