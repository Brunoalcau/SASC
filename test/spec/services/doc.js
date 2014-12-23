'use strict';

describe('Service: doc', function () {

  // load the service's module
  beforeEach(module('sascApp'));

  // instantiate service
  var doc;
  beforeEach(inject(function (_doc_) {
    doc = _doc_;
  }));

  it('should do something', function () {
    expect(!!doc).toBe(true);
  });

});
