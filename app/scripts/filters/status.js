'use strict';

/**
 * @ngdoc filter
 * @name sascApp.filter:status
 * @function
 * @description
 * # status
 * Filter in the sascApp.
 */
angular.module('sascApp')
	.filter('status', function() {
		return function(status) {
			return status ? 'Ativado' : 'Desativado';
		};
	});