function GameCtrl($scope, GameService, CurrencyFlow) {

    GameService.init();
    $scope.gold = 16;

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/visitor'
      , success: function(data) {   
            $scope.visitors = data;
            $scope.$apply($scope.visitors);
        }
    });

    $scope.$on('setGold', function() {
        var add_gold = CurrencyFlow.amt;
        $scope.gold += add_gold;
        $scope.$apply();
    });
     
}
