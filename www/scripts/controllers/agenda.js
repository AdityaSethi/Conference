angular.module('conferenceApp')
.controller('agendaCtrl', function($scope,$http) {
  	$http.get('scripts/lib/json/agenda.json').success(function(response) {
        $scope.agendas=response;
        $scope.ind=0;
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
    });

  });