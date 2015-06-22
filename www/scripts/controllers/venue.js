'use strict';

angular.module('conferenceApp')
.controller('venueCtrl',function($scope, $rootScope, SetData) {
    
    var venue = SetData.get_venue_data();
    $scope.active_venue="active";
    // Setting the map height so that it appears properly on any device
    $scope.mapHeight = ($rootScope.deviceHeight - 110);


    $scope.loadMap = function initialize() {
      var myLatlng = new google.maps.LatLng(venue.lat, venue.long);
      var mapOptions = {
       zoom: 15,
       center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var contentString = venue.content;
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      show: true
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: venue.title
    });
    
    infowindow.open(map,marker);
  }
});