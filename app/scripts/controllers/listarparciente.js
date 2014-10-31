'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:ListarparcienteCtrl
 * @description
 * # ListarparcienteCtrl
 * Controller of the sascApp
 */
var ListarparcienteCtrl = angular.module('sascApp')
  .controller('ListarparcienteCtrl', function ($scope,$modal,doc) {

   	$scope.modal = {title: 'Cadastro de Parciente!'};

  	 var opts = {
        templateUrl: 'views/cadastroparciente.html',
        controller: 'CadastroparcienteCtrl'
      };
	  $scope.openDialog = function(){
      	var dial = $modal.open(opts);
      };

  	$scope.$on('atualizarListaParciente',function(){
  		console.log('Atualizar lista');
  	});

  	$scope.montarTabelaParciente = function(){
  		doc.getList('parcientes').then(success,error);
  	};

  	function success(responser){
  		console.log(responser);
  		$scope.parcientes = responser.data.rows;
  	}

  	function error(responser){
  		console.log(responser);
  	}
  	$scope.montarTabelaParciente();
   	
  });
 ListarparcienteCtrl.$injector = ['$scope','$modal','doc'];