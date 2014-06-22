'use strict';

angular.module('conferenceApp')
	.service('SetData', function () {
		this.set_agenda_data = function(data) {
			this.agenda_data = data
		};
		this.set_overview_data = function(data) {
			this.overview_data = data
		};
		this.set_speaker_data = function(data) {
			this.speaker_data = data
		};
		this.set_venue_data = function(data) {
			this.venue_data = data
		}
		this.get_agenda_data = function(data) {
			 return this.agenda_data;
		};
		this.get_overview_data = function(data) {
			 return this.overview_data;
		};
		this.get_speaker_data = function(data) {
			 return this.speaker_data;
		};
		this.get_venue_data = function(data) {
			 return this.venue_data;
		}
	});