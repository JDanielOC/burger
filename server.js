// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');

// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
// override with POST having ?_method=PUT(or DELETE)
app.use(methodOverride('_method'));


// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Serve static content from the public directory
app.use(express.static('public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);


// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});