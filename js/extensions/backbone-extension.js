(function() {
    'use strict';
    
    Backbone.View.prototype = _.extend(Backbone.View.prototype, {
        getTemplate: function(templateUrl, callback) {
            if (localStorage) {
                var tpl = localStorage.getItem(templateUrl);
                if (tpl) {
                    callback(_.template(tpl));
                } else {
                    $.get(templateUrl, function(tpl) {
                        localStorage.setItem(templateUrl, tpl);
                        callback(_.template(tpl));
                    });
                }
            } else {
                $.get(templateUrl, function(tpl) {
                    callback(_.template(tpl));
                });
            }
        }
    });
    
}(this));