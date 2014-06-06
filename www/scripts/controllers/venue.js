'use strict';

angular.module('conferenceApp')
<<<<<<< HEAD
.controller('venueCtrl',function($scope,$http) {
	
=======
.controller('venueCtrl',function($scope,$http,$rootScope) {
>>>>>>> 5123da440fac1d937f6cabe42b5e7b52c60ed19a
  	//$http.get('scripts/lib/json/venue.json').success(function(response) {
     //  }
    $scope.active_overview;
    $scope.active_speaker;
    $scope.active_agenda;
    $scope.active_venue="active";
    $scope.address = "Hotel Taj Vivanta" + "\n" +"M G Road"+"\n"+"Bengaluru"
   	
  });