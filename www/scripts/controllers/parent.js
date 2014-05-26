'use strict';

angular.module('conferenceApp')
  .controller('ParentCtrl', function ($scope, $location,$rootScope) {
  	$scope.$watch
  	{
	    $scope.active_overview;
	    $scope.active_speaker;
	    $scope.active_agenda;
	    $scope.active_venue;
	    $scope.$apply;
	}
     //    $scope.selectTab = function(tab) {
					// $scope.currentTab = tab;
    	// 	};
    
});
