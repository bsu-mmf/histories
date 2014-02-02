(function(root) {
    'use strict';

    root.Models = root.Models || {};
    Models.HomeModel = Backbone.Model.extend({
        defaults: {
            stories: []
        },
        
        initialize: function() {
            this.attributes.stories[1] = 'Как доказать, что 1 = -1.';
            this.attributes.stories[2] = 'Слепой студент.';
            this.attributes.stories[3] = 'Мехматовские частушки.';
            this.attributes.stories[4] = 'Математический анализ и подсолнечное масло.';
            this.attributes.stories[5] = 'Математическая КамаСутра.';
            this.attributes.stories[6] = 'Обнадежил&hellip;';
            this.attributes.stories[7] = 'Задача про опохмеление.';
            this.attributes.stories[8] = 'Банкнота в 10 марок.';
            this.attributes.stories[9] = 'Экзаменационные шедевры.';
            this.attributes.stories[10] = 'Перевернутый дифференциал.';
            this.attributes.stories[11] = 'Кандидат механических наук.';
            this.attributes.stories[12] = 'Алкогольная аппроксимация.';
            this.attributes.stories[13] = 'Почти как у Пифагора.';
            
            /*
            this.attributes.stories[1001] = 'Шарообразная диссертация.';
            this.attributes.stories[1002] = 'Кровавая жатва.';
            this.attributes.stories[1003] = 'Но попытаться стоит.';
            */
        }
        
    });


}(this));