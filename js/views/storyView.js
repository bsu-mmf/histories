(function(root, Backbone, Models, MathJax) {
    'use strict';
    
    root.Views = root.Views || {};
    root.Views.StoryView = Backbone.View.extend({
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
                MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
            });
        }
        
    });

}(this, this.Backbone, this.Models, this.MathJax));