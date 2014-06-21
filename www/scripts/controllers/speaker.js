'use strict';

angular.module('conferenceApp')
 .controller('SpeakerCtrl', function($scope, $rootScope, $http){
  	
    $http.get('scripts/lib/json/speaker.json').success(function(response){
  		$scope.speakers = response;
  	});
  	
    $scope.active_speaker="active";
    $scope.currentTab='speaker';

    $scope.speakerIndex = function(index) {
      $rootScope.speakerDetail = $scope.speakers[index];
    }

  });
