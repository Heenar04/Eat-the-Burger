
var express = require('express');



var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));




var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);
