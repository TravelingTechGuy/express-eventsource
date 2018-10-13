'use strict';

$(function() {
	var source;

	var displayData = function(e) {
		//parse the JSON message
		var data = JSON.parse(e.data);
		//if it's the last message, stop listening
		if (data.final) {
			source.close();
		}
		//output the data and timestamp
		$('#content').append(data.time + '&nbsp;&mdash;&nbsp;' + data.data + '<br />');
	};

	var displayError = function(e) {
		if (e.readyState === EventSource.CLOSED) {
			$('#content').append('<strong>Connection was closed.</strong><br />');
		}
		else {
			$('#content').append('<strong>Error occurred</strong><br />');
		}
	};

	var startListening = function() {
		//create a new event source
		source = new EventSource('/events');

		//listen for data
		source.addEventListener('data', displayData, false);

		//listen for data on IE, listening for the 'message' event
		source.onmessage = displayData;

		//listen for error
		source.addEventListener('error', displayError, false);
	};

	//add an EventSource test to Modernizr, if one doesn't exist
	if (Modernizr.eventsource === undefined) {
		Modernizr.addTest('eventsource', function() {
			return !!window.EventSource;
		});
	}
	//bootstrap pollyfill if browser doesn't support EventSource
	Modernizr.load({
		test: Modernizr.eventsource,
		nope: '/javascripts/vendor/eventsource.js',
		complete: startListening
	});
});