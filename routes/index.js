
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index');
}

exports.partials = function(req, res) {
    var filename = req.params.filename;    
    if(!filename) return;
    res.render(filename);
}
