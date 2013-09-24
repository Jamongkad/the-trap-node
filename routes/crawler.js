var mysql = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'scp'});

exports.index = function(req, res) {
    client.query("SELECT * FROM anomaly", function(err, result) {
        res.json(result);
    })
}
