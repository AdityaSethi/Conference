'use strict';

angular.module('conferenceApp')
 .controller('SpeakerCtrl', function($scope,$http){
  	$http.get('scripts/lib/json/speaker.json').success(function(response){
  		$scope.speakers=response;
  	});
  	/*	$scope.speaker="Douglas Crockford";
  		$scope.discovery="Discovered the JSON";
  		$scope.topic='"The Better Parts"';
  		$scope.contents="Douglas Crockford is an American computer programmer and entrepreneur who is best known for his ongoing involvement in the development of the JavaScript language, for having popularized the data format JSON (JavaScript Object Notation), and for developing various JavaScript related tools such as JSLint and JSMin.[2] He is currently a senior JavaScript architect at PayPal, and is also a writer and speaker on JavaScript, JSON, and related web technologies such as the Yahoo! User Interface Library (YUI).";
  		*/
  		$scope.expand="See more";
  		$scope.selectedIndex=-1;
  		$scope.toggle = [];
  		$scope.check_expand=function(index){

  			$scope.toggle[index] = !$scope.toggle[index];
  			$scope.selectedIndex=index;
  			if($scope.expand=="See more")
  			{
  				$element.expand="See less";
  			}
  			else
  			{
  				$scope.expand="See more";
  			}
  		};
  });
