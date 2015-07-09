'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('MainCtrl', function($scope, $location, $http, app_data) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.go_to_overview = function() {
            $location.path("/overview");
        }
        $scope.go_to_speakers = function() {
            $location.path('/speakers');
        }
        $scope.go_to_agenda = function(){
            $location.path('/agenda/1');
        }
        $scope.go_to_venue = function(){
            $location.path('/venue')
        }
    });
