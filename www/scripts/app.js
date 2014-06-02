angular.module('conferenceApp', ['ngRoute','google-maps','ngSanitize'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'secondPageCtrl',
            templateUrl: 'partials/secondPage.html'
        })
        /*.when('/view2', {
            controller: 'secondPageCtrl',
            templateUrl: 'partials/secondPage.html'
        })*/
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
         .when('/agendaDetail', {
            controller: 'agendaCtrl',
            templateUrl: 'partials/agendaDetail.html'
        })
        .when('/venue', {
            controller: 'venueCtrl',
            templateUrl: 'partials/venue.html'
        })
        .when('/speakerinfo', {
            controller: 'SpeakerCtrl',
            templateUrl: 'partials/speakerDetails.html'
        })
        .when('/speakerDetail', {
            controller: 'SpeakerCtrl',
            templateUrl: 'partials/speakerDetails2.html'
        })
        .otherwise({redirectTo: '/'});
    });
