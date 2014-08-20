'use strict';

/*
 * Module - for Directives
 */
angular.module('myApp.directives', [])


/* Directives */

.directive('appVersion', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
