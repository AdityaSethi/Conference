angular.module('App.controllers', [])
		.controller('ParentCtrl', ['$scope', function ($scope) {
        $scope.currentTab = 'main';
        $scope.selectTab = function(tab) {
					$scope.currentTab = tab;
    		};
    }])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
