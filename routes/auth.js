const express = require('express');
const router = express.Router();
const User = require('../models/auth');

//signup routes
router.get('/regis', (req, res) => {
   res.render('form/signup');
});

router.post('/register', (req, res) => {});

//login routes
router.get('/login', (req, res) => {
   res.render('form/login');
});

router.post('/login', (req, res) => {});
module.exports = router;
