'use strict';

angular.module('conferenceApp')
    .controller('landingPageCtrl', function ($scope, SetData) {
		
		$scope.arrowMargin = (window.innerWidth)/2.2;
		$scope.confvenue = SetData.get_venue_data();
		
	});