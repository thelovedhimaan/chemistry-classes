const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
   username: String,
   comments: String,
});
module.exports = mongoose.model('comment', commentSchema);
