
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/events', function(req, res) {
	//prepare header
	res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
	res.write(':' + Array(2049).join(' ') + '\n'); //2kb padding for IE

	//clear interval when the client stops listening
	res.on('close', function() {
		clearInterval(interval);
		console.log("Client stopped listening");
	});

	//send a message containing current time and data (random number) every 3 seconds
	var counter = 0,
	interval = setInterval(function() {
		counter += 1;
		//data object to be returned
	  	var data = {
			id: counter,
			data: Math.floor(Math.random() * 1000000).toString(),
			time: (new Date()).toLocaleTimeString(),
			final: false
	  	};

	  	//after 10 messages, send final message and zero the counter
	  	if(counter > 10) {
			clearInterval(interval);
			data.final = true;
			data.data = "the end";
			counter = 0;
	  	}
	  	//convert message to string
	  	data = JSON.stringify(data);
	  	console.log(data);

	  	//send message back
    	res.write('id: ' + counter + '\n');
	  	res.write('event: data\n');
	  	res.write('data: ' + data + '\n\n');
	}, 3000);
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("SSE listening on port " + app.get('port'));
});
