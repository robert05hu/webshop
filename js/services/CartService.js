(function () {
	
	angular.module('webshopApp').factory('CartService', function(){
		
		var mainCart = [];

		return {	
			save: function (album) {
				var putIn = true;
				for (var i = mainCart.length - 1; i >= 0; i--) {
					if(mainCart[i].id === album.id){
						putIn = false;
					}
				}

				if(putIn){
					mainCart.push(album);
				}
				//console.log("success" + mainCart);
			},
			delete: function (album){
				for (var i = mainCart.length - 1; i >= 0; i--) {
					if(mainCart[i].id === album.id){
						mainCart.splice(i,1);
					}
				}
				//console.log("deleted: " + album);
			},
			get: function (){
				return mainCart;
			}
		};
		
	})

}());