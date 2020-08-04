var mongoose = require("mongoose");
var dataSchema = new mongoose.Schema({
   class: String,
   topic: String,
   image: String,
   url: String,
   description: String,
});
module.exports = mongoose.model("lecture", dataSchema);
