var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.listen(port,function(err){
})
// Add routes, both API and view
app.use(routes);

mongoose.Promise = Promise;
var connection = process.env.MONGODB_URI||"mongodb://localhost/nytreact";
mongoose.connect(connection, {
  useMongoClient: true
});
