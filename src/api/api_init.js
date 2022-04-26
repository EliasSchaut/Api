
function init(app) {
    app.post('/POST/', function(req, res) {
        res.send("POST received")
    })

    app.get('/GET/', function (req, res) {
        res.send("GET received")
    })



}

module.exports = {
    init: init
};
