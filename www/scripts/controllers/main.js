'use strict';

angular.module('conferenceApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll,$rootScope) {
    $scope.status = "Main view";
    $rootScope.deviceHeight=window.innerHeight;
    $rootScope.deviceWidth=window.innerWidth;

    $scope.changeOrientation=function()
    {
    	$rootScope.deviceWidth=window.innerWidth;
    	$rootScope.deviceHeight=window.innerHeight;
    }
      window.addEventListener('orientationchange',$scope.changeOrientation());
    
});


