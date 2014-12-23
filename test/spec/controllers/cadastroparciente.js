'use strict';

describe('Controller: CadastroparcienteCtrl', function () {

  // load the controller's module
  beforeEach(module('sascApp'));

  var CadastroparcienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroparcienteCtrl = $controller('CadastroparcienteCtrl', {
      $scope: scope
    });
  }));
});
