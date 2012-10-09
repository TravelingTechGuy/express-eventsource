Demonstrating Server Side Evants using Node, Express and EventSource
====================================================================

This simple demo shows streaming events from server to client.

* The server [app.js](https://github.com/TravelingTechGuy/express-eventsource/blob/master/app.js) streams a list of 10 random numbers, one every 3 seconds, or until the client stops listening.
* The client [main.js](https://github.com/TravelingTechGuy/express-eventsource/blob/master/public/javascripts/main.js) listens to the stream, prints the results and stops listening after the file number is received.


Missing from the demo:
----------------------
Handling of IE or older browsers using XHR instead of EventSource