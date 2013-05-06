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
+ Support for IE (in progress - read on)


IE Support
----------
Since IE (at least up to version 9) does not support EventSource, I'm trying to use this [polyfill by Yaffle](https://github.com/Yaffle/EventSource).
I've used Modernizr to bootstrap it when needed (and found out I need to bootstrap the test into Modernizr :) ).
It requires some server-side changes:

1. The event name and the way it's added
2. Response headers
3. An additional 2k padding at the top of the header - apparently necessary

Right now, it still doesn't work in IE - I'll update the repo when I find a solution. 

Ingredients
-----------
###Client side:
+ [http://www.jquery.com](jQuery)
+ [https://github.com/Yaffle/EventSource](EventSource polyfill) by Yaffle
+ [http://modernizr.com](Modernizr) - bootstrapping the polyfill (could do it in one line, but was included in Boilerplate)
+ [http://html5boilerplate.com/](HTML5 Bolierplate)
+ [http://codepen.io/jkempff/pen/Iimhb](Wrapidify) by Ju Kempff
                
###Server side:
+ [http://www.nodejs.org](Node.js)
+ [http://expressjs.com/](Express)
