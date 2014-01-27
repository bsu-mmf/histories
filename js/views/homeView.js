(function(root) {
    'use strict';

    root.Views = root.Views || {};
    Views.HomeView = Backbone.View.extend({
        id: 'content',
        
        initialize: function() {
            this.model = new Models.HomeModel();
            this.render();
        },
        
        render: function() {
            $.get('templates/home.tpl', function(data) {
                console.log(data);
            });
        }
        
    });


}(this));