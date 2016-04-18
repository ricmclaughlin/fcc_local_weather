(function () {
  'use strict';

  describe('controllers', function () {
    var vm;
    //beforeEach(angular.mock.module('fccQuoteMachine'));
    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function (_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should be registered', function () {
      expect(vm).not.toEqual(null);
    });

    it('should have a location attribute', function () {
      expect(vm.location).toEqual(jasmine.any(Object));
    });

    it('should contain activate', function () {
      expect(vm.activate).not.toEqual(null);
    });

  });
})();
