var ejs = require("ejs");
var mysql = require('./mysql');

exports.getProduct=getProduct;
exports.getProductByQrCode=getProductByQrCode;
exports.getAllProduct=getAllProduct;
exports.singleProduct=singleProduct;



function singleProduct(req,res) {
	res.render("single-product");
}

function getProduct(req,res) {

	var pid = req.param("pid");
	var query ="select * from products where pid = "+ pid + ";" ; 
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

};


function getAllProduct(req,res) {
	
	var query ="select * from products;" ; 
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

};

function getProductByQrCode(req,res) {

	var pid = req.param("pid");
	var sid = req.param("sid");
	var query ="select * from products where pid = "+ pid + ";" ; 
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
					"sid" : sid, 
					"stscode" : 200,
					"data" :  results
				});
		}
	},query);
	//res.render("account-dashboard");
};