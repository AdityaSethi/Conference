'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:NonetworkCtrl
 * @description
 * # NonetworkCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
  .controller('NonetworkCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.refresh = function(){
      $location.path('/');
    }
  });
