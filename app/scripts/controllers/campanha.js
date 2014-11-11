'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CampanhaCtrl
 * @description
 * # CampanhaCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('CampanhaCtrl', function ($scope,$modal) {
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
  });
