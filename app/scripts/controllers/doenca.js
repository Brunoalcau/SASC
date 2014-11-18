'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:DoencaCtrl
 * @description
 * # DoencaCtrl
 * Controller of the sascApp
 */
var DoencaCtrl = angular.module('sascApp')
  .controller('DoencaCtrl', function ($scope,$modal,doc,$rootScope) {
    $scope.alerts = [];


    var opts = {
        templateUrl: 'views/cadastrodoenca.html',
        controller: 'CadastrodoencaCtrl'
      };

    $scope.$on('atualizarListaDoenca',function(){
		$scope.getListDoenca();
		addListAlerts();
  	});

  	function addListAlerts(){
  		$scope.alerts.push({
  			type:'success',
  			msg:'Doença salva com sucesso!'
  		});
  	}
  	$scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
  	};


  //TODO: Verificar como criar directiva para facilitar criacao de modal
	  $scope.openDialog = function(id){
	  	var dial = $modal.open({
       		 templateUrl: 'views/cadastrodoenca.html',
        	 controller: 'CadastrodoencaCtrl',
        	 resolve : {
        	 	idDoc : function(){
        	 		return id;
        	 		}
        	 	}
      		});
	  };

	  $scope.getListDoenca = function(){
	  	doc.getList('doencas').then(success,error);		
	  }

	  function success(response){
	  	$scope.doencas = response.data.rows;
	  }
	  function error(response){

	  }

	  $scope.deletar = function (idDoc) {
	  	doc.getDoc(idDoc).then(function(res){

	  	});
	  }
	  $scope.getListDoenca();
  });

 DoencaCtrl.$injector = ['$scope','$modal','doc'];
