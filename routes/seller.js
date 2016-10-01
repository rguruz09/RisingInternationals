var ejs = require("ejs");
var mysql = require('./mysql');

exports.getSellerById=getSellerById;
exports.singleProductPage = singleProductPage;

function singleProductPage(req,res) {
	res.render("single-product");
}


function getSellerById(req,res) {

	var sid = req.param("sid");
	var query ="select * from sellerinfo where sid = "+ sid + ";" ; 
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
	//res.render("account-dashboard");
}