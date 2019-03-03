var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
/* GET new glucose */
=======
router.get('/records', function(req, res) {
  res.render('records.ejs');
});

>>>>>>> 537c460df74207ecb3766fb8af6e1a7082f06f84
router.get('/start', function(req, res) {
  res.render('start.ejs');
});

<<<<<<< HEAD
=======
router.get('/home', function(req, res) {
  res.render('index.ejs');
});

>>>>>>> 537c460df74207ecb3766fb8af6e1a7082f06f84
module.exports = router;
