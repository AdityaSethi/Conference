'use strict';

angular.module('conferenceApp')
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .controller('MainCtrl', function ($scope, $location, $rootScope, $window, Data, SetData) {
 
        $rootScope.deviceHeight = window.innerHeight;
        $rootScope.deviceWidth = window.innerWidth;
        $rootScope.deviceFixHeight = window.innerHeight-50;
        $scope.loads = 'loaded';
        
        $scope.goBack = function(){
          $window.history.back();
        }

        Data.get_data('http://www.jschannel.com/api/conference').success(function(api_data) {
        	SetData.set_agenda_data(api_data.agenda);
            SetData.set_overview_data(api_data.overview);
            SetData.set_speaker_data(api_data.speakers);
            SetData.set_venue_data(api_data.venue);
            $scope.confvenue = api_data.venue;
        })
        .error(function(error) {
            alert(JSON.stringify(error));
        });

        $rootScope.dayVal = 0;
    });

