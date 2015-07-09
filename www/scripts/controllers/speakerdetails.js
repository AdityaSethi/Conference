'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:SpeakerdetailsCtrl
 * @description
 * # SpeakerdetailsCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('SpeakerdetailsCtrl', function($scope, app_data, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.speaker_data = [];
        app_data.getData().speakers.forEach(function(speaker) {
            if (speaker.$$hashKey === $routeParams.id) {
                $scope.speaker_data = speaker;
                // console.log($scope.speaker_data.name);
            }
        })
        // console.log($routeParams.id);
        $scope.goBack = function() {
            window.history.back();
        }
    });
