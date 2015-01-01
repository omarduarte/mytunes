// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){

    this.on('add', function() {
      console.log('songQueue received add event.');
      if (this.length === 1) {

        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      console.log('SONGS received dequeued event');
      this.remove(song);
    }, this);

    this.on('ended', function(){
      this.shift();
      if(!this.isEmpty()) {
        this.playFirst();
      }
    }, this);

    //this.oldRemove = Backbone.Collection.prototype.remove.bind(this);

  },

  playFirst : function() {
    this.at(0).play();
  },

  // remove: function(song) {
  //   console.log('Remove was called');
  //   this.oldRemove(song);
  // }

});
