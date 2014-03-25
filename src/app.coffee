$(->
    'use strict'
    if localStorage.getItem('Version') != Settings.Version
        localStorage.clear()
        localStorage.setItem('Version', Settings.Version)
    if localStorage.getItem('comments') == undefined
        localStorage.setItem('comments', true)

    router = new Router()
    Backbone.history.start()

    $('body').on('click', 'a:not(.normal-link)', (event) ->
        event.preventDefault()
        url = $(this).data('href')
        if not Backbone.history.navigate(url, true)
            Backbone.history.loadUrl url
    )
 )