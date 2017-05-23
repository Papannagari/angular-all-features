var app = angular.module("myApp",['ngRoute']);

app.config(["$locationProvider", function($locationProvider){
	$locationProvider.hashPrefix('')
}])

app.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
		.when("/",{
			templateUrl: "pages/home.html",
			controller: "myHomeController"
		})
		.when("/registration",{
			templateUrl : "pages/registration.html",
			controller: "myRegisterController"
		})
		.when("/login", {
			templateUrl: "pages/login.html",
			controller:"myLoginController"
		})
}])
app.controller("myHomeController", ["$scope","CustomerDetails", function($scope,CustomerDetails){
	$scope.message = "This is my home controller";
	$scope.customerInfo=CustomerDetails
	 $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
	
	$scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
}])

app.controller("myRegisterController", ["$scope", function($scope){
	$scope.message= "This is my register controller";
}])

app.controller("myLoginController", ["$scope", function($scope){
	$scope.message = "This is my login controller";
}])

