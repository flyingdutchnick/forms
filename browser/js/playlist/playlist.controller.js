'use strict'

juke.controller('PlaylistCtrl', function($scope, PlaylistFactory, thePlaylist, PlayerFactory) {

  $scope.playlist = thePlaylist;

  $scope.submitPlaylist = function() {
        console.log("working")
        var data = {
            name: $scope.nameOfPlaylist
        };

        $scope.nameOfPlaylist = null;
        $scope.playlistForm.input.$setPristine();
        return PlaylistFactory.create(data);
    }

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

})


