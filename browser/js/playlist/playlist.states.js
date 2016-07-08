juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'NewPlaylistCtrl'
  });

    $stateProvider.state('singlePlaylist', {
    url: '/singlePlaylist/:playlistId',
    templateUrl: '/js/playlist/templates/singlePlaylist.html',
    controller: 'SinglePlaylistCtrl',
    resolve: {
      thePlaylist: function(PlaylistFactory, $stateParams) {
        return PlaylistFactory.getPlaylist($stateParams.playlistId);
      }
    }
  });

});
