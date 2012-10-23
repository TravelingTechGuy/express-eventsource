$(function() {
	var displayData = function(e) {
  		//parse thge JSON message
  		var data = JSON.parse(e.data);
  		//if it's the last message, stop listening
  		if(data.final) {
  			source.close();
  		}
  		//output the data and timestamp
  		$("#content").append(data.time + "&nbsp;&mdash;&nbsp;" + data.data + "<br />");
  	};

  	var displayError = function(e) {
		if (e.readyState == EventSource.CLOSED) {
			$("#content").append("<b>Connection was closed.</b><br />");
	  	}
	  	else {
  			$("#content").append("<b>Error occured</b><br />");
	  	}
	};

	//create a new event source
  	var source = new EventSource("/events");
  	//listen for data
  	source.addEventListener('data', displayData, false);

  	//listen for data on IE, listening for the 'message' event
  	source.onmessage = displayData;

  	//listen for error
  	source.addEventListener('error', displayError, false);

	
});