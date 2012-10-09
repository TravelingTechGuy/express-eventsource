$(function() {
	if (!!window.EventSource) {
		//create a new event source
	  	var source = new EventSource("/events");
	  	//listen for data
	  	source.addEventListener('data', function(e) {
	  		//parse thge JSON message
	  		var data = JSON.parse(e.data);
	  		//if it's the last message, stop listening
	  		if(data.final) {
	  			source.close();
	  		}
	  		//output the data and timestamp
	  		$("#content").append(data.time + "&nbsp;&mdash;&nbsp;" + data.data + "<br />");
	  	}, false);

	  	//listen for error
	  	source.addEventListener('error', function(e) {
			if (e.readyState == EventSource.CLOSED) {
    			$("#content").append("<b>Connection was closed.</b><br />");
		  	}
		  	else {
	  			$("#content").append("<b>Error occured</b><br />");
		  	}
		}, false);
	}
	else {
	  	// Result to xhr polling :(
	}
});