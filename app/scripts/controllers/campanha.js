'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CampanhaCtrl
 * @description
 * # CampanhaCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('CampanhaCtrl', function ($scope,$modal,doc) {
      $scope.openDialog = function(id){
	  	var dial = $modal.open({
       		 templateUrl: 'views/cadastrocampanha.html',
        	 controller: 'CadastrocampanhaCtrl',
        	 resolve : {
        	 	idDoc : function(){
        	 		return id;
        	 		}
        	 	}
      		});
		};
		$scope.$on('atualizarListaCampanha',function(){
			$scope.criarTabelaDeListaDeCampanha();
		});
		
		function listaDoenca(){
	 	  $rootScope.$broadcast('atualizarListaDoenca');
	  	}

		$scope.criarTabelaDeListaDeCampanha = function(){
	  		function success(response){
	  			$scope.campanhas = response.data.rows;
	  		}
			function error(response){

			}

  			doc.getList('campanhas').then(success,error);
	  	}
	  	$scope.criarTabelaDeListaDeCampanha();
  });
