var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/hazards', function(req, res) {
  res.render('hazards');
});

router.get('/parcels', function(req, res) {
  res.render('parcels');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/resume', function(req, res) {
  res.render('resume');
});

router.get('/snowfall', function(req, res) {
  res.render('snowfall');
});

router.get('/weather', function(req, res) {
  res.render('weather');
});

router.get('/molly', function(req, res) {
  res.render('molly');
});

router.get('/historic', function(req, res) {
    res.render('historic');
});

module.exports = router;
