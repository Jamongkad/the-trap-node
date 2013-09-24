var mysql = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'scp'});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function hashCode(s){
    return Math.abs(s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0));
}

var Crawler = require("crawler").Crawler;

var c = new Crawler({
    "maxConnections": 10
  , "callback": function(error, result, $) {
         var oldArray = $.trim($(".mw-content-ltr p:first").text()).split(".");
         var newArray = oldArray.filter(function(n) { return n !== '' }); 
         var map = newArray.map(function(n) {
             var re = new RegExp('\\b(An article (about|that|involving)+)\\b', 'g');
             var text = $.trim(n.replace(re, ''));
             var simile = text.split(",");
             
             var re1 = new RegExp('\\b(conveying)\\b', 'g');
             var title = $.trim(simile[1].replace(re1, ''));
             var body = $.trim(simile[0]);
             
             var data = { 'title': hashCode(title).toString().substring(0, 3) + " - " + title.capitalize(), 'description': body.capitalize() + "." }
             console.log(data);
             
             var query = client.query("INSERT INTO anomaly SET ?", data, function(err, result) {});             
         })

         return map;
    }
})

c.queue("http://www.random-generator.com/index.php?title=SCP_Foundation_Idea_Generator"); 
