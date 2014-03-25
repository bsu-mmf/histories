section.options
    p
        | <input type="checkbox" id="comments" name="comments" <%= comments ? 'checked' : ''%>>
        label(for='comments') <%= comments ? 'Комментарии включены' : 'Комментарии отключены'%>