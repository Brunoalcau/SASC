'use strict';

/**
 * @ngdoc service
 * @name sascApp.doc
 * @description
 * # doc
 * Service in the sascApp.
 */
angular.module('sascApp')
  .service('doc', ['$http', 'cornercouch', function doc($http, cornercouch) {
    var db = cornercouch().getDB('sasc');
    return {
      cadastrar: function(parciente) {
        return $http.post('sasc', parciente).then(function(response){ 
          parciente._rev = response.data.rev;
        });
      },
      atualizar: function(data) {
        console.log(data);
        return $http.put('sasc', data);
      },
      getList: function(tipo) {
        return $http.get('/sasc/_design/app/_view/' + tipo);
      },
      getGrupoDoencas: function() {
        return $http.get('/sasc/_design/doenca/_view/grupodoencas');
      },
      getDoc: function(id) {
        return db.newDoc().load(id);
      },
      getDocPorTipoDocumentoAndSituacao: function(tipoDocumento,situacao) {
        return db.query('app','docTipoPorSituacao',{key:[tipoDocumento,situacao]});
      },
      removeDoc: function(id) {
        db.newDoc().load(id).remove();
      },
      getDoencasDoPaciente: function(keys) {
        return $http.get('sasc/_design/app/_view/doencas?keys=' + keys);
      },
      getPacientesAtivos: function() {
        return $http.get('sasc/_design/app/_view/parcientePorSituacao?key=true');
      }
    };
  }]);