$(->
    'use strict'
    if localStorage
        if localStorage.getItem('Version') != Settings.Version
            localStorage.clear()
            localStorage.setItem('Version', Settings.Version)

    router = new Router()
    Backbone.history.start()

    $('body').on('click', 'a:not(.normal-link)', (event) ->
        event.preventDefault()
        router.navigate($(this).data('href'), true)
    )
 )