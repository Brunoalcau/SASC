'use strict';
//TODO Bruno Cau: Fazer alteracao pois ta com bug
/**
 * @ngdoc function
 * @name sascApp.controller:AdcionarDoencaParcienteCtrl
 * @description
 * # AdcionarDoencaParcienteCtrl
 * Controller of the sascApp
 */
angular.module('sascApp')
  .controller('AdcionarDoencaPacienteCtrl', function($scope, doc, _, $modalInstance, idDoc) {

    var config = {};
    $scope.obter = {
      listarTodasDoencas: [],
      listarDoencaDoPaciente: [],
      listarDoencaDivergencia: []
    };

    function montarListasDeDoencas(teste) {
      console.log(teste);
      function recuperarObjetoDoencaDaLista(response) {
        $scope.obter.listarTodasDoencas = _.pluck(response.data.rows, 'value');
        diferenciaListaDoPacienteComListaDeTodasDoencas();
      }

      function diferenciaListaDoPacienteComListaDeTodasDoencas() {
        var group = _.groupBy($scope.obter.listarTodasDoencas, '_id'),
          key = _.keys(group),
          diferente = _.difference(key, $scope.paciente.doencas);
        colocarEmUmaListaDoenca(diferente, $scope.obter.listarTodasDoencas, $scope.obter.listarDoencaDivergencia);
      }

      return doc.getDocPorTipoDocumentoAndSituacao('D', true).then(recuperarObjetoDoencaDaLista);
    }

    var removerDoenca = function(array, object) {
      return _.without(array, object);
    };

    //TODO: criar um metodo onde posso remover e adcionar.
    $scope.removerListaPacienteAddListDoenca = function(doenca) {
      $scope.paciente.doencas = removerDoenca($scope.paciente.doencas, doenca._id);
      salvar(doenca).then(function() {
        $scope.obter.listarDoencaDoPaciente = removerDoenca($scope.obter.listarDoencaDoPaciente, doenca);
        $scope.obter.listarDoencaDivergencia.push(doenca);
      });
    };


    $scope.addDoencaPacienteRemoveListaDoencas = function(doenca) {
      $scope.paciente.doencas.push(doenca._id);
      salvar(doenca).then(function() {
        $scope.obter.listarDoencaDivergencia = removerDoenca($scope.obter.listarDoencaDivergencia, doenca);
        $scope.obter.listarDoencaDoPaciente.push(doenca);
      });
    };

    var salvar = function() {
      return doc.cadastrar($scope.paciente);
    };

    function recuperarPaciente(config) {
      function success(response) {
        $scope.paciente = response.data;
        config.data = response.data;
      }
      return doc.getDoc(idDoc).then(success);
    }
    //TODO: passar como argumento
    function pesquisarArray(array, id) {
      return _.findWhere(array, {
        _id: id
      });
    }

    function recuperaDoencaPaciente() {
      colocarEmUmaListaDoenca($scope.paciente.doencas, $scope.obter.listarTodasDoencas, $scope.obter.listarDoencaDoPaciente);
    }

    /*
    */
    //TODO: Criar um objeto para passar no argumento
    function colocarEmUmaListaDoenca(arrayIdDoenca, lista, listaParaAddObject) {
      _.each(arrayIdDoenca, function(idDoenca) {
        addObjectInList(listaParaAddObject, pesquisarArray(lista, idDoenca));
      });
    }
    //TODO: Criar um objeto que possar passar no argumento
    function addObjectInList(list, object) {
      if (object) {
        list.push(object);
      }
    }

    (function() {
      recuperarPaciente(config)
        .then(montarListasDeDoencas) //recuperarTodosDados
        .then(recuperaDoencaPaciente);
    })();
    // iniciarListas();
  });