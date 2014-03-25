'use strict'
@Views = @Views || {}
Views.FavoritesView = Backbone.View.extend({
    initialize: ->
        _.bindAll(this, 'render')
        @render()

    render: ->
        $('#content').html ''
})