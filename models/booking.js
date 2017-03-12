//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//return schema
var bookingSchema = new mongoose.Schema({
	name: String,
	title: String,
	email: String,
	notes: String
});

//return model
module.exports = restful.model('bkng', bookingSchema);