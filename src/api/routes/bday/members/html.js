
function init(app, path) {
    app.get(path, app.verifyToken, async function (req, res) {
        res.sendStatus(501)
    })
}

module.exports = {
    init
}
