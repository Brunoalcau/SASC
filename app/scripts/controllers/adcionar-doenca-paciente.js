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
        $scope.obter = {
            listarTodasDoencas:[],
            listarDoencaDoPaciente:[],
            diferenciaListaTodosDoencasEDoencasDoPaciente: function(){
                var difference = _.difference($scope.obter.listarTodasDoencas,$scope.obter.listarDoencaDoPaciente);    
                // var keys = _.groupBy($scope.obter.listarTodasDoencas,'_id'),
                //     grurpkeys = _.groupBy($scope.obter.listarDoencaDoPaciente,'_id');
                // var teste = _.difference(keys,grurpkeys);
                console.log(difference);
                // console.log(grurpkeys);
            }
        };

        function montarListaDeDoencas(){
            function adicionarNaListaTodasDoencas(doenca){
                $scope.obter.listarTodasDoencas.push(doenca);
            }

            function recuperarObjetoDoencaDaLista(response){
               $scope.obter.listarTodasDoencas = _.pluck(response.data.rows,'value');
            }

            return doc.getDocPorTipoDocumentoAndSituacao('D',true).then(recuperarObjetoDoencaDaLista);
        }

        function montarListaDasDoencasDoPaciente(){
            function adcionarDoenca(response){
                $scope.obter.listarDoencaDoPaciente.push(response.data);
            }
            //TODO: modificar o nome da function
            function percorreDoencaDoPaciente(response){
                _.each(response.data.doencas,function(idDoenca){
                    recuperarDoencaPaciente(idDoenca);
                });
            }

            function recuperarDoencaPaciente(idDoenca){
                doc.getDoc(idDoenca).then(adcionarDoenca);
            }

           return doc.getDoc(idDoc).then(percorreDoencaDoPaciente);
        }

        function iniciarListas(){
            montarListaDasDoencasDoPaciente()
            .then(montarListaDeDoencas)
            .then($scope.obter.diferenciaListaTodosDoencasEDoencasDoPaciente);
        }
        iniciarListas();
    });