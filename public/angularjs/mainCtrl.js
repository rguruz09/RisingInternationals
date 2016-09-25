/**
 * http://usejsdoc.org/
 */

var risingInternational= angular.module('risingInternational',[]);
risingInternational.controller('mainPageCtrl', function($scope, $http, $location) {
	 
	 $scope.dashboard = function(){
		 console.log("inside Dashboard ctrl");
   	  window.location.assign("/account-dashboard");
	 };
	 
	 $scope.profile = function(){
		 console.log("inside profile ctrl");
   	  window.location.assign("/account-profile");
	 };
	 
	 $scope.orders = function(){
		 console.log("inside profile ctrl");
   	  window.location.assign("/account-orders");
	 };
	 $scope.singleOrder = function(){
		 console.log("inside profile ctrl");
   	  window.location.assign("/account-single-order");
	 };
	 $scope.wishList = function(){
		 console.log("inside Wish List ctrl");
   	  window.location.assign("/account-wishlist");
	 };
	 $scope.address = function(){
		 console.log("inside Address ctrl");
   	  window.location.assign("/account-address");
	 };
	
 });

