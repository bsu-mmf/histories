(function(root, Backbone) {
    'use strict';

    root.Models = root.Models || {};
    root.Models.HomeModel = Backbone.Model.extend({
        defaults: {
            stories: []
        },
        
        initialize: function() {
            this.attributes.stories[1] = 'Никогда не стирайте с доски!';
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
            this.attributes.stories[15] = 'Сложное имя.';
            this.attributes.stories[16] = 'Цыгане и функциональный анализ.';
            this.attributes.stories[17] = 'Вредный преподаватель.';
            this.attributes.stories[18] = 'Обычная практика.';
            this.attributes.stories[19] = 'Плакат от незванных гостей.';
            this.attributes.stories[20] = 'Нули в ведомость.';
            this.attributes.stories[21] = 'Два замечательных студента.';
            this.attributes.stories[22] = 'Два типа задач.';
            this.attributes.stories[23] = 'Переделывай.';
            this.attributes.stories[24] = 'Конъюнкция из трех букв.';
            this.attributes.stories[25] = 'Надписи на партах.';
            this.attributes.stories[26] = 'Памятник Мебиусу.';
            this.attributes.stories[27] = 'Буква Ы.';
            this.attributes.stories[28] = 'Сокращение.';
            this.attributes.stories[29] = 'Аллергия на МатАнализ.';
            this.attributes.stories[30] = 'Полярная лиса.';
            this.attributes.stories[31] = 'Множитель ёпт.';
            this.attributes.stories[32] = 'Чей же это корень?';
            this.attributes.stories[33] = 'Эфимерные неизмеримые функции.';
            
            /*
            this.attributes.stories[1001] = 'Шарообразная диссертация.';
            this.attributes.stories[1002] = 'Кровавая жатва.';
            this.attributes.stories[1003] = 'Но попытаться стоит.';
            */
        }
        
    });


}(this, this.Backbone));
