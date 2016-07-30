(function(){

	webshopApp.controller('MainController', function($scope,$http,$rootScope,AlbumService,CartService){

		var incPrice = 4;

		$scope.getData = AlbumService.then(function(data){
			$scope.uname = data;

			for (var i = $scope.uname.albums.length - 1; i >= 0; i--) {
				$scope.uname.albums[i].price = incPrice++;
			} 
		});

		$scope.addToCart = function(album){
			CartService.save(album);
			$rootScope.$broadcast('item:added');
		};

	});

}());



