'use strict';

angular.module('conferenceApp')
  .controller('SpeakerCtrl', function ($scope, $location, $http) {
    $scope.status = "Hello world!"
    var speakers = $http.get('scripts/lib/json/speakers.json').success(function(response) {
        $scope.speakers = response
        console.log($scope.speakers);
    });
});
