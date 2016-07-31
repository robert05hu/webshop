(function(){

	angular.module('webshopApp').controller('NavController',  function($scope,$location){

		$scope.isActive = function (viewLocation) { 
			return viewLocation === $location.path();
		};

	});

}());




