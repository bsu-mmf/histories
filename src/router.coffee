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
        @changeTab('allStories')
        new Views.HomeView()

    favorites: ->
        @changeTab('favorites')
        new Views.FavoritesView()

    random: ->
        @changeTab('randomStory')
        new Views.StoryView({
            storyNumber: Math.ceil(Math.random() * Settings.CountStories)
        })

    story: (storyNumber) ->
        new Views.StoryView({
            storyNumber: +storyNumber
        })

    options: ->
        @changeTab('options')
        new Views.OptionsView()

    info: ->
        @changeTab('info')
        new Views.InfoView()

    changeTab: (linkId) ->
        $('header nav li').removeClass 'tab-current'
        $('#' + linkId).closest('li').addClass 'tab-current'
})