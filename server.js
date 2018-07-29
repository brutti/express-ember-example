// modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// set our port
var port = process.env.PORT || 3000;

// set up mongoose, assume locally installed
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/RESTServer', { useNewUrlParser: true });

// set the static files location
app.use(express.static(__dirname + '/public'));

// bodyParser Middleware to allow different encoding request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to support JSON-encoded bodies

var router = express.Router();
app.use('/', router);
require('./app/routes')(router); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);

// expose app
exports = module.exports = app;
