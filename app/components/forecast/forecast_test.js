'use strict';

describe('myApp.forecast module', function() {
  beforeEach(module('myApp.forecast'));

  describe('forecast service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
