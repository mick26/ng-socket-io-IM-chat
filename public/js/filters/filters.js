'use strict';


/*
 * Module - for Filters
 */
angular.module('myApp.filters', [])


/* Filters */

.filter('interpolate', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  });
