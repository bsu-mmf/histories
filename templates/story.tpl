|<% var minStoryNumber = (storyNumber - 5 <= 0 ? 1 : storyNumber - 5),
| maxStoryNumber = (storyNumber + 5 > Settings.CountStories ? Settings.CountStories : storyNumber + 5);
|%>

div.story
    h1 <%= storyNumber %>.&nbsp;<%= name %>
    div
        <%= content %>
        <% if (comments) { %>
        div#disqus_thread
        script(type="text/javascript").
            var disqus_shortname = "bsu-mmf-stories",
                disqus_identifier = "story_<%= storyNumber %>",
                disqus_title = "<%= name %>";
            (function() {
                var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;
                dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";
                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);
            })();
        <% } %>

div.allStories
    ul
        <% if (minStoryNumber !== 1) { %>
        li: a(href="#", data-href="story/1") 1
        li: span ...
        <% } %>
        <% for (var i = minStoryNumber; i <= maxStoryNumber; i++) { %>
        li: a(data-href!="story/<%= i %>", href="#", class!="<%= (storyNumber==i ? 'current' : '') %>") <%= i %>
        <% } if (maxStoryNumber !== Settings.CountStories) { %>
        li: span ...
        li: a(href="#", data-href!="story/<%= Settings.CountStories %>") <%= Settings.CountStories %>
        <% } %>