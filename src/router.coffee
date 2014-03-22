'use strict'
@Router = @Backbone.Router.extend({
    routes:
        '': 'home'
        'random': 'random'
        'story/:storyNumber': 'story'
        'info': 'info'
        'favorites': 'favorites'
        'options': 'options'

    home: ->
        new Views.HomeView()

    favorites: ->
        return

    random: ->
        @navigate('/story/' + Math.ceil(Math.random() * Settings.CountStories), true)

    story: (storyNumber) ->
        new Views.StoryView({
            storyNumber: +storyNumber
        })

    options: ->
        return

    info: ->
        new Views.InfoView()
})