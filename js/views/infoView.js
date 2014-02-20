(function(root, Backbone) {
    'use strict';

    root.Views = root.Views || {};
    root.Views.InfoView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },
        
        render: function() {
            this.getTemplate('templates/info.tpl', function(tpl) {
                $('#content').html(tpl({}));
            });
        }
        
    });

}(this, this.Backbone));