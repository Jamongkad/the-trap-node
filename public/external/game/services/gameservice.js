angular.module("GameService", [])
.service("GameService", function($rootScope) {
    var shared = {}    

    shared = Game; 

    return shared;
})
