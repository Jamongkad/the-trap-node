
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Mathew Wong' });
};

exports.intro = function(req, res) { 
    res.render('intro', { title: 'Mathew Wong' });
}

exports.comein = function(req, res) { 
    res.render('comein', { title: 'Mathew Wong' });
}

exports.oath = function(req, res) { 
    res.render('oath', { title: 'Mathew Wong' });
}

exports.oath_conclusion = function(req, res) { 
    res.render('oath_conclusion', { title: 'Mathew Wong' });
}

exports.game = function(req, res) { 
    res.render('game');
}

exports.test = function(req, res) { 
    console.log("Mathew");
    res.send(req.params);
    res.send(req.query);
}
