'use strict';

describe('Controller: ListarparcienteCtrl', function () {

  // load the controller's module
  beforeEach(module('sascApp'));

  var ListarparcienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarparcienteCtrl = $controller('ListarparcienteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
