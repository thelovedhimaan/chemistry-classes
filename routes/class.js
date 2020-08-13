const express = require('express');
const router = express.Router();

const lecture = require('../models/lectures');
const { populate } = require('../models/lectures');

router.get('/add', (req, res) => {
   res.render('form/add');
});

router.post('/', (req, res) => {
   lecture.create(req.body.adding, (err) => {
      if (err) {
         console.log(err);
      } else {
         console.log('added to collection');
         res.redirect('/');
      }
   });
});

router.get('/:classes', (req, res) => {
   const { classes } = req.params;
   lecture.find(
      {
         class: classes,
      },
      (err, lecture) => {
         if (err) {
            console.log(err);
         } else {
            res.render('class/class', { lecture: lecture });
         }
      }
   );
});

router.get('/:classes/:id', (req, res) => {
   lecture
      .findById(req.params.id)
      .populate('commentss')
      .exec((err, found) => {
         if (err) {
            console.log(err);
         } else {
            console.log('found');
            res.render('show', { lecture: found });
         }
      });
});

router.get('/syllabus', (req, res) => {
   res.render('class/syllabus');
});

module.exports = router;
