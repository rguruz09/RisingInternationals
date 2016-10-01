
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user') 
  , home = require('./routes/home')
  , leads = require('./routes/leads')
  , products = require('./routes/products')
  , orders = require('./routes/orders')
  , seller = require('./routes/seller')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3030);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/account-dashboard', home.dashboard);
app.get('/account-profile', home.profile);
app.get('/account-orders', home.orders);
app.get('/account-single-order', home.singleOrder);
app.get('/account-accomplishments', home.accomplishments);
app.get('/account-leads', home.leads);
app.get('/users', user.list);
app.get('/singleProductPage',seller.singleProductPage);
app.get('/getSellerById', seller.getSellerById);
app.post('/getLeadsBySeller',leads.getLeadsBySeller);
app.post('/insertLeads',leads.insertLeads);
app.post('/getOrdersBySeller',orders.getOrdersBySeller);
app.get('/getAmountBySeller',orders.getAmountBySeller);
app.get('/getProduct',products.getProduct);
app.get('/getProductByQrCode',products.getProductByQrCode);
app.get('/aboutus', home.aboutus); 

//

app.get('/product-grid-left-sidebar', home.product_grid_left_sidebar);
app.get('/getAllProduct', products.getAllProduct);
app.get('/singleProduct',products.singleProduct);
app.get('/cart_page',orders.cart_page);
app.get('/volunteersSignup',home.volunteersSignup);
app.post('/addVolunteers',user.addVolunteers);
app.get('/thankyou',home.thankyou);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
