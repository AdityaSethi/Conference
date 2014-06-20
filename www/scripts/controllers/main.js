'use strict';

angular.module('conferenceApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $rootScope, $window) {
   
    $scope.status = "Main view";
    // if(window.innerHeight>1024 && window.innerHeight<1400)
    // {
    //     $rootScope.deviceHeight=1280;         //Used for adjusting resolution
    //     $rootScope.deviceWidth=window.innerWidth;
    // }
    // else
    // {
        $rootScope.deviceHeight=window.innerHeight;
        $rootScope.deviceWidth=window.innerWidth;
        $rootScope.deviceFixHeight=window.innerHeight-50;
        console.log($rootScope.deviceHeight, $rootScope.deviceWidth)
    //}
    $scope.loads='loaded';

    $scope.goBack = function(){
        $window.history.back();
    }

     // $scope.selectTab = function(event) {
                    
     //        };

    // $scope.changeOrientation=function()
    // {
    // 	$rootScope.deviceWidth=window.innerWidth;
    // 	$rootScope.deviceHeight=window.innerHeight;
    // }
    //   window.addEventListener('orientationchange',$scope.changeOrientation());
    
});


