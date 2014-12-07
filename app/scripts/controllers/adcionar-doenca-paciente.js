'use strict';
//TODO Bruno Cau: Fazer alteracao pois ta com bug
/**
 * @ngdoc function
 * @name sascApp.controller:AdcionarDoencaParcienteCtrl
 * @description
 * # AdcionarDoencaParcienteCtrl
 * Controller of the sascApp
 */
var AdcionarDoencaPacienteCtrl = angular.module('sascApp')
    .controller('AdcionarDoencaPacienteCtrl', function($scope, doc, _, $modalInstance, idDoc) {
        

        $scope.paciente;

        $scope.obter = {
            listarTodasDoencas:[],
            listarDoencaDoPaciente:[],
            listarDoencaDivergencia: []
        };

        function montarListasDeDoencas(){
            function recuperarObjetoDoencaDaLista(response){
               $scope.obter.listarTodasDoencas = _.pluck(response.data.rows,'value');
               diferenciaListaDoPacienteComListaDeTodasDoencas();
            }

            function adcionarDoenca (doenca) {
                $scope.obter.listarDoencaDivergencia.push(doenca);
            }

            function diferenciaListaDoPacienteComListaDeTodasDoencas () {
                var group = _.groupBy($scope.obter.listarTodasDoencas,'_id'),
                    key = _.keys(group),
                    diferente = _.difference(key,$scope.paciente.doencas);
                    colocarEmUmaListaDoenca(diferente,$scope.obter.listarTodasDoencas,$scope.obter.listarDoencaDivergencia);
            }

            return doc.getDocPorTipoDocumentoAndSituacao('D',true).then(recuperarObjetoDoencaDaLista);
        }

        var removerDoenca = function(array,object){
            return  _.without(array,object);
        }

        $scope.removerListaPacienteAddListDoenca = function(doenca){
            $scope.paciente.doencas = removerDoenca($scope.paciente.doencas,doenca._id);
            salvar(doenca).then(function(){
                $scope.obter.listarDoencaDoPaciente = removerDoenca($scope.obter.listarDoencaDoPaciente,doenca);
                $scope.obter.listarDoencaDivergencia.push(doenca);
            });
        }


        $scope.addDoencaPacienteRemoveListaDoencas = function (doenca) { 
            $scope.paciente.doencas.push(doenca._id);
            salvar(doenca).then(function(){
                $scope.obter.listarDoencaDivergencia = removerDoenca($scope.obter.listarDoencaDivergencia,doenca);
                $scope.obter.listarDoencaDoPaciente.push(doenca);
            });
        }

        var salvar = function(doenca){
            return doc.cadastrar($scope.paciente);
        }

        function recuperarPaciente(){
            function success(response){
                $scope.paciente = response.data;               
            }
           return doc.getDoc(idDoc).then(success);
        }

        function pesquisarArray (array, id) {
            return _.findWhere(array,{_id:id});
        }

        function recuperaDoencaPaciente () {
            colocarEmUmaListaDoenca($scope.paciente.doencas,$scope.obter.listarTodasDoencas,$scope.obter.listarDoencaDoPaciente);
        }

        function colocarEmUmaListaDoenca (arrayIdDoenca,lista,listaParaAddObject) {
            _.each(arrayIdDoenca,function (idDoenca) {
               addObjectInList(listaParaAddObject,pesquisarArray(lista,idDoenca));
            })
        }

        function addObjectInList (list,object) {
            if(object){
                list.push(object);
            }
        }

        function iniciarListas(){
            recuperarPaciente()
            .then(montarListasDeDoencas)
            .then(recuperaDoencaPaciente);
            // .then($scope.obter.diferenciaListaTodosDoencasEDoencasDoPaciente);
        }
        iniciarListas();
    });