'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:ListarparcienteCtrl
 * @description
 * # ListarparcienteCtrl
 * Controller of the sascApp
 */
var ListarpacienteCtrl = angular.module('sascApp')
  .controller('ListarpacienteCtrl', function($scope, $modal, doc, modals) {

    $scope.modal = {
      title: 'Cadastro de Parciente!'
    };

    $scope.alerts = [];

    function addAlertSuccess() {
      $scope.alerts = [];
      $scope.alerts.push({
        type: 'success',
        msg: 'Paciente salvo com sucesso!'
      });
    }

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.openDialog = function(id) {
      modals.pacienteDialog(id);
    };

    $scope.openDialogDoencas = function(id) {
      modals.pacientePorDoenca(id);
    };

    $scope.$on('atualizarListaParciente', function() {
      $scope.montarTabelaParciente();
      addAlertSuccess();
    });

    $scope.montarTabelaParciente = function() {
      doc.getList('parcientes').then(success, error);
    };

    function success(responser) {
      console.log(responser);
      $scope.parcientes = responser.data.rows;
    }

    function error(responser) {
      console.log(responser);
    }
    $scope.montarTabelaParciente();


  });
ListarpacienteCtrl.$injector = ['$scope', '$modal', 'doc'];