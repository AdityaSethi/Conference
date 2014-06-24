'use strict';

angular.module('conferenceApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope, $window, Data, SetData) {
 
    $rootScope.deviceHeight = window.innerHeight;
    $rootScope.deviceWidth = window.innerWidth;
    $rootScope.deviceFixHeight = window.innerHeight-50;
    $scope.loads = 'loaded';

    $scope.goBack = function(){
      $window.history.back();
    }

    Data.get_data('scripts/lib/json/agenda.json').success(function(api_data) {
    	SetData.set_agenda_data(api_data);
    });

    Data.get_data('scripts/lib/json/overview.json').success(function(api_data) {
    	SetData.set_overview_data(api_data);
    });

    Data.get_data('scripts/lib/json/speaker.json').success(function(api_data) {
    	SetData.set_speaker_data(api_data);
    });
    
    Data.get_data('scripts/lib/json/venue.json').success(function(api_data) {
    	SetData.set_venue_data(api_data);
    });
    
    $rootScope.dayVal = 0;
});

