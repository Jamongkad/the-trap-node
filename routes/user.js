
/*
 * GET users listing.
 */

var PlayerObject = require('../models/playerobject');

//every person has a story...
var visitors = [
    {name: 'Markus Peabody', age: 25, gender: 'male', occupation: 'peasant', request: "My Lord I want money..."} 
 ,  {name: 'Anna Baxter', age: 20, gender: 'female', occupation: 'noble', request: "My Lord I want an army..."}
 ,  {name: 'Ginny Collin', age: 30, gender: 'female', occupation: 'peasant', request: "My Lord I need more time..."}
 ,  { name: 'Anders Molora'
    , age: 31
    , gender: 'male'
    , occupation: 'noble'
    , request: "The cackling of the fire is a source of comfort to you. You watch lazily as the flames dance in the fireplace, wine in hand, you take two quick sips. The drink warms your entire body. How many glasses has it been since hearing the news of your succession to Lord Almasy of Vogelstead? The only child of Lord Owin Almasy and Lady Margeary Yonella, making you the sole heir to the Almasy estate and holdings. "
    , inquiry: {
          "player": "I have heard that story already"
        , "Anders": "Yes my lord but this is quite different!"
        , "decide": function() {}
      }
    }
];

exports.list = function(req, res){
    res.send("respond with a resource");
};

exports.visitor = function(req, res) {
    res.json(visitors);
}

exports.test = function(req, res) {
     res.send(new PlayerObject());
}

exports.speak = function(req, res) {

    var id = req.params.id;
   
    for(var i=0;i<visitors.length;i++) {
        var profile = visitors[i];
        if(profile.name === id) {
            res.json(profile);
        }      
    }
}
