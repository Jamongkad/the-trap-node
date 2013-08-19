function VisitorCtrl($scope) {

    $scope.name, $scope.occupation;

    $scope.talk = function(name) {
        console.log("Talking...to " + name);
        $.ajax({
            type: 'GET'    
          , dataType: 'json' 
          , url: '/visitor/' + name + '/speak'
          , success: function(data) {   
                $scope.$apply(function() { 
                    $scope.name = data.name;
                    $scope.occupation = data.occupation;
                });
            }
        });
    }

    $scope.close = function() {
        $scope.name = false;     
    }
}
