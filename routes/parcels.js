var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('parcels', { title: 'Parcels' });
});

module.exports = router;
