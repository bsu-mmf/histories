(function(root) {
    'use strict';

    root.Views = root.Views || {};
    Views.HomeView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render');
            this.model = new Models.HomeModel();
            this.render();
        },
        
        render: function() {
            var self = this;
            this.getTemplate('templates/home.tpl', function(tpl) {
                $('#content').html(tpl(self.model.toJSON()));
            });
        }
        
    });

}(this));