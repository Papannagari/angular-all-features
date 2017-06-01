var mongoose = require("mongoose");

var contactSchema = mongoose.Schema({

	myname:{
		type: String,
		required: true
	},
	username:{
		type: String,
		required: true
	},
	myemail:{
		type: String,
		required: true
	},
	pw1:{
		type: String,
		required: true
	},
	pw2:{
		type: String,
		required: true
	}
});


var Contact = module.exports = mongoose.model("contactModel", contactSchema, "registration");



module.exports.createContact= function(contactObj, callback){
	return Contact.create(contactObj, callback);
}

