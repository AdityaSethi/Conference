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
        .when('/speaker', {
            controller: 'SpeakerCtrl',
            templateUrl: 'partials/speaker.html'
        })
        .otherwise({redirectTo: '/'});
    });
