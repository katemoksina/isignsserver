//add all the dependancies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var getTT = require('./getTT.js').timetable;

//TODO: add a timer to call getTT.js (dont forget to import it) as the server starts and then every 30 minutes
//it should really be in a callback probably


//connect to the MongoDb
mongoose.connect('mongodb://user1:user1@ds157258.mlab.com:57258/isigns');

//using express
var app = express();
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use('/api', require('./routes/api'));
	app.listen(3000);
app.maxConnections = 1;

setInterval(function(){
  console.log('test');
  timetable();
}, 30 * 60 * 1000); 

process.on('uncaughtException',function(err) {
	console.log(err)
});

console.log('Server running on port 3000');