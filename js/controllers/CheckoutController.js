(function(){
	
	angular.module('webshopApp').controller('CheckoutController', function($scope,CartService){
		
		$scope.cart = CartService.get();
		$scope.price = 0;

		for (var i = $scope.cart.length - 1; i >= 0; i--) {
			$scope.price += $scope.cart[i].price;
		}

		$scope.deleteItem = function(item){
			CartService.delete(item);
			$scope.price -= item.price;
		};

	});

}());