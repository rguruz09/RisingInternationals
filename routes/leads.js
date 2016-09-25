var ejs = require("ejs");
var mysql = require('./mysql');

exports.getLeadsBySeller=getLeadsBySeller;
exports.insertLeads=insertLeads;


function getLeadsBySeller(req,res) {

	var sid = req.param("sid");
	//var query ="select * from leadsinfo where sid = "+ sid + ";" ; 
	var query ="select * from leadsinfo" ; 
	console.log(query);
	mysql.fetchData(function(err, results) {
		if(err){ 
			res.json({
					"stscode" : 210 
				});
		}
		else{
				console.log("query done");
				console.log(JSON.stringify(results));
				//callback(err,results);
				res.json({
					"stscode" : 200,
					"data" :  results
				});
		}
	},query);
}

function insertLeads(req,res) {

	var sid = req.params("sid");
	var contactname = req.params("contactname");
	var address = req.params("address");
	var contactnum = req.params("contactnum");
	var ldatetime = req.params("ldatetime");

	var query ="insert into leadsinfo(sid,contactname,address,contactnum,ldatetime) values("+ sid +"," + 
	contactname +","+ address +","+ contactnum +","+ ldatetime +");";
	console.log(query);
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