(function(root, Backbone, Views, Settings) {
    'use strict';

    root.Router = Backbone.Router.extend({
        
        routes: {
            '': 'home',
            'random': 'random',
            'story/:storyNumber': 'story',
            'info': 'info',
            'favorites': 'favorites',
            'options': 'options'
        },
        
        home: function() {
            new Views.HomeView();
        },
        
        favorites: function() {
        
        },
        
        random: function() {
            this.navigate('/story/' + Math.ceil(Math.random() * Settings.CountStories), true);
        },
        
        story: function(storyNumber) {
            new Views.StoryView({
                storyNumber: +storyNumber
            });
        },
        
        options: function() {
        
        },
        
        info: function() {
            new Views.InfoView();
        }
        
    });
    
}(this, this.Backbone, this.Views, this.Settings));