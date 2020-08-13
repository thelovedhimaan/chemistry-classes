const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const lecture = require('./models/lectures');
const comment = require('./models/comment');
const seed = require('./seeds');
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);
const classRoutes = require('./routes/class');
app.use('/', classRoutes);

const commentRoutes = require('./routes/comment');
app.use('/', commentRoutes);

mongoose.connect(
   'mongodb+srv://luvdhimaan:lovedhimaan7@cluster0.5fzxh.mongodb.net/chemistryclasses?retryWrites=true&w=majority',

   { useNewUrlParser: true, useUnifiedTopology: true }
);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('homepage');
});

app.listen(port, () => {
   console.log('running');
});
