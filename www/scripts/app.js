angular.module('conferenceApp', ['ngRoute'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/overview', {
            controller: 'overviewCtrl',
            templateUrl: 'partials/overview.html'
        })
        .when('/speakers', {
            controller: 'SpeakerCtrl',
            templateUrl: 'partials/speakers.html'
        })
        .when('/agenda', {
            controller: 'agendaCtrl',
            templateUrl: 'partials/agenda.html'
        })
        .when('/venue', {
            controller: 'VenueCtrl',
            templateUrl: 'partials/venue.html'
        })
        .otherwise({redirectTo: '/'});
    });
