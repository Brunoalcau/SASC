'use strict';

/**
 * @ngdoc service
 * @name sascApp.doc
 * @description
 * # doc
 * Service in the sascApp.
 */
angular.module('sascApp')
  .service('doc',[ '$http','cornercouch', function doc($http,cornercouch) {
    var db = cornercouch().getDB('sasc');
    return {
  		cadastrar : function(parciente){
  			return $http.post('sasc',parciente);
  		},
      atualizar : function(data){
        return $http.put('sasc',data);
      },
  		getList : function(tipo){
  			return $http.get('/sasc/_design/app/_view/'+tipo);
  		},  
      getGrupoDoencas : function(){
        return $http.get('/sasc/_design/doenca/_view/grupodoencas');
      },
      deleteDoc : function (doc) {
        
      },getDoc : function(id){
        return db.newDoc().load(id);
      },
      removeDoc : function(id){
          db.newDoc().load(id).remove();
      },
      getDoencasDoPaciente:function(keys){
        return $http.get('sasc/_design/app/_view/doencas?keys='+keys);
      }
  	}
  }]);
