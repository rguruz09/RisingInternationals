var ejs = require("ejs");
var mysql = require('./mysql');

exports.getOrdersBySeller=getOrdersBySeller;
exports.getAmountBySeller=getAmountBySeller;
exports.cart_page=cart_page;


function cart_page(req,res){
	res.render('cart-page.ejs');
}

function getOrdersBySeller(req,res) {

	var sid = req.param("sid");
	//var query ="select * from salesinfo where sid = "+ sid + ";" ; 
	var query ="select * from salesinfo where sid;" ; 
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


function getAmountBySeller(req,res) {

	var sid = req.param("sid");
	var query ="SELECT cid, SUM(A.amount) FROM salesinfo A , products B WHERE A.sid = " + sid + 
	"  AND A.pid = B.pid GROUP By cid;" ; 
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




