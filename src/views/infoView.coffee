'use strict'
@Views = @Views || {}
Views.InfoView = Backbone.View.extend({
    initialize: ->
        _.bindAll(this, 'render')
        @render()

    render: ->
        this.getTemplate('templates/info.html', (tpl) ->
            $('#content').html tpl({
                prohorovichLink: 'http://www.mathnet.ru/php/person.phtml?option_lang=rus&personid=28439',
                bookLink: 'https://drive.google.com/file/d/0BwUmPnTc9bQ1M3Q3SElEbHhBN1k/edit?usp=sharing',
                semigradskyLink: 'http://brainstorage.me/semigradsky',
                vkJokesLink: 'http://vk.com/bsu_mmf_jokes',
                vkSemigradskyLink: 'http://vk.com/semigradsky',
                mailLink: 'mailto:semigradskyd@gmail.com?subject=bsu-mmf-stories',
                gitStoriesLink: 'https://github.com/bsu-mmf/histories',
                gitMMFLink: 'https://github.com/bsu-mmf'
            })
        )
})