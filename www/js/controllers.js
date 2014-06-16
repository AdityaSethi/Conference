angular.module('conferenceApp')
		.controller('ParentCtrl', ['$scope', function ($scope) {
        $scope.currentTab = 'main';
       
    }])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
