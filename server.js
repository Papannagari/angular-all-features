var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var path = require("path");
var Contact = require("./model/reg");

app.use(express.static(path.join(__dirname, "directives")));
app.use(express.static(path.join(__dirname, "filters")));
app.use(express.static(path.join(__dirname, "services")));
app.use(express.static(path.join(__dirname, "controllers")));
app.use(express.static(path.join(__dirname, "pages")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost/contactlist", function(){
	console.log("successfully Connected with database");
})


/*router.get("/", function(request, response){
	response.json("This is my first program");
})


router.get("/contacts", function(request, response){
	Contact.getContacts(function(err, contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})


router.get("/getContactById/:id", function(request,response){
		var contactId = request.params.id;
	Contact.getContactById(contactId, function(err,contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})

*/
router.post("/registerUser", function(request, response){
	var contactObj = request.body;

	Contact.registerUser(contactObj, function(err, contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})


/*router.put("/updateContact/:id", function(request, response){
	var contactId = request.params.id;
	var contactObj = request.body;

	Contact.updateContact(contactId, contactObj,function(err, callbackConObj){
		if(err){
			throw err;
		}
		response.json(callbackConObj)
	})
})


router.delete("/removeContact/:id", function(request, response){
	var contactId = request.params.id;

	Contact.removeContact(contactId, function(err,callbackConObj){
		if(err){
			throw err;
		}
		response.json(callbackConObj)
	})
})*/


app.use("/", router);

var PORT = process.env.PORT || 8006;

app.listen(PORT, function(){
	console.log("Server is listening on PORT:"+ PORT);
})