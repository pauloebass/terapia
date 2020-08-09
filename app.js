var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

//var routesApi = require('./app_api/routes/index');

var app = express();

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'ui-web', 'gis', 'build')));

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'ui-web', 'gis', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
