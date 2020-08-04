var port = process.env.PORT || 3000;
var express = require("express");
var app = express();
var lecture = require("./models/lectures");
var seed = require("./seeds");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var classRoutes = require("./routes/class");
app.use("/", classRoutes);

mongoose.connect(
   "mongodb+srv://luvdhimaan:lovedhimaan7@cluster0.5fzxh.mongodb.net/chemistryclasses?retryWrites=true&w=majority",
   { useNewUrlParser: true, useCreateIndex: true }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("homepage");
});

app.listen(port, function () {
   console.log("running");
});
