angular.module('conferenceApp')
  .controller('overviewCtrl', function($scope,$http) {

    $http.get('scripts/lib/json/overview.json').success(function(response) {
      $scope.overview = response;
    });

    $scope.active_overview = "active";
  
  });