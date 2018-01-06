// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// var apiRoutes = require("./routes/apiRoutes");
// var htmlRoutes = require("./routes/htmlRoutes");
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Serve static content from the public directory
app.use(express.static(process.cwd() + '/public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

