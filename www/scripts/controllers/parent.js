'use strict';

angular.module('conferenceApp')
  .controller('ParentCtrl', function ($scope, $location) {
    $scope.currentTab = 'main';
        $scope.selectTab = function(tab) {
					$scope.currentTab = tab;
    		};
});
