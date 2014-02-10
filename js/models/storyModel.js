(function(root, Backbone) {
    'use strict';

    root.Models = root.Models || {};
    root.Models.StoryModel = Backbone.Model.extend({
        defaults: {
            storyNumber: 0
        },
        
        url: function() {
            return 'stories/story_' + this.attributes.storyNumber + '.json';
        }
        
    });


}(this, this.Backbone));