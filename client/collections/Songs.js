// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function(){
    this.queue = new SongQueue();

    this.on('enqueue', function(song){
      console.log('SONGS received enqueued event');
      this.queue.push(song);
    }, this);



  },



});
