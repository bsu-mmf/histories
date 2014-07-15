'use strict'
@Models = @Models || {}
Models.HomeModel = Backbone.Model.extend({
    defaults:
        stories: []

    initialize: ->
        @attributes.stories[1] = 'Никогда не стирайте с доски!';
        @attributes.stories[2] = 'Слепой студент.';
        @attributes.stories[3] = 'Мехматовские частушки.';
        @attributes.stories[4] = 'Математический анализ и подсолнечное масло.';
        @attributes.stories[5] = 'Математическая КамаСутра.';
        @attributes.stories[6] = 'Обнадежил&hellip;';
        @attributes.stories[7] = 'Задача про опохмеление.';
        @attributes.stories[8] = 'Банкнота в 10 марок.';
        @attributes.stories[9] = 'Экзаменационные шедевры.';
        @attributes.stories[10] = 'Перевернутый дифференциал.';
        @attributes.stories[11] = 'Кандидат механических наук.';
        @attributes.stories[12] = 'Алкогольная аппроксимация.';
        @attributes.stories[13] = 'Почти как у Пифагора.';
        @attributes.stories[14] = 'Ад и неравномерные тепловые процессы.';
        @attributes.stories[15] = 'Сложное имя.';
        @attributes.stories[16] = 'Цыгане и функциональный анализ.';
        @attributes.stories[17] = 'Вредный преподаватель.';
        @attributes.stories[18] = 'Обычная практика.';
        @attributes.stories[19] = 'Плакат от незванных гостей.';
        @attributes.stories[20] = 'Нули в ведомость.';
        @attributes.stories[21] = 'Два замечательных студента.';
        @attributes.stories[22] = 'Два типа задач.';
        @attributes.stories[23] = 'Переделывай.';
        @attributes.stories[24] = 'Конъюнкция из трех букв.';
        @attributes.stories[25] = 'Надписи на партах.';
        @attributes.stories[26] = 'Памятник Мебиусу.';
        @attributes.stories[27] = 'Буква Ы.';
        @attributes.stories[28] = 'Сокращение.';
        @attributes.stories[29] = 'Аллергия на МатАнализ.';
        @attributes.stories[30] = 'Полярная лиса.';
        @attributes.stories[31] = 'Множитель ёпт.';
        @attributes.stories[32] = 'Чей же это корень?';
        @attributes.stories[33] = 'Эфимерные неизмеримые функции.';
        @attributes.stories[34] = 'Множество меры нуль.';
        @attributes.stories[35] = 'Нобелевские лауреаты по экономике.';
        @attributes.stories[36] = 'Странные иррациональные числа.';
        @attributes.stories[37] = 'Фурьёвые ряды.';
        @attributes.stories[38] = 'Шарообразная диссертация.';
        @attributes.stories[39] = 'Кровавая жатва.';
        @attributes.stories[40] = 'Но попытаться стоит.';
        @attributes.stories[41] = 'Звонил не математик.';
        @attributes.stories[42] = 'Внучка В.Г. Кротова.';
        @attributes.stories[43] = 'Как В.Г. Кротова из комсомола исключали.';
        @attributes.stories[44] = 'Чьих будешь?';
        @attributes.stories[45] = 'Сегодня я буду сверху!';
        @attributes.stories[46] = 'Эквидомоид.';
        @attributes.stories[47] = 'Можно ли причесать ежа?';
        @attributes.stories[48] = 'Если аспирант не защищается.';
        @attributes.stories[49] = 'Тема диссертации.';
        @attributes.stories[50] = 'Антиалкогольный плакат.';
        @attributes.stories[51] = 'Необходимые и достаточные условия.';
        @attributes.stories[52] = 'Действительный и&hellip; действующий.';
        @attributes.stories[53] = 'Три типа ученых.';
        @attributes.stories[54] = 'Мотивирующая пословица.';
})