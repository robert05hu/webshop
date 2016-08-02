
(function(){

  angular.module('webshopApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/main.html'
      })
      .when('/checkout', {
        templateUrl: 'html/checkout.html',
        controller: 'CheckoutController'
      })
      .when('/info', {
        templateUrl: 'html/info.html',
        controller: 'InfoController'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

}());
