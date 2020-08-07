var express = require("express");
var router = express.Router();

var lecture = require("../models/lectures");
const { populate } = require("../models/lectures");

router.get("/add", (req, res) => {
   res.render("form/add");
});

router.post("/", function (req, res) {
   lecture.create(req.body.adding, function (err) {
      if (err) {
         console.log(err);
      } else {
         console.log("added to collection");
         res.redirect("/");
      }
   });
});

router.get("/:classes", (req, res) => {
   const { classes } = req.params;
   lecture.find(
      {
         class: classes,
      },
      function (err, lecture) {
         if (err) {
            console.log(err);
         } else {
            res.render("class/class", { lecture: lecture });
         }
      }
   );
});

router.get("/:classes/:id", function (req, res) {
   lecture
      .findById(req.params.id)
      .populate("commentss")
      .exec(function (err, found) {
         if (err) {
            console.log(err);
         } else {
            console.log("found");
            res.render("show", { lecture: found });
         }
      });
});

router.get("/syllabus", function (req, res) {
   res.render("class/syllabus");
});

module.exports = router;
