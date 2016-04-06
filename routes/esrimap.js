var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('esrimap', { title: 'ESRI Map' });
});

module.exports = router;
