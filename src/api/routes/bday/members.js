
function init(app, path) {
    app.get(path, app.verifyToken, async function (req, res) {
        const members = await app.DB.Bday_Members.get_all_names(app.DB)
        res.json(members)
    })
}


module.exports = {
    init
}
