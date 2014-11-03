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
    var db = cornercouch().getDB('sasc'),
    function documentoCouchDb (noDoc) {
        if(noDoc){
          db.newDoc(noDoc);
        } else{
          db.newDoc();
        }
    };
    return {
  		cadastrar : function(parciente){
  			return $http.post('sasc',parciente);
  		},
  		getList : function(tipo){
  			return $http.get('/sasc/_design/app/_view/'+tipo);
  		},
      getGrupoDoencas : function(){
        return $http.get('/sasc/_design/doenca/_view/grupodoencas');
      },
      deleteDoc : function (doc) {
        
      },getDoc : function(doc){
        return documentoCouchDb().load(doc.id);
      }
  	}
        }
  }]);
