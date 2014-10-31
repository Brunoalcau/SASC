'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastroparcienteCtrl
 * @description
 * # CadastroparcienteCtrl
 * Controller of the sascApp
 */
var CadastroparcienteCtrl = angular.module('sascApp')
  .controller('CadastroparcienteCtrl', function ($scope,$modalInstance,$rootScope,doc) {

    $scope.parciente = null;
  	$scope.dataNascimento = new Date();
  	$scope.sexo = [
  		{id:1, label:'Masculino'},
  		{id:2,label:'Feminino'}
  	];
  	$scope.situacoes = [
  		{id:1, label:'Ativado'},
  		{id:2,label:'Desativado'}
  	];

  	$scope.addListaParciente = function(){
		  $rootScope.$broadcast('atualizarLista');
	  }

  	$scope.salvar = function(){
  		$scope.parciente.tipoDocumento = 'P';
  		doc.cadastrar($scope.parciente).then(success,error);
  		$scope.addListaParciente();
  	}

  	function success(){
  		$scope.close();
  		$scope.parciente = null;
  	}

  	function error(response){
  		console.log(response);
  	}

  	$scope.addListaParciente = function(){
  		$rootScope.$broadcast('atualizarListaParciente');
  	}

  	$scope.close = function(){
  		$modalInstance.close();
  	}

    $scope.adcionarItensComboBox  = function(){
      function sucesso(response){
        console.log(response);
        // $scope.doencas = response.data.rows;
      }

      function erro(error){
        console.log(error);

      }
      doc.getGrupoDoencas().then(sucesso,erro);
    };
    $scope.adcionarItensComboBox();

  });
  CadastroparcienteCtrl.$injector = ["$scope","$modalInstance","$rootScope", "doc"];
