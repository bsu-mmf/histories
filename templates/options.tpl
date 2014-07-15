section.options
    p
        | <input type="checkbox" id="comments" name="comments" <%= comments ? 'checked' : ''%>>
        label(for='comments') <%= comments ? 'Комментарии включены' : 'Комментарии отключены'%>

    div
        | Тема
        select#themeSelect
            option(value='0') Пользовательская
            option(value='1') Стандарт
            option(value='2') Танго
            option(value='3') Черная

    div
        | Цвет текста
        input(type='color')#textColor.colorPicker

    div
        | Дополнительный цвет
        input(type='color')#highlightColor.colorPicker

    div
        | Цвет фона
        input(type='color')#bgColor.colorPicker