app.factory("regFactory",['$http',function($http){
				//refresh();
				 var factory = {};
			factory.registerUser= function(regData) {

				return $http.post('/registerUser', regData);/*.then(function(response)*/
				console.log(response)
				//data.success()
				//return data;			
		}
		return factory;
}])