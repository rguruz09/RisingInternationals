var mysql = require('./mysql');
/*
 * GET users listing.
 */
var mysql = require('./mysql');

exports.list = function(req, res){
  res.send("respond with a resource");
};



exports.volunteersSignup = function(req, res){

exports.addVolunteers = function(req, res){
	
	var fname = req.param("firstname");
	var lname = req.param("lastname");
	var email = req.param("email");
	var phone = req.param("phone");
	var profession = req.param("profession");
	var organization = req.param("organization");
	var skills = req.param("skills");


	var query ="insert into volunteers(firstname,lastname ,email ,phone ,profession , organization , skillset ) values(\""+ 
	fname +"\",\"" + 
	lname +"\",\""+ 
	email +"\",\""+ 
	phone +"\",\""+ 
	profession +"\",\""+ 
	organization +"\",\""+ 
	skills +"\");";


	mysql.fetchData(function(err, results) {
		if(err){ 
			res.json({
					"stscode" : 210 
				});
		}
		else{
				console.log("query done");
				//callback(err,results);
				res.json({
					"stscode" : 200,
					"data" :  results
				});
		}
	},query);


}