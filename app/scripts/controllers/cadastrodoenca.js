'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastrodoencaCtrl
 * @description
 * # CadastrodoencaCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('CadastrodoencaCtrl', function($scope, $modalInstance, $rootScope, doc, idDoc) {

    $scope.close = function() {
      $modalInstance.close();
    };

    function listaDoenca() {
      $rootScope.$broadcast('atualizarListaDoenca');
    }

    $scope.salvar = function() {
      function sucesso() {
        listaDoenca();
        $scope.close();
      }

      function error() {

      }
      $scope.doenca.tipoDocumento = 'D';
      console.log($scope.doenca);
      // $scope.doenca.situacao = $scope.doenca.situacao.id; 
      doc.cadastrar($scope.doenca).then(sucesso, error);
    };

    function getDoencaEdit() {
      if (idDoc) {
        doc.getDoc(idDoc).then(function(res) {
          $scope.doenca = res.data;
        });
      }
    }

    getDoencaEdit();
  });