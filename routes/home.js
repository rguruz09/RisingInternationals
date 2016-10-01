/**
 * @Shruti Kangokar
 */
var ejs = require("ejs");
var mysql = require('mysql');

exports.dashboard= dashboard;
exports.profile= profile;
exports.orders= orders;
exports.singleOrder= singleOrder;
exports.accomplishments= accomplishments;
exports.leads= leads;
exports.product_grid_left_sidebar = product_grid_left_sidebar;
exports.aboutus= aboutus;
exports.cart_page= cart_page;
exports.volunteersSignup = volunteersSignup;
exports.addVolunteers = addVolunteers;
exports.thankyou = thankyou;

function thankyou(req,res)
{
	res.render("thankyou");
}
function addVolunteers(req,res){
	
	var firstname = req.param("firstname");
	var lastname = req.param("lastname");
	var email = req.param("email");
	var phone = req.param("phone");
	var profession = req.param("profession");
	var organization = req.param("organization");
	var skills = req.param("skills");

	//add MySQL code here 
	
	
	
	
	
	
	
}

function product_grid_left_sidebar(req,res) {
	res.render("product-grid-left-sidebar");
}

function cart_page(req,res) {
	res.render("cart_page");
}


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
function accomplishments(req,res) {
	res.render("account-accomplishments");
}
function leads(req,res) {
	res.render("account-leads");
}

function aboutus(req,res) {
	res.render("about-us.ejs");
}
function volunteersSignup(req,res) {
	res.render("volunteersSignup.ejs");
}



