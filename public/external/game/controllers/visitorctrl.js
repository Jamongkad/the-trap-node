function VisitorCtrl($scope) {

    $scope.person;

    $scope.talk = function(name) {
        console.log("Talking...to " + name);
        $.ajax({
            type: 'GET'    
          , dataType: 'json' 
          , url: '/visitor/' + name + '/speak'
          , success: function(data) {   
                $scope.$apply(function() { 
                    $scope.person = data;
                });
            }
        });
    }

    $scope.inquire = function() {
        console.log($scope.person);
    }

    $scope.reject = function() {
        console.log("rejecting");
    }

    $scope.close = function() {
        $scope.person = false;     
    }
}
