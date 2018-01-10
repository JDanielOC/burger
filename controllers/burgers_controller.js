// dependencies
var express = require('express');
var router = express.Router();
//Import the model
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/insertOne', function (req, res) {
    burger.insertOne([
        'name', 'devoured'
    ], [
            req.body.name, false
        ], function () {
            res.redirect('/index');
        });
});

router.put('/burgers/updateOne/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);
    console.log(req.body);
    if(req.body.devoured === 'true') {
        var devoured = true;
    } else {
        var devoured = false;
    }
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
            res.redirect('/index');
        });
});


// Export routes for server.js to use.
module.exports = router;




