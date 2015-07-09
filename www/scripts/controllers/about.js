'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
