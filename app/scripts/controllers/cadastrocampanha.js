'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastrocampanhaCtrl
 * @description
 * # CadastrocampanhaCtrl
 * Controller of the sascApp
 */
var CadastrocampanhaCtrl = angular.module('sascApp')
  .controller('CadastrocampanhaCtrl', function ($scope,doc,$rootScope,$modalInstance,idDoc) {
	

	$scope.salvar = function(){
		var success = function(){
			listaCampanha();
			$scope.close();
		};
		$scope.campanha.situacao = 'NOVO';
		$scope.campanha.tipoDocumento = 'C';
		 doc.cadastrar($scope.campanha).then(success);
	}
	function listarDoencasNoDowndownList(){
		function successCallBackListaDoenca(res){
			$scope.doencas = res.data.rows;
		}
		doc.getList('doencas').then(successCallBackListaDoenca);
	}
	
	listarDoencasNoDowndownList();

	$scope.close = function(){
  		$modalInstance.close();
  	}
  	function listaCampanha(){
		$rootScope.$broadcast('atualizarListaCampanha');
	}
	function getCampanhaEdit(){
      if(idDoc){
         doc.getDoc(idDoc).then(function(res){
          $scope.campanha = res.data;
        });
      }
    }
    getCampanhaEdit();

  });

