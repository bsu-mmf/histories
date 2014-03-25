'use strict'
@Views = @Views || {}
Views.OptionsView = Backbone.View.extend({
    el: '#content'
    initialize: ->
        _.bindAll(this, 'render')
        @render()
        
    events:
        'change #comments': 'changeComments'

    render: ->
        this.getTemplate('templates/options.html', (tpl) ->
            $('#content').html tpl({
                comments: localStorage.getItem('comments') == 'true'
            })
        )
    
    changeComments: (event) ->
        localStorage.setItem('comments', event.target.checked)
        @render()
})