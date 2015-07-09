'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('SpeakersCtrl', function($scope, app_data, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS'
        ];
        // $scope.aa=[1,23.42]
        $scope.speakers_data = app_data.getData().speakers;
        // console.log($scope.speakers_data[0].image);
        $scope.show_detail = function(key) {
            // console.log(key);
        }
        $scope.show_detail = function(id) {
            $location.path('/speakerDetails/' + id);
        }
        $scope.goBack = function() {
            window.history.back();
        }
    });
