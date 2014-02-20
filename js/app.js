(function(Backbone, Settings, Router) {
    'use strict';
    
    if (localStorage) {
        if (localStorage.getItem('Version') !== Settings.Version) {
            localStorage.clear();
            localStorage.setItem('Version', Settings.Version);
        }
    }
    
    var router = new Router();
    Backbone.history.start();
    
    $('body').on('click', 'a:not(.normal-link)', function(event) {
        event.preventDefault();
        router.navigate($(event.target).data('href'), true);
    });
    
}(this.Backbone, this.Settings, this.Router));