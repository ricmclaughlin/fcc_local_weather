(function () {
  'use strict';

  describe('controllers', function () {
    var vm;

    beforeEach(module('fccLocalWeather'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('MainController');
    }));

    it('should have a celsius and temp attribute', function () {
      expect(vm.celsius).not.toEqual(undefined);
      expect(vm.tempF).not.toEqual(undefined);
      expect(vm.tempC).not.toEqual(undefined);
      expect(vm.city).not.toEqual(undefined);
      expect(vm.country).not.toEqual(undefined);

    });

  });
})();

//describe('The Main Controller', () => {
//  let vm;
//
//  beforeEach(angular.mock.module('fccQuoteMachine'));
//
//  beforeEach(inject(($controller, quotes) => {
//    spyOn(quotes, 'getRandomQuote').and.callThrough();
//    vm = $controller('MainController');
//  }));
//  //  it('should be registered', () => {
//    expect(vm).not.toEqual(null);
//  });
//
//  it('should have a single quote', () => {
//    expect(vm.quote).toEqual(jasmine.any(Object));
//  });
//  //  it('should contain getDisplayQuote', () => {
//    expect(vm.getDisplayQuote).not.toEqual(null);
//  });
//
//  it('should call quotes.getDisplayQuote()', inject(quotes => {
//    vm.getDisplayQuote();
//    expect(quotes.getRandomQuote).toHaveBeenCalled();
//  }));
//
//  it('should have a quoteTweet String', () => {
//    expect(vm.quoteTweet).toEqual(jasmine.any(String));
//  });
//
//
//});
