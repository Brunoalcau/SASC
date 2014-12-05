'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:CadastrocampanhaCtrl
 * @description
 * # CadastrocampanhaCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
	.controller('CadastrocampanhaCtrl', function($scope, doc, $rootScope, $modalInstance, idDoc) {


		$scope.campanha = {
			pacientes : [],
			situacao : 'NOVO',
			tipoDocumento : 'C'
		};


		$scope.salvar = function() {
			montarCampanha()
				.then(salvarDocumentoCampanhaCompleto);
		};

		function salvarDocumentoCampanhaCompleto() {
			var salvarSuccess = function() {
				listarTodasCampanhas();
				$scope.close();
			};
			doc.cadastrar($scope.campanha).then(salvarSuccess);
		}

		function listarDoencasNoDowndownList() {
			function successCallBackListaDoenca(res) {
				$scope.doencas = res.data.rows;
			}
			doc.getList('doencas').then(successCallBackListaDoenca);
		}

		$scope.close = function() {
			$modalInstance.close();
		};

		function listarTodasCampanhas() {
			$rootScope.$broadcast('atualizarListaCampanha');
		}


		function montarCampanha() {
			var existeDoencaNoPaciente,
				pacienteJaFoiListado;

			function successMontarCampanha(res) {
				_.each(res.data.rows, function(paciente) {
					existeDoencaNoPaciente = _.contains(paciente.value, $scope.campanha.doenca);
					pacienteJaFoiListado = verificarSeExistePacienteNaCampanha($scope.campanha.pacientes, paciente, paciente.id);
					if (existeDoencaNoPaciente && !pacienteJaFoiListado) {
						$scope.campanha.pacientes.push({
							id: paciente.id,
							situacao: 'NOVO'
						});
					}
				});


				function verificarSeExistePacienteNaCampanha(listaPacienteCadastradoNaCampanha, pacienteParaCadastrar) {
					var pacientesCadastrados = _.groupBy(listaPacienteCadastradoNaCampanha, 'id'),
						idPacienteCadastrados = _.keys(pacientesCadastrados);
					return _.contains(idPacienteCadastrados, pacienteParaCadastrar.id);

				}
			}
			return doc.getPacientesAtivos().then(successMontarCampanha);
		}

		function getCampanhaEdit() {
			if (idDoc) {
				doc.getDoc(idDoc).then(function(res) {
					$scope.campanha = res.data;
				});
			}
		}
		getCampanhaEdit();
		listarDoencasNoDowndownList();

	});