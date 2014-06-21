'use strict';

angular.module('conferenceApp')
  .controller('agendaCtrl', function($scope, $http, $rootScope, $location, $routeParams) {
    
    $scope.active_agenda = "active";
        
    $rootScope.day = parseInt($routeParams.day);

    $http.get('scripts/lib/json/agenda.json').success(function(response) {
      $scope.agendaData = response;
      $scope.currentDayAgenda = $scope.agendaData[$rootScope.day];
    });

    $scope.showDetail = function(selectedRow, selectedAgenda) {
      $rootScope.row = selectedRow;
      $rootScope.agenda = selectedAgenda;
      $location.path('/agendaDetail');
    };
        
      $scope.showSpeakerDetails = function(selectedName) {     
        $rootScope.speakerName = selectedName;
        $http.get('scripts/lib/json/speaker.json').success(function(response) {
          $rootScope.speaker = response;
          for(var key in $rootScope.speaker) {
            if($rootScope.speaker[key].name === $rootScope.speakerName) {
              $rootScope.speakerDetail = $rootScope.speaker[key]; 
              $location.path('/agendaDetail');
            }
          }
        });
      };
  });