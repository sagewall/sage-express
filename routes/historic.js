var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('historic', { title: 'Historic Places' });
});

module.exports = router;
