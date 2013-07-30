var app = angular.module("Main", ['GameService']);

app.config(function($routeProvider) {
    $routeProvider   
        .when('/', {
            templateUrl: "partials/intro" 
        })
        .when('/comein', { 
            templateUrl: "partials/comein"     
        })
        .when('/oath', { 
            templateUrl: "partials/oath"     
        })
        .when('/oath_conclusion', { 
            templateUrl: "partials/oath_conclusion"     
        })
        .when('/game', { 
            templateUrl: "partials/game"     
          , controller: "GameCtrl"
        })
});
