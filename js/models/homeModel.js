(function(root) {
    'use strict';

    root.Models = root.Models || {};
    Models.HomeModel = Backbone.Model.extend({
        defaults: {
            stories: []
        },
        
        initialize: function() {
            this.attributes.stories[1] = 'Шарообразная диссертация.';
            this.attributes.stories[2] = 'Кровавая жатва.';
            this.attributes.stories[3] = 'Но попытаться стоит.';
        }
        
    });


}(this));