'use strict';

angular.module('conferenceApp')
  .controller('agendaCtrl', function($scope, $rootScope, $location, $routeParams, SetData) {
    
    $scope.active_agenda = "active";    
    $rootScope.dayVal = parseInt($routeParams.day) || 0;

    $scope.agendaData = SetData.get_agenda_data();
    $scope.currentDayAgenda = $scope.agendaData[$rootScope.dayVal];

    $scope.showDetail = function(selectedRow, selectedAgenda) {
      $rootScope.row = selectedRow;
      $rootScope.agenda = selectedAgenda;
      $location.path('/agendaDetail');
    };
        
    $scope.showSpeakerDetails = function(selectedName, session) {     
      $rootScope.speakerName = selectedName;
      $rootScope.session = session;
      $rootScope.speaker = SetData.get_speaker_data();
      for(var key in $rootScope.speaker) {
        if($rootScope.speaker[key].name == $rootScope.speakerName && $rootScope.speaker[key].topic== $rootScope.session) {
          $rootScope.speakerDetail = $rootScope.speaker[key]; 
          $location.path('/agendaDetail');
        }
      }
    };

  });