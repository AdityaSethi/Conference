'use strict';

angular.module('conferenceApp')
.controller('venueCtrl',function($scope, $rootScope) {
    
    $scope.active_venue="active";
    
    // Setting the map height so that it appears properly on any device

    $scope.mapHeight = ($rootScope.deviceHeight - 110); 

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