var mongoose = require('mongoose');
var bookingSchema = require('./models/booking').bookingSchema;
var Bookings = mongoose.model('bkng', bookingSchema);
var request = require('request');

var url = "https://as.exeter.ac.uk/codebox/iexeter/testing/rooms_service.php?apiuser=roombooking&apikey=cemps001&room=HAR/004&date=20170309"

module.exports = timetable = function() {
	request({url: url, json: true}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML
  var newData =  body;

  var writeList = [];

  for (var i in newData.Acts.Act){
  	var item = newData.Acts.Act[i];
  	item.tag = item.Day.substring(0,2).toLowerCase() + (item.Start_time.substring(0,2)-7); //creating tag
  	writeList.push(item);
  }
  	
  	Bookings.create(writeList, function(err){
  		if (err) {
  			console.log('error', err);
  		}
  		console.log('writeList: ' + writeList);
  	
  		});
});
};


