'use strict';

/**
 * @ngdoc service
 * @name sascApp.doc
 * @description
 * # doc
 * Service in the sascApp.
 */
angular.module('sascApp')
  .service('doc',[ '$http', function doc($http) {
  	return {
  		cadastrar : function(parciente){
  			return $http.post('sasc',parciente);
  		},
  		getList : function(tipo){
  			return $http.get('/sasc/_design/app/_view/'+tipo);
  		},
      getGrupoDoencas : function(){
        return $http.get('/sasc/_design/doenca/_view/grupodoencas');
      }
  	}
  }]);
