
function init(app, path) {
    app.get(path, async function (req, res) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept")
        res.header("Access-Control-Allow-Methods", "GET, POST")
        res.header("Access-Control-Max-Age", "86400")

        const count = await app.DB.Bday_Members.get_names_count(app.DB)
        res.send(encodeURI(count))
    })
}

module.exports = {
    init
}
