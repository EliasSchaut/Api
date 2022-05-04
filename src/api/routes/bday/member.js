
function init(app, path) {
    app.post(path, async function (req, res) {


        console.log(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Max-Age", "86400");

        res.sendStatus(406)


        const member = req.body;

        const forename = member.forename
        const surname = member.surname
        const need_bed = member.need_bed === "on"
        const is_nerd = member.is_nerd === "on"
        const anonym = member.anonym === "on"
        /**
        res.type('application/json')
        if (/[a-z]+/.test(forename) && /[a-z]+/.test(surname)) {
            if (await app.DB.Bday_Members.add(app.DB, forename, surname, need_bed, is_nerd, anonym)) {
                res.status(200)
            } else {
                res.status(500)
            }
        } else {
            res.status(406)
        }

        res.send(JSON.stringify("received")).end()*/
    })

    app.delete(path, function (req, res) {

    })
}

module.exports = {
    init
}
