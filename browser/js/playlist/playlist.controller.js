'use strict'

juke.controller('NewPlaylistCtrl', function($scope, PlaylistFactory, PlayerFactory) {

  $scope.submitPlaylist = function() {
        var data = {
            name: $scope.nameOfPlaylist
        };

        $scope.nameOfPlaylist = null;
        $scope.playlistForm.input.$setPristine();
        $state.go('currentPlaylist');
        return PlaylistFactory.create(data);
    }

})

juke.controller('SinglePlaylistCtrl', function($scope, thePlaylist) {
  $scope.playlist = thePlaylist;

  //   $scope.toggle = function (song) {
  //   if (song !== PlayerFactory.getCurrentSong()) {
  //     PlayerFactory.start(song, $scope.album.songs);
  //   } else if ( PlayerFactory.isPlaying() ) {
  //     PlayerFactory.pause();
  //   } else {
  //     PlayerFactory.resume();
  //   }
  // };

  // $scope.getCurrentSong = function () {
  //   return PlayerFactory.getCurrentSong();
  // };

  // $scope.isPlaying = function (song) {
  //   return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  // };

});


