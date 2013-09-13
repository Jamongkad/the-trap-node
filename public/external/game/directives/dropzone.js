angular.module('Dropzone', [])
.directive('dropzone', function() {  
    return {
        restrict: "EAC"     
      , link: function(scope, element, attrs) {
            $(element).droppable({
                drop: function(ev, ui) {
                    var anomaly = ui.draggable;
                    var name = anomaly.children("div.panel-heading").attr('anomaly-name');
                    var me = this;

                    $.ajax({
                        type: 'GET'    
                      , dataType: 'json' 
                      , url: '/visitor/' + name + '/speak'
                      , success: function(data) {   
                            /*
                            scope.$apply(function() { 
                                scope.person = data;
                            });
                            */
                            console.log(data);
                            anomaly.fadeOut();
                            $(me).html("<p>" + data.request + "</p>");
                        }
                    });
                }
            })
        }
    }
});
