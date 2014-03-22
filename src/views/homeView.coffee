'use strict'
@Views = @Views || {};
Views.HomeView = Backbone.View.extend({
    initialize: ->
        _.bindAll(this, 'render')
        @model = new Models.HomeModel()
        @render()

    render: ->
        @getTemplate('templates/home.html', (tpl) =>
            $('#content').html tpl(@model.toJSON())
        )
})