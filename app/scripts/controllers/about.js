'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
