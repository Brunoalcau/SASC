'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:DoencaCtrl
 * @description
 * # DoencaCtrl
 * Controller of the sascApp
 */
var DoencaCtrl = angular.module('sascApp')
  .controller('DoencaCtrl', function ($scope,$modal,doc) {
    var opts = {
        templateUrl: 'views/cadastrodoenca.html',
        controller: 'CadastrodoencaCtrl'
      };

    $scope.$on('atualizarListaDoenca',function(){
		$scope.getListDoenca();
  	});


  //TODO: Verificar como criar directiva para facilitar criacao de modal
	  $scope.openDialog = function(){
	  	var dial = $modal.open(opts);
	  };

	  $scope.getListDoenca = function(){
	  	doc.getList('doencas').then(success,error);		
	  }

	  function success(response){
	  	$scope.doencas = response.data.rows;
	  }
	  function error(response){

	  }
	  $scope.getListDoenca();
  });

 DoencaCtrl.$injector = ['$scope','$modal','doc'];
