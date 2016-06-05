var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('darkskies', { title: 'Dark Skies' });
});

module.exports = router;
