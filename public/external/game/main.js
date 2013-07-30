var app = angular.module("Main", ['GameService']);

app.config(function($routeProvider) {
    $routeProvider   
        .when('/', {
           templateUrl: "intro"     
        })
        .when('/comein', { 
           templateUrl: "comein"     
        })
        .when('/oath', { 
           templateUrl: "oath"     
        })
        .when('/oath_conclusion', { 
           templateUrl: "oath_conclusion"     
        })
        .when('/game', { 
           templateUrl: "game"     
         , controller: "GameCtrl"
        })
});
