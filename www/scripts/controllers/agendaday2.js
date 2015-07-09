'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:Agendaday2Ctrl
 * @description
 * # Agendaday2Ctrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('Agendaday2Ctrl', function($scope, app_data) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function() {
            window.history.back();
        }
        $scope.day_data = app_data.getData().agenda[1];

    });
