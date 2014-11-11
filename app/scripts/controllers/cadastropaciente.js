'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastroparcienteCtrl
 * @description
 * # CadastroparcienteCtrl
 * Controller of the sascApp
 */
var CadastropacienteCtrl = angular.module('sascApp')
  .controller('CadastropacienteCtrl', function ($scope,$modalInstance,$rootScope,doc,idDoc) {

    $scope.parciente = null;
  	$scope.dataNascimento = new Date();
  	$scope.sexo = [
  		{id:1, label:'Masculino'},
  		{id:2,label:'Feminino'}
  	];

  	$scope.addListaPaciente = function(){
		  $rootScope.$broadcast('atualizarLista');
	  }

  	$scope.salvar = function(){
  		$scope.paciente.tipoDocumento = 'P';
      $scope.paciente.doencas = [];
  		doc.cadastrar($scope.paciente).then(success,error);
  		$scope.addListaPaciente();
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

    function getPacienteEdit(){
      if(idDoc){
        doc.getDoc(idDoc).then(function(res){
          $scope.paciente = res.data;
        });
      }
    }
    getPacienteEdit();
    
  });
 CadastropacienteCtrl.$injector = ["$scope","$modalInstance","$rootScope", "doc"];
