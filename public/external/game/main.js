var app = angular.module("Main", ['GameService', 'Gameview', 'TemplateService', 'Nav', 'CompileHtml', 'CurrencyFlow']);

app.config(function($routeProvider) {
    $routeProvider   
        .when('/', {
            templateUrl: "partials/intro" 
          , controller: "StoryCtrl"
          , activetab: "intro" 
        })
        .when('/comein', { 
            templateUrl: "partials/comein"     
          , controller: "StoryCtrl"
        })
        .when('/oath', { 
            templateUrl: "partials/oath"     
          , controller: "StoryCtrl"
        })
        .when('/oath_conclusion', { 
            templateUrl: "partials/oath_conclusion"     
          , controller: "StoryCtrl"
        })
        .when('/game', { 
            templateUrl: "partials/game"     
          , controller: "GameCtrl"
          , activetab: "game"
        })
        .when('/vogelstead', { 
            templateUrl: "partials/game"     
          , controller: "GameCtrl"
          , activetab: "vogelstead"
        })
});
