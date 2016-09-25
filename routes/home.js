/**
 * @Shruti Kangokar
 */
var ejs = require("ejs");

exports.dashboard= dashboard;
exports.profile= profile;
exports.orders= orders;
exports.singleOrder= singleOrder;
exports.accomplishments= accomplishments;
exports.leads= leads;
exports.product_grid_left_sidebar = product_grid_left_sidebar;
exports.aboutus= aboutus;
exports.cart_page= cart_page;

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



