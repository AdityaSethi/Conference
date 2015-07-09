'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('AgendaCtrl', function($scope, $routeParams, app_data, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function() {
            window.history.back();
        }
        $scope.go_day_2 = function(){
          // console.log("asdasd");
          $location.path("/agendaDay2");
        }
        $scope.day_data = app_data.getData().agenda[$routeParams.day - 1 ];
        // console.log(app_data.getData().agenda[$routeParams.day - 1 ]);
    });
