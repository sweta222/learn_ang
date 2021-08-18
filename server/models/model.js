const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {type:String},
  author: {type:String},
  published_year: {type:String},
  publisher: {type:String}
});
module.exports = mongoose.model("books", bookSchema);