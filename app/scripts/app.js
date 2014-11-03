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
      .when('/cadastroParciente', {
        templateUrl: 'views/cadastroparciente.html',
        controller: 'CadastroparcienteCtrl'
      })
      .when('/listarParciente', {
        templateUrl: 'views/listarparciente.html',
        controller: 'ListarparcienteCtrl'
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
      .when('/adcionar-doenca-parciente', {
        templateUrl: 'views/adcionar-doenca-parciente.html',
        controller: 'AdcionarDoencaParcienteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      angular.extend($datepickerProvider.defaults,{
        dateFormat:'dd/MM/yyyy',
        startWeek:1
      });
  });
