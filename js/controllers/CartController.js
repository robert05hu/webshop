(function(){

	angular.module('webshopApp').controller('CartController',function($scope,CartService){
		
		$scope.cart = CartService.get();
		$scope.price = 0;
		
		if($scope.cart.length !== 0){
			for (var i = $scope.cart.length - 1; i >= 0; i--) {
				$scope.price += $scope.cart[i].price;
			}
		}

		$scope.$on('item:added', function(event){
			$scope.cart = CartService.get();
			$scope.price = 0;
			for (var i = $scope.cart.length - 1; i >= 0; i--) {
				$scope.price += $scope.cart[i].price;
			}
		});

		$scope.deleteItem = function(item){
			CartService.delete(item);
			$scope.price -= item.price;
		};

		$scope.checkOut = function(){
			console.log("checkOut");
		}
	});


}());