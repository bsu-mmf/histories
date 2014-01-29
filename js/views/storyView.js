(function(root) {
    'use strict';
    
    root.Views = root.Views || {};
    Views.StoryView = Backbone.View.extend({
        id: 'content',
        
        initialize: function(data) {
            _.bindAll(this, 'render');
            this.model = new Models.StoryModel({
                storyNumber: data.storyNumber
            });
            this.model.on('change', this.render);
            this.model.fetch();
        },
        
        render: function() {
            var self = this;
            this.getTemplate('templates/story.tpl', function(tpl) {
                $('#content').html(tpl(self.model.toJSON()));
            });
        }
        
    });

}(this));