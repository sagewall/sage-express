var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mapbox', { title: 'Mapbox' });
});

module.exports = router;
