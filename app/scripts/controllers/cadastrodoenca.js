'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastrodoencaCtrl
 * @description
 * # CadastrodoencaCtrl
 * Controller of the sascApp
 */
var CadastrodoencaCtrl = angular.module('sascApp')
  .controller('CadastrodoencaCtrl', function ($scope,$modalInstance,$rootScope,doc,idDoc) {

    getDoencaEdit();

    $scope.close = function(){
  		$modalInstance.close();
  	}

  	function listaDoenca(){
	 	  $rootScope.$broadcast('atualizarListaDoenca');
	  }

  	$scope.salvar = function(){
  		$scope.doenca.tipoDocumento = 'D';
      console.log($scope.doenca);
      // $scope.doenca.situacao = $scope.doenca.situacao.id; 
  		doc.cadastrar($scope.doenca).then(sucesso,error);
  	}

  	function sucesso(){
  		listaDoenca();
  		$scope.close();
  	}

  	function error(){

  	}

    function getDoencaEdit(){
      if(idDoc){
         doc.getDoc(idDoc).then(function(res){
          $scope.doenca = res.data;
        });
      }
    }
  });
CadastrodoencaCtrl.$injector = ['$scope','$modalInstance','$rootScope','doc']