var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var autoprefixer = require('express-autoprefixer');
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('./db/config.js');
var index = require('./routes/index');
var projects = require('./routes/projects');
var resume = require('./routes/resume');
var hazards = require('./routes/hazards');
var snowfall = require('./routes/snowfall');
var historic = require('./routes/historic');
var api = require('./routes/api');
var weather = require('./routes/weather');
var darkskies = require('./routes/darkskies');

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
app.use('/', index);
app.use('/projects', projects);
app.use('/resume', resume);
app.use('/hazards', hazards);
app.use('/snowfall', snowfall);
app.use('/historic', historic);
app.use('/api', api);
app.use('/weather', weather);
app.use('/darkskies', darkskies);
app.use('/mongo', mongo_express(mongo_express_config));

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
