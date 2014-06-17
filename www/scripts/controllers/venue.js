'use strict';

angular.module('conferenceApp')
.controller('venueCtrl',function($scope, $http, $rootScope) {
    //$http.get('scripts/lib/json/venue.json').success(function(response) {
     //  }
    $scope.active_overview;
    $scope.active_speaker;
    $scope.active_agenda;
    $scope.active_venue="active";
    
    $scope.mapHeight = ($rootScope.deviceHeight - 110); // Setting the map height

    $scope.loadMap = function initialize() {
      var myLatlng = new google.maps.LatLng(12.9732486,77.6197981);
      var mapOptions = {
       zoom: 15,
       center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var contentString = '<p>Hotel Taj Vivanta,M.G Road,Bengaluru</p>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      show: true
    });
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hotel Taj Vivanta,M.G Road,Bengaluru'
    });
    infowindow.open(map,marker);
  }
});