'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
  .controller('OverviewCtrl', function ($scope, app_data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data = app_data.getData().overview;
    // console.log($scope.data);
    $scope.goBack = function(){
      window.history.back();
    }
  });
