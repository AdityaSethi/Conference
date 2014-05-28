angular.module('conferenceApp')
.controller('agendaCtrl', function($scope,$http,$rootScope) {
  	$http.get('scripts/lib/json/agenda.json').success(function(response) {
        $scope.agendas=response;
        $scope.ind=0;
        $scope.currentTab='agenda';
      console.log($scope.agendas);
      
     
        $scope.getNextDate=function(newInd){
        	console.log(newInd)
        	
        	$scope.ind=++newInd;	
        		console.log($scope.ind);
        }

        $scope.getPreviousDate=function(newInd){
        	console.log(newInd);
        	
        	$scope.ind=--newInd;	
        		console.log($scope.ind);
        }

        $scope.showDetail=function(selectedRow,selectedAgenda){
            $rootScope.row=selectedRow;
            $rootScope.agenda=selectedAgenda;
            console.log($rootScope.row)
            console.log($rootScope.agenda)
        }
    });
    $scope.active_overview;
    $scope.active_speaker;
    $scope.active_agenda="active";
    $scope.active_venue;

  });