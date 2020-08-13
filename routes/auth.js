const express = require('express');
const router = express.Router();
const User = require('../models/auth');

router.get('/signup', (req, res) => {
   res.render('form/signup');
});
router.get('/login', (req, res) => {
   res.render('form/login');
});
router.post('/register', async (req, res) => {
   const user = new User({
      name: req.body.name,
      password: req.body.password,
   });
   try {
      const savedUser = await user.save();
      res.send(savedUser);
   } catch (err) {
      res.status(400).send(err);
   }
});
module.exports = router;
