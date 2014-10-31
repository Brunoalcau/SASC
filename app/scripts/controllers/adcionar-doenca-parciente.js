'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:AdcionarDoencaParcienteCtrl
 * @description
 * # AdcionarDoencaParcienteCtrl
 * Controller of the sascApp
 */
var AdcionarDoencaParcienteCtrl = angular.module('sascApp')
  .controller('AdcionarDoencaParcienteCtrl', function ($scope,doc,_) {
    $scope.listarTodasDoencas = function(){
    	function success(res){
    		$scope.doencas = res.data.rows;
    		console.log(res.data.rows);
    	};
    	function error (res){
    		console.log(res);
    	};
    	doc.getList('doencas').then(success,error);
    };
    $scope.listarTodasDoencas();

    $scope.addDoencaParciente = function(doenca){
    	console.log(doenca);
    }

  });
AdcionarDoencaParcienteCtrl.$injector = ['$scope','doc','_'];