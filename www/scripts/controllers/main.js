'use strict';

angular.module('conferenceApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll,$rootScope) {
   
    $scope.status = "Main view";
    $rootScope.deviceHeight=window.innerHeight;
    $rootScope.deviceWidth=window.innerWidth;
    $rootScope.deviceFixHeight=window.innerHeight-50;
    $scope.loads='loaded';
    
});


