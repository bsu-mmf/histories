'use strict'
Backbone.View.prototype = _.extend(Backbone.View.prototype, {

    getTemplate: (templateUrl, callback) ->
        if localStorage
            tpl = null#localStorage.getItem(templateUrl)
            if tpl
                callback _.template(tpl)
            else
                $.get(templateUrl, (tpl) ->
                    localStorage.setItem(templateUrl, tpl)
                    callback _.template(tpl)
                )
        else
            $.get(templateUrl, (tpl) ->
                callback _.template(tpl)
            )

})