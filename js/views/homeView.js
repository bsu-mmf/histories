(function(root) {
    'use strict';

    root.Views = root.Views || {};
    Views.HomeView = Backbone.View.extend({
        initialize: function() {
            this.model = new Models.HomeModel();
            this.render();
        },
        
        render: function() {
            var self = this;
            $.get('templates/home.tpl', function(data) {
                var tpl = _.template(data);
                $('#content').html(tpl(self.model.toJSON()));
            });
        }
        
    });

}(this));