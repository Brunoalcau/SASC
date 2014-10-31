'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
