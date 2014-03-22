(function(root, Backbone, Models) {
    'use strict';

    root.Views = root.Views || {};
    root.Views.HomeView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render');
            this.model = new Models.HomeModel();
            this.render();
        },
        
        render: function() {
            var self = this;
            this.getTemplate('templates/home.html', function(tpl) {
                $('#content').html(tpl(self.model.toJSON()));
            });
        }
        
    });

}(this, this.Backbone, this.Models));