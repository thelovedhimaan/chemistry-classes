var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
   username: "String",
   comments: "String",
});
module.exports = mongoose.model("comment", commentSchema);
