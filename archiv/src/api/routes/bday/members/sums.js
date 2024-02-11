
function init(app, path) {

    app.get(path, app.verifyToken, async function (req, res) {
        const counts = await app.DB.Bday_Members.aggregate(app.DB)
        res.json(counts)
    })
}

module.exports = {
    init
}
