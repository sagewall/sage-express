var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('hazards', { title: 'Hazards' });
});

module.exports = router;
