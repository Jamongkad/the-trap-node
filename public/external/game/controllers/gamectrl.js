function GameCtrl($scope, GameService, CurrencyFlow) {

    GameService.init();

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/crawler/index'
      , success: function(data) {   
            //$scope.visitors = data;
            $scope.anomalylist = data;
            $scope.$apply($scope.anomalylist);
        }
    });

}
