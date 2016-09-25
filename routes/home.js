/**
 * @Shruti Kangokar
 */
var ejs = require("ejs");

exports.dashboard= dashboard;
exports.profile= profile;
exports.orders= orders;
exports.singleOrder= singleOrder;
exports.wishList= wishList;
exports.address= address;


function dashboard(req,res) {
	res.render("account-dashboard");
}

function profile(req,res) {
	res.render("account-profile");
}

function orders(req,res) {
	res.render("account-orders");
}
function singleOrder(req,res) {
	res.render("account-single-order");
}
function wishList(req,res) {
	res.render("account-wishlist");
}
function address(req,res) {
	res.render("account-address");
}
