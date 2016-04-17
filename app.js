var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var autoprefixer = require('express-autoprefixer');

var routes = require('./routes/index');
var users = require('./routes/users');
var projects = require('./routes/projects');
var resume = require('./routes/resume');
var hazards = require('./routes/hazards');
var snowfall = require('./routes/snowfall');
var pirates = require('./routes/pirates');

var mongo = require('./db/mongo');
mongo.connect();

var app = express();
app.set('env', 'development');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(autoprefixer({
  browsers: 'last 2 versions',
  cascade: false
}));
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Express Routes
app.use('/', routes);
app.use('/users', users);
app.use('/projects', projects);
app.use('/resume', resume);
app.use('/hazards', hazards);
app.use('/snowfall', snowfall);
app.use('/pirates', pirates);

// API Endpoints
app.get('/api/skills', function(req, res){
  var skills = mongo.skills();
  skills.find().toArray(function(err, docs){
    if(err){
      res.sendStatus(400);
    }
    res.json(docs);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
