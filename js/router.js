(function(root) {
    'use strict';

    root.Router = Backbone.Router.extend({
        
        routes: {
            '': 'home',
            'random': 'random',
            'story/:storyNumber': 'story'
        },
        
        home: function() {
            activateHeader('allStories');
            new Views.HomeView();
        },
        
        random: function() {
            activateHeader('randomStory');
            this.navigate('/story/' + Math.ceil(Math.random() * Settings.CountStories), true);
        },
        
        story: function(storyNumber) {
            deactivatedHeader();
            new Views.StoryView({
                storyNumber: +storyNumber
            });
        }
        
    });
    
    function deactivatedHeader() {
        $('body > header a').removeClass('active');
    }
    
    function activateHeader(id) {
        deactivatedHeader();
        $('body > header').find('#' + id).addClass('active');
    }
    
}(this));