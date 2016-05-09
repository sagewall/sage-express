var express = require('express');
var router = express.Router();
var mongo = require('../db/mongo');
mongo.connect();

router.get('/historic', function(req, res) {
  var historicPlaces = mongo.historicPlaces();
  historicPlaces.find().toArray(function(err, docs){
    if(err){
      res.sendStatus(400);
    }
    res.json(docs);
  });
});

router.get('/skills', function(req, res) {
  var skills = mongo.skills();
  skills.find().toArray(function(err, docs){
    if(err){
      res.sendStatus(400);
    }
    res.json(docs);
  });
});

module.exports = router;
