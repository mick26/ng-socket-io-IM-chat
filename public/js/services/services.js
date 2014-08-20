'use strict';


/*======================================================
Module - for services
======================================================*/
angular.module('myApp.services', [])
/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
.factory('socket', function ($rootScope) {
  
  var socket = io.connect("http://localhost:1100/");
  
  return {
  
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
  
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});

