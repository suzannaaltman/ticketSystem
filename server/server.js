var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/indexRouter');

var app = express();

//global config
app.use(express.static('server/public'));

//routers
app.use('/', indexRouter);

//server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port, 'press ctrl-c to exit');
})
