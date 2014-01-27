<div class="story">
    <h1><%= storyNumber %>.&nbsp;<%= name %></h1>
    <div>
        <%= content %>
    </div>    
</div>

<div class="allStories">
    <ul>
        <% for (var i = 1; i <= Settings.CountStories; i++) { %>
            <li><a class="<%= (storyNumber==i ? 'current' : '') %>" data-href="story/<%= i %>" href="#"><%= i %></a></li>
        <% } %>
    </ul>    
</div>