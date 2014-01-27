(function() {
    'use strict';
    
    var router = new Router();
    Backbone.history.start();
    
    $('body').on('click', 'a:not([target])', function(event) {
        event.preventDefault();
        router.navigate($(event.target).data('href'), true);
    });
    
}(this));