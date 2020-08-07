var port = process.env.PORT || 3000;
var express = require("express");
var app = express();
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
var lecture = require("./models/lectures");
var comment = require("./models/comment");
var seed = require("./seeds");
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

var classRoutes = require("./routes/class");
app.use("/", classRoutes);
var commentRoutes = require("./routes/comment");
app.use("/", commentRoutes);

var authRoutes = require("./routes/auth");
app.use("/", authRoutes);
mongoose.connect("mongodb://localhost/chemistry_classes", {
   useNewUrlParser: true,
   useCreateIndex: true,
});

app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("homepage");
});

app.listen(port, function () {
   console.log("running");
});
