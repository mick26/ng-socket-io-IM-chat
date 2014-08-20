'use strict';


/**
 * Module - for controllers
 */
angular.module('myApp.controllers', [] )

/** 
 * Controllers 
 */

.controller('MyCtrl', function ($scope, socket) {
    $scope.$on('socket:error', function (ev, data) {

    });
})


//
// Socket listeners
// ================
.controller('AppCtrl', function ($scope, socket) {

	//$scope.peopleCount = 0;	//ADDED
//	$scope.users=;
	//$scope.peopleCount = $scope.users.length;	//ADDED
	
	  $scope.typingPeople = [];
  var typing = false;
  var timeout  = undefined;

  socket.on('init', function (data) {
    $scope.name = data.name;
    $scope.users = data.users;
	
  });

  socket.on('send:message', function (message) {
    $scope.messages.push(message);
  });

  socket.on('change:name', function (data) {
    changeName(data.oldName, data.newName);
  });

  socket.on('user:join', function (data) {
    $scope.messages.push({
      user: 'chatroom',
      text: 'User ' + data.name + ' has joined.'
    });
    $scope.users.push(data.name);
	
	
  });

  // add a message to the conversation when a user disconnects or leaves the room
  socket.on('user:left', function (data) {
  
	$scope.peopleCount = $scope.peopleCount -1;	//ADDED  
    
	$scope.messages.push({
      user: 'chatroom',
      text: 'User ' + data.name + ' has left.'
    });
	
    var i;
	var user;
    for (i = 0; i < $scope.users.length; i++) {
      user = $scope.users[i];

      if (user === data.name) {
        $scope.users.splice(i, 1);
        break;
      }
    }
	//$scope.peopleCount = $scope.users.length;	//ADDED
  })

  // Private helpers
  // ===============

  var changeName = function (oldName, newName) {
    // rename user in list of users
    var i;
    for (i = 0; i < $scope.users.length; i++) {
      if ($scope.users[i] === oldName) {
        $scope.users[i] = newName;
      }
    }

    $scope.messages.push({
      user: 'chatroom',
      text: 'User ' + oldName + ' is now known as ' + newName + '.'
    });
  }



  // Methods published to the scope
  // ==============================

  $scope.changeName = function () {
    socket.emit('change:name', {
      name: $scope.newName
    }, function (result) {
      if (!result) {
        alert('There was an error changing your name');
      } else {
        
        changeName($scope.name, $scope.newName);

        $scope.name = $scope.newName;
        $scope.newName = '';
      }
    });
  };

  $scope.messages = [];

  $scope.sendMessage = function () {
    socket.emit('send:message', {
      message: $scope.message
    });

    // add the message to our model locally
    $scope.messages.push({
      user: $scope.name,
      text: $scope.message
    });

    // clear message box
    $scope.message = '';
  };
  
  
  
  
  
  
  
  
/*  
  function timeoutFunction() {
    typing = false;
    socket.emit('typing', false);
  }

  $scope.focus = function(bool) {
    $scope.focussed = bool;
  }

  $scope.typing = function(event) {
    if (event.which !== 13) {
      if ($scope.typing === false && $scope.focussed) {
        typing = true;
        socket.emit('typing', true);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(timeoutFunction, 1000);
      }
    }
  }

  socket.on('isTyping', function(data) {
    if (data.isTyping) {
      $scope.isTyping = data.isTyping;
      $scope.typingPeople.push(data.person);
    } else {
      $scope.isTyping = data.isTyping;
      var index = $scope.typingPeople.indexOf(data.person);
      $scope.typingPeople.splice(index, 1);
      $scope.typingMessage = '';
    }
  });
*/

});