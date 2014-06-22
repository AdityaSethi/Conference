angular.module('conferenceApp')
    .controller('overviewCtrl', function($scope, SetData) {

    	$scope.active_overview = "active";
	    $scope.overview = SetData.get_overview_data();
	  
    });