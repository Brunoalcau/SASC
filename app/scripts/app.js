'use strict';

/**
 * @ngdoc overview
 * @name sascApp
 * @description
 * # sascApp
 *
 * Main module of the application.
 */
angular
  .module('sascApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'ui.utils',
    'ngTable',
    'ui.grid',
    'smart-table',
    'formstamp',
    'ui.bootstrap',
    'angularjs-dropdown-multiselect',
    'underscore',
    'CornerCouch'
  ])
  .config(function ($routeProvider,$datepickerProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cadastroPaciente', {
        templateUrl: 'views/cadastropaciente.html',
        controller: 'CadastropacienteCtrl'
      })
      .when('/listarPaciente', {
        templateUrl: 'views/listarpaciente.html',
        controller: 'ListarpacienteCtrl'
      })
      .when('/doenca', {
        templateUrl: 'views/doenca.html',
        controller: 'DoencaCtrl'
      })
      .when('/cadastrodoenca:id', {
        templateUrl: 'views/cadastrodoenca.html',
        controller: 'CadastrodoencaCtrl'
      })
      .when('/cadastrodoenca', {
        templateUrl: 'views/cadastrodoenca.html',
        controller: 'CadastrodoencaCtrl'
      })
      .when('/adcionar-doenca-paciente', {
        templateUrl: 'views/adcionar-doenca-paciente.html',
        controller: 'AdcionarDoencaPacienteCtrl'
      })
      .when('/campanha', {
        templateUrl: 'views/campanha.html',
        controller: 'CampanhaCtrl'
      })
      .when('/cadastroCampanha', {
        templateUrl: 'views/cadastrocampanha.html',
        controller: 'CadastrocampanhaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // angular.extend($datepickerProvider.defaults,{
      //   dateFormat:'dd/MM/yyyy',
      //   startWeek:1
      // });
      // $scope.format = 'dd/MM/yyyy';
  });
