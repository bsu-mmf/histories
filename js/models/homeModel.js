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
            this.attributes.stories[14] = 'Ад и неравномерные тепловые процессы.';
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
            this.attributes.stories[34] = 'Множество меры нуль.';
            this.attributes.stories[35] = 'Нобелевские лауреаты по экономике.';
            this.attributes.stories[36] = 'Странные иррациональные числа.';
            this.attributes.stories[37] = 'Фурьёвые ряды.';
            this.attributes.stories[38] = 'Шарообразная диссертация.';
            this.attributes.stories[39] = 'Кровавая жатва.';
            this.attributes.stories[40] = 'Но попытаться стоит.';
            this.attributes.stories[41] = 'Звонил не математик.';
            this.attributes.stories[42] = 'Внучка В.Г. Кротова.';
            this.attributes.stories[43] = 'Как В.Г. Кротова из комсомола исключали.';
            this.attributes.stories[44] = 'Чьих будешь?';
            this.attributes.stories[45] = 'Сегодня я буду сверху!';
            this.attributes.stories[46] = 'Эквидомоид.';
            this.attributes.stories[47] = 'Можно ли причесать ежа?';
            this.attributes.stories[48] = 'Если аспирант не защищается.';
            this.attributes.stories[49] = 'Тема диссертации.';
            this.attributes.stories[50] = 'Антиалкогольный плакат.';
            this.attributes.stories[51] = 'Необходимые и достаточные условия.';
            this.attributes.stories[52] = 'Действительный и&hellip; действующий.';
            this.attributes.stories[53] = 'Три типа ученых.';
            this.attributes.stories[54] = 'Мотивирующая пословица.';
        }
        
    });


}(this, this.Backbone));
