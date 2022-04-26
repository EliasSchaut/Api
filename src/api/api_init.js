
function init(app) {
    app.get('/', function (req, res) {
        res.send("GET received")
    })

    app.post('/', function (req, res) {
        res.send("POST received")
    })
}

module.exports = {
    init: init
}
