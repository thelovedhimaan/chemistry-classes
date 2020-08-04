var port = 3000;
var express = require("express");
var app = express();
var lecture = require("./models/lectures");
var seed = require("./seeds");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var classRoutes = require("./routes/class");
app.use("/", classRoutes);

mongoose.connect("mongodb://localhost/chemistry_classes", {
   useNewUrlParser: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("homepage");
});

app.listen(port, function () {
   console.log("running");
});
