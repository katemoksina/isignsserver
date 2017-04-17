//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//return schema
var passwordSchema = new mongoose.Schema({
	username: String,
	password: String
});

//return model
module.exports = restful.model('passwords', passwordSchema);