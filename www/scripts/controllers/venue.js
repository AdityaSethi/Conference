'use strict';

angular.module('conferenceApp')
.controller('venueCtrl',function($scope,$http,$rootScope) {
  	//$http.get('scripts/lib/json/venue.json').success(function(response) {
     //  }
    $scope.active_overview;
    $scope.active_speaker;
    $scope.active_agenda;
    $scope.active_venue="active";
    $scope.address = "Hotel Taj Vivanta" + "\n" +"M G Road"+"\n"+"Bengaluru"
   	
  });