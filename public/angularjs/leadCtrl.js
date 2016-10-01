var risingInternational= angular.module('risingInternational',[]);

risingInternational.controller("leadPageCtrl",function($scope, $http, $window){
	 	console.log("Inside Lead controller");
	 	$scope.results = {};

	 	$scope.getLeadsBySeller = function(){
	 		$http({
	 			method:'POST',
	 			url : '/getLeadsBySeller',
	 			data :{}
	 		}).success(function(result){
	 			if(result.stscode == 200)
	 			{
	 				$scope.results = result.data;
	 				console.log("Success!");
	 				console.log(JSON.stringify($scope.results));
	 			}
	 		}).error(function(err){
	 			console.log(err);

	 		});
	 	};

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

	 $scope.accomplishments = function(){
		 console.log("inside accomplishments ctrl");
   	  window.location.assign("/account-accomplishments");
	 };
	 $scope.leads = function(){
		 console.log("inside Address ctrl");
   	  window.location.assign("/account-leads");
	 };

	 });
