// Require mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3000,
    host: 'localhost',
    user: 'root',
    password: '5eLUrWj=$J',
    database: 'burgers_db'
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
