//Dependencies//

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express sevrer

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//roadMap to routes

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);