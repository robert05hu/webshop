(function () {
	

	webshopApp.controller('LoginController', ['$scope','$http', function($scope,$http){
		
		 $scope.username = '';
		 $scope.password = '';

		 $scope.login = function() {
		 	//$http.post()
		 	console.log('login happened: ' + $scope.username + 'pass: ' + $scope.password );
		 };


	}]);

}());