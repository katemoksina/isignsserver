//add all the dependancies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//connect to the MongoDb
mongoose.connect('mongodb://user1:user1@ds157258.mlab.com:57258/isigns');

//using express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

//starting server

app.listen(3000);
console.log('Server running on port 3000');