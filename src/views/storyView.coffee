'use strict'
@Views = @Views || {}
Views.StoryView = Backbone.View.extend({
    id: 'content'
    
    initialize: (data) ->
        _.bindAll(this, 'render')
        @model = new Models.StoryModel({
            storyNumber: data.storyNumber
        })
        @model.on('change', @render)
        @model.fetch()

    render: ->
        @getTemplate('templates/story.html', (tpl) =>
            $('#content').html tpl(_.extend(@model.toJSON(), {
                comments: localStorage.getItem('comments') == 'true'
            }))
            MathJax.Hub.Queue(['Typeset', MathJax.Hub])
        )
})