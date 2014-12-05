'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:DoencaCtrl
 * @description
 * # DoencaCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('DoencaCtrl', function($scope, $modal, doc, $rootScope, modals) {
    $scope.alerts = [];


    $scope.$on('atualizarListaDoenca', function() {
      $scope.getListDoenca();
      addListAlerts();
    });

    function addListAlerts() {
      $scope.alerts.push({
        type: 'success',
        msg: 'Doença salva com sucesso!'
      });
    }


    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.openDialog = function(id) {
      modals.doencaDialog(id);
    };

    $scope.getListDoenca = function() {
      doc.getList('doencas').then(success, error);
    };

    function success(response) {
      $scope.doencas = response.data.rows;
    }

    function error() {

    }

    $scope.deletar = function(idDoc) {
      doc.getDoc(idDoc).then(function() {

      });
    };
    $scope.getListDoenca();
  });