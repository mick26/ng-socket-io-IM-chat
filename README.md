# Angular Socket.IO IM Chat App

This App is based on [Brian Fords instant messaging app](https://github.com/btford/angular-socket-io-im).
[See Brian's Blog for details of his App](http://briantford.com/blog/angular-socket-io.html).

Web Sockets are used to add real-time Messaging functionality.


## App Specifics

* This App does not use Jade
* All views rendered by the Angular client
* Latest version of all packages used (Express v4.x.x, Socket.io v1.x.x etc)
* Responsive design using Bootstrap v3 & JQuery
* Improved GUI


## Running the App

- clone the repository
- npm install
- bower install
- node server.js
- 'http://localhost:1100'


Note if you wish to run the App on a different port you will need to edit the following line contained in services.js:

<pre>var socket = io.connect("http://localhost:1100/");</pre>



<hr>

Michael Cullen 2014

