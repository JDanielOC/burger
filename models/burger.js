// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },  
    // add a burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },

    // update burger
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export burger.js to the controller (burgers_controller.js).
module.exports = burger;