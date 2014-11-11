'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastrocampanhaCtrl
 * @description
 * # CadastrocampanhaCtrl
 * Controller of the sascApp
 */
var CadastrocampanhaCtrl = angular.module('sascApp')
  .controller('CadastrocampanhaCtrl', function ($scope,doc) {
	$scope.salvar = function(){
		$scope.campanha.situacao = 'NOVO';
		$scope.campanha.tipoDocumento = 'C';
		doc.cadastrar($scope.campanha);
	}
	function listarDoencasNoDowndownList(){
		function successCallBackListaDoenca(res){
			$scope.doencas = res.data.rows;
		}
		doc.getList('doencas').then(successCallBackListaDoenca);
	}
	listarDoencasNoDowndownList();

  });

