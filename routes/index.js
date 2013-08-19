
/*
 * GET home page.
 */

var mysql = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'nfl'});

exports.index = function(req, res){
    res.render('index');
}

exports.partials = function(req, res) {
    var filename = req.params.filename;    
    if(!filename) return;
    res.render('partials/' + filename);
}

exports.test = function(req, res) {
    var result = client.query('SELECT * FROM season_stats WHERE qtr = ? LIMIT 10', [1], function(err, results) {
        res.send(results);  
    });
}
