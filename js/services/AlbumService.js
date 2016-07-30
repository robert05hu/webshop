(function () {
	
	webshopApp.factory('AlbumService',function($http){

		return $http.get('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37,52jUm8eAFzHQAyBHKJDrt7,4PmhU19JDQwUTW0db9Xwu9')
		.then(	function Succes(response) {
			return response.data;
		}, function myError(response) {
			console.log(response.statusText);
			return response.statusText;
		});

	});

}());