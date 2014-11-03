'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastrodoencaCtrl
 * @description
 * # CadastrodoencaCtrl
 * Controller of the sascApp
 */
var CadastrodoencaCtrl = angular.module('sascApp')
  .controller('CadastrodoencaCtrl', function ($scope,$modalInstance,$rootScope,doc,$routeParams) {
    
    $scope.id = $routeParams.id;

    $scope.close = function(){
  		$modalInstance.close();
  	}

  	function listaDoenca(){
		$rootScope.$broadcast('atualizarListaDoenca');
	}

  	$scope.salvar = function(){
  		$scope.doenca.tipoDocumento = 'D';
  		doc.cadastrar($scope.doenca).then(sucesso,error);
  	}

  	function sucesso(){
  		listaDoenca();
  		$scope.close();
  	}

  	function error(){

  	}
  });
CadastrodoencaCtrl.$injector = ['$scope','$modalInstance','$rootScope','doc']