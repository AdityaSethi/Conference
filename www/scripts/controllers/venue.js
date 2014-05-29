'use strict';

angular.module('conferenceApp')
.controller('venueCtrl',function($scope,$http) {
  	//$http.get('scripts/lib/json/venue.json').success(function(response) {
     //  }
    $scope.active_overview;
    $scope.active_speaker;
    $scope.active_agenda;
    $scope.active_venue="active";
    $scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
};

  });