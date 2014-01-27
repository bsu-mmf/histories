(function(root) {
    'use strict';

    root.Models = root.Models || {};
    Models.StoryModel = Backbone.Model.extend({
        defaults: {
            storyNumber: 0
        },
        
        url: function() {
            return '/stories/story_' + this.attributes.storyNumber + '.json';
        }
        
    });


}(this));