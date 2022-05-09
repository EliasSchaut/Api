
function init(app, path) {
    app.get(path, app.verifyToken, async function (req, res) {
        const members = await app.DB.Bday_Members.get_all_names(app.DB)
        const table = buildHtmlTable(members)
        res.send(buildHtmlFrame(table))
    })
}

function buildHtmlTable(data_array) {
    return '<table class="table table-striped"><tr>' +
        '<th scope="col">Vorname</th>' +
        '<th scope="col">Nachname</th>' +
        '<th scope="col">Braucht Bett</th>' +
        '<th scope="col">Hat Bett</th>' +
        '<th scope="col">Ist Nerd</th>' +
        '<th scope="col">Ist anonym</th></tr>' +
        data_array.map(function (item) {
        return '<tr><td>' + item.forename + '</td>' +
            '<td>' + item.surname + '</td>' +
            '<td>' + item.need_bed + '</td>' +
            '<td>' + item.has_bed + '</td>' +
            '<td>' + item.nerd + '</td>' +
            '<td>' + item.anonym + '</td></tr>'
    }).join('') + '</table>'
}

function buildHtmlFrame(body){
    return '<!DOCTYPE html><html lang="de">' +
        '<head><title>Gästeliste</title>' +
        '    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">' +
        '    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script></head>' +
        '<body>' + body + '</body></html>'
}

module.exports = {
    init
}
