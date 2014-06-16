angular.module('conferenceApp')
  .controller('secondPageCtrl', function ($scope,$http) {
  	$scope.arrowMargin=(window.innerWidth)/2.2;
  	$http.get('scripts/lib/json/venue.json').success(function(response){
  		$scope.confvenue=response;
  	});
  	});
