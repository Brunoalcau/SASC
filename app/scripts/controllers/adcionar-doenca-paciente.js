'use strict';

/**
 * @ngdoc function
 * @name sascApp.controller:AdcionarDoencaParcienteCtrl
 * @description
 * # AdcionarDoencaParcienteCtrl
 * Controller of the sascApp
 */
var AdcionarDoencaPacienteCtrl = angular.module('sascApp')
  .controller('AdcionarDoencaPacienteCtrl', function ($scope,doc,_,$modalInstance,idDoc) {
    
    $scope.inicializarCarregamentoDadosDoPaciente = function(id){
        getPaciente(id).then(successParcienteCallBack)
        .then(getDoencasDoParciente)
        .then(listarTodasDoencas)
        .then(retirarDoencasQuePacientePossui);
    };

    function retirarDoencasQuePacientePossui(){
        _.each($scope.doencasDoPaciente,function(itemDoencaDoParciente){
           removerOneItemOfArray($scope.doencas,itemDoencaDoParciente); 
        }); 
    }


    function retirarUltimoCaractere(str){
        return str.substring(0,(str.length - 1))
    }

    function successParcienteCallBack(res){
        $scope.paciente = res.data;
    }
    
    function getDoencasDoParciente(){
        function getSuccessDoencasDoPaciente(responser){
            $scope.doencasDoPaciente = responser.data.rows;
        }
        return doc.getDoencasDoPaciente(formataQueryDoenca()).then(getSuccessDoencasDoPaciente);
    }

    function listarTodasDoencas(){
        function success(res){
            $scope.doencas = res.data.rows;
        };
        function error (res){
            console.log(res);
        };
        return doc.getList('doencas').then(success,error);
    };

    function  getDoencas(res){
        $scope.doencas = res.data.rows;
    }

    function getPaciente(id){
        return doc.getDoc(id);
    }

    $scope.addDoencaPacienteRemoveListaDoencas = function(doenca){
        addListaDoencaPaciente(doenca);
        unificarDoencas($scope.doencas,$scope.doencasDoPaciente);
        $scope.paciente.doencas.push(doenca.id);
        salvar();
    }

    function salvar(){
        doc.cadastrar($scope.paciente).then(function(){
            getPaciente($scope.paciente._id).then(successParcienteCallBack);
        });;   
    }

    $scope.removerListaPacienteAddListDoenca = function(item){
        addListaDoencas(item);
        removerOneItemOfArray($scope.doencasDoPaciente,item);    
        removerOneItemOfArray($scope.paciente.doencas,item.id);    
        salvar();
    }

    function addListaDoencaPaciente(item){
        if(item.value && item.value.tipoDocumento ==='D'){
            $scope.doencasDoPaciente.push(item);
        }
    }

    function addListaDoencas(item){
        if(item.value && item.value.tipoDocumento ==='D'){
            $scope.doencas.push(item);
        }
    }
    
    //TODO:Verificar um modo para colocar como um metodo de um array
    function removerOneItemOfArray(array,item){
        array.splice(_.indexOf(array,item),1);
    }

    function unificarDoencas(pacienteDoenca, doencas){
        $scope.doencas =  _.difference(pacienteDoenca,doencas);
    }
    //TODO:retirar do controller
    function formataQueryDoenca(){
        var doencas ="" ;
        _.each($scope.paciente.doencas,function(res){
            doencas += '"'+res+'",'
        });
        return '['+ retirarUltimoCaractere(doencas) +']';
    }

    $scope.close = function(){
        $modalInstance.close();
    }

    $scope.inicializarCarregamentoDadosDoPaciente(idDoc);

  });
AdcionarDoencaPacienteCtrl.$injector = ['$scope','doc','_','$modalInstance'];