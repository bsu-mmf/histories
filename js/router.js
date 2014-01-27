(function(root) {
    'use strict';

    root.Router = Backbone.Router.extend({
        
        routes: {
            '': 'home'
        },
        
        home: function() {
            new Views.HomeView();
        }
    });
    
}(this));