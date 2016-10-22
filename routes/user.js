var mysql = require('./mysql');
/*
 * GET users listing.
 */
var mysql = require('./mysql');

exports.list = function(req, res){
  res.send("respond with a resource");
};




exports.addVolunteers = function(req, res){
	
	var fname = req.params("firstname");
	var lname = req.params("lastname");
	var email = req.params("email");
	var phone = req.params("phone");
	var profession = req.params("profession");
	var organization = req.params("organization");
	var skills = req.params("skills");


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