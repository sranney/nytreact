var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var Articles = new Schema({
  title:{
    type:String
  },
  date:{
    type:Date
  },
  snippet:{
  	type:String
  },
  url:{
    type:String
  } 
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", Articles);

// Export the User model
module.exports = Article;
