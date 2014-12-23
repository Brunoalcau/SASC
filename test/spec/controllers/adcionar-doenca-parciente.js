'use strict';

describe('Controller: AdcionarDoencaParcienteCtrl', function () {

  // load the controller's module
  beforeEach(module('sascApp'));

  var AdcionarDoencaParcienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdcionarDoencaParcienteCtrl = $controller('AdcionarDoencaParcienteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
