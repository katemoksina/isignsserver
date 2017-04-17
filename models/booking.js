//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//return schema
var bookingSchema = new mongoose.Schema({
	name: String,
	Act_title: String, //that used to be title
	email: String,
	Activity: String, //that used to be notes
	tag: String,//{type: String, unique: true, required: true},
	password: String
});

//return model
module.exports = restful.model('bkng', bookingSchema);