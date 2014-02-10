<div class="story">
    <h1><%= storyNumber %>.&nbsp;<%= name %></h1>
    <div>
        <%= content %>
    </div>    
</div>

<div class="allStories">
    <ul>
        <%
            var minStoryNumber = (storyNumber - 5 <= 0 ? 1 : storyNumber - 5),
                maxStoryNumber = (storyNumber + 5 > Settings.CountStories ? Settings.CountStories : storyNumber + 5);
            
            if (minStoryNumber !== 1) { %>
                <li><a href="#" data-href="story/1">1</a></li><li><span>...</span></li>
            <% }
                
            for (var i = minStoryNumber; i <= maxStoryNumber; i++) { %>
                <li><a class="<%= (storyNumber==i ? 'current' : '') %>" data-href="story/<%= i %>" href="#"><%= i %></a></li>
            <% } 
        
            if (maxStoryNumber !== Settings.CountStories) { %>
                <li><span>...</span></li><li><a href="#" data-href="story/<%= Settings.CountStories %>"><%= Settings.CountStories %></%></a></li>
            <% }
        %>
    </ul>    
</div>