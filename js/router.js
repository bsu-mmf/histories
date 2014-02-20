(function(root, Backbone, Views, Settings) {
    'use strict';

    root.Router = Backbone.Router.extend({
        
        routes: {
            '': 'home',
            'random': 'random',
            'story/:storyNumber': 'story',
            'info': 'info'
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
        },
        
        info: function() {
            activateHeader('info');
            new Views.InfoView();
        }
        
    });
    
    function deactivatedHeader() {
        $('body > header a').removeClass('active');
    }
    
    function activateHeader(id) {
        deactivatedHeader();
        $('body > header').find('#' + id).addClass('active');
    }
    
}(this, this.Backbone, this.Views, this.Settings));