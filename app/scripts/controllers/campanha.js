'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CampanhaCtrl
 * @description
 * # CampanhaCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
	.controller('CampanhaCtrl', function($scope, $modal, doc, modals) {

		$scope.alerts = [];

		function addListAlerts() {
			$scope.alerts.push({
				type: 'success',
				msg: 'Campanha salva com sucesso!'
			});
		}

		$scope.openDialog = function(id) {
			modals.campanhaDialog(id);
		};
		$scope.$on('atualizarListaCampanha', function() {
			$scope.criarTabelaDeListaDeCampanha();
			addListAlerts();
		});

		$scope.criarTabelaDeListaDeCampanha = function() {
			function success(response) {
				$scope.campanhas = response.data.rows;
			}

			function error() {

			}
			doc.getList('campanhas').then(success, error);
		};
		$scope.criarTabelaDeListaDeCampanha();
	});