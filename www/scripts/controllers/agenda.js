angular.module('conferenceApp')
.controller('agendaCtrl', function($scope,$http,$rootScope,$location) {
  	$http.get('scripts/lib/json/agenda.json').success(function(response) {
        $scope.agendas=response;
        if($rootScope.index==1)
        {
        $scope.ind=1;
        }
        else
        {
         $scope.ind=0;   
        }
        
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

        $scope.showDetail=function(selectedRow,selectedAgenda,selectedInd){
            $rootScope.row=selectedRow;
            $rootScope.agenda=selectedAgenda;
            $rootScope.index=selectedInd;
            
            console.log($rootScope.row)
            console.log($rootScope.agenda)
            $location.path('/agendaDetail')
        }
        $scope.showAgenda=function(selectedInd){
           
           $rootScope.index=selectedInd;
          
           
           $location.path('/agenda')
        }
        $scope.showSpeakerDetails=function(selectedName){
           
            $rootScope.sname=selectedName;
            $http.get('scripts/lib/json/speaker.json').success(function(response) {
                $rootScope.speaker=response;
                console.log($rootScope.speaker);
               
                for(var key in $rootScope.speaker)
                {
                   
                   
                    if($rootScope.speaker[key].name===$rootScope.sname)
                    {
                        $rootScope.speakerDetail=$rootScope.speaker[key];
                        
                        $location.path('/speakerinfo')
                        

                    }
                }
                            })

        }
    });
    $scope.active_overview;
    $scope.active_speaker;
    $scope.active_agenda="active";
    $scope.active_venue;

  });