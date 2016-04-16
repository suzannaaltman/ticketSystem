var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/indexRouter');
var ticketRouter = require('./routes/ticketRouter');

var app = express();

//global config
app.use(express.static('server/public'));
app.use(bodyParser.json());

//routers
app.use('/', indexRouter);
app.use('/ticket', ticketRouter);

//MongoDB

var mongoURI = 'mongodb://localhost/ticketSystem';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error:', err);
})
MongoDB.once('open', function(){
  console.log('MongoDB connection open');
})

//server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port, 'press ctrl-c to exit');
})
