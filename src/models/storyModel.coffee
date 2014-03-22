'use strict'
@Models = @Models || {}
Models.StoryModel = Backbone.Model.extend({
    defaults:
        storyNumber: 0

    url: ->
        return "stories/story_#{ @attributes.storyNumber  }.json"
})