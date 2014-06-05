'use strict';

angular.module('conferenceApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll,$rootScope) {
    $scope.status = "Main view";
    if(window.innerHeight>1024 && window.innerHeight<1400)
    {
        $rootScope.deviceHeight=1280;         //Used for adjusting resolution
        $rootScope.deviceWidth=window.innerWidth;
    }
    else
    {
        $rootScope.deviceHeight=window.innerHeight;
        $rootScope.deviceWidth=window.innerWidth;
    }
    $scope.loads='loaded';
    // $scope.changeOrientation=function()
    // {
    // 	$rootScope.deviceWidth=window.innerWidth;
    // 	$rootScope.deviceHeight=window.innerHeight;
    // }
    //   window.addEventListener('orientationchange',$scope.changeOrientation());
    
});


