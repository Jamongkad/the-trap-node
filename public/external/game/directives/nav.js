angular.module('Nav', [])
.directive('mainnav', function() {  
    return {
        restrict: "A"     
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {  
                console.log("Nav");
            });
        }
    }
});
