'use strict'
@Views = @Views || {}
Views.OptionsView = Backbone.View.extend({
    el: '#content'
    initialize: ->
        @undelegateEvents()
        _.bindAll(this, 'render')
        @render()

    events:
        'change #comments': 'changeComments'
        'change #themeSelect': 'changeTheme'

    render: ->
        this.getTemplate('templates/options.html', (tpl) =>
            $('#content').html tpl({
                comments: localStorage.getItem('comments') == 'true'
            })
            $('#themeSelect').val localStorage.getItem('theme') || '1'
            Settings.ApplyTheme()

            $('#textColor').val(localStorage.getItem('textColor')).off('change').on('change', (c) =>
                @resetTheme()
                @changeColor('text', c.hex())
            )
            $('#highlightColor').val(localStorage.getItem('highlightColor')).off('change').on('change', (c) =>
                @resetTheme()
                @changeColor('highlight', c.hex())
            )
            $('#bgColor').val(localStorage.getItem('bgColor')).off('change').on('change', (c) =>
                @resetTheme()
                @changeColor('bg', c.hex())
            )
        )

    changeComments: (event) ->
        localStorage.setItem('comments', event.target.checked)
        @render()

    changeTheme: (event) ->
        value = event.target.value
        localStorage.setItem('theme', value)
        @render()

    resetTheme: ->
        $('#themeSelect').val('0')
        localStorage.setItem('theme', '0')

    changeColor: (colorType, colorValue) ->
        switch colorType
            when 'text'
                localStorage.setItem('textColor', colorValue)
            when 'highlight'
                localStorage.setItem('highlightColor', colorValue)
            when 'bg'
                localStorage.setItem('bgColor', colorValue)
        Settings.ApplyTheme()
        return
})