'use strict';

/**
 * @ngdoc function
 * @name jsAppApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the jsAppApp
 */
angular.module('jsAppApp')
    .controller('LandingCtrl', function($scope, $http, app_data, $location, $timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $http({
            method: 'GET',
            url: 'http://www.jschannel.com/api/conference'
        }).success(function(data) {
            app_data.setData(data);
            // console.log(app_data.getData());
            $timeout(function() {
                // console.log("asd");
                $location.path("/main");
            }, 1000);

        }).error(function(data) {
            // console.log("erro");
            $location.path('/noNetwork');
        });
    });
