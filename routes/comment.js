const express = require('express');
const router = express.Router();
const lecture = require('../models/lectures');
const comment = require('../models/comment');

router.get('/:classes/:id/comment/new', (req, res) => {
   lecture.findById(req.params.id, (err, found) => {
      if (err) {
         console.log(err);
      } else {
         console.log('comment form running');
         res.render('comment/commentform', { lecture: found });
      }
   });
});
router.post('/:classes/:id/comment', (req, res) => {
   lecture.findById(req.params.id, (err, found) => {
      if (err) {
         console.log(err);
         res.redirect('/');
      } else {
         comment.create(req.body.comm, (err, newcomment) => {
            if (err) {
               console.log(err);
            } else {
               found.commentss.push(newcomment);
               found.save();
               res.redirect('/:classes/' + found._id);
            }
         });
      }
   });
});

module.exports = router;
