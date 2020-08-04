var express = require("express");
var router = express.Router();

router.get("/signup", function (req, res) {
   res.render("form/signup");
});
router.get("/login", function (req, res) {
   res.render("form/login");
});
module.exports = router;
