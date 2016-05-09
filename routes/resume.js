var express = require('express');
var router = express.Router();
var mongo = require('../db/mongo');
mongo.connect();

router.get('/', function(req, res) {
  var skills = mongo.skills();
  skills.find().toArray(function(err, docs){
    res.render('resume', {
      title: 'Resume',
      skills: docs
    });
  });
});

module.exports = router;
