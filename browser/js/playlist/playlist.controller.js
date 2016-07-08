'use strict'

juke.controller('PlaylistCtrl', function ($scope){

  $scope.submitPlaylist = function (){
    console.log("something", $scope.nameOfPlaylist)
  }


})
