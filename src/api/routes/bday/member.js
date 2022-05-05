
function init(app, path) {
    app.post(path, async function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Max-Age", "86400");

        const member = req.body
        const forename = member.forename
        const surname = member.surname
        const need_bed = member.need_bed === "on"
        const is_nerd = member.is_nerd === "on"
        const anonym = member.anonym === "on"

        if (await app.DB.Bday_Members.get(app.DB, forename, surname) === null) {
            if (await app.DB.Bday_Members.add(app.DB, forename, surname, need_bed, is_nerd, anonym)) {
                res.sendStatus(200)
            } else {
                res.sendStatus(500)
            }
        } else {
            res.sendStatus(406)
        }

        res.end()
    })

    app.delete(path, app.verifyToken, async function (req, res) {
        const member = req.body
        const forename = member.forename
        const surname = member.surname

        if (await app.DB.Bday_Members.get(app.DB, forename, surname) !== null) {
            if (await app.DB.Bday_Members.remove(app.DB, forename, surname)) {
                res.sendStatus(200)
            } else {
                res.sendStatus(500)
            }
        } else {
            res.status(404).send("Member not found")
        }
    })
}



module.exports = {
    init
}
