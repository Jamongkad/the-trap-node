
/*
 * GET users listing.
 */

var visitors = [
    {name: 'Markus Peabody', age: 25, gender: 'male', occupation: 'peasant'} 
 ,  {name: 'Anders Molora', age: 32, gender: 'male', occupation: 'noble'}
 ,  {name: 'Brood', age: 20, gender: 'female', occupation: 'unknown'}
];

exports.list = function(req, res){
    res.send("respond with a resource");
};

exports.visitor = function(req, res) {
    res.json(visitors);
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
