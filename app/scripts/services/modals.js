'use strict';

/**
 * @ngdoc service
 * @name sascApp.modals
 * @description
 * # modals
 * Service in the sascApp.
 */
angular.module('sascApp')
	.service('modals', function modals($modal) {
		return {
			doencaDialog: function(id) {
				$modal.open({
					templateUrl: 'views/cadastrodoenca.html',
					controller: 'CadastrodoencaCtrl',
					resolve: {
						idDoc: function() {
							return id;
						}
					}
				});
			},
			pacienteDialog: function(id) {
				$modal.open({
					templateUrl: 'views/cadastropaciente.html',
					controller: 'CadastropacienteCtrl',
					resolve: {
						idDoc: function() {
							return id;
						}
					}
				});
			},
			pacientePorDoenca: function(id) {
				$modal.open({
					templateUrl: 'views/adcionar-doenca-paciente.html',
					controller: 'AdcionarDoencaPacienteCtrl',
					size: 'lg',
					resolve: {
						idDoc: function() {
							return id;
						}
					}
				});
			},
			campanhaDialog: function(id) {
				$modal.open({
					templateUrl: 'views/cadastrocampanha.html',
					controller: 'CadastrocampanhaCtrl',
					resolve: {
						idDoc: function() {
							return id;
						}
					}
				});
			}
		};
	});