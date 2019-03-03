var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/records', function(req, res) {
  res.render('records.ejs');
});

router.get('/start', function(req, res) {
  res.render('start.ejs');
});

router.get('/home', function(req, res) {
  res.render('index.ejs');
});

router.get('/info', function(req, res) {
  res.render('info.ejs');
});

module.exports = router;
