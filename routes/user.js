var mysql = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'scp'});

exports.list = function(req, res){
    res.send("respond with a resource");
};

exports.visitor = function(req, res) {
    res.json(visitors);
}

exports.speak = function(req, res) {

    var id = req.params.id;

    client.query("SELECT * FROM anomaly WHERE ?", {"id": id}, function(err, result) {
        res.json(result);
    })   

    //client.query("DELETE FROM anomaly WHERE ?", {"id": id}, function(err, result) {});
}
