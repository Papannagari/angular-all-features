var app = angular.module("myApp",['ngRoute']);

app.config(["$locationProvider", function($locationProvider){
	$locationProvider.hashPrefix('')
}])

app.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
		.when("/",{
			templateUrl: "home.html",
			controller: "myHomeController"
		})
		.when("/registration",{
			templateUrl : "registration.html",
			controller: "myRegisterController"
		})
		.when("/login", {
			templateUrl: "login.html",
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

app.controller("myRegisterController", ["$scope","regFactory", function($scope,regFactory){
	//$scope.message= "This is my register controller";
	console.log("jkdfhg")
    alert("inside myRegisterController")
       var registerUser = function(){
       	console.log("inside myRegisterController",$scope.Form)
			regFactory.registerUser($scope.Form)
			          	.then(function(response){
			          		console.log("from post"+response.data)
			          		
			          		
			          	})

       }

}])

app.controller("myLoginController", ["$scope", function($scope){
	$scope.message = "This is my login controller";
}])

