'use strict';

/**
 * @ngdoc overview
 * @name jsAppApp
 * @description
 * # jsAppApp
 *
 * Main module of the application.
 */
angular
    .module('jsAppApp', [
        'ngResource',
        'ngRoute',
        'ngTouch',
        'ngSanitize'
    ]).
service("app_data", function() {
        var app_data = {};
        return {
            setData: function(data) {
                app_data = data;
                // angular.copy(app_data, data);
            },
            getData: function() {
                return app_data;
            }
        }
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/overview', {
                templateUrl: 'views/overview.html',
                controller: 'OverviewCtrl'
            })
            .when('/venue', {
                templateUrl: 'views/venue.html',
                controller: 'VenueCtrl'
            })
            .when('/speakers', {
                templateUrl: 'views/speakers.html',
                controller: 'SpeakersCtrl'
            })
            .when('/agenda/:day', {
                templateUrl: 'views/agenda.html',
                controller: 'AgendaCtrl'
            })
            .when('/speakerDetails/:id', {
              templateUrl: 'views/speakerdetails.html',
              controller: 'SpeakerdetailsCtrl'
            })
            .when('/agendaDay2', {
              templateUrl: 'views/agendaday2.html',
              controller: 'Agendaday2Ctrl'
            })
            .when('/', {
              templateUrl: 'views/landing.html',
              controller: 'LandingCtrl'
            })
            .when('/noNetwork', {
              templateUrl: 'views/nonetwork.html',
              controller: 'NonetworkCtrl'
            })
            .otherwise({
                redirectTo: '/landing'
            });
    });
