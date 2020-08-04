var express = require("express");
var lecture = require("../models/lectures");
var router = express.Router();
router.get("/classIX", function (req, res) {
   lecture.find({ class: "classIX" }, function (err, lecture) {
      if (err) {
         console.log(err);
      } else {
         res.render("class/classIX", { lecture: lecture });
      }
   });
});
router.get("/classIX/:id", function (req, res) {
   lecture.findById(req.params.id, function (err, found) {
      if (err) {
         console.log(err);
      } else {
         console.log("found");
         res.render("show", { lecture: found });
      }
   });
});
router.get("/classX", function (req, res) {
   lecture.find({ class: "classX" }, function (err, lecture) {
      if (err) {
         console.log(err);
      } else {
         res.render("class/classX", { lecture: lecture });
      }
   });
});
router.get("/classX/:id", function (req, res) {
   lecture.findById(req.params.id, function (err, found) {
      if (err) {
         console.log(err);
      } else {
         console.log("found");
         res.render("show", { lecture: found });
      }
   });
});
router.get("/classXI", function (req, res) {
   lecture.find({ class: "classXI" }, function (err, lecture) {
      if (err) {
         console.log(err);
      } else {
         res.render("class/classXI", { lecture: lecture });
      }
   });
});
router.get("/classXI/:id", function (req, res) {
   lecture.findById(req.params.id, function (err, found) {
      if (err) {
         console.log(err);
      } else {
         console.log("found");
         res.render("show", { lecture: found });
      }
   });
});
router.get("/classXII", function (req, res) {
   lecture.find({ class: "classXII" }, function (err, lecture) {
      if (err) {
         console.log(err);
      } else {
         res.render("class/classXII", { lecture: lecture });
      }
   });
});
router.get("/classXII/:id", function (req, res) {
   lecture.findById(req.params.id, function (err, found) {
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
