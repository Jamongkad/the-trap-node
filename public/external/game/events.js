var Events = {
    init: function() {        
        $("a.collect").bind("click", function(e) {
            var me = $(this);
            var btn = new Button({
                elem: me     
              , text: 'collect'
              , actiontext: 'collecting'
              , action: function() { console.log("update world engine"); }
              , afteraction: function() { console.log("after update world engine"); }
              , cooldown: 10
            });
            btn.activate();
            e.preventDefault();
        });
    }
}

/*
var progress = $('<div id="progressbar" style="width:60px;"></div>');

$(this).after(progress);

var headerBar = (function () {

    var inProgress  = false;
    var progressbar = $('#progressbar'); // Save some trees by calling jQuery selection only once!

    return function headerBar(time) {
        if (inProgress) {
            clearTimeout(inProgress);
            inProgress = false;
        }
        progressbar.progressbar({ value: 0 });

        function progress() {
            var val = progressbar.progressbar('value') || 0;
            progressbar.progressbar('value', val + 5);
            if (val < 99) {
                inProgress = setTimeout(progress, time);
            } else {

                progressbar.remove();
                progressbar.progressbar('value', 0);
            }
        }
        progress();
    }
})();
headerBar(800);
*/
