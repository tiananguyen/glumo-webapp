var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET new glucose */
router.get('/start', function(req, res) {
  res.render('start.ejs');
});

module.exports = router;
