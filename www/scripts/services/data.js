'use strict';

angular.module('conferenceApp')
	.service('Data', function Data($http) {
		delete $http.defaults.headers.common['X-Requested-With'];
		
		var Data = {
			get_data : function (url) {
				window.api_response = url;
				
				var promise = $http.get(url).success(function(api_response) {
					window.api_response = api_response
				})

				return promise;
			}	
		}
		return Data;
	});