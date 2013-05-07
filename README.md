Server Side Events using Node, Express and EventSource
======================================================

This simple demo shows streaming events from server to client, using EventSource.

* The server ([app.js](https://github.com/TravelingTechGuy/express-eventsource/blob/master/app.js)) streams a list of 10 random numbers, one every 3 seconds, or until the client stops listening.
* The client ([main.js](https://github.com/TravelingTechGuy/express-eventsource/blob/master/public/javascripts/main.js)) listens to the stream, prints the results and stops listening after the last number has been received.


Install
-------
You may need to install some missing modules with [npm](http://npmjs.org/)

Once node and npm are installed, you can checkout the source and install the missing modules:

	$ git clone https://github.com/TravelingTechGuy/express-eventsource.git
	$ cd ./express-eventsource
	$ npm install
	$ node app

Now, browse to your localhost (ie: [http://localhost:3000](http://localhost:3000)) in your web browser.

Online demo
-----------
An online demo is available on Heroku at [http://express-eventsource.herokuapp.com/](http://express-eventsource.herokuapp.com/)

Missing from the demo:
----------------------
+ Proper error handling
+ Tests
+ Grunt project

IE Support
----------
Since IE (at least up to version 9) does not support EventSource, I'm using this [polyfill by Yaffle](https://github.com/Yaffle/EventSource).
I've used Modernizr to bootstrap it when needed (and found out I need to bootstrap the test into Modernizr :) ).
It requires some server-side changes:

1. The event name and the way it's added
2. Response headers
3. An additional 2k padding at the top of the header - apparently necessary

Ingredients
-----------
###Client side:
+ [jQuery](http://www.jquery.com)
+ [EventSource polyfill](https://github.com/Yaffle/EventSource) by Yaffle
+ [Modernizr](http://modernizr.com) - bootstrapping the polyfill
+ [HTML5 Bolierplate](http://html5boilerplate.com/)
+ [Wrapidify](http://codepen.io/jkempff/pen/Iimhb) by Ju Kempff - page design
                
###Server side:
+ [Node.js](http://www.nodejs.org)
+ [Express](http://expressjs.com/)
