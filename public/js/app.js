'use strict';


// Declare app level module which depends on filters, and services
//var app = angular.module('myApp', ['myApp.filters', 'myApp.directives', 'btford.socket-io']);


// in the top-level module of the app

//angular.module('myApp', ['btford.socket-io', 'myApp.services', 'myApp.filters', 'myApp.directives', 'myApp.controllers'])

angular.module('myApp', ['ngRoute' , 'myApp.services', 'myApp.filters', 'myApp.directives', 'myApp.controllers'] );

/*
This module exposes a socketFactory, which is an API for 
instantiating sockets that are integrated with Angular's digest cycle
*/
//Can inject your mySocket service into controllers and other 
//services within your application! 
/*
.factory('mySocket', function (socketFactory) {
  return socketFactory();
});
*/