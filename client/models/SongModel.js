// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('called queue');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('called queue');
    this.trigger('dequeue', this);
  },

  ended: function() {
    console.log('called ended');
    this.trigger('ended', this);
  }

});
