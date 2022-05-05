
function init(app, path) {
    app.get(path, app.verifyToken, async function (req, res) {

    })
}

module.exports = {
    init
}
