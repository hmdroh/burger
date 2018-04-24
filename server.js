var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routs = require("./controllers/burgers_controller");
app.use(routs);

app.listen(PORT, function(){
    console.log("Server connected on: http://localhost:"+PORT);
});