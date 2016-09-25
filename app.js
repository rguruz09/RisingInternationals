
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , home = require('./routes/home')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
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
app.get('/account-wishlist', home.wishList);
app.get('/account-address', home.address);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
